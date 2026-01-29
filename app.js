const translations = {
  es: {
    time: 'Tiempo',
    theme: 'Tema',
    players: 'Jugadores',
    impostors: 'Número de impostores',
    startRound: 'Empezar ronda',
    passDevice: 'Pásale este dispositivo a:',
    viewRole: 'Ver rol',
    accept: 'Aceptar',
    impostor: 'Eres el impostor 😈',
    word: 'Palabra',
    debateTime: 'Tiempo de debate',
    unlimited: 'Ilimitado',
    viewRoles: 'Ver roles',
    nextWord: 'Siguiente palabra',
    endRound: 'Acabar ronda',
    roles: 'Roles',
    close: 'Cerrar',
    impostorLabel: 'Impostor',
    impostorsLabel: 'Impostores',
    playerPlaceholder: 'Jugador',
    duplicatePlayer: 'El jugador "{name}" ya existe',
    startsFirstPrefix: 'Empieza primero',
    random: '🎲 Aleatorio',
    easy: '🟢 Fáciles',
    medium: '🟡 Medias',
    hard: '🔴 Difíciles',
    chaotic: '🤪 Caóticas',
    family: '👨‍👩‍👧 Familiares',
    categories: {
      comida: 'Comida',
      animales: 'Animales',
      objetos_casa: 'Objetos de casa',
      transporte: 'Medios de transporte',
      ropa: 'Ropa',
      lugares_comunes: 'Lugares comunes',
      colores: 'Colores',
      deportes: 'Deportes',
      juguetes_juegos: 'Juguetes / juegos',
      profesiones: 'Profesiones',
      peliculas_famosas: 'Películas famosas',
      instrumentos_musicales: 'Instrumentos musicales',
      paises_ciudades: 'Países / ciudades',
      tecnologia: 'Tecnología',
      fiestas_celebraciones: 'Fiestas y celebraciones',
      vacaciones: 'Vacaciones',
      tiendas_marcas: 'Tiendas / marcas',
      postres_dulces: 'Postres y dulces',
      conceptos_abstractos: 'Conceptos abstractos',
      emociones: 'Emociones',
      epocas_historicas: 'Épocas históricas',
      libros_literatura: 'Libros / literatura',
      personajes_famosos: 'Personajes famosos',
      ciencia: 'Ciencia',
      ley_politica: 'Ley / política',
      espacio: 'Espacio',
      suenos_pesadillas: 'Sueños / pesadillas',
      cosas_desagradables: 'Cosas desagradables',
      momentos_incomodos: 'Momentos incómodos',
      excusas_tipicas: 'Excusas típicas',
      mentiras_comunes: 'Mentiras comunes',
      cosas_cuando_nadie_mira: 'Cosas que haces cuando nadie mira',
      cosas_que_se_pierden: 'Cosas que siempre se pierden',
      cosas_cansado: 'Cosas que haces cuando estás cansado',
      superheroes: 'Superhéroes',
      animales_fantasticos: 'Animales fantásticos',
      cuentos_fantasia: 'Cuentos y fantasía',
      cosas_del_cole: 'Cosas del cole',
      chucherias: 'Chucherías',
      juguetes: 'Juguetes',
      dibujos_animados: 'Dibujos animados'
    }
  },
  en: {
    time: 'Time',
    theme: 'Theme',
    players: 'Players',
    impostors: 'Number of impostors',
    startRound: 'Start round',
    passDevice: 'Pass this device to:',
    viewRole: 'View role',
    accept: 'Accept',
    impostor: 'You are the impostor 😈',
    word: 'Word',
    debateTime: 'Debate time',
    unlimited: 'Unlimited',
    viewRoles: 'View roles',
    nextWord: 'Next word',
    endRound: 'End round',
    roles: 'Roles',
    close: 'Close',
    impostorLabel: 'Impostor',
    impostorsLabel: 'Impostors',
    playerPlaceholder: 'Player',
    duplicatePlayer: 'Player "{name}" already exists',
    startsFirstPrefix: 'Starts first',
    random: '🎲 Random',
    easy: '🟢 Easy',
    medium: '🟡 Medium',
    hard: '🔴 Hard',
    chaotic: '🤪 Chaotic',
    family: '👨‍👩‍👧 Family',
    categories: {
      food: 'Food',
      animals: 'Animals',
      household_objects: 'Household objects',
      transport: 'Transport',
      clothing: 'Clothing',
      common_places: 'Common places',
      colors: 'Colors',
      sports: 'Sports',
      toys_games: 'Toys / games',
      professions: 'Professions',
      famous_movies: 'Famous movies',
      musical_instruments: 'Musical instruments',
      countries_cities: 'Countries / cities',
      technology: 'Technology',
      celebrations: 'Celebrations',
      vacations: 'Vacations',
      stores_brands: 'Stores / brands',
      desserts_sweets: 'Desserts and sweets',
      abstract_concepts: 'Abstract concepts',
      emotions: 'Emotions',
      historical_periods: 'Historical periods',
      books_literature: 'Books / literature',
      famous_people: 'Famous people',
      science: 'Science',
      law_politics: 'Law / politics',
      space: 'Space',
      dreams_nightmares: 'Dreams / nightmares',
      disgusting_things: 'Disgusting things',
      awkward_moments: 'Awkward moments',
      typical_excuses: 'Typical excuses',
      common_lies: 'Common lies',
      things_when_nobody_watches: 'Things you do when nobody watches',
      things_that_get_lost: 'Things that get lost',
      things_when_tired: 'Things you do when tired',
      superheroes: 'Superheroes',
      fantastic_animals: 'Fantastic animals',
      fantasy_tales: 'Fantasy tales',
      school_things: 'School things',
      candies: 'Candies',
      toys: 'Toys',
      cartoons: 'Cartoons'
    }
  }
};

