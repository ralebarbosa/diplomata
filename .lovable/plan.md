
O usuário quer aproximar texto e imagem em `ConhecaSection.tsx` SEM aumentar a imagem. O espaço vazio vem de:
1. Texto com `max-w-[480px]` dentro de uma coluna `md:col-span-8` (sobra muito espaço vazio à direita do texto)
2. Gap entre colunas `md:gap-12`

Solução: manter a imagem no mesmo tamanho (`md:col-span-4`), mas reduzir a coluna de texto e empurrar a imagem para a esquerda. Vou usar `justify-self-start` na imagem com largura fixa, ou mais simples: reduzir a coluna do texto e o gap.

## Mudanças em `src/components/landing/ConhecaSection.tsx`

**Linha 41** — grid: trocar `gap-8 md:gap-12` por `gap-6 md:gap-6` para reduzir o espaçamento entre colunas.

**Linha 45** — coluna do texto: trocar `md:col-span-8` por `md:col-span-5` para encolher a coluna do texto, fazendo a imagem ficar imediatamente ao lado do texto (a imagem mantém `md:col-span-4`, mesmo tamanho).

Resultado: texto e imagem ficam visualmente próximos, e a imagem mantém exatamente o mesmo tamanho atual (4/12 colunas).
