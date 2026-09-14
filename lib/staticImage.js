import { createContext, useContext } from 'react';

/**
 * Static image maps (public path -> static import) are generated per page
 * by scripts/gen-image-imports.js into lib/image-imports/. A page passes
 * its map down through ImageMapContext and thumbnails resolve against it.
 * Static imports get the long immutable browser cache and a blur
 * placeholder; a path with no entry falls through unchanged, which
 * next/image accepts, it just revalidates on every visit.
 */
export const ImageMapContext = createContext(null);

export const resolveStatic = (map, src) => (map && map[src]) || src;

export const useStaticImage = () => {
  const map = useContext(ImageMapContext);
  return (src) => resolveStatic(map, src);
};

/* placeholder="blur" needs a blurDataURL, which only imports carry */
export const placeholderFor = (src) =>
  typeof src === 'object' && src.blurDataURL ? 'blur' : 'empty';
