/**
 * Number of images per case project. Used by web, business, and art case pages
 * so slider and grids stay in sync. Every case is listed explicitly.
 */
export const CASE_IMAGE_COUNTS: Record<
  'web' | 'business' | 'art',
  Record<string, number>
> = {
  web: {
    rampage: 4,
    robidus: 4,
    vloto: 4,
    qandidates: 4,
    rebels: 4,
    florbs: 4,
    'financial-lease': 4,
    gassan: 4,
    dimpr: 4,
    geniebi: 4,
    'improv-utrecht': 3,
  },
  business: {
    looparity: 3,
    plainshare: 6,
    taalqafe: 6,
    bob: 6,
  },
  art: {
    office: 4,
    dungeon: 4,
    lamp: 4,
  },
}

export function getCaseImageCount(
  section: 'web' | 'business' | 'art',
  slug: string,
): number {
  const sectionCounts = CASE_IMAGE_COUNTS[section]
  return sectionCounts[slug] ?? 0
}
