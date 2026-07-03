import sharp from "sharp";

const input = process.argv[2];
const output = process.argv[3];

if (!input || !output) {
  console.error("Usage: node scripts/process-bom-hero-art.mjs <input> <output>");
  process.exit(1);
}

const { data, info } = await sharp(input).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
const { width, height, channels } = info;
const pixels = Uint8ClampedArray.from(data);
const visited = new Uint8Array(width * height);
const queue = [];

const idx = (x, y) => (y * width + x) * channels;
const alphaAt = (x, y) => {
  if (x < 0 || y < 0 || x >= width || y >= height) return 0;
  return pixels[idx(x, y) + 3];
};

const corner = idx(0, 0);
const bgR = pixels[corner];
const bgG = pixels[corner + 1];
const bgB = pixels[corner + 2];
const bgLuma = (bgR + bgG + bgB) / 3;
const isDarkBackground = bgLuma < 80;

const colorDistance = (r, g, b) => {
  const dr = r - bgR;
  const dg = g - bgG;
  const db = b - bgB;
  return Math.sqrt(dr * dr + dg * dg + db * db);
};

const saturation = (r, g, b) => {
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  return max - min;
};

const clearPixel = (i) => {
  pixels[i] = 0;
  pixels[i + 1] = 0;
  pixels[i + 2] = 0;
  pixels[i + 3] = 0;
};

const isBackgroundLike = (r, g, b) => {
  const max = Math.max(r, g, b);
  const sat = saturation(r, g, b);

  if (isDarkBackground) {
    if (colorDistance(r, g, b) < 52) return true;
    if (max < 36) return true;
    if (max < 58 && sat < 20) return true;
    return false;
  }

  if (colorDistance(r, g, b) < 42) return true;
  if (max > 200 && sat < 24) return true;
  if (max > 170 && sat < 14) return true;
  return false;
};

const isFringePixel = (r, g, b) => {
  const max = Math.max(r, g, b);
  const sat = saturation(r, g, b);
  const dist = colorDistance(r, g, b);

  if (isDarkBackground) {
    // Keep dark metallic surfaces — only peel bright anti-alias halos.
    if (max < 76) return false;
    if (dist < 58 && max < 110) return true;
    if (max >= 76 && max < 175 && sat < 40) return true;
    if (max >= 175 && max < 248 && sat < 46) return true;
    return false;
  }

  if (dist < 55) return true;
  if (max > 175 && sat < 32) return true;
  return false;
};

const isStrayBackground = (r, g, b) => {
  const max = Math.max(r, g, b);
  const sat = saturation(r, g, b);

  if (isDarkBackground) {
    return max < 44 && sat < 20;
  }

  return max >= 225 && sat <= 12;
};

const floodFromEdges = () => {
  visited.fill(0);
  queue.length = 0;

  for (let x = 0; x < width; x++) {
    queue.push([x, 0], [x, height - 1]);
  }
  for (let y = 0; y < height; y++) {
    queue.push([0, y], [width - 1, y]);
  }

  while (queue.length) {
    const [x, y] = queue.pop();
    if (x < 0 || y < 0 || x >= width || y >= height) continue;
    const p = y * width + x;
    if (visited[p]) continue;
    visited[p] = 1;
    const i = idx(x, y);
    const r = pixels[i];
    const g = pixels[i + 1];
    const b = pixels[i + 2];
    if (!isBackgroundLike(r, g, b)) continue;
    clearPixel(i);
    queue.push([x + 1, y], [x - 1, y], [x, y + 1], [x, y - 1]);
  }
};

const removeFloorReflection = () => {
  if (!isDarkBackground) return;

  const floorStart = Math.floor(height * 0.76);

  for (let pass = 0; pass < 24; pass++) {
    let removed = 0;

    for (let y = floorStart; y < height; y++) {
      for (let x = 0; x < width; x++) {
        const i = idx(x, y);
        if (pixels[i + 3] === 0) continue;

        const r = pixels[i];
        const g = pixels[i + 1];
        const b = pixels[i + 2];
        const max = Math.max(r, g, b);
        const sat = saturation(r, g, b);

        if (max > 62 || sat > 28) continue;

        let canRemove = y >= height - 2;
        if (!canRemove) {
          for (const [nx, ny] of [
            [x, y + 1],
            [x + 1, y],
            [x - 1, y],
            [x, y - 1],
          ]) {
            if (alphaAt(nx, ny) === 0) {
              canRemove = true;
              break;
            }
          }
        }

        if (canRemove) {
          clearPixel(i);
          removed++;
        }
      }
    }

    if (removed === 0) break;
  }
};

