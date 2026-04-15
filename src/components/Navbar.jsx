import React from "react";

const Navbar = () => {
    const navLinks = [
        {name: "About", href: "#about"},
        {name: "Projects", href: "#projects"},
        {name: "Skills", href: "#skills"},
        {name: "Contact", href: "#contact"},
    ];

    return (
        <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-slate-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">
                    <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent cursor-default">
                        L. McNeal
                    </span>
                    <div className="hidden md:flex space-x-8">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-slate-600 hover:text-blue-600 font-medium transition-colors"
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>
                    {/* Mobile simple CTA */}
                    <div className="md:hidden">
                        <a href="#contact" className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm">
                            Contact
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
