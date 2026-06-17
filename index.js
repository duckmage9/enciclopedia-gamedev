/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

// --- DATASET: GameDEV Encyclopedia & Challenges ---
const ENCYCLOPEDIA_DATA = window.ENCYCLOPEDIA_DATA;
const CHALLENGE_DATA = window.CHALLENGE_DATA;

// Precise, premium, game-centric examples replacement list for CSS and JS
const CORRECT_CSS_EXAMPLES = {
  "css-01": `.player-sprite.active {\n  transform: scale(1.15);\n}\n\n.area-jogo > .inimigo-comum {\n  border: 1px solid #ef4444;\n}`,
  "css-02": `.card-inventario {\n  width: 80px;\n  height: 80px;\n  padding: 8px;\n  border: 3px solid #ffd700;\n  margin: 12px;\n  box-sizing: border-box; /* Garante que borda e padding fiquem dentro do tamanho total! */\n}`,
  "css-03": `.bioma-floresta {\n  background-color: #064e3b;\n  background-image: linear-gradient(135deg, #022c22 0%, #064e3b 100%);\n  background-repeat: no-repeat;\n  background-size: cover;\n}`,
  "css-04": `.texto-dialogo-npc {\n  font-family: 'Inter', system-ui, sans-serif;\n  font-size: 14px;\n  font-weight: 500;\n  line-height: 1.6;\n  letter-spacing: 0.02em;\n  color: #f1f5f9;\n}`,
  "css-05": `.hud-joystick-touch {\n  width: 5rem;\n  height: 5rem;\n  padding: 8px;\n  bottom: 2dvh;\n  left: 2dvw;\n}`,
  "css-06": `.painel-stats {\n  display: flex; /* Cria um container flexível */\n}\n\n.item-escondido {\n  display: none; /* Some totalmente, liberando espaço no layout */\n}\n\n.bloco-largura-cheia {\n  display: block; /* Ocupa toda a largura disponível */\n}`,
  "css-07": `.slot-equipamento {\n  border-width: 4px;\n  border-style: solid;\n  border-color: #818cf8;\n  border-radius: 12px;\n}`,
  "css-08": `.efeito-aura-poder {\n  box-shadow: 0 0 15px 4px rgba(99, 102, 241, 0.75);\n  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.95);\n}`,
  "css-09": `.opcao-menu:hover {\n  color: #fbbf24;\n  cursor: pointer;\n}\n\n.opcao-menu:active {\n  transform: scale(0.97);\n}`,
  "css-10": `:root {\n  --cor-vida: #ef4444;\n  --cor-mana: #3b82f6;\n  --hud-padding: 12px;\n}\n\n.barra-energia {\n  background-color: var(--cor-mana);\n  padding: var(--hud-padding);\n}`,
  "css-11": `.caixa-aviso-popup {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  z-index: 999; /* Garante que ficará sobreposto a todo o cenário */\n}`,
  "css-12": `.fila-botoes-hud {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n}`,
  "css-13": `.grade-itens-loja {\n  display: flex;\n  flex-wrap: wrap;\n  align-content: flex-start;\n  gap: 10px;\n}`,
  "css-14": `.arena-grade {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  grid-template-rows: auto;\n  gap: 8px;\n}`,
  "css-15": `.barra-carregamento-hud::before {\n  content: 'Carregando...';\n  display: block;\n  color: #ffd700;\n  font-size: 8px;\n  text-align: center;\n}`,
  "css-16": `.pontos-vida-indicador {\n  width: 100%;\n  transition-property: width, background-color;\n  transition-duration: 0.4s;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n}`,
  "css-17": `.boss-girando-portal {\n  transform: rotate(45deg) scale(1.2) translate(10px, -50px);\n}`,
  "css-18": `@media (max-width: 768px) {\n  .joystick-direcional-virtual {\n    display: grid; /* Somente aparece em telas menores (tablets/smartphones) */\n  }\n  .painel-lateral {\n    display: none;\n  }\n}`,
  "css-19": `.missao-container:nth-child(even) {\n  background-color: rgba(255, 255, 255, 0.03);\n}\n\n.botoes-habilidade:not(.desbloqueado) {\n  filter: grayscale(1) opacity(0.5);\n}`,
  "css-20": `.portal-dimensao {\n  filter: blur(1.5px) hue-rotate(180deg);\n  mix-blend-mode: color-dodge; /* Fusão perfeita com o fundo do jogo! */\n}`,
  "css-21": `@keyframes flutuar {\n  0%, 100% { transform: translateY(0); }\n  50% { transform: translateY(-8px); }\n}\n\n.icone-moeda {\n  animation: flutuar 1.5s ease-in-out infinite;\n}`,
  "css-22": `.cubo-3d-inventario {\n  transform-style: preserve-3d;\n  transform: perspective(600px) rotateX(15deg) rotateY(-20deg);\n}`,
  "css-23": `.grade-layout-completo {\n  display: grid;\n  grid-template-areas:\n    "header header"\n    "sidebar main"\n    "footer footer";\n}\n\n.hud-centro {\n  grid-area: main;\n}`,
  "css-24": `.minimapa-viewport {\n  width: calc(100% - 24px);\n  max-height: min(200px, 30vh);\n}`,
  "css-25": `.mira-circular {\n  clip-path: circle(50% at 50% 50%);\n  background-color: #10b981;\n}`,
  "css-26": `.painel-rolagem-quests {\n  scroll-snap-type: y mandatory;\n  overflow-y: scroll;\n  scroll-behavior: smooth;\n}\n\n.painel-rolagem-quests::-webkit-scrollbar {\n  width: 6px;\n  background: #020205;\n}`,
  "css-27": `@container inventario (max-width: 320px) {\n  .texto-detalhe-item {\n    font-size: 8px; /* Reduz texto se o container de inventário for pequeno */\n  }\n}`,
  "css-28": `/* Metodologia BEM (Block, Element, Modifier) */\n.cartao-boss {\n  background: #111;\n}\n.cartao-boss__titulo {\n  font-size: 16px;\n}\n.cartao-boss--fase-2 {\n  box-shadow: 0 0 30px #ef4444;\n}`,
  "css-29": `.painel-dialogo-glass {\n  background: rgba(15, 23, 42, 0.45);\n  backdrop-filter: blur(8px);\n  border: 1px solid rgba(255, 255, 255, 0.08);\n  border-radius: 16px;\n}`,
  "css-30": `.sprite-iluminado {\n  filter: drop-shadow(0 0 var(--brilho-fogo, 10px) var(--cor-magica, #e0f2fe));\n}`
};

const CORRECT_JS_EXAMPLES = {
  "js-01": `// Alocando espaços de memória do jogo\nconst MULTIPLICADOR_XP = 1.5;\nlet pontosDeVida = 100;\nlet nomeJogador = "Arthur";\n\npontosDeVida -= 20; // Modificando o valor de 'let'\nconsole.log(nomeJogador + " tem " + pontosDeVida + " HP.");`,
  "js-02": `// Diferentes tipos de dados do motor de jogo\nconst apelido = "FireMage"; // String\nconst danoBase = 45;       // Number (números inteiros ou decimais)\nconst vivo = true;         // Boolean (verdadeiro/falso)\nconst coordenadas = null;  // Null (vazio proposital)\nlet statusAlterado;        // Undefined (não inicializado)`,
  "js-03": `// Cálculos e comparações no combate\nlet manaTotal = 150;\nlet custoMagia = 40;\nlet temManaSuficiente = manaTotal >= custoMagia;\nlet bonusDano = (10 + 5) * 2; // Expressão matemática priorizando soma`,
  "js-04": `// Tomando caminhos de acordo com as ações\nlet heroiVida = 75;\n\nif (heroiVida <= 0) {\n  console.log("Derrotado! Retornando ao Spawn...");\n} else if (heroiVida < 30) {\n  console.log("Alerta! Ativar efeito visual de batimento cardíaco lento.");\n} else {\n  console.log("Pronto para combates continuados.");\n}`,
  "js-05": `// Executando ações iterativas (como preencher inventários)\nfor (let i = 0; i < 5; i++) {\n  console.log("Criando inimigo " + i);\n}\n\nlet vidaBoss = 100;\nwhile (vidaBoss > 0) {\n  vidaBoss -= 25; // Loop decrescente controlado\n}`,
  "js-06": `// Isolando e reaproveitando blocos funcionais\nfunction calcularDanoFinal(ataque, defesa) {\n  const resultado = ataque - (defesa * 0.5);\n  return Math.max(1, resultado); /* Retorna sempre no mínimo 1 de dano */\n}\n\nconst danoAplicado = calcularDanoFinal(80, 20);\nconsole.log(danoAplicado);`,
  "js-07": `// Gerenciando múltiplos itens em sequência\nlet itensDoBaú = ["Espada Rara", "Poção de Vida", "Elmo de Bronze"];\n\nitensDoBaú.push("Escudo de Titânio"); // Insere no final\nitensDoBaú.unshift("Anel Mágico");    // Insere no início\nitensDoBaú.splice(2, 1);             // Remove o item no índice 2`,
  "js-08": `// Representando entidades em um único objeto de dados\nconst bossDragao = {\n  nome: "Ignis o Vermelho",\n  hp: 2500,\n  coordenadas: { x: 1250, y: 350 },\n  soltarFogo: function() {\n    console.log("CHAMAS INTENSAS!");\n  }\n};\n\nbossDragao.soltarFogo();`,
  "js-09": `// Vinculando a lógica JavaScript com o HTML visual\nconst barraVidaEl = document.getElementById("barra-vida-visual");\nif (barraVidaEl) {\n  barraVidaEl.style.width = "40%"; // Altera largura dinamicamente!\n  barraVidaEl.textContent = "40/100 HP";\n}`,
  "js-10": `// Capturando teclas e cliques do jogador\nwindow.addEventListener("keydown", (event) => {\n  if (event.code === "Space") {\n    triggerPuloJogador();\n  }\n});\n\nconst comprarBtn = document.getElementById("btn-comprar");\ncomprarBtn.addEventListener("click", () => {\n  console.log("Item adquirido!");\n});`,
  "js-11": `// O ciclo contínuo e sincronizado de frames\nfunction atualizarEPintarJogo() {\n  atualizarPosicoesFisicas();\n  desenharCenarioNoCanvas();\n  \n  requestAnimationFrame(atualizarEPintarJogo); /* Próxima atualização de quadro física */\n}\nrequestAnimationFrame(atualizarEPintarJogo);`,
  "js-12": `// Sincronizando velocidade independentemente dos FPS do hardware\nlet lastTime = 0;\nfunction frameRun(timestamp) {\n  const deltaTime = (timestamp - lastTime) / 1000; // Tempo gasto em segundos\n  lastTime = timestamp;\n  \n  player.x += velocidadeMetrosPorSegundo * deltaTime;\n  requestAnimationFrame(frameRun);\n}`,
  "js-13": `// Moldes para instanciar múltiplos inimigos rapidamente\nclass Projetil {\n  constructor(posX, posY, velocidadeX) {\n    this.x = posX;\n    this.y = posY;\n    this.vx = velocidadeX;\n  }\n  atualizar() {\n    this.x += this.vx;\n  }\n}\n\nconst bala = new Projetil(10, 50, 8);`,
  "js-14": `// Simulando constante gravitacional física acelerada\nlet posY = 100;\nlet velY = 0;\nconst GRAVIDADE = 0.5;\n\nfunction tickFisica() {\n  velY += GRAVIDADE; // Aceleração constante descendo\n  posY += velY;\n  if (posY >= 400) { // Chão do jogo\n    posY = 400;\n    velY = 0;\n  }\n}`,
  "js-15": `// Detecção de contato de sobreposição retangular\nfunction checkAABB(ret1, ret2) {\n  return (\n    ret1.x < ret2.x + ret2.width &&\n    ret1.x + ret1.width > ret2.x &&\n    ret1.y < ret2.y + ret2.height &&\n    ret1.y + ret1.height > ret2.y\n  );\n}`,
  "js-16": `// Fatiamento de imagens em blocos de quadros (frames)\nfunction desenharSpriteFrame(ctx, imagem, frameAtual) {\n  const frameLargura = 64;\n  const frameAltura = 64;\n  const xNaSplitesheet = frameAtual * frameLargura;\n  \n  // drawImage(img, sx, sy, sw, sh, dx, dy, dw, dh)\n  ctx.drawImage(imagem, xNaSplitesheet, 0, frameLargura, frameAltura, playerX, playerY, 64, 64);\n}`,
  "js-17": `// Máquina de estados para organizar comportamentos do personagem\nconst PERSONAGEM_ESTADOS = {\n  PARADO: "idle",\n  CORRENDO: "run",\n  BATENDO: "attack"\n};\nlet estadoAtual = PERSONAGEM_ESTADOS.PARADO;\n\nfunction receberComando(tecla) {\n  if (tecla === "ArrowRight") estadoAtual = PERSONAGEM_ESTADOS.CORRENDO;\n}`,
  "js-18": `// Vetores matemáticos direcionais para locomoção diagonal justa\nclass Vector2D {\n  constructor(x, y) {\n    this.x = x;\n    this.y = y;\n  }\n  normalizar() {\n    const comprimento = Math.hypot(this.x, this.y) || 1;\n    this.x /= comprimento;\n    this.y /= comprimento;\n  }\n}`,
  "js-19": `// Filtrando e coletando grupos de elementos da arena\nlet poolInimigos = [\n  { nome: "Orc", hp: 140 },\n  { nome: "Slime", hp: 0 },\n  { nome: "Goblin", hp: 45 }\n];\n\n// Filtra para remover inimigos mortos (hp <= 0)\nconst inimigosAtivos = poolInimigos.filter(inimigo => inimigo.hp > 0);`,
  "js-20": `// Modulando escopos de código isolados\n// em 'physics.js':\nexport function aplicarGravidade(velY) {\n  return velY + 0.98;\n}\n\n// em 'main.js':\nimport { aplicarGravidade } from './physics.js';\nlet velocidadeQueda = aplicarGravidade(2.0);`,
  "js-21": `// Registrando o momento em que ações de rede finalizam\nfunction carregarDadosJogador(callback) {\n  setTimeout(() => {\n    const dados = { classe: "Guerreiro", ouro: 500 };\n    callback(dados);\n  }, 1000);\n}\n\ncarregarDadosJogador((info) => {\n  console.log("Ouro do jogador: " + info.ouro);\n});`,
  "js-22": `// Promessas assíncronas para carregamentos de assets pesados\nconst carregarSpritesheet = new Promise((resolve, reject) => {\n  const img = new Image();\n  img.onload = () => resolve(img);\n  img.onerror = () => reject("Erro ao ler arquivo spritesheet.png");\n  img.src = "spritesheet.png";\n});\n\ncarregarSpritesheet\n  .then(img => console.log("Carregado!"))\n  .catch(error => console.error(error));`,
  "js-23": `// Escrevendo chamadas assíncronas com legibilidade procedural\nasync function carregarFasesOnline() {\n  try {\n    const response = await fetch("https://api.gamedevacademia.com/mapas");\n    const mapasJson = await response.json();\n    renderizarMapas(mapasJson);\n  } catch (error) {\n    console.error("Erro na leitura remota das fases: " + error);\n  }\n}`,
  "js-24": `// Percorrendo árvores de dados do jogo de forma autorreferente\nfunction encontrarItemNoBauRecursivo(bau, nomeItem) {\n  for (let node of bau) {\n    if (node.nome === nomeItem) return node;\n    if (node.tipo === "sub-bau") { \n      return encontrarItemNoBauRecursivo(node.conteudo, nomeItem);\n    }\n  }\n  return null;\n}`,
  "js-25": `// Técnicas de clonagem profunda para evitar bugs colaterais de referência\nconst atributosBase = { hp: 100, for: 15, equips: ["espada"] };\n\n// Clona completamente desvinculando instâncias de matriz na memória\nconst jogadorInstanciado = JSON.parse(JSON.stringify(atributosBase));\njogadorInstanciado.hp = 120;\njogadorInstanciado.equips.push("anel"); // Não modifica o original!`,
  "js-26": `// Métodos de conexão externa (como resgatas pontuações globais do servidor)\nfetch("https://api.gamedev.com/leaderboard")\n  .then(resposta => resposta.json())\n  .then(listaDePlacares => {\n    exibirPlacarFormatado(listaDePlacares);\n  });`,
  "js-27": `// Operações bit-a-bit ultra rápidos de agrupamento e checagem de colisor\nconst GRUPO_HEROI = 1 << 0;  // 0001\nconst GRUPO_PORTAL = 1 << 1; // 0010\nconst GRUPO_PAREDE = 1 << 2; // 0100\n\nlet mapaFiltroColisoes = GRUPO_HEROI | GRUPO_PAREDE; // 0101`,
  "js-28": `// Varredura cirúrgica de comandos digitados no chat do jogo\nconst comandoValidador = /^\\/cheat\\s+([a-zA-Z]+)\\s+(\\d+)$/;\n\nconst comandoDigitado = "/cheat dinheiros 99999";\nconst match = comandoDigitado.match(comandoValidador);\nif (match) {\n  console.log("Cheat ativado: " + match[1] + " Qtd: " + match[2]);\n}`,
  "js-29": `// Desalocando coleções de arrays para manter o jogo leve e livre de leak\nfunction destruirSalaVirtual() {\n  inimigosAtivosNaTela.forEach(inimigo => {\n    inimigo.dispose(); /* Libera listeners e texturas */\n  });\n  inimigosAtivosNaTela.length = 0; // Zera a lista explícita\n}`,
  "js-30": `// Singleton para o de Gerenciador de Sons Central da Engine\nclass SomManager {\n  static getInstance() {\n    if (!this.instancia) {\n      this.instancia = new SomManager();\n    }\n    return this.instancia;\n  }\n  tocarAudio(somId) {\n    console.log("Play: " + somId);\n  }\n}`
};