const clearEnclosedVoids = () => {
  const voidVisited = new Uint8Array(width * height);

  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const p = y * width + x;
      if (voidVisited[p] || alphaAt(x, y) === 0) continue;

      const i = idx(x, y);
      const max = Math.max(pixels[i], pixels[i + 1], pixels[i + 2]);
      if (max > 30) continue;

      const component = [];
      const localQueue = [[x, y]];
      voidVisited[p] = 1;
      let touchesBorder = x === 0 || y === 0 || x === width - 1 || y === height - 1;

      while (localQueue.length) {
        const [cx, cy] = localQueue.pop();
        component.push([cx, cy]);
        if (cx === 0 || cy === 0 || cx === width - 1 || cy === height - 1) touchesBorder = true;

        for (const [nx, ny] of [
          [cx + 1, cy],
          [cx - 1, cy],
          [cx, cy + 1],
          [cx, cy - 1],
        ]) {
          if (nx < 0 || ny < 0 || nx >= width || ny >= height) continue;
          const np = ny * width + nx;
          if (voidVisited[np] || alphaAt(nx, ny) === 0) continue;

          const ni = idx(nx, ny);
          if (Math.max(pixels[ni], pixels[ni + 1], pixels[ni + 2]) > 30) continue;

          voidVisited[np] = 1;
          localQueue.push([nx, ny]);
        }
      }

      if (!touchesBorder) {
        for (const [cx, cy] of component) clearPixel(idx(cx, cy));
      }
    }
  }
};

const erodeFringeFromEdges = (passes) => {
  for (let pass = 0; pass < passes; pass++) {
    let removed = 0;

    for (let y = 0; y < height; y++) {
      for (let x = 0; x < width; x++) {
        const i = idx(x, y);
        if (pixels[i + 3] === 0) continue;

        let touchesTransparent = false;
        for (const [nx, ny] of [
          [x + 1, y],
          [x - 1, y],
          [x, y + 1],
          [x, y - 1],
        ]) {
          if (alphaAt(nx, ny) === 0) {
            touchesTransparent = true;
            break;
          }
        }
        if (!touchesTransparent) continue;

        const r = pixels[i];
        const g = pixels[i + 1];
        const b = pixels[i + 2];
        if (isFringePixel(r, g, b)) {
          clearPixel(i);
          removed++;
        }
      }
    }

    if (removed === 0) break;
  }
};

const softenEdges = () => {
  if (!isDarkBackground) return;

  const alphas = new Uint8ClampedArray(width * height);

  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const i = idx(x, y);
      const alpha = pixels[i + 3];
      if (alpha === 0) continue;

      let touchesTransparent = false;
      for (const [nx, ny] of [
        [x + 1, y],
        [x - 1, y],
        [x, y + 1],
        [x, y - 1],
      ]) {
        if (alphaAt(nx, ny) === 0) {
          touchesTransparent = true;
          break;
        }
      }

      if (!touchesTransparent) {
        alphas[y * width + x] = alpha;
        continue;
      }

      const r = pixels[i];
      const g = pixels[i + 1];
      const b = pixels[i + 2];
      const dist = colorDistance(r, g, b);
      const max = Math.max(r, g, b);
      const sat = saturation(r, g, b);

      if (dist < 72 || (max >= 76 && max < 118 && sat < 44)) {
        const softAlpha = Math.max(0, Math.min(255, Math.round((dist - 16) * 3.4)));
        alphas[y * width + x] = softAlpha;
      } else {
        alphas[y * width + x] = alpha;
      }
    }
  }

  for (let p = 0; p < width * height; p++) {
    const i = p * channels;
    const nextAlpha = alphas[p];
    pixels[i + 3] = nextAlpha;
    if (nextAlpha === 0) {
      pixels[i] = 0;
      pixels[i + 1] = 0;
      pixels[i + 2] = 0;
    }
  }
};

