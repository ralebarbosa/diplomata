
## Corrigir exibição da logo no Hero

**Problema:** A logo nova (`logo-diplomata-v3.png`) está sendo exibida como silhueta branca porque o componente aplica os filtros CSS `brightness-0 invert`, herdados da versão anterior da logo (que era preta e precisava virar branca sobre o fundo escuro).

**Solução:** Remover os filtros `brightness-0 invert` do `<img>` da logo no `HeroSection.tsx`, preservando todas as outras classes (tamanho, espaçamento, ordem, etc.) para manter as características originais do layout.

### Mudança técnica

**Arquivo:** `src/components/landing/HeroSection.tsx` (linha 14)

Antes:
```tsx
className="h-[90px] md:h-28 w-auto mb-8 brightness-0 invert object-fill order-1"
```

Depois:
```tsx
className="h-[90px] md:h-28 w-auto mb-8 object-fill order-1"
```

Assim a logo será renderizada com suas cores originais sobre o fundo escuro do hero.