// Apply correct, realistic gameDEV codeExamples dynamically
if (ENCYCLOPEDIA_DATA.css) {
  ENCYCLOPEDIA_DATA.css.forEach(lesson => {
    if (CORRECT_CSS_EXAMPLES[lesson.id]) {
      lesson.codeExample = CORRECT_CSS_EXAMPLES[lesson.id];
    }
  });
}
if (ENCYCLOPEDIA_DATA.js) {
  ENCYCLOPEDIA_DATA.js.forEach(lesson => {
    if (CORRECT_JS_EXAMPLES[lesson.id]) {
      lesson.codeExample = CORRECT_JS_EXAMPLES[lesson.id];
    }
  });
}

// --- CORE APP STATE ---
let state = {
  activeTab: 'encyclopedia', // 'encyclopedia' | 'challenges'
  selectedLanguage: 'html',  // 'html' | 'css' | 'js'
  selectedDifficulty: 'all', // 'all' | 'beginner' | 'intermediate' | 'advanced'
  searchQuery: '',
  selectedLessonId: 'html-01',
  selectedChallengeId: 'ch-html-01',
  
  // Game Stats Persistence
  visitedTutorials: [],
  completedChallenges: [],
  xp: 0,
  
  // Dynamic Labs Vars
  slimeHealth: 100,
  isShaking: false,
  crtActive: true,
  mousePos: { x: 100, y: 100 },
  gameLoopFrame: 0,
  gameLoopSpeed: 1,
  wizardPos: { x: 100, y: 80 },
  wizardHasMoved: false,
  
  // Challenge code IDE
  challengeCode: '',
  challengeFeedback: null,

  // Creator Modal State
  showCreator: false,
  creatorTab: 'lesson', // 'lesson' | 'challenge'
  creatorTitle: '',
  creatorDesc: '',
  creatorTimeXp: '',
  creatorCode: '',
  creatorDocHint: '',
  generatedJSON: ''
};

// --- IFRAME-SAFE TOAST NOTIFICATION SYSTEM ---
function showToast(message, type = 'info') {
  let container = document.getElementById('toast-container');
  if (!container) {
    container = document.createElement('div');
    container.id = 'toast-container';
    container.className = 'fixed bottom-5 right-5 z-[9999] flex flex-col gap-2.5 max-w-sm w-full pointer-events-none';
    document.body.appendChild(container);
  }
  
  const toast = document.createElement('div');
  const bgClass = type === 'success' ? 'bg-emerald-950/95 border-emerald-500/40 text-emerald-300 shadow-emerald-500/10' :
                  type === 'error' ? 'bg-rose-950/95 border-rose-500/40 text-rose-300 shadow-rose-500/10' :
                  'bg-[#0F0F12]/95 border-white/10 text-indigo-300 shadow-indigo-500/5';
  
  const icon = type === 'success' ? 'check-circle' : type === 'error' ? 'alert-octagon' : 'info';
  
  toast.className = `p-3.5 rounded-xl border ${bgClass} shadow-2xl flex items-center gap-3 transition-all duration-300 transform translate-y-2 opacity-0 pointer-events-auto backdrop-blur-md`;
  toast.innerHTML = `
    <i data-lucide="${icon}" class="w-4 h-4 shrink-0"></i>
    <span class="text-xs font-mono font-medium">${message}</span>
  `;
  container.appendChild(toast);
  
  if (window.lucide) window.lucide.createIcons();
  
  // Transition in
  setTimeout(() => {
    toast.classList.remove('translate-y-2', 'opacity-0');
    toast.classList.add('translate-y-0', 'opacity-100');
  }, 10);
  
  // Transition out
  setTimeout(() => {
    toast.classList.remove('translate-y-0', 'opacity-100');
    toast.classList.add('translate-y-2', 'opacity-0');
    setTimeout(() => {
      toast.remove();
    }, 300);
  }, 4000);
}

// --- SYNC PROGRESS LOGIC ---
function loadProgress() {
  try {
    const savedTutorials = localStorage.getItem('gamedev_tutorials');
    const parsed = savedTutorials ? JSON.parse(savedTutorials) : [];
    state.visitedTutorials = Array.isArray(parsed) ? parsed : [];
  } catch (e) { state.visitedTutorials = []; }

  try {
    const savedChallenges = localStorage.getItem('gamedev_challenges');
    const parsed = savedChallenges ? JSON.parse(savedChallenges) : [];
    state.completedChallenges = Array.isArray(parsed) ? parsed : [];
  } catch (e) { state.completedChallenges = []; }

  try {
    const savedXp = localStorage.getItem('gamedev_xp');
    const parsed = savedXp ? parseInt(savedXp, 10) : 0;
    state.xp = isNaN(parsed) ? 0 : parsed;
  } catch (e) { state.xp = 0; }
}

function saveProgress() {
  try {
    localStorage.setItem('gamedev_tutorials', JSON.stringify(state.visitedTutorials));
    localStorage.setItem('gamedev_challenges', JSON.stringify(state.completedChallenges));
    localStorage.setItem('gamedev_xp', state.xp.toString());
  } catch (e) { console.error('Error saving progress', e); }
}

// --- CORE ANIMATION LOOPS ---
let animationFrameId = null;
let lastGameLoopTime = 0;

function runGameLoopTimer(time) {
  if (time - lastGameLoopTime > 150 / state.gameLoopSpeed) {
    state.gameLoopFrame = (state.gameLoopFrame + 1) % 100;
    
    // If the gameloop element is currently drawn inside workshop, update it in-place
    const countLabel = document.getElementById('gameloop-count-span');
    const fillIndicator = document.getElementById('gameloop-progressbar-fill');
    if (countLabel) {
      countLabel.textContent = `Contagem: ${state.gameLoopFrame}`;
    }
    if (fillIndicator) {
      fillIndicator.style.left = `${state.gameLoopFrame}%`;
    }
    lastGameLoopTime = time;
  }
  animationFrameId = requestAnimationFrame(runGameLoopTimer);
}

// --- RENDER UTILITIES ---
function getActiveLesson() {
  const list = ENCYCLOPEDIA_DATA[state.selectedLanguage] || [];
  return list.find(i => i.id === state.selectedLessonId) || list[0];
}

function getActiveChallenge() {
  return CHALLENGE_DATA.find(c => c.id === state.selectedChallengeId) || CHALLENGE_DATA[0];
}

function getFilteredLessons() {
  const rawList = ENCYCLOPEDIA_DATA[state.selectedLanguage] || [];
  return rawList.filter(item => {
    const matchesDifficulty = state.selectedDifficulty === 'all' || item.difficulty === state.selectedDifficulty;
    const matchesQuery = item.title.toLowerCase().includes(state.searchQuery.toLowerCase()) || 
                          item.shortDesc.toLowerCase().includes(state.searchQuery.toLowerCase());
    return matchesDifficulty && matchesQuery;
  });
}

