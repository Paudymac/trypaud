import imageImports from './image-imports';

/**
 * Resolve a public image path ("/images/logos/x.webp") to its static
 * import when one was generated (see scripts/gen-image-imports.js), else
 * hand the path back unchanged — next/image accepts either. Static
 * imports get the long immutable browser cache and a blur placeholder;
 * a path string still works, it just revalidates on every visit.
 */
export const staticImage = (src) => imageImports[src] ?? src;

/* placeholder="blur" needs a blurDataURL, which only imports carry */
export const placeholderFor = (src) =>
  typeof src === 'object' && src.blurDataURL ? 'blur' : 'empty';
