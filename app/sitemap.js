import { SITE_URL } from '@/lib/site';
import {
  galleryLinks,
  allWorkItem,
  caseStudyLinks,
} from '@/components/NavData';

/* Serves /sitemap.xml. Built from the nav data so a new case study or
   gallery category is listed the moment it's linked. Unlisted pages
   (/design-process, /miscellaneous) are deliberately absent — they carry
   noindex until they're ready. */
export default function sitemap() {
  const entry = (path, priority, changeFrequency = 'monthly') => ({
    url: `${SITE_URL}${path === '/' ? '' : path}`,
    changeFrequency,
    priority,
  });

  return [
    entry('/', 1),
    entry('/about', 0.8),
    entry('/case-studies', 0.9),
    ...caseStudyLinks.map((l) => entry(l.href, 0.9)),
    entry(allWorkItem.href, 0.8),
    ...galleryLinks.map((l) => entry(l.href, 0.7)),
  ];
}
