import { addPropertyControls, ControlType, useIsStaticRenderer } from "framer"
import { useCallback, useEffect, useRef, useState, type CSSProperties, type ReactNode, type MouseEvent, type KeyboardEvent } from "react"

interface DomainProduct {
    title: string
    text: string
}

interface DomainMetric {
    number: string
    suffix: string
    label: string
}

interface DomainItem {
    title: string
    tag: string
    subtitle: string
    body: string
    products: DomainProduct[]
    metrics: DomainMetric[]
}

interface DomainOutcomesListProps {
    domainsData: string
    accentColor: string
    titleColor: string
    inactiveOpacity: number
    scrollStep: number
    rotateAmount: number
    stickyTop: number
    style?: CSSProperties
}

/** Hero Studios workList — cubic-bezier(0.19, 1, 0.22, 1) */
const EASE = "cubic-bezier(0.19, 1, 0.22, 1)"
const FIELD = "^^"
const DOMAIN_SEP = "###"
const MOBILE_MAX = 800
const GEIST = 'Geist, "Geist Placeholder", sans-serif'
const CARD_RADIUS = 30
const CARD_INSET = { desktop: 12, mobile: 10 } as const
const CARD_INNER_SURFACE = {
    bg: "rgba(255, 255, 255, 0.97)",
    border: "rgba(18, 24, 14, 0.07)",
    shadow: "0 1px 4px rgba(18, 24, 14, 0.06)",
    tagBg: "rgba(18, 24, 14, 0.05)",
    productBg: "rgba(18, 24, 14, 0.035)",
} as const
const INTER_DISPLAY = '"Inter Display", "Inter Display Placeholder", sans-serif'

const CARD_TYPE = {
    paddingDesktop: "24px 22px 22px",
    paddingMobile: "18px 16px 20px",
    stackGap: 14,
    tag: {
        fontSize: 9,
        fontWeight: 600,
        lineHeight: 1.15,
        letterSpacing: "0.1em",
        padding: "5px 9px",
        radius: 6,
    },
    headline: {
        fontSize: 20,
        fontWeight: 600,
        lineHeight: 1.28,
        letterSpacing: "-0.022em",
    },
    body: {
        fontFamily: INTER_DISPLAY,
        fontSize: 15,
        fontWeight: 400,
        lineHeight: 1.5,
        letterSpacing: "-0.01em",
    },
    metricValue: {
        fontSize: 36,
        fontWeight: 600,
        lineHeight: 1,
        letterSpacing: "-0.03em",
    },
    metricLabel: {
        fontSize: 12,
        fontWeight: 400,
        lineHeight: 1.4,
        letterSpacing: "-0.01em",
    },
    productTitle: {
        fontSize: 14,
        fontWeight: 600,
        lineHeight: 1.3,
        letterSpacing: "-0.015em",
    },
    productBody: {
        fontFamily: INTER_DISPLAY,
        fontSize: 13,
        fontWeight: 400,
        lineHeight: 1.45,
        letterSpacing: "-0.005em",
    },
    productRadius: 10,
    metricsGap: "16px 24px",
} as const

const BODY_STYLE = {
    fontFamily: CARD_TYPE.body.fontFamily,
    fontSize: CARD_TYPE.body.fontSize,
    fontWeight: CARD_TYPE.body.fontWeight,
    lineHeight: CARD_TYPE.body.lineHeight,
    letterSpacing: CARD_TYPE.body.letterSpacing,
} as const

/** Dark-theme palette — card shell aligned with GRCCard (About section) */
const THEME = {
    textPrimary: "rgb(255, 255, 255)",
    textSecondary: "rgba(255, 255, 255, 0.62)",
    textMuted: "rgba(255, 255, 255, 0.45)",
    textSubtle: "rgba(255, 255, 255, 0.35)",
    border: "rgba(255, 255, 255, 0.08)",
    borderSoft: "rgba(255, 255, 255, 0.08)",
    cardBg:
        "linear-gradient(145deg, rgba(24, 20, 18, 0.95) 0%, rgba(10, 12, 20, 0.92) 55%, rgba(8, 10, 18, 0.98) 100%)",
    cardLayerBorder: "rgba(255, 255, 255, 0.06)",
    cardLayerBg: "linear-gradient(180deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.01) 100%)",
    mediaShadow: "0 16px 40px rgba(0, 0, 0, 0.35), 0 0 0 1px rgba(255, 255, 255, 0.03)",
    mediaShadowActive: "0 24px 60px rgba(0, 0, 0, 0.45), 0 0 0 1px rgba(255, 255, 255, 0.04)",
    metricPanel: "transparent",
    productBg: "rgba(255, 255, 255, 0.03)",
    tagBg: "rgba(255, 255, 255, 0.03)",
}

