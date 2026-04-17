
O `<p>` selecionado já tem `max-w-[820px]`, mas está limitado pelo container pai `max-w-[820px]` na linha 14. Vou aumentar ambos para dar mais largura ao texto.

## Mudanças em `src/components/landing/HeroSection.tsx`

1. **Linha 14** — container pai: trocar `max-w-[820px]` por `max-w-[1100px]`.
2. **Linha 18** — parágrafo: trocar `max-w-[820px]` por `max-w-[1100px]`.

Isso permite que o texto "O seu aeródromo alternativo do Triângulo Mineiro..." ocupe mais largura horizontal antes de quebrar em nova linha.
