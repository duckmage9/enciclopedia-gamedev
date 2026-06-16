/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export const ENCYCLOPEDIA_DATA = {
  html: [
    {
      id: 'html-beg-canvas',
      title: 'O Elemento <canvas>',
      shortDesc: 'A tela em branco pixelada onde toda a mágica dos jogos 2D acontece no seu navegador.',
      difficulty: 'beginner',
      estimatedTime: '8 min',
      icon: 'tv',
      concept: 'Atua como a tela física onde o JavaScript desenha retângulos, sprites, caminhos e imagens a cada frame do seu jogo.',
      codeExample: `<canvas id="game-canvas" width="800" height="600">\n  Seu navegador não suporta a tag Canvas.\n</canvas>`,
      liveDemoConfig: {
        type: 'canvas',
        params: { width: 400, height: 200 }
      },
      tutorialHTML: `O elemento HTML5 &lt;canvas&gt; é a base para quase todos os motores de jogos baseados na web (como Phaser ou PixiJS). Diferente de elementos HTML comuns que usam árvore DOM para posicionação individual, o Canvas é uma única caixa de pixels onde desenhamos programaticamente.\n\nPrincipais atributos:\n- **width**: Largura da tela em pixels.\n- **height**: Altura da tela em pixels.\n\nDica importante: Sempre defina os atributos width e height diretamente na tag HTML ou via propriedade JavaScript, e evite esticá-los usando CSS simples, pois isso causaria distorção e embaçamento de pixels no seu jogo!`
    },
    {
      id: 'html-beg-images',
      title: 'Estruturação de Sprites e Imagens',
      shortDesc: 'Como declarar e preparar as imagens (Assets) de fundo e das suas personagens no HTML.',
      difficulty: 'beginner',
      estimatedTime: '5 min',
      icon: 'image',
      concept: 'Uso de tags <img> dentro de um container oculto para garantir o pré-carregamento de Spritesheets antes do jogo iniciar.',
      codeExample: `<div id="asset-loader" style="display: none;">\n  <img id="player-spritesheet" src="sprites/hero_run.png" />\n  <img id="background-level1" src="backgrounds/sky.png" />\n</div>`,
      liveDemoConfig: {
        type: 'canvas',
        params: { drawSprite: true }
      },
      tutorialHTML: `Antes de desenhar qualquer coisa no Canvas, o navegador precisa ter a imagem carregada na memória do sistema. \n\nSe tentarmos desenhar uma imagem imediatamente sem verificar se ela terminou de baixar, o canvas resultará em branco ou apresentará erros de renderização intermitentes.\n\nFormas comuns de carregar:\n1. Declarando no HTML com display: none para que carregue com o resto da página.\n2. Criando instâncias de Image() dinamicamente via JavaScript.`
    },
    {
      id: 'html-beg-hud',
      title: 'UI e Elementos de HUD',
      shortDesc: 'Criando menus de jogo nativos e indicadores de vida usando elementos HTML comuns.',
      difficulty: 'beginner',
      estimatedTime: '6 min',
      icon: 'compass',
      concept: 'Sobrepor elementos HTML convencionais (como botões e textos) em cima do canvas para facilitar a criação de menus rápidos.',
      codeExample: `<div id="game-container" class="relative">\n  <canvas id="game-canvas"></canvas>\n  \n  <!-- Interface HUD em cima do jogo -->\n  <div class="absolute top-4 left-4 text-white">\n    <span>Score: 00000</span>\n  </div>\n</div>`,
      liveDemoConfig: {
        type: 'healthbar',
        params: { initialLife: 100 }
      },
      tutorialHTML: `Muitos desenvolvedores iniciantes tentam desenhar menus complexos, campos de texto e pontuações inteiramente com comandos de desenho no Canvas. Isso é trabalhoso e ineficiente.\n\nA melhor técnica é sobrepor elementos HTML normais utilizando CSS posicionado de forma absoluta sobre a tag &lt;canvas&gt;. O HTML cuida dos formulários, botões de retroalimentação e acessibilidade de maneira nativa e responsiva.`
    },
    {
      id: 'html-int-data',
      title: 'Data Attributes para Game Entities',
      shortDesc: 'Aproveitando o padrão de dados customizados do HTML para gerenciar IDs de entidades.',
      difficulty: 'intermediate',
      estimatedTime: '10 min',
      icon: 'database',
      concept: 'Usar data-* tags HTML para configurar valores primários de monstros, inimigos e caixas de recompensa na UI.',
      codeExample: `<button class="skill-btn" data-damage="50" data-cooldown="3">\n  Bola de Fogo\n</button>`,
      liveDemoConfig: {
        type: 'canvas',
        params: { useDataAttr: true }
      },
      tutorialHTML: `Os atributos customizados "data-*" fornecem uma maneira simples e padronizada de associar dados a tags HTML sem a necessidade de queries complexas.\n\nAo estruturar barras de atalho de habilidades (skills) ou inventários, você pode armazenar taxas de resfriamento (cooldown), consumo de mana ou poder de cura diretamente nas tags. O JavaScript lerá esses metadados via element.dataset.`
    },
    {
      id: 'html-int-audio',
      title: 'Controle de Áudio Nativo',
      shortDesc: 'Incluindo efeitos sonoros (<audio>) e controlando triggers via triggers HTML.',
      difficulty: 'intermediate',
      estimatedTime: '8 min',
      icon: 'music',
      concept: 'Manipular a tag nativa de áudio para música de fundo em loop e disparos rápidos de barulhos de tiro ou moedas.',
      codeExample: `<audio id="bgm-level1" loop preload="auto">\n  <source src="bgm.mp3" type="audio/mpeg">\n</audio>`,
      liveDemoConfig: {
        type: 'canvas',
        params: { audioTrigger: true }
      },
      tutorialHTML: `Adicionar efeitos sonoros e música de fundo eleva drasticamente a imersão de qualquer jogo. O HTML5 nos possibilita declarar trilhas sonoras leves com tags nativas de áudio.\n\nPara efeitos de curtíssimo atraso (latência zero) como tiros ou colisões, a Web Audio API do JavaScript é preferida, mas para música de menu ou de fundo, a tag &lt;audio&gt; clássica com controle de reprodução nativo é extremamente rápida e consome muito menos RAM.`
    },
    {
      id: 'html-adv-sandbox',
      title: 'Precarregadores Dinâmicos de Canvas',
      shortDesc: 'Gerenciando renderizadores múltiplos e threads com Canvas no Web Worker.',
      difficulty: 'advanced',
      estimatedTime: '15 min',
      icon: 'shield-alert',
      concept: 'Transferir o controle do renderizador de pixels do jogo principal para um Worker rodando em plano paralelo.',
      codeExample: `const offscreenCanvas = canvas.transferControlToOffscreen();\nconst worker = new Worker('game-worker.js');\nworker.postMessage({ canvas: offscreenCanvas }, [offscreenCanvas]);`,
      liveDemoConfig: {
        type: 'canvas',
        params: { offscreenText: 'Canvas Offscreen Ativo' }
      },
      tutorialHTML: `Quando jogos de navegador escalam, os cálculos pesados de IA, de física e o looping de render começam a travar a interface do usuário (lag na rolagem da página). \n\nUtilizando o OffscreenCanvas, conseguimos deslocar toda a manipulação de pixels e pintura para um script paralelo (Web Worker). Assim, o jogo flui a estáveis 60 FPS mesmo se a página principal houver scripts complexos em andamento!`
    }
  ],
  css: [
    {
      id: 'css-beg-flex',
      title: 'Centralização Perfeita de Arena',
      shortDesc: 'Como enquadrar a arena do seu jogo independente das telas ou telas de dispositivos móveis do usuário.',
      difficulty: 'beginner',
      estimatedTime: '4 min',
      icon: 'layout-grid',
      concept: 'Usar as flexbox properties para garantir que o contêiner do jogo esteja perfeitamente centralizado vertical de horizontalmente.',
      codeExample: `.game-viewport {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-height: 100vh;\n  background-color: #0f172a;\n}`,
      liveDemoConfig: {
        type: 'canvas',
        params: { outlineScreen: true }
      },
      tutorialHTML: `Muitos jogos em Web perdem engajamento logo no início porque ficam deformados ou desalinhados dependendo do monitor. Usar Flexbox ou Grid na seção principal da sua página garante enquadramento perfeito em qualquer dispositivo móvel ou PC de última geração.`
    },
    {
      id: 'css-beg-cursor',
      title: 'Cursores de Jogo Pixilados',
      shortDesc: 'Aumente a imersão criando ponteiros e mira customizadas com imagens do tema do seu jogo.',
      difficulty: 'beginner',
      estimatedTime: '5 min',
      icon: 'mouse-pointer',
      concept: 'Sobrescrever o ponteiro do cursor do SO comum por uma imagem inline .png ou .cur estilizada com estética pixel art.',
      codeExample: `.custom-cursor-area {\n  cursor: url('assets/cursor_mira.png') 16 16, auto;\n}`,
      liveDemoConfig: {
        type: 'css-cursor',
        params: {}
      },
      tutorialHTML: `Um detalhe muito bacana presente nos melhores jogos é o cursor do mouse customizado. Na CSS, você pode declarar uma imagem customizada para o estado de mira, alvo ativo, ou interações simples com botões de upgrade.`
    },
    {
      id: 'css-int-spritesheets',
      title: 'Animação de Sprite com Steps',
      shortDesc: 'Criando animações fluidas de spritesheets no navegador usando apenas propriedades de animação do CSS.',
      difficulty: 'intermediate',
      estimatedTime: '10 min',
      icon: 'rotate-cw',
      concept: 'Usar animation-timing-function com a função steps() para fatiar e avançar frames em posições específicas da imagem.',
      codeExample: `.player-walk {\n  width: 64px;\n  height: 64px;\n  background-image: url('player_sprites.png');\n  animation: walkCycle 0.8s steps(8) infinite;\n}\n\n@keyframes walkCycle {\n  from { background-position: 0px 0px; }\n  to { background-position: -512px 0px; }\n}`,
      liveDemoConfig: {
        type: 'canvas',
        params: { animateSprite: true }
      },
      tutorialHTML: `Às vezes não é necessário inflar o Canvas para animar pequenas entidades decorativas no menu do seu jogo (por exemplo, moedas girando ou brasas flutuando). \n\nA propriedade steps(X) permite que o CSS avance de frame em frame descontínuo em vez de realizar uma transição suave, gerando uma fidelidade perfeita de animação pixel-art com zero custo de processamento JS!`
    },
    {
      id: 'css-int-shake',
      title: 'Efeito Screen Shake com CSS',
      shortDesc: 'Crie impactos violentos e feedbacks de pancadas movimentando a câmera inteira de forma dinâmica.',
      difficulty: 'intermediate',
      estimatedTime: '7 min',
      icon: 'flame',
      concept: 'Um conjunto de keyframes rápidos que deslocam ligeiramente as coordenadas de margem ou translação do contêiner.',
      codeExample: `@keyframes shake {\n  0% { transform: translate(1px, 1px) rotate(0deg); }\n  10% { transform: translate(-1px, -2px) rotate(-1deg); }\n  30% { transform: translate(-3px, 0px) rotate(1deg); }\n  50% { transform: translate(1px, 2px) rotate(0deg); }\n  100% { transform: translate(1px, 1px) rotate(0deg); }\n}\n.shake {\n  animation: shake 0.3s linear;\n}`,
      liveDemoConfig: {
        type: 'shake',
        params: {}
      },
      tutorialHTML: `O "Screen Shake" é um dos melhores recursos de "Juice" (detalhes cosméticos de polimento) nos jogos. Ele gera uma resposta de impacto em combates. Basta adicionar uma classe temporária ao contêiner HTML do seu canvas toda vez que o herói tomar dano!`
    },
    {
      id: 'css-adv-crt',
      title: 'Filtro de Tela Retrô CRT',
      shortDesc: 'Transforme o visual do seu jogo pixel art em um fliperama clássico dos anos 80.',
      difficulty: 'advanced',
      estimatedTime: '12 min',
      icon: 'tv',
      concept: 'Aplicar uma camada semitransparente sobreposta com gradiente repetido e brilho animado de varredura.',
      codeExample: `.crt-overlay {\n  pointer-events: none;\n  background: linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%), linear-gradient(90deg, rgba(255, 0, 0, 0.06), rgba(0, 255, 0, 0.02), rgba(0, 0, 255, 0.06));\n  background-size: 100% 4px, 6px 100%;\n}`,
      liveDemoConfig: {
        type: 'scanlines',
        params: {}
      },
      tutorialHTML: `Para jogos de estilo retro/indie, recriar a textura de antigas telas de fósforo coloridas adiciona um charme estético incrível sem sobrecarregar a GPU. Com misturas de filtros de blend-mode podemos aplicar essa camada acima do Canvas principal.`
    },
    {
      id: 'css-adv-lighting',
      title: 'Iluminação Dinâmica Baseada em CSS Variables',
      shortDesc: 'Crie luzes dinâmicas de lanternas que seguem o ponteiro do mouse usando gradientes radiais acoplados.',
      difficulty: 'advanced',
      estimatedTime: '14 min',
      icon: 'sun',
      concept: 'Mecanismo de atualizar variáveis CSS customizadas (--light-x, --light-y) no JavaScript e desenhá-las em tempo de execução.',
      codeExample: `<div class="ambient-darkness" style="background: radial-gradient(circle 120px at var(--light-x) var(--light-y), transparent 100%, rgba(0,0,0,0.85) 100%);">\n</div>`,
      liveDemoConfig: {
        type: 'lights',
        params: {}
      },
      tutorialHTML: `Jogos de terror ou masmorra se beneficiam muito de iluminação dinâmica. Ao combinar manipulação leve de eventos de passagem do cursor em JS com variáveis CSS, você consegue iluminar seções pretas suavemente criando efeitos realistas de fog-of-war.`
    }
  ],
  js: [
    {
      id: 'js-beg-loop',
      title: 'A Game Loop Essencial',
      shortDesc: 'Os alicerces de qualquer frame: atualizar a física de redesenhar os pixels constantemente.',
      difficulty: 'beginner',
      estimatedTime: '9 min',
      icon: 'activity',
      concept: 'Utilizar o requestAnimationFrame para estabelecer conexões com a taxa de atualização física da tela do usuário.',
      codeExample: `function gameLoop(timestamp) {\n  atualizarFisica();\n  desenharRender();\n  \n  requestAnimationFrame(gameLoop);\n}\nrequestAnimationFrame(gameLoop);`,
      liveDemoConfig: {
        type: 'gameloop',
        params: { status: 'Ativa' }
      },
      tutorialHTML: `Diferente de sistemas Web orientados a eventos (que só reagem quando o usuário digita ou clica), jogos são sistemas reativos contínuos. Eles precisam executar de 30 a 120 vezes por segundo para realizar checks de gravidade, posição e colisões de forma orgânica.`
    },
    {
      id: 'js-beg-movement',
      title: 'Movimentos de Entidades',
      shortDesc: 'Registrando e-mails de teclado e controlando a aceleração das coordenadas X e Y.',
      difficulty: 'beginner',
      estimatedTime: '7 min',
      icon: 'compass',
      concept: 'Criar um dicionário indexando chaves lidas das teclas pressionadas e incrementando valores de deslocamento.',
      codeExample: `const teclas = {};\nwindow.addEventListener('keydown', e => teclas[e.key] = true);\nwindow.addEventListener('keyup', e => teclas[e.key] = false);\n\nfunction update() {\n  if (teclas['ArrowRight']) player.x += player.vel;\n  if (teclas['ArrowLeft']) player.x -= player.vel;\n}`,
      liveDemoConfig: {
        type: 'movement',
        params: {}
      },
      tutorialHTML: `Para mover um objeto de jogo clássico, você precisará monitorar continuamente a caixa de comandos digitados (geralmente WASD ou as setas direcionais), alterando os vetores de velocidade que determinam onde o ator principal deve desenhar a seguir.`
    },
    {
      id: 'js-int-aabb',
      title: 'Colisões Reais Retangulares (AABB)',
      shortDesc: 'Faça seus projéteis e paredes colidirem de verdade usando matemática prática simples.',
      difficulty: 'intermediate',
      estimatedTime: '12 min',
      icon: 'shield',
      concept: 'Axis-Aligned Bounding Box (AABB): uma checagem simples de faixas espaciais de overlapping entre dois corpos.',
      codeExample: `function checaColisao(rect1, rect2) {\n  return rect1.x < rect2.x + rect2.w &&\n         rect1.x + rect1.w > rect2.x &&\n         rect1.y < rect2.y + rect2.h &&\n         rect1.y + rect1.h > rect2.y;\n}`,
      liveDemoConfig: {
        type: 'canvas',
        params: { showAABBDemo: true }
      },
      tutorialHTML: `O colisor de retângulos (AABB) é o algoritmo mais performático para iniciar jogos de plataforma ou tiro. Ele decide instantaneamente se as extremidades do herói encostaram nos limites de algum obstáculo ou se uma bala atingiu o monstro!`
    },
    {
      id: 'js-adv-physics',
      title: 'Física de Plataforma Avançada',
      shortDesc: 'A matemática por trás de saltos, gravidade realista, aceleração elástica e frenagem.',
      difficulty: 'advanced',
      estimatedTime: '18 min',
      icon: 'boxes',
      concept: 'Cálculo vetorial básico aplicando vetores de resistência, atrito de solo, ar e empuxo de salto vertical.',
      codeExample: `player.vy += player.gravidade; // aplica gravidade\nplayer.x += player.vx;\nplayer.y += player.vy;\nplayer.vx *= player.atrito; // reduz velocidade lateral`,
      liveDemoConfig: {
        type: 'canvas',
        params: { platformPhysics: true }
      },
      tutorialHTML: `Para fazer um jogo de plataforma clássico parecer natural, aplicar pulos elásticos requer aplicar gravidade acumulada e fricções de vento. Com pequenos coeficientes de amortecimento físico, você ganha movimentos incrivelmente orgânicos!`
    }
  ]
};