/** Kore.ai Artemis soft bokeh panel backgrounds — per domain */
const DOMAIN_CARD_THEMES = [
    {
        backgroundImage:
            "https://cdn.prod.website-files.com/6717a0dfaf71071a80dfce8b/6a0ef8697a02ee9b17b1654e_k2-tabs-build-panel-bg.webp",
        backgroundPosition: "20% 35%",
        cardBg: "linear-gradient(140deg, #f7fbe8 0%, #e8f5c8 45%, #faf6e8 100%)",
        cardLayerBg: "linear-gradient(180deg, rgba(255,255,255,0.5) 0%, rgba(220,240,170,0.22) 100%)",
        meshOverlay:
            "radial-gradient(ellipse 70% 55% at 12% 18%, rgba(196, 232, 108, 0.42) 0%, transparent 68%), radial-gradient(ellipse 65% 50% at 88% 22%, rgba(255, 248, 220, 0.5) 0%, transparent 65%)",
        glowColor: "rgba(210, 240, 130, 0.4)",
        border: "rgba(255, 255, 255, 0.72)",
        frost: "linear-gradient(180deg, rgba(255,255,255,0.14) 0%, rgba(255,255,255,0.06) 100%)",
        textPrimary: "rgb(18, 24, 14)",
        textSecondary: "rgba(18, 24, 14, 0.74)",
        textMuted: "rgba(18, 24, 14, 0.56)",
        tagBg: "rgba(255, 255, 255, 0.52)",
        productBg: "rgba(255, 255, 255, 0.38)",
        divider: "rgba(18, 24, 14, 0.09)",
        layerBorder: "rgba(255, 255, 255, 0.45)",
    },
    {
        backgroundImage:
            "https://cdn.prod.website-files.com/6717a0dfaf71071a80dfce8b/6a0efb59b7f0a045fab6f9ae_k2-tabs-scale-panel-bg.webp",
        backgroundPosition: "50% 40%",
        cardBg: "linear-gradient(145deg, #eef8e4 0%, #dff0d2 50%, #f2f8ea 100%)",
        cardLayerBg: "linear-gradient(180deg, rgba(255,255,255,0.48) 0%, rgba(190, 225, 160, 0.2) 100%)",
        meshOverlay:
            "radial-gradient(ellipse 68% 52% at 82% 16%, rgba(140, 210, 110, 0.38) 0%, transparent 66%), radial-gradient(ellipse 60% 48% at 18% 78%, rgba(235, 248, 210, 0.45) 0%, transparent 64%)",
        glowColor: "rgba(150, 215, 100, 0.35)",
        border: "rgba(255, 255, 255, 0.68)",
        frost: "linear-gradient(180deg, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0.05) 100%)",
        textPrimary: "rgb(16, 30, 18)",
        textSecondary: "rgba(16, 30, 18, 0.74)",
        textMuted: "rgba(16, 30, 18, 0.56)",
        tagBg: "rgba(255, 255, 255, 0.5)",
        productBg: "rgba(255, 255, 255, 0.36)",
        divider: "rgba(16, 30, 18, 0.09)",
        layerBorder: "rgba(255, 255, 255, 0.42)",
    },
    {
        backgroundImage:
            "https://cdn.prod.website-files.com/6717a0dfaf71071a80dfce8b/6a0ef8697a02ee9b17b1654e_k2-tabs-build-panel-bg.webp",
        backgroundPosition: "78% 62%",
        cardBg: "linear-gradient(150deg, #faf8e8 0%, #f0f4d8 42%, #edf6e0 100%)",
        cardLayerBg: "linear-gradient(180deg, rgba(255,255,255,0.5) 0%, rgba(241, 243, 222, 0.24) 100%)",
        meshOverlay:
            "radial-gradient(ellipse 72% 58% at 90% 28%, rgba(255, 248, 238, 0.52) 0%, transparent 66%), radial-gradient(ellipse 64% 50% at 14% 68%, rgba(188, 228, 120, 0.34) 0%, transparent 68%)",
        glowColor: "rgba(241, 243, 222, 0.5)",
        border: "rgba(255, 255, 255, 0.7)",
        frost: "linear-gradient(180deg, rgba(255,255,255,0.16) 0%, rgba(255,255,255,0.06) 100%)",
        textPrimary: "rgb(24, 26, 16)",
        textSecondary: "rgba(24, 26, 16, 0.74)",
        textMuted: "rgba(24, 26, 16, 0.56)",
        tagBg: "rgba(255, 255, 255, 0.52)",
        productBg: "rgba(255, 255, 255, 0.36)",
        divider: "rgba(24, 26, 16, 0.09)",
        layerBorder: "rgba(255, 255, 255, 0.44)",
    },
    {
        backgroundImage:
            "https://cdn.prod.website-files.com/6717a0dfaf71071a80dfce8b/6a0efbe7f7c105e2849f68ab_k2-tabs-optimize-panel-bg.webp",
        backgroundPosition: "55% 45%",
        cardBg: "linear-gradient(142deg, #f3f8e6 0%, #e6f2d6 48%, #faf5e8 100%)",
        cardLayerBg: "linear-gradient(180deg, rgba(255,255,255,0.46) 0%, rgba(200, 235, 170, 0.18) 100%)",
        meshOverlay:
            "radial-gradient(ellipse 70% 54% at 76% 20%, rgba(180, 230, 120, 0.36) 0%, transparent 65%), radial-gradient(ellipse 62% 48% at 22% 72%, rgba(255, 250, 230, 0.44) 0%, transparent 63%)",
        glowColor: "rgba(200, 235, 150, 0.38)",
        border: "rgba(255, 255, 255, 0.68)",
        frost: "linear-gradient(180deg, rgba(255,255,255,0.13) 0%, rgba(255,255,255,0.05) 100%)",
        textPrimary: "rgb(18, 24, 14)",
        textSecondary: "rgba(18, 24, 14, 0.74)",
        textMuted: "rgba(18, 24, 14, 0.56)",
        tagBg: "rgba(255, 255, 255, 0.48)",
        productBg: "rgba(255, 255, 255, 0.34)",
        divider: "rgba(18, 24, 14, 0.09)",
        layerBorder: "rgba(255, 255, 255, 0.42)",
    },
] as const

