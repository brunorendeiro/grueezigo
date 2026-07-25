# AGENTS.md

## Objetivo

Este projeto contém exclusivamente a app GrüeziGo, uma lista de consulta rápida
de frases suíço-alemãs do dia a dia (saudações, dias da semana, cortesia,
frases do quotidiano, compras/café).

## Regras

- Manter a app 100% client-side: sem backend, sem base de dados. O progresso
  de memorização (`grueezigo-learned`) e a locale (`grueezigo-locale`) vivem
  só em `localStorage`.
- O conteúdo das frases vive em `src/data/phrases.ts`. O suíço-alemão não tem
  ortografia oficial única — as grafias usadas seguem a convenção mais comum
  (região de Zurique). Novas frases devem incluir sempre `swissGerman`,
  `hochdeutsch`, `pt` e `en`.
- `speakSwissGerman` tenta uma voz `de-CH` e usa `de-DE` como fallback — nem
  todos os browsers têm voz suíça-alemã disponível.
- Qualquer texto visível novo tem de entrar no dicionário PT/EN/DE em
  `src/i18n.ts`, não pode ficar hardcoded.
- Não colocar aqui código do portfólio ou de outras aplicações.

## Validação

```bash
npm run check
npm run build
```
