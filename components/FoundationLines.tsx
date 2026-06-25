import { addPropertyControls, ControlType, useIsStaticRenderer } from "framer"
import { useId, type CSSProperties } from "react"

const FOUNDATION_PATH =
    "M 140 7 L 60 13 L 140 13 L 133 20 L 133 110 L 127 113 L 560 113 L 550 200 L 550 240 L 540 243 L 717 243 L 713 260 L 713 477 L 700 480 L 997 480"

const VIEWBOX = "0 0 1000 500"

const GLOW_ICON_DATA_URL =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAADx0lEQVR4AcSYS0hUURjH/+eWPcBeFNkLooWObouioidlVPQyalGERI4RvaBNtGjholUQBRWRaQ+jKHsXaahhZSC0LElnWrgILININKzU5vb/ro7O6Myd+zjm8P0953znnO/73TP3nHsdAxo/4QKcE2kMCW2A5k6MgkK+yKprotQGGJ6MdSYwRRSaiFxNfPpWECZ2R6GUMVCP+ryWWlaweS/GEWAH1Wsm8vp8vW0ff7UAdo9GHhkEkoVl6V1p2AYNHy2AvO+ODWYxTRwd7PPS9g3IY2UFEy+k4kwBS0IFWBTn9NDwDRhROGuT94xNn6MuX4DhIHZxpeYnzaSwrCmIrUn7HXR4BgwdwGzee5dT5eAFlDTsxYxU45L1ewL8fAzj0YMnDDqBSmXT0kajPNWgZP2uAblqqrPDSrggWdAE/uWhIG4m8Kd0uQKUZ+ynIO4y6ibKre3hri6WC3Qz0TFgYz6mhiehkgl2ukkQN1ahkBdY3nAQ6XF+m4YjwFAh8owx+Mg4vl8CeIE70rrQ0BjEKjj42ALyK1nDe6ceJh4y1nRKl81l4lrGruLFL7QLynFDuzlpAyfXQ6GGvYup4bJcXvw75qpuKsD6REksQC674iDZaRdYfuWkCg4eTjCGj7O1SqFScnNxzof2Y1m016CziE+EL3S8oQ5RGdRIWQYX5zAiqCNXS7gQJ60VHCmaFHktNiNQgqKsEszkYHkrucjyGzVS1sr7/gLf85cLU9YVnLIo+bw0CVpHHaYylAk5iOUr/y+g3AOvCbaRuWcEruBIoBhvhUmSW4BSiVVWKZ5z8Er6ZFWHE/SlEcHS7BKsIlgl8w2xhIDRUYSUVV1pmNhCXyuly1q4a3MZf23mVdTbBbUFjE7MLMWzMT3IZvsFlcBcuBQeG7+Qw/urxsksR4ASaN51tLXMwWYeA3ek7UVctasE2555C+1O5zsGlICri9DD+3M3N9FTabsRN8I1whUo8BJdTHQFKHElQfoo7GL9PeXMFGq5EfY5Gxw/yjWgTJ9VjE6uiPzf2yHtFGqN/IHnVzRPgALEFWnml3VE6nbiMZKfU4bvdmPs+jwDStBAKW6w/EAlswoeI1XJOp34fQFKAv6CcFzKRIoYOJHI78bnGzC7FHI2Dtkw3Eyvcopht7qOOH0DShZT4bSUseIvDpdi217rWgDHduMBAX5TUftJn+uzMjo5ttQCyKeMwN3vD6zwqM/X7/Ja0QJoJVe4bZX8Y0YG6mz6Mm2AWW2o4sb4IQq0o9oXVcxkbYDqHv7y4C4TWfWYJH6q/wAAAP//a71dUAAAAAZJREFUAwB2kOvrj3c9CQAAAABJRU5ErkJggg=="

interface GlowImage {
    src: string
    alt?: string
}

interface FoundationLinesProps {
    glowImage: GlowImage
    lineColor: string
    glowSize: number
    duration: number
    style?: CSSProperties
}

/**
 * @framerSupportedLayoutWidth any-prefer-fixed
 * @framerSupportedLayoutHeight any-prefer-fixed
 */
export default function FoundationLines(props: FoundationLinesProps) {
    const {
        glowImage = {
            src: GLOW_ICON_DATA_URL,
            alt: "Foundation glow",
        },
        lineColor = "rgba(217, 100, 0, 0.35)",
        glowSize = 16,
        duration = 12,
        style,
    } = props

    const isStatic = useIsStaticRenderer()
    const uid = useId().replace(/:/g, "")
    const half = glowSize / 2

    return (
        <div
            style={{
                position: "relative",
                width: "100%",
                height: "100%",
                overflow: "visible",
                ...style,
            }}
        >
            <svg
                viewBox={VIEWBOX}
                preserveAspectRatio="xMidYMid meet"
                style={{
                    position: "absolute",
                    inset: 0,
                    width: "100%",
                    height: "100%",
                    pointerEvents: "none",
                    overflow: "visible",
                }}
                aria-hidden="true"
            >
                <path
                    d={FOUNDATION_PATH}
                    fill="none"
                    stroke={lineColor}
                    strokeWidth={1.5}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    vectorEffect="non-scaling-stroke"
                    style={
                        isStatic
                            ? undefined
                            : {
                                  strokeDasharray: "8 6",
                                  animation: `foundation-line-flow-${uid} ${duration}s linear infinite`,
                              }
                    }
                />

                {!isStatic && glowImage?.src && (
                    <g
                        style={{
                            filter: "drop-shadow(0 0 8px rgba(217,100,0,0.9))",
                            mixBlendMode: "screen",
                        }}
                    >
                        <image
                            href={glowImage.src}
                            width={glowSize}
                            height={glowSize}
                            x={-half}
                            y={-half}
                        >
                            <animateMotion
                                dur={`${duration}s`}
                                repeatCount="indefinite"
                                path={FOUNDATION_PATH}
                                calcMode="linear"
                            />
                        </image>
                    </g>
                )}

                {isStatic && glowImage?.src && (
                    <image
                        href={glowImage.src}
                        width={glowSize}
                        height={glowSize}
                        x={133 - half}
                        y={20 - half}
                        style={{ filter: "drop-shadow(0 0 8px rgba(217,100,0,0.9))" }}
                    />
                )}
            </svg>

            {!isStatic && (
                <style>{`
                    @keyframes foundation-line-flow-${uid} {
                        0% { stroke-dashoffset: 0; }
                        100% { stroke-dashoffset: -28; }
                    }
                `}</style>
            )}
        </div>
    )
}

addPropertyControls(FoundationLines, {
    glowImage: {
        type: ControlType.ResponsiveImage,
        title: "Glow Icon",
    },
    lineColor: {
        type: ControlType.Color,
        title: "Line Color",
        defaultValue: "rgba(217, 100, 0, 0.35)",
    },
    glowSize: {
        type: ControlType.Number,
        title: "Glow Size",
        defaultValue: 16,
        min: 8,
        max: 48,
        step: 1,
        unit: "px",
    },
    duration: {
        type: ControlType.Number,
        title: "Duration",
        defaultValue: 12,
        min: 4,
        max: 30,
        step: 0.5,
        unit: "s",
    },
})
