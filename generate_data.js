import fs from 'fs';

const HTML_BEGINNER = [
  {
    id: "html-beg-canvas",
    title: "O Elemento <canvas>",
    shortDesc: "A tela em branco pixelada onde toda a mágica dos jogos 2D acontece no seu navegador.",
    difficulty: "beginner",
    estimatedTime: "8 min",
    icon: "tv",
    concept: "Atua como a tela física onde o JavaScript desenha retângulos, sprites, caminhos e imagens a cada frame do seu jogo.",
    codeExample: "<canvas id=\"game-canvas\" width=\"800\" height=\"600\">\n  Seu navegador não suporta a tag Canvas.\n</canvas>",
    liveDemoConfig: { type: "canvas", params: {} },
    tutorialHTML: "O elemento HTML5 &lt;canvas&gt; é a base para quase todos os motores de jogos baseados na web (como Phaser ou PixiJS). Diferente de elementos HTML comuns que usam árvore DOM para posicionação individual, o Canvas é uma única caixa de pixels onde desenhamos programaticamente.\n\nPrincipais atributos:\n- **width**: Largura da tela em pixels.\n- **height**: Altura da tela em pixels.\n\nDica importante: Sempre defina os atributos width e height diretamente na tag HTML ou via propriedade JavaScript, e evite esticá-los usando CSS simples, pois isso causaria distorção e embaçamento de pixels no seu jogo!"
  },
  {
    id: "html-beg-images",
    title: "Estruturação de Sprites e Imagens",
    shortDesc: "Como declarar e preparar as imagens (Assets) de fundo e das suas personagens no HTML.",
    difficulty: "beginner",
    estimatedTime: "5 min",
    icon: "image",
    concept: "Uso de tags <img> dentro de um container oculto para garantir o pré-carregamento de Spritesheets antes do jogo iniciar.",
    codeExample: "<div id=\"asset-loader\" style=\"display: none;\">\n  <img id=\"player-spritesheet\" src=\"sprites/hero_run.png\" />\n  <img id=\"background-level1\" src=\"backgrounds/sky.png\" />\n</div>",
    liveDemoConfig: { type: "canvas", params: { drawSprite: true } },
    tutorialHTML: "Antes de desenhar qualquer coisa no Canvas, o navegador precisa ter a imagem carregada na memória do sistema. \n\nSe tentarmos desenhar uma imagem imediatamente sem verificar se ela terminou de baixar, o canvas resultará em branco ou apresentará erros de renderização intermitentes.\n\nFormas comuns de carregar:\n1. Declarando no HTML com display: none para que carregue com o resto da página.\n2. Criando instâncias de Image() dinamicamente via JavaScript."
  },
  {
    id: "html-beg-hud",
    title: "UI e Elementos de HUD",
    shortDesc: "Criando menus de jogo nativos e indicadores de vida usando elementos HTML comuns.",
    difficulty: "beginner",
    estimatedTime: "6 min",
    icon: "compass",
    concept: "Sobrepor elementos HTML convencionais (como botões e textos) em cima do canvas para facilitar a criação de menus rápidos.",
    codeExample: "<div id=\"game-container\" class=\"relative\">\n  <canvas id=\"game-canvas\"></canvas>\n  \n  <!-- Interface HUD em cima do jogo -->\n  <div class=\"absolute top-4 left-4 text-white\">\n    <span>Score: 00000</span>\n  </div>\n</div>",
    liveDemoConfig: { type: "healthbar", params: { initialLife: 100 } },
    tutorialHTML: "Muitos desenvolvedores iniciantes tentam desenhar menus complexos, campos de texto e pontuações inteiramente com comandos de desenho no Canvas. Isso é trabalhoso e ineficiente.\n\nA melhor técnica é sobrepor elementos HTML normais utilizando CSS posicionado de forma absoluta sobre a tag &lt;canvas&gt;. O HTML cuida dos formulários, botões de retroalimentação e acessibilidade de maneira nativa e responsiva."
  },
  {
    id: "html-beg-audio",
    title: "A Tag <audio> para Efeitos",
    shortDesc: "Como incluir e configurar trilhas sonoras e trilhas de fundo nativamente no HTML do jogo.",
    difficulty: "beginner",
    estimatedTime: "7 min",
    icon: "music",
    concept: "Controle de reprodução nativo de áudio para música ambiente ou efeitos curtos no navegador.",
    codeExample: "<audio id=\"bgm\" loop preload=\"auto\">\n  <source src=\"bgm.mp3\" type=\"audio/mpeg\">\n</audio>",
    liveDemoConfig: { type: "canvas", params: { audioTrigger: true } },
    tutorialHTML: "A tag &lt;audio&gt; oferece uma interface fácil e amigável para carregar e controlar efeitos sonoros e músicas de fundo. Através das propriedades 'loop' e 'preload', você otimiza o fluxo do carregamento direto para garantir que o seu jogo tenha trilha constante sem interrupções frequentes."
  },
  {
    id: "html-beg-structure",
    title: "Estrutura Correta do DOM do Jogo",
    shortDesc: "Organização estrutural dos contêineres e camadas de visualização física no documento HTML.",
    difficulty: "beginner",
    estimatedTime: "5 min",
    icon: "layout",
    concept: "Uso correto de classes CSS e seções flex no HTML para encapsular o canvas e o painel de debug lateral.",
    codeExample: "<div class=\"game-wrapper flex justify-center items-center\">\n  <div class=\"screen-overlay\"></div>\n  <canvas id=\"main-gate\"></canvas>\n</div>",
    liveDemoConfig: { type: "canvas", params: {} },
    tutorialHTML: "Uma boa estrutura de contêineres garante que o jogo responda a dimensionamentos de tela (responsividade), centralizando a tela principal com maestria e mantendo controles secundários e logs de console organizados em seções limpas na página HTML."
  },
  {
    id: "html-beg-input",
    title: "Inputs de Foco no Teclado",
    shortDesc: "Garantindo a captura de cliques e teclas através do tabindex do próprio canvas.",
    difficulty: "beginner",
    estimatedTime: "6 min",
    icon: "mouse-pointer",
    concept: "AtribuirTabIndex do HTML de forma a permitir que o canvas responda a foco de teclado de forma nativa.",
    codeExample: "<canvas id=\"focus-canvas\" tabindex=\"1\"></canvas>",
    liveDemoConfig: { type: "movement", params: {} },
    tutorialHTML: "Geralmente, tags de Canvas não recebem foco do teclado por padrão de acessibilidade. Ao configurar a propriedade 'tabindex=\"1\"', você viabiliza que o usuário clique diretamente no jogo e as teclas comecem a ser escutadas instantaneamente pela Engine JavaScript, evitando bugs de movimentos travados."
  },
  {
    id: "html-beg-meta",
    title: "Meta Viewport para Jogos Mobile",
    shortDesc: "Como declarar tags meta de viewport para desativar zooms e rolagem indesejadas no smartphone.",
    difficulty: "beginner",
    estimatedTime: "4 min",
    icon: "settings",
    concept: "Configurar tags meta no cabeçalho do HTML para congelar a escala de zoom e permitir toque ágil do usuário.",
    codeExample: "<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no\" />",
    liveDemoConfig: { type: "canvas", params: {} },
    tutorialHTML: "Para jogos mobile de navegador, o gesto clássico de pinça (zoom) ou duplo toque rápido costuma quebrar a tela inteira. Definir 'user-scalable=no' garante que cada toque do jogador na tela seja processado pela engine como comandos de ação imediata ou pulo, em vez de dar zoom de página."
  },
  {
    id: "html-beg-coordinates",
    title: "Coordenadas Matriciais de Tela",
    shortDesc: "Estudo das coordenadas cartesianas X e Y que comandam o plano matricial de desenho.",
    difficulty: "beginner",
    estimatedTime: "5 min",
    icon: "activity",
    concept: "Compreender que o ponto (0,0) está localizado no canto superior esquerdo do Canvas do navegador.",
    codeExample: "// Plano x positivo para a direita, y positivo para baixo\nctx.fillRect(0, 0, 50, 50); // Desenha bloco no canto superior",
    liveDemoConfig: { type: "canvas", params: {} },
    tutorialHTML: "No universo do desenvolvimento de jogos para navegadores, a matemática cartesiana é invertida no eixo vertical: o valor Y aumenta à medida que você se move para baixo na tela. Compreender essa lógica é vital para realizar cálculos corretos de saltos e gravidade de atores."
  },
  {
    id: "html-beg-viewport",
    title: "Dimensionamento Físico de Viewport",
    shortDesc: "Como adaptar corretamente as proporções de tela do canvas utilizando resoluções estáticas.",
    difficulty: "beginner",
    estimatedTime: "6 min",
    icon: "tv",
    concept: "Separar a largura lógica (atribuição direta no HTML) da largura e estilo de exibição física do elemento no navegador.",
    codeExample: "<canvas width=\"800\" height=\"600\" style=\"width: 100%; max-width: 800px;\"></canvas>",
    liveDemoConfig: { type: "canvas", params: {} },
    tutorialHTML: "Muitos desenvolvedores definem o tamanho do Canvas apenas via CSS, o que deforma e estica os pixels. A boa prática determina que 'width' e 'height' sejam configurados na própria tag física do HTML, utilizando a CSS somente para redimensionar proporcionalmente a janela de exibição externa."
  },
  {
    id: "html-beg-noscript",
    title: "Fallback com a Tag <noscript>",
    shortDesc: "Garantindo feedbacks visuais limpos e polidos caso o JavaScript esteja desativado no navegador.",
    difficulty: "beginner",
    estimatedTime: "3 min",
    icon: "shield-alert",
    concept: "Uso da tag noscript para instruir o jogador a habilitar os scripts e acessar o simulador de jogo.",
    codeExample: "<noscript>\n  <div class=\"p-4 bg-red-500/20\">Este jogo precisa de JavaScript para funcionar.</div>\n</noscript>",
    liveDemoConfig: { type: "canvas", params: {} },
    tutorialHTML: "Os navegadores bloqueiam scripts por motivos de segurança em algumas redes corporativas ou preferências do usuário. A tag &lt;noscript&gt; fornece um fallback amigável apresentando instruções claras de reativação sem quebrar a folha estética de design da página de entrada."
  }
];

