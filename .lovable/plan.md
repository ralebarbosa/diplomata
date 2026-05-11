## Objetivo

Aplicar um blur localizado somente sobre o rótulo "CONDOMÍNIO casa de campo EM BREVE" que aparece dentro da imagem `localizacao-mapa.png`, mantendo o restante da imagem nítido.

## Abordagem

Em vez de editar o PNG (que perderia qualidade e seria irreversível), vou sobrepor um pequeno elemento com `backdrop-blur` posicionado exatamente em cima do rótulo, usando CSS. Isso preserva a imagem original e fica responsivo.

### Mudanças

**Arquivo:** `src/components/landing/LocalizacaoSection.tsx`

1. Envolver o `<img>` do mapa em um container `relative`.
2. Adicionar um `<div>` absolutamente posicionado sobre a região do rótulo (aproximadamente centro-esquerda da imagem) com:
   - `backdrop-blur-md` (blur suave)
   - `bg-white/10` (leve clareamento para suavizar)
   - `rounded-md`
   - Posição via porcentagens: `left-[36%] top-[47%] w-[20%] h-[12%]` (ajustável após verificação visual)
   - `pointer-events-none`

### Resultado esperado

O rótulo "Condomínio Casa de Campo — Em Breve" aparece desfocado, enquanto Vinícola Arpuro e Aeródromo Diplomata continuam nítidos.