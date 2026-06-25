import fs from "fs"
import { createRequire } from "module"

const require = createRequire(import.meta.url)
const { PNG } = require("pngjs")
const buf = fs.readFileSync(new URL("../assets/foundation-line-path.png", import.meta.url))
const png = PNG.sync.read(buf)
const W = png.width
const H = png.height
const sx = 1000 / W
const sy = 500 / H

function alpha(x, y) {
    return png.data[((W * y + x) << 2) + 3]
}

const segments = []
for (let y = 0; y < H; y++) {
    const xs = []
    for (let x = 0; x < W; x++) if (alpha(x, y) >= 1) xs.push(x)
    if (!xs.length) continue
    const cx = Math.round(xs.reduce((a, b) => a + b, 0) / xs.length)
    const span = Math.max(...xs) - Math.min(...xs)
    const type = span > 6 ? "h" : "v"
    const last = segments[segments.length - 1]
    if (!last || last.type !== type) {
        segments.push({
            type,
            y1: y,
            y2: y,
            x: cx,
            x1: Math.min(...xs),
            x2: Math.max(...xs),
        })
    } else {
        last.y2 = y
        last.x = cx
        last.x2 = Math.max(...xs)
        last.x1 = Math.min(last.x1, Math.min(...xs))
    }
}

const points = []
for (const s of segments) {
    if (s.type === "v") {
        points.push({ x: Math.round(s.x * sx), y: Math.round(s.y1 * sy) })
        points.push({ x: Math.round(s.x * sx), y: Math.round(s.y2 * sy) })
    } else {
        points.push({ x: Math.round(s.x1 * sx), y: Math.round(s.y1 * sy) })
        points.push({ x: Math.round(s.x2 * sx), y: Math.round(s.y1 * sy) })
    }
}

const deduped = []
for (const p of points) {
    const last = deduped[deduped.length - 1]
    if (!last || Math.hypot(p.x - last.x, p.y - last.y) > 4) deduped.push(p)
}

let d = `M ${deduped[0].x} ${deduped[0].y}`
for (let i = 1; i < deduped.length; i++) {
    d += ` L ${deduped[i].x} ${deduped[i].y}`
}

console.log(d)
console.log("POINTS", JSON.stringify(deduped))
