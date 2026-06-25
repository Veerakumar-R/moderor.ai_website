import { addPropertyControls, ControlType, useIsStaticRenderer } from "framer"
import { useCallback, useEffect, useRef, useState, startTransition, type CSSProperties } from "react"

interface WorkListItem {
    title: string
    tagline: string
    image?: string
    bgColor?: string
}

interface HeroWorkListProps {
    itemsData: string
    accentColor: string
    inactiveOpacity: number
    activeShift: number
    style?: CSSProperties
}

function parseItemsData(data: string, fallback: WorkListItem[]): WorkListItem[] {
    if (!data?.trim()) return fallback
    try {
        if (data.trim().startsWith("[")) {
            const parsed = JSON.parse(data)
            if (Array.isArray(parsed) && parsed.length) return parsed
        }
    } catch {
        /* fall through */
    }

    const rows = data.split(";;").map((row) => row.trim()).filter(Boolean)
    if (!rows.length) return fallback

    return rows.map((row, index) => {
        const [title, tagline] = row.split("|")
        return {
            title: title?.trim() || `Item ${index + 1}`,
            tagline: tagline?.trim() || "",
            bgColor: `rgb(${56 - index * 6}, ${34 - index * 4}, ${18 - index * 2})`,
        }
    })
}

const DEFAULT_ITEMS: WorkListItem[] = [
    {
        title: "Continuous Compliance Monitoring",
        tagline:
            "Non-compliance surfaced the moment it appears. Agents evaluate every asset 24/7 against every control.",
        bgColor: "rgb(72, 42, 18)",
    },
    {
        title: "Auditor Workbench",
        tagline:
            "Evidence collected before the audit starts. MCP-connected sources, planned-vs-actual analytics.",
        bgColor: "rgb(58, 36, 20)",
    },
]

const EASE = "cubic-bezier(0.19, 1, 0.22, 1)"

/**
 * @framerSupportedLayoutWidth any-prefer-fixed
 * @framerSupportedLayoutHeight any-prefer-fixed
 */
