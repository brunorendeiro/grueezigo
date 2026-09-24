import type { Category } from './data/phrases'

export type Locale = 'pt' | 'en' | 'de'

export const locales: { id: Locale; label: string }[] = [
  { id: 'pt', label: 'PT' },
  { id: 'en', label: 'EN' },
  { id: 'de', label: 'DE' },
]

export function detectLocale(): Locale {
  const stored = window.localStorage.getItem('grueezigo-locale')
  if (stored === 'pt' || stored === 'en' || stored === 'de') return stored
  const browser = navigator.language.slice(0, 2).toLowerCase()
  if (browser === 'de') return 'de'
  if (browser === 'pt') return 'pt'
  return 'en'
}

export const categoryLabels: Record<Locale, Record<Category, string>> = {
  pt: {
    greetings: 'Saudações',
    days: 'Dias da semana',
    politeness: 'Cortesia',
    everyday: 'Dia a dia',
    work: 'Trabalho',
    shopping: 'Compras & café',
  },
  en: {
    greetings: 'Greetings',
    days: 'Days of the week',
    politeness: 'Politeness',
    everyday: 'Everyday',
    work: 'Work',
    shopping: 'Shopping & café',
  },
  de: {
    greetings: 'Begrüssige',
    days: 'Wuchetääg',
    politeness: 'Höflichkeit',
    everyday: 'Alltag',
    work: 'Arbeit',
    shopping: 'Poscht & Kafi',
  },
}

type UiStrings = {
  brandTagline: string
  intro: string
  searchPlaceholder: string
  allCategories: string
  learnedFilter: string
  onlyLearned: string
  onlyUnlearned: string
  noResults: string
  hochdeutschLabel: string
  markLearned: string
  markedLearned: string
  learnedCount: (learned: number, total: number) => string
  footerTagline: string
  cookieBody: string
  cookieAccept: string
  cookieReject: string
  adLabel: string
}

export const ui: Record<Locale, UiStrings> = {
  pt: {
    brandTagline: 'Frases suíço-alemãs para o dia a dia',
    intro: 'Uma lista rápida de consultar com o que se diz mesmo na Suíça — saudações, dias da semana e frases do dia a dia — para não teres sempre de recorrer ao tradutor.',
    searchPlaceholder: 'Pesquisar frases...',
    allCategories: 'Todas',
    learnedFilter: 'Mostrar',
    onlyLearned: 'Só marcadas',
    onlyUnlearned: 'Só por marcar',
    noResults: 'Nenhuma frase encontrada.',
    hochdeutschLabel: 'Alemão padrão',
    markLearned: 'Marcar como sabida',
    markedLearned: 'Sabida ✓',
    learnedCount: (learned, total) => `${learned} de ${total} marcadas`,
    footerTagline: 'Sem contas · tudo guardado no teu browser',
    cookieBody: 'Uso o Google Analytics e o Google AdSense para perceber quantas pessoas visitam este projeto. Aceitas cookies de análise e publicidade?',
    cookieAccept: 'Aceitar',
    cookieReject: 'Recusar',
    adLabel: 'Publicidade',
  },
  en: {
    brandTagline: 'Everyday Swiss German phrases',
    intro: 'A quick-reference list of what people actually say in Switzerland — greetings, days of the week and everyday phrases — so you don’t need a translator for the basics.',
    searchPlaceholder: 'Search phrases...',
    allCategories: 'All',
    learnedFilter: 'Show',
    onlyLearned: 'Learned only',
    onlyUnlearned: 'Not learned only',
    noResults: 'No phrases found.',
    hochdeutschLabel: 'Standard German',
    markLearned: 'Mark as learned',
    markedLearned: 'Learned ✓',
    learnedCount: (learned, total) => `${learned} of ${total} marked`,
    footerTagline: 'No accounts · everything stays in your browser',
    cookieBody: 'I use Google Analytics and Google AdSense to understand how many people visit this project. Do you accept analytics and advertising cookies?',
    cookieAccept: 'Accept',
    cookieReject: 'Reject',
    adLabel: 'Advertisement',
  },
  de: {
    brandTagline: 'Schwiizerdütsch für de Alltag',
    intro: 'Eine schnelle Übersicht dessen, was man in der Schweiz wirklich sagt — Begrüssige, Wuchetääg und Alltagssätz — ohne für die Grundlagen immer den Übersetzer zu brauchen.',
    searchPlaceholder: 'Sätze durchsuchen...',
    allCategories: 'Alle',
    learnedFilter: 'Anzeigen',
    onlyLearned: 'Nur gelernte',
    onlyUnlearned: 'Nur ungelernte',
    noResults: 'Keine Sätze gefunden.',
    hochdeutschLabel: 'Hochdeutsch',
    markLearned: 'Als gelernt markieren',
    markedLearned: 'Gelernt ✓',
    learnedCount: (learned, total) => `${learned} von ${total} markiert`,
    footerTagline: 'Keine Konten · alles bleibt im Browser',
    cookieBody: 'Ich verwende Google Analytics und Google AdSense, um zu verstehen, wie viele Menschen dieses Projekt besuchen. Akzeptierst du Analyse- und Werbe-Cookies?',
    cookieAccept: 'Akzeptieren',
    cookieReject: 'Ablehnen',
    adLabel: 'Werbung',
  },
}

export function getTranslation(pt: string, en: string, hochdeutsch: string, locale: Locale): string {
  if (locale === 'pt') return pt
  if (locale === 'de') return hochdeutsch
  return en
}
