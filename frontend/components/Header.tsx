'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-gradient-to-r from-indigo-600 to-purple-700 shadow-lg fixed top-0 w-full z-50 transition-all duration-300">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 justify-between items-center">
          {/* Logo/Brand */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <span className="text-2xl font-extrabold text-white drop-shadow-md hover:text-yellow-300 transition-all duration-300 transform hover:scale-105">
                Tech Cheat Sheet
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden sm:flex sm:space-x-8">
            <Link 
              href="/"
              className="text-white hover:text-yellow-300 px-3 py-2 text-sm font-medium transition-all duration-300 border-b-2 border-transparent hover:border-yellow-300 hover:translate-y-[-2px]"
            >
              Home
            </Link>
            <Link
              href="/docs"
              className="text-white hover:text-yellow-300 px-3 py-2 text-sm font-medium transition-all duration-300 border-b-2 border-transparent hover:border-yellow-300 hover:translate-y-[-2px]"
            >
              Docs
            </Link>
            <Link
              href="/about"
              className="text-white hover:text-yellow-300 px-3 py-2 text-sm font-medium transition-all duration-300 border-b-2 border-transparent hover:border-yellow-300 hover:translate-y-[-2px]"
            >
              About
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="sm:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-yellow-300 hover:bg-purple-800 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-yellow-300"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {!isMenuOpen ? (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="sm:hidden bg-gradient-to-b from-purple-700 to-indigo-800 rounded-b-lg shadow-xl animate-fadeIn">
            <div className="space-y-1 pb-3 pt-2">
              <Link
                href="/"
                className="block px-4 py-3 text-base font-medium text-white hover:bg-purple-800/50 hover:text-yellow-300 rounded-md transition-all duration-300 transform hover:translate-x-1"
              >
                Home
              </Link>
              <Link
                href="/docs"
                className="block px-4 py-3 text-base font-medium text-white hover:bg-purple-800/50 hover:text-yellow-300 rounded-md transition-all duration-300 transform hover:translate-x-1"
              >
                Docs
              </Link>
              <Link
                href="/about"
                className="block px-4 py-3 text-base font-medium text-white hover:bg-purple-800/50 hover:text-yellow-300 rounded-md transition-all duration-300 transform hover:translate-x-1"
              >
                About
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