const screens = {
  setup: document.getElementById('screen-setup'),
  pass: document.getElementById('screen-pass'),
  timer: document.getElementById('screen-timer')
};

const playersCountInput = document.getElementById('players-count');
const impostorsCountInput = document.getElementById('impostors-count');
const timeSelect = document.getElementById('time-select');
const themeSelect = document.getElementById('theme-select');
const playersList = document.getElementById('players-list');
const startBtn = document.getElementById('start-btn');
const playerNameInput = document.getElementById('player-name-input');
const addPlayerBtn = document.getElementById('add-player-btn');
const impostorsDisplay = document.getElementById('impostors-display');
const decreaseImpostorBtn = document.getElementById('decrease-impostor-btn');
const increaseImpostorBtn = document.getElementById('increase-impostor-btn');

// Button groups
const timeButtons = document.querySelectorAll('[data-time]');
const langButtons = document.querySelectorAll('.lang-btn');

const passName = document.getElementById('pass-name');
const passTitle = document.getElementById('pass-title');
const revealBtn = document.getElementById('reveal-btn');
const passActions = document.getElementById('pass-actions');
const rolePanel = document.getElementById('role-panel');
const roleText = document.getElementById('role-text');

const timerDisplay = document.getElementById('timer-display');
const pauseBtn = document.getElementById('pause-btn');
const rolesBtn = document.getElementById('roles-btn');
const nextBtn = document.getElementById('next-btn');
const endBtn = document.getElementById('end-btn');

const rolesModal = document.getElementById('roles-modal');
const rolesList = document.getElementById('roles-list');
const closeRoles = document.getElementById('close-roles');
const toast = document.getElementById('toast');

const state = {
  lang: localStorage.getItem('impostor.lang') || 'es',
  words: null,
  players: [],
  impostors: 1,
  theme: 'random',
  time: 'unlimited',
  round: {
    secretWord: '',
    categoryLabel: '',
    impostorIndexes: new Set(),
    currentIndex: 0,
    startingPlayer: ''
  },
  timer: {
    secondsLeft: 0,
    interval: null,
    paused: false
  }
};

const STORAGE_KEY = 'impostor.settings.v1';

function t(key) {
  const keys = key.split('.');
  let value = translations[state.lang];

  for (const k of keys) {
    if (value && value[k] !== undefined) {
      value = value[k];
    } else {
      return key;
    }
  }

  return value || key;
}

