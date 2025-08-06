"use client";

import React, { useState } from "react";
import { Home, Menu, User, Info, Mail, Search, Users, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const navigationItems = [
        { href: "/home", icon: Home, label: "HOME" },
        { href: "/about", icon: Info, label: "ABOUT" },
        { href: "/contact", icon: Mail, label: "CONTACT" },
        { href: "/research", icon: Search, label: "RESEARCH" },
        { href: "/people", icon: Users, label: "PEOPLE" },
    ];

    return (
        <>
            <nav className={cn("bg-teal-600 shadow-md fixed top-0 left-0 right-0 z-40")}>
                {/* Desktop and Mobile Header */}
                <div className="flex items-center justify-between px-6 py-4">
                    <div className="flex items-center gap-4">
                        <button
                            onClick={toggleMobileMenu}
                            className="md:hidden p-1"
                            aria-label="Toggle mobile menu"
                        >
                            <Menu className="h-6 w-6 text-white" />
                        </button>
                        <span className="font-bold text-lg md:text-xl text-white">
                            Welcome To The GeoVision-Lab
                        </span>
                    </div>
                    
                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-2">
                        {navigationItems.map((item) => {
                            const IconComponent = item.icon;
                            return (
                                <Link key={item.href} href={item.href}>
                                    <Button variant="ghost" size="sm" className="flex items-center gap-2 text-white hover:bg-yellow-400 hover:text-gray-900 transition-colors">
                                        <IconComponent className="h-4 w-4" />
                                        {item.label}
                                    </Button>
                                </Link>
                            );
                        })}
                    </div>
                </div>
            </nav>

            {/* Mobile Overlay Menu */}
            {isMobileMenuOpen && (
                <div className="fixed inset-0 z-50 md:hidden">
                    {/* Backdrop */}
                    <div 
                        className="fixed inset-0 bg-black bg-opacity-50"
                        onClick={toggleMobileMenu}
                    ></div>
                    
                    {/* Menu Panel */}
                    <div className="fixed inset-0 bg-white">
                        {/* Header with close button */}
                        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200 bg-teal-600">
                            <span className="font-bold text-lg text-white">
                                GeoVision-Lab
                            </span>
                            <button
                                onClick={toggleMobileMenu}
                                className="p-2 hover:bg-yellow-400 hover:text-gray-900 rounded transition-colors"
                                aria-label="Close menu"
                            >
                                <X className="h-6 w-6 text-white" />
                            </button>
                        </div>
                        
                        {/* Navigation Items */}
                        <div className="px-6 py-8">
                            <nav className="space-y-4">
                                {navigationItems.map((item) => {
                                    const IconComponent = item.icon;
                                    return (
                                        <Link 
                                            key={item.href} 
                                            href={item.href}
                                            onClick={toggleMobileMenu}
                                        >
                                            <div className="flex items-center gap-4 py-4 px-2 text-gray-800 hover:bg-yellow-400 hover:text-gray-900 rounded-lg transition-colors">
                                                <IconComponent className="h-5 w-5" />
                                                <span className="text-lg font-medium tracking-wide">
                                                    {item.label}
                                                </span>
                                            </div>
                                        </Link>
                                    );
                                })}
                            </nav>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Navbar;