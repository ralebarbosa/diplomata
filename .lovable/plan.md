
Vou alterar a tipografia do site de **Mulish** para **Inter** em todos os textos (títulos e corpo).

### Alterações

**1. `src/index.css`**
- Trocar o `@import` do Google Fonts de `Mulish` para `Inter` (pesos 300-900).
- Atualizar a utility `.font-display` para usar `Inter`.

**2. `tailwind.config.ts`**
- Atualizar `fontFamily.sans` e `fontFamily.display` de `Mulish` para `Inter`.

```ts
fontFamily: {
  sans: ['Inter', 'sans-serif'],
  display: ['Inter', 'sans-serif'],
}
```

### Resultado
Todo o site (Hero, títulos de seção, corpo, navbar, footer) passará a usar Inter automaticamente, já que todos os componentes consomem `font-sans` (default) ou `font-display` via Tailwind. Nenhum componente precisa ser editado individualmente.
