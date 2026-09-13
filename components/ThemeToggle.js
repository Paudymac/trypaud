'use client';

import { useEffect, useState } from 'react';
import { SunIcon, MoonIcon } from './NavIcons';

/**
 * ThemeToggle — the two-cell sun / moon pill.
 * The themes are still named hull (light) and void (dark) internally —
 * data-theme, localStorage and every token block keep those names — but
 * the visitor sees only the universal glyphs; the words live in the
 * aria-labels. Writes data-theme="void" | "hull" on <html>; the active
 * cell is filled.
 * The wrapper must stay `flex: none` (see .theme-toggle) or it clips.
 */
export default function ThemeToggle() {
  const [theme, setTheme] = useState('void');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const stored = localStorage.getItem('theme');
    if (stored === 'hull' || stored === 'light') setTheme('hull');
    else setTheme('void');
  }, []);

  useEffect(() => {
    if (!mounted) return;
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme, mounted]);

  // Prevent flash — don't render until mounted
  if (!mounted) return null;

  return (
    <div className="theme-toggle" role="group" aria-label="Colour theme">
      <button
        type="button"
        className="theme-toggle-cell"
        aria-pressed={theme === 'hull'}
        aria-label="Light theme"
        title="Light theme"
        onClick={() => setTheme('hull')}
      >
        <SunIcon />
      </button>
      <button
        type="button"
        className="theme-toggle-cell"
        aria-pressed={theme === 'void'}
        aria-label="Dark theme"
        title="Dark theme"
        onClick={() => setTheme('void')}
      >
        <MoonIcon />
      </button>
    </div>
  );
}
