/**
 * ThemeScript — inline blocking script to prevent flash of wrong theme.
 * Runs before React hydrates, setting [data-theme] on <html> immediately.
 * Must be placed in <Head> or _document.js.
 *
 * VOID (black) is the default theme; HULL is the light theme.
 * Stored v2 values are migrated (dark → void, light → hull).
 */
export default function ThemeScript() {
  const themeScript = `
    (function() {
      try {
        var t = localStorage.getItem('theme');
        if (t === 'dark') t = 'void';
        if (t === 'light') t = 'hull';
        if (t !== 'void' && t !== 'hull') t = 'void';
        localStorage.setItem('theme', t);
        document.documentElement.setAttribute('data-theme', t);
      } catch(e) {
        document.documentElement.setAttribute('data-theme', 'void');
      }
    })();
  `;

  return <script dangerouslySetInnerHTML={{ __html: themeScript }} />;
}