function getDomainCardTheme(index: number) {
    return DOMAIN_CARD_THEMES[index % DOMAIN_CARD_THEMES.length]
}

/** Hero Studios workList timings — https://www.herostudios.tv/ */
const DUR = {
    opacity: 300,
    transformActive: 1200,
    transformInactive: 600,
    arrowActive: 900,
    arrowInactive: 600,
    rotate: 1000,
    crossfadeActive: 200,
    crossfadeInactive: 300,
    panelFade: 200,
    countUp: 900,
    evenDebounce: 300,
}

function parseProducts(raw: string): DomainProduct[] {
    if (!raw?.trim()) return []
    return raw
        .split(";;")
        .map((row) => row.trim())
        .filter(Boolean)
        .map((row) => {
            const [title, text] = row.split("|")
            return { title: title?.trim() || "", text: text?.trim() || "" }
        })
}

function parseMetrics(raw: string): DomainMetric[] {
    if (!raw?.trim()) return []
    return raw
        .split(";;")
        .map((row) => row.trim())
        .filter(Boolean)
        .map((row) => {
            const [number = "", suffix = "", label = ""] = row.split("|")
            return { number: number.trim(), suffix: suffix.trim(), label: label.trim() }
        })
}

function parseDomains(data: string): DomainItem[] {
    if (!data?.trim()) return []
    return data
        .split(DOMAIN_SEP)
        .map((r) => r.trim())
        .filter(Boolean)
        .slice(0, 4)
        .map((row) => {
            const parts = row.split(FIELD)
            const [title = "", tag = "", subtitle = "", body = "", productsRaw = "", metricsRaw = ""] = parts
            return {
                title: title.trim(),
                tag: tag.trim(),
                subtitle: subtitle.trim(),
                body: body.trim(),
                products: parseProducts(productsRaw),
                metrics: parseMetrics(metricsRaw),
            }
        })
}