const HTML_INTERMEDIATE = [
  {
    id: "html-int-data",
    title: "Data Attributes para Game Entities",
    shortDesc: "Aproveitando o padrão de dados customizados do HTML para gerenciar IDs de entidades.",
    difficulty: "intermediate",
    estimatedTime: "10 min",
    icon: "database",
    concept: "Usar data-* tags HTML para configurar valores primários de monstros, inimigos e caixas de recompensa na UI.",
    codeExample: "<button class=\"skill-btn\" data-damage=\"50\" data-cooldown=\"3\">\n  Bola de Fogo\n</button>",
    liveDemoConfig: { type: "canvas", params: { useDataAttr: true } },
    tutorialHTML: "Os atributos customizados \"data-*\" fornecem uma maneira simples e padronizada de associar dados a tags HTML sem a necessidade de queries complexas.\n\nAo estruturar barras de atalho de habilidades (skills) ou inventários, você pode armazenar taxas de resfriamento (cooldown), consumo de mana ou poder de cura diretamente nas tags. O JavaScript lerá esses metadados via element.dataset."
  },
  {
    id: "html-int-audio",
    title: "Canais de Áudio Paralelos",
    shortDesc: "Criando múltiplos canais de som dinamicamente via JS para mixagem de áudio.",
    difficulty: "intermediate",
    estimatedTime: "8 min",
    icon: "music",
    concept: "Iniciação dinâmica de objetos Audio no JS para sobrepor efeitos de tiros sem cortar a música ambiente.",
    codeExample: "function playSound(src) {\n  const s = new Audio(src);\n  s.play();\n}",
    liveDemoConfig: { type: "canvas", params: { audioTrigger: true } },
    tutorialHTML: "Para efeitos rápidos de curtíssimo atraso (latência zero) como tiros ou colisões, a instanciação imediata evita que uma reprodução atômica finalize antes da outra começar. Isso cria canais simultâneos de áudio retro nativos no seu inventário de som."
  },
  {
    id: "html-int-preloader",
    title: "Pré-carregadores Dinâmicos de Imagens",
    shortDesc: "Acompanhando o progresso de download dos ativos antes de desenhar o jogo.",
    difficulty: "intermediate",
    estimatedTime: "9 min",
    icon: "rotate-cw",
    concept: "Controle de filas de imagens com callback onload para exibir barras de progresso ao jogador.",
    codeExample: "const img = new Image();\nimg.onload = () => { console.log('Pronta!'); };\nimg.src = 'sprite.png';",
    liveDemoConfig: { type: "canvas", params: { drawSprite: true } },
    tutorialHTML: "Se seu jogo carrega sprites pesadas em tempo real, os elementos de tela correm o risco de ficarem invisíveis durante frames chave. Um carregador de imagens armazena as instâncias em um array, disparando a loop principal apenas quando uma contagem de 'carregadas' se igualar ao total."
  },
  {
    id: "html-int-dialog",
    title: "Elemento <dialog> de Menu e Pausa",
    shortDesc: "Uso de caixas modais modernas e nativas do HTML5 para criar interfaces de suspensão de loops.",
    difficulty: "intermediate",
    estimatedTime: "7 min",
    icon: "compass",
    concept: "Aproveitar recursos nativos de modal dialog para suspender e congelar loops fisicamente por trás.",
    codeExample: "<dialog id=\"pause-modal\" class=\"bg-black/90 p-6 rounded\">\n  <h3>Jogo Pausado</h3>\n  <button onclick=\"this.closest('dialog').close()\">Continuar</button>\n</dialog>",
    liveDemoConfig: { type: "healthbar", params: {} },
    tutorialHTML: "Em vez de criar modais pesadas e complicadas utilizando centenas de linhas de JS e CSS, o elemento &lt;dialog&gt; suporta abertura modal nativa com escurecimento automático pelo pseudo-elemento ::backdrop, controlando o fluxo e foco do navegador de forma brilhante."
  },
  {
    id: "html-int-sections",
    title: "Divisão Semântica de Telas",
    shortDesc: "Melhores práticas estruturais dividindo telas de Menu e Jogo de forma organizada no HTML.",
    difficulty: "intermediate",
    estimatedTime: "6 min",
    icon: "layout",
    concept: "Exibir ou ocultar seções lógicas de forma performática alterando atributos hidden ou classes de opacidade.",
    codeExample: "<section id=\"menu-screen\" class=\"active\">...</section>\n<section id=\"game-screen\" class=\"hidden\">...</section>",
    liveDemoConfig: { type: "canvas", params: {} },
    tutorialHTML: "Manter todas as telas de menus, conquistas, créditos e o canvas principal em seções semânticas separadas preserva a coesão do projeto. A transição pode ser automatizada com remoção e adição de classes de visibilidade com simples linhas no JavaScript."
  },
  {
    id: "html-int-templates",
    title: "Templates de Slots de Inventário",
    shortDesc: "Aproveitando la tag <template> para desenhar mochilas e listagens e slots rapidamente.",
    difficulty: "intermediate",
    estimatedTime: "8 min",
    icon: "layout-grid",
    concept: "Clonagem de nós do DOM usando templates HTML de forma limpa e super rápida para dados dinâmicos.",
    codeExample: "<template id=\"slot-template\">\n  <div class=\"slot border border-white/10 p-2\">\n    <img class=\"icon\" />\n  </div>\n</template>",
    liveDemoConfig: { type: "canvas", params: {} },
    tutorialHTML: "A tag &lt;template&gt; contém estruturas HTML que não são renderizadas na inicialização. Ao clicar na mochila do herói, o JS lê as informações, clona o template com importNode, preenche os campos do item e insere tudo direto na UI convencional instantaneamente."
  },
  {
    id: "html-int-embed",
    title: "Embeds e Iframes de Segurança",
    shortDesc: "Como incorporar jogos em portais e controlar bloqueios e acessos via sandbox.",
    difficulty: "intermediate",
    estimatedTime: "7 min",
    icon: "shield",
    concept: "Bloquear comportamentos de redirecionamento utilizando o atributo sandbox com declarações controladas.",
    codeExample: "<iframe src=\"jogos/index.html\" sandbox=\"allow-scripts allow-same-origin\"></iframe>",
    liveDemoConfig: { type: "canvas", params: { offscreenText: "Embed Sandbox Ativo" } },
    tutorialHTML: "Ao hospedar seu jogo em plataformas de arcade (como Itch.io ou Game Jolt), ele roda dentro de iframes. O atributo 'sandbox' protege o portal hospedeiro contra alterações de cookies ou scripts maliciosos, liberando apenas execução de scripts de game loop."
  },
  {
    id: "html-int-svg",
    title: "Uso de SVGs para Interfaces Vetoriais",
    shortDesc: "Sincronização de interfaces vetoriais no HUD para telas de altíssima densidade pixelar.",
    difficulty: "intermediate",
    estimatedTime: "8 min",
    icon: "image",
    concept: "Desenhar componentes geométricos vetoriais para evitar pixelização de botões nos menus modernos.",
    codeExample: "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\">\n  <polygon points=\"5,3 19,12 5,21\" fill=\"#fff\" />\n</svg>",
    liveDemoConfig: { type: "canvas", params: {} },
    tutorialHTML: "Diferente do Canvas (que é puramente rasterizado), o SVG se ajusta a qualquer escala (telas Retina ou Ultra-wide) mantendo as arestas de botões de atalho, ícones de mana ou estrelas de conquistas perfeitamente afiadas e elegantes."
  },
  {
    id: "html-int-drag",
    title: "Arrastar e Soltar Itens do Inventário",
    shortDesc: "Técnicas nativas de HTML5 Drag-and-Drop aplicadas em barras de atalho e mochilas.",
    difficulty: "intermediate",
    estimatedTime: "8 min",
    icon: "pointer",
    concept: "Atribuir interações de drag e drop nos botões de poções e armas no painel secundário.",
    codeExample: "<div class=\"item\" draggable=\"true\" ondragstart=\"drag(event)\"></div>",
    liveDemoConfig: { type: "canvas", params: {} },
    tutorialHTML: "O HTML5 nos oferece uma API clássica para gerenciar arrastes. Ao marcar 'draggable=\"true\"' em itens do seu inventário de poções ou runas, você captura eventos de movimentação e queda e atualiza as posições mapeadas no inventário por trás."
  },
  {
    id: "html-int-semantics",
    title: "Estatísticas Semânticas no Game HUD",
    shortDesc: "Como estruturar dados de pontuações de conquistas de forma que leitores compreendam.",
    difficulty: "intermediate",
    estimatedTime: "5 min",
    icon: "database",
    concept: "Aplicar marcações HTML clássicas como <time> para registrar tempos de Speedrun.",
    codeExample: "<p>Terminado em: <time datetime=\"PT12M30S\">12:30</time></p>",
    liveDemoConfig: { type: "canvas", params: {} },
    tutorialHTML: "Usar marcações HTML corretas nas conquistas melhora a indexação do site e permite que utilitários de acessibilidade leiam as informações do jogo de forma lógica. Usar tags `<data>` e `<time>` eleva o padrão profissional na codificação."
  }
];

