'use client';

import { useEffect, useState } from 'react';
import { HullIcon, VoidIcon } from './NavIcons';

/**
 * ThemeToggle — the two-cell HULL / VOID pill.
 * Writes data-theme="void" | "hull" on <html>; the active cell is filled.
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
        onClick={() => setTheme('hull')}
      >
        <HullIcon width={9} height={9} />
        Hull
      </button>
      <button
        type="button"
        className="theme-toggle-cell"
        aria-pressed={theme === 'void'}
        onClick={() => setTheme('void')}
      >
        <VoidIcon width={9} height={9} />
        Void
      </button>
    </div>
  );
}