function getFilteredChallenges() {
  return CHALLENGE_DATA.filter(ch => {
    const matchesCategory = ch.category === state.selectedLanguage;
    const matchesDifficulty = state.selectedDifficulty === 'all' || ch.difficulty === state.selectedDifficulty;
    const matchesQuery = ch.title.toLowerCase().includes(state.searchQuery.toLowerCase()) || 
                          ch.shortDesc.toLowerCase().includes(state.searchQuery.toLowerCase());
    return matchesCategory && matchesDifficulty && matchesQuery;
  });
}

// Set up Default active items so there is no empty detail state
function syncDefaultActiveItems() {
  const lessons = getFilteredLessons();
  if (lessons.length > 0) {
    if (!lessons.some(i => i.id === state.selectedLessonId)) {
      state.selectedLessonId = lessons[0].id;
    }
  }

  const challenges = getFilteredChallenges();
  if (challenges.length > 0) {
    if (!challenges.some(c => c.id === state.selectedChallengeId)) {
      state.selectedChallengeId = challenges[0].id;
      state.challengeCode = challenges[0].initialCode;
      state.challengeFeedback = null;
    }
  } else {
    state.challengeCode = '';
    state.challengeFeedback = null;
  }
}

// --- UI EVENT HANDLERS ---
function selectMainTab(newTab) {
  state.activeTab = newTab;
  state.searchQuery = '';
  const searchInput = document.getElementById('search-input');
  if (searchInput) {
    searchInput.value = '';
    searchInput.placeholder = `Buscar na ${newTab === 'encyclopedia' ? 'enciclopédia' : 'lista de desafios'}...`;
  }
  
  syncDefaultActiveItems();
  renderUI();
}

function selectLanguageTab(lang) {
  state.selectedLanguage = lang;
  state.searchQuery = '';
  const searchInput = document.getElementById('search-input');
  if (searchInput) {
    searchInput.value = '';
  }
  
  syncDefaultActiveItems();
  renderUI();
}

function selectDifficulty(diff) {
  state.selectedDifficulty = diff;
  state.searchQuery = '';
  const searchInput = document.getElementById('search-input');
  if (searchInput) {
    searchInput.value = '';
  }
  
  syncDefaultActiveItems();
  renderUI();
}

function handleSearch(query) {
  state.searchQuery = query;
  const clearBtn = document.getElementById('clear-search-btn');
  if (clearBtn) {
    if (query) {
      clearBtn.classList.remove('hidden');
    } else {
      clearBtn.classList.add('hidden');
    }
  }
  
  syncDefaultActiveItems();
  renderListSidebar();
  renderDetailPanel();
}

function markActiveLessonConcluded() {
  const lesson = getActiveLesson();
  if (!lesson) return;
  if (!state.visitedTutorials.includes(lesson.id)) {
    state.visitedTutorials.push(lesson.id);
    state.xp += 50;
    saveProgress();
    renderUI();
  }
}

function runChallengeTests() {
  const chall = getActiveChallenge();
  if (!chall) return;
  
  const val = document.getElementById('challenge-code-editor')?.value || state.challengeCode;
  state.challengeCode = val;
  
  const result = chall.testRunner(val);
  state.challengeFeedback = result;
  
  if (result.success) {
    if (!state.completedChallenges.includes(chall.id)) {
      state.completedChallenges.push(chall.id);
      state.xp += chall.xpValue;
      saveProgress();
    }
  }
  
  renderDetailPanel();
}

// --- RENDERING SUBSYSTEMS ---
function renderUI() {
  const trySetText = (id, val) => {
    const el = document.getElementById(id);
    if (el) el.textContent = val;
  };

  // Update Gamified Stat Bar text values
  const currentLvl = Math.floor(state.xp / 1000) + 1;
  trySetText('level-badge', currentLvl);
  trySetText('level-num', currentLvl);
  trySetText('xp-text', `${state.xp} XP`);
  
  // Theory & Challenge counts
  trySetText('theory-completed', `${state.visitedTutorials.length} / 11`);
  trySetText('challenges-completed', `${state.completedChallenges.length} / 9`);
  
  // Progress Line Percent
  const percent = Math.min(100, (state.xp % 1000) / 10);
  const progressBar = document.getElementById('xp-progress-bar');
  if (progressBar) progressBar.style.width = `${percent}%`;

  // Render navigation states (active tab highlighted borders)
  const tabEnc = document.getElementById('tab-encyclopedia');
  const tabChall = document.getElementById('tab-challenges');
  if (tabEnc && tabChall) {
    if (state.activeTab === 'encyclopedia') {
      tabEnc.className = 'flex-1 sm:flex-initial flex items-center justify-center gap-2 px-8 py-2.5 rounded-md text-sm font-medium transition-all duration-200 cursor-pointer bg-white/5 text-white shadow-inner border-b-2 border-indigo-500';
      tabChall.className = 'flex-1 sm:flex-initial flex items-center justify-center gap-2 px-8 py-2.5 rounded-md text-sm font-medium transition-all duration-200 cursor-pointer text-slate-400 hover:text-white hover:bg-[#16161D]/50';
    } else {
      tabChall.className = 'flex-1 sm:flex-initial flex items-center justify-center gap-2 px-8 py-2.5 rounded-md text-sm font-medium transition-all duration-200 cursor-pointer bg-white/5 text-white shadow-inner border-b-2 border-indigo-500';
      tabEnc.className = 'flex-1 sm:flex-initial flex items-center justify-center gap-2 px-8 py-2.5 rounded-md text-sm font-medium transition-all duration-200 cursor-pointer text-slate-400 hover:text-white hover:bg-[#16161D]/50';
    }
  }

  // Render subtabs (HTML, CSS, JS active/inactive visual status states)
  ['html', 'css', 'js'].forEach(lang => {
    const elem = document.getElementById(`subtab-${lang}`);
    const pingEl = document.getElementById(`ping-${lang}`);
    if (elem) {
      if (state.selectedLanguage === lang) {
        elem.className = 'p-3 md:p-4 rounded-xl border text-left transition-all duration-200 cursor-pointer relative group overflow-hidden border-indigo-500 bg-indigo-600/15 text-indigo-300 shadow-lg shadow-black/50 ring-1 ring-white/10';
        if (pingEl) {
          pingEl.classList.remove('hidden');
          pingEl.classList.add('inline-block', 'animate-ping');
        }
      } else {
        elem.className = 'p-3 md:p-4 rounded-xl border text-left transition-all duration-200 cursor-pointer relative group overflow-hidden border-white/10 bg-[#0F0F12] text-slate-400 hover:text-slate-200 hover:border-indigo-500/40';
        if (pingEl) {
          pingEl.classList.add('hidden');
          pingEl.classList.remove('inline-block', 'animate-ping');
        }
      }
    }
  });

  // Render active difficulty select buttons
  ['all', 'beginner', 'intermediate', 'advanced'].forEach(d => {
    const btn = document.getElementById(`diff-btn-${d}`);
    if (btn) {
      if (state.selectedDifficulty === d) {
        btn.className = 'flex-1 md:flex-none justify-center px-4 py-1.5 rounded transition-all text-xs font-mono font-semibold flex items-center gap-2 cursor-pointer bg-indigo-600 text-white shadow-md border border-indigo-500/40';
      } else {
        btn.className = 'flex-1 md:flex-none justify-center px-4 py-1.5 rounded transition-all text-xs font-mono font-semibold flex items-center gap-2 cursor-pointer text-slate-400 hover:text-white';
      }
    }
  });

  // Filter labels
  const langFilterEl = document.getElementById('label-lang-filter');
  if (langFilterEl) langFilterEl.textContent = state.selectedLanguage.toUpperCase();
  const diffWord = state.selectedDifficulty === 'all' ? 'Todos' :
                   state.selectedDifficulty === 'beginner' ? 'Iniciante' :
                   state.selectedDifficulty === 'intermediate' ? 'Intermediário' : 'Avançado';
  trySetText('label-diff-filter', diffWord);

  // Render Sidebar, Details sections
  renderListSidebar();
  renderDetailPanel();

  // Draw any active Lucide tags on-the-fly
  if (window.lucide) {
    window.lucide.createIcons();
  }
}

