export function formatOGImage(url?: string): string | undefined {
  if (!url) return undefined
  if (url.startsWith('//')) {
    url = url.replace('//', 'https://')
  }
  return url
}