import { useEffect, useMemo, useState } from 'react'
import { phrases, categories, speakSwissGerman, type Category } from './data/phrases'
import { detectLocale, locales, categoryLabels, ui, getTranslation, type Locale } from './i18n'
import { getStoredConsent, loadAnalytics } from './analytics'
import CookieConsent from './CookieConsent'

const LEARNED_KEY = 'grueezigo-learned'

function loadLearned(): Set<string> {
  try {
    const raw = window.localStorage.getItem(LEARNED_KEY)
    return raw ? new Set(JSON.parse(raw)) : new Set()
  } catch {
    return new Set()
  }
}

type LearnedFilter = 'all' | 'learned' | 'unlearned'

export default function App() {
  const [locale, setLocale] = useState<Locale>('en')
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState<Category | 'all'>('all')
  const [learnedFilter, setLearnedFilter] = useState<LearnedFilter>('all')
  const [learned, setLearned] = useState<Set<string>>(new Set())

  useEffect(() => {
    setLocale(detectLocale())
    setLearned(loadLearned())
    if (getStoredConsent() === 'granted') loadAnalytics()
  }, [])

  const t = ui[locale]

  function changeLocale(next: Locale) {
    setLocale(next)
    window.localStorage.setItem('grueezigo-locale', next)
  }

  function toggleLearned(id: string) {
    setLearned(prev => {
      const next = new Set(prev)
      if (next.has(id)) next.delete(id)
      else next.add(id)
      window.localStorage.setItem(LEARNED_KEY, JSON.stringify([...next]))
      return next
    })
  }

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    return phrases.filter(p => {
      if (category !== 'all' && p.category !== category) return false
      if (learnedFilter === 'learned' && !learned.has(p.id)) return false
      if (learnedFilter === 'unlearned' && learned.has(p.id)) return false
      if (!q) return true
      return (
        p.swissGerman.toLowerCase().includes(q) ||
        p.hochdeutsch.toLowerCase().includes(q) ||
        p.pt.toLowerCase().includes(q) ||
        p.en.toLowerCase().includes(q)
      )
    })
  }, [query, category, learnedFilter, learned])

  return (
    <div className="app-shell">
      <header>
        <div className="brand">
          <div className="brand-mark">🇨🇭</div>
          <div>
            <strong>GrüeziGo</strong>
            <small>{t.brandTagline}</small>
          </div>
        </div>
        <div className="locale-switch">
          {locales.map(l => (
            <button key={l.id} className={l.id === locale ? 'active' : ''} onClick={() => changeLocale(l.id)}>
              {l.label}
            </button>
          ))}
        </div>
      </header>

      <p className="intro">{t.intro}</p>

      <div className="controls">
        <input
          className="search"
          type="text"
          value={query}
          onChange={e => setQuery(e.target.value)}
          placeholder={t.searchPlaceholder}
        />

        <div className="chips">
          <button className={category === 'all' ? 'chip active' : 'chip'} onClick={() => setCategory('all')}>
            {t.allCategories}
          </button>
          {categories.map(c => (
            <button key={c} className={category === c ? 'chip active' : 'chip'} onClick={() => setCategory(c)}>
              {categoryLabels[locale][c]}
            </button>
          ))}
        </div>

        <div className="learned-bar">
          <span className="learned-count">{t.learnedCount(learned.size, phrases.length)}</span>
          <div className="segmented small">
            <button className={learnedFilter === 'all' ? 'active' : ''} onClick={() => setLearnedFilter('all')}>{t.learnedFilter}</button>
            <button className={learnedFilter === 'learned' ? 'active' : ''} onClick={() => setLearnedFilter('learned')}>{t.onlyLearned}</button>
            <button className={learnedFilter === 'unlearned' ? 'active' : ''} onClick={() => setLearnedFilter('unlearned')}>{t.onlyUnlearned}</button>
          </div>
        </div>
      </div>

      <div className="phrase-list">
        {filtered.length === 0 && <p className="no-results">{t.noResults}</p>}
        {filtered.map(p => (
          <div className={learned.has(p.id) ? 'phrase-card learned' : 'phrase-card'} key={p.id}>
            <div className="phrase-main">
              <button className="speak-button" onClick={() => speakSwissGerman(p.swissGerman)} aria-label="speak">🔊</button>
              <div className="phrase-text">
                <span className="swiss">{p.swissGerman}</span>
                <span className="translation">{getTranslation(p.pt, p.en, p.hochdeutsch, locale)}</span>
                {locale !== 'de' && (
                  <span className="hochdeutsch">{t.hochdeutschLabel}: {p.hochdeutsch}</span>
                )}
              </div>
            </div>
            <button
              className={learned.has(p.id) ? 'learn-toggle active' : 'learn-toggle'}
              onClick={() => toggleLearned(p.id)}
              title={learned.has(p.id) ? t.markedLearned : t.markLearned}
            >
              {learned.has(p.id) ? '★' : '☆'}
            </button>
          </div>
        ))}
      </div>

      <footer>
        <a href="https://vibe-portfolio-one.vercel.app/">Created by Bruno Rendeiro</a>
        <span>{t.footerTagline}</span>
        <span className="powered-badge">⚡ Powered by AI</span>
      </footer>

      <CookieConsent locale={locale} />
    </div>
  )
}
