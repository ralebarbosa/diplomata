
## Plano: iPhone vazado sobre o Hero

### O que será feito
Adicionar o mockup do iPhone (já enviado, com tela transparente PNG) sobre a `HeroSection`, no lado direito, parcialmente cortado pela borda inferior. Como a tela do iPhone já é transparente no PNG original, basta posicioná-lo sobre a imagem de fundo do hero — a própria imagem do aeródromo aparecerá "dentro" da tela naturalmente.

### Passos
1. **Copiar o asset** `user-uploads://mockup_apple_iphone_12_ec42bc3605.png` para `src/assets/iphone-mockup.png`.
2. **Editar `src/components/landing/HeroSection.tsx`**:
   - Importar a imagem do mockup.
   - Adicionar um `<img>` posicionado de forma absoluta:
     - Desktop (`md:`): `right: -120px`, `bottom: -80px`, altura ~`120%` da seção, parcialmente cortado pela borda direita/inferior.
     - `pointer-events-none`, `select-none`, `z-index` acima do gradiente mas abaixo do conteúdo de texto.
   - Mobile: posição estática, abaixo dos botões CTA, largura controlada (~`260px`), centralizado.
3. **Ajuste de gradiente**: leve aumento de opacidade no gradiente atrás do texto para garantir contraste, já que o iPhone reduz área visual livre à direita.

### Estrutura visual (desktop)
```text
┌──────────────────────────────────────────┐
│ [imagem hero + gradiente]                │
│                                          │
│  Diplomata SS8X              ┌─────┐     │
│  Aeródromo inteligente...    │ 📱  │     │
│  [Conheça] [Contato]         │ tela│     │
│                              │vazad│     │
└──────────────────────────────┴─────┴─────┘
                                (cortado)
```

### Notas técnicas
- O PNG do mockup já tem fundo transparente E tela transparente (verificado no upload — o quadriculado cinza indica transparência). Não é preciso máscara CSS.
- Estrutura no JSX: novo `<img>` dentro do `<section>`, irmão do gradiente, com classes responsivas Tailwind:
  - `hidden md:block absolute right-[-120px] bottom-[-80px] h-[120%] pointer-events-none z-[1]`
  - Versão mobile: `block md:hidden mx-auto mt-8 w-[240px] relative z-[1]`
- O container de texto recebe `z-10 relative` para ficar acima do mockup no desktop (caso haja sobreposição parcial).