const HTML_ADVANCED = [
  {
    id: "html-adv-sandbox",
    title: "OffscreenCanvas e Render Paralelo",
    shortDesc: "Gerenciando renderizadores múltiplos e threads com Canvas no Web Worker.",
    difficulty: "advanced",
    estimatedTime: "15 min",
    icon: "tv",
    concept: "Transferir o controle do renderizador de pixels do jogo principal para um Worker rodando em plano paralelo.",
    codeExample: "const offscreenCanvas = canvas.transferControlToOffscreen();\nconst worker = new Worker('game-worker.js');\nworker.postMessage({ canvas: offscreenCanvas }, [offscreenCanvas]);",
    liveDemoConfig: { type: "canvas", params: { offscreenText: "Canvas Offscreen Ativo" } },
    tutorialHTML: "Quando jogos de navegador escalam, os cálculos pesados de IA, de física e o looping de render começam a travar a interface do usuário (lag na rolagem da página). \n\nUtilizando o OffscreenCanvas, conseguimos deslocar toda a manipulação de pixels e pintura para um script paralelo (Web Worker). Assim, o jogo flui a estáveis 60 FPS mesmo se a página principal houver scripts complexos em andamento!"
  },
  {
    id: "html-adv-webaudio",
    title: "Web Audio API Context",
    shortDesc: "Criando sintetizadores e controles avançados de Panning espacial em tempo de execução.",
    difficulty: "advanced",
    estimatedTime: "14 min",
    icon: "music",
    concept: "Inicialização de sintetizadores analógicos virtuais geradores de ruídos de explosões dinâmicos.",
    codeExample: "const ctx = new AudioContext();\nconst osc = ctx.createOscillator();\nosc.connect(ctx.destination);\nosc.start();",
    liveDemoConfig: { type: "canvas", params: { audioTrigger: true } },
    tutorialHTML: "Para além da tag de áudio clássica, a Web Audio API permite criar sistemas de áudio robustos e modulares. Você pode aplicar filtros passa-baixo (lowpass) caso o jogo seja pausado, simulando que os sons fiquem abafados, ou ajustar canais de pan 3D."
  },
  {
    id: "html-adv-path2d",
    title: "Canvas Path2D API para Colisores",
    shortDesc: "Declarando caminhos vetoriais complexos e realizando testes pontuais geométricos no Canvas.",
    difficulty: "advanced",
    estimatedTime: "12 min",
    icon: "shield",
    concept: "Verificar colisões complexas usando a função nativa ctx.isPointInPath de caminhos salvos.",
    codeExample: "const path = new Path2D();\npath.rect(10, 10, 100, 100);\nif (ctx.isPointInPath(path, mouseX, mouseY)) { ... }",
    liveDemoConfig: { type: "canvas", params: { showAABBDemo: true } },
    tutorialHTML: "A API Path2D simplifica a gerência de geometria no Canvas. Em vez de reescrever coordenadas de desenho de caminhos a cada passo, você instancia e metrifica o desenho uma única vez no construtor Path2D, realizando testes de colisão do cursor rápidos."
  },
  {
    id: "html-adv-layering",
    title: "Multi-Canvas Layering (Camadas)",
    shortDesc: "Técnicas de otimização estacando múltiplos planos de renderização sobrepostos.",
    difficulty: "advanced",
    estimatedTime: "13 min",
    icon: "layout",
    concept: "Dividir o plano de render em camadas para evitar redesenhar fundos estáticos em cada frame.",
    codeExample: "<div class=\"layers\">\n  <canvas id=\"bg-layer\"></canvas>\n  <canvas id=\"entities-layer\"></canvas>\n</div>",
    liveDemoConfig: { type: "canvas", params: {} },
    tutorialHTML: "Ao rodar jogos complexos com grandes fundos pixelados detalhados, desenhá-los de novo a 60 FPS prejudica o processamento. A solução é ter um canvas separado ao fundo para o cenário que não muda frequentemente, redesenhando apenas os personagens à frente."
  },
  {
    id: "html-adv-gamepad",
    title: "Gamepad API para Controles USB",
    shortDesc: "Como ler joystick físicamente escanear inputs de vibração e comandos analógicos.",
    difficulty: "advanced",
    estimatedTime: "15 min",
    icon: "compass",
    concept: "Gerenciar callbacks de gamepadconnected para capturar taxas de eixos analógicos do controle do jogador.",
    codeExample: "window.addEventListener(\"gamepadconnected\", (e) => {\n  console.log(\"Gamepad ativo:\", e.gamepad.id);\n});",
    liveDemoConfig: { type: "movement", params: {} },
    tutorialHTML: "O navegador nos dá suporte nativo aos controles de console (Xbox, PlayStation). Através do loop de navegação ativa da Gamepad API, você escuta dados contínuos de direcionais analógicos e forças digitadas nos botões físicos instantaneamente."
  },
  {
    id: "html-adv-webrtc",
    title: "Canais WebRTC para Multiplayer UDP",
    shortDesc: "Uso de RTCDataChannel para trocar posições e inputs sem lag em tempo de execução.",
    difficulty: "advanced",
    estimatedTime: "18 min",
    icon: "activity",
    concept: "Interpretar conexões P2P diretas de baixa latência para sincronizar coordenadas em milissegundos.",
    codeExample: "const channel = peerConn.createDataChannel(\"game-data\", { ordered: false });\nchannel.send(JSON.stringify(playerCoords));",
    liveDemoConfig: { type: "canvas", params: { offscreenText: "Rede P2P WebRTC Ativa" } },
    tutorialHTML: "Enquanto os WebSockets utilizam o protocolo TCP (pesado e persistente, garantindo envio com atrasos), a Gamepad API unida a RTCDataChannel permite tráfego sem ordenação e não confiável (estilo UDP). É o motor chave para jogos de tiro online na Web!"
  },
  {
    id: "html-adv-webgl",
    title: "Contexto WebGL para Alto Desempenho",
    shortDesc: "Ativação de renderização via GPU para acelerar malhas complexas em 2D/3D.",
    difficulty: "advanced",
    estimatedTime: "17 min",
    icon: "tv",
    concept: "Instanciação de shaders diretamente na placa de vídeo para pintura exponencial de matrizes.",
    codeExample: "const gl = canvas.getContext(\"webgl\");\nif (!gl) { console.error(\"Sem suporte a aceleração física de 3D!\"); }",
    liveDemoConfig: { type: "canvas", params: { offscreenText: "GPU WebGL 3D Ativada" } },
    tutorialHTML: "Para acelerar e elevar a fidelidade do seu jogo com iluminações volumétricas de partículas, o render normal do Canvas 2D deixa de ser suficiente. Integrar WebGL ativa os pipelines nativos da GPU, gerando milhares de partículas sem oscilações de FPS."
  },
  {
    id: "html-adv-textmetrics",
    title: "TextMetrics para Diálogos de RPGs",
    shortDesc: "Medição e fracionamento preciso de balões de texto dinâmicos no canvas.",
    difficulty: "advanced",
    estimatedTime: "11 min",
    icon: "database",
    concept: "Uso do método measureText para ajustar de forma automatizada o tamanho de caixas de diálogo.",
    codeExample: "const metrics = ctx.measureText(\"Olá Viajante!\");\nconst textWidth = metrics.width;",
    liveDemoConfig: { type: "canvas", params: {} },
    tutorialHTML: "Em RPGs cheios de diálogos e textos flutuantes, as frases correm o risco de extrapolar a caixa gráfica ou quebrarem ao meio de forma feia. TextMetrics calcula o avanço exato de pixels para realizar quebras automáticas de linha lineares perfeitas."
  },
  {
    id: "html-adv-recording",
    title: "CaptureStream do Canvas para Gravação",
    shortDesc: "Gravando o gameplay do jogador em arquivos de vídeo locais via MediaRecorder.",
    difficulty: "advanced",
    estimatedTime: "14 min",
    icon: "image",
    concept: "Extrair fluxos de vídeo (streams) de 60fps do Canvas para possibilitar downloads do jogo.",
    codeExample: "const stream = canvas.captureStream(60);\nconst recorder = new MediaRecorder(stream);\nrecorder.start();",
    liveDemoConfig: { type: "canvas", params: {} },
    tutorialHTML: "Forerecer um botão de 'Gravar sua maior jogada' ou 'Download da sua Speedrun' fideliza usuários. O CaptureStream recolhe do Canvas um framerate estrito que é alimentado na MediaStream API, gerando clipes prontos para as redes sociais."
  },
  {
    id: "html-adv-pointerlock",
    title: "Pointer Lock API de Mira Livre",
    shortDesc: "Mecanismo de trancar o cursor no centro em arenas tridimensionais ou shooters.",
    difficulty: "advanced",
    estimatedTime: "13 min",
    icon: "pointer",
    concept: "Ativar bloqueio de cursor no clique para ler deslocamentos delta em vez de posições fixas.",
    codeExample: "canvas.requestPointerLock = canvas.requestPointerLock || canvas.mozRequestPointerLock;\ncanvas.requestPointerLock();",
    liveDemoConfig: { type: "css-cursor", params: {} },
    tutorialHTML: "Nos shooters 3D ou jogos espaciais bidimensionais de mira livre, o cursor do mouse escaparia facilmente do Canvas no primeiro movimento ágil. A Pointer Lock API captura e esconde o mouse, lendo variações contínuas de movimento físicas de coordenadas."
  }
];

