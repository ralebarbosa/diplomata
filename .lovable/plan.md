
Vou atualizar o iframe do Google Maps em `LocalizacaoSection.tsx` para usar as coordenadas exatas fornecidas, garantindo que o pin vermelho apareça precisamente no local do aeródromo.

## Mudança

Em `src/components/landing/LocalizacaoSection.tsx`, substituir o `src` do iframe por:

```
https://www.google.com/maps?q=-19.416115,-48.071437&z=16&output=embed
```

Usar `q=lat,lng` força o Google Maps a renderizar um marcador (pin vermelho) exatamente nas coordenadas fornecidas, com zoom 16 para uma visualização aproximada do entorno.

Nenhum outro elemento da seção será alterado.