function useCountUp(target: number, active: boolean, duration = DUR.countUp) {
    const [value, setValue] = useState(0)
    useEffect(() => {
        if (!active) {
            setValue(0)
            return
        }
        let frame = 0
        const start = performance.now()
        const tick = (now: number) => {
            const t = Math.min(1, (now - start) / duration)
            const eased = 1 - Math.pow(1 - t, 3)
            setValue(target * eased)
            if (t < 1) frame = requestAnimationFrame(tick)
        }
        frame = requestAnimationFrame(tick)
        return () => cancelAnimationFrame(frame)
    }, [target, active, duration])
    return value
}

/** Pixel arrow from design asset — 21×15 grid with hollow chevron + stem gap */
function PixelArrow({
    color = "rgba(255, 255, 255, 0.42)",
    size = 10,
}: {
    color?: string
    size?: number
}) {
    const height = size
    const width = (21 / 15) * size
    return (
        <svg
            width={width}
            height={height}
            viewBox="0 0 21 15"
            fill={color}
            aria-hidden
            style={{ flexShrink: 0, display: "block" }}
        >
            <rect x="12" y="0" width="3" height="3" />
            <rect x="15" y="3" width="3" height="3" />
            <rect x="0" y="6" width="15" height="3" />
            <rect x="18" y="6" width="3" height="3" />
            <rect x="15" y="9" width="3" height="3" />
            <rect x="12" y="12" width="3" height="3" />
        </svg>
    )
}

/** Consistent gap between pixel arrow and label text */
const ARROW_LABEL_GAP = 8

function ArrowLabelRow({
    label,
    color,
    arrowSize = 9,
    fontSize = CARD_TYPE.metricLabel.fontSize,
    fontWeight = CARD_TYPE.metricLabel.fontWeight,
    lineHeight = CARD_TYPE.metricLabel.lineHeight,
    letterSpacing = CARD_TYPE.metricLabel.letterSpacing,
}: {
    label: string
    color: string
    arrowSize?: number
    fontSize?: number
    fontWeight?: number
    lineHeight?: number
    letterSpacing?: string
}) {
    return (
        <div
            style={{
                display: "flex",
                alignItems: "center",
                gap: ARROW_LABEL_GAP,
                minWidth: 0,
            }}
        >
            <span
                style={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    lineHeight: 0,
                }}
            >
                <PixelArrow size={arrowSize} color={color} />
            </span>
            <span
                style={{
                    fontSize,
                    fontWeight,
                    lineHeight,
                    letterSpacing,
                    color,
                    minWidth: 0,
                }}
            >
                {label}
            </span>
        </div>
    )
}

function parseMetricParts(metric: DomainMetric) {
    const rawNum = metric.number.trim()
    const rawSuffix = metric.suffix.trim()

    if (rawNum) {
        const numericTarget = parseFloat(rawNum.replace(/[^0-9.]/g, "")) || 0
        return {
            numericTarget,
            hasDecimal: rawNum.includes("."),
            inlinePrefix: "",
            inlineSuffix: rawSuffix,
        }
    }

    const prefixMatch = rawSuffix.match(/^(-\s*)/)
    const inlinePrefix = prefixMatch ? "-" : ""
    const rest = rawSuffix.slice(prefixMatch?.[0].length ?? 0).trim()
    const numericTarget = parseFloat(rest.replace(/[^0-9.]/g, "")) || 0
    const symbol = rest.replace(/[0-9.]/g, "").trim()

    return {
        numericTarget,
        hasDecimal: rest.includes("."),
        inlinePrefix,
        inlineSuffix: symbol,
    }
}

function MetricCounter({
    metric,
    accentColor,
    active,
    labelColor,
}: {
    metric: DomainMetric
    accentColor: string
    active: boolean
    labelColor: string
}) {
    const { numericTarget, hasDecimal, inlinePrefix, inlineSuffix } = parseMetricParts(metric)
    const count = useCountUp(numericTarget, active && numericTarget > 0)
    const displayNumber =
        numericTarget > 0
            ? hasDecimal
                ? count.toFixed(1)
                : Math.round(count).toString()
            : ""
    const displayValue = `${inlinePrefix}${displayNumber}${inlineSuffix}`

    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                gap: 8,
                minWidth: 0,
                fontFamily: GEIST,
                textAlign: "left",
            }}
        >
            {displayValue && (
                <span
                    style={{
                        ...CARD_TYPE.metricValue,
                        color: accentColor,
                    }}
                >
                    {displayValue}
                </span>
            )}
            <ArrowLabelRow label={metric.label} color={labelColor} />
        </div>
    )
}