function getCategoryMeta() {
  const lang = state.lang;
  if (lang === 'es') {
    return [
      { group: 'faciles', label: t('easy'), items: {
        comida: t('categories.comida'),
        animales: t('categories.animales'),
        objetos_casa: t('categories.objetos_casa'),
        transporte: t('categories.transporte'),
        ropa: t('categories.ropa'),
        lugares_comunes: t('categories.lugares_comunes'),
        colores: t('categories.colores'),
        deportes: t('categories.deportes'),
        juguetes_juegos: t('categories.juguetes_juegos')
      }},
      { group: 'medias', label: t('medium'), items: {
        profesiones: t('categories.profesiones'),
        peliculas_famosas: t('categories.peliculas_famosas'),
        instrumentos_musicales: t('categories.instrumentos_musicales'),
        paises_ciudades: t('categories.paises_ciudades'),
        tecnologia: t('categories.tecnologia'),
        fiestas_celebraciones: t('categories.fiestas_celebraciones'),
        vacaciones: t('categories.vacaciones'),
        tiendas_marcas: t('categories.tiendas_marcas'),
        postres_dulces: t('categories.postres_dulces')
      }},
      { group: 'dificiles', label: t('hard'), items: {
        conceptos_abstractos: t('categories.conceptos_abstractos'),
        emociones: t('categories.emociones'),
        epocas_historicas: t('categories.epocas_historicas'),
        libros_literatura: t('categories.libros_literatura'),
        personajes_famosos: t('categories.personajes_famosos'),
        ciencia: t('categories.ciencia'),
        ley_politica: t('categories.ley_politica'),
        espacio: t('categories.espacio'),
        suenos_pesadillas: t('categories.suenos_pesadillas')
      }},
      { group: 'caoticas', label: t('chaotic'), items: {
        cosas_desagradables: t('categories.cosas_desagradables'),
        momentos_incomodos: t('categories.momentos_incomodos'),
        excusas_tipicas: t('categories.excusas_tipicas'),
        mentiras_comunes: t('categories.mentiras_comunes'),
        cosas_cuando_nadie_mira: t('categories.cosas_cuando_nadie_mira'),
        cosas_que_se_pierden: t('categories.cosas_que_se_pierden'),
        cosas_cansado: t('categories.cosas_cansado')
      }},
      { group: 'familiares', label: t('family'), items: {
        superheroes: t('categories.superheroes'),
        animales_fantasticos: t('categories.animales_fantasticos'),
        cuentos_fantasia: t('categories.cuentos_fantasia'),
        cosas_del_cole: t('categories.cosas_del_cole'),
        chucherias: t('categories.chucherias'),
        juguetes: t('categories.juguetes'),
        dibujos_animados: t('categories.dibujos_animados')
      }}
    ];
  } else {
    return [
      { group: 'easy', label: t('easy'), items: {
        food: t('categories.food'),
        animals: t('categories.animals'),
        household_objects: t('categories.household_objects'),
        transport: t('categories.transport'),
        clothing: t('categories.clothing'),
        common_places: t('categories.common_places'),
        colors: t('categories.colors'),
        sports: t('categories.sports'),
        toys_games: t('categories.toys_games')
      }},
      { group: 'medium', label: t('medium'), items: {
        professions: t('categories.professions'),
        famous_movies: t('categories.famous_movies'),
        musical_instruments: t('categories.musical_instruments'),
        countries_cities: t('categories.countries_cities'),
        technology: t('categories.technology'),
        celebrations: t('categories.celebrations'),
        vacations: t('categories.vacations'),
        stores_brands: t('categories.stores_brands'),
        desserts_sweets: t('categories.desserts_sweets')
      }},
      { group: 'hard', label: t('hard'), items: {
        abstract_concepts: t('categories.abstract_concepts'),
        emotions: t('categories.emotions'),
        historical_periods: t('categories.historical_periods'),
        books_literature: t('categories.books_literature'),
        famous_people: t('categories.famous_people'),
        science: t('categories.science'),
        law_politics: t('categories.law_politics'),
        space: t('categories.space'),
        dreams_nightmares: t('categories.dreams_nightmares')
      }},
      { group: 'chaotic', label: t('chaotic'), items: {
        disgusting_things: t('categories.disgusting_things'),
        awkward_moments: t('categories.awkward_moments'),
        typical_excuses: t('categories.typical_excuses'),
        common_lies: t('categories.common_lies'),
        things_when_nobody_watches: t('categories.things_when_nobody_watches'),
        things_that_get_lost: t('categories.things_that_get_lost'),
        things_when_tired: t('categories.things_when_tired')
      }},
      { group: 'family', label: t('family'), items: {
        superheroes: t('categories.superheroes'),
        fantastic_animals: t('categories.fantastic_animals'),
        fantasy_tales: t('categories.fantasy_tales'),
        school_things: t('categories.school_things'),
        candies: t('categories.candies'),
        toys: t('categories.toys'),
        cartoons: t('categories.cartoons')
      }}
    ];
  }
}