const CSS_BEGINNER = [
  {
    id: "css-beg-flex",
    title: "Centralização Perfeita de Arena",
    shortDesc: "Como enquadrar a arena do seu jogo independente das telas ou telas de dispositivos móveis do usuário.",
    difficulty: "beginner",
    estimatedTime: "4 min",
    icon: "layout-grid",
    concept: "Usar as flexbox properties para garantir que o contêiner do jogo esteja perfeitamente centralizado vertical de horizontalmente.",
    codeExample: ".game-viewport {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-height: 100vh;\n  background-color: #0f172a;\n}",
    liveDemoConfig: { type: "canvas", params: { outlineScreen: true } },
    tutorialHTML: "Muitos jogos em Web perdem engajamento logo no início porque ficam deformados ou desalinhados dependendo do monitor. Usar Flexbox ou Grid na seção principal da sua página garante enquadramento perfeito em qualquer dispositivo móvel ou PC de última geração."
  },
  {
    id: "css-beg-cursor",
    title: "Cursores de Jogo Pixelados",
    shortDesc: "Aumente a imersão criando ponteiros e mira customizadas com imagens do tema do seu jogo.",
    difficulty: "beginner",
    estimatedTime: "5 min",
    icon: "mouse-pointer",
    concept: "Sobrescrever o ponteiro do cursor do SO comum por uma imagem inline .png ou .cur estilizada com estética pixel art.",
    codeExample: ".custom-cursor-area {\n  cursor: url('assets/cursor_mira.png') 16 16, auto;\n}",
    liveDemoConfig: { type: "css-cursor", params: {} },
    tutorialHTML: "Um detalhe muito bacana presente nos melhores jogos é o cursor do mouse customizado. Na CSS, você pode declarar uma imagem customizada para o estado de mira, alvo ativo, ou interações simples com botões de upgrade."
  },
  {
    id: "css-beg-resets",
    title: "Resets de Layout de Scroll",
    shortDesc: "Zerar margens e bloquear barras de rolagem nativas para manter foco visual no canvas.",
    difficulty: "beginner",
    estimatedTime: "4 min",
    icon: "layout",
    concept: "Configurar o body com overflow escondido e zerar padding de contêineres e margens estruturais.",
    codeExample: "body {\n  margin: 0;\n  padding: 0;\n  overflow: hidden;\n  background-color: #050508;\n}",
    liveDemoConfig: { type: "canvas", params: {} },
    tutorialHTML: "A barra de rolagem lateral que pula quando o herói anda pula na tela é o terror dos jogos. Resets CSS severos eliminam qualquer margem fantasmas nas tags body e html para garantir controle absoluto da área pixelada."
  },
  {
    id: "css-beg-retrobutton",
    title: "Botões Planos com Sombra Seca",
    shortDesc: "Estilização de menus retrô com bordas densas e deslocamento mecânico ao clicar.",
    difficulty: "beginner",
    estimatedTime: "5 min",
    icon: "compass",
    concept: "Visual clássico com sombras flat pretas que simulam um efeito tridimensional de botão mecânico arcade.",
    codeExample: ".btn-retro {\n  border: 3px solid #fff;\n  box-shadow: 4px 4px 0px #000;\n}\n.btn-retro:active {\n  transform: translate(2px, 2px);\n  box-shadow: 2px 2px 0px #000;\n}",
    liveDemoConfig: { type: "canvas", params: {} },
    tutorialHTML: "Estilizar um menu flat não requer imagens gigantes. Combinar bordas sólidas grossas com sombras firmes em box-shadow cria instantaneamente a sensação de botões analógicos de fliperama clássicos com zero carregamento extra de ativos."
  },
  {
    id: "css-beg-noselect",
    title: "Desativar Seleção de Textos",
    shortDesc: "Impedindo realces de seleção azul nos botões do HUD durante cliques rápidos do mouse.",
    difficulty: "beginner",
    estimatedTime: "3 min",
    icon: "mouse-pointer",
    concept: "Desabilitar a seleção azul padrão do cursor (user-select: none) nas áreas do HUD.",
    codeExample: ".hud-text {\n  user-select: none;\n  -webkit-user-select: none;\n}",
    liveDemoConfig: { type: "canvas", params: {} },
    tutorialHTML: "Clicar de forma ágil em botões de itens ou de disparos do jogo no HUD pode fazer o navegador acidentalmente selecionar os textos em azul. Aplicar 'user-select: none' preserva a estética sólida de console nativa."
  },
  {
    id: "css-beg-scrollbars",
    title: "Customização de Barras de Rolagem",
    shortDesc: "Deixando as barras de rolagem de caixas de texto com o visual escuro pixelado do jogo.",
    difficulty: "beginner",
    estimatedTime: "5 min",
    icon: "layout",
    concept: "Redefinir as cores de fundo e os cantos das scrollbars no CSS de forma customizada.",
    codeExample: "::-webkit-scrollbar {\n  width: 6px;\n  background: #111;\n}\n::-webkit-scrollbar-thumb {\n  background: #4f46e5;\n}",
    liveDemoConfig: { type: "canvas", params: {} },
    tutorialHTML: "Para caixas de chat, registros de quests ou logs técnicos no painel lateral do jogo, manter barra de rolagem cinza padrão do sistema operacional quebra o clima. Detalhar as scrollbars no CSS completa a imersão visual."
  },
  {
    id: "css-beg-darkness",
    title: "Estética de Preto Profundo",
    shortDesc: "Como aplicar fundos escuros de alta taxa de contraste para reduzir cansaço dos alunos.",
    difficulty: "beginner",
    estimatedTime: "4 min",
    icon: "sun",
    concept: "Definição de tonalidades de cinza azulado minimalista para menus imersivos.",
    codeExample: ".dark-canvas {\n  background-color: #0a0a0d;\n  color: #eeeef2;\n}",
    liveDemoConfig: { type: "canvas", params: {} },
    tutorialHTML: "Evitar fundos brancos puros perto de jogos pixelados é primordial. Um fundo preto ambientado ou grafite fosco ajuda a dar destaque perfeito de contrastes das paletas de cores de sprites brilhantes e mágicas no Canvas."
  },
  {
    id: "css-beg-ratio",
    title: "Aspect Ratio Fixo no Viewport",
    shortDesc: "Travando as proporções estruturais da arena para evitar distorções de tamanhos em telas mobile.",
    difficulty: "beginner",
    estimatedTime: "5 min",
    icon: "tv",
    concept: "Usar a propriedade CSS aspect-ratio para congelar uma proporção clássica de 4:3 ou 16:9.",
    codeExample: ".arena-container {\n  aspect-ratio: 16 / 9;\n  width: 100%;\n  max-width: 960px;\n}",
    liveDemoConfig: { type: "canvas", params: {} },
    tutorialHTML: "A propriedade aspect-ratio de CSS moderno cuida de manter o contêiner proporcional, não importando a largura disponível. Isso previne que a tela encolha de forma a esmagar e achatar o Canvas e as posições de sensores."
  },
  {
    id: "css-beg-fontface",
    title: "Fontes Pixeladas com @font-face",
    shortDesc: "Como carregar fontes de tipografia pixel art e desativar anti-aliasing de textos retrô.",
    difficulty: "beginner",
    estimatedTime: "6 min",
    icon: "database",
    concept: "Importar fontes clássicas do Google Fonts ou arquivos .ttf locais diretamente na folha de CSS.",
    codeExample: "@import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');\n.pixel-text { font-family: 'Press Start 2P', system-ui; }",
    liveDemoConfig: { type: "canvas", params: {} },
    tutorialHTML: "Para além de carregar fontes de alta escala, você pode desativar filtros de interpolação em navegadores antigos usando 'font-smooth: never'. Isso entrega textos pixelados imaculadamente nítidos e legíveis em micro dimensões."
  },
  {
    id: "css-beg-rendering",
    title: "Image Rendering Pixelated",
    shortDesc: "Desative a suavização automática de spritesheets para manter texturas pixel art afiadas.",
    difficulty: "beginner",
    estimatedTime: "5 min",
    icon: "image",
    concept: "Uso de image-rendering: pixelated para ampliar sprites sem que fiquem borradas na tela.",
    codeExample: "img, canvas {\n  image-rendering: pixelated;\n  image-rendering: crisp-edges;\n}",
    liveDemoConfig: { type: "canvas", params: { drawSprite: true } },
    tutorialHTML: "Navegadores modernos tentam suavizar (borrar) imagens redimensionadas no CSS para simular alta fidelidade. Para pixel art, esta suavização destrói os detalhes clássicos. Configurar 'pixelated' mantém o contorno afiado e os pixels preservados."
  }
];

const CSS_INTERMEDIATE = [
  {
    id: "css-int-spritesheets",
    title: "Animação de Sprite com Steps",
    shortDesc: "Criando animações fluidas de spritesheets no navegador usando apenas propriedades de animação do CSS.",
    difficulty: "intermediate",
    estimatedTime: "10 min",
    icon: "rotate-cw",
    concept: "Usar animation-timing-function com a função steps() para fatiar e avançar frames em posições específicas da imagem.",
    codeExample: ".player-walk {\n  width: 64px;\n  height: 64px;\n  background-image: url('player_sprites.png');\n  animation: walkCycle 0.8s steps(8) infinite;\n}\n\n@keyframes walkCycle {\n  from { background-position: 0px 0px; }\n  to { background-position: -512px 0px; }\n}",
    liveDemoConfig: { type: "canvas", params: { animateSprite: true } },
    tutorialHTML: "Às vezes não é necessário inflar o Canvas para animar pequenas entidades decorativas no menu do seu jogo (por exemplo, moedas girando ou brasas flutuando). \n\nA propriedade steps(X) permite que o CSS avance de frame em frame descontínuo em vez de realizar uma transição suave, gerando uma fidelidade perfeita de animação pixel-art com zero custo de processamento JS!"
  },
  {
    id: "css-int-shake",
    title: "Efeito Screen Shake com CSS",
    shortDesc: "Crie impactos violentos e feedbacks de pancadas movimentando a câmera inteira de forma dinâmica.",
    difficulty: "intermediate",
    estimatedTime: "7 min",
    icon: "flame",
    concept: "Um conjunto de keyframes rápidos que deslocam ligeiramente as coordenadas de margem ou translação do contêiner.",
    codeExample: "@keyframes shake {\n  0% { transform: translate(1px, 1px) rotate(0deg); }\n  10% { transform: translate(-1px, -2px) rotate(-1deg); }\n  30% { transform: translate(-3px, 0px) rotate(1deg); }\n  50% { transform: translate(1px, 2px) rotate(0deg); }\n  100% { transform: translate(1px, 1px) rotate(0deg); }\n}\n.shake {\n  animation: shake 0.3s linear;\n}",
    liveDemoConfig: { type: "shake", params: {} },
    tutorialHTML: "O \"Screen Shake\" é um dos melhores recursos de \"Juice\" (detalhes cosméticos de polimento) nos jogos. Ele gera uma resposta de impacto em combates. Basta adicionar uma classe temporária ao contêiner HTML do seu canvas toda vez que o herói tomar dano!"
  },
  {
    id: "css-int-life",
    title: "Barra de Vida Fluida e Responsiva",
    shortDesc: "Efeitos visuais de transição suave em barras de HP e Mana ao receber danos.",
    difficulty: "intermediate",
    estimatedTime: "6 min",
    icon: "activity",
    concept: "Aplicar transições na largura (width) de elementos internos de barras para criar um efeito analógico orgânico.",
    codeExample: ".hp-fill {\n  transition: width 0.4s cubic-bezier(0.1, 0.8, 0.3, 1);\n  background-color: #ef4444;\n}",
    liveDemoConfig: { type: "healthbar", params: {} },
    tutorialHTML: "Atualizar diretamente a largura do HP de 100% para 20% faz a barra picotar na visualização de forma abrupta. Sincronizar transições CSS apropriadas atenua a redução da barra gradualmente, transmitindo maior senso de refinamento e impacto na HUD."
  },
  {
    id: "css-int-overlay",
    title: "HUD Flutuante com Position Absolute",
    shortDesc: "Sobrepondo barras de status no canvas sem quebrar o fluxo estático do HTML.",
    difficulty: "intermediate",
    estimatedTime: "8 min",
    icon: "layout",
    concept: "Encapsular o Canvas em um recipiente relativo e amarrar os menus usando posições absolutas fixas.",
    codeExample: ".game-box { position: relative; }\n.absolute-hud { position: absolute; top: 12px; left: 12px; }",
    liveDemoConfig: { type: "healthbar", params: {} },
    tutorialHTML: "A melhor forma de desenvolver interfaces no navegador é permitir que o HTML renderize o HUD e o Canvas cuide puramente de rodar a viewport do jogo. Assim, menus herdam focos de mouse e acessibilidades de forma natural."
  },
  {
    id: "css-int-menus",
    title: "Menus 3D usando Perspectiva CSS",
    shortDesc: "Como girar e inclinar painéis de pause criando um visual de fliperama tridimensional.",
    difficulty: "intermediate",
    estimatedTime: "9 min",
    icon: "rotate-cw",
    concept: "Empregar rotações nos eixos X e Y coordenadas por perspectivas profundas virtuais no CSS.",
    codeExample: ".menu-arcade {\n  transform: perspective(600px) rotateX(15deg);\n  transform-style: preserve-3d;\n}",
    liveDemoConfig: { type: "canvas", params: {} },
    tutorialHTML: "O CSS3 permite construir profundidade sem sobrecarregar a velocidade de pintura. Rotacionar e aplicar gradientes de profundidade no painel de estatísticas cria um visual sensacional estilo arcade curvo imersivo de alta qualidade."
  },
  {
    id: "css-int-vignette",
    title: "Gradiente Radial para Vignette (Névoa)",
    shortDesc: "Efeitos de iluminação de bordas em escuro contínuo para masmorras ou cavernas.",
    difficulty: "intermediate",
    estimatedTime: "7 min",
    icon: "sun",
    concept: "Usar gradientes radiais em camadas transparentes absolutas para escurecer as bordas do monitor do jogo.",
    codeExample: ".vignette {\n  background: radial-gradient(circle, transparent 50%, rgba(0,0,0,0.85) 100%);\n  pointer-events: none;\n}",
    liveDemoConfig: { type: "scanlines", params: {} },
    tutorialHTML: "Aplicar uma camada sem interação de clique (pointer-events: none) de vignette cria mistério e tensão imediatos em jogos de terror ou masmorra, afunilando o foco de quem joga diretamente no centro de tela."
  },
  {
    id: "css-int-fade",
    title: "Transições de Fade-In para Fases",
    shortDesc: "Animações de entrada e saída para trocas elegantes de fase e loops de transições.",
    difficulty: "intermediate",
    estimatedTime: "6 min",
    icon: "activity",
    concept: "Transição suave de opacidade disparada sob o controle de classes no carregamento.",
    codeExample: ".screen-fade {\n  transition: opacity 0.5s ease-in-out;\n  opacity: 1;\n}\n.screen-fade.vanished { opacity: 0; }",
    liveDemoConfig: { type: "canvas", params: {} },
    tutorialHTML: "Ocultar os elementos da floresta para carregar o castelo de forma súbita corta o ritmo psicológico. Adicionar uma classe de fade-out que preenche o container com preto e remove-la com fade-in faz o cérebro processar a transição com suavidade profissional."
  },
  {
    id: "css-int-glow",
    title: "Brilhos de Magias com Shadows",
    shortDesc: "Criando barras de energia brilhantes e botões neon usando text e box shadows.",
    difficulty: "intermediate",
    estimatedTime: "8 min",
    icon: "flame",
    concept: "Uso combinado de box-shadow internos e externos repetidos com matizes altamente saturados.",
    codeExample: ".fire-sword {\n  box-shadow: 0 0 15px rgba(249, 115, 22, 0.8), inset 0 0 5px #fff;\n}",
    liveDemoConfig: { type: "lights", params: {} },
    tutorialHTML: "Empregar múltiplos valores de sombras desfocadas com cores vibrantes empilha energia brilhante em botões de status. Isso replica com excelência o efeito clássico de sabres luminosos ou cargas ativas de magias sem recorrer ao Canvas."
  },
  {
    id: "css-int-xpfloat",
    title: "Pontos de Dano Flutuantes de XP",
    shortDesc: "Como animar indicadores numéricos de XP e danos subindo e sumindo na tela.",
    difficulty: "intermediate",
    estimatedTime: "8 min",
    icon: "layout",
    concept: "Um loop com keyframe CSS de translação vertical acumulativo e de desbotamento por opacidade.",
    codeExample: "@keyframes floatUp {\n  0% { transform: translateY(0); opacity: 1; }\n  100% { transform: translateY(-40px); opacity: 0; }\n}",
    liveDemoConfig: { type: "shake", params: {} },
    tutorialHTML: "Quando o herói ataca ou acumula pontos, disparar um pequeno div HTML que herda a classe '.float-active' faz o indicador de combate deslizar e desaparecer elegantemente. Prático, leve no processador e visualmente dinâmico."
  },
  {
    id: "css-int-blur",
    title: "Filtros de Desfocagem de Pause",
    shortDesc: "Empregar desfoque de cenário de fundo quando o menu do RPG estiver suspenso.",
    difficulty: "intermediate",
    estimatedTime: "5 min",
    icon: "settings",
    concept: "Uso do comando backdrop-filter de forma a embaçar as camadas rasterizadas traseiras no browser.",
    codeExample: ".pause-background {\n  backdrop-filter: blur(8px);\n  background-color: rgba(5,5,8,0.5);\n}",
    liveDemoConfig: { type: "canvas", params: {} },
    tutorialHTML: "Ao suspender ou abrir o menu de inventários da mochila, embaçar levemente a ação de jogo que corre por trás centraliza a atenção no player, transmitindo clareça e alto nível estético de interface do usuário."
  }
];