// Side indexing renderer
function renderListSidebar() {
  const sidebarTitle = document.getElementById('sidebar-list-title');
  const countSpan = document.getElementById('results-count');
  const listContainer = document.getElementById('items-list');

  if (!listContainer) return;
  listContainer.innerHTML = '';

  if (state.activeTab === 'encyclopedia') {
    if (sidebarTitle) sidebarTitle.textContent = 'Tópicos de Estudo';
    const lessons = getFilteredLessons();
    if (countSpan) countSpan.textContent = `${lessons.length} Encontrado(s)`;

    if (lessons.length === 0) {
      listContainer.innerHTML = `
        <div class="border border-dashed border-white/10 bg-[#0F0F12]/20 rounded-xl p-8 text-center text-slate-500 font-mono text-xs">
          Nenhum tópico correspondente à sua busca neste filtro.
        </div>
      `;
      return;
    }

    lessons.forEach(item => {
      const isRead = state.visitedTutorials.includes(item.id);
      const isActive = state.selectedLessonId === item.id;
      
      const card = document.createElement('button');
      card.className = `p-3.5 rounded-xl border text-left transition-all duration-200 relative overflow-hidden group cursor-pointer ${
        isActive 
          ? 'bg-[#16161D] border-indigo-500/50 shadow-lg ring-1 ring-white/10' 
          : 'bg-[#0F0F12]/60 border-white/5 hover:border-indigo-500/30 hover:bg-[#16161D]/50'
      }`;

      // Styling difficulty badge classes
      const badgeClass = item.difficulty === 'beginner' ? 'text-emerald-400 border-emerald-500/20 bg-emerald-500/5' :
                         item.difficulty === 'intermediate' ? 'text-amber-400 border-amber-500/20 bg-amber-500/5' :
                         'text-rose-400 border-rose-500/20 bg-rose-500/5';
      const badgeLabel = item.difficulty === 'beginner' ? 'Iniciante' :
                         item.difficulty === 'intermediate' ? 'Intermediário' : 'Avançado';

      card.innerHTML = `
        <div class="absolute top-0 left-0 w-1.5 h-full transition-all ${isActive ? 'bg-indigo-500' : 'bg-transparent group-hover:bg-indigo-500/30'}"></div>
        <div class="flex items-start gap-3 pl-1.5">
          <div class="p-2 rounded-lg ${isActive ? 'bg-[#0A0A0B]' : 'bg-black/30'} border border-white/10 shadow-inner text-indigo-400">
            <i data-lucide="${item.icon || 'tv'}" class="w-5 h-5"></i>
          </div>
          <div class="flex-1 min-w-0">
            <div class="flex justify-between items-center gap-2">
              <h4 class="text-sm font-semibold truncate group-hover:text-slate-100 transition-colors text-slate-200">${item.title}</h4>
              ${isRead ? `<span class="flex items-center text-indigo-450 gap-0.5" title="Concluído"><i data-lucide="check-circle-2" class="w-3.5 h-3.5"></i></span>` : ''}
            </div>
            <p class="text-xs text-slate-400 line-clamp-2 mt-1 font-mono">${item.shortDesc}</p>
            <div class="flex flex-wrap items-center gap-2 mt-2.5 text-[10px] font-mono text-slate-500">
              <span>⏰ ${item.estimatedTime}</span>
              <span>•</span>
              <span>🔥 +50 XP</span>
              <span class="px-1.5 py-0.2 rounded border uppercase font-bold text-[8px] ${badgeClass}">${badgeLabel}</span>
            </div>
          </div>
        </div>
      `;

      card.onclick = () => {
        state.selectedLessonId = item.id;
        if (!state.visitedTutorials.includes(item.id)) {
          state.visitedTutorials.push(item.id);
          state.xp += 50;
          saveProgress();
        }
        renderUI();
      };
      listContainer.appendChild(card);
    });

  } else {
    // Render Challenges List Sidebar
    if (sidebarTitle) sidebarTitle.textContent = 'Desafios Ativos';
    const challenges = getFilteredChallenges();
    if (countSpan) countSpan.textContent = `${challenges.length} Encontrado(s)`;

    if (challenges.length === 0) {
      listContainer.innerHTML = `
        <div class="border border-dashed border-white/10 bg-[#0F0F12]/20 rounded-xl p-8 text-center text-slate-500 font-mono text-xs">
          Nenhum desafio correspondente encontrado nesta dificuldade.
        </div>
      `;
      return;
    }

    challenges.forEach(chall => {
      const isSolved = state.completedChallenges.includes(chall.id);
      const isActive = state.selectedChallengeId === chall.id;

      const card = document.createElement('button');
      card.className = `p-3.5 rounded-xl border text-left transition-all duration-200 relative overflow-hidden group cursor-pointer ${
        isActive 
          ? 'bg-[#16161D] border-indigo-500/50 shadow-lg ring-1 ring-white/10' 
          : 'bg-[#0F0F12]/60 border-white/5 hover:border-indigo-500/30 hover:bg-[#16161D]/50'
      }`;

      // Styling difficulty badge classes
      const badgeClass = chall.difficulty === 'beginner' ? 'text-emerald-400 border-emerald-500/20 bg-emerald-500/5' :
                         chall.difficulty === 'intermediate' ? 'text-amber-400 border-amber-500/20 bg-amber-500/5' :
                         'text-rose-400 border-rose-500/20 bg-rose-500/5';
      const badgeLabel = chall.difficulty === 'beginner' ? 'Iniciante' :
                         chall.difficulty === 'intermediate' ? 'Intermediário' : 'Avançado';

      card.innerHTML = `
        <div class="absolute top-0 left-0 w-1.5 h-full transition-all ${isActive ? 'bg-indigo-500' : 'bg-transparent group-hover:bg-indigo-500/30'}"></div>
        <div class="flex items-start gap-3 pl-1.5">
          <div class="p-2 rounded-lg ${isActive ? 'bg-[#0A0A0B]' : 'bg-black/30'} border border-white/10 text-indigo-400">
            <i data-lucide="code-2" class="w-5 h-5 text-indigo-400"></i>
          </div>
          <div class="flex-1 min-w-0">
            <div class="flex justify-between items-center gap-2">
              <h4 class="text-sm font-semibold truncate text-slate-200">${chall.title}</h4>
              ${isSolved ? `<span class="flex items-center text-indigo-400 gap-0.5 bg-indigo-950/45 border border-indigo-800/40 px-1.5 py-0.2 text-[8px] rounded font-mono uppercase font-bold">Aprovado</span>` : ''}
            </div>
            <p class="text-xs text-slate-400 line-clamp-2 mt-1 font-mono">${chall.shortDesc}</p>
            <div class="flex items-center justify-between mt-2.5 text-[10px] font-mono text-slate-500 gap-2">
              <span class="px-1.5 py-0.2 rounded border uppercase font-bold text-[8px] ${badgeClass}">${badgeLabel}</span>
              <span class="text-indigo-400 font-bold">+${chall.xpValue} XP</span>
            </div>
          </div>
        </div>
      `;

      card.onclick = () => {
        state.selectedChallengeId = chall.id;
        state.challengeCode = chall.initialCode;
        state.challengeFeedback = null;
        renderUI();
      };
      listContainer.appendChild(card);
    });
  }

  // Footer visual hint
  const hintDiv = document.createElement('div');
  hintDiv.className = 'mt-4 p-4 rounded-xl bg-[#0F0F12]/40 border border-white/5 text-xs text-slate-400 font-mono';
  hintDiv.innerHTML = `
    <span class="text-indigo-400 font-bold block mb-1">Dica de Desenvolvimento 💡</span>
    Crie um novo tópico de HTML, CSS ou JavaScript preenchendo a caixa "Gerar Conteúdo" no canto superior direito para injetá-los depois!
  `;
  listContainer.appendChild(hintDiv);

  if (window.lucide) window.lucide.createIcons();
}

