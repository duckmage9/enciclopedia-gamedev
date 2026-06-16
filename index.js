/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

// --- DATASET: GameDEV Encyclopedia & Challenges ---
import { ENCYCLOPEDIA_DATA, CHALLENGE_DATA } from './conteudos.js';

// --- CORE APP STATE ---
let state = {
  activeTab: 'encyclopedia', // 'encyclopedia' | 'challenges'
  selectedLanguage: 'html',  // 'html' | 'css' | 'js'
  selectedDifficulty: 'all', // 'all' | 'beginner' | 'intermediate' | 'advanced'
  searchQuery: '',
  selectedLessonId: 'html-beg-canvas',
  selectedChallengeId: 'ch-html-canvas',
  
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
      alert('Código boilerplate copiado!');
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

        <!-- Interactive Sandbox IDE Textarea inputs -->
        <div class="flex flex-col gap-2">
          <div class="flex justify-between items-center text-xs font-mono text-slate-400">
            <span>🖥️ Editor Interativo do Aluno:</span>
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
          <span class="text-[10px] text-slate-500 font-mono">Dica rápida: ${chall.hint}</span>
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
    textarea.addEventListener('input', (e) => {
      state.challengeCode = e.target.value;
    });

    // Reset editor action
    document.getElementById('clear-ide-btn').addEventListener('click', () => {
      state.challengeCode = chall.initialCode;
      textarea.value = chall.initialCode;
      state.challengeFeedback = null;
      document.getElementById('ide-feedback-box').innerHTML = '';
    });

    // Execution check click binding
    document.getElementById('run-challenge-test-btn').addEventListener('click', runChallengeTests);

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
    container.innerHTML = `
      <div class="flex flex-col justify-between h-full w-full">
        <p class="text-[10px] text-slate-500 font-mono">// Canvas 2D renderizado</p>
        <div class="border border-white/10 bg-[#16161D] rounded p-4 flex items-center justify-center relative flex-grow my-1">
          <div id="canvas-subview-render"></div>
        </div>
        <span class="text-[8px] text-slate-600 font-mono text-right">Render Context: 2D</span>
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
        alert('Bip! Executando trigger de som e efeito sonoro nativo...');
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
    } else {
      sub.innerHTML = `
        <span class="text-xs text-indigo-400 font-mono font-semibold">800x600 Pixels Pronto</span>
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
      const resp = await fetch(filePath);
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