export const CHALLENGE_DATA = [
  {
    id: 'ch-html-canvas',
    title: 'A Grande Tela (Canvas)',
    shortDesc: 'Declare o palco onde seu jogo vai renderizar.',
    difficulty: 'beginner',
    category: 'html',
    xpValue: 150,
    instructions: 'Escreva a declaração de uma tag <canvas> contendo o ID "tela-jogo" com a largura (width) igual a 800 e a altura (height) igual a 600.',
    initialCode: '<!-- Escreva aqui sua tag canvas -->\n',
    expectedKeywords: ['<canvas', 'id="tela-jogo"', 'width="800"', 'height="600"'],
    testRunner: (code) => {
      const clean = code.toLowerCase().replace(/\s+/g, ' ');
      if (!clean.includes('id="tela-jogo"') && !clean.includes("id='tela-jogo'")) {
        return { success: false, message: 'Falta o ID correto: id="tela-jogo"' };
      }
      if (!clean.includes('width="800"') && !clean.includes("width='800'") && !clean.includes('width=800')) {
        return { success: false, message: 'Falta a largura correta: width="800"' };
      }
      if (!clean.includes('height="600"') && !clean.includes("height='600'") && !clean.includes('height=600')) {
        return { success: false, message: 'Falta a altura correta: height="600"' };
      }
      if (!clean.includes('</canvas>')) {
        return { success: false, message: 'Não se esqueça de fechar a tag com </canvas>!' };
      }
      return { success: true, message: 'Uau! Palco criado com sucesso, agora você já pode carregar imagens e sprites nele!' };
    },
    hint: 'A sintaxe deve ser parecida com: <canvas id="tela-jogo" width="800" height="600"></canvas>'
  },
  {
    id: 'ch-html-sound',
    title: 'Trilha Sonora Ativa',
    shortDesc: 'Prepare a trilha de background do seu jogo.',
    difficulty: 'intermediate',
    category: 'html',
    xpValue: 200,
    instructions: 'Declare uma tag <audio> com os parâmetros booleanos para que fique em loop infinito ("loop") e seja carregada de forma antecipada automaticamente ("preload"). Use o ID "som-fundo".',
    initialCode: '<!-- Insira sua tag de áudio aqui -->\n',
    expectedKeywords: ['<audio', 'id="som-fundo"', 'loop', 'preload'],
    testRunner: (code) => {
      const clean = code.toLowerCase();
      if (!clean.includes('id="som-fundo"')) return { success: false, message: 'Falta o ID correto: id="som-fundo"' };
      if (!clean.includes('loop')) return { success: false, message: 'Falta o atributo de repetição contínua: loop' };
      if (!clean.includes('preload')) return { success: false, message: 'Falta o atributo para pré-carregamento: preload' };
      return { success: true, message: 'Incrível! Sua música de fundo vai iniciar instantaneamente sem engasgos!' };
    },
    hint: 'Use: <audio id="som-fundo" loop preload="auto"></audio>'
  },
  {
    id: 'ch-html-offscreen',
    title: 'Canvas em Threads Separadas',
    shortDesc: 'Apresente o método de desvincular o render do JS.',
    difficulty: 'advanced',
    category: 'html',
    xpValue: 350,
    instructions: 'Qual propriedade JavaScript extrai e transfere o controle do canvas para renderização paralela (OffscreenCanvas)? Escreva apenas o nome do método JS clássico contido nas instâncias de Canvas.',
    initialCode: '// Digite apenas o nome do método JS, ex: getElementById\n',
    expectedKeywords: ['transfercontroltooffscreen'],
    testRunner: (code) => {
      const clean = code.toLowerCase().trim().replace(/[();'"]/g, '');
      if (clean.includes('transfercontroltooffscreen')) {
        return { success: true, message: 'Corretíssimo! transferControlToOffscreen() é a chave do alto desempenho!' };
      }
      return { success: false, message: 'Incorreto. Tente consultar a aba de teoria avançada do Canvas!' };
    },
    hint: 'Começa com transferControlTo...'
  },
  {
    id: 'ch-css-pointer',
    title: 'Ponteiro Pixelado',
    shortDesc: 'Mude o cursor do mouse do usuário para estilo de jogo.',
    difficulty: 'beginner',
    category: 'css',
    xpValue: 150,
    instructions: 'Dentro de uma classe CSS chamada `.area-jogo`, defina o cursor padrão para que aponte para um arquivo de imagem localizado em "mira.png" com fallback do navegador automático.',
    initialCode: '.area-jogo {\n  /* Escreva sua propriedade de cursor */\n}',
    expectedKeywords: ['cursor:', 'url(', 'mira.png', 'auto'],
    testRunner: (code) => {
      const clean = code.toLowerCase().replace(/\s+/g, '');
      if (!clean.includes('cursor:')) return { success: false, message: 'Adicione a propriedade cursor!' };
      if (!clean.includes('url(')) return { success: false, message: 'Use url(...) para apontar para a imagem mira.png' };
      if (!clean.includes('mira.png')) return { success: false, message: 'Mapeie o link correto para "mira.png"' };
      if (!clean.includes('auto')) return { success: false, message: 'Não se esqueça do fallback padrão "auto" no final!' };
      return { success: true, message: 'Genial! Agora a mira pixel-art de mira de tiro está sincronizada.' };
    },
    hint: 'Estruturação típica: cursor: url("mira.png"), auto;'
  },
  {
    id: 'ch-css-step',
    title: 'Ciclo de Sprite Discreto',
    shortDesc: 'Evite o embaçamento e arraste na animação de personagens Gamedev.',
    difficulty: 'intermediate',
    category: 'css',
    xpValue: 250,
    instructions: 'Estilize a propriedade timing function de animação CSS para fazer uma transição de sprite cortando em 8 passos idênticos.',
    initialCode: '.sprite-personagem {\n  /* Escreva sua timing function */\n}',
    expectedKeywords: ['steps(8)'],
    testRunner: (code) => {
      const clean = code.toLowerCase().replace(/\s+/g, '');
      if (clean.includes('steps(8)')) {
        return { success: true, message: 'Excelente! steps(8) fatiará perfeitamente a spritesheet de 8 animações!' };
      }
      return { success: false, message: 'Não encontramos o fatiamento steps(8) exigido.' };
    },
    hint: 'Use: animation-timing-function: steps(8); ou inclua steps(8) na propriedade de atalho'
  },
  {
    id: 'ch-css-crt',
    title: 'Mesclagem CRT Retro',
    shortDesc: 'Como mesclar escaneamento de linhas com o canvas.',
    difficulty: 'advanced',
    category: 'css',
    xpValue: 400,
    instructions: 'Qual propriedade CSS é utilizada para misturar a sobreposição das ranhuras CRT com as cores de fundo do canvas (ex: overlay/multiply)? Declare esta propriedade específica de misturas.',
    initialCode: '.crt-overlay {\n  /* Escreva a propriedade de mistura CSS */\n}',
    expectedKeywords: ['mix-blend-mode'],
    testRunner: (code) => {
      const clean = code.toLowerCase().replace(/\s+/g, '');
      if (clean.includes('mix-blend-mode:')) {
        return { success: true, message: 'Fabuloso! mix-blend-mode permite misturar scanlines de CRT como se fossem luzes físicas de pixels de TVs velhas.' };
      }
      return { success: false, message: 'Use a propriedade mix-blend-mode para mesclar cores!' };
    },
    hint: 'A propriedade de CSS inicia com "mix-blend-..."'
  },
  {
    id: 'ch-js-loop',
    title: 'Executando o Loop Principal',
    shortDesc: 'Qual API do navegador comanda a taxa ideal de quadros para desenhos.',
    difficulty: 'beginner',
    category: 'js',
    xpValue: 150,
    instructions: 'Escreva a chamada à função global nativa do JavaScript usada para requisitar que o navegador re-desenhe a tela na próxima atualização de quadros (passando o gameLoop como argumento).',
    initialCode: 'function gameLoop() {\n  // ciclo continuo\n\n  // Digite aqui o comando para invocar o proximo frame de gameLoop:\n}',
    expectedKeywords: ['requestanimationframe', 'gameloop'],
    testRunner: (code) => {
      const clean = code.toLowerCase().replace(/\s+/g, '');
      if (!clean.includes('requestanimationframe')) {
        return { success: false, message: 'Você precisa registrar a função de animação nativa.' };
      }
      if (!clean.includes('gameloop')) {
        return { success: false, message: 'Você precisa repassar o callback gameLoop para que continue rodando indefinidamente!' };
      }
      return { success: true, message: 'Fantástico! requestAnimationFrame se auto-calibra de acordo com a taxa física do monitor do jogador automáticamente.' };
    },
    hint: 'Chame: requestAnimationFrame(gameLoop);'
  },
  {
    id: 'ch-js-aabb',
    title: 'Física de Colisão AABB',
    shortDesc: 'Calcule a lateral direita de um retângulo no universo customizado.',
    difficulty: 'intermediate',
    category: 'js',
    xpValue: 250,
    instructions: 'Completar o cálculo que avalia a borda direita de um retângulo. Se o objeto de jogo `player` possui uma coordenada horizontal `x` e largura `w`, como obtemos a coordenada exata da sua borda direita? Escreva a expressão matemática simples.',
    initialCode: '// Borda Direita = \n',
    expectedKeywords: ['x', '+', 'w'],
    testRunner: (code) => {
      const clean = code.toLowerCase().replace(/\s+/g, '');
      if (clean === 'player.x+player.w' || clean === 'x+w' || clean === 'player.x+w' || (clean.includes('x') && clean.includes('+') && clean.includes('w'))) {
        return { success: true, message: 'Estatística incrível! Somar a posição X com a largura total aponta a exata extremidade leste do corpo.' };
      }
      return { success: false, message: 'Certifique-se de somar a coordenada horizontal (x) com a respectiva largura (w)!' };
    },
    hint: 'Apenas retorne a soma: x + w'
  },
  {
    id: 'ch-js-lerp',
    title: 'Movimentos Suaves (LERP)',
    shortDesc: 'Crie uma movimentação de câmera suave usando Interpolação Linear.',
    difficulty: 'advanced',
    category: 'js',
    xpValue: 400,
    instructions: 'Para a suavização Linear (LERP), qual a fórmula curta que nos move da posição atual da câmera (cameraX) rumo ao playerX acelerado por um peso constante de suavização (0.1)? Escreva a fórmula de atualização de cameraX.',
    initialCode: 'cameraX = cameraX + \n',
    expectedKeywords: ['playerx', 'camerax', '0.1', '*'],
    testRunner: (code) => {
      const clean = code.toLowerCase().replace(/\s+/g, '');
      if (clean.includes('playerx-camerax') && clean.includes('0.1')) {
        return { success: true, message: 'Sua câmera agora desliza de forma macia e elegante sobre o jogador principal! Excelente matemática de lerp.' };
      }
      return { success: false, message: 'Dica: A fórmula do LERP atualizado é cameraX += (playerX - cameraX) * 0.1' };
    },
    hint: 'cameraX + (playerX - cameraX) * 0.1'
  }
];