// Right details panel workbench
function renderDetailPanel() {
  const panel = document.getElementById('details-panel');
  panel.innerHTML = '';

  if (state.activeTab === 'encyclopedia') {
    const lesson = getActiveLesson();
    if (!lesson) {
      panel.innerHTML = `<div class="text-center p-12 text-slate-500 font-mono">Selecione uma lição na barra lateral.</div>`;
      return;
    }

    const isConcluded = state.visitedTutorials.includes(lesson.id);

    panel.innerHTML = `
      <div class="flex flex-col gap-6">
        
        <!-- Header Info -->
        <div class="border-b border-white/10 pb-4">
          <div class="flex items-center justify-between mb-2">
            <span class="px-2.5 py-0.5 bg-[#0F0F12] text-[10px] text-indigo-400 rounded-full font-mono border border-white/5 uppercase tracking-wider font-bold">
              ${lesson.difficulty}
            </span>
            <span class="text-xs font-mono text-slate-400">
              Estudo sugerido: ${lesson.estimatedTime}
            </span>
          </div>
          <h2 class="text-xl md:text-2xl font-semibold text-white flex items-center gap-2">
            <i data-lucide="${lesson.icon || 'tv'}" class="w-6 h-6 text-indigo-400"></i>
            <span>${lesson.title}</span>
          </h2>
        </div>

        <!-- Concept Block -->
        <div class="p-3.5 bg-indigo-500/5 rounded-lg border border-indigo-500/20 text-xs text-slate-300 font-mono leading-relaxed">
          <strong class="text-indigo-400 block mb-1">🎮 Teoria / Em termos práticos de GameDEV:</strong>
          ${lesson.concept}
        </div>

        <!-- Layout split: Explanation vs Live Simulator -->
        <div class="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
          
          <!-- Explanation Column -->
          <div class="md:col-span-7 flex flex-col gap-4 text-xs font-mono text-slate-300 leading-relaxed max-h-[300px] overflow-y-auto pr-1">
            <h3 class="text-slate-100 font-bold text-sm">Estruturação e Entendimento</h3>
            <div class="whitespace-pre-line text-[11px] pl-2 border-l border-white/10">
              ${lesson.tutorialHTML}
            </div>
          </div>

          <!-- Live Simulator box wrapper -->
          <div class="md:col-span-12 lg:col-span-5 flex flex-col gap-3">
            <div class="flex justify-between items-center">
              <span class="text-[10px] font-mono text-slate-500">🧪 Simulador Interativo Live</span>
              <span class="w-2 h-2 rounded-full bg-indigo-500 animate-pulse"></span>
            </div>

            <!-- Workspace viewport frame -->
            <div id="live-demo-viewport" class="bg-[#0A0A0B] border border-white/10 rounded-lg p-3.5 h-48 relative overflow-hidden flex flex-col justify-between">
              <!-- Inline loaded sub-views -->
            </div>
          </div>

        </div>

        <!-- Boilerplate copy-code block -->
        <div class="flex flex-col gap-2">
          <div class="flex justify-between items-center text-xs font-mono text-slate-400">
            <span>📝 Modelo Simplificado de Escrita (Boilerplate):</span>
            <button id="copy-boilerplate-btn" class="text-xs text-indigo-400 hover:text-indigo-300 flex items-center gap-1.5 cursor-pointer font-semibold">
              <i data-lucide="copy" class="w-3.5 h-3.5"></i>
              <span>Copiar Boilerplate</span>
            </button>
          </div>
          <pre class="bg-[#0A0A0B] p-4 rounded-lg border border-white/10 text-[11px] font-mono leading-relaxed overflow-x-auto text-indigo-300"><code id="code-snippet-box"></code></pre>
        </div>

        <!-- Conclude progress footer status -->
        <div class="border-t border-white/10 pt-4 flex flex-col sm:flex-row justify-between items-center gap-3">
          <span class="text-xs text-slate-400 font-mono">
            ${isConcluded 
              ? '✅ Você já estudou este conceito e adquiriu +50 XP.' 
              : '📖 Leia os conceitos acima para registrar o progresso e ganhar XP.'}
          </span>
          ${!isConcluded ? `
            <button id="conclude-study-btn" class="px-5 py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg text-xs font-bold shadow-lg shadow-indigo-500/10 active:scale-95 transition-all flex items-center gap-2 cursor-pointer border border-indigo-500/30">
              <i data-lucide="check" class="w-4 h-4"></i>
              <span>Concluir Leitura (+50 XP)</span>
            </button>
          ` : ''}
        </div>

      </div>
    `;

    // Inject snippet text secure escape
    document.getElementById('code-snippet-box').textContent = lesson.codeExample;

    // Bind footer actions
    const concludeBtn = document.getElementById('conclude-study-btn');
    if (concludeBtn) {
      concludeBtn.addEventListener('click', markActiveLessonConcluded);
    }

    const copyBtn = document.getElementById('copy-boilerplate-btn');
    copyBtn.addEventListener('click', () => {
      navigator.clipboard.writeText(lesson.codeExample);
      showToast('Código boilerplate copiado para a área de transferência!', 'success');
    });

    // Populate the Interactive Live Simulator Sub-viewport
    drawActiveWorkshopSimulator(lesson.liveDemoConfig);

  } else {
    // RENDER CHALLENGES TAB IDE INTERFACE WORKBENCH
    const chall = getActiveChallenge();
    if (!chall) {
      panel.innerHTML = `<div class="text-center p-12 text-slate-500 font-mono">Selecione um desafio na lista ao lado.</div>`;
      return;
    }

    const isSolved = state.completedChallenges.includes(chall.id);

    panel.innerHTML = `
      <div class="flex flex-col gap-5">
        
        <!-- Header Info -->
        <div class="border-b border-white/10 pb-3 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
          <div>
            <span class="px-2 py-0.5 bg-indigo-500/10 text-[9px] text-indigo-300 rounded border border-indigo-500/35 uppercase tracking-wider font-mono mr-2 font-bold">
              Exercício • ${chall.difficulty}
            </span>
            <h2 class="text-xl font-medium text-white flex items-center gap-2 mt-1.5">
              <i data-lucide="trophy" class="w-5.5 h-5.5 text-indigo-400"></i>
              <span>${chall.title}</span>
            </h2>
          </div>
          
          <div class="text-right text-xs font-mono text-indigo-400 font-bold">
            Valor: +${chall.xpValue} XP
          </div>
        </div>

        <!-- Instructions Box -->
        <div class="p-4 bg-[#0A0A0B]/80 border border-white/10 rounded-lg">
          <h3 class="text-xs font-mono text-indigo-400 font-bold uppercase mb-1.5 flex items-center gap-1.5">
            <i data-lucide="activity" class="w-3.5 h-3.5"></i>
            <span>Instruções do Exercício</span>
          </h3>
          <p class="text-xs text-slate-300 font-mono leading-relaxed">
            ${chall.instructions}
          </p>
        </div>

        <!-- Interactive Sandbox Area with Live Preview -->
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-5 items-start">
          
          <!-- Editor Column (Left) -->
          <div class="lg:col-span-7 flex flex-col gap-2">
            <div class="flex justify-between items-center text-xs font-mono text-slate-400">
              <span class="flex items-center gap-1">
                <i data-lucide="terminal" class="w-3.5 h-3.5 text-indigo-400"></i>
                <span>🖥️ Editor Interativo do Aluno:</span>
              </span>
              <button id="clear-ide-btn" class="text-slate-500 hover:text-slate-300 flex items-center gap-1 cursor-pointer font-semibold">
                <i data-lucide="rotate-ccw" class="w-3.5 h-3.5"></i>
                <span>Resetar Código</span>
              </button>
            </div>

            <textarea
              id="challenge-code-editor"
              class="w-full h-36 bg-[#0A0A0B] p-4 rounded-lg border border-white/10 font-mono text-xs focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 focus:outline-none leading-relaxed text-indigo-100"
              placeholder="// Digite sua solução aqui..."
            ></textarea>
            <span class="text-[10px] text-slate-500 font-mono">Dica rápida: ${chall.hint || 'Estruture o HTML com cuidado e veja o resultado ao lado.'}</span>
          </div>

          <!-- Live Visualizer Column (Right) -->
          <div class="lg:col-span-5 flex flex-col gap-2">
            <div class="flex justify-between items-center text-xs font-mono text-slate-400">
              <span class="flex items-center gap-1.5">
                <i data-lucide="eye" class="w-3.5 h-3.5 text-emerald-400"></i>
                <span>🧪 Engine de Visualização HUD (Preview):</span>
              </span>
              <span class="flex items-center gap-1">
                <span class="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                <span class="text-[9px] text-slate-500">Live Output</span>
              </span>
            </div>

            <div class="w-full h-36 bg-[#0A0A0B] border border-white/10 rounded-lg p-3.5 overflow-auto relative flex flex-col justify-start">
              <div id="live-challenge-preview" class="w-full text-slate-200 font-sans">
                <!-- User's HTML/CSS/JS will render here in real-time -->
              </div>
            </div>
            <span class="text-[8px] text-slate-600 font-mono text-right">Motor de Renderização HUD / HTML5</span>
          </div>

        </div>

        <!-- Visual Validator Feedbacks container -->
        <div class="flex flex-col gap-3">
          <div id="ide-feedback-box"></div>

          <div class="flex justify-between items-center pt-2">
            <span class="text-xs text-slate-500 font-mono">
              ${isSolved ? '🟢 Parabéns! Exercício aprovado.' : '🔴 Pendente de aprovação.'}
            </span>

            <button
              id="run-challenge-test-btn"
              class="px-6 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg text-xs font-bold shadow-lg shadow-indigo-600/20 active:scale-95 transition-all flex items-center gap-2 cursor-pointer border border-indigo-500/40"
            >
              <i data-lucide="play" class="w-3.5 h-3.5 text-indigo-200 fill-indigo-200"></i>
              <span>Executar Código e Testar</span>
            </button>
          </div>
        </div>

      </div>
    `;

    // Force bind current typed code
    const textarea = document.getElementById('challenge-code-editor');
    textarea.value = state.challengeCode || chall.initialCode;

    // Live Output update logic
    const previewBox = document.getElementById('live-challenge-preview');
    const updatePreview = () => {
      if (!previewBox) return;
      const userVal = textarea.value;
      
      if (!userVal || userVal.trim() === '') {
        const langMsg = state.selectedLanguage === 'html' ? 'HTML' : state.selectedLanguage === 'css' ? 'CSS' : 'JavaScript';
        previewBox.innerHTML = `<span class="text-slate-600 italic text-xs font-mono">Digite seu código ${langMsg} à esquerda para ver a renderização em tempo real...</span>`;
        return;
      }
      
      if (state.selectedLanguage === 'html') {
        previewBox.innerHTML = userVal;
      } else if (state.selectedLanguage === 'css') {
        if (chall.id === 'ch-css-pointer') {
          previewBox.innerHTML = `
            <style>
              ${userVal}
            </style>
            <div class="area-jogo w-full h-24 bg-indigo-500/10 border border-dashed border-indigo-500/30 rounded-lg flex flex-col items-center justify-center p-2 text-center cursor-pointer transition-all hover:bg-indigo-500/20">
              <span class="text-2xl animate-pulse">🎯</span>
              <p class="text-[9px] text-indigo-400 font-mono font-bold mt-1.5 uppercase">Área do Jogo (.area-jogo)</p>
              <p class="text-[8px] text-slate-500 font-mono mt-0.5">Passe o mouse aqui para testar o seu cursor!</p>
            </div>
          `;
        } else if (chall.id === 'ch-css-step') {
          const isSteps8 = userVal.includes('steps(8)');
          previewBox.innerHTML = `
            <style>
              ${userVal}
            </style>
            <div class="flex flex-col items-center justify-center gap-2 p-2">
              <div class="w-12 h-12 bg-indigo-500/10 border border-slate-700 rounded-lg flex items-center justify-center relative overflow-hidden">
                <div class="sprite-personagem text-2xl" style="animation: walk 1s infinite ${isSteps8 ? 'steps(8)' : 'linear'};">🏃</div>
              </div>
              <style>
                @keyframes walk {
                  0% { transform: scale(1) translateX(-10px); }
                  50% { transform: scale(1.1) translateX(10px); }
                  100% { transform: scale(1) translateX(-10px); }
                }
              </style>
              <p class="text-[9px] text-indigo-400 font-mono font-bold uppercase">Sprite Animada (.sprite-personagem)</p>
              <p class="text-[8px] font-mono ${isSteps8 ? 'text-emerald-400' : 'text-amber-400'}">
                ${isSteps8 ? '✓ Usando steps(8) discretos (fatiamento perfeito!)' : '⏳ Movimento contínuo. Use steps(8)'}
              </p>
            </div>
          `;
        } else if (chall.id === 'ch-css-crt') {
          const hasMixBlend = userVal.toLowerCase().includes('mix-blend-mode');
          let chosenMode = 'normal';
          const match = userVal.toLowerCase().match(/mix-blend-mode\s*:\s*([a-z\-]+)/);
          if (match && match[1]) {
            chosenMode = match[1];
          }
          previewBox.innerHTML = `
            <div class="relative w-full h-24 bg-[#0a0a0c] border border-slate-800 rounded-lg overflow-hidden flex flex-col justify-between p-3">
              <div class="game-screen-mock flex flex-col justify-between h-full z-10">
                <span class="text-[10px] text-emerald-400 font-mono font-bold uppercase flex items-center gap-1.5">
                  <span class="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-ping"></span>
                  GALAXY_COMMANDER_V1
                </span>
                <span class="text-xs text-white font-bold ml-4">HP: 100/100</span>
              </div>
              <div class="crt-overlay absolute inset-0 z-20 pointer-events-none opacity-80" style="background: repeating-linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.45) 50%), repeating-linear-gradient(90deg, rgba(255, 0, 0, 0.05), rgba(0, 255, 0, 0.02), rgba(0, 0, 255, 0.05)); background-size: 100% 3px, 5px 100%; mix-blend-mode: ${chosenMode};"></div>
            </div>
            <p class="text-[9px] font-mono text-center text-indigo-400 font-bold mt-1.5 uppercase">CRT Overlay (.crt-overlay)</p>
            <p class="text-[8px] text-slate-500 font-mono text-center mt-0.5">${hasMixBlend ? `Modo de mistura ativo: <span class="text-emerald-400 font-bold font-mono">${chosenMode}</span>` : 'Faltando mix-blend-mode para mesclar do CRT'}</p>
          `;
        } else {
          previewBox.innerHTML = `
            <style>
              ${userVal}
            </style>
            <div class="flex items-center gap-2 p-2 justify-center bg-[#050508] border border-white/5 rounded">
              <div class="game-actor p-2 bg-indigo-600 border border-indigo-400 text-white rounded text-[10px] font-mono font-bold animate-pulse">
                <span>🛡️ .game-actor</span>
              </div>
            </div>
            <span class="text-[8px] text-slate-500 font-mono block text-center mt-1">Estilos CSS injetados</span>
          `;
        }
      } else if (state.selectedLanguage === 'js') {
        if (chall.id === 'ch-js-loop') {
          const hasAnimation = userVal.toLowerCase().includes('requestanimationframe');
          const hasLoop = userVal.toLowerCase().includes('gameloop');
          
          previewBox.innerHTML = `
            <div class="flex flex-col items-center justify-center gap-2 p-2">
              <div class="flex items-center gap-1.5">
                <span class="w-2.5 h-2.5 rounded-full ${hasAnimation && hasLoop ? 'bg-emerald-500 animate-ping' : 'bg-rose-500'}"></span>
                <span class="text-[10px] font-bold font-mono text-slate-350 uppercase">
                  ${hasAnimation && hasLoop ? 'LOOP PRINCIPAL ALIMENTADO' : 'LOOP PARADO / OFFLINE'}
                </span>
              </div>
              <div class="font-mono text-[8px] text-slate-400 bg-[#060608] px-2.5 py-1 rounded border border-white/5 w-full text-center">
                ${hasAnimation && hasLoop 
                  ? '<span class="text-emerald-400 font-bold animate-pulse">> Ticker @ 60 FPS Ativo (requestAnimationFrame)</span>' 
                  : '> Aguardando chamada recursiva de gameLoop...'}
              </div>
            </div>
          `;
        } else if (chall.id === 'ch-js-aabb') {
          const clean = userVal.toLowerCase().replace(/\s+/g, '');
          const correctMath = clean.includes('player.x+player.w') || clean.includes('x+w') || clean.includes('player.x+w') || (clean.includes('x') && clean.includes('+') && clean.includes('w'));
          
          previewBox.innerHTML = `
            <div class="flex flex-col items-center justify-center p-2">
              <div class="relative w-full h-12 bg-black/60 border border-slate-800 rounded flex items-center justify-center">
                <div class="absolute left-4 top-2 bottom-2 w-16 bg-indigo-500/20 border border-indigo-500/40 rounded flex items-center justify-center p-1 text-[8px] text-indigo-300 font-mono">
                  x: 16 (w: 64)
                </div>
                ${correctMath ? `
                  <div class="absolute left-20 bottom-1 top-1 w-0.5 bg-emerald-400 animate-pulse flex items-center">
                    <span class="text-[7px] text-emerald-400 font-mono font-bold bg-[#0A0A0B]/90 border border-emerald-500/30 px-1 rounded -translate-y-5 -translate-x-1/2 whitespace-nowrap">Borda Direita = 80! (OK)</span>
                  </div>
                ` : ''}
              </div>
              <p class="text-[9px] font-mono mt-1.5 text-indigo-400 uppercase font-bold">Simulador de Box Model AABB</p>
              <p class="text-[8px] text-slate-500 font-mono text-center mt-0.5">
                ${correctMath ? '✓ Borda direita calculada de forma perfeita!' : 'Pratique a fórmula acima para revelar a borda direita...'}
              </p>
            </div>
          `;
        } else if (chall.id === 'ch-js-lerp') {
          const isCorrect = userVal.toLowerCase().replace(/\s+/g, '').includes('playerx-camerax') && userVal.toLowerCase().includes('0.1');
          
          previewBox.innerHTML = `
            <div class="flex flex-col items-center justify-center p-2 w-full">
              <div class="relative w-full h-12 bg-[#050508] border border-slate-800 rounded overflow-hidden">
                <div class="absolute left-1/4 top-1/2 -translate-y-1/2 w-3 h-3 bg-indigo-500 rounded-full flex items-center justify-center text-[7px]" style="animation: slide 3s infinite ease-in-out;">👾</div>
                <!-- Camera dot following target -->
                <div class="absolute left-1/4 top-1/2 -translate-y-1/2 w-5 h-5 border border-dashed ${isCorrect ? 'border-emerald-400 animate-pulse' : 'border-rose-400'} rounded-lg" style="animation: ${isCorrect ? 'slide-smooth 3s infinite ease-in-out' : 'slide 3s infinite ease-in-out'};"></div>
              </div>
              <style>
                @keyframes slide {
                  0%, 100% { left: 10%; }
                  50% { left: 80%; }
                }
                @keyframes slide-smooth {
                  0%, 100% { left: 15%; } /* simulated lerp lag */
                  25% { left: 35%; }
                  50% { left: 75%; }
                  75% { left: 55%; }
                }
              </style>
              <p class="text-[9px] font-mono mt-1.5 text-indigo-400 uppercase font-bold">Simulação de Câmera LERP</p>
              <p class="text-[8px] text-slate-500 font-mono text-center mt-0.5">
                ${isCorrect ? '✓ Câmera cinemática deslizando suavemente!' : 'Digite a fórmula correta de atualização do LERP...'}
              </p>
            </div>
          `;
        } else {
          previewBox.innerHTML = `
            <div class="bg-black/90 p-3 rounded border border-white/5 font-mono text-[9px] text-[#A5B4FC] leading-relaxed w-full">
              <div class="flex items-center justify-between text-indigo-400 border-b border-white/5 pb-1 mb-1 font-bold">
                <span>🖥️ Interpretador Sandbox Javascript</span>
                <span class="text-emerald-400 animate-pulse">● EXEC_LIVE</span>
              </div>
              <pre class="text-indigo-200 mt-1 font-mono whitespace-pre-wrap">${userVal}</pre>
            </div>
          `;
        }
      }
    };

    textarea.addEventListener('input', (e) => {
      state.challengeCode = e.target.value;
      updatePreview();
    });

    // Reset editor action
    document.getElementById('clear-ide-btn').addEventListener('click', () => {
      state.challengeCode = chall.initialCode;
      textarea.value = chall.initialCode;
      state.challengeFeedback = null;
      document.getElementById('ide-feedback-box').innerHTML = '';
      updatePreview();
    });

    // Execution check click binding
    document.getElementById('run-challenge-test-btn').addEventListener('click', runChallengeTests);

    // Initial preview execution
    updatePreview();

    // Retain feedback box display if exits
    drawChallengeFeedback();
  }

  if (window.lucide) window.lucide.createIcons();
}

