
Objetivo: corrigir o desalinhamento horizontal da seção `ConhecaSection` para que o conjunto texto + imagem fique realmente centralizado dentro da largura da div, sem aumentar as imagens.

Diagnóstico:
- O problema não é só `text-center`.
- Hoje cada linha usa `md:grid-cols-12`, mas o conteúdo ocupa apenas `5 + 4 = 9` colunas.
- Sobram 3 colunas vazias à direita, o que cria a sensação de margem direita maior e deixa o bloco visualmente deslocado.

Plano de ajuste:
1. Em `src/components/landing/ConhecaSection.tsx`, substituir o grid de 12 colunas por uma estrutura de 2 colunas reais no desktop.
2. Definir larguras controladas para texto e imagem, com `justify-center`, para centralizar o conjunto inteiro na linha.
3. Manter o layout mobile em 1 coluna como está hoje.
4. Preservar o tamanho visual da imagem, sem ampliar o card.
5. Garantir que título, descrição e imagem continuem centralizados dentro de cada coluna.

Como vou estruturar:
- Trocar algo como:
  - `md:grid-cols-12`
  - `md:col-span-5`
  - `md:col-span-4`
- Por uma linha com colunas desktop do tipo:
  - texto com largura fixa/máxima
  - imagem com largura fixa/máxima
  - `md:justify-center` para centralizar o bloco completo

Resultado esperado:
- a distância entre a margem esquerda e o conteúdo ficará equivalente à distância da margem direita
- texto e imagem continuarão próximos
- a imagem não aumentará
- a seção ficará visualmente centralizada dentro do container

Detalhe técnico:
A solução mais estável aqui é abandonar a lógica de “12 colunas com sobras” nessa seção específica e usar um grid/flex de 2 colunas centralizado, porque isso elimina o espaço residual que hoje empurra o conteúdo visualmente para a esquerda.