function loadSettings() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return;
    const data = JSON.parse(raw);
    if (Array.isArray(data.players)) state.players = data.players;
    if (typeof data.impostors === 'number') {
      impostorsCountInput.value = data.impostors;
    }
    if (typeof data.time === 'string') {
      timeSelect.value = data.time;
      updateTimeButtons(data.time);
    }
    if (typeof data.theme === 'string') themeSelect.value = data.theme;
  } catch (err) {
    // ignore corrupted storage
  }
}

function saveSettings() {
  const payload = {
    impostors: parseInt(impostorsCountInput.value || '1', 10),
    time: timeSelect.value,
    theme: themeSelect.value,
    players: state.players
  };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
}

function showScreen(name) {
  Object.values(screens).forEach(screen => screen.classList.remove('active'));
  screens[name].classList.add('active');
}

function showToast(message) {
  toast.innerHTML = message;
  toast.classList.remove('hidden');

  // Use setTimeout to ensure the transition happens
  setTimeout(() => {
    toast.classList.add('show');
  }, 10);

  // Hide after 3 seconds
  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => {
      toast.classList.add('hidden');
    }, 400); // Wait for transition to complete
  }, 3000);
}

function clampImpostors() {
  const players = state.players.length;
  const currentImpostors = parseInt(impostorsCountInput.value || '1', 10);
  const maxImpostors = Math.max(1, players - 1);

  if (currentImpostors > maxImpostors) {
    impostorsCountInput.value = maxImpostors;
  }
  updateImpostorDisplay();
}

function renderPlayersList() {
  playersList.innerHTML = '';
  state.players.forEach((name, idx) => {
    const item = document.createElement('div');
    item.className = 'player-item';

    const nameSpan = document.createElement('span');
    nameSpan.textContent = name;

    const removeBtn = document.createElement('button');
    removeBtn.type = 'button';
    removeBtn.className = 'control-btn remove-btn';
    removeBtn.textContent = '−';
    removeBtn.dataset.index = idx;

    item.appendChild(nameSpan);
    item.appendChild(removeBtn);
    playersList.appendChild(item);
  });

  playersCountInput.value = state.players.length;
  playerNameInput.placeholder = `${t('playerPlaceholder')} ${state.players.length + 1}`;
  clampImpostors();
  updateStartButtonState();
}

function collectPlayers() {
  return state.players;
}

function updateImpostorDisplay() {
  const count = parseInt(impostorsCountInput.value || '1', 10);
  impostorsDisplay.textContent = count;
  const maxImpostors = Math.max(1, state.players.length - 1);
  decreaseImpostorBtn.disabled = count <= 1;
  increaseImpostorBtn.disabled = count >= maxImpostors;
}

function updateStartButtonState() {
  const hasEnoughPlayers = state.players.length >= 3;
  startBtn.disabled = !hasEnoughPlayers || !state.words;
}

function flattenCategories() {
  const flattened = [];
  const categoryMeta = getCategoryMeta();
  categoryMeta.forEach(group => {
    Object.entries(group.items).forEach(([key, label]) => {
      flattened.push({
        group: group.group,
        key,
        label: label
      });
    });
  });
  return flattened;
}

