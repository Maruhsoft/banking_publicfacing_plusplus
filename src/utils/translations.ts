export type Language = 'en' | 'es' | 'fr' | 'de' | 'zh' | 'ar' | 'pt' | 'ja' | 'ru' | 'hi' | 'it';

export interface Translations {
  [key: string]: {
    [key: string]: any;
  };
}

let translationsCache: Translations | null = null;

export async function loadTranslations(): Promise<Translations> {
  if (translationsCache) {
    return translationsCache;
  }

  const response = await fetch('/translations.json?t=' + Date.now());
  translationsCache = await response.json();
  return translationsCache!;
}

export function clearTranslationsCache() {
  translationsCache = null;
}

export function getNestedTranslation(obj: any, path: string): string {
  return path.split('.').reduce((current, key) => current?.[key], obj) || path;
}