const CSS_ADVANCED = [
  {
    id: "css-adv-crt",
    title: "Filtro de Tela Retrô CRT",
    shortDesc: "Transforme o visual do seu jogo pixel art em um fliperama clássico dos anos 80.",
    difficulty: "advanced",
    estimatedTime: "12 min",
    icon: "tv",
    concept: "Aplicar uma camada semitransparente sobreposta com gradiente repetido e brilho animado de varredura.",
    codeExample: ".crt-overlay {\n  pointer-events: none;\n  background: linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%), linear-gradient(90deg, rgba(255, 0, 0, 0.06), rgba(0, 255, 0, 0.02), rgba(0, 0, 255, 0.06));\n  background-size: 100% 4px, 6px 100%;\n}",
    liveDemoConfig: { type: "scanlines", params: {} },
    tutorialHTML: "Para jogos de estilo retro/indie, recriar a textura de antigas telas de fósforo coloridas adiciona um charme estético incrível sem sobrecarregar a GPU. Com misturas de filtros de blend-mode podemos aplicar essa camada acima do Canvas principal."
  },
  {
    id: "css-adv-lighting",
    title: "Iluminação Dinâmica por CSS Variables",
    shortDesc: "Crie luzes dinâmicas de lanternas que seguem o ponteiro do mouse usando gradientes radiais acoplados.",
    difficulty: "advanced",
    estimatedTime: "14 min",
    icon: "sun",
    concept: "Mecanismo de atualizar variáveis CSS customizadas (--light-x, --light-y) no JavaScript e desenhá-las em tempo de execução.",
    codeExample: "<div class=\"ambient-darkness\" style=\"background: radial-gradient(circle 120px at var(--light-x) var(--light-y), transparent 100%, rgba(0,0,0,0.85) 100%);\">\n</div>",
    liveDemoConfig: { type: "lights", params: {} },
    tutorialHTML: "Jogos de terror ou masmorra se beneficiam muito de iluminação dinâmica. Ao combinar manipulação leve de eventos de passagem do cursor em JS com variáveis CSS, você consegue iluminar seções pretas suavemente criando efeitos realistas de fog-of-war."
  },
  {
    id: "css-adv-parallax",
    title: "Fundo Paralaxe Infinito de Estrelas",
    shortDesc: "Mapeie e mova planos de fundos do jogo em ritmos diferentes de profundidade usando posições.",
    difficulty: "advanced",
    estimatedTime: "13 min",
    icon: "layout-grid",
    concept: "Construção de camadas de fundo com taxas de translação escaladas e propriedades de looping infinito do background.",
    codeExample: ".sky { background-position: var(--pos-x) 0px; }\n.stars { background-position: calc(var(--pos-x) * 0.4) 0px; }",
    liveDemoConfig: { type: "canvas", params: {} },
    tutorialHTML: "Gerenciar paralaxe no CSS economiza preciosas linhas de computação de matrizes no JavaScript de game loop. Atualizando apenas um valor '--pos-x' no escopo global, o CSS cuida de mover cada camada de estrelas e montanhas mantendo profundidade real."
  },
  {
    id: "css-adv-particles",
    title: "GPU Particles sem Canvas",
    shortDesc: "Utilizando animações aceleradas de CSS para criar chuvas de fagulhas em combate.",
    difficulty: "advanced",
    estimatedTime: "12 min",
    icon: "flame",
    concept: "Instanciar pequenas partículas e movê-las usando transforms 3D (translate3d) para forçar renderizadores da GPU.",
    codeExample: ".spark {\n  transform: translate3d(var(--tx), var(--ty), 0);\n  animation: fadeOut 0.6s cubic-bezier(0.25, 1, 0.5, 1) forwards;\n}",
    liveDemoConfig: { type: "shake", params: {} },
    tutorialHTML: "Criar fumaça ou explosões leves diretamente com elementos HTML acionados por aceleração nativa de hardware em translate3D remove o peso do loop principal. O processador renderiza as trajetórias na placa lateral de vídeo com frames estáveis."
  },
  {
    id: "css-adv-dmgflash",
    title: "Flashes de Dano de Gradiente Radial",
    shortDesc: "Simulando palpitações de sangue nas extremidades da tela a cada pancada em combate.",
    difficulty: "advanced",
    estimatedTime: "11 min",
    icon: "activity",
    concept: "Keyframes que inflam a opacidade de gradientes radiais vermelhas no limite da tela.",
    codeExample: "@keyframes redPulse {\n  0% { opacity: 0; }\n  50% { opacity: 0.6; }\n  100% { opacity: 0; }\n}",
    liveDemoConfig: { type: "shake", params: {} },
    tutorialHTML: "A cada golpe crítico recebido, aplicar uma classe temporária '.danger-flash' que inflará um gradiente radial com vermelho vibrante simula a aceleração cardíaca de forma nativa e dramática, aumentando a imersão sem lag."
  },
  {
    id: "css-adv-blendmode",
    title: "Mix Blend Mode para Sombras de NPCs",
    shortDesc: "Criando fusão realista de luzes volumétricas e tochas com misturas de blend modes.",
    difficulty: "advanced",
    estimatedTime: "12 min",
    icon: "sun",
    concept: "Definir propriedades de fusão de blend-mode para calcular luzes projetadas sobre relevos do Canvas.",
    codeExample: ".lighting-layer {\n  mix-blend-mode: multiply;\n}",
    liveDemoConfig: { type: "scanlines", params: {} },
    tutorialHTML: "Manipular fusões gráficas no navegador permite interações incríveis de iluminação em tempo real. 'mix-blend-mode: multiply' ou 'overlay' funde pixels pretos de sombras com o cenário colorido do canvas como nos melhores editores."
  },
  {
    id: "css-adv-clippath",
    title: "Clipping Paths para Câmeras Escuras",
    shortDesc: "Sincronização de máscaras geométricas de visão e furos para lanternas virtuais.",
    difficulty: "advanced",
    estimatedTime: "14 min",
    icon: "pointer",
    concept: "Usar o comando clip-path de polígonos para recortar a tela ao redor do player do jogo.",
    codeExample: ".flashlight-view {\n  clip-path: circle(80px at var(--px) var(--py));\n}",
    liveDemoConfig: { type: "lights", params: {} },
    tutorialHTML: "A propriedade clip-path cria uma janela mascarada geométrica nítida no navegador. Isso possibilita desenvolver jogos inteiros de espinagem ou invasão, onde apenas a fatia iluminada ao redor do herói é desenhada e revelada."
  },
  {
    id: "css-adv-glitch",
    title: "Efeitos Cromáticos de Glitch",
    shortDesc: "Construindo deformações analógicas estéticas para jogos de ficção cyberpunk ou terror.",
    difficulty: "advanced",
    estimatedTime: "13 min",
    icon: "tv",
    concept: "Empregar recortes clip repetidos e rápidos com desajustes de sombras vermelhas e ciano.",
    codeExample: "@keyframes crtGlitch {\n  0% { clip: rect(44px, 9999px, 56px, 0); }\n  50% { clip: rect(12px, 9999px, 85px, 0); }\n}",
    liveDemoConfig: { type: "shake", params: {} },
    tutorialHTML: "O visual de ruído de rádio em textos pode ser simulado de forma brilhante com pequenas e velozes animações baseadas na propriedade clip ou clip-path combinadas a text-shadows deslocados, gerando estética clássica sem consumo de RAM."
  },
  {
    id: "css-adv-volumetric",
    title: "Iluminações Volumétricas 3D",
    shortDesc: "Como simular raios de luz translúcidos atravessando poeiras de masmorras retrô.",
    difficulty: "advanced",
    estimatedTime: "11 min",
    icon: "sun",
    concept: "Camadas gradientes rotacionadas em opacidade cíclica simulando feixes de sol volumétricos.",
    codeExample: ".light-beam {\n  background: linear-gradient(to bottom, rgba(255,255,255,0.15), transparent);\n  transform: skewX(-20deg);\n}",
    liveDemoConfig: { type: "lights", params: {} },
    tutorialHTML: "Poeria suspensa e raios solares em masmorras dão uma atmosfera premium inigualável. Criando polígonos skew rotacionados com animações de pulsação suave em opacidades, você evoca feixes perfeitos de poeira iluminada."
  },
  {
    id: "css-adv-willchange",
    title: "Otimização Severa com will-change",
    shortDesc: "Como indicar ao compilador do renderizador que elementos sofrerão transformações contínuas.",
    difficulty: "advanced",
    estimatedTime: "12 min",
    icon: "settings",
    concept: "Preparar o processador do navegador para otimizar renderizadores em transform e opacidade.",
    codeExample: ".active-camera, .particle-box {\n  will-change: transform, opacity;\n}",
    liveDemoConfig: { type: "canvas", params: {} },
    tutorialHTML: "O uso de 'will-change' instrui o agente do browser a inicializar a GPU mais cedo para preparar otimizações internas. No entanto, use com sabedoria e apenas em objetos em movimentação perpétua de forma a evitar vazamentos de memória (memory leaks)."
  }
];

