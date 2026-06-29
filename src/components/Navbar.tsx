"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, ChevronDown, Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import {
  headerActionLinks,
  headerNavLinks,
  navMegaSidebar,
  navProductsMega,
  navSuitesMega,
  siteConfig,
} from "@/content/site";
import { Logo } from "./ui/Logo";
import { PillButton } from "./ui/PillButton";
import "./navbar.css";

type MegaSidebar = typeof navMegaSidebar;

function MegaMenuSuiteMedia({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="mega-menu-suite-media">
      <img src={src} alt={alt} className="mega-menu-suite-image" loading="eager" decoding="async" />
    </div>
  );
}

function MegaMenuResourceThumb({ src, alt }: { src: string; alt: string }) {
  return (
    <span className="products-mega-resource-thumb">
      <img src={src} alt={alt} className="products-mega-resource-image" loading="eager" decoding="async" />
    </span>
  );
}

function MegaMenuSidebar({ sidebar }: { sidebar: MegaSidebar }) {
  return (
    <aside className="products-mega-sidebar">
      <div className="products-mega-side-card">
        <p className="products-mega-side-label">Top Resources</p>
        <div className="products-mega-resources">
          {sidebar.topResources.map((resource) => (
            <Link key={resource.title} href={resource.href} className="products-mega-resource" target="_blank" rel="noopener noreferrer">
              <MegaMenuResourceThumb src={resource.image} alt={resource.imageAlt} />
              <span className="products-mega-resource-title">{resource.title}</span>
            </Link>
          ))}
        </div>
      </div>

      <div className="products-mega-side-card">
        <p className="products-mega-side-label">Quick Links</p>
        <ul className="products-mega-quick-links">
          {sidebar.quickLinks.map((link) => (
            <li key={link.label}>
              <Link href={link.href} className="products-mega-quick-link">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}

function ProductsMegaMenu() {
  return (
    <div className="products-mega-menu products-mega-menu--products">
      <div className="products-mega-main">
        {navProductsMega.suites.map((suite) => (
          <div key={suite.id} className="products-mega-suite-card">
            <MegaMenuSuiteMedia src={suite.image} alt={suite.imageAlt} />
            <div className="products-mega-suite-intro">
              <h3 className="products-mega-suite-title">{suite.title}</h3>
            </div>
            <div className="products-mega-suite-divider" aria-hidden="true" />
            <ul className="products-mega-suite-links">
              {suite.items.map((item) => (
                <li key={item}>
                  <Link href="#" className="products-mega-suite-link">
                    <span className="products-mega-suite-link-text">{item}</span>
                    <ArrowUpRight size={13} strokeWidth={2.25} className="products-mega-suite-link-arrow" aria-hidden />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <MegaMenuSidebar sidebar={navMegaSidebar} />
    </div>
  );
}

function SuitesMegaMenu() {
  return (
    <div className="products-mega-menu products-mega-menu--suites">
      <div className="products-mega-main">
        {navSuitesMega.suites.map((suite) => (
          <Link key={suite.id} href={suite.href} className="suites-mega-suite-card">
            <MegaMenuSuiteMedia src={suite.image} alt={suite.imageAlt} />
            <div className="products-mega-suite-divider" aria-hidden="true" />
            <div className="suites-mega-suite-body">
              <h3 className="products-mega-suite-title">{suite.title}</h3>
              <p className="suites-mega-suite-subtitle">{suite.subtitle}</p>
              <p className="products-mega-suite-desc">{suite.description}</p>
            </div>
          </Link>
        ))}
      </div>

      <MegaMenuSidebar sidebar={navMegaSidebar} />
    </div>
  );
}

function useMegaMenu() {
  const [open, setOpen] = useState(false);
  return {
    open,
    openMenu: () => setOpen(true),
    closeMenu: () => setOpen(false),
    toggleMenu: () => setOpen((prev) => !prev),
  };
}

function NavMegaTrigger({
  label,
  open,
  onToggle,
}: {
  label: string;
  open: boolean;
  onToggle: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-expanded={open}
      className={`nav-link flex items-center gap-1 ${open ? "nav-link--active" : ""}`}
    >
      {label}
      <ChevronDown size={14} className={`transition-transform ${open ? "rotate-180" : ""}`} />
    </button>
  );
}

function NavMegaPanel({
  open,
  children,
}: {
  open: boolean;
  children: React.ReactNode;
}) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -4 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -4 }}
          transition={{ duration: 0.2 }}
          className="nav-dropdown-panel--mega absolute inset-x-0 top-full z-40 hidden lg:block"
        >
          <div className="nav-mega-bg" aria-hidden>
            <div className="nav-mega-bg-gradient" />
            <div className="nav-mega-bg-noise" />
          </div>
          <div className="products-mega-shell px-5 sm:px-[50px]">{children}</div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const suitesMenu = useMegaMenu();
  const productsMenu = useMegaMenu();

  const toggleSuitesMenu = () => {
    if (suitesMenu.open) {
      suitesMenu.closeMenu();
      return;
    }
    productsMenu.closeMenu();
    suitesMenu.openMenu();
  };

  const toggleProductsMenu = () => {
    if (productsMenu.open) {
      productsMenu.closeMenu();
      return;
    }
    suitesMenu.closeMenu();
    productsMenu.openMenu();
  };

  const closeMegaMenus = () => {
    suitesMenu.closeMenu();
    productsMenu.closeMenu();
  };

  useEffect(() => {
    if (!suitesMenu.open && !productsMenu.open) return;

    const handlePointerDown = (event: MouseEvent) => {
      const header = headerRef.current;
      if (header && !header.contains(event.target as Node)) {
        closeMegaMenus();
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeMegaMenus();
    };

    document.addEventListener("mousedown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [suitesMenu.open, productsMenu.open]);

  useEffect(() => {
    const header = headerRef.current;
    if (!header) return;

    const syncHeaderHeight = () => {
      document.documentElement.style.setProperty(
        "--site-header-height",
        `${header.offsetHeight}px`,
      );
    };

    syncHeaderHeight();

    const observer = new ResizeObserver(syncHeaderHeight);
    observer.observe(header);
    return () => observer.disconnect();
  }, [mobileOpen, suitesMenu.open, productsMenu.open]);

  return (
    <header
      ref={headerRef}
      className="fixed inset-x-0 top-0 z-50 border-b border-border bg-white/95 backdrop-blur-md"
    >
      <div className="px-5 py-3 sm:px-[50px] sm:py-3.5">
        <div className="relative flex items-center justify-between">
          <Logo className="relative z-10 h-6 w-auto sm:h-7" />

          <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-8 lg:flex">
            <NavMegaTrigger label="Suites" open={suitesMenu.open} onToggle={toggleSuitesMenu} />

            <NavMegaTrigger label="Products" open={productsMenu.open} onToggle={toggleProductsMenu} />

            {headerNavLinks.map((link) => (
              <Link key={link.href} href={link.href} className="nav-link">
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="relative z-10 hidden items-center gap-7 lg:flex">
            {headerActionLinks.map((link) => (
              <Link key={link.href + link.label} href={link.href} className="nav-link">
                {link.label}
              </Link>
            ))}
            <PillButton href="#" variant="orange" showArrow>
              {siteConfig.cta.primary}
            </PillButton>
          </div>

          <button
            className="relative z-10 text-charcoal lg:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <NavMegaPanel open={suitesMenu.open}>
        <SuitesMegaMenu />
      </NavMegaPanel>

      <NavMegaPanel open={productsMenu.open}>
        <ProductsMegaMenu />
      </NavMegaPanel>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden border-t border-border lg:hidden"
          >
            <div className="flex flex-col gap-1 px-5 py-4">
              {headerNavLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="py-2.5 text-grey hover:text-charcoal"
                >
                  {link.label}
                </Link>
              ))}
              {headerActionLinks.map((link) => (
                <Link
                  key={link.href + link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="py-2.5 text-grey hover:text-charcoal"
                >
                  {link.label}
                </Link>
              ))}
              <PillButton href="#" variant="orange" className="mt-3 w-full justify-center" showArrow>
                {siteConfig.cta.primary}
              </PillButton>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