function buildThemeSelect() {
  const categoryMeta = getCategoryMeta();
  themeSelect.innerHTML = '';
  const randomOption = document.createElement('option');
  randomOption.value = 'random';
  randomOption.textContent = t('random');
  themeSelect.appendChild(randomOption);

  categoryMeta.forEach(group => {
    const optgroup = document.createElement('optgroup');
    optgroup.label = group.label;
    Object.entries(group.items).forEach(([key, label]) => {
      const option = document.createElement('option');
      option.value = `${group.group}.${key}`;
      option.textContent = label;
      optgroup.appendChild(option);
    });
    themeSelect.appendChild(optgroup);
  });
}

function pickSecretWord() {
  const all = flattenCategories();
  let category;
  if (state.theme === 'random') {
    category = all[Math.floor(Math.random() * all.length)];
  } else {
    const [group, key] = state.theme.split('.');
    category = all.find(item => item.group === group && item.key === key);
  }

  const wordsList = state.words?.[category.group]?.[category.key] || [];
  const word = wordsList[Math.floor(Math.random() * wordsList.length)] || '???';
  return { word, categoryLabel: category.label };
}

function assignImpostors() {
  const count = state.players.length;
  const impostors = new Set();
  while (impostors.size < state.impostors) {
    impostors.add(Math.floor(Math.random() * count));
  }
  return impostors;
}

function startRound() {
  state.impostors = parseInt(impostorsCountInput.value || '1', 10);
  state.theme = themeSelect.value;
  state.time = timeSelect.value;

  const { word, categoryLabel } = pickSecretWord();
  state.round.secretWord = word;
  state.round.categoryLabel = categoryLabel;
  state.round.impostorIndexes = assignImpostors();
  state.round.currentIndex = 0;

  // Store random starting player for later
  const randomPlayerIndex = Math.floor(Math.random() * state.players.length);
  state.round.startingPlayer = state.players[randomPlayerIndex];

  rolePanel.classList.add('hidden');
  roleText.textContent = '';
  revealBtn.disabled = false;
  revealBtn.textContent = t('viewRole');
  passActions.appendChild(revealBtn);

  passName.textContent = state.players[0] || `${t('playerPlaceholder')} 1`;
  passTitle.textContent = t('passDevice');
  showScreen('pass');
}

function showRole() {
  const idx = state.round.currentIndex;
  if (state.round.impostorIndexes.has(idx)) {
    roleText.textContent = t('impostor');
  } else {
    roleText.textContent = `${t('word')}: ${state.round.secretWord}`;
  }

  // Hide title and name when showing role
  passTitle.classList.add('hidden');

  rolePanel.classList.remove('hidden');
  revealBtn.textContent = t('accept');
  rolePanel.appendChild(revealBtn);
}

function nextPlayer() {
  state.round.currentIndex += 1;
  rolePanel.classList.add('hidden');
  roleText.textContent = '';
  revealBtn.disabled = false;
  revealBtn.textContent = t('viewRole');
  passActions.appendChild(revealBtn);

  // Show title and name again for next player
  passTitle.classList.remove('hidden');
  passName.classList.remove('hidden');

  if (state.round.currentIndex >= state.players.length) {
    startTimer();
    showScreen('timer');
    return;
  }
  passName.textContent = state.players[state.round.currentIndex];
  passTitle.textContent = t('passDevice');
}

function startTimer() {
  clearInterval(state.timer.interval);
  state.timer.paused = false;
  const timeValue = state.time;

  // Show toast with starting player
  if (state.round.startingPlayer) {
    const message = `${t('startsFirstPrefix')}<span class="player-name">${state.round.startingPlayer}</span>`;
    showToast(message);
  }

  if (timeValue === 'unlimited') {
    timerDisplay.textContent = t('unlimited');
    pauseBtn.classList.add('hidden');
    return;
  }

  pauseBtn.classList.remove('hidden');
  state.timer.secondsLeft = parseInt(timeValue, 10);
  timerDisplay.textContent = formatTime(state.timer.secondsLeft);
  state.timer.interval = setInterval(() => {
    if (state.timer.paused) return;
    state.timer.secondsLeft -= 1;
    timerDisplay.textContent = formatTime(state.timer.secondsLeft);
    if (state.timer.secondsLeft <= 0) {
      clearInterval(state.timer.interval);
      timerDisplay.textContent = '00:00';
    }
  }, 1000);
}

