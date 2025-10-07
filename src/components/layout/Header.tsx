'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { Menu, X, Palette } from 'lucide-react';
import { branches, getCurrentBranch } from '@/config/branches';
import { Button } from '@/components/ui/button';
import { SwingLogo } from '@/components/ui/SwingLogo';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentBranch, setCurrentBranch] = useState('main');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    if (typeof window !== 'undefined') {
      setCurrentBranch(getCurrentBranch(window.location.hostname));
    }
  }, []);

  // Don't render until mounted to avoid hydration mismatch
  if (!mounted) {
    return null;
  }

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.0, 0.0, 0.2, 1] }}
      className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 backdrop-blur-md bg-background/80"
    >
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-16 xl:px-20 2xl:px-24">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <SwingLogo className="w-24 h-auto sm:w-28" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-2">
            <div className="flex items-center gap-1 mr-2">
              <Palette className="w-4 h-4 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">Themes:</span>
            </div>
            {branches.map((branch) => {
              const isCurrent = branch.id === currentBranch;
              return (
                <a
                  key={branch.id}
                  href={branch.url}
                  className="relative"
                >
                  <Button
                    variant={isCurrent ? 'default' : 'ghost'}
                    size="sm"
                    className="relative"
                  >
                    {isCurrent && (
                      <motion.div
                        layoutId="active-branch"
                        className="absolute inset-0 bg-primary rounded-md"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                    <span className="relative z-10">{branch.name}</span>
                  </Button>
                </a>
              );
            })}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-md hover:bg-accent transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.nav
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden border-t border-white/10"
            >
              <div className="py-4 space-y-2">
                <div className="flex items-center gap-2 mb-3 px-2">
                  <Palette className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">Choose Theme:</span>
                </div>
                {branches.map((branch) => {
                  const isCurrent = branch.id === currentBranch;
                  return (
                    <a
                      key={branch.id}
                      href={branch.url}
                      className="block"
                      onClick={() => setIsOpen(false)}
                    >
                      <div
                        className={`p-3 rounded-md transition-colors ${
                          isCurrent
                            ? 'bg-primary text-primary-foreground'
                            : 'hover:bg-accent'
                        }`}
                      >
                        <div className="font-medium">{branch.name}</div>
                        <div className="text-sm opacity-80">{branch.description}</div>
                      </div>
                    </a>
                  );
                })}
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}
