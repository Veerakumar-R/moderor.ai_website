import { addPropertyControls, ControlType, useIsStaticRenderer } from "framer"
import { useState, startTransition, type CSSProperties } from "react"

interface GRCCardProps {
    index: string
    productCount: string
    title: string
    subtitle: string
    tags: string[]
    ctaLabel: string
    ctaLink: string
    accentColor: string
    style?: CSSProperties
}

/**
 * @framerSupportedLayoutWidth any-prefer-fixed
 * @framerSupportedLayoutHeight any-prefer-fixed
 */
export default function GRCCard(props: GRCCardProps) {
    const {
        index = "01",
        productCount = "6 PRODUCTS",
        title = "GRC Suite",
        subtitle = "Governance · Risk · Compliance",
        tags = [
            "CCM",
            "Auditor Workbench",
            "Risk Assessment",
            "Smart Alert Triage",
            "Regulatory Compliance",
            "AI Branch Audit",
        ],
        ctaLabel = "Explore GRC Suite →",
        ctaLink = "#",
        accentColor = "rgb(217, 100, 0)",
        style,
    } = props

    const isStatic = useIsStaticRenderer()
    const [hovered, setHovered] = useState(false)

    const onEnter = () => {
        if (isStatic) return
        startTransition(() => setHovered(true))
    }
    const onLeave = () => {
        if (isStatic) return
        startTransition(() => setHovered(false))
    }

    return (
        <div
            style={{
                position: "relative",
                width: "100%",
                height: "100%",
                minHeight: 360,
                padding: "8px 0 24px",
                ...style,
            }}
            onMouseEnter={onEnter}
            onMouseLeave={onLeave}
        >
            <style>{`
                @keyframes grcShimmer {
                    0% { background-position: 200% center; }
                    100% { background-position: -200% center; }
                }
            `}</style>
            {[2, 1].map((layer) => (
                <div
                    key={layer}
                    aria-hidden
                    style={{
                        position: "absolute",
                        left: 12 + layer * 10,
                        right: 12 - layer * 6,
                        top: 10 + layer * 14,
                        bottom: 0,
                        borderRadius: 16,
                        border: "1px solid rgba(255,255,255,0.06)",
                        background:
                            "linear-gradient(180deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.01) 100%)",
                        transform: hovered
                            ? `translateY(${layer * 6}px) scale(${1 - layer * 0.015})`
                            : `translateY(${layer * 10}px) scale(${1 - layer * 0.02})`,
                        transition: "transform 0.45s ease, opacity 0.45s ease",
                        opacity: 0.35 - layer * 0.1,
                        pointerEvents: "none",
                    }}
                />
            ))}

            <div
                style={{
                    position: "relative",
                    zIndex: 2,
                    display: "flex",
                    flexDirection: "column",
                    gap: 20,
                    padding: "28px 28px 24px",
                    borderRadius: 16,
                    border: "1px solid rgba(255,255,255,0.08)",
                    background:
                        "linear-gradient(145deg, rgba(24, 20, 18, 0.95) 0%, rgba(10, 12, 20, 0.92) 55%, rgba(8, 10, 18, 0.98) 100%)",
                    boxShadow: hovered
                        ? `0 24px 60px rgba(0,0,0,0.45), 0 0 0 1px rgba(255,255,255,0.04), 0 0 40px ${accentColor}22`
                        : "0 16px 40px rgba(0,0,0,0.35), 0 0 0 1px rgba(255,255,255,0.03)",
                    transform: hovered ? "translateY(-4px)" : "translateY(0)",
                    transition:
                        "transform 0.45s ease, box-shadow 0.45s ease, border-color 0.45s ease",
                    overflow: "hidden",
                }}
            >
                <div
                    aria-hidden
                    style={{
                        position: "absolute",
                        inset: 0,
                        borderRadius: 16,
                        padding: 1,
                        background: hovered
                            ? `linear-gradient(120deg, transparent 30%, ${accentColor}88 50%, transparent 70%)`
                            : `linear-gradient(120deg, transparent 40%, rgba(255,255,255,0.12) 50%, transparent 60%)`,
                        backgroundSize: "200% 100%",
                        animation: isStatic
                            ? undefined
                            : "grcShimmer 6s linear infinite",
                        WebkitMask:
                            "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                        WebkitMaskComposite: "xor",
                        maskComposite: "exclude",
                        pointerEvents: "none",
                    }}
                />

                <div
                    aria-hidden
                    style={{
                        position: "absolute",
                        top: 0,
                        left: 28,
                        right: 28,
                        height: 1,
                        background: `linear-gradient(90deg, transparent, ${accentColor}66, transparent)`,
                        opacity: hovered ? 1 : 0.5,
                        transition: "opacity 0.45s ease",
                        pointerEvents: "none",
                    }}
                />

                <div
                    aria-hidden
                    style={{
                        position: "absolute",
                        top: -80,
                        right: -40,
                        width: 220,
                        height: 220,
                        borderRadius: "50%",
                        background: `radial-gradient(circle, ${accentColor}33 0%, transparent 70%)`,
                        pointerEvents: "none",
                    }}
                />

                <div
                    aria-hidden
                    style={{
                        position: "absolute",
                        inset: 0,
                        backgroundImage:
                            "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
                        backgroundSize: "24px 24px",
                        opacity: 0.35,
                        pointerEvents: "none",
                    }}
                />

                <div style={{ position: "relative", zIndex: 1, display: "flex", flexDirection: "column", gap: 20 }}>
                <div
                    style={{
                        fontSize: 11,
                        letterSpacing: "0.14em",
                        textTransform: "uppercase",
                        color: "rgba(255,255,255,0.42)",
                        fontWeight: 500,
                    }}
                >
                    Ø{index} — {productCount}
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                    <div
                        style={{
                            fontSize: 34,
                            lineHeight: 1.1,
                            fontWeight: 600,
                            color: "rgb(255,255,255)",
                            letterSpacing: "-0.03em",
                        }}
                    >
                        {title}
                    </div>
                    <div
                        style={{
                            fontSize: 15,
                            lineHeight: 1.4,
                            color: "rgba(255,255,255,0.58)",
                            letterSpacing: "-0.01em",
                        }}
                    >
                        {subtitle}
                    </div>
                </div>

                <div
                    style={{
                        display: "flex",
                        flexWrap: "wrap",
                        gap: 8,
                    }}
                >
                    {tags.map((tag) => (
                        <span
                            key={tag}
                            style={{
                                padding: "7px 12px",
                                borderRadius: 8,
                                border: "1px solid rgba(255,255,255,0.1)",
                                background: "rgba(255,255,255,0.03)",
                                color: "rgba(255,255,255,0.72)",
                                fontSize: 12,
                                lineHeight: 1,
                                letterSpacing: "-0.01em",
                                whiteSpace: "nowrap",
                            }}
                        >
                            {tag}
                        </span>
                    ))}
                </div>

                <a
                    href={ctaLink}
                    style={{
                        marginTop: 4,
                        width: "fit-content",
                        color: accentColor,
                        fontSize: 14,
                        fontWeight: 500,
                        textDecoration: "none",
                        letterSpacing: "-0.01em",
                        borderBottom: hovered
                            ? `1px solid ${accentColor}`
                            : "1px solid transparent",
                        transition: "border-color 0.3s ease, opacity 0.3s ease",
                        opacity: hovered ? 1 : 0.92,
                    }}
                >
                    {ctaLabel}
                </a>
                </div>
            </div>
        </div>
    )
}

addPropertyControls(GRCCard, {
    index: {
        type: ControlType.String,
        title: "Index",
        defaultValue: "01",
    },
    productCount: {
        type: ControlType.String,
        title: "Product Count",
        defaultValue: "6 PRODUCTS",
    },
    title: {
        type: ControlType.String,
        title: "Title",
        defaultValue: "GRC Suite",
    },
    subtitle: {
        type: ControlType.String,
        title: "Subtitle",
        defaultValue: "Governance · Risk · Compliance",
    },
    tags: {
        type: ControlType.Array,
        title: "Tags",
        control: { type: ControlType.String, defaultValue: "Tag" },
        defaultValue: [
            "CCM",
            "Auditor Workbench",
            "Risk Assessment",
            "Smart Alert Triage",
            "Regulatory Compliance",
            "AI Branch Audit",
        ],
    },
    ctaLabel: {
        type: ControlType.String,
        title: "CTA Label",
        defaultValue: "Explore GRC Suite →",
    },
    ctaLink: {
        type: ControlType.Link,
        title: "CTA Link",
    },
    accentColor: {
        type: ControlType.Color,
        title: "Accent",
        defaultValue: "rgb(217, 100, 0)",
    },
})