function togglePause() {
  state.timer.paused = !state.timer.paused;
  const pauseIcon = pauseBtn.querySelector('.pause-icon');
  const playIcon = pauseBtn.querySelector('.play-icon');

  if (state.timer.paused) {
    pauseIcon.classList.add('hidden');
    playIcon.classList.remove('hidden');
  } else {
    pauseIcon.classList.remove('hidden');
    playIcon.classList.add('hidden');
  }
}

function formatTime(totalSeconds) {
  const minutes = Math.floor(totalSeconds / 60).toString().padStart(2, '0');
  const seconds = Math.max(0, totalSeconds % 60).toString().padStart(2, '0');
  return `${minutes}:${seconds}`;
}

function showRolesModal() {
  rolesList.innerHTML = '';

  // Show word section
  const wordSection = document.createElement('div');
  wordSection.className = 'role-section';
  wordSection.innerHTML = `
    <div class="role-label">${t('word')}</div>
    <div class="role-value">${state.round.secretWord}</div>
  `;
  rolesList.appendChild(wordSection);

  // Collect impostor names
  const impostorNames = [];
  state.players.forEach((name, idx) => {
    if (state.round.impostorIndexes.has(idx)) {
      impostorNames.push(name);
    }
  });

  // Show impostors section
  const impostorSection = document.createElement('div');
  impostorSection.className = 'role-section';
  const impostorLabel = impostorNames.length > 1 ? t('impostorsLabel') : t('impostorLabel');
  const impostorNamesHTML = impostorNames.map(name => `<div>${name}</div>`).join('');
  impostorSection.innerHTML = `
    <div class="role-label">${impostorLabel}</div>
    <div class="role-value">${impostorNamesHTML}</div>
  `;
  rolesList.appendChild(impostorSection);

  rolesModal.classList.remove('hidden');
}

function closeRolesModal() {
  rolesModal.classList.add('hidden');
}

function restartSameConfig(newWord = true) {
  if (newWord) {
    const { word, categoryLabel } = pickSecretWord();
    state.round.secretWord = word;
    state.round.categoryLabel = categoryLabel;
  }
  state.round.impostorIndexes = assignImpostors();
  state.round.currentIndex = 0;

  // Store random starting player for later
  const randomPlayerIndex = Math.floor(Math.random() * state.players.length);
  state.round.startingPlayer = state.players[randomPlayerIndex];

  passName.textContent = state.players[0];
  passTitle.textContent = t('passDevice');
  rolePanel.classList.add('hidden');
  roleText.textContent = '';
  revealBtn.disabled = false;
  revealBtn.textContent = t('viewRole');
  passActions.appendChild(revealBtn);
  showScreen('pass');
}

function resetToSetup() {
  clearInterval(state.timer.interval);
  state.timer.paused = false;
  const pauseIcon = pauseBtn.querySelector('.pause-icon');
  const playIcon = pauseBtn.querySelector('.play-icon');
  pauseIcon.classList.remove('hidden');
  playIcon.classList.add('hidden');
  showScreen('setup');
}

function updateTimeButtons(value) {
  timeButtons.forEach(btn => {
    if (btn.dataset.time === value) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });
}

function switchLanguage(newLang) {
  if (state.lang === newLang) return;

  state.lang = newLang;
  localStorage.setItem('impostor.lang', newLang);

  // Update language buttons
  langButtons.forEach(btn => {
    if (btn.dataset.lang === newLang) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });

  // Reload page to load correct word file
  window.location.reload();
}

function updateUIText() {
  // Update buttons
  startBtn.textContent = t('startRound');
  revealBtn.textContent = t('viewRole');
  rolesBtn.textContent = t('viewRoles');
  nextBtn.textContent = t('nextWord');
  endBtn.textContent = t('endRound');
  closeRoles.textContent = t('close');

  // Update labels
  document.querySelector('label[for="theme-select"]').textContent = t('theme');
  document.querySelectorAll('.field-full label')[0].textContent = t('time');
  document.querySelector('.players-header label').textContent = t('players');
  document.querySelector('.impostors-header label').textContent = t('impostors');

  // Update other text
  document.querySelector('.timer-label').textContent = t('debateTime');
  document.querySelector('.modal-header div').textContent = t('roles');

  // Rebuild theme select
  buildThemeSelect();

  // Update placeholder
  playerNameInput.placeholder = `${t('playerPlaceholder')} ${state.players.length + 1}`;
}

