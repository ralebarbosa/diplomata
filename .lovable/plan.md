
O usuário quer adicionar à `HeroSection` o mesmo layout da imagem de referência: um braço segurando um iPhone (mockup) ao lado direito, com o texto à esquerda, mantendo a foto atual do aeródromo como fundo.

## Análise do estado atual

`HeroSection.tsx` hoje:
- Fundo: `heroImage` (foto do aeródromo) com gradiente preto
- Conteúdo: título "Diplomata SS8X", subtítulo "Aeródromo inteligente por assinatura" e dois botões
- Layout: tudo alinhado à esquerda, ocupando largura total

## Mudanças necessárias

**1. Asset do mockup**
- Preciso de uma imagem PNG do braço segurando o iPhone com fundo transparente.
- A imagem de referência enviada não tem fundo transparente (tem o cenário de praia atrás), então não dá para usar diretamente — colocaria o cenário da praia em cima do aeródromo.
- Vou gerar um asset próprio: braço/mão segurando iPhone, fundo transparente, posicionado para encaixar à direita do hero.
- Dentro da tela do iPhone, exibir uma captura/imagem que represente o app/site do Diplomata SS8X (ex: a própria foto do aeródromo ou um mock da landing).

**2. Layout da `HeroSection.tsx`**
- Trocar o bloco único de conteúdo por um layout em 2 colunas no desktop:
  - Esquerda (~55%): título, subtítulo, botões (mantém o conteúdo atual)
  - Direita (~45%): imagem do braço com iPhone, alinhada à parte inferior direita, “sangrando” levemente para fora como na referência
- Mobile: empilhar — texto em cima, mockup embaixo (ou ocultar o mockup em telas muito pequenas para não competir com o texto)
- Manter o fundo atual (`heroImage`) e o gradiente escuro
- Ajustar o `pb` e os espaçamentos para acomodar a imagem

**3. Ajustes finos**
- Reduzir um pouco a largura máxima do bloco de texto para não sobrepor o mockup
- Garantir que a imagem do mockup tenha `object-contain`, `pointer-events-none` e `select-none`
- Z-index correto: fundo < gradiente < mockup < texto/botões (ou mockup ao lado do texto, sem sobreposição)

## Pergunta antes de implementar

Preciso confirmar 1 ponto sobre o mockup, porque muda o resultado final:

- **O que aparece DENTRO da tela do iPhone?** Opções:
  1. A foto atual do aeródromo (mesma do fundo)
  2. Uma screenshot/mock da landing page do Diplomata SS8X
  3. Apenas a tela preta/desligada (mockup “limpo”)

Vou fazer essa pergunta logo após o plano ser aprovado, ou já incluo a escolha como parte do fluxo. Para manter o plano enxuto, **vou assumir a opção 1 (foto do aeródromo dentro do iPhone)** como padrão por ser a mais coerente com a mensagem "fundo é a foto atual do site". Se o usuário quiser outra, ajusto depois.

## Arquivos afetados

- `src/assets/hero-iphone-mockup.png` — novo asset (gerado): braço segurando iPhone, fundo transparente, com a foto do aeródromo na tela
- `src/components/landing/HeroSection.tsx` — refatorar para layout 2 colunas (texto à esquerda, mockup à direita), mantendo fundo, gradiente, título, subtítulo e botões atuais

## Resultado esperado

Hero com a mesma estrutura visual da referência: foto do aeródromo ao fundo escurecida, texto principal e CTAs à esquerda, e um braço segurando um iPhone à direita exibindo conteúdo do site.