const removeBrightGlitches = () => {
  for (let p = 0; p < width * height; p++) {
    const i = p * channels;
    if (pixels[i + 3] === 0) continue;

    const r = pixels[i];
    const g = pixels[i + 1];
    const b = pixels[i + 2];
    const max = Math.max(r, g, b);
    const sat = saturation(r, g, b);

    if (max >= 228 && sat <= 20) clearPixel(i);
  }
};

const removeStrayBackground = () => {
  for (let p = 0; p < width * height; p++) {
    const i = p * channels;
    if (pixels[i + 3] === 0) continue;

    const r = pixels[i];
    const g = pixels[i + 1];
    const b = pixels[i + 2];
    if (isStrayBackground(r, g, b)) clearPixel(i);
  }
};

const isGearHolePixel = (x, y) => {
  if (alphaAt(x, y) === 0) return true;
  const i = idx(x, y);
  return isBackgroundLike(pixels[i], pixels[i + 1], pixels[i + 2]);
};

const fillGearCenterHole = () => {
  const holeVisited = new Uint8Array(width * height);
  const components = [];
  const centerX = width / 2;
  const centerY = height / 2;
  const maxCenterDist = Math.min(width, height) * 0.18;

  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const p = y * width + x;
      if (holeVisited[p] || !isGearHolePixel(x, y)) continue;

      const component = [];
      const localQueue = [[x, y]];
      holeVisited[p] = 1;
      let touchesBorder = x === 0 || y === 0 || x === width - 1 || y === height - 1;
      let minX = x;
      let maxX = x;
      let minY = y;
      let maxY = y;

      while (localQueue.length) {
        const [cx, cy] = localQueue.pop();
        component.push([cx, cy]);
        if (cx === 0 || cy === 0 || cx === width - 1 || cy === height - 1) touchesBorder = true;
        minX = Math.min(minX, cx);
        maxX = Math.max(maxX, cx);
        minY = Math.min(minY, cy);
        maxY = Math.max(maxY, cy);

        for (const [nx, ny] of [
          [cx + 1, cy],
          [cx - 1, cy],
          [cx, cy + 1],
          [cx, cy - 1],
        ]) {
          if (nx < 0 || ny < 0 || nx >= width || ny >= height) continue;
          const np = ny * width + nx;
          if (holeVisited[np] || !isGearHolePixel(nx, ny)) continue;
          holeVisited[np] = 1;
          localQueue.push([nx, ny]);
        }
      }

      if (!touchesBorder && component.length >= 500) {
        const w = maxX - minX + 1;
        const h = maxY - minY + 1;
        const cx = (minX + maxX) / 2;
        const cy = (minY + maxY) / 2;
        const aspect = w / h;
        const distFromCenter = Math.hypot(cx - centerX, cy - centerY);
        components.push({ component, n: component.length, w, h, aspect, distFromCenter });
      }
    }
  }

  const hole =
    components
      .filter((c) => c.n >= 2000 && c.aspect > 0.55 && c.aspect < 1.8 && c.distFromCenter < maxCenterDist)
      .sort((a, b) => b.n - a.n - (b.distFromCenter - a.distFromCenter) * 8)[0] ||
    components.filter((c) => c.distFromCenter < maxCenterDist).sort((a, b) => b.n - a.n)[0];

  if (!hole) return;

  for (const [cx, cy] of hole.component) {
    const i = idx(cx, cy);
    pixels[i] = 0;
    pixels[i + 1] = 0;
    pixels[i + 2] = 0;
    pixels[i + 3] = 255;
  }
};

floodFromEdges();
removeFloorReflection();
erodeFringeFromEdges(isDarkBackground ? 28 : 25);
removeStrayBackground();
removeBrightGlitches();
if (isDarkBackground) clearEnclosedVoids();
erodeFringeFromEdges(isDarkBackground ? 8 : 8);
removeStrayBackground();
removeBrightGlitches();
fillGearCenterHole();

for (let p = 0; p < width * height; p++) {
  const i = p * channels;
  if (pixels[i + 3] === 0) {
    pixels[i] = 0;
    pixels[i + 1] = 0;
    pixels[i + 2] = 0;
  }
}

await sharp(Buffer.from(pixels), { raw: { width, height, channels: 4 } })
  .png({ compressionLevel: 9, adaptiveFiltering: true })
  .trim()
  .toFile(output);

const meta = await sharp(output).metadata();
console.log(`Saved ${meta.width}x${meta.height}, alpha=${meta.hasAlpha}, darkBg=${isDarkBackground}`);