function HeroMediaCard({
    children,
    isMobile,
    active,
    cardTheme,
}: {
    children: ReactNode
    isMobile: boolean
    active: boolean
    cardTheme: (typeof DOMAIN_CARD_THEMES)[number]
}) {
    return (
        <div style={{ position: "relative", width: "100%", padding: "4px 0 0" }}>
            {[2, 1].map((layer) => (
                <div
                    key={layer}
                    aria-hidden
                    style={{
                        position: "absolute",
                        left: 10 + layer * 8,
                        right: 10 - layer * 5,
                        top: 8 + layer * 10,
                        bottom: 0,
                        borderRadius: CARD_RADIUS,
                        border: `1px solid ${cardTheme.layerBorder}`,
                        background: cardTheme.cardLayerBg,
                        transform: active
                            ? `translateY(${layer * 4}px) scale(${1 - layer * 0.012})`
                            : `translateY(${layer * 7}px) scale(${1 - layer * 0.018})`,
                        transition: "transform 0.45s ease, opacity 0.45s ease",
                        opacity: 0.3 - layer * 0.08,
                        pointerEvents: "none",
                    }}
                />
            ))}

            <div
                style={{
                    position: "relative",
                    zIndex: 2,
                    width: "100%",
                    borderRadius: CARD_RADIUS,
                    overflow: "hidden",
                    backgroundColor: "#f4f8e8",
                    backgroundImage: `url("${cardTheme.backgroundImage}"), ${cardTheme.cardBg}`,
                    backgroundPosition: `${cardTheme.backgroundPosition}, center`,
                    backgroundRepeat: "no-repeat, no-repeat",
                    backgroundSize: "cover, cover",
                    border: `1px solid ${cardTheme.border}`,
                    boxShadow: active
                        ? "0 20px 48px rgba(24, 40, 16, 0.14), 0 0 0 1px rgba(255, 255, 255, 0.5)"
                        : "0 12px 32px rgba(24, 40, 16, 0.1), 0 0 0 1px rgba(255, 255, 255, 0.4)",
                    transition: "box-shadow 0.45s ease",
                }}
            >
                <div
                    aria-hidden
                    style={{
                        position: "absolute",
                        inset: 0,
                        background: cardTheme.meshOverlay,
                        pointerEvents: "none",
                    }}
                />

                <div
                    aria-hidden
                    style={{
                        position: "absolute",
                        inset: 0,
                        background: cardTheme.frost,
                        pointerEvents: "none",
                    }}
                />

                <div
                    aria-hidden
                    style={{
                        position: "absolute",
                        top: -60,
                        right: -30,
                        width: 200,
                        height: 200,
                        borderRadius: "50%",
                        background: `radial-gradient(circle, ${cardTheme.glowColor} 0%, transparent 72%)`,
                        filter: "blur(10px)",
                        pointerEvents: "none",
                    }}
                />

                <div
                    style={{
                        position: "relative",
                        zIndex: 1,
                        padding: isMobile ? CARD_INSET.mobile : CARD_INSET.desktop,
                    }}
                >
                    <div
                        style={{
                            position: "relative",
                            borderRadius:
                                CARD_RADIUS -
                                (isMobile ? CARD_INSET.mobile : CARD_INSET.desktop),
                            background: CARD_INNER_SURFACE.bg,
                            border: `1px solid ${CARD_INNER_SURFACE.border}`,
                            boxShadow: CARD_INNER_SURFACE.shadow,
                            padding: isMobile
                                ? CARD_TYPE.paddingMobile
                                : CARD_TYPE.paddingDesktop,
                        }}
                    >
                        {children}
                    </div>
                </div>
            </div>
        </div>
    )
}

