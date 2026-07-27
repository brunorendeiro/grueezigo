# GrüeziGo

Uma lista rápida de consultar com frases suíço-alemãs (Schwiizerdütsch) usadas no dia a dia — saudações, dias da semana, cortesia, frases do quotidiano e compras/café — com pronúncia via Web Speech API e progresso de memorização guardado no browser.

Sem contas, sem backend: tudo corre no browser.

## Desenvolvimento

```bash
npm install
npm run dev
npm run check
npm run build
```

## Nota técnica — Google Analytics

O Analytics só é carregado depois de o utilizador aceitar os cookies. A função
`gtag` deve enviar o objeto nativo `arguments` para `dataLayer`:

```js
function gtag() {
  dataLayer.push(arguments)
}
```

Não substituir por `dataLayer.push(args)` com um rest parameter (`...args`):
apesar de o script da Google carregar, o comando `config` e o `page_view` podem
não ser processados.