const JS_BEGINNER = [
  {
    id: "js-beg-loop",
    title: "A Game Loop Essencial",
    shortDesc: "Os alicerces de qualquer frame: atualizar a física de redesenhar os pixels constantemente.",
    difficulty: "beginner",
    estimatedTime: "9 min",
    icon: "activity",
    concept: "Utilizar o requestAnimationFrame para estabelecer conexões com a taxa de atualização física da tela do usuário.",
    codeExample: "function gameLoop(timestamp) {\n  atualizarFisica();\n  desenharRender();\n  \n  requestAnimationFrame(gameLoop);\n}\nrequestAnimationFrame(gameLoop);",
    liveDemoConfig: { type: "gameloop", params: { status: "Ativa" } },
    tutorialHTML: "Diferente de sistemas Web orientados a eventos (que só reagem quando o usuário digita ou clica), jogos são sistemas reativos contínuos. Eles precisam executar de 30 a 120 vezes por segundo para realizar checks de gravidade, posição e colisões de forma orgânica."
  },
  {
    id: "js-beg-movement",
    title: "Movimentos de Entidades",
    shortDesc: "Registrando e-mails de teclado e controlando a aceleração das coordenadas X e Y.",
    difficulty: "beginner",
    estimatedTime: "7 min",
    icon: "compass",
    concept: "Criar um dicionário indexando chaves lidas das teclas pressionadas e incrementando valores de deslocamento.",
    codeExample: "const teclas = {};\nwindow.addEventListener('keydown', e => teclas[e.key] = true);\nwindow.addEventListener('keyup', e => teclas[e.key] = false);\n\nfunction update() {\n  if (teclas['ArrowRight']) player.x += player.vel;\n  if (teclas['ArrowLeft']) player.x -= player.vel;\n}",
    liveDemoConfig: { type: "movement", params: {} },
    tutorialHTML: "Para mover um objeto de jogo clássico, você precisará monitorar continuamente a caixa de comandos digitados (geralmente WASD ou as setas direcionais), alterando os vetores de velocidade que determinam onde o ator principal deve desenhar a seguir."
  },
  {
    id: "js-beg-globals",
    title: "Variáveis Globais de Estado",
    shortDesc: "Gerenciando a pontuação, número de vidas e o nível ativo e estável do game.",
    difficulty: "beginner",
    estimatedTime: "6 min",
    icon: "database",
    concept: "Uso correto de escopos de estado globais e encapsulamentos de variáveis comuns de controle.",
    codeExample: "const gameState = {\n  score: 0,\n  lives: 3,\n  currentLevel: 1\n};",
    liveDemoConfig: { type: "gameloop", params: {} },
    tutorialHTML: "Preservar variáveis vitais em objetos consolidados de progresso poupa o projeto de redundâncias e bugs de mutabilidades. Quando o inimigo cai ou as vidas se esgotam, alterar os metadados deste objeto automatiza as reações necessárias de UIs."
  },
  {
    id: "js-beg-vectors",
    title: "Vetores de Velocidade X e Y",
    shortDesc: "Introdução à física vetorial simples de deslocamento contínuo matricial.",
    difficulty: "beginner",
    estimatedTime: "5 min",
    icon: "activity",
    concept: "Somar vetores de velocidade vx e vy para calcular a proxima projeção espacial de coordenadas.",
    codeExample: "let px = 100, py = 100;\nlet vx = 3, vy = 2;\n\nfunction tick() { px += vx; py += vy; }",
    liveDemoConfig: { type: "movement", params: {} },
    tutorialHTML: "Em vez de alterar as coordenadas do jogador diretamente nos comandos de teclado, a boa prática dita que os direcionais incrementam uma velocidade 'vx' ou 'vy'. O atualizador resolve o deslocamento somando as velocidades à posição a cada frame, gerando dinâmicas macias."
  },
  {
    id: "js-beg-rng",
    title: "Gerador Dinâmico de Drops (RNG)",
    shortDesc: "Mecânicas probabilísticas para calcular itens colhidos de caixas e recompensas.",
    difficulty: "beginner",
    estimatedTime: "6 min",
    icon: "settings",
    concept: "Calculos baseados em retornos fracionados de Math.random para sortear drop rates exatos.",
    codeExample: "const chance = Math.random();\nif (chance < 0.05) { spawnRareItem(); } // 5% de chance",
    liveDemoConfig: { type: "gameloop", params: {} },
    tutorialHTML: "A incerteza e a recompensa estimulam a mente dos jogadores. Utilizar Math.random permite calcular drops de poções raras, armas de elite ou moedas de ouro, mapeando limites de intervalos numéricos de drop rates estruturados."
  },
  {
    id: "js-beg-reset",
    title: "Mecânica de Reinicialização de Jogo",
    shortDesc: "Como reajustar as coordenadas e zerar o placar no óbito do ator.",
    difficulty: "beginner",
    estimatedTime: "5 min",
    icon: "rotate-cw",
    concept: "Invocação de funções de reset que limpam timers, reposicionam heróis e zeram pontuações.",
    codeExample: "function resetGame() {\n  player.hp = 100;\n  player.x = 100;\n  gameState.score = 0;\n}",
    liveDemoConfig: { type: "healthbar", params: {} },
    tutorialHTML: "Ao bater contras barreiras ou tomar dano completo de slimes, forçar um ciclo reconstrutor limpa as coordenadas internas, reposiciona o herói, e re-escreve a UI de forma que a nova jornada física inicialize sem travar a engine."
  },
  {
    id: "js-beg-scores",
    title: "Pontuação e Progressão Linear",
    shortDesc: "Incrementando placar do jogador proporcionalmente às fases resolvidas.",
    difficulty: "beginner",
    estimatedTime: "5 min",
    icon: "database",
    concept: "Somar taxas matemáticas e atualizar displays de forma dinâmica a cada avanço no game loop.",
    codeExample: "gameState.score += 100;\ndocument.getElementById('score-val').textContent = gameState.score;",
    liveDemoConfig: { type: "gameloop", params: {} },
    tutorialHTML: "Evoluções de score dão senso de progresso. Você pode programar pontuações progressivas que aumentam enquanto o jogador desvia de projéteis ou derrota monstros secundários, refletindo instantaneamente as variáveis na UI HTML em tempo real."
  },
  {
    id: "js-beg-sync",
    title: "Exportação de Variáveis em HUD",
    shortDesc: "Conectar variáveis de memória do JavaScript a etiquetas visuais no DOM.",
    difficulty: "beginner",
    estimatedTime: "6 min",
    icon: "compass",
    concept: "Sincronização reativa de valores de HP ou XP com barras de preenchimento CSS.",
    codeExample: "function updateHUD() {\n  lifeFill.style.width = `\${hero.hp}%`;\n}",
    liveDemoConfig: { type: "healthbar", params: {} },
    tutorialHTML: "Embora o Canvas rode a velocidades incríveis de frames, os textos clássicos e barras de vida de HUD rodam fora do render principal. Disparar atualizações focais no DOM apenas quando as variáveis modificarem economiza tráfego no navegador."
  },
  {
    id: "js-beg-spawner",
    title: "Spawners de Inimigos Fora de Tela",
    shortDesc: "A lógica matemática para gerar adversários em posições secretas distantes.",
    difficulty: "beginner",
    estimatedTime: "6 min",
    icon: "sun",
    concept: "Sortear posições cardinais X e Y além das dimensões limites visíveis do Canvas do monitor.",
    codeExample: "const spawnX = Math.random() > 0.5 ? -40 : canvas.width + 40;\nconst spawnY = Math.random() * canvas.height;",
    liveDemoConfig: { type: "gameloop", params: {} },
    tutorialHTML: "Surgir monstros repentinamente na cara do guerreiro quebra a ilusão de universo aberto. Gerá-los fora dos limites de pixels sorteando posições extras força o inimigo a andar para dentro, simolando hordas orgânicas que surgem das sombras."
  },
  {
    id: "js-beg-bounds",
    title: "Bloqueio e Restrição de Limites",
    shortDesc: "Como travar as coordenadas do sprite para que não saia voando do Canvas.",
    difficulty: "beginner",
    estimatedTime: "5 min",
    icon: "shield",
    concept: "Aproveitar funções Math.max e Math.min para impedir que posições X e Y fiquem negativas.",
    codeExample: "player.x = Math.max(0, Math.min(player.x, canvas.width - player.w));",
    liveDemoConfig: { type: "movement", params: {} },
    tutorialHTML: "Andar eternamente para as laterais pode fazer o jogador sumir do monitor. Travá-lo com limites estritos na engine garante que, sempre que ele pressionar WASD além dos limites, o atualizador o fixe na extremidade e mantenhas o foco visual."
  }
];