// Button group handlers
function updateTimeButtons(value) {
  timeButtons.forEach(btn => {
    if (btn.dataset.time === value) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });
}

// Event listeners for settings
timeSelect.addEventListener('change', saveSettings);
themeSelect.addEventListener('change', saveSettings);

// Language switcher
langButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    switchLanguage(btn.dataset.lang);
  });
});

// Add player button
addPlayerBtn.addEventListener('click', () => {
  const name = playerNameInput.value.trim();
  const playerName = name.length > 0 ? name : `${t('playerPlaceholder')} ${state.players.length + 1}`;

  // Check for duplicate names
  if (state.players.includes(playerName)) {
    alert(t('duplicatePlayer').replace('{name}', playerName));
    return;
  }

  state.players.push(playerName);
  playerNameInput.value = '';
  renderPlayersList();
  saveSettings();
});

// Allow Enter key in player input to add player
playerNameInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    addPlayerBtn.click();
  }
});

// Select all text when input receives focus
playerNameInput.addEventListener('focus', () => {
  playerNameInput.select();
});

// Remove player (event delegation)
playersList.addEventListener('click', (e) => {
  const removeBtn = e.target.closest('.remove-btn');
  if (removeBtn) {
    const idx = parseInt(removeBtn.dataset.index, 10);
    state.players.splice(idx, 1);
    renderPlayersList();
    saveSettings();
  }
});

// Impostor counter buttons
decreaseImpostorBtn.addEventListener('click', () => {
  const current = parseInt(impostorsCountInput.value || '1', 10);
  if (current > 1) {
    impostorsCountInput.value = current - 1;
    updateImpostorDisplay();
    saveSettings();
  }
});

increaseImpostorBtn.addEventListener('click', () => {
  const current = parseInt(impostorsCountInput.value || '1', 10);
  const maxImpostors = Math.max(1, state.players.length - 1);
  if (current < maxImpostors) {
    impostorsCountInput.value = current + 1;
    updateImpostorDisplay();
    saveSettings();
  }
});

// Time button group event listener
document.addEventListener('click', (e) => {
  const target = e.target.closest('button');
  if (!target) return;

  // Only handle button group clicks in setup screen
  if (!screens.setup.classList.contains('active')) return;

  // Time buttons
  if (target.dataset.time) {
    const value = target.dataset.time;
    timeSelect.value = value;
    updateTimeButtons(value);
    saveSettings();
    return;
  }
});

// Start round button
startBtn.addEventListener('click', () => {
  if (!state.words) {
    return;
  }
  if (state.players.length < 3) {
    return;
  }
  clampImpostors();
  saveSettings();
  startRound();
});

revealBtn.addEventListener('click', () => {
  if (rolePanel.classList.contains('hidden')) {
    showRole();
    return;
  }
  nextPlayer();
});

pauseBtn.addEventListener('click', togglePause);
rolesBtn.addEventListener('click', showRolesModal);
closeRoles.addEventListener('click', closeRolesModal);
rolesModal.addEventListener('click', (event) => {
  if (event.target === rolesModal) closeRolesModal();
});

nextBtn.addEventListener('click', () => {
  closeRolesModal();
  restartSameConfig(true);
});

endBtn.addEventListener('click', () => {
  closeRolesModal();
  resetToSetup();
});

function init() {
  // Set active language button
  langButtons.forEach(btn => {
    if (btn.dataset.lang === state.lang) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });

  buildThemeSelect();
  loadSettings();

  // Load words first
  state.words = WORDS;

  // Update UI text with current language
  updateUIText();

  // Initialize button states
  const impostorCount = parseInt(impostorsCountInput.value || '1', 10);
  const timeValue = timeSelect.value || 'unlimited';

  updateTimeButtons(timeValue);
  updateImpostorDisplay();
  renderPlayersList();
}

init();