function ProjectMedia({
    domain,
    domainIndex,
    accentColor,
    active,
    isMobile,
}: {
    domain: DomainItem
    domainIndex: number
    accentColor: string
    active: boolean
    isMobile: boolean
    isStatic: boolean
}) {
    const cardTheme = getDomainCardTheme(domainIndex)
    return (
        <div
            style={{
                position: active ? "relative" : "absolute",
                top: active ? undefined : 0,
                left: active ? undefined : 0,
                width: "100%",
                opacity: active ? 1 : 0,
                visibility: active ? "visible" : "hidden",
                transition: active
                    ? `opacity ${DUR.crossfadeActive}ms linear`
                    : `opacity ${DUR.crossfadeInactive}ms linear, visibility 1ms ${DUR.crossfadeInactive}ms`,
            }}
        >
            <HeroMediaCard isMobile={isMobile} active={active} cardTheme={cardTheme}>
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: CARD_TYPE.stackGap,
                        textAlign: "left",
                    }}
                >
                    <div
                        style={{
                            display: "inline-flex",
                            width: "fit-content",
                            padding: CARD_TYPE.tag.padding,
                            borderRadius: CARD_TYPE.tag.radius,
                            border: `1px solid ${cardTheme.divider}`,
                            background: CARD_INNER_SURFACE.tagBg,
                            color: accentColor,
                            fontSize: CARD_TYPE.tag.fontSize,
                            lineHeight: CARD_TYPE.tag.lineHeight,
                            letterSpacing: CARD_TYPE.tag.letterSpacing,
                            textTransform: "uppercase",
                            fontWeight: CARD_TYPE.tag.fontWeight,
                        }}
                    >
                        {domain.tag}
                    </div>

                    <h3
                        style={{
                            margin: 0,
                            ...CARD_TYPE.headline,
                            color: cardTheme.textPrimary,
                        }}
                    >
                        {domain.subtitle}
                    </h3>

                    <div
                        style={{
                            ...BODY_STYLE,
                            color: cardTheme.textSecondary,
                            width: "100%",
                        }}
                    >
                        {domain.body}
                    </div>

                    {domain.metrics.length > 0 && (
                        <div
                            style={{
                                display: "grid",
                                gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
                                gap: CARD_TYPE.metricsGap,
                                paddingTop: 16,
                                marginTop: 2,
                                borderTop: `1px solid ${cardTheme.divider}`,
                            }}
                        >
                            {domain.metrics.map((metric) => (
                                <MetricCounter
                                    key={`${metric.label}-${metric.suffix}`}
                                    metric={metric}
                                    accentColor={accentColor}
                                    active={active}
                                    labelColor={cardTheme.textMuted}
                                />
                            ))}
                        </div>
                    )}

                    {domain.products.length > 0 && (
                        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                            {domain.products.map((product) => (
                                <div
                                    key={product.title}
                                    style={{
                                        padding: "10px 12px",
                                        borderRadius: CARD_TYPE.productRadius,
                                        border: `1px solid ${cardTheme.divider}`,
                                        background: CARD_INNER_SURFACE.productBg,
                                    }}
                                >
                                    <div
                                        style={{
                                            ...CARD_TYPE.productTitle,
                                            color: cardTheme.textPrimary,
                                        }}
                                    >
                                        {product.title}
                                    </div>
                                    <div
                                        style={{
                                            ...CARD_TYPE.productBody,
                                            color: cardTheme.textMuted,
                                            marginTop: 4,
                                        }}
                                    >
                                        {product.text}
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </HeroMediaCard>
        </div>
    )
}

/**
 * Hero Studios workList.workList--home animation
 * @see https://www.herostudios.tv/
 *
 * @framerSupportedLayoutWidth any-prefer-fixed
 * @framerSupportedLayoutHeight any-prefer-fixed
 */
export default function DomainOutcomesList(props: DomainOutcomesListProps) {
    const {
        domainsData = "",
        accentColor = "rgb(217, 100, 0)",
        titleColor = "rgb(255, 255, 255)",
        inactiveOpacity = 0.2,
        scrollStep = 85,
        rotateAmount = 2,
        stickyTop = 100,
        style,
    } = props

    const domains = parseDomains(domainsData)
    const isStatic = useIsStaticRenderer()
    const scrollRef = useRef<HTMLDivElement>(null)
    const lastActiveIndex = useRef(-1)
    const toggleWait = useRef(false)
    const pinnedIndex = useRef<number | null>(null)

    const [activeIndex, setActiveIndex] = useState(0)
    const [isEven, setIsEven] = useState(false)
    const [showing, setShowing] = useState(true)
    const [isMobile, setIsMobile] = useState(false)

    const onActiveChange = useCallback((index: number) => {
        if (index < 0) return
        if (!toggleWait.current) {
            toggleWait.current = true
            setIsEven((v) => !v)
            window.setTimeout(() => {
                toggleWait.current = false
            }, DUR.evenDebounce)
        }
        void index
    }, [])

    const applyActive = useCallback(
        (index: number) => {
            setActiveIndex(index)
            setShowing(index >= 0)
            if (index !== lastActiveIndex.current) {
                if (index >= 0) onActiveChange(index)
                lastActiveIndex.current = index
            }
        },
        [onActiveChange]
    )

    const updateActive = useCallback(() => {
        const el = scrollRef.current
        if (!el || !domains.length) return

        setIsMobile(window.innerWidth <= MOBILE_MAX)

        if (pinnedIndex.current !== null) {
            applyActive(pinnedIndex.current)
            return
        }

        const rect = el.getBoundingClientRect()
        const viewportCenter = window.innerHeight / 2
        const progress = Math.max(0, Math.min(1, (viewportCenter - rect.top) / Math.max(rect.height, 1)))
        const nextIndex = Math.min(domains.length - 1, Math.floor(progress * domains.length))

        applyActive(nextIndex)
    }, [applyActive, domains.length])

    const selectTitle = useCallback(
        (index: number, e?: MouseEvent<HTMLButtonElement>) => {
            e?.stopPropagation()
            pinnedIndex.current = index
            applyActive(index)
        },
        [applyActive]
    )

    useEffect(() => {
        if (isStatic) return

        const onScroll = () => {
            pinnedIndex.current = null
            updateActive()
        }
        const onResize = () => updateActive()

        updateActive()

        window.addEventListener("scroll", onScroll, { passive: true })
        window.addEventListener("resize", onResize, { passive: true })
        return () => {
            window.removeEventListener("scroll", onScroll)
            window.removeEventListener("resize", onResize)
        }
    }, [isStatic, updateActive])

    if (!domains.length) return null

    const activeShift = isMobile ? "1.5rem" : "2.5rem"
    const arrowGap = ARROW_LABEL_GAP
    const arrowIconSize = isMobile ? 10 : 12
    const arrowIconWidth = (21 / 15) * arrowIconSize
    const titleSize = 34
    const projectPadding = isMobile ? "1.25rem 0" : "1.75rem 0"
    const tilt = isEven ? -rotateAmount : rotateAmount

    return (
        <div
            ref={scrollRef}
            style={{
                position: "relative",
                width: "100%",
                height: `${domains.length * scrollStep}vh`,
                ...style,
            }}
        >
            <div
                style={{
                    position: "sticky",
                    top: stickyTop,
                    display: "grid",
                    gridTemplateColumns: isMobile ? "1fr" : "30% 70%",
                    columnGap: isMobile ? 0 : 32,
                    rowGap: isMobile ? 32 : 0,
                    width: "100%",
                    alignItems: "start",
                    minHeight: `calc(100vh - ${stickyTop}px)`,
                }}
            >
                {/* Left column — 30% navigation titles (above right column for clicks) */}
                <div
                    style={{
                        width: "100%",
                        minWidth: 0,
                        padding: isMobile ? "0 1.5rem" : "0",
                        position: "relative",
                        zIndex: 5,
                        pointerEvents: "auto",
                    }}
                >
                    {domains.map((domain, i) => {
                        const active = activeIndex === i
                        return (
                            <button
                                key={domain.title}
                                type="button"
                                aria-pressed={active}
                                onClick={(e) => selectTitle(i, e)}
                                onKeyDown={(e: KeyboardEvent<HTMLButtonElement>) => {
                                    if (e.key === "Enter" || e.key === " ") {
                                        e.preventDefault()
                                        selectTitle(i)
                                    }
                                }}
                                style={{
                                    display: "block",
                                    width: "100%",
                                    margin: 0,
                                    border: "none",
                                    background: "transparent",
                                    textAlign: "left",
                                    padding: projectPadding,
                                    position: "relative",
                                    zIndex: active ? 3 : 2,
                                    opacity: active ? 1 : inactiveOpacity,
                                    transform: active ? `translateX(${activeShift})` : "translateX(0)",
                                    transition: active
                                        ? `opacity ${DUR.opacity}ms linear, transform ${DUR.transformActive}ms ${EASE}`
                                        : `opacity ${DUR.opacity}ms linear, transform ${DUR.transformInactive}ms ${EASE}`,
                                    cursor: "pointer",
                                    userSelect: "none",
                                    outline: "none",
                                    pointerEvents: "auto",
                                    WebkitTapHighlightColor: "transparent",
                                    color: titleColor,
                                }}
                            >
                                <div
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                        gap: active ? arrowGap : 0,
                                    }}
                                >
                                    <div
                                        aria-hidden
                                        style={{
                                            flexShrink: 0,
                                            width: active ? arrowIconWidth : 0,
                                            opacity: active ? 1 : 0,
                                            overflow: "hidden",
                                            display: "flex",
                                            alignItems: "center",
                                            lineHeight: 0,
                                            transition: active
                                                ? `opacity ${DUR.opacity}ms linear, width ${DUR.arrowActive}ms ${EASE}`
                                                : `opacity 150ms linear, width ${DUR.arrowInactive}ms ${EASE}`,
                                        }}
                                    >
                                        <PixelArrow color={accentColor} size={arrowIconSize} />
                                    </div>
                                    <div
                                        style={{
                                            fontSize: titleSize,
                                            lineHeight: 1.05,
                                            fontWeight: 400,
                                            color: titleColor,
                                            letterSpacing: "-0.04em",
                                            whiteSpace: "pre-wrap",
                                        }}
                                    >
                                        {domain.title}
                                    </div>
                                </div>
                            </button>
                        )
                    })}
                </div>

                {/* Right column — workList__mediaWrap + workList__media */}
                <div
                    style={{
                        width: "100%",
                        minWidth: 0,
                        padding: isMobile ? "0 1.5rem" : "0",
                        position: "relative",
                        zIndex: 1,
                        opacity: showing ? 1 : 0,
                        transition: `opacity ${DUR.panelFade}ms linear`,
                        pointerEvents: "none",
                    }}
                >
                    <div
                        style={{
                            position: "sticky",
                            top: "20vh",
                            width: "100%",
                            pointerEvents: "none",
                        }}
                    >
                        {/* .media — subtle tilt when .workList.even */}
                        <div
                            style={{
                                position: "relative",
                                width: "100%",
                                transform: `rotate(${tilt}deg)`,
                                transition: `transform ${DUR.rotate}ms ${EASE}`,
                                pointerEvents: "auto",
                            }}
                        >
                            {domains.map((domain, i) => (
                                <ProjectMedia
                                    key={domain.title}
                                    domain={domain}
                                    domainIndex={i}
                                    accentColor={accentColor}
                                    active={activeIndex === i}
                                    isMobile={isMobile}
                                    isStatic={isStatic}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

addPropertyControls(DomainOutcomesList, {
    domainsData: {
        type: ControlType.String,
        title: "Domains Data (4 max)",
        displayTextArea: true,
        description:
            "Title^^Tag^^Subtitle^^Body^^Products^^Metrics. Metrics: num|suffix|label;;... ### next domain",
        defaultValue: "",
    },
    accentColor: {
        type: ControlType.Color,
        title: "Accent",
        defaultValue: "rgb(217, 100, 0)",
    },
    titleColor: {
        type: ControlType.Color,
        title: "Title Color",
        defaultValue: "rgb(255, 255, 255)",
    },
    inactiveOpacity: {
        type: ControlType.Number,
        title: "Inactive Opacity",
        defaultValue: 0.2,
        min: 0,
        max: 1,
        step: 0.01,
    },
    scrollStep: {
        type: ControlType.Number,
        title: "Scroll Step",
        defaultValue: 85,
        min: 50,
        max: 120,
        step: 5,
        unit: "vh",
        description: "Viewport height per domain — more = longer read time",
    },
    rotateAmount: {
        type: ControlType.Number,
        title: "Card Tilt",
        defaultValue: 2,
        min: 0,
        max: 5,
        step: 0.5,
        unit: "deg",
    },
    stickyTop: {
        type: ControlType.Number,
        title: "Sticky Top",
        defaultValue: 100,
        min: 0,
        max: 200,
        step: 4,
        unit: "px",
    },
})