const JS_INTERMEDIATE = [
  {
    id: "js-int-aabb",
    title: "Colisões Reais Retangulares (AABB)",
    shortDesc: "Faça seus projéteis e paredes colidirem de verdade usando matemática prática simples.",
    difficulty: "intermediate",
    estimatedTime: "12 min",
    icon: "shield",
    concept: "Axis-Aligned Bounding Box (AABB): uma checagem simples de faixas espaciais de overlapping entre dois corpos.",
    codeExample: "function checaColisao(rect1, rect2) {\n  return rect1.x < rect2.x + rect2.w &&\n         rect1.x + rect1.w > rect2.x &&\n         rect1.y < rect2.y + rect2.h &&\n         rect1.y + rect1.h > rect2.y;\n}",
    liveDemoConfig: { type: "canvas", params: { showAABBDemo: true } },
    tutorialHTML: "O colisor de retângulos (AABB) é o algoritmo mais performático para iniciar jogos de plataforma ou tiro. Ele decide instantaneamente se as extremidades do herói encostaram nos limites de algum obstáculo ou se uma bala atingiu o monstro!"
  },
  {
    id: "js-int-lerp",
    title: "Interpolação Linear (LERP)",
    shortDesc: "Crie uma movimentação de câmera suave usando Interpolação Linear.",
    difficulty: "intermediate",
    estimatedTime: "10 min",
    icon: "rotate-cw",
    concept: "Calculos de amortecimento numérico para deslizar cameras e atores de forma amortecida.",
    codeExample: "cameraX += (playerX - cameraX) * 0.1;",
    liveDemoConfig: { type: "movement", params: {} },
    tutorialHTML: "Mover a câmera do jogo sincronizada estritamente com as coordenadas do herói gera sacudidas que cansam os olhos. O LERP calcula a distância entre os pontos e caminha apenas uma fração percentual (0.1 ou 10%) por frame, gerando flutuações de câmera suaves estilo consolas."
  },
  {
    id: "js-int-gravity",
    title: "Gravidade e Pulos de Plataforma",
    shortDesc: "Cálculos de vetores de queda livre acelerada e frenagem elástica.",
    difficulty: "intermediate",
    estimatedTime: "11 min",
    icon: "activity",
    concept: "Somar vetores de gravidade adicionais ao vy a cada frame enquanto o corpo estiver suspenso.",
    codeExample: "player.vy += gravidade; // aumenta velocidade de queda\nplayer.y += player.vy;",
    liveDemoConfig: { type: "canvas", params: { platformPhysics: true } },
    tutorialHTML: "Pular em um jogo de plataforma não é apenas deslocar o Y para cima e depois para baixo. Aplicar uma taxa constante de gravidade acumulada que desacelera a subida e acelera a queda gera movimentos de pulo parabólicos imensamente naturais."
  },
  {
    id: "js-int-pool",
    title: "Object Pooling de Disparos",
    shortDesc: "Reutilização de projéteis prontos na memória para evitar picos de Garbage Collector.",
    difficulty: "intermediate",
    estimatedTime: "11 min",
    icon: "database",
    concept: "Criar uma piscina de instâncias de tiros que são reativadas do topo, evitando sobrecarga com 'new' contínuos.",
    codeExample: "const bulletPool = [];\nfunction getBullet() {\n  return bulletPool.find(b => !b.active) || createNewBullet();\n}",
    liveDemoConfig: { type: "canvas", params: {} },
    tutorialHTML: "Em jogos arcade de tiros frenéticos, disparar 'new Bullet()' dezenas de vezes por segundo força o motor Garbage Collector do navegador a suspender repentinamente o jogo inteiro para limpar a memória. Manter instâncias dormentes elimina o lag."
  },
  {
    id: "js-int-fsm",
    title: "FSM para Lógica de Inimigos",
    shortDesc: "Máquinas de Estados Finitos organizando escolhas e reatividades de heróis e NPCs.",
    difficulty: "intermediate",
    estimatedTime: "10 min",
    icon: "compass",
    concept: "Dividir o comportamento do NPC em estados exclusivos controlados por condições inteligentes.",
    codeExample: "const STATES = { IDLE: 'idle', RUN: 'run', ATK: 'atk' };\nlet enemyState = STATES.IDLE;",
    liveDemoConfig: { type: "movement", params: {} },
    tutorialHTML: "Para evitar maciços if/else encadeados ao tentar codificar a IA de slimes e feiticeiros, a Máquina de Estados (FSM) define trajetórias claras. O inimigo muda seu estado de 'IDLE' para 'PERSEGUIR' apenas quando a distância do herói diminuir."
  },
  {
    id: "js-int-projectiles",
    title: "Balística de Projéteis 2D",
    shortDesc: "Trajetórias lineares e curvas calculando direções vetoriais geométricas.",
    difficulty: "intermediate",
    estimatedTime: "9 min",
    icon: "activity",
    concept: "Surgir balas no local do player incrementando movimentos baseados em eixos direcionais.",
    codeExample: "bullet.x += bullet.vx;\nbullet.y += bullet.vy;",
    liveDemoConfig: { type: "canvas", params: {} },
    tutorialHTML: "Para que projéteis viagem em direção a mouse ou rumo ao leste, você precisará configurar coeficientes invariáveis vx e vy no instante do disparo, deixando a gameLoop apenas calcular o avanço retangular a cada frame do tick."
  },
  {
    id: "js-int-cooldown",
    title: "Sistema de Cooldown de Habilidades",
    shortDesc: "Temporizadores e bloqueadores para evitar o estresse de cliques frenéticos do play.",
    difficulty: "intermediate",
    estimatedTime: "10 min",
    icon: "settings",
    concept: "Registrar timestamps lidos de Date.now() ou do loop para travar novos ataques antes do fim do tempo.",
    codeExample: "if (now - lastAtkTime < cooldownTime) return; // bloqueia disparo",
    liveDemoConfig: { type: "canvas", params: { useDataAttr: true } },
    tutorialHTML: "Disparar magias de gelo infinitamente torna o progresso de desafios fácil e entediante. O sistema de cooldown calcula a diferença temporal de milissegundos desde o último disparo ativo para liberar o novo trigger na HUD."
  },
  {
    id: "js-int-localstorage",
    title: "Persistência de Saves do RPG",
    shortDesc: "Como salvar moedas, armas e experiências de forma local no navegador usando LocalStorage.",
    difficulty: "intermediate",
    estimatedTime: "10 min",
    icon: "database",
    concept: "Salvar objetos complexos decodificados em formato JSON string e resgatá-los no boot do jogo.",
    codeExample: "localStorage.setItem('save_data', JSON.stringify(heroState));\nconst data = JSON.parse(localStorage.getItem('save_data'));",
    liveDemoConfig: { type: "healthbar", params: {} },
    tutorialHTML: "Manter as runas e o progresso de níveis salvos recompensa quem joga. O LocalStorage provê armazenamento persistente local inestimável. Você recupera as dados do disco na inicialização do jogo para que o jogador retome onde parou."
  },
  {
    id: "js-int-soundspatial",
    title: "Áudio Espacial Tridimensional",
    shortDesc: "Modulando volumes de sons dinamicamente baseados na distância espacial do emissor.",
    difficulty: "intermediate",
    estimatedTime: "11 min",
    icon: "music",
    concept: "Calcular desvios de volume dependentes de distâncias euclidianas geométricas do herói.",
    codeExample: "const dist = Math.hypot(enemy.x - player.x, enemy.y - player.y);\nsfx.volume = Math.max(0, 1 - (dist / 400));",
    liveDemoConfig: { type: "canvas", params: { audioTrigger: true } },
    tutorialHTML: "Surgir ruídos em volume total mesmo se a explosão ocorrer no canto oposto do mapa destrói a percepção espacial. Calcular distâncias e ajustar o volume linearmente contextualiza a ação, gerando profundidade auditiva."
  },
  {
    id: "js-int-delta",
    title: "Sincronização por Delta Time",
    shortDesc: "Fazendo a física rodar idêntica em monitores de 60Hz e de alta frequência (144Hz).",
    difficulty: "intermediate",
    estimatedTime: "10 min",
    icon: "activity",
    concept: "Multiplicar incrementos de eixos pelo intervalo dinâmico de milissegundos decorridos do frame.",
    codeExample: "const dt = (now - lastTime) / 1000;\nplayer.x += player.vx * dt;",
    liveDemoConfig: { type: "gameloop", params: {} },
    tutorialHTML: "Ignorar o delta-time faz o jogo rodar o dobro de rápido em telas de 144Hz se comparado a telas velhas de 60Hz. Multiplicar cada aceleração pela fração temporal decorrida garante que o herói caminhe na mesma velocidade em qualquer máquina."
  }
];