// Render dynamic feedback overlays for sandbox test runners
function drawChallengeFeedback() {
  const box = document.getElementById('ide-feedback-box');
  if (!box) return;
  if (!state.challengeFeedback) {
    box.innerHTML = '';
    return;
  }

  const fd = state.challengeFeedback;
  box.innerHTML = `
    <div class="p-3.5 rounded-lg border flex items-start gap-2.5 text-xs font-mono transition-all ${
      fd.success 
        ? 'bg-emerald-500/5 border-emerald-500/20 text-emerald-300' 
        : 'bg-rose-500/5 border-rose-500/25 text-rose-300'
    }">
      <i data-lucide="${fd.success ? 'check-circle-2' : 'alert-circle'}" class="${fd.success ? 'text-emerald-400' : 'text-rose-450'} w-4 h-4 shrink-0 mt-0.5"></i>
      <div>
        <strong class="${fd.success ? 'text-emerald-400' : 'text-rose-400'}">
          ${fd.success ? '🏆 TESTE APROVADO!' : '❌ REQUISITO EM FALTA:'}
        </strong>
        <p class="mt-1 leading-relaxed">${fd.message}</p>
      </div>
    </div>
  `;
  if (window.lucide) window.lucide.createIcons();
}

// Render dynamic active interactive simulated environments
function drawActiveWorkshopSimulator(config) {
  const container = document.getElementById('live-demo-viewport');
  if (!container) return;
  
  container.innerHTML = '';

  if (!config) return;

  const type = config.type;
  const p = config.params || {};

  if (type === 'canvas') {
    const isHtml = (state.selectedLanguage === 'html');
    const lesson = getActiveLesson();

    container.innerHTML = `
      <div class="flex flex-col justify-between h-full w-full">
        <p class="text-[10px] text-slate-500 font-mono">// ${isHtml ? 'Engine de Renderização de Interface' : 'Canvas 2D renderizado'}</p>
        <div class="border border-white/10 bg-[#16161D] rounded p-4 flex items-center justify-center relative flex-grow my-1 overflow-auto max-h-[110px] w-full">
          <div id="canvas-subview-render" class="w-full text-center"></div>
        </div>
        <span class="text-[8px] text-slate-600 font-mono text-right">${isHtml ? 'Preview Render (HTML5)' : 'Render Context: 2D'}</span>
      </div>
    `;

    const sub = document.getElementById('canvas-subview-render');

    if (p.drawSprite) {
      sub.innerHTML = `
        <div class="flex flex-col items-center">
          <div class="w-10 h-10 bg-indigo-500 relative rounded flex items-center justify-center bounce-sprite">
            <div class="w-2 h-2 bg-white rounded-full absolute top-2 left-2"></div>
            <div class="w-2 h-2 bg-white rounded-full absolute top-2 right-2"></div>
          </div>
          <span class="text-[9px] font-mono mt-2 text-slate-400">Hero Sprite Carregado</span>
        </div>
      `;
    } else if (p.useDataAttr) {
      sub.innerHTML = `
        <div class="text-center font-mono">
          <p class="text-[10px] text-slate-300 bg-[#0A0A0B] px-2.5 py-1.5 rounded border border-white/10">
            Dataset: <span class="text-indigo-400 font-bold">dataset.damage = 50</span>
          </p>
        </div>
      `;
    } else if (p.audioTrigger) {
      sub.innerHTML = `
        <div class="flex flex-col items-center gap-1.5">
          <button id="trigger-sound-inline-btn" class="px-3.5 py-1 bg-indigo-500 hover:bg-indigo-600 rounded text-[10px] text-white cursor-pointer active:scale-95 transition-all font-semibold">
            🔊 Tocar Som (Coin.wav)
          </button>
          <span class="text-[8px] text-slate-500 font-mono">Simulação de Buffer Audio</span>
        </div>
      `;
      document.getElementById('trigger-sound-inline-btn').addEventListener('click', () => {
        showToast('Bip! Executando trigger de som e efeito sonoro nativo... 🔊', 'info');
      });
    } else if (p.offscreenText) {
      sub.innerHTML = `
        <span class="text-xs text-indigo-400 animate-pulse font-mono font-bold">
          ${p.offscreenText}
        </span>
      `;
    } else if (p.showAABBDemo) {
      sub.innerHTML = `
        <div class="relative w-full h-14 flex items-center justify-around gap-6">
          <div class="w-8 h-8 bg-indigo-600/20 border border-indigo-500/40 text-[8px] flex items-center justify-center text-indigo-200 font-bold rounded">Colisor</div>
          <div class="w-8 h-8 bg-rose-500/20 border border-rose-400/40 text-[8px] flex items-center justify-center text-rose-250 font-bold animate-ping rounded">Alvo</div>
        </div>
      `;
    } else if (p.platformPhysics) {
      sub.innerHTML = `
        <div class="flex flex-col gap-2 w-40 pt-1">
          <div class="h-1 bg-white/20 w-full rounded"></div>
          <div class="flex justify-between text-[8px] text-slate-500 font-mono w-full">
            <span>VelY: +9.8 (Gravity)</span>
            <span>Friction: 0.98</span>
          </div>
        </div>
      `;
    } else if (lesson) {
      if (state.selectedLanguage === 'html') {
        const htmlContent = lesson.codeExample || '';
        
        if (htmlContent.includes('<img')) {
          sub.innerHTML = `
            <div class="flex flex-col items-center gap-1.5 p-1">
              <div class="relative w-12 h-12 bg-indigo-500/10 border border-indigo-500/30 rounded-xl flex items-center justify-center animate-bounce">
                <span class="text-2xl">👾</span>
                <span class="absolute -bottom-1 -right-1 bg-emerald-500 text-[7px] text-white font-mono px-1 rounded border border-emerald-400 font-bold uppercase">PNG</span>
              </div>
              <span class="text-[9px] text-indigo-400 font-mono uppercase tracking-wide">Sprite Carregado (hero.png)</span>
              <p class="text-[8px] text-slate-500 font-mono">Tag &lt;img&gt; renderizada com sucesso</p>
            </div>
          `;
        } else if (htmlContent.includes('<audio') || htmlContent.includes('<video')) {
          sub.innerHTML = `
            <div class="flex flex-col items-center gap-2 bg-[#0F0F12] p-3 rounded-xl border border-white/10 w-48 shadow-lg">
              <div class="flex items-center gap-2 w-full justify-between">
                <span class="flex items-center gap-1 text-[9px] font-mono text-emerald-400 font-bold uppercase tracking-wider">
                  <span class="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                  BGM Player
                </span>
                <span class="text-[8px] text-slate-500 font-mono">0:24 / 2:15</span>
              </div>
              <div class="w-full bg-white/5 rounded-full h-1 relative overflow-hidden">
                <div class="absolute inset-y-0 left-0 bg-emerald-400 rounded-full" style="width: 25%"></div>
              </div>
              <div class="flex gap-3 text-slate-400 text-xs">
                <span class="cursor-pointer hover:text-indigo-405 text-[10px]">⏮</span>
                <span class="cursor-pointer hover:text-indigo-405 text-indigo-400 font-bold text-[10px]">⏸</span>
                <span class="cursor-pointer hover:text-indigo-405 text-[10px]">⏭</span>
              </div>
            </div>
          `;
        } else if (htmlContent.includes('<canvas')) {
          sub.innerHTML = `
            <div class="flex flex-col items-center gap-1.5 w-full max-w-[200px]">
              <div class="w-full h-12 bg-[#050508] border border-dashed border-indigo-500/40 rounded flex items-center justify-center relative overflow-hidden">
                <svg class="absolute inset-0 w-full h-full text-indigo-500/10" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                      <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" stroke-width="0.5"/>
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#grid)"/>
                  <circle cx="50%" cy="50%" r="20" fill="none" stroke="currentColor" stroke-width="0.5" stroke-dasharray="2,2"/>
                  <line x1="0" y1="50%" x2="100%" y2="50%" stroke="currentColor" stroke-width="0.5"/>
                </svg>
                <span class="text-[9px] text-indigo-400 font-bold font-mono tracking-widest animate-pulse z-10 uppercase">CANVAS RADAR ACTIVE</span>
              </div>
              <span class="text-[8px] text-slate-500 font-mono">Resolução Nativa: 800x600</span>
            </div>
          `;
        } else {
          sub.innerHTML = htmlContent;
        }
      } else if (state.selectedLanguage === 'css') {
        const hasCustomSelector = lesson.codeExample.includes('.game-actor') || lesson.codeExample.includes('#') || lesson.codeExample.includes('body');
        sub.innerHTML = `
          <div class="flex flex-col items-center gap-1.5 p-1 w-full">
            <style>
              #canvas-subview-render .preview-css-host {
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                background: rgba(99, 102, 241, 0.03);
                border: 1px dashed rgba(99, 102, 241, 0.2);
                padding: 10px;
                border-radius: 8px;
                width: 100%;
              }
              #canvas-subview-render .game-actor-demo {
                background: #4f46e5;
                border: 1.5px solid #818cf8;
                border-radius: 6px;
                padding: 6px 12px;
                font-size: 10px;
                color: #ffffff;
                font-family: 'JetBrains Mono', monospace;
                font-weight: 700;
                box-shadow: 0 4px 12px rgba(99, 102, 241, 0.2);
                transition: all 0.3s ease;
              }
              ${hasCustomSelector ? lesson.codeExample.replace(/\.game-actor(?!\w)/g, '#canvas-subview-render .game-actor-demo') : `#canvas-subview-render .game-actor-demo { ${lesson.codeExample} }`}
            </style>
            <div class="preview-css-host">
              <div class="game-actor-demo game-actor flex items-center gap-2 animate-pulse">
                <span>🛡️</span>
                <span>GAME_BODY_HUD</span>
              </div>
            </div>
            <span class="text-[8.5px] text-indigo-400 font-mono uppercase tracking-wider">Seletor CSS Ativo</span>
          </div>
        `;
      } else {
        sub.innerHTML = `
          <div class="flex flex-col gap-1 w-full text-left">
            <div class="bg-black/80 p-3 rounded-lg border border-white/10 font-mono text-[9px] leading-relaxed max-h-[85px] overflow-y-auto shadow-inner">
              <div class="flex items-center justify-between text-indigo-400 border-b border-white/5 pb-1 mb-1 font-bold uppercase tracking-wider text-[8px]">
                <span>🖥️ Compilador GameDEV V8</span>
                <span class="text-emerald-400 animate-pulse">● EXEC_OK</span>
              </div>
              <span class="text-slate-500">> Inicializando modulo...</span><br>
              <span class="text-[#A5B4FC]">> Executando script: <strong>${lesson.id}</strong></span><br>
              <pre class="text-emerald-400 font-bold text-[8.5px] my-1 font-mono whitespace-pre-wrap">${lesson.codeExample}</pre>
              <span class="text-amber-400 font-semibold">> console.log retorno: Compilado sem avisos</span>
            </div>
          </div>
        `;
      }
    } else {
      sub.innerHTML = `
        <span class="text-xs text-indigo-400 font-mono font-semibold">Engine de Render pronta</span>
      `;
    }

  } else if (type === 'healthbar') {
    container.innerHTML = `
      <div class="flex flex-col justify-between h-full">
        <p class="text-[10px] text-slate-500 font-mono">// Interface HUD Reativa</p>
        
        <div class="bg-[#16161D] p-2.5 rounded border border-white/10">
          <div class="flex justify-between items-center text-[10px] mb-1.5 font-mono">
            <span>Inimigo: Slime King</span>
            <span id="slime-hp-text" class="text-rose-450 font-bold">${state.slimeHealth} / 100 HP</span>
          </div>
          <div class="w-full bg-[#0A0A0B] h-3.5 rounded border border-white/10 overflow-hidden relative">
            <div id="slime-hp-fill" class="h-full bg-gradient-to-r from-rose-500 to-red-650 transition-all duration-300" style="width: ${state.slimeHealth}%"></div>
          </div>
        </div>

        <div class="flex gap-2 justify-center mt-1">
          <button id="slime-hit-btn" class="px-2.5 py-1 bg-rose-500/20 hover:bg-rose-500/30 active:scale-95 text-rose-350 border border-rose-500/30 rounded text-[9px] cursor-pointer font-semibold">
            Dar Golpe (-20 HP)
          </button>
          <button id="slime-revive-btn" class="px-2.5 py-1 bg-indigo-500/20 hover:bg-indigo-500/30 active:scale-95 text-indigo-300 border border-indigo-500/30 rounded text-[9px] cursor-pointer font-semibold">
            Reviver
          </button>
        </div>
      </div>
    `;

    document.getElementById('slime-hit-btn').addEventListener('click', () => {
      state.slimeHealth = Math.max(0, state.slimeHealth - 20);
      document.getElementById('slime-hp-text').textContent = `${state.slimeHealth} / 100 HP`;
      document.getElementById('slime-hp-fill').style.width = `${state.slimeHealth}%`;
    });

    document.getElementById('slime-revive-btn').addEventListener('click', () => {
      state.slimeHealth = 100;
      document.getElementById('slime-hp-text').textContent = `${state.slimeHealth} / 100 HP`;
      document.getElementById('slime-hp-fill').style.width = `${state.slimeHealth}%`;
    });

  } else if (type === 'css-cursor') {
    container.innerHTML = `
      <div class="flex flex-col justify-between h-full">
        <p class="text-[10px] text-slate-500 font-mono">// Passe o mouse para testar cursor</p>
        <div class="bg-indigo-500/10 hover:bg-indigo-600/15 border border-dashed border-indigo-500/30 rounded p-4 text-center cursor-crosshair transition-all flex items-center justify-center flex-col h-24 my-1">
          <i data-lucide="mouse-pointer" class="w-5 h-5 text-indigo-400 bounce-sprite mb-1"></i>
          <span class="text-[10px] font-mono text-indigo-300 font-bold uppercase tracking-wider">CURSOR INTERATIVO ATIVO</span>
          <span class="text-[8px] text-slate-500 mt-1">Simula área de mira customizada</span>
        </div>
      </div>
    `;

  } else if (type === 'shake') {
    container.innerHTML = `
      <div class="flex flex-col justify-between h-full w-full">
        <p class="text-[10px] text-slate-500 font-mono">// Feedback Tremor de Câmera</p>
        <div class="flex justify-center my-1.5">
          <div id="shake-target-element" class="w-20 h-10 rounded bg-indigo-600 flex items-center justify-center font-bold text-xs text-white">
            ⚔️ Batalha
          </div>
        </div>
        <button id="trigger-shake-btn" class="w-full py-1.5 bg-indigo-600 hover:bg-indigo-500 text-[10px] text-white rounded font-mono font-semibold tracking-wide active:scale-95 transition-all cursor-pointer">
          Disparar Impacto (Impact)
        </button>
      </div>
    `;

    document.getElementById('trigger-shake-btn').addEventListener('click', () => {
      const el = document.getElementById('shake-target-element');
      el.classList.add('shake-active');
      setTimeout(() => {
        el.classList.remove('shake-active');
      }, 800);
    });

  } else if (type === 'scanlines') {
    container.innerHTML = `
      <div class="flex flex-col justify-between h-full">
        <div class="flex justify-between items-center">
          <p class="text-[10px] text-slate-500 font-mono">// Filtro Scanlines Retro</p>
          <button id="toggle-crt-effect-btn" class="px-2 py-0.5 bg-[#16161D] text-[8px] border border-white/10 rounded text-slate-300 font-mono">
            ${state.crtActive ? 'Desativar CRT' : 'Ativar CRT'}
          </button>
        </div>
        
        <div class="relative flex-1 bg-gradient-to-br from-[#0A0A0B] via-[#121217] to-[#16161D] rounded border border-white/10 flex items-center justify-center overflow-hidden my-1">
          <!-- CRT Overlay -->
          <div id="crt-scanline-mesh" class="absolute inset-0 pointer-events-none opacity-40 mix-blend-overlay ${state.crtActive ? 'crt-scanlines' : ''}"></div>

          <span id="crt-status-text" class="text-[11px] font-mono text-indigo-400 font-bold tracking-widest uppercase animate-pulse">
            ${state.crtActive ? '🎮 RETRO-GLASS CRT' : 'Mundo Simples'}
          </span>
        </div>
        <span class="text-[8px] text-slate-600 font-mono text-center">Scanline: mix-blend-overlay</span>
      </div>
    `;

    document.getElementById('toggle-crt-effect-btn').addEventListener('click', () => {
      state.crtActive = !state.crtActive;
      const mesh = document.getElementById('crt-scanline-mesh');
      const text = document.getElementById('crt-status-text');
      const btn = document.getElementById('toggle-crt-effect-btn');
      
      if (state.crtActive) {
        mesh.classList.add('crt-scanlines');
        text.textContent = '🎮 RETRO-GLASS CRT';
        btn.textContent = 'Desativar CRT';
      } else {
        mesh.classList.remove('crt-scanlines');
        text.textContent = 'Mundo Simples';
        btn.textContent = 'Ativar CRT';
      }
    });

  } else if (type === 'lights') {
    container.innerHTML = `
      <div class="flex flex-col justify-between h-full">
        <p class="text-[10px] text-slate-500 font-mono">// Lanternas Dinâmicas (Mova o Mouse)</p>
        <div 
          id="spotlight-track-area"
          class="relative flex-1 bg-slate-950 rounded border border-white/10 overflow-hidden my-1 flex items-center justify-center cursor-none h-24"
        >
          <!-- Darkness radial cutout overlay -->
          <div id="spotlight-radial-mask" class="absolute inset-0 pointer-events-none" style="background: radial-gradient(circle 35px at 100px 50px, transparent 100%, rgba(5,5,10,0.95) 100%)"></div>
          
          <span class="text-[10px] text-indigo-455 font-mono font-bold">MONSTRO ESCONDIDO! 👹</span>
        </div>
      </div>
    `;

    const trackArea = document.getElementById('spotlight-track-area');
    trackArea.addEventListener('mousemove', (e) => {
      const rect = trackArea.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const mask = document.getElementById('spotlight-radial-mask');
      if (mask) {
        mask.style.background = `radial-gradient(circle 35px at ${x}px ${y}px, transparent 100%, rgba(5,5,10,0.95) 100%)`;
      }
    });

  } else if (type === 'gameloop') {
    container.innerHTML = `
      <div class="flex flex-col justify-between h-full">
        <p class="text-[10px] text-slate-500 font-mono">// Loop Contínuo Ativo</p>
        <div class="bg-[#16161D] border border-white/10 p-2 rounded">
          <div class="flex justify-between items-center text-[10px] font-mono">
            <span class="text-indigo-400 font-bold">Estado: ATIVO</span>
            <span id="gameloop-count-span">Contagem: ${state.gameLoopFrame}</span>
          </div>
          <div class="w-full bg-[#0A0A0B] rounded h-1 mt-1 relative overflow-hidden">
            <div id="gameloop-progressbar-fill" class="absolute h-full w-4 bg-indigo-500 transition-all duration-75" style="left: ${state.gameLoopFrame}%"></div>
          </div>
        </div>
        
        <div class="flex items-center gap-2 justify-between">
          <span class="text-[8px] text-slate-500">Aceleração de Frames:</span>
          <div class="flex gap-1" id="gameloop-speeds-selector">
            <button data-speed="1" class="px-1.5 py-0.5 rounded text-[8px] border cursor-pointer ${state.gameLoopSpeed === 1 ? 'bg-indigo-600 text-white border-indigo-500' : 'bg-[#16161D] border-white/10 text-slate-400'}">1x</button>
            <button data-speed="2" class="px-1.5 py-0.5 rounded text-[8px] border cursor-pointer ${state.gameLoopSpeed === 2 ? 'bg-indigo-600 text-white border-indigo-500' : 'bg-[#16161D] border-white/10 text-slate-400'}">2x</button>
            <button data-speed="4" class="px-1.5 py-0.5 rounded text-[8px] border cursor-pointer ${state.gameLoopSpeed === 4 ? 'bg-indigo-600 text-white border-indigo-500' : 'bg-[#16161D] border-white/10 text-slate-400'}">4x</button>
          </div>
        </div>
      </div>
    `;

    const btnsNode = document.querySelectorAll('#gameloop-speeds-selector button');
    btnsNode.forEach(btn => {
      btn.addEventListener('click', (e) => {
        const speed = parseInt(e.target.dataset.speed, 10);
        state.gameLoopSpeed = speed;
        
        // Redraw only buttons
        btnsNode.forEach(b => {
          const s = parseInt(b.dataset.speed, 10);
          b.className = s === speed
            ? 'px-1.5 py-0.5 rounded text-[8px] border cursor-pointer bg-indigo-600 text-white border-indigo-500'
            : 'px-1.5 py-0.5 rounded text-[8px] border cursor-pointer bg-[#16161D] border-white/10 text-slate-400';
        });
      });
    });

  } else if (type === 'movement') {
    container.innerHTML = `
      <div class="flex flex-col justify-between h-full">
        <p class="text-[10px] text-slate-500 font-mono">// Joystick / Teclas do Teclado</p>
        
        <div class="relative flex-1 bg-[#0A0A0B] rounded border border-white/10 overflow-hidden my-1" id="wizard-clipping-viewport">
          <!-- Wizard element -->
          <div id="wizard-actor" class="absolute text-base transition-all duration-100 ease-out" style="left: ${state.wizardPos.x}px; top: ${state.wizardPos.y}px">🧙‍♂️</div>

          <div id="wizard-tutorial-alert" class="absolute inset-x-0 bottom-1 flex justify-center text-[8.5px] text-[#A5B4FC] font-mono animate-bounce text-center ${state.wizardHasMoved ? 'hidden' : ''}">
            Use as setas do teclado (↑ ↓ ← →) nesta caixa!
          </div>

          <span id="wizard-coords" class="absolute right-2 top-1 text-[8px] text-slate-500 font-mono">
            X: ${state.wizardPos.x} | Y: ${state.wizardPos.y}
          </span>
        </div>

        <div class="flex justify-between items-center">
          <span class="text-[8px] text-slate-500">Mova com cliques:</span>
          <div class="flex gap-1">
            <button data-dir="L" class="jstick-btn w-5 h-5 bg-[#16161D] border border-white/10 hover:bg-[#202029] active:scale-90 select-none cursor-pointer rounded text-[10px] flex items-center justify-center font-bold text-indigo-400">←</button>
            <button data-dir="U" class="jstick-btn w-5 h-5 bg-[#16161D] border border-white/10 hover:bg-[#202029] active:scale-90 select-none cursor-pointer rounded text-[10px] flex items-center justify-center font-bold text-indigo-400">↑</button>
            <button data-dir="D" class="jstick-btn w-5 h-5 bg-[#16161D] border border-white/10 hover:bg-[#202029] active:scale-90 select-none cursor-pointer rounded text-[10px] flex items-center justify-center font-bold text-indigo-400">↓</button>
            <button data-dir="R" class="jstick-btn w-5 h-5 bg-[#16161D] border border-white/10 hover:bg-[#202029] active:scale-90 select-none cursor-pointer rounded text-[10px] flex items-center justify-center font-bold text-indigo-400">→</button>
          </div>
        </div>
      </div>
    `;

    const moveWizard = (dir) => {
      state.wizardHasMoved = true;
      document.getElementById('wizard-tutorial-alert')?.classList.add('hidden');
      const step = 20;

      if (dir === 'L') state.wizardPos.x = Math.max(10, state.wizardPos.x - step);
      if (dir === 'R') state.wizardPos.x = Math.min(265, state.wizardPos.x + step);
      if (dir === 'U') state.wizardPos.y = Math.max(10, state.wizardPos.y - step);
      if (dir === 'D') state.wizardPos.y = Math.min(130, state.wizardPos.y + step);

      const actor = document.getElementById('wizard-actor');
      const coords = document.getElementById('wizard-coords');
      if (actor) {
        actor.style.left = `${state.wizardPos.x}px`;
        actor.style.top = `${state.wizardPos.y}px`;
      }
      if (coords) {
        coords.textContent = `X: ${state.wizardPos.x} | Y: ${state.wizardPos.y}`;
      }
    };

    document.querySelectorAll('.jstick-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const d = e.target.dataset.dir;
        moveWizard(d);
      });
    });

    // Handle standard keys while element is active
    document.addEventListener('keydown', (e) => {
      if (state.activeTab !== 'encyclopedia' || state.selectedLanguage !== 'js' || state.selectedDifficulty !== 'beginner') return;
      if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(e.key)) {
        e.preventDefault();
        if (e.key === 'ArrowLeft') moveWizard('L');
        if (e.key === 'ArrowRight') moveWizard('R');
        if (e.key === 'ArrowUp') moveWizard('U');
        if (e.key === 'ArrowDown') moveWizard('D');
      }
    });
  }

  if (window.lucide) window.lucide.createIcons();
}

// --- CREATOR FORM UTILITIES ---
function syncCreatorTab() {
  const isLesson = state.creatorTab === 'lesson';
  const labelTimeXp = document.getElementById('creator-time-xp-label');
  const labelDocHint = document.getElementById('creator-doc-hint-label');
  const btnLesson = document.getElementById('toggle-creator-lesson');
  const btnChall = document.getElementById('toggle-creator-challenge');

  const titleInput = document.getElementById('creator-title-input');
  const timexpInput = document.getElementById('creator-timexp-input');
  const descInput = document.getElementById('creator-desc-input');
  const codeInput = document.getElementById('creator-code-input');
  const dochintInput = document.getElementById('creator-dochint-input');

  if (isLesson) {
    if (btnLesson) btnLesson.className = 'flex-1 py-1.5 text-xs rounded font-mono font-medium cursor-pointer bg-white/10 text-indigo-400';
    if (btnChall) btnChall.className = 'flex-1 py-1.5 text-xs rounded font-mono font-medium cursor-pointer text-slate-500';
    if (labelTimeXp) labelTimeXp.textContent = 'Tempo Estimado (ex: "12 min"):';
    if (timexpInput) timexpInput.placeholder = '12 min';
    if (labelDocHint) labelDocHint.textContent = 'Apostila Completa em Texto (html/markdown):';
    if (dochintInput) dochintInput.placeholder = 'Detalhes aprofundados para o aluno ler...';
  } else {
    if (btnChall) btnChall.className = 'flex-1 py-1.5 text-xs rounded font-mono font-medium cursor-pointer bg-white/10 text-indigo-400';
    if (btnLesson) btnLesson.className = 'flex-1 py-1.5 text-xs rounded font-mono font-medium cursor-pointer text-slate-500';
    if (labelTimeXp) labelTimeXp.textContent = 'Recompensa (XP):';
    if (timexpInput) timexpInput.placeholder = '300';
    if (labelDocHint) labelDocHint.textContent = 'Instruções para Resolução & Dicas:';
    if (dochintInput) dochintInput.placeholder = 'O que o usuário deve escrever no editor?';
  }
  generateAndDisplayJSON();
}

function generateAndDisplayJSON() {
  const isLesson = state.creatorTab === 'lesson';
  
  const titleEl = document.getElementById('creator-title-input');
  const timexpEl = document.getElementById('creator-timexp-input');
  const descEl = document.getElementById('creator-desc-input');
  const codeEl = document.getElementById('creator-code-input');
  const dochintEl = document.getElementById('creator-dochint-input');

  const title = titleEl ? titleEl.value : '';
  const val = timexpEl ? timexpEl.value : '';
  const desc = descEl ? descEl.value : '';
  const code = codeEl ? codeEl.value : '';
  const docHint = dochintEl ? dochintEl.value : '';

  if (isLesson) {
    const obj = {
      id: `custom-lesson-${Date.now()}`,
      title: title || 'Novo Tópico de Exemplo',
      shortDesc: desc || 'Breve introdução didática.',
      difficulty: state.selectedDifficulty,
      estimatedTime: val || '10 min',
      icon: 'tv',
      concept: 'Uso prático de novas estruturas decorativas.',
      codeExample: code || '// código relevante de exemplo',
      liveDemoConfig: { type: 'canvas', params: {} },
      tutorialHTML: docHint || 'Passo a passo sobre o assunto detalhado...'
    };
    state.generatedJSON = JSON.stringify(obj, null, 2);
  } else {
    const obj = {
      id: `custom-chall-${Date.now()}`,
      title: title || 'Novo Desafio',
      shortDesc: desc || 'Explicação do exercício.',
      difficulty: state.selectedDifficulty,
      category: state.selectedLanguage,
      xpValue: parseInt(val, 10) || 120,
      instructions: docHint || 'O que o usuário deve escrever no editor?',
      initialCode: code || '<!-- Comece aqui -->',
      expectedKeywords: ['canvas', 'id'],
      hint: 'Sempre observe a caixa de tags abertas!'
    };
    state.generatedJSON = JSON.stringify(obj, null, 2);
  }

  const jsonOutput = document.getElementById('json-output');
  if (jsonOutput) {
    jsonOutput.textContent = state.generatedJSON;
  }
}

// --- INITIALIZATION ---
function init() {
  console.log('🎮 [GameDEV Base v1.1] Inicializando a enciclopédia...');
  loadProgress();

  // Helper functions for safe event binding
  const safeOnClick = (id, callback) => {
    const el = document.getElementById(id);
    if (el) {
      el.onclick = callback;
    } else {
      console.warn(`Element with ID '${id}' not found for click binding.`);
    }
  };

  const safeAddEvent = (id, event, callback) => {
    const el = document.getElementById(id);
    if (el) {
      el.addEventListener(event, callback);
    } else {
      console.warn(`Element with ID '${id}' not found for event '${event}'.`);
    }
  };

  // Bind Main Search Bar
  safeAddEvent('search-input', 'input', (e) => {
    handleSearch(e.target.value);
  });

  safeAddEvent('clear-search-btn', 'click', () => {
    const searchInput = document.getElementById('search-input');
    if (searchInput) searchInput.value = '';
    handleSearch('');
  });

  // Bind main navigation tabs
  safeOnClick('tab-encyclopedia', () => selectMainTab('encyclopedia'));
  safeOnClick('tab-challenges', () => selectMainTab('challenges'));

  // Bind subtabs language selectors
  ['html', 'css', 'js'].forEach(lang => {
    safeOnClick(`subtab-${lang}`, () => selectLanguageTab(lang));
  });

  // Bind difficulty selectors
  ['all', 'beginner', 'intermediate', 'advanced'].forEach(d => {
    safeOnClick(`diff-btn-${d}`, () => selectDifficulty(d));
  });

  // Bind Content Creator Modal Triggers
  const modal = document.getElementById('creator-modal');
  safeOnClick('dev-export-btn', () => {
    if (modal) {
      modal.classList.remove('hidden');
      state.showCreator = true;
      syncCreatorTab();
    }
  });

  const closeModal = () => {
    if (modal) {
      modal.classList.add('hidden');
      state.showCreator = false;
    }
  };
  safeOnClick('close-creator-btn', closeModal);
  safeOnClick('close-modal-footer-btn', closeModal);

  // Toggles inside creator modal
  safeOnClick('toggle-creator-lesson', () => {
    state.creatorTab = 'lesson';
    syncCreatorTab();
  });
  safeOnClick('toggle-creator-challenge', () => {
    state.creatorTab = 'challenge';
    syncCreatorTab();
  });

  // Generate output live in creator modal
  safeOnClick('generate-json-btn', generateAndDisplayJSON);

  // Inject content directly inside the applet array
  safeOnClick('inject-json-btn', () => {
    generateAndDisplayJSON();
    
    if (!state.generatedJSON) {
      showToast('Por favor, preencha as informações antes de injetar!', 'error');
      return;
    }
    
    try {
      const obj = JSON.parse(state.generatedJSON);
      const isLesson = state.creatorTab === 'lesson';
      
      if (isLesson) {
        if (!ENCYCLOPEDIA_DATA[state.selectedLanguage]) {
          ENCYCLOPEDIA_DATA[state.selectedLanguage] = [];
        }
        ENCYCLOPEDIA_DATA[state.selectedLanguage].push(obj);
        state.selectedLessonId = obj.id;
        state.activeTab = 'encyclopedia';
      } else {
        // Prepare execution tests if missing
        if (!obj.expectedKeywords) {
          obj.expectedKeywords = [];
        }
        if (!obj.testRunner) {
          obj.testRunner = (code) => {
            if (code && code.trim() !== "") {
              return { success: true, message: "Boa tentativa! Seu código simula bem a resposta do exercício!" };
            }
            return { success: false, message: "Insira algum código válido no editor para aprovação." };
          };
        }
        CHALLENGE_DATA.push(obj);
        state.selectedChallengeId = obj.id;
        state.challengeCode = obj.initialCode || '';
        state.challengeFeedback = null;
        state.activeTab = 'challenges';
      }
      
      showToast(`Sucesso! ${isLesson ? 'Novo Tópico' : 'Novo Desafio'} injetado em tempo de execução!`, 'success');
      closeModal();
      
      // Update UI panels complete
      renderUI();
    } catch (e) {
      showToast('Erro ao analisar/injetar o bloco JSON: ' + e.message, 'error');
    }
  });

  // Copy JSON inside creator modal
  safeOnClick('copy-json-btn', () => {
    if (!state.generatedJSON) return;
    navigator.clipboard.writeText(state.generatedJSON);
    
    const label = document.getElementById('copy-json-text');
    if (label) {
      label.textContent = 'Copiado!';
      setTimeout(() => {
        label.textContent = 'Copiar JSON';
      }, 2000);
    }
  });

  // Bind Raw Files Modal Triggers
  const rawModal = document.getElementById('raw-files-modal');
  safeOnClick('raw-files-btn', () => {
    if (rawModal) {
      rawModal.classList.remove('hidden');
    }
  });

  const closeRawModal = () => {
    if (rawModal) {
      rawModal.classList.add('hidden');
    }
  };
  safeOnClick('close-raw-btn', closeRawModal);
  safeOnClick('close-raw-footer-btn', closeRawModal);

  // Copy buttons on raw files modal
  const safeFetchAndCopy = async (filePath, buttonId, defaultLabel) => {
    try {
      const absolutePath = filePath;
      const resp = await fetch(absolutePath);
      if (!resp.ok) throw new Error('Não foi possível carregar o arquivo');
      const text = await resp.text();
      await navigator.clipboard.writeText(text);
      const el = document.getElementById(buttonId);
      if (el) {
        el.textContent = 'Copiado!';
        setTimeout(() => {
          el.textContent = defaultLabel;
        }, 1500);
      }
    } catch (err) {
      console.error('Failed to copy file code: ', err);
      const el = document.getElementById(buttonId);
      if (el) {
        el.textContent = 'Erro!';
        setTimeout(() => {
          el.textContent = defaultLabel;
        }, 1500);
      }
    }
  };

  safeOnClick('copy-js-btn', () => safeFetchAndCopy('./index.js', 'copy-js-btn', 'Copiar'));
  safeOnClick('copy-conteudos-btn', () => safeFetchAndCopy('./conteudos.js', 'copy-conteudos-btn', 'Copiar'));
  safeOnClick('copy-html-btn', () => safeFetchAndCopy('./index.html', 'copy-html-btn', 'Copiar'));
  safeOnClick('copy-css-btn', () => safeFetchAndCopy('./index.css', 'copy-css-btn', 'Copiar'));

  // Dynamically map direct links of raw files modal using current meta context URL
  const resolveHref = (id, filePath) => {
    const el = document.getElementById(id);
    if (el) {
      el.href = filePath;
    }
  };
  resolveHref('raw-link-js', './index.js');
  resolveHref('raw-link-conteudos', './conteudos.js');
  resolveHref('raw-link-html', './index.html');
  resolveHref('raw-link-css', './index.css');

  // Start continuous frame runner for looping demos
  animationFrameId = requestAnimationFrame(runGameLoopTimer);

  // Synced default structures render
  syncDefaultActiveItems();
  renderUI();
}

// Start application when DOM Content is loaded or immediately if already loaded
if (document.readyState === 'loading') {
  window.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
