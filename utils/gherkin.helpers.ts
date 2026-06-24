export function parseGherkinTable<T extends Record<string, string>>(
  rows: T[],
): T {
  return rows[0];
}

export function tagScenario(tags: string[]): boolean {
  if (process.env.TAGS) {
    const filter = process.env.TAGS.split(',').map((t) => t.trim());
    return tags.some((tag) => filter.includes(tag.replace('@', '')));
  }
  return true;
}
