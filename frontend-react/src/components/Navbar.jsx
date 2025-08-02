import React, { useState, useEffect } from "react";

function Navbar() {
        const [dark, setDark] = useState(false);
        const [mobileOpen, setMobileOpen] = useState(false);

        useEffect(() => {
                const stored = localStorage.getItem("theme");
                if (stored === "dark") setDark(true);
        }, []);

        useEffect(() => {
                if (dark) {
                        document.documentElement.classList.add("dark");
                        localStorage.setItem("theme", "dark");
                } else {
                        document.documentElement.classList.remove("dark");
                        localStorage.setItem("theme", "light");
                }
        }, [dark]);

        const toggleMobile = () => setMobileOpen((o) => !o);
        const closeMobile = () => setMobileOpen(false);

        return (
                <header id="navbar" className="apply-navbar apply-bg-primary">
                        <div className="apply-wrapper">
                                <div className="content">
                                        <div className="brand">
                                                <a
                                                        href="#hero"
                                                        className="brand-link"
                                                        aria-label="logo">
                                                        Andromeda
                                                </a>
                                        </div>
                                        <nav className="desktop-menu">
                                                <a href="#services" className="nav-link">
                                                        What We Do
                                                </a>
                                                <a href="#portfolio" className="nav-link">
                                                        Our Work
                                                </a>
                                                <a href="#team" className="nav-link">
                                                        Our Team
                                                </a>
                                                <a href="#contact" className="nav-link">
                                                        Contact
                                                </a>
                                        </nav>
                                        <div className="desktop-controls">
                                                <button
                                                        type="button"
                                                        className="toggle-button"
                                                        aria-label="Toggle Dark Mode"
                                                        onClick={() => setDark((d) => !d)}>
                                                        <span className="icons">
                                                                <svg
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                        fill="none"
                                                                        viewBox="0 0 24 24"
                                                                        strokeWidth={1.5}
                                                                        stroke="currentColor"
                                                                        className={
                                                                                dark
                                                                                        ? "size-6 hidden"
                                                                                        : "size-6"
                                                                        }>
                                                                        <path
                                                                                strokeLinecap="round"
                                                                                strokeLinejoin="round"
                                                                                d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591 1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                                                                        />
                                                                </svg>
                                                                <svg
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                        fill="none"
                                                                        viewBox="0 0 24 24"
                                                                        strokeWidth={1.5}
                                                                        stroke="currentColor"
                                                                        className={
                                                                                dark
                                                                                        ? "size-6"
                                                                                        : "size-6 hidden"
                                                                        }>
                                                                        <path
                                                                                strokeLinecap="round"
                                                                                strokeLinejoin="round"
                                                                                d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
                                                                        />
                                                                </svg>
                                                        </span>
                                                </button>
                                        </div>
                                        <div className="mobile-controls">
                                                <button
                                                        type="button"
                                                        aria-label="Toggle Dark Mode"
                                                        className="toggle-button"
                                                        onClick={() => setDark((d) => !d)}>
                                                        <span className="icons">
                                                                <svg
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                        fill="none"
                                                                        viewBox="0 0 24 24"
                                                                        strokeWidth={1.5}
                                                                        stroke="currentColor"
                                                                        className={
                                                                                dark
                                                                                        ? "size-6 hidden"
                                                                                        : "size-6"
                                                                        }>
                                                                        <path
                                                                                strokeLinecap="round"
                                                                                strokeLinejoin="round"
                                                                                d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591 1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                                                                        />
                                                                </svg>
                                                                <svg
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                        fill="none"
                                                                        viewBox="0 0 24 24"
                                                                        strokeWidth={1.5}
                                                                        stroke="currentColor"
                                                                        className={
                                                                                dark
                                                                                        ? "size-6"
                                                                                        : "size-6 hidden"
                                                                        }>
                                                                        <path
                                                                                strokeLinecap="round"
                                                                                strokeLinejoin="round"
                                                                                d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
                                                                        />
                                                                </svg>
                                                        </span>
                                                </button>
                                                <button
                                                        type="button"
                                                        aria-label="Toggle Mobile Menu"
                                                        className="mobile-menu-button"
                                                        onClick={toggleMobile}>
                                                        <span className="sr-only">Open menu</span>
                                                        <svg
                                                                className="h-6 w-6"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                fill="none"
                                                                viewBox="0 0 24 24"
                                                                stroke="currentColor"
                                                                aria-hidden="true">
                                                                <path
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                        strokeWidth="2"
                                                                        d="M4 6h16M4 12h16M4 18h16"
                                                                />
                                                        </svg>
                                                </button>
                                        </div>
                                </div>
                        </div>

                        <div
                                id="mobile-menu"
                                className={
                                        mobileOpen
                                                ? "apply-mobile-menu"
                                                : "apply-mobile-menu hidden"
                                }>
                                <div className="close-button">
                                        <button
                                                type="button"
                                                aria-label="Close Mobile Menu"
                                                onClick={closeMobile}>
                                                <span className="sr-only">Close menu</span>
                                                <svg
                                                        className="h-6 w-6"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        fill="none"
                                                        viewBox="0 0 24 24"
                                                        stroke="currentColor"
                                                        aria-hidden="true">
                                                        <path
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                                strokeWidth="2"
                                                                d="M6 18L18 6M6 6l12 12"
                                                        />
                                                </svg>
                                        </button>
                                </div>
                                <nav className="mobile-menu">
                                        <div className="mobile-nav-links">
                                                <a
                                                        href="#hero"
                                                        className="mobile-nav-link"
                                                        onClick={closeMobile}>
                                                        Home
                                                </a>
                                                <a
                                                        href="#services"
                                                        className="mobile-nav-link"
                                                        onClick={closeMobile}>
                                                        What We Do
                                                </a>
                                                <a
                                                        href="#portfolio"
                                                        className="mobile-nav-link"
                                                        onClick={closeMobile}>
                                                        Our Work
                                                </a>
                                                <a
                                                        href="#team"
                                                        className="mobile-nav-link"
                                                        onClick={closeMobile}>
                                                        Our Team
                                                </a>
                                                <a
                                                        href="#contact"
                                                        className="mobile-nav-link"
                                                        onClick={closeMobile}>
                                                        Contact
                                                </a>
                                        </div>
                                </nav>
                        </div>
                </header>
        );
}

export default Navbar;