export default function HeroWorkList(props: HeroWorkListProps) {
    const {
        itemsData = "",
        accentColor = "rgb(217, 100, 0)",
        inactiveOpacity = 0.22,
        activeShift = 56,
        style,
    } = props

    const items = parseItemsData(itemsData, DEFAULT_ITEMS)

    const isStatic = useIsStaticRenderer()
    const rootRef = useRef<HTMLDivElement>(null)
    const itemRefs = useRef<(HTMLDivElement | null)[]>([])
    const [activeIndex, setActiveIndex] = useState(isStatic ? 0 : -1)
    const [even, setEven] = useState(false)
    const [showing, setShowing] = useState(isStatic)
    const lastIndex = useRef(-1)
    const toggleWait = useRef(false)

    const applyActive = useCallback(
        (index: number) => {
            if (index === lastIndex.current) return
            lastIndex.current = index

            startTransition(() => {
                setActiveIndex(index)
                setShowing(index >= 0)
            })

            if (index >= 0 && !toggleWait.current && !isStatic) {
                toggleWait.current = true
                startTransition(() => setEven((v) => !v))
                window.setTimeout(() => {
                    toggleWait.current = false
                }, 300)
            }
        },
        [isStatic]
    )

    const updateActive = useCallback(
        (clientY: number) => {
            if (!itemRefs.current.length) return
            let index = -1
            for (let i = 0; i < itemRefs.current.length; i++) {
                const el = itemRefs.current[i]
                if (!el) continue
                const rect = el.getBoundingClientRect()
                if (clientY >= rect.top && clientY <= rect.bottom) index = i
            }
            applyActive(index)
        },
        [applyActive]
    )

    useEffect(() => {
        if (isStatic) return

        const isMobile = () => window.innerWidth <= 800

        const onMove = (e: MouseEvent) => {
            if (isMobile()) return
            updateActive(e.clientY)
        }
        const onScroll = () => {
            const y = isMobile() ? window.innerHeight / 2 : null
            if (y !== null) updateActive(y)
        }

        const root = rootRef.current
        root?.addEventListener("mousemove", onMove, { passive: true })
        window.addEventListener("scroll", onScroll, { passive: true })
        window.addEventListener("resize", onScroll, { passive: true })

        if (isMobile()) onScroll()
        else if (root) {
            const rect = root.getBoundingClientRect()
            updateActive(rect.top + rect.height / 2)
        }

        return () => {
            root?.removeEventListener("mousemove", onMove)
            window.removeEventListener("scroll", onScroll)
            window.removeEventListener("resize", onScroll)
        }
    }, [isStatic, updateActive])

    const mediaRotate = even ? -5 : 5

    return (
        <div
            ref={rootRef}
            style={{
                position: "relative",
                width: "100%",
                minHeight: 420,
                padding: "8px 0 24px",
                ...style,
            }}
        >
            <div
                aria-hidden
                style={{
                    position: "absolute",
                    top: 0,
                    right: 0,
                    width: "72%",
                    height: "calc(100% - 24px)",
                    pointerEvents: "none",
                    opacity: showing ? 1 : 0,
                    transition: "opacity 200ms linear",
                }}
            >
                <div
                    style={{
                        position: "sticky",
                        top: "18%",
                        height: 280,
                        width: "100%",
                    }}
                >
                    <div
                        style={{
                            width: "100%",
                            height: "100%",
                            transform: `rotate(${mediaRotate}deg)`,
                            transition: `transform 1000ms ${EASE}`,
                            borderRadius: 12,
                            overflow: "hidden",
                            border: "1px solid rgba(255,255,255,0.12)",
                            boxShadow: "0 24px 48px rgba(0,0,0,0.35)",
                        }}
                    >
                        {items.map((item, i) => (
                            <div
                                key={`media-${item.title}`}
                                style={{
                                    position: "absolute",
                                    inset: 0,
                                    opacity: activeIndex === i ? 1 : 0,
                                    visibility: activeIndex === i ? "visible" : "hidden",
                                    transition:
                                        activeIndex === i
                                            ? "opacity 200ms"
                                            : "opacity 300ms, visibility 1ms 300ms",
                                    background: item.image
                                        ? `url(${item.image}) center/cover no-repeat`
                                        : `linear-gradient(145deg, ${item.bgColor || "rgb(40, 28, 18)"} 0%, rgb(8, 10, 18) 100%)`,
                                }}
                            />
                        ))}
                    </div>
                </div>
            </div>

            <div style={{ position: "relative", zIndex: 2, maxWidth: "88%" }}>
                {items.map((item, i) => {
                    const active = activeIndex === i
                    return (
                        <div
                            key={item.title}
                            ref={(el) => {
                                itemRefs.current[i] = el
                            }}
                            style={{
                                padding: "28px 0",
                                position: "relative",
                                opacity: active ? 1 : inactiveOpacity,
                                zIndex: active ? 2 : -1,
                                transform: active
                                    ? `translateX(${activeShift}px)`
                                    : "translateX(0)",
                                transition: active
                                    ? `opacity 300ms linear, transform 1200ms ${EASE}`
                                    : `opacity 300ms linear, transform 600ms ${EASE}`,
                                cursor: "default",
                            }}
                        >
                            <div
                                aria-hidden
                                style={{
                                    content: '""',
                                    position: "absolute",
                                    left: 0,
                                    top: "calc(50% - 20px)",
                                    width: 32,
                                    height: 32,
                                    transform: active
                                        ? `translateX(-${activeShift}px)`
                                        : "translateX(-40px)",
                                    opacity: active ? 1 : 0,
                                    transition: active
                                        ? `opacity 500ms linear, transform 900ms ${EASE}`
                                        : `opacity 100ms linear, transform 600ms ${EASE}`,
                                    color: accentColor,
                                    fontSize: 22,
                                    lineHeight: "32px",
                                    textAlign: "center",
                                }}
                            >
                                →
                            </div>

                            <div
                                style={{
                                    fontSize: 26,
                                    lineHeight: 1.1,
                                    fontWeight: 500,
                                    color: "rgb(255,255,255)",
                                    letterSpacing: "-0.03em",
                                    whiteSpace: "pre-wrap",
                                }}
                            >
                                {item.title}
                            </div>
                            <div
                                style={{
                                    marginTop: 10,
                                    fontSize: 12,
                                    lineHeight: 1.5,
                                    fontWeight: 400,
                                    letterSpacing: "0.04em",
                                    textTransform: "uppercase",
                                    color: "rgba(255,255,255,0.72)",
                                    opacity: active ? 1 : 0,
                                    transition: "opacity 300ms linear",
                                }}
                            >
                                {item.tagline}
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

addPropertyControls(HeroWorkList, {
    itemsData: {
        type: ControlType.String,
        title: "Items Data",
        displayTextArea: true,
        description: "Format: Title|Tagline;;Title|Tagline",
        defaultValue:
            "Continuous Compliance Monitoring|Non-compliance surfaced the moment it appears. Agents evaluate every asset 24/7 against every control.;;Auditor Workbench|Evidence collected before the audit starts. MCP-connected sources, planned-vs-actual analytics.",
    },
    accentColor: {
        type: ControlType.Color,
        title: "Accent",
        defaultValue: "rgb(217, 100, 0)",
    },
    inactiveOpacity: {
        type: ControlType.Number,
        title: "Inactive Opacity",
        defaultValue: 0.22,
        min: 0,
        max: 1,
        step: 0.01,
    },
    activeShift: {
        type: ControlType.Number,
        title: "Active Shift",
        defaultValue: 56,
        min: 0,
        max: 120,
        step: 1,
        unit: "px",
    },
})
