import type { ComponentType } from "react"
import { useEffect, useState } from "react"

type NavbarProps = {
    variant?: string
    style?: React.CSSProperties
    [key: string]: unknown
}

/**
 * Switches the Navbar between transparent (hero) and white scrolled states.
 */
export function NavbarScrollBehavior(Component: ComponentType<NavbarProps>): ComponentType<NavbarProps> {
    return (props: NavbarProps) => {
        const [scrolled, setScrolled] = useState(false)

        useEffect(() => {
            const onScroll = () => setScrolled(window.scrollY > 64)
            onScroll()
            window.addEventListener("scroll", onScroll, { passive: true })
            return () => window.removeEventListener("scroll", onScroll)
        }, [])

        return (
            <Component
                {...props}
                variant={scrolled ? "Desktop Scrolled" : "Desktop"}
                style={{
                    ...props.style,
                    position: "fixed",
                    top: 0,
                    left: 0,
                    right: 0,
                    zIndex: 10,
                }}
            />
        )
    }
}