const JS_ADVANCED = [
  {
    id: "js-adv-physics",
    title: "Física de Plataforma Avançada",
    shortDesc: "A matemática por trás de saltos, gravidade realista, aceleração elástica e frenagem.",
    difficulty: "advanced",
    estimatedTime: "18 min",
    icon: "boxes",
    concept: "Cálculo vetorial básico aplicando vetores de resistência, atrito de solo, ar e empuxo de salto vertical.",
    codeExample: "player.vy += player.gravidade; // aplica gravidade\nplayer.x += player.vx;\nplayer.y += player.vy;\nplayer.vx *= player.atrito; // reduz velocidade lateral",
    liveDemoConfig: { type: "canvas", params: { platformPhysics: true } },
    tutorialHTML: "Para fazer um jogo de plataforma clássico parecer natural, aplicar pulos elásticos requer aplicar gravidade acumulada e fricções de vento. Com pequenos coeficientes de amortecimento físico, você ganha movimentos incrivelmente orgânicos!"
  },
  {
    id: "js-adv-pathfinding",
    title: "Busca de Caminhos Pathfinding A*",
    shortDesc: "Como fazer NPCs contornarem obstáculos da arena de forma inteligente.",
    difficulty: "advanced",
    estimatedTime: "17 min",
    icon: "compass",
    concept: "Uso do algoritmo de menor esforço calculando coordenadas ponderadas em grids virtuais.",
    codeExample: "// Grids heurísticos calculando caminhos ideais livres de limites\nconst path = findAStarPath(mapGrid, enemyPos, playerPos);",
    liveDemoConfig: { type: "movement", params: {} },
    tutorialHTML: "Andar reto até o herói faz inimigos ficarem eternamente presos na primeira caixa do labirinto. Mapear a arena in grids matriciais e computar o menor caminho heurístico contornando cantos faz os monstros agirem com tremendo realismo."
  },
  {
    id: "js-adv-quadtree",
    title: "Divisões Espaciais por Quadtree",
    shortDesc: "Otimização revolucionária para checar colisões de milhares de entidades simultâneas.",
    difficulty: "advanced",
    estimatedTime: "16 min",
    icon: "layout",
    concept: "Fracionar o Canvas geométrico recursivamente em quadrantes, reduzindo custo de O(N²) para O(N log N).",
    codeExample: "const quad = new Quadtree(bounds, maxObjects);\nquad.insert(entity);",
    liveDemoConfig: { type: "canvas", params: { showAABBDemo: true } },
    tutorialHTML: "Checar colisões de 1000 formigas simultâneas usando dois loops 'for' comuns exige 1.000.000 de testes por frame, fazendo cansar qualquer navegador. O Quadtree isola entidades em nichos de quadrantes próximos, processando apenas corpos vizinhos."
  },
  {
    id: "js-adv-perlin",
    title: "Geração Procedural por Perlin Noise",
    shortDesc: "Como desenhar cavernas, montes e mapas orgânicos infinitos de forma matemática.",
    difficulty: "advanced",
    estimatedTime: "15 min",
    icon: "activity",
    concept: "Computar gradientes ondulados harmônicos sequenciais e aplicá-los em tilesets de blocos.",
    codeExample: "const height = Math.sin(x * 0.1) * Math.cos(z * 0.1) * maxElevation;",
    liveDemoConfig: { type: "canvas", params: {} },
    tutorialHTML: "Gerações procedurais criam infinitos caminhos de exploração. A interpolação de ruídos contínuos evita a aleatoriedade abrupta, desenhando colinas, cavernas e minérios de forma interconectada, igual ao motor do Minecraft clássico."
  },
  {
    id: "js-adv-circlecol",
    title: "Colisões Circulares Trigonométricas",
    shortDesc: "Calculando pontos tangentes e colisões físicas perfeitas de circunferências.",
    difficulty: "advanced",
    estimatedTime: "14 min",
    icon: "shield",
    concept: "Interpretar as distâncias de raios somadas comparadas à hipotenusa das coordenadas centrais dos corpos.",
    codeExample: "const distance = Math.hypot(dx, dy);\nconst collided = distance < (circle1.r + circle2.r);",
    liveDemoConfig: { type: "canvas", params: { showAABBDemo: true } },
    tutorialHTML: "Colisores retangulares AABB falham grotescamente em arenas de naves espaciais ou bolas de sinuca. A trigonometria básica resolve as colisões circulares medindo as distâncias de pontos centrais, devolvendo impactos idênticos não importando o grau angular."
  },
  {
    id: "js-adv-steering",
    title: "IA de Alinhamento e Evitação",
    shortDesc: "Mecânicas físicas de comportamento que simulam rebanhos ou frotas estelares fluidas.",
    difficulty: "advanced",
    estimatedTime: "15 min",
    icon: "compass",
    concept: "Mecanismo de forças de aceleração contínuas que se adaptam inteligentemente a vetores ambientais.",
    codeExample: "const steeringForce = desiredVelocity.subtract(currentVelocity);",
    liveDemoConfig: { type: "movement", params: {} },
    tutorialHTML: "Para além de perseguição linear, a IA Steering calcula acelerações graduais para NPCs contornarem obstáculos, desviarem suavemente de aliados e se alinharem como bandos de peixes, criando dinâmicas de exércitos orgânicas primorosas."
  },
  {
    id: "js-adv-slomo",
    title: "Mecânica Slow-Mo de Tempo",
    shortDesc: "Como desacelerar a física de loops mantendo animações visuais fluidas adicionais.",
    difficulty: "advanced",
    estimatedTime: "15 min",
    icon: "activity",
    concept: "Adaptar taxas de delta time com um fator multiplicativo geral de velocidade controlada.",
    codeExample: "let timeScale = 0.2; // 20% da velocidade comum\nconst dt = ((now - lastTime) / 1000) * timeScale;",
    liveDemoConfig: { type: "gameloop", params: {} },
    tutorialHTML: "Desenvolver efeitos de suspensão temporal no game loop (slo-mo ao realizar golpes épicos) exige multiplicar a fração incremental do atualizador geral por um ponderador de escala. As colisões e movimentos correm na velocidade amortecida, mas na taxa de FPS total."
  },
  {
    id: "js-adv-inventory",
    title: "Inventário com Listas Encadeadas",
    shortDesc: "Uso de ponteiros estruturados na gerência complexa de slots da mochila do herói.",
    difficulty: "advanced",
    estimatedTime: "14 min",
    icon: "database",
    concept: "Criar referências em matrizes de slots indexadas com ponteiros diretos de dados de itens.",
    codeExample: "class InventoryNode {\n  constructor(item) { this.item = item; this.next = null; }\n}",
    liveDemoConfig: { type: "healthbar", params: {} },
    tutorialHTML: "Gerenciar ordenações, exclusões e fusões constantes de dezenas de itens no array tradicional exige recriações na memória de forma cara. Empregar ponteiros de nós encadeados soluciona inventários de RPG de forma extremamente escalável."
  },
  {
    id: "js-adv-rotations",
    title: "Ângulos por Math.atan2 do Mouse",
    shortDesc: "Girar armas ou faces de personagens apontando diretamente ao ponteiro do cursor.",
    difficulty: "advanced",
    estimatedTime: "13 min",
    icon: "mouse-pointer",
    concept: "Cálculo do arco tangente de duas faces para mapear rotações em graus radiais.",
    codeExample: "const angle = Math.atan2(mouseY - playerY, mouseX - playerX);\nctx.rotate(angle);",
    liveDemoConfig: { type: "css-cursor", params: {} },
    tutorialHTML: "Para disparar flechas de runas diretamente rumo ao cursor do mouse, a função Math.atan2 interpreta as variações de distâncias nos eixos gerando o ângulo exato em radianos. A engine rotaciona a matriz de render antes da pintura do sprite."
  },
  {
    id: "js-adv-webrtcsync",
    title: "Sincronização Multiplayer por Quadros",
    shortDesc: "Ajuste de inputs em buffers locais e reconciliações de dados em rede instantâneos.",
    difficulty: "advanced",
    estimatedTime: "17 min",
    icon: "activity",
    concept: "Estruturas de buffer rotativas que guardam posições locais reconciliando pacotes de rede com atrasos.",
    codeExample: "const inputBuffer = [];\nfunction reconcile(serverState) { ... }",
    liveDemoConfig: { type: "canvas", params: {} },
    tutorialHTML: "Sincronizar multiplayer in rede P2P de forma que corredores não pulam de lugar com bugs de lag requer interpolar pacotes antigos armazenados em buffers locais, prevendo vetores futuros e reconciliando posições de rede de forma invisível."
  }
];

const CHALLENGE_DATA = [
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
    testRunner: `(code) => {
      const clean = code.toLowerCase().replace(/\\s+/g, ' ');
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
    }`,
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
    testRunner: `(code) => {
      const clean = code.toLowerCase();
      if (!clean.includes('id="som-fundo"')) return { success: false, message: 'Falta o ID correto: id="som-fundo"' };
      if (!clean.includes('loop')) return { success: false, message: 'Falta o atributo de repetição contínua: loop' };
      if (!clean.includes('preload')) return { success: false, message: 'Falta o atributo para pré-carregamento: preload' };
      return { success: true, message: 'Incrível! Sua música de fundo vai iniciar instantaneamente sem engasgos!' };
    }`,
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
    testRunner: `(code) => {
      const clean = code.toLowerCase().trim().replace(/[();'"]/g, '');
      if (clean.includes('transfercontroltooffscreen')) {
        return { success: true, message: 'Corretíssimo! transferControlToOffscreen() é a chave do alto desempenho!' };
      }
      return { success: false, message: 'Incorreto. Tente consultar a aba de teoria avançada do Canvas!' };
    }`,
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
    testRunner: `(code) => {
      const clean = code.toLowerCase().replace(/\\s+/g, '');
      if (!clean.includes('cursor:')) return { success: false, message: 'Adicione a propriedade cursor!' };
      if (!clean.includes('url(')) return { success: false, message: 'Use url(...) para apontar para a imagem mira.png' };
      if (!clean.includes('mira.png')) return { success: false, message: 'Mapeie o link correto para \"mira.png\"' };
      if (!clean.includes('auto')) return { success: false, message: 'Não se esqueça do fallback padrão \"auto\" no final!' };
      return { success: true, message: 'Genial! Agora a mira pixel-art de mira de tiro está sincronizada.' };
    }`,
    hint: 'Faz: cursor: url("mira.png"), auto;'
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
    testRunner: `(code) => {
      const clean = code.toLowerCase().replace(/\\s+/g, '');
      if (clean.includes('steps(8)')) {
        return { success: true, message: 'Excelente! steps(8) fatiará perfeitamente a spritesheet de 8 animações!' };
      }
      return { success: false, message: 'Não encontramos o fatiamento steps(8) exigido.' };
    }`,
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
    testRunner: `(code) => {
      const clean = code.toLowerCase().replace(/\\s+/g, '');
      if (clean.includes('mix-blend-mode:')) {
        return { success: true, message: 'Fabuloso! mix-blend-mode permite misturar scanlines de CRT como se fossem luzes físicas de pixels de TVs velhas.' };
      }
      return { success: false, message: 'Use a propriedade mix-blend-mode para mesclar cores!' };
    }`,
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
    testRunner: `(code) => {
      const clean = code.toLowerCase().replace(/\\s+/g, '');
      if (!clean.includes('requestanimationframe')) {
        return { success: false, message: 'Você precisa registrar a função de animação nativa.' };
      }
      if (!clean.includes('gameloop')) {
        return { success: false, message: 'Você precisa repassar o callback gameLoop para que continue rodando indefinidamente!' };
      }
      return { success: true, message: 'Fantástico! requestAnimationFrame se auto-calibra de acordo com a taxa física do monitor do jogador automáticamente.' };
    }`,
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
    testRunner: `(code) => {
      const clean = code.toLowerCase().replace(/\\s+/g, '');
      if (clean === 'player.x+player.w' || clean === 'x+w' || clean === 'player.x+w' || (clean.includes('x') && clean.includes('+') && clean.includes('w'))) {
        return { success: true, message: 'Estatística incrível! Somar a posição X com a largura total aponta a exata extremidade leste do corpo.' };
      }
      return { success: false, message: 'Certifique-se de somar a coordenada horizontal (x) com a respectiva largura (w)!' };
    }`,
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
    testRunner: `(code) => {
      const clean = code.toLowerCase().replace(/\\s+/g, '');
      if (clean.includes('playerx-camerax') && clean.includes('0.1')) {
        return { success: true, message: 'Sua câmera agora desliza de forma macia e elegante sobre o jogador principal! Excelente matemática de lerp.' };
      }
      return { success: false, message: 'Dica: A fórmula do LERP atualizado é cameraX += (playerX - cameraX) * 0.1' };
    }`,
    hint: 'cameraX + (playerX - cameraX) * 0.1'
  }
];

const totalHTML = [...HTML_BEGINNER, ...HTML_INTERMEDIATE, ...HTML_ADVANCED];
const totalCSS = [...CSS_BEGINNER, ...CSS_INTERMEDIATE, ...CSS_ADVANCED];
const totalJS = [...JS_BEGINNER, ...JS_INTERMEDIATE, ...JS_ADVANCED];

// Generate exact structure to write in conteudos.js
let fileContent = `/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export const ENCYCLOPEDIA_DATA = {
  html: ` + JSON.stringify(totalHTML, null, 2) + `,
  css: ` + JSON.stringify(totalCSS, null, 2) + `,
  js: ` + JSON.stringify(totalJS, null, 2) + `
};

export const CHALLENGE_DATA = [\n`;

const serializedChallenges = CHALLENGE_DATA.map(ch => {
  return `  {
    id: '${ch.id}',
    title: '${ch.title}',
    shortDesc: '${ch.shortDesc}',
    difficulty: '${ch.difficulty}',
    category: '${ch.category}',
    xpValue: ${ch.xpValue},
    instructions: '${ch.instructions}',
    initialCode: ${JSON.stringify(ch.initialCode)},
    expectedKeywords: ${JSON.stringify(ch.expectedKeywords)},
    testRunner: ${ch.testRunner},
    hint: '${ch.hint}'
  }`;
}).join(',\n');

fileContent += serializedChallenges + `\n];\n`;

fs.writeFileSync('./conteudos.js', fileContent);
console.log('Successfully generated ./conteudos.js with 90 topics!');
