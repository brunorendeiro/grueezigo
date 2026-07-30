export type Category = 'greetings' | 'days' | 'politeness' | 'everyday' | 'work' | 'shopping'

export const categories: Category[] = ['greetings', 'days', 'politeness', 'everyday', 'work', 'shopping']

export type Phrase = {
  id: string
  category: Category
  swissGerman: string
  hochdeutsch: string
  pt: string
  en: string
}

export const phrases: Phrase[] = [
  // Greetings & goodbyes
  { id: 'gruezi', category: 'greetings', swissGerman: 'Grüezi', hochdeutsch: 'Guten Tag', pt: 'Bom dia / Olá (formal)', en: 'Hello (formal)' },
  { id: 'gruezi-mitenand', category: 'greetings', swissGerman: 'Grüezi mitenand', hochdeutsch: 'Guten Tag zusammen', pt: 'Olá a todos (formal)', en: 'Hello everyone (formal)' },
  { id: 'hoi', category: 'greetings', swissGerman: 'Hoi', hochdeutsch: 'Hallo', pt: 'Olá / Oi', en: 'Hi' },
  { id: 'sali-zame', category: 'greetings', swissGerman: 'Sali zäme', hochdeutsch: 'Hallo zusammen', pt: 'Olá pessoal', en: 'Hi everyone' },
  { id: 'guete-morge', category: 'greetings', swissGerman: 'Guete Morge', hochdeutsch: 'Guten Morgen', pt: 'Bom dia', en: 'Good morning' },
  { id: 'guete-tag', category: 'greetings', swissGerman: 'Guete Tag', hochdeutsch: 'Guten Tag', pt: 'Bom dia / Boa tarde', en: 'Good day' },
  { id: 'guete-abig', category: 'greetings', swissGerman: 'Guete Abig', hochdeutsch: 'Guten Abend', pt: 'Boa noite (chegada)', en: 'Good evening' },
  { id: 'guet-nacht', category: 'greetings', swissGerman: 'Guet Nacht', hochdeutsch: 'Gute Nacht', pt: 'Boa noite (despedida)', en: 'Good night' },
  { id: 'uf-wiederluege', category: 'greetings', swissGerman: 'Uf Wiederluege', hochdeutsch: 'Auf Wiedersehen', pt: 'Adeus (formal)', en: 'Goodbye (formal)' },
  { id: 'tschuss', category: 'greetings', swissGerman: 'Tschüss', hochdeutsch: 'Tschüss', pt: 'Tchau (informal)', en: 'Bye (informal)' },
  { id: 'bis-spater', category: 'greetings', swissGerman: 'Bis spöter', hochdeutsch: 'Bis später', pt: 'Até logo', en: 'See you later' },
  { id: 'bis-bald', category: 'greetings', swissGerman: 'Bis bald', hochdeutsch: 'Bis bald', pt: 'Até breve', en: 'See you soon' },
  { id: 'ade', category: 'greetings', swissGerman: 'Ade', hochdeutsch: 'Auf Wiedersehen / Tschüss', pt: 'Adeus (despedida comum)', en: 'Bye (common everyday goodbye)' },
  { id: 'uf-wiederlose', category: 'greetings', swissGerman: 'Uf Wiederlose', hochdeutsch: 'Auf Wiederhören', pt: 'Adeus (ao telefone)', en: 'Goodbye (on the phone)' },

  // Days of the week
  { id: 'montig', category: 'days', swissGerman: 'Mäntig', hochdeutsch: 'Montag', pt: 'Segunda-feira', en: 'Monday' },
  { id: 'zischtig', category: 'days', swissGerman: 'Zischtig', hochdeutsch: 'Dienstag', pt: 'Terça-feira', en: 'Tuesday' },
  { id: 'mittwuch', category: 'days', swissGerman: 'Mittwuch', hochdeutsch: 'Mittwoch', pt: 'Quarta-feira', en: 'Wednesday' },
  { id: 'donschtig', category: 'days', swissGerman: 'Donschtig', hochdeutsch: 'Donnerstag', pt: 'Quinta-feira', en: 'Thursday' },
  { id: 'fritig', category: 'days', swissGerman: 'Fritig', hochdeutsch: 'Freitag', pt: 'Sexta-feira', en: 'Friday' },
  { id: 'samschtig', category: 'days', swissGerman: 'Samschtig', hochdeutsch: 'Samstag', pt: 'Sábado', en: 'Saturday' },
  { id: 'sunntig', category: 'days', swissGerman: 'Sunntig', hochdeutsch: 'Sonntag', pt: 'Domingo', en: 'Sunday' },
  { id: 'hut', category: 'days', swissGerman: 'Hüt', hochdeutsch: 'Heute', pt: 'Hoje', en: 'Today' },
  { id: 'morn', category: 'days', swissGerman: 'Morn', hochdeutsch: 'Morgen', pt: 'Amanhã', en: 'Tomorrow' },
  { id: 'geschter', category: 'days', swissGerman: 'Geschter', hochdeutsch: 'Gestern', pt: 'Ontem', en: 'Yesterday' },

  // Politeness
  { id: 'merci', category: 'politeness', swissGerman: 'Merci', hochdeutsch: 'Danke', pt: 'Obrigado/a', en: 'Thank you' },
  { id: 'merci-vilmal', category: 'politeness', swissGerman: 'Merci vilmal', hochdeutsch: 'Vielen Dank', pt: 'Muito obrigado/a', en: 'Thank you very much' },
  { id: 'merci-glichfalls', category: 'politeness', swissGerman: 'Merci, glichfalls', hochdeutsch: 'Danke, gleichfalls', pt: 'Obrigado, igualmente', en: 'Thanks, you too' },
  { id: 'bitte', category: 'politeness', swissGerman: 'Bitte', hochdeutsch: 'Bitte', pt: 'Por favor / De nada', en: 'Please / You’re welcome' },
  { id: 'exgusi', category: 'politeness', swissGerman: 'Exgüsi', hochdeutsch: 'Entschuldigung', pt: 'Desculpe / Com licença', en: 'Excuse me / Sorry' },
  { id: 'tuet-mer-leid', category: 'politeness', swissGerman: 'Es tuät mer leid', hochdeutsch: 'Es tut mir leid', pt: 'Lamento / Desculpa', en: 'I’m sorry' },
  { id: 'kei-problem', category: 'politeness', swissGerman: 'Kei Problem', hochdeutsch: 'Kein Problem', pt: 'Sem problema', en: 'No problem' },
  { id: 'garn-gscheh', category: 'politeness', swissGerman: 'Gärn gscheh', hochdeutsch: 'Gern geschehen', pt: 'De nada / Foi um prazer', en: 'You’re welcome' },

  // Everyday phrases & questions
  { id: 'wie-gahts', category: 'everyday', swissGerman: 'Wie gaht’s dir?', hochdeutsch: 'Wie geht’s dir?', pt: 'Como estás?', en: 'How are you?' },
  { id: 'guet-merci', category: 'everyday', swissGerman: 'Guet, merci. Und dir?', hochdeutsch: 'Gut, danke. Und dir?', pt: 'Bem, obrigado. E tu?', en: 'Good, thanks. And you?' },
  { id: 'wie-heissisch', category: 'everyday', swissGerman: 'Wie heissisch du?', hochdeutsch: 'Wie heißt du?', pt: 'Como te chamas?', en: 'What’s your name?' },
  { id: 'ich-heisse', category: 'everyday', swissGerman: 'Ich heisse...', hochdeutsch: 'Ich heiße...', pt: 'Chamo-me...', en: 'My name is...' },
  { id: 'chasch-mer-halfe', category: 'everyday', swissGerman: 'Chasch mer hälfe?', hochdeutsch: 'Kannst du mir helfen?', pt: 'Podes ajudar-me?', en: 'Can you help me?' },
  { id: 'wo-isch', category: 'everyday', swissGerman: 'Wo isch...?', hochdeutsch: 'Wo ist...?', pt: 'Onde é / está...?', en: 'Where is...?' },
  { id: 'ich-verstah-nod', category: 'everyday', swissGerman: 'Ich verstah nöd', hochdeutsch: 'Ich verstehe nicht', pt: 'Não percebo / entendo', en: 'I don’t understand' },
  { id: 'redsch-anglisch', category: 'everyday', swissGerman: 'Redsch Änglisch?', hochdeutsch: 'Sprichst du Englisch?', pt: 'Falas inglês?', en: 'Do you speak English?' },
  { id: 'chond-widerhole', category: 'everyday', swissGerman: 'Chönd Sie das widerhole, bitte?', hochdeutsch: 'Können Sie das wiederholen, bitte?', pt: 'Pode repetir, por favor?', en: 'Can you repeat that, please?' },
  { id: 'alles-guet', category: 'everyday', swissGerman: 'Alles guet?', hochdeutsch: 'Alles gut?', pt: 'Está tudo bem?', en: 'Everything OK?' },
  { id: 'kei-ahnig', category: 'everyday', swissGerman: 'Ich ha kei Ahnig', hochdeutsch: 'Ich habe keine Ahnung', pt: 'Não faço ideia', en: 'I have no idea' },
  { id: 'klar', category: 'everyday', swissGerman: 'Klar!', hochdeutsch: 'Klar!', pt: 'Claro! / Com certeza!', en: 'Sure! / Of course!' },
  { id: 'es-fagt', category: 'everyday', swissGerman: 'Es fägt!', hochdeutsch: 'Das macht Spaß! / Das ist cool!', pt: 'É fixe! / Isto é divertido!', en: 'That’s fun! / That rocks!' },
  { id: 'passt-scho', category: 'everyday', swissGerman: 'Passt scho', hochdeutsch: 'Passt schon', pt: 'Não faz mal / Está tudo bem assim', en: 'It’s fine / No worries' },
  { id: 'was-gits-nois', category: 'everyday', swissGerman: 'Was gits Nöis?', hochdeutsch: 'Was gibt’s Neues?', pt: 'O que há de novo?', en: 'What’s new?' },
  { id: 'genau', category: 'everyday', swissGerman: 'Genau', hochdeutsch: 'Genau', pt: 'Exatamente / Isso mesmo', en: 'Exactly / Right' },
  { id: 'kes-ding', category: 'everyday', swissGerman: 'Kes Ding', hochdeutsch: 'Kein Ding', pt: 'Não é nada / Sem problema', en: 'No big deal' },

  // Work & workplace goodbyes
  { id: 'bis-glii', category: 'work', swissGerman: 'Bis glii', hochdeutsch: 'Bis gleich', pt: 'Até já', en: 'See you in a bit' },
  { id: 'bis-noecher', category: 'work', swissGerman: 'Bis nächer', hochdeutsch: 'Bis nachher', pt: 'Até logo mais', en: 'See you later (today)' },
  { id: 'bis-morn-schaffe', category: 'work', swissGerman: 'Bis morn', hochdeutsch: 'Bis morgen', pt: 'Até amanhã', en: 'See you tomorrow' },
  { id: 'schone-fiirabig', category: 'work', swissGerman: 'Schöne Fiirabig', hochdeutsch: 'Schönen Feierabend', pt: 'Bom fim de dia de trabalho', en: 'Enjoy the rest of your evening (said when leaving work)' },
  { id: 'machs-guet', category: 'work', swissGerman: 'Machs guet', hochdeutsch: 'Mach’s gut', pt: 'Fica bem (despedida informal)', en: 'Take care (informal goodbye)' },
  { id: 'guet-schaffe', category: 'work', swissGerman: 'Guet Schaffe', hochdeutsch: 'Arbeite gut / Schaff gut', pt: 'Bom trabalho', en: 'Have a good work session' },
  { id: 'mahlzit', category: 'work', swissGerman: 'Mahlzit', hochdeutsch: 'Mahlzeit', pt: 'Bom apetite (dito à hora de almoço)', en: 'Enjoy your meal (said around lunchtime)' },
  { id: 'en-guete', category: 'work', swissGerman: 'En Guete', hochdeutsch: 'Guten Appetit', pt: 'Bom apetite', en: 'Enjoy your meal' },
  { id: 'gang-go-zmittag', category: 'work', swissGerman: 'Ich gang go Zmittag', hochdeutsch: 'Ich gehe zu Mittag essen', pt: 'Vou almoçar', en: 'I’m going to lunch' },

  // Shopping & café
  { id: 'ich-hatt-gern', category: 'shopping', swissGerman: 'Ich hätt gern...', hochdeutsch: 'Ich hätte gern...', pt: 'Eu gostaria de...', en: 'I’d like...' },
  { id: 'was-choscht-das', category: 'shopping', swissGerman: 'Was choschtet das?', hochdeutsch: 'Was kostet das?', pt: 'Quanto custa isto?', en: 'How much does this cost?' },
  { id: 'e-kafi-bitte', category: 'shopping', swissGerman: 'E Kafi, bitte', hochdeutsch: 'Ein Kaffee, bitte', pt: 'Um café, por favor', en: 'A coffee, please' },
  { id: 'zahle-bitte', category: 'shopping', swissGerman: 'Zahle, bitte', hochdeutsch: 'Zahlen, bitte', pt: 'A conta, por favor', en: 'The bill, please' },
  { id: 'mit-charte', category: 'shopping', swissGerman: 'Chan ich mit Charte zahle?', hochdeutsch: 'Kann ich mit Karte zahlen?', pt: 'Posso pagar com cartão?', en: 'Can I pay by card?' },
  { id: 'wachselgald', category: 'shopping', swissGerman: 'Händ Sie Wächselgäld?', hochdeutsch: 'Haben Sie Wechselgeld?', pt: 'Tem troco?', en: 'Do you have change?' },
]

export function speakSwissGerman(text: string) {
  if (!('speechSynthesis' in window)) return
  window.speechSynthesis.cancel()
  const utterance = new SpeechSynthesisUtterance(text)
  const voices = window.speechSynthesis.getVoices()
  const swissVoice = voices.find(v => v.lang.toLowerCase() === 'de-ch')
  utterance.lang = swissVoice ? 'de-CH' : 'de-DE'
  if (swissVoice) utterance.voice = swissVoice
  utterance.rate = 0.85
  window.speechSynthesis.speak(utterance)
}
