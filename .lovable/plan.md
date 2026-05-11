## Problema

A logo no Hero parece esticada/deformada. A imagem fonte (`logo-diplomata-v3.png`, 1920x500) tem boa resolução, então o problema não é o arquivo — é a classe CSS `object-fill` aplicada ao `<img>`, que força a imagem a preencher a caixa ignorando a proporção natural.

## Solução

**Arquivo:** `src/components/landing/HeroSection.tsx` (linha 19)

Trocar `object-fill` por `object-contain` para que a logo respeite a proporção original (3,84:1). Como já usamos `h-[90px] md:h-28 w-auto`, o navegador calculará a largura proporcionalmente e a logo ficará nítida e sem distorção.

Antes:
```tsx
className="h-[90px] md:h-28 w-auto mb-8 object-fill order-1"
```

Depois:
```tsx
className="h-[90px] md:h-28 w-auto mb-8 object-contain order-1"
```

Nenhuma outra alteração de layout é necessária.