
Vou diminuir o zoom do iframe do Google Maps na seção "Localização" para mostrar uma área maior do entorno.

## Mudança

Em `src/components/landing/LocalizacaoSection.tsx`, alterar o parâmetro `z=16` para `z=13` na URL do iframe. Isso reduz o nível de zoom, exibindo uma visão mais ampla da região (BR-050 e arredores) ao invés de focar apenas no ponto exato.

```
src="https://www.google.com/maps?q=-19.416115,-48.071437&z=13&t=k&output=embed"
```

O pin vermelho continua marcando as coordenadas exatas do aeródromo, mas com mais contexto geográfico visível ao redor.

Nenhum outro elemento da seção será alterado.
