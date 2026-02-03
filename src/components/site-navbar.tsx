"use client";
import { useState } from "react";
import {
    Navbar,
    NavBody,
    NavItems,
    MobileNav,
    MobileNavHeader,
    MobileNavToggle,
    MobileNavMenu,
} from "@/components/ui/resizable-navbar";

export function SiteNavbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const navItems = [
        { name: "About", link: "#about" },
        { name: "Services", link: "#specialties" },
        { name: "Office", link: "#office" },
        { name: "Contact", link: "#contact" },
    ];

    return (
        <div className="relative w-full">
            <Navbar>
                {/* Desktop Navigation */}
                <NavBody className="!bg-[var(--color-bg)]/70 dark:!bg-[var(--color-bg)]/70 backdrop-blur-md border border-white/10 shadow-sm">
                    {/* Logo */}
                    <a
                        href="/"
                        className="relative z-20 flex items-center px-2 py-1 text-xl font-semibold"
                        style={{ color: "var(--color-text)" }}
                    >
                        Dr. Maya Reynolds
                    </a>

                    {/* Nav Items */}
                    <NavItems
                        items={navItems}
                        className="!text-[var(--color-text)]"
                    />

                    {/* CTA Button */}
                    <a
                        href="#contact"
                        className="px-5 py-2.5 text-sm font-semibold uppercase tracking-wider transition-all duration-200 hover:opacity-85 hover:-translate-y-0.5 rounded-md"
                        style={{
                            backgroundColor: "var(--color-text)",
                            color: "var(--color-bg)",
                        }}
                    >
                        Book Consultation
                    </a>
                </NavBody>

                {/* Mobile Navigation */}
                <MobileNav className="!bg-[var(--color-bg)]/70 dark:!bg-[var(--color-bg)]/70 backdrop-blur-md border-b border-white/10">
                    <MobileNavHeader>
                        {/* Logo */}
                        <a
                            href="/"
                            className="relative z-20 flex items-center px-2 py-1 text-lg font-semibold"
                            style={{ color: "var(--color-text)" }}
                        >
                            Dr. Maya Reynolds
                        </a>

                        <div className="mr-2">
                            <MobileNavToggle
                                isOpen={isMobileMenuOpen}
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            />
                        </div>
                    </MobileNavHeader>

                    <MobileNavMenu
                        isOpen={isMobileMenuOpen}
                        onClose={() => setIsMobileMenuOpen(false)}
                        className="!bg-[var(--color-bg)] dark:!bg-[var(--color-bg)]"
                    >
                        {navItems.map((item, idx) => (
                            <a
                                key={`mobile-link-${idx}`}
                                href={item.link}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="relative text-lg font-medium py-2"
                                style={{ color: "var(--color-text)" }}
                            >
                                <span className="block">{item.name}</span>
                            </a>
                        ))}
                        <div className="flex w-full flex-col gap-4 mt-4">
                            <a
                                href="#contact"
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="w-full px-5 py-3 text-sm font-semibold uppercase tracking-wider text-center rounded-md transition-all duration-200"
                                style={{
                                    backgroundColor: "var(--color-text)",
                                    color: "var(--color-bg)",
                                }}
                            >
                                Book Consultation
                            </a>
                        </div>
                    </MobileNavMenu>
                </MobileNav>
            </Navbar>
        </div>
    );
}
