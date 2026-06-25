import { addPropertyControls, ControlType, useIsStaticRenderer } from "framer"
import { useEffect, useId, useMemo, type CSSProperties } from "react"

interface AnimatedLineCardProps {
    lineColor: string
    glowColor: string
    strokeWidth: number
    cornerRadius: number
    animationDuration: number
    showCircuitLines: boolean
    style?: CSSProperties
}

function roundedRectPath(
    x: number,
    y: number,
    w: number,
    h: number,
    r: number
): string {
    const right = x + w
    const bottom = y + h
    return [
        `M ${x + r} ${y}`,
        `H ${right - r}`,
        `Q ${right} ${y} ${right} ${y + r}`,
        `V ${bottom - r}`,
        `Q ${right} ${bottom} ${right - r} ${bottom}`,
        `H ${x + r}`,
        `Q ${x} ${bottom} ${x} ${bottom - r}`,
        `V ${y + r}`,
        `Q ${x} ${y} ${x + r} ${y}`,
        "Z",
    ].join(" ")
}

/**
 * @framerSupportedLayoutWidth any-prefer-fixed
 * @framerSupportedLayoutHeight any-prefer-fixed
 */
export default function AnimatedLineCard(props: AnimatedLineCardProps) {
    const {
        lineColor = "rgba(217, 100, 0, 0.15)",
        glowColor = "rgba(217, 100, 0, 0.95)",
        strokeWidth = 1,
        cornerRadius = 28,
        animationDuration = 5,
        showCircuitLines = true,
        style,
    } = props

    const isStatic = useIsStaticRenderer()
    const uid = useId().replace(/:/g, "")
    const borderGradientId = `borderGlow-${uid}`
    const circuitGradientId = `circuitGlow-${uid}`

    const cardPath = useMemo(
        () => roundedRectPath(8, 10, 84, 80, cornerRadius / 3),
        [cornerRadius]
    )

    const circuitPaths = useMemo(
        () => [
            "M 6 78 H 30 V 52 H 54 V 66 H 82 V 36",
            "M 10 84 H 34 V 58 H 58 V 72 H 86 V 42",
            "M 4 72 H 26 V 46 H 50 V 60 H 76 V 30",
        ],
        []
    )

    useEffect(() => {
        if (isStatic || typeof document === "undefined") return
        const styleEl = document.createElement("style")
        styleEl.textContent = `
            @keyframes framer-border-trace-${uid} {
                0% { stroke-dashoffset: 420; opacity: 0.25; }
                35% { opacity: 1; }
                100% { stroke-dashoffset: 0; opacity: 0.25; }
            }
            @keyframes framer-circuit-flow-${uid} {
                0% { stroke-dashoffset: 760; opacity: 0.15; }
                45% { opacity: 0.95; }
                100% { stroke-dashoffset: 0; opacity: 0.15; }
            }
        `
        document.head.appendChild(styleEl)
        return () => {
            document.head.removeChild(styleEl)
        }
    }, [isStatic, uid])

    const borderAnimation = isStatic
        ? undefined
        : {
              strokeDasharray: 420,
              strokeDashoffset: 0,
              animation: `framer-border-trace-${uid} ${animationDuration}s ease-in-out infinite`,
          }

    const circuitAnimation = isStatic
        ? undefined
        : {
              strokeDasharray: 760,
              strokeDashoffset: 0,
              animation: `framer-circuit-flow-${uid} ${animationDuration * 1.2}s ease-in-out infinite`,
          }

    return (
        <div
            style={{
                position: "relative",
                width: "100%",
                height: "100%",
                overflow: "hidden",
                ...style,
            }}
        >
            <svg
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
                style={{
                    position: "absolute",
                    inset: 0,
                    width: "100%",
                    height: "100%",
                    pointerEvents: "none",
                }}
                aria-hidden="true"
            >
                <defs>
                    <linearGradient id={borderGradientId} x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="rgba(255,255,255,0)" />
                        <stop offset="35%" stopColor={lineColor} />
                        <stop offset="50%" stopColor={glowColor} />
                        <stop offset="65%" stopColor={lineColor} />
                        <stop offset="100%" stopColor="rgba(255,255,255,0)" />
                    </linearGradient>
                    <linearGradient id={circuitGradientId} x1="0%" y1="100%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="rgba(255,255,255,0)" />
                        <stop offset="42%" stopColor={lineColor} />
                        <stop offset="50%" stopColor={glowColor} />
                        <stop offset="58%" stopColor={lineColor} />
                        <stop offset="100%" stopColor="rgba(255,255,255,0)" />
                    </linearGradient>
                </defs>

                <path
                    d={cardPath}
                    fill="none"
                    stroke={`url(#${borderGradientId})`}
                    strokeWidth={strokeWidth}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    vectorEffect="non-scaling-stroke"
                    style={borderAnimation}
                />

                {showCircuitLines &&
                    circuitPaths.map((path, index) => (
                        <path
                            key={path}
                            d={path}
                            fill="none"
                            stroke={`url(#${circuitGradientId})`}
                            strokeWidth={strokeWidth * 0.8}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            vectorEffect="non-scaling-stroke"
                            style={{
                                ...circuitAnimation,
                                animationDelay: `${index * 0.55}s`,
                                opacity: 0.3 + index * 0.12,
                            }}
                        />
                    ))}
            </svg>
        </div>
    )
}

addPropertyControls(AnimatedLineCard, {
    lineColor: {
        type: ControlType.Color,
        title: "Line Color",
        defaultValue: "rgba(217, 100, 0, 0.15)",
    },
    glowColor: {
        type: ControlType.Color,
        title: "Glow Color",
        defaultValue: "rgba(217, 100, 0, 0.95)",
    },
    strokeWidth: {
        type: ControlType.Number,
        title: "Stroke Width",
        defaultValue: 1,
        min: 0.5,
        max: 4,
        step: 0.5,
        unit: "px",
    },
    cornerRadius: {
        type: ControlType.Number,
        title: "Corner Radius",
        defaultValue: 28,
        min: 0,
        max: 64,
        step: 1,
        unit: "px",
    },
    animationDuration: {
        type: ControlType.Number,
        title: "Duration",
        defaultValue: 5,
        min: 1,
        max: 12,
        step: 0.5,
        unit: "s",
    },
    showCircuitLines: {
        type: ControlType.Boolean,
        title: "Circuit Lines",
        defaultValue: true,
    },
})
