const start = document.getElementById("start");
let menu = document.getElementById("startMenu");
// Если `#startMenu` по какой-то причине отсутствует, создаём его, чтобы Пуск работал
if (!menu) {
  const created = document.createElement('div');
  created.id = 'startMenu';
  created.className = 'start-menu';
  created.innerHTML = `
    <div class="start-menu-section">
      <div class="start-menu-title">Основные приложения</div>
      <div class="start-menu-item" data-app="cmd">
        <div class="start-menu-icon">💻</div>
        <div class="start-menu-text">Командная строка</div>
      </div>
      <div class="start-menu-item" data-app="filebrowser">
        <div class="start-menu-icon">📁</div>
        <div class="start-menu-text">Проводник</div>
      </div>
      <div class="start-menu-item" data-app="notepad">
        <div class="start-menu-icon">📝</div>
        <div class="start-menu-text">Блокнот</div>
      </div>
      <div class="start-menu-item" data-app="music">
        <div class="start-menu-icon">🎵</div>
        <div class="start-menu-text">Музыка</div>
      </div>
    </div>
    
    <div class="start-menu-section">
      <div class="start-menu-title">Инструменты</div>
      <div class="start-menu-item" data-app="calc">
        <div class="start-menu-icon">🧮</div>
        <div class="start-menu-text">Калькулятор</div>
      </div>
      <div class="start-menu-item" data-app="paint">
        <div class="start-menu-icon">🎨</div>
        <div class="start-menu-text">Paint</div>
      </div>
      <div class="start-menu-item" data-app="weather">
        <div class="start-menu-icon">🌤️</div>
        <div class="start-menu-text">Погода</div>
      </div>
      <div class="start-menu-item" data-app="taskmanager">
        <div class="start-menu-icon">📊</div>
        <div class="start-menu-text">Диспетчер задач</div>
      </div>
    </div>
    
    <div class="start-menu-section">
      <div class="start-menu-title">Мультимедиа</div>
      <div class="start-menu-item" data-app="camera">
        <div class="start-menu-icon">📷</div>
        <div class="start-menu-text">Камера</div>
      </div>
      <div class="start-menu-item" data-app="screenshot">
        <div class="start-menu-icon">📸</div>
        <div class="start-menu-text">Скриншот</div>
      </div>
      <div class="start-menu-item" data-app="screenrecorder">
        <div class="start-menu-icon">🎥</div>
        <div class="start-menu-text">Запись экрана</div>
      </div>
    </div>
    
    <div class="start-menu-section">
      <div class="start-menu-title">Система</div>
      <div class="start-menu-item" data-app="appcenter">
        <div class="start-menu-icon">🏪</div>
        <div class="start-menu-text">Центр приложений</div>
      </div>
      <div class="start-menu-item" data-app="antivirus">
        <div class="start-menu-icon">🛡️</div>
        <div class="start-menu-text">Антивирус</div>
      </div>
      <div class="start-menu-item" data-app="settings">
        <div class="start-menu-icon">⚙️</div>
        <div class="start-menu-text">Настройки</div>
      </div>
      <div class="start-menu-item" data-app="sysinfo">
        <div class="start-menu-icon">💻</div>
        <div class="start-menu-text">Система</div>
      </div>
    </div>
    
    <div class="start-menu-section">
      <div class="start-menu-title">Игры и развлечения</div>
      <div class="start-menu-item" data-app="tictactoe">
        <div class="start-menu-icon">⭕</div>
        <div class="start-menu-text">Крестики-нолики</div>
      </div>
      <div class="start-menu-item" data-app="dice">
        <div class="start-menu-icon">🎲</div>
        <div class="start-menu-text">Кости</div>
      </div>
      <div class="start-menu-item" data-app="games">
        <div class="start-menu-icon">🎮</div>
        <div class="start-menu-text">Игры</div>
      </div>
    </div>
    
    <div class="start-menu-section">
      <div class="start-menu-title">Утилиты</div>
      <div class="start-menu-item" data-app="converter">
        <div class="start-menu-icon">🔄</div>
        <div class="start-menu-text">Конвертер</div>
      </div>
      <div class="start-menu-item" data-app="timer">
        <div class="start-menu-icon">⏱️</div>
        <div class="start-menu-text">Таймер</div>
      </div>
      <div class="start-menu-item" data-app="todo">
        <div class="start-menu-icon">✅</div>
        <div class="start-menu-text">Задачи</div>
      </div>
      <div class="start-menu-item" data-app="pomodoro">
        <div class="start-menu-icon">🍅</div>
        <div class="start-menu-text">Помодоро</div>
      </div>
      <div class="start-menu-item" data-app="notes">
        <div class="start-menu-icon">📋</div>
        <div class="start-menu-text">Заметки</div>
      </div>
      <div class="start-menu-item" data-app="clock">
        <div class="start-menu-icon">🕐</div>
        <div class="start-menu-text">Часы</div>
      </div>
      <div class="start-menu-item" data-app="password">
        <div class="start-menu-icon">🔐</div>
        <div class="start-menu-text">Пароли</div>
      </div>
      <div class="start-menu-item" data-app="base64">
        <div class="start-menu-icon">🔤</div>
        <div class="start-menu-text">Base64</div>
      </div>
      <div class="start-menu-item" data-app="browser">
        <div class="start-menu-icon">🌐</div>
        <div class="start-menu-text">Браузер</div>
      </div>
      <div class="start-menu-item" data-app="speedtest">
        <div class="start-menu-icon">🚀</div>
        <div class="start-menu-text">Speed Test</div>
      </div>
    </div>
  `;
  document.body.appendChild(created);
  menu = created;
  
  // Добавляем обработчики для элементов меню
  const menuItems = menu.querySelectorAll('.start-menu-item');
  menuItems.forEach(item => {
    item.addEventListener('click', () => {
      const appName = item.getAttribute('data-app');
      if (window.APP_LIST[appName]) {
        window.APP_LIST[appName].runCMD();
        menu.style.display = 'none';
      } else {
        criticalWindow(`${appName} не найден`);
      }
    });
  });
}
const desktop = document.getElementById("desktop");
const openBtn = document.getElementById("openAppBtn");
const boot = document.getElementById("boot");
const system = document.getElementById("system");

let zIndex = 1;
let bootActive = true;
let soundsEnabled = true; // Флаг для отключения звуков в BSOD/блокировке

// Скрываем курсор только во время загрузки
document.documentElement.style.cursor = 'none';
document.body.style.cursor = 'none';

// Функция воспроизведения звука клика (отключена)
function playClickSound() {
  // Звуки отключены
}

// Функция воспроизведения звука клавиши (отключена)
function playKeySound() {
  // Звуки отключены
}

// Функция звука открытия окна
function playOpenSound() {
  try {
    const audio = new Audio('system/sounds/click.mp3');
    audio.volume = 0.4;
    audio.play().catch(() => {});
  } catch(e) {}
}

// Функция звука закрытия окна
function playCloseSound() {
  try {
    const audio = new Audio('system/sounds/click.mp3');
    audio.volume = 0.3;
    audio.play().catch(() => {});
  } catch(e) {}
}

// Убираем глобальные обработчики звуков
// document.addEventListener('click', playClickSound, true);
// document.addEventListener('keydown', playKeySound, true);

// Команда восстановления ОС для консоли
function restoreOS() {
  const keywords = ['Generating filesystem', 'Downloading file', 'Reseting', 'Waiting for a core', 'Waiting', 'Setuping file', 'Starting', 'Checking'];
  let messages = [];
  
  // Генерируем много сообщений с рандомными ключевордами
  for (let i = 0; i < 40; i++) {
    const randomKeyword = keywords[Math.floor(Math.random() * keywords.length)];
    const randomPercent = Math.floor(Math.random() * 100);
    messages.push(`${randomKeyword}... ${randomPercent}%`);
  }
  
  // Выводим все сообщения с рандомными задержками
  let index = 0;
  const outputMessages = () => {
    if (index < messages.length) {
      console.log(messages[index]);
      index++;
      setTimeout(outputMessages, Math.random() * 1500 + 200);
    } else {
      // Все сообщения выведены, теперь обратный отсчет
      console.log('Done! Restarting in 5 seconds.');
      let countdown = 5;
      const countdownInterval = setInterval(() => {
        if (countdown > 0) {
          console.log(`Restarting in ${countdown}...`);
          countdown--;
        } else {
          clearInterval(countdownInterval);
          // Очищаем localStorage и перезагружаем
          try {
            localStorage.clear();
            localStorage.setItem('darkOS_activated', 'true');
          } catch(e) {}
          location.reload();
        }
      }, 1000);
    }
  };
  
  console.clear();
  console.log('Starting system restore...');
  setTimeout(outputMessages, 500);
}

// Делаем функцию доступной в консоли
window.restoreOS = restoreOS;

// Система активации
const ACTIVATION_KEY = "fka!FuFN6Xf%4$JxMJ#Ky%isYj6Ns#o*5P42t9uOfmm58mlbMJ#Ky%isYj6Ns#o*5P42t9uOfmm58mlbf@olhqOIxyMvShPibvmGul*5FsqtCG&o";

function checkActivation() {
  return localStorage.getItem('darkOS_activated') === 'true';
}

// Открытие виртуального файла — если файл называется "NEW GAME", устанавливаем core_ignore и показываем ошибку
window.openFile = function(name){
  try{
    if (String(name) === 'NEW GAME'){
      window.core_ignore = true;
      try { localStorage.setItem('darkOS_core_ignore','true'); } catch(e) {}
      try { showCoreIgnoredError(); } catch(e) {}
      return 'CORE_IGNORED';
    }
  } catch(e) {}
  return 'NO_ACTION';
};

// Экран, показываемый когда core.js игнорируется
function showCoreIgnoredError(){
  document.documentElement.innerHTML = `
    <head>
      <title>Core Ignored</title>
      <style>
        body { margin:0;background:#0b0b0b;color:#ffcc00;font-family:Courier, monospace;height:100vh;display:flex;align-items:center;justify-content:center; }
        .box { max-width:720px;padding:24px;border:2px solid #444;border-radius:8px;background:#111; }
        h1 { margin:0 0 12px 0;color:#ff6666 }
        p { margin:8px 0;opacity:0.9 }
        code { background:#000;padding:4px 6px;border-radius:4px;color:#0ff }
      </style>
    </head>
    <body>
      <div class="box">
        <h1>Ошибка загрузки: core.js пропущен</h1>
        <p>Система обнаружила открытие файла <b>NEW GAME</b> и временно проигнорировала загрузку критического модуля <code>system/core.js</code>.</p>
        <p>Чтобы восстановить нормальную работу, откройте recovery.html и в DevTools (F12) → Console выполните:</p>
        <p><code>setIgnore_false()</code></p>
        <p>После этого страница перезагрузится автоматически и core.js будет загружен заново.</p>
      </div>
    </body>
  `;
}

function setActivated() {
  localStorage.setItem('darkOS_activated', 'true');
}

function showActivationScreen() {
  const overlay = document.createElement('div');
  overlay.style.position = 'fixed';
  overlay.style.top = '0';
  overlay.style.left = '0';
  overlay.style.width = '100vw';
  overlay.style.height = '100vh';
  overlay.style.background = 'linear-gradient(135deg, #0a0a1a, #1a0a2e)';
  overlay.style.zIndex = '10000';
  overlay.style.display = 'flex';
  overlay.style.alignItems = 'center';
  overlay.style.justifyContent = 'center';
  overlay.style.fontFamily = 'Segoe UI, sans-serif';
  
  const activationBox = document.createElement('div');
  activationBox.style.background = '#222';
  activationBox.style.border = '2px solid #0a84ff';
  activationBox.style.borderRadius = '12px';
  activationBox.style.padding = '40px';
  activationBox.style.width = '420px';
  activationBox.style.boxShadow = '0 8px 32px rgba(10,132,255,0.3)';
  activationBox.style.textAlign = 'center';
  activationBox.style.color = '#fff';
  
  activationBox.innerHTML = `
    <div style="font-size:3em;margin-bottom:20px;">🔐</div>
    <h1 style="margin:0 0 10px 0;font-size:28px;color:#0a84ff;">darkOS Activation</h1>
    <p style="margin:0 0 30px 0;color:#aaa;font-size:14px;">Введите ключ активации для начала работы</p>
    
    <input type="password" id="activationKey" placeholder="Ключ активации" 
      style="width:100%;padding:12px;margin:10px 0;border:1px solid #0a84ff;border-radius:6px;background:#111;color:#fff;font-size:14px;box-sizing:border-box;">
    
    <button id="activateBtn" 
      style="width:100%;padding:12px;margin:20px 0 10px 0;background:#0a84ff;color:#000;border:none;border-radius:6px;font-weight:bold;font-size:14px;cursor:pointer;">
      Активировать
    </button>
    
    <div id="activationError" style="color:#ff4444;margin-top:15px;font-size:12px;"></div>
  `;
  
  overlay.appendChild(activationBox);
  document.body.appendChild(overlay);
  
  const keyInput = activationBox.querySelector('#activationKey');
  const activateBtn = activationBox.querySelector('#activateBtn');
  const errorDiv = activationBox.querySelector('#activationError');
  
  keyInput.focus();
  
  function attemptActivation() {
    const enteredKey = keyInput.value.trim();
    
    if (!enteredKey) {
      errorDiv.textContent = '❌ Введите ключ активации';
      return;
    }

    // Служебный обход: при вводе специальной фразы предоставляем доступ (нечувствительно к регистру)
    try {
      if (enteredKey.toLowerCase() === 'grant acces_key') {
        errorDiv.style.color = '#44ff44';
        errorDiv.textContent = '✅ Служебный доступ предоставлен. Загрузка системы...';
        setActivated();
        setTimeout(() => {
          overlay.remove();
          finishBoot();
        }, 500);
        return;
      }
    } catch(e) {}
    
    if (enteredKey === ACTIVATION_KEY) {
      errorDiv.style.color = '#44ff44';
      errorDiv.textContent = '✅ Активация успешна! Загрузка системы...';
      setActivated();
      setTimeout(() => {
        overlay.remove();
        finishBoot();
      }, 1500);
      return;
    }
    
    errorDiv.textContent = '❌ Неверный ключ активации';
    keyInput.value = '';
    keyInput.focus();
  }
  
  activateBtn.onclick = attemptActivation;
  keyInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') attemptActivation();
  });
}

// Последовательность консольных команд для разблокировки: вводите в консоли по очереди
// `key` -> `set_activated` -> `access_grant` -> `agree` (поддерживается и вызов через `()`)
(() => {
  const seq = ['key','set_activated','access_grant','agree'];
  let idx = 0;

  function consume(name){
    try{
      if (seq[idx] === name) {
        idx++;
        if (idx >= seq.length) {
          idx = 0;
          try { localStorage.removeItem('darkOS_system_locked'); } catch(e) {}
          try { setActivated(); } catch(e) {}
          try { finishBoot(); } catch(e) {}
          return 'UNLOCKED';
        }
        return `STEP ${idx}/${seq.length}`;
      } else {
        idx = 0;
        return 'WRONG_SEQUENCE';
      }
    } catch(e) { idx = 0; return 'ERROR'; }
  }

  function makeCmd(name){
    function cmd(){ return consume(name); }
    cmd.toString = function(){ return consume(name); };
    cmd.valueOf = function(){ return consume(name); };
    return cmd;
  }

  window.key = makeCmd('key');
  window.set_activated = makeCmd('set_activated');
  window.access_grant = makeCmd('access_grant');
  window.agree = makeCmd('agree');
})();

// Простая команда для разблокировки с паролем
// Используйте в консоли: unlock('admin-admin_admin!')
(() => {
  const SECRET = 'admin-admin_admin!';

  function unlock(pwd) {
    try {
      // если передали функцию/объект, попытаемся привести к строке
      const attempt = typeof pwd === 'string' ? pwd : String(pwd);
      if (attempt === SECRET) {
        try { localStorage.removeItem('darkOS_system_locked'); } catch(e) {}
        try { setActivated(); } catch(e) {}
        setTimeout(() => { try { location.reload(); } catch(e) {} }, 200);
        return 'UNLOCKED';
      }
      return 'INVALID_PASSWORD';
    } catch(e) { return 'ERROR'; }
  }

  // Поддержка вызова и простого ввода имени в консоли
  const fn = function(p){ return unlock(p); };
  fn.toString = function(){ return "call unlock(password)"; };
  fn.valueOf = function(){ return "call unlock(password)"; };

  window.unlock = fn;
  window.unlock_passwordView = () => SECRET;
})();

function showWelcomeScreen() {
  // Проверка активации при загрузке
  if (!checkActivation()) {
    showActivationScreen();
  }
}

function finishBoot() {
    console.log('🚀 finishBoot() вызвана!');
    boot.style.display = "none";
    system.classList.remove("hidden");
    document.body.style.cursor = "auto";
    bootActive = false;
    
    // Показываем уведомление о новой игре с небольшой задержкой
    setTimeout(() => {
        console.log('📱 Создаю уведомление...');
        const notification = document.createElement('div');
        notification.style.cssText = `
          position: fixed;
          top: 20px;
          right: 20px;
          background: #0a84ff;
          color: white;
          padding: 15px 20px;
          border-radius: 8px;
          font-family: 'Segoe UI', Arial, sans-serif;
          font-size: 14px;
          box-shadow: 0 4px 12px rgba(0,0,0,0.3);
          z-index: 99999;
          max-width: 300px;
          animation: slideIn 0.3s ease-out;
        `;
        notification.innerHTML = `
          <div style="margin-bottom: 8px; font-weight: bold;">🎮 Уведомление от терминала</div>
          <div>Вышла новая игра! Запустить - <span style="background: rgba(255,255,255,0.2); padding: 2px 6px; border-radius: 3px; cursor: pointer;" onclick="openCMD(); document.querySelector('#cmdInput').value = 'start NEW_GAME'; document.querySelector('#cmdInput').focus();">start NEW_GAME</span></div>
        `;
        
        // Добавляем анимацию
        const style = document.createElement('style');
        style.textContent = `
          @keyframes slideIn {
            from { transform: translateX(100%); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
          }
        `;
        document.head.appendChild(style);
        
        document.body.appendChild(notification);
        console.log('✅ Уведомление добавлено в DOM!');
        
        // Автоматически закрываем через 15 секунд
        setTimeout(() => {
          notification.style.animation = 'slideIn 0.3s ease-out reverse';
          setTimeout(() => {
            notification.remove();
          }, 300);
        }, 15000);
        
        // Клик по уведомлению закрывает его
        notification.addEventListener('click', () => {
          notification.style.animation = 'slideIn 0.3s ease-out reverse';
          setTimeout(() => {
            notification.remove();
          }, 300);
        });
    }, 100);
}

setTimeout(() => {
    if (bootActive) {
        showWelcomeScreen();
    }
}, 2500);
start.onclick = () => {
  menu.style.display = menu.style.display === "block" ? "none" : "block";
};

openBtn.onclick = openApp;

function showBSOD(errorCode) {
  soundsEnabled = false; // Отключаем звуки
  const bsod = document.createElement('div');
  bsod.style.position = 'fixed';
  bsod.style.top = '0';
  bsod.style.left = '0';
  bsod.style.width = '100vw';
  bsod.style.height = '100vh';
  bsod.style.background = '#0050cc';
  bsod.style.zIndex = '99999';
  bsod.style.display = 'flex';
  bsod.style.alignItems = 'center';
  bsod.style.justifyContent = 'center';
  bsod.style.fontFamily = '"MS Sans Serif", Arial, sans-serif';
  bsod.style.color = '#fff';
  bsod.style.padding = '20px';
  
  bsod.innerHTML = `
    <div style="max-width: 600px; line-height: 1.6; font-size: 14px;">
      <div style="font-weight: bold; margin-bottom: 20px;">A problem has been detected and the system has been shut down to prevent damage to your computer.</div>
      
      <div style="margin-bottom: 20px;">
        <div style="margin-bottom: 8px;">The problem seems to be caused by the following file:</div>
        <div style="background: rgba(0,0,0,0.3); padding: 8px; font-family: monospace;">meme_collector.sys</div>
      </div>
      
      <div style="margin-bottom: 20px;">
        <div style="margin-bottom: 8px;"><b>ERROR_CODE:</b> <span style="font-family: monospace;">0x00000001</span></div>
        <div style="margin-bottom: 8px;"><b>ERROR_NAME:</b> <span style="font-family: monospace;">${errorCode}</span></div>
      </div>
      
      <div style="margin-bottom: 20px;">
        <b>Technical information:</b><br>
        <span style="font-family: monospace; font-size: 12px;">
          *** STOP: 0x00000001 (0x00000000, 0x00000000, 0x00000000, 0x00000000)<br>
          *** meme_collector.sys - Address F00DCAFE base at F0000000, DateStamp 31122025
        </span>
      </div>
      
      <div style="margin-top: 40px; font-size: 12px; opacity: 0.8;">
        If you are unable to boot into Safe Mode, or if the problem persists after the reinstall, please contact your system administrator or technical support group.
      </div>
    </div>
  `;
  
  document.body.appendChild(bsod);
  
  // Слушаем нажатие Enter для перезагрузки
  const handleEnter = (e) => {
    if (e.key === 'Enter') {
      document.removeEventListener('keydown', handleEnter);
      bsod.remove();
      
      // Красный BSOD второй раз с максимально неприятным звуком
      const redBsod = document.createElement('div');
      redBsod.style.position = 'fixed';
      redBsod.style.top = '0';
      redBsod.style.left = '0';
      redBsod.style.width = '100vw';
      redBsod.style.height = '100vh';
      redBsod.style.background = '#cc0000';
      redBsod.style.zIndex = '99999';
      redBsod.style.display = 'flex';
      redBsod.style.alignItems = 'center';
      redBsod.style.justifyContent = 'center';
      redBsod.style.fontFamily = '"MS Sans Serif", Arial, sans-serif';
      redBsod.style.color = '#fff';
      redBsod.style.padding = '20px';
      
      // Максимально неприятный звук
      try {
        const audioContext = new (window.AudioContext || window.webkitAudioContext)();
        const now = audioContext.currentTime;
        
        // Первый звук - пилящий
        const osc1 = audioContext.createOscillator();
        const gain1 = audioContext.createGain();
        osc1.connect(gain1);
        gain1.connect(audioContext.destination);
        osc1.frequency.setValueAtTime(800, now);
        osc1.frequency.exponentialRampToValueAtTime(200, now + 0.3);
        osc1.type = 'sawtooth';
        gain1.gain.setValueAtTime(0.4, now);
        gain1.gain.exponentialRampToValueAtTime(0.01, now + 0.3);
        osc1.start(now);
        osc1.stop(now + 0.3);
        
        // Второй звук - резкий
        const osc2 = audioContext.createOscillator();
        const gain2 = audioContext.createGain();
        osc2.connect(gain2);
        gain2.connect(audioContext.destination);
        osc2.frequency.value = 1200;
        osc2.type = 'square';
        gain2.gain.setValueAtTime(0.35, now + 0.1);
        gain2.gain.exponentialRampToValueAtTime(0.01, now + 0.4);
        osc2.start(now + 0.1);
        osc2.stop(now + 0.4);
        
        // Третий звук - низкий гул
        const osc3 = audioContext.createOscillator();
        const gain3 = audioContext.createGain();
        osc3.connect(gain3);
        gain3.connect(audioContext.destination);
        osc3.frequency.value = 60;
        osc3.type = 'triangle';
        gain3.gain.setValueAtTime(0.3, now + 0.2);
        gain3.gain.exponentialRampToValueAtTime(0.01, now + 0.5);
        osc3.start(now + 0.2);
        osc3.stop(now + 0.5);
      } catch(e) {}
      
      let secondsLeft = 10;
      redBsod.innerHTML = `
        <div style="max-width: 600px; line-height: 1.6; font-size: 14px; text-align: center;">
          <div style="font-size: 48px; font-weight: bold; margin-bottom: 30px;">⚠️</div>
          <div style="font-size: 20px; font-weight: bold; margin-bottom: 20px;">CRITICAL SYSTEM FAILURE</div>
          <div style="font-size: 14px; opacity: 0.9;">initializing recovery... <span id="countdown">10</span>s</div>
        </div>
      `;
      
      document.body.appendChild(redBsod);
      
      // Инициализация на 10 секунд без пропуска
      const countdownInterval = setInterval(() => {
        secondsLeft--;
        const countdownEl = redBsod.querySelector('#countdown');
        if (countdownEl) {
          countdownEl.textContent = secondsLeft;
        }
      }, 1000);
      
      setTimeout(() => {
        clearInterval(countdownInterval);
        redBsod.remove();
        
        // Экран загрузки
        const loadingScreen = document.createElement('div');
        loadingScreen.style.position = 'fixed';
        loadingScreen.style.top = '0';
        loadingScreen.style.left = '0';
        loadingScreen.style.width = '100vw';
        loadingScreen.style.height = '100vh';
        loadingScreen.style.background = '#000';
        loadingScreen.style.zIndex = '99999';
        loadingScreen.style.display = 'flex';
        loadingScreen.style.alignItems = 'center';
        loadingScreen.style.justifyContent = 'center';
        loadingScreen.style.fontFamily = 'monospace';
        loadingScreen.style.color = '#0f0';
        loadingScreen.style.fontSize = '18px';
        
        let progress = 0;
        loadingScreen.innerHTML = `<div>Initializing system... ${progress}%</div>`;
        document.body.appendChild(loadingScreen);
        
        // Имитация долгой загрузки с переменной задержкой между 100 и 250 мс
        let running = true;
        function scheduleTick() {
          // случайная задержка в диапазоне [50, 100] мс
          const delay = Math.floor(Math.random() * (100 - 50 + 1)) + 50;
          setTimeout(tick, delay);
        }

        function tick() {
          if (!running) return;
          // Гарантируем ненулевой шаг прогресса
          progress += Math.random() * 7 + 1; // минимум +1% за тик
          if (progress > 100) progress = 100;
          loadingScreen.querySelector('div').textContent = `Initializing system... ${Math.floor(progress)}%`;

          if (progress >= 100) {
            running = false;
            clearTimeout(failSafeTimeout);
            setTimeout(() => {
              // Сброс localStorage и установка флага блокировки
              try {
                localStorage.clear();
                if (localStorage.getItem('darkOS_system_locked') !== 'true') {
                  localStorage.setItem('darkOS_system_locked', 'true');
                }
                
                // Воспроизведем звук блокировки
                try {
                  const audio = new Audio('system/sounds/ling.mp3');
                  audio.volume = 0.8;
                  audio.play().catch(() => {
                    // Если mp3 не найден или ошибка, используем Web Audio API
                    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
                    const now = audioContext.currentTime;
                    const frequencies = [120, 90, 150, 80, 120];
                    let offset = 0;
                    
                    frequencies.forEach((freq) => {
                      const osc = audioContext.createOscillator();
                      const gain = audioContext.createGain();
                      
                      osc.connect(gain);
                      gain.connect(audioContext.destination);
                      
                      osc.frequency.value = freq;
                      osc.type = 'sine';
                      
                      const startTime = now + offset;
                      gain.gain.setValueAtTime(0.15, startTime);
                      gain.gain.exponentialRampToValueAtTime(0.01, startTime + 0.3);
                      
                      osc.start(startTime);
                      osc.stop(startTime + 0.3);
                      
                      offset += 0.35;
                    });
                  });
                } catch(e) {}
              } catch(e) {}

              // Перезагрузка страницы
              location.reload();
            }, 1000);
            return;
          }

          // иначе планируем следующий тик
          scheduleTick();
        }

        // Fail-safe: если прогресс не достигнет 100% за 30 секунд, форсируем завершение
        const failSafeTimeout = setTimeout(() => {
          running = false;
          try { loadingScreen.querySelector('div').textContent = `Initializing system... 100%`; } catch(e) {}
          try {
            if (localStorage.getItem('darkOS_system_locked') !== 'true') {
              localStorage.setItem('darkOS_system_locked', 'true');
            }
          } catch(e) {}
          setTimeout(() => location.reload(), 800);
        }, 30000);

        // Запускаем цикл
        scheduleTick();
      }, 10000);
    }
  };
  
  document.addEventListener('keydown', handleEnter);
  
  // Подсказка внизу экрана
  setTimeout(() => {
    const footer = document.createElement('div');
    footer.style.position = 'fixed';
    footer.style.bottom = '20px';
    footer.style.left = '50%';
    footer.style.transform = 'translateX(-50%)';
    footer.style.color = '#fff';
    footer.style.fontSize = '12px';
    footer.style.zIndex = '100000';
    footer.innerHTML = '<div style="cursor: pointer; opacity: 0.7;">Press Enter to restart the system...</div>';
    document.body.appendChild(footer);
  }, 500);
}

function openApp() {
  menu.style.display = "none";

  const win = document.createElement("div");
  win.className = "window";
  win.style.zIndex = ++zIndex;

  win.innerHTML = `
    <div class="window-header">
      <span>Приложение</span>
      <span class="close">✖</span>
    </div>
    <div class="window-content">
      Это окно можно таскать 🖱
    </div>
  `;

  const header = win.querySelector(".window-header");
  const close = win.querySelector(".close");
  close.onclick = () => {
    playCloseSound();
    win.remove();
  };

  let drag = false, offsetX = 0, offsetY = 0;
  header.onmousedown = (e) => { 
    drag = true; 
    offsetX = e.clientX - win.offsetLeft; 
    offsetY = e.clientY - win.offsetTop; 
    zIndex++; 
    win.style.zIndex = zIndex; 
  };
  document.onmousemove = (e) => { if(drag){ win.style.left = e.clientX - offsetX + "px"; win.style.top = e.clientY - offsetY + "px"; } };
  document.onmouseup = () => { drag = false; };

  playOpenSound();
  desktop.appendChild(win);
}

function criticalWindow(message) {
  const win = document.createElement("div");
  win.className = "window";
  win.style.zIndex = ++zIndex;

  win.innerHTML = `
    <div class="window-header">
      <span>Ошибка</span>
      <span class="close">✖</span>
    </div>
    <div class="window-content">
      <p style="color:red;font-family:monospace;">${message}</p>
    </div>
  `;

  const header = win.querySelector(".window-header");
  const close = win.querySelector(".close");
  close.onclick = () => {
    playCloseSound();
    win.remove();
  };

  let drag = false, offsetX = 0, offsetY = 0;
  header.onmousedown = (e) => { drag = true; offsetX = e.clientX - win.offsetLeft; offsetY = e.clientY - win.offsetTop; zIndex++; win.style.zIndex = zIndex; };
  document.onmousemove = (e) => { if(drag){ win.style.left = e.clientX - offsetX + "px"; win.style.top = e.clientY - offsetY + "px"; } };
  document.onmouseup = () => { drag = false; };

  playOpenSound();
  desktop.appendChild(win);
}

window.APP_LIST = window.APP_LIST || {};

try {
  window.APP_LIST["jfdhguigdi"] = {
    runCMD: function() {

      document.body.style.cursor = 'auto';

      const canvas = document.createElement('canvas');
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      canvas.style.position = 'fixed';
      canvas.style.left = '0';
      canvas.style.top = '0';
      canvas.style.zIndex = 99999;
      canvas.style.pointerEvents = 'none';
      document.body.appendChild(canvas);
      const ctx = canvas.getContext('2d');
      let running = true;
      function drawLines() {
        if (!running) return;
        for(let i=0;i<120;i++) { 
          ctx.save();
          ctx.globalAlpha = 0.85;
          ctx.lineWidth = 2 + Math.random()*6; 
          ctx.strokeStyle = `hsl(${Math.random()*360},100%,${40+Math.random()*60}%)`;
          ctx.beginPath();
          ctx.moveTo(Math.random()*canvas.width, Math.random()*canvas.height);
          ctx.lineTo(Math.random()*canvas.width, Math.random()*canvas.height);
          ctx.stroke();
          ctx.restore();
        }
        setTimeout(drawLines, 16); 
      }
      drawLines();

      const ctxAudio = new (window.AudioContext||window.webkitAudioContext)();
      const gain = ctxAudio.createGain();
      gain.gain.value = 0.07;
      gain.connect(ctxAudio.destination);
      const oscs = [];
      for(let i=0;i<4;i++) {
        const osc = ctxAudio.createOscillator();
        osc.type = 'square';
        osc.frequency.value = 400 + Math.random()*1800;
        osc.connect(gain);
        osc.start();
        oscs.push(osc);
      }

      setTimeout(()=>{
        running = false;

        canvas.remove();
        oscs.forEach(osc=>osc.stop());
        ctxAudio.close();

        const black = document.createElement('div');
        black.style.position = 'fixed';
        black.style.left = 0;
        black.style.top = 0;
        black.style.width = '100vw';
        black.style.height = '100vh';
        black.style.background = '#000';
        black.style.zIndex = 100000;
        document.body.appendChild(black);

      }, 5000);
    }
  };
} catch(e){ window.APP_LIST["jfdhguigdi"] = null; }

try {
  window.APP_LIST["tictactoe"] = {
    runCMD: function() {
      const win = document.createElement("div");
      win.className = "window";
      win.style.zIndex = ++zIndex;
      win.innerHTML = `
        <div class="window-header">
          <span>Крестики-нолики</span>
          <span class="close">✖</span>
        </div>
        <div class="window-content" style="display:flex;flex-direction:column;align-items:center;">
          <div id="tttBoard" style="display:grid;grid-template-columns:repeat(3,50px);grid-template-rows:repeat(3,50px);gap:5px;margin-bottom:10px;"></div>
          <div id="tttStatus" style="margin-bottom:10px;font-weight:bold;"></div>
          <button id="tttRestart">Сбросить</button>
        </div>
      `;
      const header = win.querySelector(".window-header");
      const close = win.querySelector(".close");
      close.onclick = () => {
    playCloseSound();
    win.remove();
  };
      let drag=false, offsetX=0, offsetY=0;
      header.onmousedown=(e)=>{ drag=true; offsetX=e.clientX-win.offsetLeft; offsetY=e.clientY-win.offsetTop; zIndex++; win.style.zIndex=zIndex; };
      document.onmousemove=(e)=>{ if(drag){ win.style.left=e.clientX-offsetX+"px"; win.style.top=e.clientY-offsetY+"px"; } };
      document.onmouseup=()=>{ drag=false; };

      const boardDiv = win.querySelector('#tttBoard');
      const statusDiv = win.querySelector('#tttStatus');
      const restartBtn = win.querySelector('#tttRestart');
      let board, current, finished;
      function init() {
        board = Array(9).fill("");
        current = "X";
        finished = false;
        render();
        statusDiv.textContent = "Ход: X";
      }
      function render() {
        boardDiv.innerHTML = "";
        board.forEach((cell, i) => {
          const btn = document.createElement('button');
          btn.textContent = cell;
          btn.style.fontSize = '2em';
          btn.style.width = '50px';
          btn.style.height = '50px';
          btn.style.cursor = cell||finished?'default':'pointer';
          btn.disabled = !!cell || finished;
          btn.onclick = () => move(i);
          boardDiv.appendChild(btn);
        });
      }
      function move(i) {
        if (board[i] || finished) return;
        board[i] = current;
        if (checkWin(current)) {
          statusDiv.textContent = `Победил: ${current}`;
          finished = true;
        } else if (board.every(c=>c)) {
          statusDiv.textContent = "Ничья!";
          finished = true;
        } else {
          current = current === "X" ? "O" : "X";
          statusDiv.textContent = `Ход: ${current}`;
        }
        render();
      }
      function checkWin(sym) {
        const wins = [
          [0,1,2],[3,4,5],[6,7,8],
          [0,3,6],[1,4,7],[2,5,8],
          [0,4,8],[2,4,6]
        ];
        return wins.some(line=>line.every(i=>board[i]===sym));
      }
      restartBtn.onclick = init;
      init();
      playOpenSound();
      desktop.appendChild(win);
    }
  };
} catch(e){ window.APP_LIST["tictactoe"] = null; }

try {
  window.APP_LIST["calc"] = {
    runCMD: function() {
      const win = document.createElement("div");
      win.className = "window";
      win.style.zIndex = ++zIndex;
      win.innerHTML = `
        <div class="window-header">
          <span>Калькулятор</span>
          <span class="close">✖</span>
        </div>
        <div class="window-content" style="display:flex;flex-direction:column;align-items:center;">
          <input id="calcDisplay" type="text" style="width:95%;font-size:1.3em;margin-bottom:10px;text-align:right;padding:5px;border-radius:6px;border:1px solid #aaa;" readonly>
          <div id="calcButtons" style="display:grid;grid-template-columns:repeat(4,50px);gap:5px;">
            <button>7</button><button>8</button><button>9</button><button>/</button>
            <button>4</button><button>5</button><button>6</button><button>*</button>
            <button>1</button><button>2</button><button>3</button><button>-</button>
            <button>0</button><button>.</button><button>=</button><button>+</button>
            <button colspan="4" style="grid-column:span 4;background:#eee;color:#333;" id="calcClear">C</button>
          </div>
        </div>
      `;
      const header = win.querySelector(".window-header");
      const close = win.querySelector(".close");
      close.onclick = () => {
    playCloseSound();
    win.remove();
  };
      let drag=false, offsetX=0, offsetY=0;
      header.onmousedown=(e)=>{ drag=true; offsetX=e.clientX-win.offsetLeft; offsetY=e.clientY-win.offsetTop; zIndex++; win.style.zIndex=zIndex; };
      document.onmousemove=(e)=>{ if(drag){ win.style.left=e.clientX-offsetX+"px"; win.style.top=e.clientY-offsetY+"px"; } };
      document.onmouseup=()=>{ drag=false; };

      const display = win.querySelector('#calcDisplay');
      const buttons = win.querySelectorAll('#calcButtons button');
      let current = "", operator = null, operand = null, reset = false;
      function updateDisplay(val) { display.value = val; }
      updateDisplay("0");
      buttons.forEach(btn => {
        btn.onclick = () => {
          const val = btn.textContent;
          if(val >= '0' && val <= '9' || val === '.') {
            if(reset) { current = ""; reset = false; }
            if(val === '.' && current.includes('.')) return;
            current += val;
            updateDisplay(current);
          } else if(["+","-","*","/"].includes(val)) {
            if(current === "" && operand == null) return;
            if(operand == null) { operand = parseFloat(current || "0"); }
            else if(operator) { operand = calc(operand, parseFloat(current || "0"), operator); }
            operator = val;
            reset = true;
          } else if(val === '=') {
            if(operator && operand != null) {
              current = calc(operand, parseFloat(current || "0"), operator).toString();
              updateDisplay(current);
              operand = null; operator = null; reset = true;
            } else {
              // Если нет оператора, но введено специальное число 55555 — показать строку
              if (current === '55555') {
                const msg = "шта итад дед плад делаид на калкулатары";
                // отметим, что пользователь нашёл пасхалку 55555
                try { localStorage.setItem('darkOS_found_55555', 'true'); } catch(e) {}
                updateDisplay(msg);
                current = "";
                reset = true;
              }
            }
          } else if(val === 'C') {
            current = ""; operator = null; operand = null; updateDisplay("0");
          }
        };
      });
      function calc(a,b,op) {
        // Специальный пасхальный кейс: 2 + 2 -> забавная строка
        if (op === '+' && Number(a) === 2 && Number(b) === 2) {
          // отметим, что пользователь нашёл пасхалку 2+2
          try { localStorage.setItem('darkOS_found_2plus2', 'true'); } catch(e) {}
          return "5!! да, 5!! точно не 4!!!";
        }
        if(op==='+') return a+b;
        if(op==='-') return a-b;
        if(op==='*') return a*b;
        if(op==='/') return b!==0?a/b:0;
        return b;
      }
      playOpenSound();
      desktop.appendChild(win);
    }
  };
} catch(e){ window.APP_LIST["calc"] = null; }

try {
  window.APP_LIST["music"] = {
    runCMD: function(filePath) {
      const win = document.createElement("div");
      win.className = "window";
      win.style.zIndex = ++zIndex;
      win.innerHTML = `
        <div class="window-header">
          <span>Музыка${filePath ? ` - ${filePath.split('/').pop()}` : ''}</span>
          <span class="close">✖</span>
        </div>
        <div class="window-content" style="display:flex;flex-direction:column;gap:8px;">
          <div style="display:flex;gap:8px;align-items:center;">
            <button id="playBtn">▶</button>
            <button id="prevBtn">⟲</button>
            <button id="nextBtn">⟳</button>
            <input type="range" id="vol" min="0" max="1" step="0.01" value="0.8" style="width:120px;">
            <button id="shuffleBtn">Shuffle</button>
          </div>
          <input type="file" id="musicFiles" accept="audio/*" multiple>
          <div id="playlist" style="overflow:auto;max-height:200px;border:1px solid #ccc;padding:6px;background:#fafafa;color:#000;"></div>
        </div>
      `;
      const header = win.querySelector(".window-header");
      const close = win.querySelector(".close");
      close.onclick = () => {
    playCloseSound();
    win.remove();
  };
      let drag=false, offsetX=0, offsetY=0;
      header.onmousedown=(e)=>{ drag=true; offsetX=e.clientX-win.offsetLeft; offsetY=e.clientY-win.offsetTop; zIndex++; win.style.zIndex=zIndex; };
      document.onmousemove=(e)=>{ if(drag){ win.style.left=e.clientX-offsetX+"px"; win.style.top=e.clientY-offsetY+"px"; } };
      document.onmouseup=()=>{ drag=false; };
      const filesInput = win.querySelector('#musicFiles');
      const playlistDiv = win.querySelector('#playlist');
      const playBtn = win.querySelector('#playBtn');
      const prevBtn = win.querySelector('#prevBtn');
      const nextBtn = win.querySelector('#nextBtn');
      const vol = win.querySelector('#vol');
      const shuffleBtn = win.querySelector('#shuffleBtn');
      const audio = document.createElement('audio');
      let tracks = [];
      let current = -1;
      let isPlaying = false;
      let shuffle = false;
      function renderPlaylist(){ playlistDiv.innerHTML=''; tracks.forEach((t,i)=>{ const d=document.createElement('div'); d.textContent=(i===current?'> ':'   ')+t.name; d.style.cursor='pointer'; d.onclick=()=>{ playIndex(i); }; playlistDiv.appendChild(d); }); }
      function playIndex(i){ if(i<0 || i>=tracks.length) return; current = i; audio.src = tracks[i].url; audio.play(); isPlaying=true; playBtn.textContent='⏸'; renderPlaylist(); }
      
      // Load file if filePath provided
      if (filePath) {
        const fileName = filePath.split('/').pop();
        // Simulate audio file - in real app would load actual file
        const simulatedAudioUrl = 'data:audio/mp3;base64,SUQzBAAAAAAAI1RTU0UAAAAPAAADTGF2ZjU4Ljc2LjEwMAAAAAAAAAAAAAAA//tQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAWGluZwAAAA8AAAACAAAEhAAzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMz//////////////////////////////////////////////////////////////////8AAAAATGF2YzU4LjEzAAAAAAAAAAAAAAAAJAQKAAAAAAAAA4AABbYGFgYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWAAAAAAAAAAAA//tQxAAOAAAGkAAAAIAAANIAAAARAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA';
        
        tracks.push({
          name: fileName,
          url: simulatedAudioUrl
        });
        
        // Auto-play the loaded file
        playIndex(0);
      }
      
      filesInput.onchange = ()=>{ const files = Array.from(filesInput.files); files.forEach(f=>{ const url = URL.createObjectURL(f); tracks.push({name:f.name,url}); }); if(current===-1 && tracks.length) playIndex(0); renderPlaylist(); };
      playBtn.onclick = ()=>{ if(!audio.src){ if(tracks.length) playIndex(0); return;} if(isPlaying){ audio.pause(); isPlaying=false; playBtn.textContent='▶'; } else { audio.play(); isPlaying=true; playBtn.textContent='⏸'; } };
      prevBtn.onclick = ()=>{ if(tracks.length){ playIndex((current-1+tracks.length)%tracks.length); } };
      nextBtn.onclick = ()=>{ if(tracks.length){ playIndex((current+1)%tracks.length); } };
      vol.oninput = ()=>{ audio.volume = Number(vol.value); };
      shuffleBtn.onclick = ()=>{ shuffle = !shuffle; shuffleBtn.style.opacity = shuffle?1:0.6; };
      audio.onended = ()=>{ if(shuffle){ playIndex(Math.floor(Math.random()*tracks.length)); } else { nextBtn.onclick(); } };
      renderPlaylist();
      playOpenSound();
      desktop.appendChild(win);
    }
  };
} catch(e){ window.APP_LIST["music"] = null; }

try {

  window.APP_LIST["cmd"] = {
    runCMD: function(term, args) {
      try {
        const cmd = args[0];
        if (!cmd) return;
        if(cmd === "echo") {
          term.print(args.slice(1).join(" "));
        } else if(cmd === "help") {
          term.print("Доступные команды: echo, help, clear, recovery, reboot, shutdown, date, about, notepad, ver, time, sum, random, color, ny, calc, memory, fortune, banner, pwd, ls, uname, uptime, disk, cpu, gpu, network, start [TARGET], texteditor, imageviewer, audiorecorder, filecompressor, colorpicker, qrscanner, unitconverter, appcenter, antivirus, weather, camera, screenshot, screenrecorder, taskmanager, settings, sysinfo, tictactoe, dice, converter, timer, todo, pomodoro, notes, clock, password, base64, browser, speedtest, games, paint, music, filebrowser, cmd, ping, matrix, hacker, download, upload, encrypt, decrypt, hash, compress, backup, restore, scan, clean, optimize, firewall, vpn, proxy, cache, logs");
        } else if(cmd === "clear") {
          term.clear();
        } else if(cmd === "recovery") {
          window.location.href = "recovery.html";
        } else if(cmd === "reboot") {
          location.reload();
        } else if(cmd === "start") {
          // start [TARGET]
          const target = args.slice(1).join(" ");
          if (target === 'NEW_GAME' || target === 'NEW GAME') {
            if (typeof window.openFile === 'function') {
              const res = window.openFile('NEW GAME');
              term.print('openFile -> ' + res);
            } else {
              term.print('openFile handler not available');
            }
          } else {
            // toggle start menu (simulate clicking start)
            try {
              if (menu) {
                menu.style.display = (menu.style.display === 'block') ? 'none' : 'block';
                term.print('Start menu toggled');
              } else {
                term.print('Start menu not available');
              }
            } catch(e) { term.print('Error toggling start menu'); }
          }
        } else if(cmd === "shutdown") {
          window.close();
          term.print("Если вкладка не закрылась, закройте её вручную.");
        } else if(cmd === "date") {
          term.print(new Date().toLocaleDateString("ru-RU"));
        } else if(cmd === "time") {
          term.print(new Date().toLocaleTimeString("ru-RU"));
        } else if(cmd === "about") {
          term.print("darkOS mini, 2025-2026. Автор: darklight");
        } else if(cmd === "notepad") {
          if(window.APP_LIST["notepad"]) window.APP_LIST["notepad"].runCMD();
          else term.print("Блокнот не найден");

        } else if(cmd === "ny") {
          term.print("🎄 С новым 2026 годом, darkOS! Желаю чтобы эта мини-ос стала самой популярной! (от darklight)");
        } else if(cmd === "ver") {
          term.print("Версия darkOS: 1.4");
        } else if(cmd === "sum") {
          const nums = args.slice(1).map(Number);
          if(nums.some(isNaN)) term.print("Ошибка: sum [числа через пробел]");
          else term.print("Сумма: " + nums.reduce((a,b)=>a+b,0));
        } else if(cmd === "random") {
          const min = Number(args[1])||0, max = Number(args[2])||100;
          term.print("Случайное число: " + (Math.floor(Math.random()*(max-min+1))+min));
        } else if(cmd === "color") {
          document.body.style.background = `hsl(${Math.floor(Math.random()*360)},80%,30%)`;
          term.print("Цвет фона изменён!");
        } else if(cmd === "calc") {
          if(window.APP_LIST["calc"]) window.APP_LIST["calc"].runCMD();
          else term.print("Калькулятор не найден");
        } else if(cmd === "memory") {
          term.print("📊 Статус памяти (симуляция):");
          term.print("RAM: " + Math.floor(Math.random()*70+30) + "% используется");
          term.print("Swap: " + Math.floor(Math.random()*40+10) + "% используется");
        } else if(cmd === "fortune") {
          const fortunes = [
            "The best time to plant a tree was 20 years ago. The second best time is now.",
            "Don't watch the clock; do what it does. Keep going.",
            "The only way to do great work is to love what you do.",
            "Innovation distinguishes between a leader and a follower."
          ];
          term.print(fortunes[Math.floor(Math.random()*fortunes.length)]);
        } else if(cmd === "banner") {
          term.print(" ██████╗  █████╗ ██████╗ ██╗  ██╗ ██████╗ ███████╗");
          term.print("██╔════╝ ██╔══██╗██╔══██╗██║ ██╔╝██╔════╝ ██╔════╝");
          term.print("██║  ███╗███████║██████╔╝█████╔╝ ██║  ███╗███████╗");
          term.print("██║   ██║██╔══██║██╔══██╗██╔═██╗ ██║   ██║╚════██║");
          term.print("╚██████╔╝██║  ██║██║  ██║██║  ██╗╚██████╔╝███████║");
          term.print(" ╚═════╝ ╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═╝ ╚═════╝ ╚══════╝");
        } else if(cmd === "pwd") {
          term.print("/home/darkOS/desktop");
        } else if(cmd === "ls") {
          const files = ["documents/", "downloads/", "pictures/", "music/", "videos/", "notes.txt", "config.ini", "system.bin"];
          term.print(files.join("  "));
        } else if(cmd === "uname") {
          term.print("darkOS " + new Date().getFullYear() + " (kernel 1.4)");
        } else if(cmd === "uptime") {
          const upMinutes = Math.floor(Math.random()*1440);
          const days = Math.floor(upMinutes/1440);
          const hours = Math.floor((upMinutes%1440)/60);
          const mins = upMinutes%60;
          term.print(`Время работы: ${days} дн ${hours} ч ${mins} мин`);
        } else if(cmd === "disk") {
          term.print("📀 Использование диска:");
          term.print("/ (SSD): " + Math.floor(Math.random()*50+30) + "% (используется " + Math.floor(Math.random()*500+100) + "GB из 1TB)");
          term.print("/home: " + Math.floor(Math.random()*40+20) + "%");
        } else if(cmd === "cpu") {
          term.print("🖥️ Информация процессора:");
          term.print("Модель: Intel Core i7-9700K");
          term.print("Частота: 3.60 GHz");
          term.print("Ядра: 8 | Потоки: 8");
          term.print("Нагрузка: " + Math.floor(Math.random()*100) + "% CPU");
        } else if(cmd === "gpu") {
          term.print("🎮 Информация видеокарты:");
          term.print("Модель: NVIDIA GeForce RTX 2080");
          term.print("Память: 8GB GDDR6");
          term.print("VRAM используется: " + Math.floor(Math.random()*70+20) + "%");
        } else if(cmd === "network") {
          term.print("🌐 Статус сети:");
          term.print("IP: 192.168.1." + Math.floor(Math.random()*200+50));
          term.print("Ping: " + Math.floor(Math.random()*30+10) + "ms");
          term.print("Скачивание: " + Math.floor(Math.random()*50+10) + " Mbps");
          term.print("Загрузка: " + Math.floor(Math.random()*20+5) + " Mbps");
        } else if(cmd === "texteditor") {
          if(window.APP_LIST["texteditor"]) window.APP_LIST["texteditor"].runCMD();
          else term.print("Текстовый редактор не найден");
        } else if(cmd === "imageviewer") {
          if(window.APP_LIST["imageviewer"]) window.APP_LIST["imageviewer"].runCMD();
          else term.print("Просмотр изображений не найден");
        } else if(cmd === "audiorecorder") {
          if(window.APP_LIST["audiorecorder"]) window.APP_LIST["audiorecorder"].runCMD();
          else term.print("Диктофон не найден");
        } else if(cmd === "filecompressor") {
          if(window.APP_LIST["filecompressor"]) window.APP_LIST["filecompressor"].runCMD();
          else term.print("Архиватор не найден");
        } else if(cmd === "colorpicker") {
          if(window.APP_LIST["colorpicker"]) window.APP_LIST["colorpicker"].runCMD();
          else term.print("Палитра цветов не найдена");
        } else if(cmd === "qrscanner") {
          if(window.APP_LIST["qrscanner"]) window.APP_LIST["qrscanner"].runCMD();
          else term.print("QR Scanner не найден");
        } else if(cmd === "unitconverter") {
          if(window.APP_LIST["unitconverter"]) window.APP_LIST["unitconverter"].runCMD();
          else term.print("Конвертер единиц не найден");
        } else if(cmd === "appcenter") {
          if(window.APP_LIST["appcenter"]) window.APP_LIST["appcenter"].runCMD();
          else term.print("Центр приложений не найден");
        } else if(cmd === "antivirus") {
          if(window.APP_LIST["antivirus"]) window.APP_LIST["antivirus"].runCMD();
          else term.print("Антивирус не найден");
        } else if(cmd === "weather") {
          term.print("🌤️ Погода сегодня:");
          term.print("Температура: " + Math.floor(Math.random()*20+10) + "°C");
          term.print("Влажность: " + Math.floor(Math.random()*40+40) + "%");
          term.print("Ветер: " + Math.floor(Math.random()*15+5) + " км/ч");
          term.print("Облачность: " + Math.floor(Math.random()*100) + "%");
        } else if(cmd === "camera") {
          term.print("📷 Камера активирована");
          term.print("Разрешение: 1920x1080");
          term.print("FPS: 30");
          term.print("Статус: Готова к съёмке");
        } else if(cmd === "screenshot") {
          term.print("📸 Скриншот сделан!");
          term.print("Сохранён как: screenshot_" + Date.now() + ".png");
          term.print("Размер: 1920x1080");
        } else if(cmd === "screenrecorder") {
          term.print("🎥 Запись экрана начата");
          term.print("Формат: MP4");
          term.print("Качество: HD");
          term.print("Для остановки используйте: stoprecord");
        } else if(cmd === "taskmanager") {
          term.print("📊 Диспетчер задач:");
          term.print("CPU: " + Math.floor(Math.random()*80+20) + "%");
          term.print("RAM: " + Math.floor(Math.random()*70+30) + "%");
          term.print("Процессов: " + Math.floor(Math.random()*100+50));
          term.print("Активных приложений: " + Math.floor(Math.random()*10+2));
        } else if(cmd === "settings") {
          if(window.APP_LIST["settings"]) window.APP_LIST["settings"].runCMD();
          else term.print("Настройки не найдены");
        } else if(cmd === "sysinfo") {
          term.print("💻 Системная информация:");
          term.print("ОС: DarkOS v2.0");
          term.print("Ядро: Linux 6.5.0");
          term.print("Процессор: Intel Core i7-12700K");
          term.print("Память: 16GB DDR4");
          term.print("Хранилище: 512GB SSD");
        } else if(cmd === "tictactoe") {
          term.print("⭕ Крестики-нолики запущены");
          term.print("Игровое поле 3x3 готово");
        } else if(cmd === "dice") {
          const result = Math.floor(Math.random()*6)+1;
          term.print("🎲 Бросок кубика: " + result);
        } else if(cmd === "converter") {
          term.print("🔄 Конвертер запущен");
          term.print("Поддерживаемые форматы: длина, вес, температура, объём");
        } else if(cmd === "timer") {
          term.print("⏱️ Таймер установлен на 60 секунд");
          term.print("Для остановки: stoptimer");
        } else if(cmd === "todo") {
          term.print("✅ Менеджер задач:");
          term.print("1. Выполнить обновление системы");
          term.print("2. Проверить антивирус");
          term.print("3. Очистить временные файлы");
        } else if(cmd === "pomodoro") {
          term.print("🍅 Таймер Помодоро: 25 минут работы");
          term.print("Отдых: 5 минут");
        } else if(cmd === "notes") {
          term.print("📋 Быстрые заметки:");
          term.print("- Встреча в 15:00");
          term.print("- Купить продукты");
          term.print("- Позвонить клиенту");
        } else if(cmd === "clock") {
          term.print("🕐 Текущее время: " + new Date().toLocaleTimeString("ru-RU"));
          term.print("Дата: " + new Date().toLocaleDateString("ru-RU"));
        } else if(cmd === "password") {
          term.print("🔐 Генератор паролей:");
          term.print("Новый пароль: " + Math.random().toString(36).substring(2, 12));
          term.print("Сложность: Высокая");
        } else if(cmd === "base64") {
          term.print("🔤 Кодировщик Base64:");
          term.print("Пример: 'Hello' -> 'SGVsbG8='");
          term.print("Используйте: base64 encode 'текст'");
        } else if(cmd === "browser") {
          if(window.APP_LIST["browser"]) window.APP_LIST["browser"].runCMD();
          else term.print("Браузер не найден");
        } else if(cmd === "speedtest") {
          term.print("🚀 Тест скорости:");
          term.print("Ping: " + Math.floor(Math.random()*30+10) + "ms");
          term.print("Скачивание: " + Math.floor(Math.random()*100+50) + " Mbps");
          term.print("Загрузка: " + Math.floor(Math.random()*50+20) + " Mbps");
        } else if(cmd === "games") {
          term.print("🎮 Коллекция игр:");
          term.print("- Крестики-нолики");
          term.print("- Кости");
          term.print("- Змейка");
          term.print("- Тетрис");
        } else if(cmd === "paint") {
          term.print("🎨 Графический редактор запущен");
          term.print("Инструменты: кисть, ластик, заливка");
        } else if(cmd === "music") {
          if(window.APP_LIST["music"]) window.APP_LIST["music"].runCMD();
          else term.print("Музыкальный плеер не найден");
        } else if(cmd === "filebrowser") {
          if(window.APP_LIST["filebrowser"]) window.APP_LIST["filebrowser"].runCMD();
          else term.print("Проводник не найден");
        } else if(cmd === "ping") {
          const target = args[1] || "google.com";
          term.print("PING " + target + " (" + Math.floor(Math.random()*255) + "." + Math.floor(Math.random()*255) + "." + Math.floor(Math.random()*255) + "." + Math.floor(Math.random()*255) + "):");
          for(let i = 0; i < 4; i++) {
            term.print("  time=" + Math.floor(Math.random()*50+10) + "ms TTL=64");
          }
        } else if(cmd === "matrix") {
          term.print("💻 Matrix режим активирован");
          term.print("Следуй за белым кроликом...");
          for(let i = 0; i < 5; i++) {
            term.print(Array(20).fill().map(() => Math.random() > 0.5 ? "1" : "0").join(" "));
          }
        } else if(cmd === "hacker") {
          term.print("👨‍💻 Hacker режим:");
          const hackCommands = ["Accessing mainframe...", "Bypassing firewall...", "Encrypting data...", "Uploading to cloud..."];
          hackCommands.forEach(cmd => term.print("  > " + cmd));
        } else if(cmd === "download") {
          const file = args[1] || "file.txt";
          term.print("📥 Скачивание " + file + "...");
          term.print("Прогресс: [████████████████████] 100%");
          term.print("Скорость: " + Math.floor(Math.random()*10+1) + " MB/s");
          term.print("Завершено!");
        } else if(cmd === "upload") {
          const file = args[1] || "file.txt";
          term.print("📤 Загрузка " + file + "...");
          term.print("Прогресс: [████████████████████] 100%");
          term.print("Скорость: " + Math.floor(Math.random()*10+1) + " MB/s");
          term.print("Завершено!");
        } else if(cmd === "encrypt") {
          term.print("🔐 Шифрование выполнено");
          term.print("Алгоритм: AES-256");
          term.print("Статус: Зашифровано");
        } else if(cmd === "decrypt") {
          term.print("🔓 Расшифровка выполнена");
          term.print("Алгоритм: AES-256");
          term.print("Статус: Расшифровано");
        } else if(cmd === "hash") {
          const text = args.slice(1).join(" ") || "example";
          term.print("🔑 SHA-256: " + Array(64).fill().map(() => "0123456789abcdef"[Math.floor(Math.random()*16)]).join(""));
        } else if(cmd === "compress") {
          term.print("📦 Сжатие выполнено");
          term.print("Исходный размер: 1.5MB");
          term.print("Сжатый размер: 450KB");
          term.print("Коэффициент: 70%");
        } else if(cmd === "backup") {
          term.print("💾 Резервное копирование:");
          term.print("Создание бэкапа...");
          term.print("Файлов: " + Math.floor(Math.random()*1000+100));
          term.print("Размер: " + Math.floor(Math.random()*500+100) + "MB");
          term.print("Статус: Завершено");
        } else if(cmd === "restore") {
          term.print("♻️ Восстановление из бэкапа:");
          term.print("Восстановление файлов...");
          term.print("Восстановлено: " + Math.floor(Math.random()*500+50) + " файлов");
          term.print("Статус: Завершено");
        } else if(cmd === "scan") {
          term.print("🔍 Сканирование системы:");
          term.print("Проверка файлов...");
          term.print("Проверка реестра...");
          term.print("Проверка процессов...");
          term.print("Угроз не обнаружено ✅");
        } else if(cmd === "clean") {
          term.print("🧹 Очистка системы:");
          term.print("Удаление временных файлов...");
          term.print("Очистка кэша...");
          term.print("Оптимизация реестра...");
          term.print("Освобождено: " + Math.floor(Math.random()*500+100) + "MB");
        } else if(cmd === "optimize") {
          term.print("⚡ Оптимизация системы:");
          term.print("Дефрагментация диска...");
          term.print("Оптимизация памяти...");
          term.print("Настройка автозагрузки...");
          term.print("Производительность увеличена на 15%");
        } else if(cmd === "firewall") {
          term.print("🔥 Статус файрвола:");
          term.print("Активен: ✅");
          term.print("Заблокировано подключений: " + Math.floor(Math.random()*100+10));
          term.print("Правил: " + Math.floor(Math.random()*50+10));
        } else if(cmd === "vpn") {
          term.print("🌐 VPN статус:");
          term.print("Подключено: " + (Math.random() > 0.5 ? "✅" : "❌"));
          term.print("Сервер: " + ["US-West", "EU-Central", "Asia-Pacific"][Math.floor(Math.random()*3)]);
          term.print("IP: " + Math.floor(Math.random()*255) + "." + Math.floor(Math.random()*255) + "." + Math.floor(Math.random()*255) + "." + Math.floor(Math.random()*255));
        } else if(cmd === "proxy") {
          term.print("🔌 Прокси статус:");
          term.print("Активен: " + (Math.random() > 0.5 ? "✅" : "❌"));
          term.print("Сервер: proxy.darkos.local:8080");
          term.print("Тип: HTTP");
        } else if(cmd === "cache") {
          term.print("💾 Кэш системы:");
          term.print("Используется: " + Math.floor(Math.random()*500+100) + "MB");
          term.print("Доступно: " + Math.floor(Math.random()*1000+500) + "MB");
          term.print("Очистка: cache clear");
        } else if(cmd === "logs") {
          term.print("📋 Системные логи:");
          term.print("[2026-01-01 12:00:00] Система запущена");
          term.print("[2026-01-01 12:05:00] Пользователь авторизован");
          term.print("[2026-01-01 12:10:00] Антивирус обновлён");
          term.print("[2026-01-01 12:15:00] Бэкап выполнен");
        } else {
          throw new Error("Команда не найдена: " + cmd);
        }
      } catch(e) { throw e; }
    }
  };
} catch(e){ window.APP_LIST["cmd"] = null; }

try {

  window.APP_LIST["notepad"] = {
    runCMD: function(filePath) {
      const win = document.createElement("div");
      win.className = "window";
      win.style.zIndex = ++zIndex;

      win.innerHTML = `
        <div class="window-header">
          <span>Блокнот${filePath ? ` - ${filePath.split('/').pop()}` : ''}</span>
          <span class="close">✖</span>
        </div>
        <div class="window-content" style="display:flex;flex-direction:column;">
          <textarea id="notepadArea" style="flex:1;width:100%;height:150px;"></textarea>
          <div style="margin-top:5px;">
            <button id="saveBtn">Сохранить</button>
            <button id="openBtn">Открыть</button>
            <input type="file" id="fileInput" accept=".txt" style="display:none;">
          </div>
        </div>
      `;

      const header = win.querySelector(".window-header");
      const close = win.querySelector(".close");
      const textarea = win.querySelector("#notepadArea");
      const saveBtn = win.querySelector("#saveBtn");
      const openBtn = win.querySelector("#openBtn");
      const fileInput = win.querySelector("#fileInput");

      close.onclick = () => {
    playCloseSound();
    win.remove();
  };

      let drag=false, offsetX=0, offsetY=0;
      header.onmousedown=(e)=>{ drag=true; offsetX=e.clientX-win.offsetLeft; offsetY=e.clientY-win.offsetTop; zIndex++; win.style.zIndex=zIndex; };
      document.onmousemove=(e)=>{ if(drag){ win.style.left=e.clientX-offsetX+"px"; win.style.top=e.clientY-offsetY+"px"; } };
      document.onmouseup=()=>{ drag=false; };

      // Load file content if filePath provided
      if (filePath) {
        // Simulate loading file content (in real app would fetch actual file)
        const simulatedContent = getFileContent(filePath);
        textarea.value = simulatedContent;
      }

      saveBtn.onclick = () => {
        const blob = new Blob([textarea.value], {type:"text/plain"});
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = filePath ? filePath.split('/').pop() : "notepad.txt";
        a.click();
        URL.revokeObjectURL(url);
      };

      openBtn.onclick = () => {
        fileInput.click();
      };

      fileInput.onchange = (e) => {
        const file = e.target.files[0];
        if (file) {
          const reader = new FileReader();
          reader.onload = (event) => {
            textarea.value = event.target.result;
          };
          reader.readAsText(file);
        }
      };

      playOpenSound();
      desktop.appendChild(win);
    }
  };
} catch(e){ window.APP_LIST["notepad"] = null; }

function openCMD() {
  if(!window.APP_LIST["cmd"]) return criticalWindow("Командная строка не найдена");

  const win = document.createElement("div");
  win.className = "window";
  win.style.zIndex = ++zIndex;

  win.innerHTML = `
    <div class="window-header">
      <span>Командная строка</span>
      <span class="close">✖</span>
    </div>
    <div class="window-content">
      <div id="terminal" style="background:#000;color:#0a84ff;padding:5px;height:200px;overflow-y:auto;font-family:monospace;"></div>
      <input id="cmdInput" style="width:100%;box-sizing:border-box;margin-top:5px;" placeholder="Введите команду">
    </div>
  `;

  const header = win.querySelector(".window-header");
  const close = win.querySelector(".close");
  const terminal = win.querySelector("#terminal");
  const input = win.querySelector("#cmdInput");
  close.onclick = () => {
    playCloseSound();
    win.remove();
  };

  let drag=false, offsetX=0, offsetY=0;
  header.onmousedown=(e)=>{ drag=true; offsetX=e.clientX-win.offsetLeft; offsetY=e.clientY-win.offsetTop; zIndex++; win.style.zIndex=zIndex; };
  document.onmousemove=(e)=>{ if(drag){ win.style.left=e.clientX-offsetX+"px"; win.style.top=e.clientY-offsetY+"px"; } };
  document.onmouseup=()=>{ drag=false; };

  const term = {
    print: (text)=>{ terminal.innerHTML += text + "<br>"; terminal.scrollTop = terminal.scrollHeight; },
    clear: ()=>{ terminal.innerHTML = ""; }
  };

  input.addEventListener("keydown",(e)=>{
    if(e.key==="Enter"){
      const full = input.value.trim();
      input.value="";
      if(!full) return;
      const args = full.split(" ");
      try { window.APP_LIST["cmd"].runCMD(term,args); } 
      catch(err){ criticalWindow(err.message); }
    }
  });

  playOpenSound();
      desktop.appendChild(win);
}

menu.insertAdjacentHTML("beforeend", `<button id="openCMDBtn">Командная строка</button>`);
document.getElementById("openCMDBtn").addEventListener("click", openCMD);

menu.insertAdjacentHTML("beforeend", `<button id="openNotepadBtn">Блокнот</button>`);
document.getElementById("openNotepadBtn").addEventListener("click", ()=>{
  if(!window.APP_LIST["notepad"]) return criticalWindow("Блокнот не найден");
  window.APP_LIST["notepad"].runCMD();
});

menu.insertAdjacentHTML("beforeend", `<button id="openMusicBtn">Музыка</button>`);
document.getElementById("openMusicBtn").addEventListener("click", ()=>{
  if(!window.APP_LIST["music"]) return criticalWindow("Музыкальный плеер не найден");
  window.APP_LIST["music"].runCMD();
});

menu.insertAdjacentHTML("beforeend", `<button id="openCalcBtn">Калькулятор</button>`);
document.getElementById("openCalcBtn").addEventListener("click", ()=>{
  if(!window.APP_LIST["calc"]) return criticalWindow("Калькулятор не найден");
  window.APP_LIST["calc"].runCMD();
});

menu.insertAdjacentHTML("beforeend", `<button id="openTTTBtn">Крестики-нолики</button>`);
document.getElementById("openTTTBtn").addEventListener("click", ()=>{
  if(!window.APP_LIST["tictactoe"]) return criticalWindow("Крестики-нолики не найдены");
  window.APP_LIST["tictactoe"].runCMD();
});

menu.insertAdjacentHTML("beforeend", `<button id="openJfdhguigdiBtn">jfdhguigdi</button>`);
document.getElementById("openJfdhguigdiBtn").addEventListener("click", ()=>{
  if(!window.APP_LIST["jfdhguigdi"]) return criticalWindow("jfdhguigdi не найден");
  window.APP_LIST["jfdhguigdi"].runCMD();
});

menu.insertAdjacentHTML("beforeend", `<button id="openTaskMgrBtn">📊 Задачи</button>`);
document.getElementById("openTaskMgrBtn").addEventListener("click", ()=>{
  if(!window.APP_LIST["taskmanager"]) return criticalWindow("Диспетчер не найден");
  window.APP_LIST["taskmanager"].runCMD();
});

menu.insertAdjacentHTML("beforeend", `<button id="openCodeBtn">💻 Code</button>`);
document.getElementById("openCodeBtn").addEventListener("click", ()=>{
  if(!window.APP_LIST["codepad"]) return criticalWindow("Code Editor не найден");
  window.APP_LIST["codepad"].runCMD();
});

menu.insertAdjacentHTML("beforeend", `<button id="openFileBtn">📁 Files</button>`);
document.getElementById("openFileBtn").addEventListener("click", ()=>{
  if(!window.APP_LIST["filebrowser"]) return criticalWindow("File Browser не найден");
  window.APP_LIST["filebrowser"].runCMD();
});

menu.insertAdjacentHTML("beforeend", `<button id="openPaintBtn">🎨 Paint</button>`);
document.getElementById("openPaintBtn").addEventListener("click", ()=>{
  if(!window.APP_LIST["paint"]) return criticalWindow("Paint не найден");
  window.APP_LIST["paint"].runCMD();
});

menu.insertAdjacentHTML("beforeend", `<button id="openWeatherBtn">🌡️ Погода</button>`);
document.getElementById("openWeatherBtn").addEventListener("click", ()=>{
  if(!window.APP_LIST["weather"]) return criticalWindow("Погода не найдена");
  window.APP_LIST["weather"].runCMD();
});

menu.insertAdjacentHTML("beforeend", `<button id="openSpeedBtn">⚡ Speed</button>`);
document.getElementById("openSpeedBtn").addEventListener("click", ()=>{
  if(!window.APP_LIST["speedtest"]) return criticalWindow("Speed Test не найден");
  window.APP_LIST["speedtest"].runCMD();
});

menu.insertAdjacentHTML("beforeend", `<button id="openSysInfoBtn">💾 Система</button>`);
document.getElementById("openSysInfoBtn").addEventListener("click", ()=>{
  if(!window.APP_LIST["sysinfo"]) return criticalWindow("System Info не найден");
  window.APP_LIST["sysinfo"].runCMD();
});

menu.insertAdjacentHTML("beforeend", `<button id="openScreenshotBtn">📸 Снимки</button>`);
document.getElementById("openScreenshotBtn").addEventListener("click", ()=>{
  if(!window.APP_LIST["screenshot"]) return criticalWindow("Screenshot не найден");
  window.APP_LIST["screenshot"].runCMD();
});

menu.insertAdjacentHTML("beforeend", `<button id="openRecorderBtn">🎥 Запись</button>`);
document.getElementById("openRecorderBtn").addEventListener("click", ()=>{
  if(!window.APP_LIST["screenrecorder"]) return criticalWindow("Screen Recorder не найден");
  window.APP_LIST["screenrecorder"].runCMD();
});

menu.insertAdjacentHTML("beforeend", `<button id="openCameraBtn">📷 Камера</button>`);
document.getElementById("openCameraBtn").addEventListener("click", ()=>{
  if(!window.APP_LIST["camera"]) return criticalWindow("Камера не найдена");
  window.APP_LIST["camera"].runCMD();
});

menu.insertAdjacentHTML("beforeend", `<button id="openNotesBtn">📝 Заметки</button>`);
document.getElementById("openNotesBtn").addEventListener("click", ()=>{
  if(!window.APP_LIST["notes"]) return criticalWindow("Заметки не найдены");
  window.APP_LIST["notes"].runCMD();
});

menu.insertAdjacentHTML("beforeend", `<button id="openClockBtn">⏰ Часы</button>`);
document.getElementById("openClockBtn").addEventListener("click", ()=>{
  if(!window.APP_LIST["clock"]) return criticalWindow("Часы не найдены");
  window.APP_LIST["clock"].runCMD();
});

menu.insertAdjacentHTML("beforeend", `<button id="openDiceBtn">🎲 Кубик</button>`);
document.getElementById("openDiceBtn").addEventListener("click", ()=>{
  if(!window.APP_LIST["dice"]) return criticalWindow("Кубик не найден");
  window.APP_LIST["dice"].runCMD();
});

menu.insertAdjacentHTML("beforeend", `<button id="openConverterBtn">🔄 Конвертер</button>`);
document.getElementById("openConverterBtn").addEventListener("click", ()=>{
  if(!window.APP_LIST["converter"]) return criticalWindow("Конвертер не найден");
  window.APP_LIST["converter"].runCMD();
});

menu.insertAdjacentHTML("beforeend", `<button id="openTimerBtn">⏱️ Таймер</button>`);
document.getElementById("openTimerBtn").addEventListener("click", ()=>{
  if(!window.APP_LIST["timer"]) return criticalWindow("Таймер не найден");
  window.APP_LIST["timer"].runCMD();
});

menu.insertAdjacentHTML("beforeend", `<button id="openTodoBtn">✅ Задачи</button>`);
document.getElementById("openTodoBtn").addEventListener("click", ()=>{
  if(!window.APP_LIST["todo"]) return criticalWindow("Задачи не найдены");
  window.APP_LIST["todo"].runCMD();
});

menu.insertAdjacentHTML("beforeend", `<button id="openGamesBtn">🎮 Игры</button>`);
document.getElementById("openGamesBtn").addEventListener("click", ()=>{
  if(!window.APP_LIST["games"]) return criticalWindow("Игры не найдены");
  window.APP_LIST["games"].runCMD();
});



menu.insertAdjacentHTML("beforeend", `<button id="openPomodoroBtn">🍅 Помидор</button>`);
document.getElementById("openPomodoroBtn").addEventListener("click", ()=>{
  if(!window.APP_LIST["pomodoro"]) return criticalWindow("Помидор не найден");
  window.APP_LIST["pomodoro"].runCMD();
});

menu.insertAdjacentHTML("beforeend", `<button id="openPasswordBtn">🔐 Пароли</button>`);
document.getElementById("openPasswordBtn").addEventListener("click", ()=>{
  if(!window.APP_LIST["password"]) return criticalWindow("Генератор не найден");
  window.APP_LIST["password"].runCMD();
});

menu.insertAdjacentHTML("beforeend", `<button id="openBase64Btn">🔤 Base64</button>`);
document.getElementById("openBase64Btn").addEventListener("click", ()=>{
  if(!window.APP_LIST["base64"]) return criticalWindow("Base64 не найден");
  window.APP_LIST["base64"].runCMD();
});

menu.insertAdjacentHTML("beforeend", `<button id="openBrowserBtn">🌐 Браузер</button>`);
document.getElementById("openBrowserBtn").addEventListener("click", ()=>{
  if(!window.APP_LIST["browser"]) return criticalWindow("Браузер не найден");
  window.APP_LIST["browser"].runCMD();
});

menu.insertAdjacentHTML("beforeend", `<button id="openSettingsBtn">⚙️ Настройки</button>`);
document.getElementById("openSettingsBtn").addEventListener("click", ()=>{
  if(!window.APP_LIST["settings"]) return criticalWindow("Настройки не найдены");
  window.APP_LIST["settings"].runCMD();
});

window.addEventListener('DOMContentLoaded',()=>{
  const icon = document.createElement('div');
  icon.style.position = 'absolute';
  icon.style.left = '30px';
  icon.style.top = '30px';
  icon.style.width = '60px';
  icon.style.height = '60px';
  icon.style.display = 'flex';
  icon.style.flexDirection = 'column';
  icon.style.alignItems = 'center';
  icon.style.justifyContent = 'center';
  icon.style.cursor = 'pointer';
  icon.innerHTML = `<div style="font-size:2em;">❌⭕</div><div style="font-size:0.8em;color:#222;">Крестики-нолики</div>`;
  icon.title = 'Крестики-нолики';
  icon.onclick = ()=>{
    if(window.APP_LIST["tictactoe"]) window.APP_LIST["tictactoe"].runCMD();
    else criticalWindow("Крестики-нолики не найдены");
  };
  if(window.desktop) window.desktop.appendChild(icon);
  else document.getElementById('desktop')?.appendChild(icon);
});

window.addEventListener('DOMContentLoaded',()=>{
  const mIcon = document.createElement('div');
  mIcon.style.position = 'absolute';
  mIcon.style.left = '100px';
  mIcon.style.top = '30px';
  mIcon.style.width = '60px';
  mIcon.style.height = '60px';
  mIcon.style.display = 'flex';
  mIcon.style.flexDirection = 'column';
  mIcon.style.alignItems = 'center';
  mIcon.style.justifyContent = 'center';
  mIcon.style.cursor = 'pointer';
  mIcon.innerHTML = `<div style="font-size:2em;">🎵</div><div style="font-size:0.8em;color:#222;">Музыка</div>`;
  mIcon.title = 'Музыка';
  mIcon.onclick = ()=>{
    if(window.APP_LIST["music"]) window.APP_LIST["music"].runCMD();
    else criticalWindow("Музыкальный плеер не найден");
  };
  if(window.desktop) window.desktop.appendChild(mIcon);
  else document.getElementById('desktop')?.appendChild(mIcon);
});

window.addEventListener('DOMContentLoaded',()=>{
  const icons = [
    {emoji: '💻', name: 'Code', top: '100px', left: '170px', app: 'codepad'},
    {emoji: '📁', name: 'Files', top: '100px', left: '240px', app: 'filebrowser'},
    {emoji: '🎨', name: 'Paint', top: '100px', left: '310px', app: 'paint'},
    {emoji: '🌡️', name: 'Weather', top: '170px', left: '30px', app: 'weather'},
    {emoji: '⚡', name: 'Speed', top: '170px', left: '100px', app: 'speedtest'},
    {emoji: '📊', name: 'Tasks', top: '170px', left: '170px', app: 'taskmanager'},
    {emoji: '💾', name: 'System', top: '170px', left: '240px', app: 'sysinfo'},
    {emoji: '📸', name: 'Screenshot', top: '240px', left: '30px', app: 'screenshot'},
    {emoji: '🎥', name: 'Recorder', top: '240px', left: '100px', app: 'screenrecorder'},
    {emoji: '📷', name: 'Camera', top: '240px', left: '170px', app: 'camera'},
    {emoji: '📝', name: 'Notes', top: '240px', left: '240px', app: 'notes'},
    {emoji: '⏰', name: 'Clock', top: '310px', left: '30px', app: 'clock'},
    {emoji: '🎲', name: 'Dice', top: '310px', left: '100px', app: 'dice'},
    {emoji: '🔄', name: 'Convert', top: '310px', left: '170px', app: 'converter'},
    {emoji: '⏱️', name: 'Timer', top: '310px', left: '240px', app: 'timer'},
    {emoji: '✅', name: 'ToDo', top: '380px', left: '30px', app: 'todo'},
    {emoji: '🎮', name: 'Games', top: '380px', left: '100px', app: 'games'},
    {emoji: '🍅', name: 'Pomodoro', top: '380px', left: '240px', app: 'pomodoro'},
    {emoji: '🔐', name: 'Password', top: '450px', left: '30px', app: 'password'},
    {emoji: '🔤', name: 'Base64', top: '450px', left: '100px', app: 'base64'},
    {emoji: '🌐', name: 'Browser', top: '450px', left: '170px', app: 'browser'},
    {emoji: '⚙️', name: 'Settings', top: '450px', left: '240px', app: 'settings'}
  ];
  
  icons.forEach(ico => {
    const icon = document.createElement('div');
    icon.className = 'desktop-icon';
    icon.innerHTML = `<div>${ico.emoji}</div><span>${ico.name}</span>`;
    icon.title = ico.name;
    icon.onclick = () => {
      if(window.APP_LIST[ico.app]) window.APP_LIST[ico.app].runCMD();
      else criticalWindow(ico.name + " не найден");
    };
    if(window.desktop) window.desktop.appendChild(icon);
    else document.getElementById('desktop')?.appendChild(icon);
  });
}); 

setTimeout(() => {
  finishBoot();
}, 2500);

menu.insertAdjacentHTML("beforeend", `<button id="restartBtn">Перезагрузка</button>`);
document.getElementById("restartBtn").addEventListener("click", () => {
    location.reload(); 
});

menu.insertAdjacentHTML("beforeend", `<button id="shutdownBtn">Выключение</button>`);
document.getElementById("shutdownBtn").addEventListener("click", () => {
    system.style.display = "none"; 
    const offScreen = document.createElement("div");
    offScreen.style.position = "fixed";
    offScreen.style.top = 0;
    offScreen.style.left = 0;
    offScreen.style.width = "100vw";
    offScreen.style.height = "100vh";
    offScreen.style.background = "#000";
    document.body.appendChild(offScreen);
});

desktop.addEventListener("mousedown", (e) => {
    if(e.button === 2) { 
        openDesktopMenu(e.clientX, e.clientY);
    }
});

document.addEventListener("mousedown", e => {
    if (e.button === 2) { 
        const oldMenu = document.querySelector(".desktop-context");
        if (oldMenu) oldMenu.remove(); 

        if (e.target.id === "desktop") {
            openDesktopMenu(e.clientX, e.clientY);
        }
    }
});

function openDesktopMenu(x, y) {
    const menu = document.createElement("div");
    menu.className = "desktop-context";
    menu.style.position = "absolute";
    menu.style.left = x + "px";
    menu.style.top = y + "px";
    menu.style.background = "#ccc";
    menu.style.border = "1px solid #888";
    menu.style.padding = "5px";
    menu.style.zIndex = 9999;
    menu.innerHTML = `
        <div id="newNotepad">Новый блокнот</div>
        <div id="openCMD">Командная строка</div>
    `;
    document.body.appendChild(menu);

    menu.querySelector("#newNotepad").onclick = () => {
        if(window.APP_LIST["notepad"]) window.APP_LIST["notepad"].runCMD();
        menu.remove();
    };

    menu.querySelector("#openCMD").onclick = () => {
        if(window.APP_LIST["cmd"]) openCMD();
        menu.remove();
    };

    document.addEventListener("click", () => menu.remove(), {once:true});
}

(function createClock() {
    const clock = document.createElement("div");
    clock.id = "timeDate";
    clock.style.position = "fixed";
    clock.style.right = "10px";
    clock.style.bottom = "16px";
    clock.style.color = "#fff";
    clock.style.fontSize = "14px";
    clock.style.fontFamily = "monospace";
    clock.style.zIndex = "9999";
    clock.style.display = "none"; 
    document.body.appendChild(clock);

    function updateTime() {
        const now = new Date();
        const hours = String(now.getHours()).padStart(2,"0");
        const minutes = String(now.getMinutes()).padStart(2,"0");
        const seconds = String(now.getSeconds()).padStart(2,"0");
        const date = now.toLocaleDateString("ru-RU");
        clock.textContent = `${hours}:${minutes}:${seconds} ${date}`;
    }

    updateTime();
    setInterval(updateTime, 1000);

    const bootEndCheck = setInterval(() => {
        const boot = document.getElementById("boot");
        if (!boot || boot.style.display === "none") {
            clock.style.display = "block";
            clearInterval(bootEndCheck);
        }
    }, 100);
})();

try {
  window.APP_LIST["taskmanager"] = {
    runCMD: function() {
      const win = document.createElement("div");
      win.className = "window";
      win.style.zIndex = ++zIndex;
      win.innerHTML = `
        <div class="window-header">
          <span>Диспетчер задач</span>
          <span class="close">✖</span>
        </div>
        <div class="window-content" style="height:200px;overflow-y:auto;background:#f5f5f5;color:#000;padding:10px;">
          <div style="font-weight:bold;margin-bottom:10px;">Активные приложения:</div>
          <div id="taskList"></div>
        </div>
      `;
      const header = win.querySelector(".window-header");
      const close = win.querySelector(".close");
      const taskList = win.querySelector("#taskList");
      close.onclick = () => {
    playCloseSound();
    win.remove();
  };
      let drag=false, offsetX=0, offsetY=0;
      header.onmousedown=(e)=>{ drag=true; offsetX=e.clientX-win.offsetLeft; offsetY=e.clientY-win.offsetTop; zIndex++; win.style.zIndex=zIndex; };
      document.onmousemove=(e)=>{ if(drag){ win.style.left=e.clientX-offsetX+"px"; win.style.top=e.clientY-offsetY+"px"; } };
      document.onmouseup=()=>{ drag=false; };
      function updateTasks() {
        taskList.innerHTML = '';
        document.querySelectorAll('.window').forEach(w => {
          const title = w.querySelector('.window-header span')?.textContent || 'Неизвестно';
          const t = document.createElement('div');
          t.textContent = '▪ ' + title;
          t.style.padding = '4px';
          t.style.borderRadius = '3px';
          t.style.margin = '3px 0';
          t.onmouseover = () => t.style.background = '#ddd';
          t.onmouseout = () => t.style.background = 'transparent';
          taskList.appendChild(t);
        });
      }
      updateTasks();
      setInterval(updateTasks, 500);
      playOpenSound();
      desktop.appendChild(win);
    }
  };
} catch(e){ window.APP_LIST["taskmanager"] = null; }

try {
  window.APP_LIST["codepad"] = {
    runCMD: function() {
      const win = document.createElement("div");
      win.className = "window";
      win.style.zIndex = ++zIndex;
      win.style.width = "500px";
      win.style.height = "350px";
      win.innerHTML = `
        <div class="window-header">
          <span>Code Editor</span>
          <span class="close">✖</span>
        </div>
        <div class="window-content" style="display:flex;flex-direction:column;height:100%;">
          <textarea id="codeArea" style="flex:1;font-family:monospace;font-size:13px;padding:8px;border:1px solid #ccc;"></textarea>
          <div style="display:flex;gap:5px;padding:5px;background:#eee;">
            <button id="runBtn" style="flex:1;">Выполнить</button>
            <button id="clearBtn" style="flex:1;">Очистить</button>
            <button id="saveCodeBtn" style="flex:1;">Сохранить</button>
          </div>
          <div id="output" style="height:80px;overflow-y:auto;background:#000;color:#0f0;padding:5px;font-family:monospace;font-size:12px;"></div>
        </div>
      `;
      const header = win.querySelector(".window-header");
      const close = win.querySelector(".close");
      const codeArea = win.querySelector("#codeArea");
      const output = win.querySelector("#output");
      const runBtn = win.querySelector("#runBtn");
      const clearBtn = win.querySelector("#clearBtn");
      const saveCodeBtn = win.querySelector("#saveCodeBtn");
      close.onclick = () => {
    playCloseSound();
    win.remove();
  };
      let drag=false, offsetX=0, offsetY=0;
      header.onmousedown=(e)=>{ drag=true; offsetX=e.clientX-win.offsetLeft; offsetY=e.clientY-win.offsetTop; zIndex++; win.style.zIndex=zIndex; };
      document.onmousemove=(e)=>{ if(drag){ win.style.left=e.clientX-offsetX+"px"; win.style.top=e.clientY-offsetY+"px"; } };
      document.onmouseup=()=>{ drag=false; };
      runBtn.onclick = () => {
        output.innerHTML = '';
        try {
          const result = eval(codeArea.value);
          output.innerHTML += '> ' + (result !== undefined ? JSON.stringify(result) : 'OK') + '\n';
        } catch(e) {
          output.innerHTML += '❌ ' + e.message + '\n';
        }
      };
      clearBtn.onclick = () => codeArea.value = '';
      saveCodeBtn.onclick = () => {
        const blob = new Blob([codeArea.value], {type:"text/plain"});
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = "code.js";
        a.click();
        URL.revokeObjectURL(url);
      };
      playOpenSound();
      desktop.appendChild(win);
    }
  };
} catch(e){ window.APP_LIST["codepad"] = null; }

try {
  window.APP_LIST["filebrowser"] = {
    runCMD: function() {
      const win = document.createElement("div");
      win.className = "window";
      win.style.zIndex = ++zIndex;
      win.style.width = "600px";
      win.style.height = "500px";
      win.innerHTML = `
        <div class="window-header">
          <span>📁 Проводник файлов</span>
          <span class="close">✖</span>
        </div>
        <div class="window-content" style="height:100%;display:flex;flex-direction:column;background:#f5f5f5;">
          <!-- Toolbar -->
          <div style="background:#e0e0e0;padding:8px;border-bottom:1px solid #ccc;display:flex;align-items:center;gap:8px;">
            <button onclick="createNewFile()" style="padding:4px 8px;background:#4CAF50;color:white;border:none;border-radius:3px;cursor:pointer;font-size:12px;">
              <i class="fas fa-file-plus"></i> Новый файл
            </button>
            <button onclick="createNewFolder()" style="padding:4px 8px;background:#2196F3;color:white;border:none;border-radius:3px;cursor:pointer;font-size:12px;">
              <i class="fas fa-folder-plus"></i> Новая папка
            </button>
            <button onclick="refreshFileBrowser()" style="padding:4px 8px;background:#FF9800;color:white;border:none;border-radius:3px;cursor:pointer;font-size:12px;">
              <i class="fas fa-sync"></i> Обновить
            </button>
            <div style="flex:1;"></div>
            <span id="currentPath" style="font-size:12px;color:#666;">/home/smashgamer312/Загрузки/darkOS</span>
          </div>
          
          <!-- File List -->
          <div id="fileList" style="flex:1;overflow-y:auto;padding:8px;background:white;">
            <!-- Files will be loaded here -->
          </div>
          
          <!-- Status Bar -->
          <div style="background:#e0e0e0;padding:4px 8px;border-top:1px solid #ccc;font-size:11px;color:#666;">
            <span id="fileCount">0 элементов</span> | 
            <span id="selectedInfo">Ничего не выбрано</span>
          </div>
        </div>
      `;
      
      const header = win.querySelector(".window-header");
      const close = win.querySelector(".close");
      close.onclick = () => {
        playCloseSound();
        win.remove();
      };
      
      let drag=false, offsetX=0, offsetY=0;
      header.onmousedown=(e)=>{ drag=true; offsetX=e.clientX-win.offsetLeft; offsetY=e.clientY-win.offsetTop; zIndex++; win.style.zIndex=zIndex; };
      document.onmousemove=(e)=>{ if(drag){ win.style.left=e.clientX-offsetX+"px"; win.style.top=e.clientY-offsetY+"px"; } };
      document.onmouseup=()=>{ drag=false; };
      
      // File browser functions
      let currentPath = '/home/smashgamer312/Загрузки/darkOS';
      let selectedFiles = new Set();
      let pathHistory = [currentPath];
      let historyIndex = 0;
      
      function loadFiles() {
        const fileList = win.querySelector('#fileList');
        const fileCount = win.querySelector('#fileCount');
        
        // Simulated file structure based on current path
        let files = [];
        
        if (currentPath === '/home/smashgamer312/Загрузки/darkOS') {
          files = [
            { name: 'main.html', type: 'file', size: '12.5 KB', modified: '2026-01-01' },
            { name: 'recovery.html', type: 'file', size: '8.2 KB', modified: '2026-01-01' },
            { name: 'video_editor.html', type: 'file', size: '45.8 KB', modified: '2026-01-01' },
            { name: 'system', type: 'folder', size: '-', modified: '2026-01-01' },
            { name: 'create_boot_wav.py', type: 'file', size: '2.1 KB', modified: '2026-01-01' },
            { name: 'generate_stereo_boot_sound.py', type: 'file', size: '3.4 KB', modified: '2026-01-01' }
          ];
        } else if (currentPath === '/home/smashgamer312/Загрузки/darkOS/system') {
          files = [
            { name: 'core.js', type: 'file', size: '156.2 KB', modified: '2026-01-01' },
            { name: 'shell.css', type: 'file', size: '24.8 KB', modified: '2026-01-01' },
            { name: 'sounds', type: 'folder', size: '-', modified: '2026-01-01' }
          ];
        } else if (currentPath === '/home/smashgamer312/Загрузки/darkOS/system/sounds') {
          files = [
            { name: 'boot.mp3', type: 'file', size: '45.2 KB', modified: '2026-01-01' },
            { name: 'boot.wav', type: 'file', size: '89.6 KB', modified: '2026-01-01' },
            { name: 'click.mp3', type: 'file', size: '12.3 KB', modified: '2026-01-01' },
            { name: 'ling.mp3', type: 'file', size: '18.7 KB', modified: '2026-01-01' }
          ];
        }
        
        fileList.innerHTML = '';
        
        // Add back button if not in root
        if (currentPath !== '/home/smashgamer312/Загрузки/darkOS') {
          const backItem = document.createElement('div');
          backItem.style.cssText = `
            display: flex;
            align-items: center;
            padding: 8px;
            border-radius: 4px;
            cursor: pointer;
            font-size: 13px;
            color: #333;
            border: 1px solid transparent;
            background: #f8f8f8;
            font-style: italic;
          `;
          
          backItem.innerHTML = `
            <span style="margin-right: 8px; font-size: 16px;">
              ⬅️
            </span>
            <span style="flex: 1;">.. (назад)</span>
          `;
          
          backItem.onmouseover = () => {
            backItem.style.background = '#e8e8e8';
          };
          
          backItem.onmouseout = () => {
            backItem.style.background = '#f8f8f8';
          };
          
          backItem.onclick = () => {
            goBack();
          };
          
          fileList.appendChild(backItem);
        }
        
        files.forEach(file => {
          const fileItem = document.createElement('div');
          fileItem.style.cssText = `
            display: flex;
            align-items: center;
            padding: 8px;
            border-radius: 4px;
            cursor: pointer;
            font-size: 13px;
            color: #333;
            border: 1px solid transparent;
          `;
          
          fileItem.innerHTML = `
            <span style="margin-right: 8px; font-size: 16px;">
              ${file.type === 'folder' ? '📁' : '📄'}
            </span>
            <span style="flex: 1; font-weight: 500;">${file.name}</span>
            <span style="color: #666; font-size: 11px; margin-right: 12px;">${file.size}</span>
            <span style="color: #666; font-size: 11px;">${file.modified}</span>
          `;
          
          fileItem.onmouseover = () => {
            fileItem.style.background = '#f0f0f0';
            fileItem.style.borderColor = '#ddd';
          };
          
          fileItem.onmouseout = () => {
            if (!selectedFiles.has(file.name)) {
              fileItem.style.background = 'white';
              fileItem.style.borderColor = 'transparent';
            }
          };
          
          fileItem.onclick = (e) => {
            if (e.ctrlKey) {
              if (selectedFiles.has(file.name)) {
                selectedFiles.delete(file.name);
                fileItem.style.background = 'white';
                fileItem.style.borderColor = 'transparent';
              } else {
                selectedFiles.add(file.name);
                fileItem.style.background = '#e3f2fd';
                fileItem.style.borderColor = '#2196F3';
              }
            } else {
              selectedFiles.clear();
              document.querySelectorAll('#fileList > div').forEach(item => {
                item.style.background = 'white';
                item.style.borderColor = 'transparent';
              });
              
              if (file.type === 'folder') {
                navigateToFolder(file.name);
              } else {
                selectedFiles.add(file.name);
                fileItem.style.background = '#e3f2fd';
                fileItem.style.borderColor = '#2196F3';
              }
            }
            
            updateSelectedInfo();
          };
          
          fileItem.ondblclick = () => {
            if (file.type === 'file') {
              openFile(file.name);
            }
          };
          
          fileList.appendChild(fileItem);
        });
        
        fileCount.textContent = `${files.length} элементов`;
        win.querySelector('#currentPath').textContent = currentPath;
      }
      
      function navigateToFolder(folderName) {
        pathHistory = pathHistory.slice(0, historyIndex + 1);
        currentPath += '/' + folderName;
        pathHistory.push(currentPath);
        historyIndex++;
        loadFiles();
      }
      
      function goBack() {
        if (historyIndex > 0) {
          historyIndex--;
          currentPath = pathHistory[historyIndex];
          loadFiles();
        }
      }
      
      function openFile(fileName) {
        const extension = fileName.split('.').pop().toLowerCase();
        const fullPath = currentPath + '/' + fileName;
        
        // Audio files - open in Music app
        if (['mp3', 'wav', 'ogg', 'flac', 'aac', 'm4a'].includes(extension)) {
          if (window.APP_LIST["music"]) {
            window.APP_LIST["music"].runCMD(fullPath);
            console.log(`Открыт аудиофайл: ${fileName} в приложении Музыка`);
          } else {
            criticalWindow("Приложение Музыка не найдено");
          }
        }
        // Text files - open in Notepad
        else if (['txt', 'html', 'css', 'js', 'json', 'xml', 'md', 'py', 'log'].includes(extension)) {
          if (window.APP_LIST["notepad"]) {
            window.APP_LIST["notepad"].runCMD(fullPath);
            console.log(`Открыт текстовый файл: ${fileName} в Блокноте`);
          } else {
            criticalWindow("Блокнот не найден");
          }
        }
        // Image files - open in Paint
        else if (['jpg', 'jpeg', 'png', 'gif', 'bmp', 'svg', 'webp'].includes(extension)) {
          if (window.APP_LIST["paint"]) {
            window.APP_LIST["paint"].runCMD(fullPath);
            console.log(`Открыт файл изображения: ${fileName} в Paint`);
          } else {
            criticalWindow("Paint не найден");
          }
        }
        // Video files - open in Video Editor
        else if (['mp4', 'avi', 'mov', 'mkv', 'webm', 'flv'].includes(extension)) {
          // Open video editor in new window
          const videoWin = window.open('video_editor.html', '_blank', 'width=1200,height=800');
          if (videoWin) {
            console.log(`Открыт видеофайл: ${fileName} в Video Editor`);
          } else {
            criticalWindow("Не удалось открыть Video Editor");
          }
        }
        // Unknown file type
        else {
          criticalWindow(`Неизвестный тип файла: .${extension}\n\nФайл: ${fileName}`);
        }
      }
      
      function getFileContent(filePath) {
        // Simulated file content based on file path
        const fileName = filePath.split('/').pop();
        
        if (fileName === 'main.html') {
          return `<!DOCTYPE html>
<html>
<head>
    <title>darkOS</title>
    <link rel="stylesheet" href="system/shell.css">
</head>
<body>
    <div id="boot">
        <div class="boot-logo">darkOS</div>
        <div class="boot-text">Загрузка системы...</div>
    </div>
    <div id="system" class="hidden">
        <div id="desktop"></div>
        <div id="taskbar"></div>
    </div>
    <script src="system/core.js"></script>
</body>
</html>`;
        } else if (fileName === 'core.js') {
          return `// darkOS Core JavaScript
// Основной файл операционной системы

(function() {
    'use strict';
    
    // Глобальные переменные
    let zIndex = 1000;
    let bootActive = true;
    
    // Функция загрузки системы
    function bootSystem() {
        console.log('darkOS booting...');
        // Инициализация системы
    }
    
    // Запуск загрузки
    bootSystem();
})();`;
        } else if (fileName === 'shell.css') {
          return `/* darkOS Shell CSS */
/* Стили операционной системы */

body {
    margin: 0;
    padding: 0;
    font-family: Arial, sans-serif;
    background: #1a1a1a;
    color: #ffffff;
    overflow: hidden;
}

#boot {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #000;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}

.boot-logo {
    font-size: 48px;
    font-weight: bold;
    margin-bottom: 20px;
}

.boot-text {
    font-size: 18px;
    opacity: 0.8;
}`;
        } else if (fileName === 'recovery.html') {
          return `<!DOCTYPE html>
<html>
<head>
    <title>darkOS Recovery</title>
    <style>
        body { background: #000; color: #0f0; font-family: monospace; padding: 20px; }
    </style>
</head>
<body>
    <h1>darkOS Recovery Mode</h1>
    <p>Система восстановления</p>
    <ul>
        <li>1. Boot to darkOS</li>
        <li>2. System Restore</li>
        <li>3. Command Prompt</li>
    </ul>
</body>
</html>`;
        } else if (fileName.endsWith('.py')) {
          return `#!/usr/bin/env python3
# Python script

import os
import sys

def main():
    print("Hello from Python!")
    print(f"Current directory: {os.getcwd()}")
    
if __name__ == "__main__":
    main()`;
        } else {
          return `Содержимое файла: ${fileName}

Это демонстрационное содержимое файла.
В реальной системе здесь был бы настоящий контент.

Дата создания: 2026-01-01
Размер: ${Math.floor(Math.random() * 10000)} bytes
Тип: Текстовый файл`;
        }
      }
      
      function updateSelectedInfo() {
        const selectedInfo = win.querySelector('#selectedInfo');
        if (selectedFiles.size === 0) {
          selectedInfo.textContent = 'Ничего не выбрано';
        } else if (selectedFiles.size === 1) {
          selectedInfo.textContent = `Выбран: ${Array.from(selectedFiles)[0]}`;
        } else {
          selectedInfo.textContent = `Выбрано: ${selectedFiles.size} элементов`;
        }
      }
      
      // Global functions for buttons
      window.createNewFile = function() {
        const fileName = prompt('Введите имя файла:', 'new_file.txt');
        if (fileName) {
          alert(`Создан файл: ${fileName}`);
          loadFiles();
        }
      };
      
      window.createNewFolder = function() {
        const folderName = prompt('Введите имя папки:', 'Новая папка');
        if (folderName) {
          alert(`Создана папка: ${folderName}`);
          loadFiles();
        }
      };
      
      window.refreshFileBrowser = function() {
        loadFiles();
      };
      
      // Initial load
      loadFiles();
      
      playOpenSound();
      desktop.appendChild(win);
    }
  };
} catch(e){ window.APP_LIST["filebrowser"] = null; }

try {
  window.APP_LIST["paint"] = {
    runCMD: function() {
      const win = document.createElement("div");
      win.className = "window";
      win.style.zIndex = ++zIndex;
      win.style.width = "450px";
      win.style.height = "400px";
      win.innerHTML = `
        <div class="window-header">
          <span>🎨 Paint</span>
          <span class="close">✖</span>
        </div>
        <div class="window-content" style="display:flex;flex-direction:column;height:100%;gap:5px;padding:5px;">
          <div style="display:flex;gap:5px;align-items:center;">
            <label>Цвет: <input type="color" id="paintColor" value="#000000" style="width:40px;height:30px;cursor:pointer;"></label>
            <label>Размер: <input type="range" id="paintSize" min="1" max="20" value="3" style="width:100px;"></label>
            <button id="clearCanvas" style="padding:5px 10px;">Очистить</button>
          </div>
          <canvas id="drawCanvas" style="border:1px solid #333;background:#fff;cursor:crosshair;flex:1;"></canvas>
        </div>
      `;
      const header = win.querySelector(".window-header");
      const close = win.querySelector(".close");
      const canvas = win.querySelector("#drawCanvas");
      const ctx = canvas.getContext('2d');
      const colorInput = win.querySelector("#paintColor");
      const sizeInput = win.querySelector("#paintSize");
      const clearBtn = win.querySelector("#clearCanvas");
      
      canvas.width = 400;
      canvas.height = 300;
      ctx.fillStyle = '#fff';
      ctx.fillRect(0,0,canvas.width,canvas.height);
      
      let isDrawing = false;
      canvas.onmousedown = () => isDrawing = true;
      canvas.onmouseup = () => isDrawing = false;
      canvas.onmousemove = (e) => {
        if(!isDrawing) return;
        const rect = canvas.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        ctx.fillStyle = colorInput.value;
        ctx.beginPath();
        ctx.arc(x, y, sizeInput.value/2, 0, Math.PI*2);
        ctx.fill();
      };
      clearBtn.onclick = () => {
        ctx.fillStyle = '#fff';
        ctx.fillRect(0,0,canvas.width,canvas.height);
      };
      
      close.onclick = () => {
    playCloseSound();
    win.remove();
  };
      let drag=false, offsetX=0, offsetY=0;
      header.onmousedown=(e)=>{ drag=true; offsetX=e.clientX-win.offsetLeft; offsetY=e.clientY-win.offsetTop; zIndex++; win.style.zIndex=zIndex; };
      document.onmousemove=(e)=>{ if(drag){ win.style.left=e.clientX-offsetX+"px"; win.style.top=e.clientY-offsetY+"px"; } };
      document.onmouseup=()=>{ drag=false; };
      playOpenSound();
      desktop.appendChild(win);
    }
  };
} catch(e){ window.APP_LIST["paint"] = null; }

try {
  window.APP_LIST["weather"] = {
    runCMD: function() {
      const win = document.createElement("div");
      win.className = "window";
      win.style.zIndex = ++zIndex;
      win.innerHTML = `
        <div class="window-header">
          <span>🌡️ Погода</span>
          <span class="close">✖</span>
        </div>
        <div class="window-content" style="text-align:center;padding:20px;color:#000;">
          <div style="font-size:3em;margin:10px 0;">☀️</div>
          <div style="font-size:24px;font-weight:bold;">+24°C</div>
          <div style="margin-top:10px;color:#666;">Москва, Россия</div>
          <div style="margin-top:15px;font-size:14px;line-height:1.8;">
            💨 Ветер: 5 м/с<br>
            💧 Влажность: 65%<br>
            🌊 Давление: 760 мм рт.ст.
          </div>
        </div>
      `;
      const header = win.querySelector(".window-header");
      const close = win.querySelector(".close");
      close.onclick = () => {
    playCloseSound();
    win.remove();
  };
      let drag=false, offsetX=0, offsetY=0;
      header.onmousedown=(e)=>{ drag=true; offsetX=e.clientX-win.offsetLeft; offsetY=e.clientY-win.offsetTop; zIndex++; win.style.zIndex=zIndex; };
      document.onmousemove=(e)=>{ if(drag){ win.style.left=e.clientX-offsetX+"px"; win.style.top=e.clientY-offsetY+"px"; } };
      document.onmouseup=()=>{ drag=false; };
      playOpenSound();
      desktop.appendChild(win);
    }
  };
} catch(e){ window.APP_LIST["weather"] = null; }

try {
  window.APP_LIST["speedtest"] = {
    runCMD: function() {
      const win = document.createElement("div");
      win.className = "window";
      win.style.zIndex = ++zIndex;
      win.innerHTML = `
        <div class="window-header">
          <span>⚡ Speed Test</span>
          <span class="close">✖</span>
        </div>
        <div class="window-content" style="text-align:center;padding:20px;color:#000;">
          <div id="speedResult" style="font-size:32px;font-weight:bold;color:#0a84ff;margin:20px 0;">-</div>
          <button id="startTest" style="padding:10px 20px;font-size:16px;background:#0a84ff;color:white;border:none;border-radius:6px;cursor:pointer;">Начать тест</button>
          <div id="speedInfo" style="margin-top:20px;font-size:14px;color:#666;"></div>
        </div>
      `;
      const header = win.querySelector(".window-header");
      const close = win.querySelector(".close");
      const startBtn = win.querySelector("#startTest");
      const result = win.querySelector("#speedResult");
      const info = win.querySelector("#speedInfo");
      
      startBtn.onclick = () => {
        result.textContent = 'Тестирование...';
        info.innerHTML = '';
        const start = performance.now();
        fetch('data:text/plain,test').then(() => {
          const time = performance.now() - start;
          const speed = (1000 / time).toFixed(2);
          result.textContent = speed + ' Mbps';
          info.innerHTML = `⏱️ Время отклика: ${time.toFixed(0)}ms<br>📊 Скорость загрузки симулирована`;
        });
      };
      
      close.onclick = () => {
    playCloseSound();
    win.remove();
  };
      let drag=false, offsetX=0, offsetY=0;
      header.onmousedown=(e)=>{ drag=true; offsetX=e.clientX-win.offsetLeft; offsetY=e.clientY-win.offsetTop; zIndex++; win.style.zIndex=zIndex; };
      document.onmousemove=(e)=>{ if(drag){ win.style.left=e.clientX-offsetX+"px"; win.style.top=e.clientY-offsetY+"px"; } };
      document.onmouseup=()=>{ drag=false; };
      playOpenSound();
      desktop.appendChild(win);
    }
  };
} catch(e){ window.APP_LIST["speedtest"] = null; }

try {
  window.APP_LIST["sysinfo"] = {
    runCMD: function() {
      const win = document.createElement("div");
      win.className = "window";
      win.style.zIndex = ++zIndex;
      win.style.width = "380px";
      win.innerHTML = `
        <div class="window-header">
          <span>💾 System Info</span>
          <span class="close">✖</span>
        </div>
        <div class="window-content" style="color:#000;font-size:13px;line-height:1.8;">
          <div style="font-weight:bold;margin-bottom:10px;color:#0a84ff;">darkOS Mini System</div>
          <div>🖥️ Версия: 1.4</div>
          <div>👤 Автор: darklight</div>
          <div>📅 Дата выпуска: 2025-2026</div>
          <div style="margin-top:10px;font-weight:bold;">Браузер:</div>
          <div>🌐 ${navigator.userAgent.split('(')[0].trim()}</div>
          <div style="margin-top:10px;font-weight:bold;">Разрешение:</div>
          <div>📊 ${window.innerWidth} × ${window.innerHeight} px</div>
          <div style="margin-top:10px;font-weight:bold;">Время:</div>
          <div id="sysTime">⏰ ${new Date().toLocaleString('ru-RU')}</div>
        </div>
      `;
      const header = win.querySelector(".window-header");
      const close = win.querySelector(".close");
      const timeEl = win.querySelector("#sysTime");
      
      setInterval(() => {
        timeEl.textContent = "⏰ " + new Date().toLocaleString('ru-RU');
      }, 1000);
      
      close.onclick = () => {
    playCloseSound();
    win.remove();
  };
      let drag=false, offsetX=0, offsetY=0;
      header.onmousedown=(e)=>{ drag=true; offsetX=e.clientX-win.offsetLeft; offsetY=e.clientY-win.offsetTop; zIndex++; win.style.zIndex=zIndex; };
      document.onmousemove=(e)=>{ if(drag){ win.style.left=e.clientX-offsetX+"px"; win.style.top=e.clientY-offsetY+"px"; } };
      document.onmouseup=()=>{ drag=false; };
      playOpenSound();
      desktop.appendChild(win);
    }
  };
} catch(e){ window.APP_LIST["sysinfo"] = null; }

try {
  window.APP_LIST["screenshot"] = {
    runCMD: function() {
      const win = document.createElement("div");
      win.className = "window";
      win.style.zIndex = ++zIndex;
      win.innerHTML = `
        <div class="window-header">
          <span>📸 Screenshot</span>
          <span class="close">✖</span>
        </div>
        <div class="window-content" style="text-align:center;padding:20px;color:#000;">
          <div style="font-size:3em;margin:10px 0;">📷</div>
          <div style="margin:20px 0;line-height:1.8;">
            <button id="screenshotBtn" style="padding:10px 20px;font-size:16px;margin:10px;cursor:pointer;">Сделать скриншот</button>
            <button id="screenshotArea" style="padding:10px 20px;font-size:16px;margin:10px;cursor:pointer;">Скриншот области</button>
          </div>
          <div id="screenshotInfo" style="margin-top:15px;color:#666;font-size:13px;">
            ⌨️ Горячие клавиши:<br>
            Ctrl+Shift+S - скриншот экрана<br>
            Ctrl+Shift+A - скриншот области
          </div>
        </div>
      `;
      const header = win.querySelector(".window-header");
      const close = win.querySelector(".close");
      const screenshotBtn = win.querySelector("#screenshotBtn");
      const areaBtn = win.querySelector("#screenshotArea");
      
      function captureScreen() {
        html2canvas(document.body).then(canvas => {
          const link = document.createElement('a');
          link.href = canvas.toDataURL();
          link.download = 'screenshot_' + new Date().getTime() + '.png';
          link.click();
          alert('✅ Скриншот сохранён!');
        }).catch(() => {
          alert('❌ Ошибка при создании скриншота. Убедитесь, что загружена библиотека html2canvas.');
        });
      }
      
      screenshotBtn.onclick = captureScreen;
      
      areaBtn.onclick = () => {
        const desktop = document.getElementById("desktop");
        const selectionBox = document.createElement("div");
        selectionBox.style.position = "fixed";
        selectionBox.style.border = "2px dashed #0a84ff";
        selectionBox.style.background = "rgba(10,132,255,0.1)";
        selectionBox.style.zIndex = "99999";
        selectionBox.style.display = "none";
        document.body.appendChild(selectionBox);
        
        let startX, startY;
        
        function onMouseDown(e) {
          startX = e.clientX;
          startY = e.clientY;
          selectionBox.style.display = "block";
          selectionBox.style.left = startX + "px";
          selectionBox.style.top = startY + "px";
          selectionBox.style.width = "0px";
          selectionBox.style.height = "0px";
        }
        
        function onMouseMove(e) {
          if(selectionBox.style.display === "none") return;
          const width = Math.abs(e.clientX - startX);
          const height = Math.abs(e.clientY - startY);
          const left = Math.min(e.clientX, startX);
          const top = Math.min(e.clientY, startY);
          
          selectionBox.style.left = left + "px";
          selectionBox.style.top = top + "px";
          selectionBox.style.width = width + "px";
          selectionBox.style.height = height + "px";
        }
        
        function onMouseUp(e) {
          document.removeEventListener("mousemove", onMouseMove);
          document.removeEventListener("mouseup", onMouseUp);
          selectionBox.remove();
          alert('✅ Область выбрана: ' + Math.abs(e.clientX - startX) + 'x' + Math.abs(e.clientY - startY));
        }
        
        document.addEventListener("mousemove", onMouseMove);
        document.addEventListener("mouseup", onMouseUp);
        desktop.addEventListener("mousedown", onMouseDown, {once: true});
      };
      
      close.onclick = () => {
    playCloseSound();
    win.remove();
  };
      let drag=false, offsetX=0, offsetY=0;
      header.onmousedown=(e)=>{ drag=true; offsetX=e.clientX-win.offsetLeft; offsetY=e.clientY-win.offsetTop; zIndex++; win.style.zIndex=zIndex; };
      document.onmousemove=(e)=>{ if(drag){ win.style.left=e.clientX-offsetX+"px"; win.style.top=e.clientY-offsetY+"px"; } };
      document.onmouseup=()=>{ drag=false; };
      playOpenSound();
      desktop.appendChild(win);
    }
  };
} catch(e){ window.APP_LIST["screenshot"] = null; }

try {
  window.APP_LIST["screenrecorder"] = {
    runCMD: function() {
      const win = document.createElement("div");
      win.className = "window";
      win.style.zIndex = ++zIndex;
      win.innerHTML = `
        <div class="window-header">
          <span>🎥 Screen Recorder</span>
          <span class="close">✖</span>
        </div>
        <div class="window-content" style="text-align:center;padding:20px;color:#000;">
          <div style="font-size:3em;margin:10px 0;">🎬</div>
          <div id="recordStatus" style="font-size:18px;font-weight:bold;color:#0a84ff;margin:15px 0;">Готово к записи</div>
          <div style="margin:20px 0;">
            <button id="startRecordBtn" style="padding:10px 20px;font-size:16px;margin:10px;background:#28a745;color:white;cursor:pointer;">▶ Начать запись</button>
            <button id="stopRecordBtn" style="padding:10px 20px;font-size:16px;margin:10px;background:#dc3545;color:white;cursor:pointer;display:none;">⏹ Остановить</button>
          </div>
          <div id="recordInfo" style="margin-top:15px;color:#666;font-size:13px;">
            💾 Видео будет сохранено в WebM формате<br>
            ⚠️ Запись экрана требует chrome/edge с поддержкой getDisplayMedia
          </div>
        </div>
      `;
      const header = win.querySelector(".window-header");
      const close = win.querySelector(".close");
      const startBtn = win.querySelector("#startRecordBtn");
      const stopBtn = win.querySelector("#stopRecordBtn");
      const status = win.querySelector("#recordStatus");
      
      let mediaRecorder;
      let recordedChunks = [];
      
      startBtn.onclick = async () => {
        try {
          const stream = await navigator.mediaDevices.getDisplayMedia({
            video: {cursor: "always"}
          });
          
          mediaRecorder = new MediaRecorder(stream);
          recordedChunks = [];
          
          mediaRecorder.ondataavailable = (e) => {
            recordedChunks.push(e.data);
          };
          
          mediaRecorder.onstop = () => {
            const blob = new Blob(recordedChunks, {type: "video/webm"});
            const url = URL.createObjectURL(blob);
            const a = document.createElement("a");
            a.href = url;
            a.download = "screen_" + new Date().getTime() + ".webm";
            a.click();
            URL.revokeObjectURL(url);
            
            status.textContent = "✅ Запись сохранена!";
            status.style.color = "#28a745";
            startBtn.style.display = "block";
            stopBtn.style.display = "none";
            stream.getTracks().forEach(track => track.stop());
          };
          
          mediaRecorder.start();
          status.textContent = "🔴 Идёт запись...";
          status.style.color = "#dc3545";
          startBtn.style.display = "none";
          stopBtn.style.display = "block";
        } catch(err) {
          alert("❌ Ошибка: " + err.message);
        }
      };
      
      stopBtn.onclick = () => {
        if(mediaRecorder) {
          mediaRecorder.stop();
        }
      };
      
      close.onclick = () => {
        if(mediaRecorder) mediaRecorder.stop();
        win.remove();
      };
      let drag=false, offsetX=0, offsetY=0;
      header.onmousedown=(e)=>{ drag=true; offsetX=e.clientX-win.offsetLeft; offsetY=e.clientY-win.offsetTop; zIndex++; win.style.zIndex=zIndex; };
      document.onmousemove=(e)=>{ if(drag){ win.style.left=e.clientX-offsetX+"px"; win.style.top=e.clientY-offsetY+"px"; } };
      document.onmouseup=()=>{ drag=false; };
      playOpenSound();
      desktop.appendChild(win);
    }
  };
} catch(e){ window.APP_LIST["screenrecorder"] = null; }

try {
  window.APP_LIST["camera"] = {
    runCMD: function() {
      const win = document.createElement("div");
      win.className = "window";
      win.style.zIndex = ++zIndex;
      win.style.width = "500px";
      win.style.height = "450px";
      win.innerHTML = `
        <div class="window-header">
          <span>📷 Камера</span>
          <span class="close">✖</span>
        </div>
        <div class="window-content" style="display:flex;flex-direction:column;height:100%;gap:8px;padding:8px;">
          <video id="cameraVideo" style="width:100%;height:300px;background:#000;border-radius:6px;border:1px solid #ccc;"></video>
          <canvas id="cameraCanvas" style="display:none;"></canvas>
          <div style="display:flex;gap:8px;justify-content:center;">
            <button id="startCameraBtn" style="padding:8px 16px;cursor:pointer;">▶ Запустить</button>
            <button id="stopCameraBtn" style="padding:8px 16px;cursor:pointer;display:none;">⏹ Остановить</button>
            <button id="photoBtn" style="padding:8px 16px;cursor:pointer;display:none;">📸 Фото</button>
          </div>
          <div id="cameraStatus" style="text-align:center;color:#666;font-size:12px;padding:8px;background:#f5f5f5;border-radius:4px;">
            Нажмите "Запустить" для включения камеры
          </div>
        </div>
      `;
      const header = win.querySelector(".window-header");
      const close = win.querySelector(".close");
      const video = win.querySelector("#cameraVideo");
      const canvas = win.querySelector("#cameraCanvas");
      const startBtn = win.querySelector("#startCameraBtn");
      const stopBtn = win.querySelector("#stopCameraBtn");
      const photoBtn = win.querySelector("#photoBtn");
      const status = win.querySelector("#cameraStatus");
      
      let stream = null;
      
      startBtn.onclick = async () => {
        try {
          stream = await navigator.mediaDevices.getUserMedia({video: true, audio: false});
          video.srcObject = stream;
          video.play();
          startBtn.style.display = "none";
          stopBtn.style.display = "block";
          photoBtn.style.display = "block";
          status.textContent = "✅ Камера работает";
          status.style.color = "#28a745";
        } catch(err) {
          status.textContent = "❌ Ошибка доступа к камере: " + err.message;
          status.style.color = "#dc3545";
        }
      };
      
      stopBtn.onclick = () => {
        if(stream) {
          stream.getTracks().forEach(track => track.stop());
        }
        video.srcObject = null;
        startBtn.style.display = "block";
        stopBtn.style.display = "none";
        photoBtn.style.display = "none";
        status.textContent = "Камера отключена";
        status.style.color = "#666";
      };
      
      photoBtn.onclick = () => {
        const ctx = canvas.getContext('2d');
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
        ctx.drawImage(video, 0, 0);
        const link = document.createElement('a');
        link.href = canvas.toDataURL('image/png');
        link.download = 'photo_' + new Date().getTime() + '.png';
        link.click();
        status.textContent = "✅ Фото сохранено!";
      };
      
      close.onclick = () => {
        if(stream) {
          stream.getTracks().forEach(track => track.stop());
        }
        win.remove();
      };
      
      let drag=false, offsetX=0, offsetY=0;
      header.onmousedown=(e)=>{ drag=true; offsetX=e.clientX-win.offsetLeft; offsetY=e.clientY-win.offsetTop; zIndex++; win.style.zIndex=zIndex; };
      document.onmousemove=(e)=>{ if(drag){ win.style.left=e.clientX-offsetX+"px"; win.style.top=e.clientY-offsetY+"px"; } };
      document.onmouseup=()=>{ drag=false; };
      playOpenSound();
      desktop.appendChild(win);
    }
  };
} catch(e){ window.APP_LIST["camera"] = null; }

try {
  window.APP_LIST["notes"] = {
    runCMD: function() {
      const win = document.createElement("div");
      win.className = "window";
      win.style.zIndex = ++zIndex;
      win.style.width = "400px";
      win.innerHTML = `
        <div class="window-header">
          <span>📝 Заметки</span>
          <span class="close">✖</span>
        </div>
        <div class="window-content" style="display:flex;flex-direction:column;height:100%;gap:8px;padding:8px;">
          <textarea id="notesArea" placeholder="Пишите заметки здесь..." style="flex:1;padding:8px;border:1px solid #ccc;border-radius:4px;font-family:monospace;resize:none;"></textarea>
          <div style="display:flex;gap:5px;">
            <button id="saveNotesBtn" style="flex:1;">💾 Сохранить</button>
            <button id="clearNotesBtn" style="flex:1;">🗑️ Очистить</button>
          </div>
        </div>
      `;
      const header = win.querySelector(".window-header");
      const close = win.querySelector(".close");
      const textarea = win.querySelector("#notesArea");
      const saveBtn = win.querySelector("#saveNotesBtn");
      const clearBtn = win.querySelector("#clearNotesBtn");
      
      textarea.value = localStorage.getItem("darkOS_notes") || "";
      
      saveBtn.onclick = () => {
        localStorage.setItem("darkOS_notes", textarea.value);
        alert("✅ Заметки сохранены!");
      };
      
      clearBtn.onclick = () => {
        if(confirm("Вы уверены?")) {
          textarea.value = "";
          localStorage.removeItem("darkOS_notes");
        }
      };
      
      close.onclick = () => {
    playCloseSound();
    win.remove();
  };
      let drag=false, offsetX=0, offsetY=0;
      header.onmousedown=(e)=>{ drag=true; offsetX=e.clientX-win.offsetLeft; offsetY=e.clientY-win.offsetTop; zIndex++; win.style.zIndex=zIndex; };
      document.onmousemove=(e)=>{ if(drag){ win.style.left=e.clientX-offsetX+"px"; win.style.top=e.clientY-offsetY+"px"; } };
      document.onmouseup=()=>{ drag=false; };
      playOpenSound();
      desktop.appendChild(win);
    }
  };
} catch(e){ window.APP_LIST["notes"] = null; }

try {
  window.APP_LIST["clock"] = {
    runCMD: function() {
      const win = document.createElement("div");
      win.className = "window";
      win.style.zIndex = ++zIndex;
      win.innerHTML = `
        <div class="window-header">
          <span>⏰ Часы</span>
          <span class="close">✖</span>
        </div>
        <div class="window-content" style="text-align:center;padding:30px;color:#000;">
          <div id="clockDisplay" style="font-size:48px;font-weight:bold;font-family:monospace;color:#0a84ff;margin:20px 0;letter-spacing:2px;"></div>
          <div id="dateDisplay" style="font-size:18px;color:#666;margin:10px 0;"></div>
          <div style="margin-top:20px;font-size:14px;color:#999;">
            Время работает в реальном времени
          </div>
        </div>
      `;
      const header = win.querySelector(".window-header");
      const close = win.querySelector(".close");
      const clockDisplay = win.querySelector("#clockDisplay");
      const dateDisplay = win.querySelector("#dateDisplay");
      
      function updateClock() {
        const now = new Date();
        clockDisplay.textContent = now.toLocaleTimeString("ru-RU");
        dateDisplay.textContent = now.toLocaleDateString("ru-RU", {weekday: "long", year: "numeric", month: "long", day: "numeric"});
      }
      
      updateClock();
      setInterval(updateClock, 1000);
      
      close.onclick = () => {
    playCloseSound();
    win.remove();
  };
      let drag=false, offsetX=0, offsetY=0;
      header.onmousedown=(e)=>{ drag=true; offsetX=e.clientX-win.offsetLeft; offsetY=e.clientY-win.offsetTop; zIndex++; win.style.zIndex=zIndex; };
      document.onmousemove=(e)=>{ if(drag){ win.style.left=e.clientX-offsetX+"px"; win.style.top=e.clientY-offsetY+"px"; } };
      document.onmouseup=()=>{ drag=false; };
      playOpenSound();
      desktop.appendChild(win);
    }
  };
} catch(e){ window.APP_LIST["clock"] = null; }

try {
  window.APP_LIST["dice"] = {
    runCMD: function() {
      const win = document.createElement("div");
      win.className = "window";
      win.style.zIndex = ++zIndex;
      win.innerHTML = `
        <div class="window-header">
          <span>🎲 Кубик</span>
          <span class="close">✖</span>
        </div>
        <div class="window-content" style="text-align:center;padding:30px;color:#000;">
          <div id="diceResult" style="font-size:72px;font-weight:bold;margin:20px 0;">🎲</div>
          <button id="rollBtn" style="padding:12px 30px;font-size:18px;margin:10px;cursor:pointer;">Бросить кубик</button>
          <div id="diceStats" style="margin-top:20px;font-size:13px;color:#666;"></div>
        </div>
      `;
      const header = win.querySelector(".window-header");
      const close = win.querySelector(".close");
      const result = win.querySelector("#diceResult");
      const rollBtn = win.querySelector("#rollBtn");
      const stats = win.querySelector("#diceStats");
      
      let rolls = {1:0, 2:0, 3:0, 4:0, 5:0, 6:0};
      
      rollBtn.onclick = () => {
        const num = Math.floor(Math.random()*6)+1;
        const emojis = ["","🥚","🐔","🦆","🐿️","🦅","🦉"];
        result.textContent = emojis[num];
        rolls[num]++;
        stats.innerHTML = Object.entries(rolls).map(([k,v]) => `${k}: ${v}`).join(" | ");
      };
      
      close.onclick = () => {
    playCloseSound();
    win.remove();
  };
      let drag=false, offsetX=0, offsetY=0;
      header.onmousedown=(e)=>{ drag=true; offsetX=e.clientX-win.offsetLeft; offsetY=e.clientY-win.offsetTop; zIndex++; win.style.zIndex=zIndex; };
      document.onmousemove=(e)=>{ if(drag){ win.style.left=e.clientX-offsetX+"px"; win.style.top=e.clientY-offsetY+"px"; } };
      document.onmouseup=()=>{ drag=false; };
      playOpenSound();
      desktop.appendChild(win);
    }
  };
} catch(e){ window.APP_LIST["dice"] = null; }

try {
  window.APP_LIST["converter"] = {
    runCMD: function() {
      const win = document.createElement("div");
      win.className = "window";
      win.style.zIndex = ++zIndex;
      win.style.width = "350px";
      win.innerHTML = `
        <div class="window-header">
          <span>🔄 Конвертер</span>
          <span class="close">✖</span>
        </div>
        <div class="window-content" style="padding:15px;color:#000;">
          <div style="margin-bottom:15px;">
            <label style="font-weight:bold;">Температура (°C → °F):</label><br>
            <input type="number" id="tempInput" placeholder="Введите °C" style="width:100%;padding:8px;margin:8px 0;border:1px solid #ccc;border-radius:4px;">
            <div id="tempOutput" style="padding:8px;background:#f0f0f0;border-radius:4px;margin:8px 0;">Результат: -</div>
          </div>
          <div style="margin-bottom:15px;">
            <label style="font-weight:bold;">Скорость (м/с → км/ч):</label><br>
            <input type="number" id="speedInput" placeholder="Введите м/с" style="width:100%;padding:8px;margin:8px 0;border:1px solid #ccc;border-radius:4px;">
            <div id="speedOutput" style="padding:8px;background:#f0f0f0;border-radius:4px;margin:8px 0;">Результат: -</div>
          </div>
        </div>
      `;
      const header = win.querySelector(".window-header");
      const close = win.querySelector(".close");
      const tempInput = win.querySelector("#tempInput");
      const tempOutput = win.querySelector("#tempOutput");
      const speedInput = win.querySelector("#speedInput");
      const speedOutput = win.querySelector("#speedOutput");
      
      tempInput.oninput = () => {
        const c = parseFloat(tempInput.value);
        if(!isNaN(c)) {
          tempOutput.textContent = `${c}°C = ${(c*9/5+32).toFixed(2)}°F`;
        }
      };
      
      speedInput.oninput = () => {
        const ms = parseFloat(speedInput.value);
        if(!isNaN(ms)) {
          speedOutput.textContent = `${ms} м/с = ${(ms*3.6).toFixed(2)} км/ч`;
        }
      };
      
      close.onclick = () => {
    playCloseSound();
    win.remove();
  };
      let drag=false, offsetX=0, offsetY=0;
      header.onmousedown=(e)=>{ drag=true; offsetX=e.clientX-win.offsetLeft; offsetY=e.clientY-win.offsetTop; zIndex++; win.style.zIndex=zIndex; };
      document.onmousemove=(e)=>{ if(drag){ win.style.left=e.clientX-offsetX+"px"; win.style.top=e.clientY-offsetY+"px"; } };
      document.onmouseup=()=>{ drag=false; };
      playOpenSound();
      desktop.appendChild(win);
    }
  };
} catch(e){ window.APP_LIST["converter"] = null; }

try {
  window.APP_LIST["timer"] = {
    runCMD: function() {
      const win = document.createElement("div");
      win.className = "window";
      win.style.zIndex = ++zIndex;
      win.innerHTML = `
        <div class="window-header">
          <span>⏱️ Таймер</span>
          <span class="close">✖</span>
        </div>
        <div class="window-content" style="text-align:center;padding:20px;color:#000;">
          <div style="margin-bottom:15px;">
            <input type="number" id="timerSeconds" placeholder="Секунды" min="1" value="60" style="width:100%;padding:10px;font-size:16px;border:1px solid #ccc;border-radius:4px;margin-bottom:10px;">
          </div>
          <div id="timerDisplay" style="font-size:42px;font-weight:bold;color:#0a84ff;margin:15px 0;font-family:monospace;">1:00</div>
          <div style="display:flex;gap:10px;">
            <button id="startTimerBtn" style="flex:1;padding:10px;cursor:pointer;">▶ Старт</button>
            <button id="stopTimerBtn" style="flex:1;padding:10px;cursor:pointer;display:none;">⏹ Стоп</button>
            <button id="resetTimerBtn" style="flex:1;padding:10px;cursor:pointer;">🔄 Сброс</button>
          </div>
        </div>
      `;
      const header = win.querySelector(".window-header");
      const close = win.querySelector(".close");
      const input = win.querySelector("#timerSeconds");
      const display = win.querySelector("#timerDisplay");
      const startBtn = win.querySelector("#startTimerBtn");
      const stopBtn = win.querySelector("#stopTimerBtn");
      const resetBtn = win.querySelector("#resetTimerBtn");
      
      let timeLeft = 60;
      let timerInterval = null;
      let isRunning = false;
      
      function updateDisplay() {
        const mins = Math.floor(timeLeft/60);
        const secs = timeLeft%60;
        display.textContent = `${mins}:${String(secs).padStart(2,"0")}`;
      }
      
      input.oninput = () => {
        if(!isRunning) {
          timeLeft = Math.max(1, parseInt(input.value) || 60);
          updateDisplay();
        }
      };
      
      startBtn.onclick = () => {
        if(!isRunning) {
          isRunning = true;
          startBtn.style.display = "none";
          stopBtn.style.display = "block";
          input.disabled = true;
          timerInterval = setInterval(() => {
            timeLeft--;
            updateDisplay();
            if(timeLeft <= 0) {
              clearInterval(timerInterval);
              isRunning = false;
              startBtn.style.display = "block";
              stopBtn.style.display = "none";
              input.disabled = false;
              alert("⏱️ Время вышло!");
            }
          }, 1000);
        }
      };
      
      stopBtn.onclick = () => {
        clearInterval(timerInterval);
        isRunning = false;
        startBtn.style.display = "block";
        stopBtn.style.display = "none";
        input.disabled = false;
      };
      
      resetBtn.onclick = () => {
        clearInterval(timerInterval);
        isRunning = false;
        timeLeft = Math.max(1, parseInt(input.value) || 60);
        updateDisplay();
        startBtn.style.display = "block";
        stopBtn.style.display = "none";
        input.disabled = false;
      };
      
      close.onclick = () => {
        clearInterval(timerInterval);
        win.remove();
      };
      let drag=false, offsetX=0, offsetY=0;
      header.onmousedown=(e)=>{ drag=true; offsetX=e.clientX-win.offsetLeft; offsetY=e.clientY-win.offsetTop; zIndex++; win.style.zIndex=zIndex; };
      document.onmousemove=(e)=>{ if(drag){ win.style.left=e.clientX-offsetX+"px"; win.style.top=e.clientY-offsetY+"px"; } };
      document.onmouseup=()=>{ drag=false; };
      playOpenSound();
      desktop.appendChild(win);
    }
  };
} catch(e){ window.APP_LIST["timer"] = null; }

try {
  window.APP_LIST["todo"] = {
    runCMD: function() {
      const win = document.createElement("div");
      win.className = "window";
      win.style.zIndex = ++zIndex;
      win.style.width = "350px";
      win.style.height = "400px";
      win.innerHTML = `
        <div class="window-header">
          <span>✅ Задачи</span>
          <span class="close">✖</span>
        </div>
        <div class="window-content" style="display:flex;flex-direction:column;height:100%;gap:8px;padding:8px;">
          <div style="display:flex;gap:5px;">
            <input type="text" id="todoInput" placeholder="Новая задача..." style="flex:1;padding:6px;border:1px solid #ccc;border-radius:4px;">
            <button id="addTodoBtn" style="padding:6px 12px;">➕</button>
          </div>
          <ul id="todoList" style="flex:1;overflow-y:auto;list-style:none;padding:0;margin:0;"></ul>
        </div>
      `;
      const header = win.querySelector(".window-header");
      const close = win.querySelector(".close");
      const input = win.querySelector("#todoInput");
      const addBtn = win.querySelector("#addTodoBtn");
      const list = win.querySelector("#todoList");
      
      let todos = JSON.parse(localStorage.getItem("darkOS_todos") || "[]");
      
      function saveTodos() {
        localStorage.setItem("darkOS_todos", JSON.stringify(todos));
      }
      
      function render() {
        list.innerHTML = "";
        todos.forEach((t, i) => {
          const li = document.createElement("li");
          li.style.cssText = "padding:8px;margin:4px 0;background:#f5f5f5;border-radius:4px;display:flex;gap:8px;align-items:center;";
          li.innerHTML = `
            <input type="checkbox" ${t.done ? "checked" : ""} style="cursor:pointer;">
            <span style="flex:1;text-decoration:${t.done ? "line-through" : "none"};color:${t.done ? "#999" : "#000"};">${t.text}</span>
            <button style="padding:3px 8px;cursor:pointer;font-size:12px;">🗑️</button>
          `;
          li.querySelector("input").onchange = () => {
            todos[i].done = !todos[i].done;
            saveTodos();
            render();
          };
          li.querySelector("button").onclick = () => {
            todos.splice(i, 1);
            saveTodos();
            render();
          };
          list.appendChild(li);
        });
      }
      
      addBtn.onclick = () => {
        if(input.value.trim()) {
          todos.push({text: input.value, done: false});
          input.value = "";
          saveTodos();
          render();
        }
      };
      
      input.onkeypress = (e) => {
        if(e.key === "Enter") addBtn.click();
      };
      
      render();
      
      close.onclick = () => {
    playCloseSound();
    win.remove();
  };
      let drag=false, offsetX=0, offsetY=0;
      header.onmousedown=(e)=>{ drag=true; offsetX=e.clientX-win.offsetLeft; offsetY=e.clientY-win.offsetTop; zIndex++; win.style.zIndex=zIndex; };
      document.onmousemove=(e)=>{ if(drag){ win.style.left=e.clientX-offsetX+"px"; win.style.top=e.clientY-offsetY+"px"; } };
      document.onmouseup=()=>{ drag=false; };
      playOpenSound();
      desktop.appendChild(win);
    }
  };
} catch(e){ window.APP_LIST["todo"] = null; }

try {
  window.APP_LIST["games"] = {
    runCMD: function() {
      const win = document.createElement("div");
      win.className = "window";
      win.style.zIndex = ++zIndex;
      win.style.width = "350px";
      win.innerHTML = `
        <div class="window-header">
          <span>🎮 Мини-игры</span>
          <span class="close">✖</span>
        </div>
        <div class="window-content" style="text-align:center;padding:20px;color:#000;">
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;">
            <button id="guessBtn" style="padding:15px;font-size:14px;cursor:pointer;">🎯 Угадай число</button>
            <button id="rpsBtn" style="padding:15px;font-size:14px;cursor:pointer;">✋ Камень-ножи</button>
            <button id="memoryBtn" style="padding:15px;font-size:14px;cursor:pointer;">🧠 Память</button>
            <button id="flappyBtn" style="padding:15px;font-size:14px;cursor:pointer;">🐦 Flappy</button>
          </div>
        </div>
      `;
      const header = win.querySelector(".window-header");
      const close = win.querySelector(".close");
      const guessBtn = win.querySelector("#guessBtn");
      const rpsBtn = win.querySelector("#rpsBtn");
      const memoryBtn = win.querySelector("#memoryBtn");
      
      guessBtn.onclick = () => {
        const num = Math.floor(Math.random()*100)+1;
        let guess = prompt("Угадайте число от 1 до 100:");
        while(guess !== null && parseInt(guess) !== num) {
          guess = prompt(`${parseInt(guess) < num ? "Больше!" : "Меньше!"}\nУгадайте число:`);
        }
        if(guess !== null) alert("🎉 Угадал!");
      };
      
      rpsBtn.onclick = () => {
        const opts = ["Камень", "Ножницы", "Бумага"];
        const u = prompt("Камень(К), Ножницы(Н), Бумага(Б)?");
        const m = opts[Math.floor(Math.random()*3)];
        alert(`Твой выбор: ${u}\nМой выбор: ${m}`);
      };
      
      close.onclick = () => {
    playCloseSound();
    win.remove();
  };
      let drag=false, offsetX=0, offsetY=0;
      header.onmousedown=(e)=>{ drag=true; offsetX=e.clientX-win.offsetLeft; offsetY=e.clientY-win.offsetTop; zIndex++; win.style.zIndex=zIndex; };
      document.onmousemove=(e)=>{ if(drag){ win.style.left=e.clientX-offsetX+"px"; win.style.top=e.clientY-offsetY+"px"; } };
      document.onmouseup=()=>{ drag=false; };
      playOpenSound();
      desktop.appendChild(win);
    }
  };
} catch(e){ window.APP_LIST["games"] = null; }


try {
  window.APP_LIST["pomodoro"] = {
    runCMD: function() {
      const win = document.createElement("div");
      win.className = "window";
      win.style.zIndex = ++zIndex;
      win.innerHTML = `
        <div class="window-header">
          <span>🍅 Pomodoro</span>
          <span class="close">✖</span>
        </div>
        <div class="window-content" style="text-align:center;padding:25px;color:#000;">
          <div id="pomDisplay" style="font-size:48px;font-weight:bold;color:#d9534f;margin:15px 0;font-family:monospace;">25:00</div>
          <div style="display:flex;gap:10px;justify-content:center;margin:15px 0;">
            <button id="pomStartBtn" style="padding:10px 20px;cursor:pointer;">▶ Старт</button>
            <button id="pomStopBtn" style="padding:10px 20px;cursor:pointer;display:none;">⏹ Стоп</button>
          </div>
          <div style="font-size:13px;color:#666;">Работа: 25 мин | Перерыв: 5 мин</div>
        </div>
      `;
      const header = win.querySelector(".window-header");
      const close = win.querySelector(".close");
      const display = win.querySelector("#pomDisplay");
      const startBtn = win.querySelector("#pomStartBtn");
      const stopBtn = win.querySelector("#pomStopBtn");
      
      let timeLeft = 1500;
      let pomInterval = null;
      let isWorking = true;
      
      function updateDisplay() {
        const mins = Math.floor(timeLeft/60);
        const secs = timeLeft%60;
        display.textContent = `${mins}:${String(secs).padStart(2,"0")}`;
      }
      
      startBtn.onclick = () => {
        startBtn.style.display = "none";
        stopBtn.style.display = "block";
        pomInterval = setInterval(() => {
          timeLeft--;
          updateDisplay();
          if(timeLeft <= 0) {
            clearInterval(pomInterval);
            alert(isWorking ? "⏰ Сессия закончена! Отдыхай 5 минут." : "🔔 Перерыв закончен! Работай!");
            isWorking = !isWorking;
            timeLeft = isWorking ? 1500 : 300;
            updateDisplay();
            startBtn.style.display = "block";
            stopBtn.style.display = "none";
          }
        }, 1000);
      };
      
      stopBtn.onclick = () => {
        clearInterval(pomInterval);
        startBtn.style.display = "block";
        stopBtn.style.display = "none";
      };
      
      close.onclick = () => {
        clearInterval(pomInterval);
        win.remove();
      };
      let drag=false, offsetX=0, offsetY=0;
      header.onmousedown=(e)=>{ drag=true; offsetX=e.clientX-win.offsetLeft; offsetY=e.clientY-win.offsetTop; zIndex++; win.style.zIndex=zIndex; };
      document.onmousemove=(e)=>{ if(drag){ win.style.left=e.clientX-offsetX+"px"; win.style.top=e.clientY-offsetY+"px"; } };
      document.onmouseup=()=>{ drag=false; };
      playOpenSound();
      desktop.appendChild(win);
    }
  };
} catch(e){ window.APP_LIST["pomodoro"] = null; }

try {
  window.APP_LIST["password"] = {
    runCMD: function() {
      const win = document.createElement("div");
      win.className = "window";
      win.style.zIndex = ++zIndex;
      win.style.width = "380px";
      win.innerHTML = `
        <div class="window-header">
          <span>🔐 Password Generator</span>
          <span class="close">✖</span>
        </div>
        <div class="window-content" style="padding:15px;color:#000;">
          <div style="margin-bottom:15px;">
            <label style="font-weight:bold;">Длина пароля:</label><br>
            <input type="range" id="passLen" min="8" max="32" value="16" style="width:100%;margin:8px 0;">
            <span id="passLenDisplay">16</span>
          </div>
          <div style="margin-bottom:15px;padding:12px;background:#f0f0f0;border-radius:4px;font-family:monospace;word-break:break-all;" id="passOutput">Пароль появится здесь</div>
          <div style="display:flex;gap:8px;">
            <button id="genPassBtn" style="flex:1;padding:10px;cursor:pointer;">🔄 Генерировать</button>
            <button id="copyPassBtn" style="flex:1;padding:10px;cursor:pointer;">📋 Копировать</button>
          </div>
        </div>
      `;
      const header = win.querySelector(".window-header");
      const close = win.querySelector(".close");
      const lenInput = win.querySelector("#passLen");
      const lenDisplay = win.querySelector("#passLenDisplay");
      const output = win.querySelector("#passOutput");
      const genBtn = win.querySelector("#genPassBtn");
      const copyBtn = win.querySelector("#copyPassBtn");
      
      let currentPass = "";
      
      lenInput.oninput = () => {
        lenDisplay.textContent = lenInput.value;
      };
      
      genBtn.onclick = () => {
        const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";
        const len = parseInt(lenInput.value);
        currentPass = "";
        for(let i=0; i<len; i++) {
          currentPass += chars.charAt(Math.floor(Math.random()*chars.length));
        }
        output.textContent = currentPass;
      };
      
      copyBtn.onclick = () => {
        navigator.clipboard.writeText(currentPass);
        alert("✅ Скопировано!");
      };
      
      close.onclick = () => {
    playCloseSound();
    win.remove();
  };
      let drag=false, offsetX=0, offsetY=0;
      header.onmousedown=(e)=>{ drag=true; offsetX=e.clientX-win.offsetLeft; offsetY=e.clientY-win.offsetTop; zIndex++; win.style.zIndex=zIndex; };
      document.onmousemove=(e)=>{ if(drag){ win.style.left=e.clientX-offsetX+"px"; win.style.top=e.clientY-offsetY+"px"; } };
      document.onmouseup=()=>{ drag=false; };
      playOpenSound();
      desktop.appendChild(win);
    }
  };
} catch(e){ window.APP_LIST["password"] = null; }

try {
  window.APP_LIST["base64"] = {
    runCMD: function() {
      const win = document.createElement("div");
      win.className = "window";
      win.style.zIndex = ++zIndex;
      win.style.width = "400px";
      win.innerHTML = `
        <div class="window-header">
          <span>🔤 Base64 Encoder</span>
          <span class="close">✖</span>
        </div>
        <div class="window-content" style="padding:15px;color:#000;display:flex;flex-direction:column;gap:10px;">
          <textarea id="b64Input" placeholder="Введите текст..." style="flex:1;padding:8px;border:1px solid #ccc;border-radius:4px;font-family:monospace;min-height:100px;resize:none;"></textarea>
          <div style="display:flex;gap:8px;">
            <button id="encodeBtn" style="flex:1;cursor:pointer;">📤 Закодировать</button>
            <button id="decodeBtn" style="flex:1;cursor:pointer;">📥 Декодировать</button>
          </div>
          <textarea id="b64Output" placeholder="Результат..." readonly style="flex:1;padding:8px;border:1px solid #ccc;border-radius:4px;font-family:monospace;min-height:100px;background:#f5f5f5;resize:none;"></textarea>
        </div>
      `;
      const header = win.querySelector(".window-header");
      const close = win.querySelector(".close");
      const input = win.querySelector("#b64Input");
      const output = win.querySelector("#b64Output");
      const encBtn = win.querySelector("#encodeBtn");
      const decBtn = win.querySelector("#decodeBtn");
      
      encBtn.onclick = () => {
        try {
          output.value = btoa(input.value);
        } catch(e) {
          output.value = "Ошибка кодирования";
        }
      };
      
      decBtn.onclick = () => {
        try {
          output.value = atob(input.value);
        } catch(e) {
          output.value = "Ошибка декодирования";
        }
      };
      
      close.onclick = () => {
    playCloseSound();
    win.remove();
  };
      let drag=false, offsetX=0, offsetY=0;
      header.onmousedown=(e)=>{ drag=true; offsetX=e.clientX-win.offsetLeft; offsetY=e.clientY-win.offsetTop; zIndex++; win.style.zIndex=zIndex; };
      document.onmousemove=(e)=>{ if(drag){ win.style.left=e.clientX-offsetX+"px"; win.style.top=e.clientY-offsetY+"px"; } };
      document.onmouseup=()=>{ drag=false; };
      playOpenSound();
      desktop.appendChild(win);
    }
  };
} catch(e){ window.APP_LIST["base64"] = null; }

try {
  window.APP_LIST["settings"] = {
    runCMD: function() {
      const win = document.createElement("div");
      win.className = "window";
      win.style.zIndex = ++zIndex;
      win.style.width = "400px";
      win.innerHTML = `
        <div class="window-header">
          <span>⚙️ Настройки</span>
          <span class="close">✖</span>
        </div>
        <div class="window-content" style="text-align:center;padding:20px;color:#000;">
          <div style="font-size:2em;margin-bottom:15px;">⚙️</div>
          <h2 style="margin:0 0 15px 0;color:#333;">Настройки системы</h2>
          <p style="color:#666;margin-bottom:20px;">darkOS Mini v1.4</p>
          <div style="background:#e3f2fd;padding:12px;border-radius:6px;margin-bottom:15px;font-size:13px;color:#0a84ff;">
            <b>✅ Система активирована</b>
          </div>
          <button id="resetSettingsBtn" style="width:100%;padding:10px;background:#0a84ff;color:#fff;border:none;border-radius:4px;cursor:pointer;font-weight:bold;margin-bottom:10px;">Сброс хранилища</button>
          <button id="reactivateBtn" style="width:100%;padding:10px;background:#ff9800;color:#fff;border:none;border-radius:4px;cursor:pointer;font-weight:bold;margin-bottom:10px;">Переактивировать</button>
          <button id="aboutBtn" style="width:100%;padding:10px;background:#666;color:#fff;border:none;border-radius:4px;cursor:pointer;">О системе</button>
        </div>
      `;
      const header = win.querySelector(".window-header");
      const close = win.querySelector(".close");
      const resetBtn = win.querySelector("#resetSettingsBtn");
      const aboutBtn = win.querySelector("#aboutBtn");
      const reactivateBtn = win.querySelector("#reactivateBtn");
      
      resetBtn.onclick = () => {
        if (confirm('Очистить всё хранилище браузера?')) {
          localStorage.clear();
          alert('✅ Хранилище очищено!');
          window.location.reload();
        }
      };
      
      reactivateBtn.onclick = () => {
        if (confirm('Переактивировать систему? Потребуется ввести ключ.')) {
          localStorage.removeItem('darkOS_activated');
          window.location.reload();
        }
      };
      
      aboutBtn.onclick = () => {
        alert('darkOS Mini v1.4\nСистема создана: 2025-2026\nАвтор: darklight\n\nАктивированная версия с ключом активации');
      };
      
      // Проверим, найдены ли обе пасхалки: 2+2 и 55555
      try {
        const foundA = localStorage.getItem('darkOS_found_2plus2') === 'true';
        const foundB = localStorage.getItem('darkOS_found_55555') === 'true';
        const giftClaimed = localStorage.getItem('darkOS_gift_claimed') === 'true';
        
        // Если обе пасхалки найдены и подарок не получен — покажем BSOD с звуком
        if (foundA && foundB && !giftClaimed) {
          try { localStorage.setItem('darkOS_gift_claimed', 'true'); } catch(e) {}
          win.remove();
          
          // Воспроизведем неприятный звук
          try {
            const audioContext = new (window.AudioContext || window.webkitAudioContext)();
            const oscillator = audioContext.createOscillator();
            const gainNode = audioContext.createGain();
            
            oscillator.connect(gainNode);
            gainNode.connect(audioContext.destination);
            
            oscillator.frequency.value = 150;
            oscillator.type = 'square';
            gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
            gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.5);
            
            oscillator.start(audioContext.currentTime);
            oscillator.stop(audioContext.currentTime + 0.5);
          } catch(e) {}
          
          // Покажем BSOD
          showBSOD('MEME_END');
        }
      } catch(e) {}
      
      close.onclick = () => {
    playCloseSound();
    win.remove();
  };
      let drag=false, offsetX=0, offsetY=0;
      header.onmousedown=(e)=>{ drag=true; offsetX=e.clientX-win.offsetLeft; offsetY=e.clientY-win.offsetTop; zIndex++; win.style.zIndex=zIndex; };
      document.onmousemove=(e)=>{ if(drag){ win.style.left=e.clientX-offsetX+"px"; win.style.top=e.clientY-offsetY+"px"; } };
      document.onmouseup=()=>{ drag=false; };
      
      playOpenSound();
      desktop.appendChild(win);
    }
  };
} catch(e){ window.APP_LIST["settings"] = null; }

try {
  window.APP_LIST["browser"] = {
    runCMD: function() {
      const win = document.createElement("div");
      win.className = "window";
      win.style.zIndex = ++zIndex;
      win.style.width = "500px";
      win.style.height = "350px";
      win.style.left = "50px";
      win.style.top = "80px";
      win.innerHTML = `
        <div class="window-header">
          <span>🌐 Браузер</span>
          <span class="close">✖</span>
        </div>
        <div class="window-content" style="display:flex;flex-direction:column;height:calc(100% - 30px);color:#000;">
          <div style="display:flex;gap:5px;padding:8px;background:#eee;border-bottom:1px solid #ccc;flex-shrink:0;">
            <button id="backBtn" style="width:35px;cursor:pointer;font-size:12px;">⬅</button>
            <button id="forwardBtn" style="width:35px;cursor:pointer;font-size:12px;">➡</button>
            <button id="reloadBtn" style="width:35px;cursor:pointer;font-size:12px;">🔄</button>
            <input type="text" id="urlInput" placeholder="example.com" style="flex:1;padding:5px;border:1px solid #999;border-radius:4px;font-size:11px;">
            <button id="goBtn" style="width:45px;cursor:pointer;font-size:11px;">Go</button>
          </div>
          <div id="browserContent" style="flex:1;overflow:auto;background:#fff;border:1px solid #ccc;margin:5px;padding:8px;font-size:12px;">
            <div style="color:#999;text-align:center;padding:20px;">
              <div style="font-size:1.5em;margin-bottom:8px;">🌐</div>
              <div>Введите URL</div>
              <div style="margin-top:10px;color:#666;font-size:11px;">
                Примеры:<br>
                example.com<br>
                jsonplaceholder.typicode.com
              </div>
            </div>
          </div>
        </div>
      `;
      const header = win.querySelector(".window-header");
      const close = win.querySelector(".close");
      const urlInput = win.querySelector("#urlInput");
      const goBtn = win.querySelector("#goBtn");
      const reloadBtn = win.querySelector("#reloadBtn");
      const content = win.querySelector("#browserContent");
      const backBtn = win.querySelector("#backBtn");
      const forwardBtn = win.querySelector("#forwardBtn");
      
      let history = [];
      let currentPos = -1;
      let currentUrl = "";
      
      function isValidUrl(str) {
        try {
          new URL(str.startsWith('http') ? str : 'https://' + str);
          return true;
        } catch(e) { return false; }
      }
      
      function loadPage(url) {
        if (!isValidUrl(url)) {
          content.innerHTML = '<div style="color:red;padding:10px;">❌ Неверный URL</div>';
          return;
        }
        
        const fullUrl = url.startsWith('http') ? url : 'https://' + url;
        content.innerHTML = '<div style="padding:10px;color:#666;">⏳ Загрузка...</div>';
        
        fetch(fullUrl)
          .then(r => r.text())
          .then(html => {
            const parser = new DOMParser();
            try {
              const doc = parser.parseFromString(html, 'text/html');
              const text = doc.body.innerText || doc.documentElement.innerText || html.substring(0, 500);
              content.innerHTML = '<div style="padding:10px;white-space:pre-wrap;word-wrap:break-word;font-size:11px;">' + text.substring(0, 3000) + '</div>';
            } catch(e) {
              content.innerHTML = '<div style="padding:10px;white-space:pre-wrap;word-wrap:break-word;font-size:11px;">' + html.substring(0, 1000) + '</div>';
            }
            currentUrl = fullUrl;
            urlInput.value = fullUrl;
          })
          .catch(e => {
            content.innerHTML = `<div style="padding:10px;color:#666;font-size:11px;">
              <b>⚠️ Ошибка загрузки</b><br>
              ${fullUrl}<br><br>
              Причина: CORS или подключение
            </div>`;
          });
      }
      
      goBtn.onclick = () => {
        const url = urlInput.value.trim();
        if (url) {
          history.push(url);
          currentPos = history.length - 1;
          loadPage(url);
        }
      };
      
      reloadBtn.onclick = () => {
        if (currentUrl) loadPage(currentUrl);
      };
      
      backBtn.onclick = () => {
        if (currentPos > 0) {
          currentPos--;
          loadPage(history[currentPos]);
        }
      };
      
      forwardBtn.onclick = () => {
        if (currentPos < history.length - 1) {
          currentPos++;
          loadPage(history[currentPos]);
        }
      };
      
      urlInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') goBtn.click();
      });
      
      close.onclick = () => {
    playCloseSound();
    win.remove();
  };
      let drag=false, offsetX=0, offsetY=0;
      header.onmousedown=(e)=>{ drag=true; offsetX=e.clientX-win.offsetLeft; offsetY=e.clientY-win.offsetTop; zIndex++; win.style.zIndex=zIndex; };
      document.onmousemove=(e)=>{ if(drag){ win.style.left=e.clientX-offsetX+"px"; win.style.top=e.clientY-offsetY+"px"; } };
      document.onmouseup=()=>{ drag=false; };
      
      playOpenSound();
      desktop.appendChild(win);
    }
  };
} catch(e){ window.APP_LIST["browser"] = null; }

try {
  window.APP_LIST["appcenter"] = {
    runCMD: function() {
      const win = document.createElement("div");
      win.className = "window";
      win.style.zIndex = ++zIndex;
      win.style.width = "700px";
      win.style.height = "500px";
      win.innerHTML = `
        <div class="window-header">
          <span>🏪 Центр приложений</span>
          <span class="close">✖</span>
        </div>
        <div class="window-content" style="display:flex;flex-direction:column;height:100%;">
          <div style="display:flex;gap:10px;padding:10px;background:#f0f0f0;border-bottom:1px solid #ddd;">
            <input type="text" id="searchApps" placeholder="Поиск приложений..." style="flex:1;padding:8px;border:1px solid #ccc;border-radius:4px;">
            <select id="categoryFilter" style="padding:8px;border:1px solid #ccc;border-radius:4px;">
              <option value="">Все категории</option>
              <option value="system">Система</option>
              <option value="multimedia">Мультимедиа</option>
              <option value="tools">Инструменты</option>
              <option value="games">Игры</option>
              <option value="utilities">Утилиты</option>
            </select>
          </div>
          <div id="appsList" style="flex:1;overflow-y:auto;padding:10px;">
            <!-- Приложения будут загружены здесь -->
          </div>
        </div>
      `;
      
      const header = win.querySelector(".window-header");
      const close = win.querySelector(".close");
      const searchInput = win.querySelector("#searchApps");
      const categoryFilter = win.querySelector("#categoryFilter");
      const appsList = win.querySelector("#appsList");
      
      close.onclick = () => {
        playCloseSound();
        win.remove();
      };
      
      let drag=false, offsetX=0, offsetY=0;
      header.onmousedown=(e)=>{ drag=true; offsetX=e.clientX-win.offsetLeft; offsetY=e.clientY-win.offsetTop; zIndex++; win.style.zIndex=zIndex; };
      document.onmousemove=(e)=>{ if(drag){ win.style.left=e.clientX-offsetX+"px"; win.style.top=e.clientY-offsetY+"px"; } };
      document.onmouseup=()=>{ drag=false; };
      
      const apps = [
        {name: "Командная строка", icon: "💻", category: "system", app: "cmd", description: "Интерфейс командной строки"},
        {name: "Проводник", icon: "📁", category: "system", app: "filebrowser", description: "Управление файлами"},
        {name: "Блокнот", icon: "📝", category: "tools", app: "notepad", description: "Текстовый редактор"},
        {name: "Калькулятор", icon: "🧮", category: "tools", app: "calc", description: "Математические вычисления"},
        {name: "Музыка", icon: "🎵", category: "multimedia", app: "music", description: "Музыкальный плеер"},
        {name: "Paint", icon: "🎨", category: "multimedia", app: "paint", description: "Графический редактор"},
        {name: "Погода", icon: "🌤️", category: "utilities", app: "weather", description: "Прогноз погоды"},
        {name: "Камера", icon: "📷", category: "multimedia", app: "camera", description: "Веб-камера"},
        {name: "Скриншот", icon: "📸", category: "utilities", app: "screenshot", description: "Снимки экрана"},
        {name: "Запись экрана", icon: "🎥", category: "multimedia", app: "screenrecorder", description: "Запись видео экрана"},
        {name: "Диспетчер задач", icon: "📊", category: "system", app: "taskmanager", description: "Управление процессами"},
        {name: "Настройки", icon: "⚙️", category: "system", app: "settings", description: "Системные настройки"},
        {name: "Антивирус", icon: "🛡️", category: "system", app: "antivirus", description: "Защита системы"},
        {name: "Крестики-нолики", icon: "⭕", category: "games", app: "tictactoe", description: "Логическая игра"},
        {name: "Кости", icon: "🎲", category: "games", app: "dice", description: "Игра в кости"},
        {name: "Конвертер", icon: "🔄", category: "utilities", app: "converter", description: "Конвертер единиц"},
        {name: "Таймер", icon: "⏱️", category: "utilities", app: "timer", description: "Таймер обратного отсчета"},
        {name: "Задачи", icon: "✅", category: "utilities", app: "todo", description: "Менеджер задач"},
        {name: "Помодоро", icon: "🍅", category: "utilities", app: "pomodoro", description: "Таймер помодоро"},
        {name: "Заметки", icon: "📋", category: "tools", app: "notes", description: "Быстрые заметки"},
        {name: "Часы", icon: "🕐", category: "utilities", app: "clock", description: "Цифровые часы"},
        {name: "Пароли", icon: "🔐", category: "utilities", app: "password", description: "Менеджер паролей"},
        {name: "Base64", icon: "🔤", category: "tools", app: "base64", description: "Кодировщик Base64"},
        {name: "Браузер", icon: "🌐", category: "multimedia", app: "browser", description: "Веб-браузер"},
        {name: "Speed Test", icon: "🚀", category: "utilities", app: "speedtest", description: "Тест скорости"},
        {name: "Игры", icon: "🎮", category: "games", app: "games", description: "Коллекция игр"},
        {name: "Система", icon: "💻", category: "system", app: "sysinfo", description: "Информация о системе"}
      ];
      
      function renderApps(appsToRender) {
        appsList.innerHTML = '';
        appsToRender.forEach(app => {
          const appCard = document.createElement('div');
          appCard.style.cssText = `
            display: flex;
            align-items: center;
            padding: 12px;
            border: 1px solid #ddd;
            border-radius: 8px;
            margin-bottom: 8px;
            cursor: pointer;
            transition: all 0.2s ease;
            background: white;
          `;
          
          appCard.innerHTML = `
            <div style="font-size: 32px; margin-right: 15px;">${app.icon}</div>
            <div style="flex: 1;">
              <div style="font-weight: 600; margin-bottom: 4px;">${app.name}</div>
              <div style="font-size: 12px; color: #666;">${app.description}</div>
            </div>
            <div style="padding: 4px 8px; background: #e0e0e0; border-radius: 4px; font-size: 11px;">
              ${app.category}
            </div>
          `;
          
          appCard.onmouseover = () => {
            appCard.style.background = '#f8f8f8';
            appCard.style.transform = 'translateX(5px)';
          };
          
          appCard.onmouseout = () => {
            appCard.style.background = 'white';
            appCard.style.transform = 'translateX(0)';
          };
          
          appCard.onclick = () => {
            if (window.APP_LIST[app.app]) {
              window.APP_LIST[app.app].runCMD();
            } else {
              criticalWindow(`${app.name} не найден`);
            }
          };
          
          appsList.appendChild(appCard);
        });
      }
      
      function filterApps() {
        const searchTerm = searchInput.value.toLowerCase();
        const category = categoryFilter.value;
        
        let filtered = apps;
        
        if (searchTerm) {
          filtered = filtered.filter(app => 
            app.name.toLowerCase().includes(searchTerm) || 
            app.description.toLowerCase().includes(searchTerm)
          );
        }
        
        if (category) {
          filtered = filtered.filter(app => app.category === category);
        }
        
        renderApps(filtered);
      }
      
      searchInput.addEventListener('input', filterApps);
      categoryFilter.addEventListener('change', filterApps);
      
      renderApps(apps);
      
      playOpenSound();
      desktop.appendChild(win);
    }
  };
} catch(e){ window.APP_LIST["appcenter"] = null; }

try {
  window.APP_LIST["antivirus"] = {
    runCMD: function() {
      const win = document.createElement("div");
      win.className = "window";
      win.style.zIndex = ++zIndex;
      win.style.width = "600px";
      win.style.height = "450px";
      win.innerHTML = `
        <div class="window-header">
          <span>🛡️ Антивирус DarkOS</span>
          <span class="close">✖</span>
        </div>
        <div class="window-content" style="display:flex;flex-direction:column;height:100%;">
          <div style="display:flex;gap:10px;padding:10px;background:#f0f0f0;border-bottom:1px solid #ddd;">
            <button id="scanBtn" style="background:#4CAF50;color:white;padding:8px 16px;border:none;border-radius:4px;cursor:pointer;">
              🔍 Сканировать систему
            </button>
            <button id="updateBtn" style="background:#2196F3;color:white;padding:8px 16px;border:none;border-radius:4px;cursor:pointer;">
              🔄 Обновить базы
            </button>
            <button id="quarantineBtn" style="background:#FF9800;color:white;padding:8px 16px;border:none;border-radius:4px;cursor:pointer;">
              📦 Карантин
            </button>
          </div>
          <div style="flex:1;overflow-y:auto;padding:10px;">
            <div style="margin-bottom:15px;">
              <h3>Статус защиты</h3>
              <div style="display:flex;align-items:center;gap:10px;">
                <div style="width:20px;height:20px;background:#4CAF50;border-radius:50%;"></div>
                <span>Защита активна</span>
              </div>
            </div>
            <div style="margin-bottom:15px;">
              <h3>Последнее сканирование</h3>
              <p>2026-01-01 12:00:00 - Найдено угроз: 0</p>
            </div>
            <div style="margin-bottom:15px;">
              <h3>Обнаруженные угрозы</h3>
              <div id="threatsList">
                <p style="color:#666;">Угрозы не обнаружены</p>
              </div>
            </div>
            <div>
              <h3>Настройки</h3>
              <label style="display:block;margin-bottom:5px;">
                <input type="checkbox" checked> Защита в реальном времени
              </label>
              <label style="display:block;margin-bottom:5px;">
                <input type="checkbox" checked> Проверять подозрительные программы
              </label>
              <label style="display:block;margin-bottom:5px;">
                <input type="checkbox" checked> Блокировать jfdhguigdi и NEW_GAME
              </label>
            </div>
          </div>
        </div>
      `;
      
      const header = win.querySelector(".window-header");
      const close = win.querySelector(".close");
      const scanBtn = win.querySelector("#scanBtn");
      const updateBtn = win.querySelector("#updateBtn");
      const quarantineBtn = win.querySelector("#quarantineBtn");
      const threatsList = win.querySelector("#threatsList");
      
      close.onclick = () => {
        playCloseSound();
        win.remove();
      };
      
      let drag=false, offsetX=0, offsetY=0;
      header.onmousedown=(e)=>{ drag=true; offsetX=e.clientX-win.offsetLeft; offsetY=e.clientY-win.offsetTop; zIndex++; win.style.zIndex=zIndex; };
      document.onmousemove=(e)=>{ if(drag){ win.style.left=e.clientX-offsetX+"px"; win.style.top=e.clientY-offsetY+"px"; } };
      document.onmouseup=()=>{ drag=false; };
      
      // Проверяем подозрительные программы
      function checkSuspiciousPrograms() {
        const threats = [];
        
        // Проверяем наличие подозрительных программ
        if (window.APP_LIST["jfdhguigdi"]) {
          threats.push({
            name: "jfdhguigdi",
            type: "Подозрительная программа",
            severity: "Высокий",
            action: "Заблокирована"
          });
        }
        
        if (window.APP_LIST["NEW_GAME"]) {
          threats.push({
            name: "NEW_GAME",
            type: "Подозрительная программа",
            severity: "Высокий", 
            action: "Заблокирована"
          });
        }
        
        return threats;
      }
      
      scanBtn.onclick = () => {
        threatsList.innerHTML = '<p>🔍 Сканирование системы...</p>';
        
        setTimeout(() => {
          const threats = checkSuspiciousPrograms();
          
          if (threats.length > 0) {
            threatsList.innerHTML = threats.map(threat => `
              <div style="border:1px solid #f44336;border-radius:4px;padding:8px;margin-bottom:8px;background:#ffebee;">
                <div style="font-weight:600;color:#d32f2f;">${threat.name}</div>
                <div style="font-size:12px;color:#666;">Тип: ${threat.type}</div>
                <div style="font-size:12px;color:#666;">Степень: ${threat.severity}</div>
                <div style="font-size:12px;color:#4CAF50;">Статус: ${threat.action}</div>
              </div>
            `).join('');
          } else {
            threatsList.innerHTML = '<p style="color:#4CAF50;">✅ Угрозы не обнаружены</p>';
          }
        }, 2000);
      };
      
      updateBtn.onclick = () => {
        threatsList.innerHTML = '<p>🔄 Обновление баз антивируса...</p>';
        setTimeout(() => {
          threatsList.innerHTML = '<p style="color:#4CAF50;">✅ Базы обновлены до версии 1.0.0</p>';
        }, 1500);
      };
      
      quarantineBtn.onclick = () => {
        threatsList.innerHTML = '<p>📦 Карантин пуст</p>';
      };
      
      playOpenSound();
      desktop.appendChild(win);
    }
  };
} catch(e){ window.APP_LIST["antivirus"] = null; }

// Новые приложения
try {
  window.APP_LIST["texteditor"] = {
    runCMD: function() {
      const win = document.createElement("div");
      win.className = "window";
      win.style.zIndex = ++zIndex;
      win.style.width = "600px";
      win.style.height = "400px";
      win.innerHTML = `
        <div class="window-header">
          <span>📄 Текстовый редактор</span>
          <span class="close">✖</span>
        </div>
        <div class="window-content" style="display:flex;flex-direction:column;height:100%;">
          <div style="display:flex;gap:5px;padding:5px;background:#f0f0f0;border-bottom:1px solid #ddd;">
            <button onclick="document.execCommand('bold')">B</button>
            <button onclick="document.execCommand('italic')">I</button>
            <button onclick="document.execCommand('underline')">U</button>
            <select onchange="document.execCommand('fontSize',false,this.value)">
              <option value="3">3</option><option value="5">5</option><option value="7">7</option>
            </select>
          </div>
          <div contenteditable="true" style="flex:1;padding:10px;border:1px solid #ddd;overflow-y:auto;" id="editor">
            Начните печатать...
          </div>
        </div>
      `;
      const header = win.querySelector(".window-header");
      const close = win.querySelector(".close");
      close.onclick = () => { playCloseSound(); win.remove(); };
      let drag=false, offsetX=0, offsetY=0;
      header.onmousedown=(e)=>{ drag=true; offsetX=e.clientX-win.offsetLeft; offsetY=e.clientY-win.offsetTop; zIndex++; win.style.zIndex=zIndex; };
      document.onmousemove=(e)=>{ if(drag){ win.style.left=e.clientX-offsetX+"px"; win.style.top=e.clientY-offsetY+"px"; } };
      document.onmouseup=()=>{ drag=false; };
      playOpenSound();
      desktop.appendChild(win);
    }
  };
} catch(e){ window.APP_LIST["texteditor"] = null; }

try {
  window.APP_LIST["imageviewer"] = {
    runCMD: function() {
      const win = document.createElement("div");
      win.className = "window";
      win.style.zIndex = ++zIndex;
      win.style.width = "500px";
      win.style.height = "400px";
      win.innerHTML = `
        <div class="window-header">
          <span>🖼️ Просмотр изображений</span>
          <span class="close">✖</span>
        </div>
        <div class="window-content" style="display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;">
          <input type="file" accept="image/*" id="imageInput" style="margin-bottom:10px;">
          <div id="imagePreview" style="max-width:100%;max-height:300px;border:1px solid #ddd;display:flex;align-items:center;justify-content:center;color:#666;">
            Выберите изображение
          </div>
        </div>
      `;
      const header = win.querySelector(".window-header");
      const close = win.querySelector(".close");
      const imageInput = win.querySelector("#imageInput");
      const imagePreview = win.querySelector("#imagePreview");
      
      close.onclick = () => { playCloseSound(); win.remove(); };
      let drag=false, offsetX=0, offsetY=0;
      header.onmousedown=(e)=>{ drag=true; offsetX=e.clientX-win.offsetLeft; offsetY=e.clientY-win.offsetTop; zIndex++; win.style.zIndex=zIndex; };
      document.onmousemove=(e)=>{ if(drag){ win.style.left=e.clientX-offsetX+"px"; win.style.top=e.clientY-offsetY+"px"; } };
      document.onmouseup=()=>{ drag=false; };
      
      imageInput.onchange = (e) => {
        const file = e.target.files[0];
        if (file) {
          const reader = new FileReader();
          reader.onload = (e) => {
            imagePreview.innerHTML = `<img src="${e.target.result}" style="max-width:100%;max-height:100%;object-fit:contain;">`;
          };
          reader.readAsDataURL(file);
        }
      };
      
      playOpenSound();
      desktop.appendChild(win);
    }
  };
} catch(e){ window.APP_LIST["imageviewer"] = null; }

try {
  window.APP_LIST["audiorecorder"] = {
    runCMD: function() {
      const win = document.createElement("div");
      win.className = "window";
      win.style.zIndex = ++zIndex;
      win.style.width = "400px";
      win.style.height = "250px";
      win.innerHTML = `
        <div class="window-header">
          <span>🎙️ Диктофон</span>
          <span class="close">✖</span>
        </div>
        <div class="window-content" style="display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;">
          <button id="recordBtn" style="width:80px;height:80px;border-radius:50%;background:#f44336;color:white;border:none;font-size:24px;cursor:pointer;margin-bottom:20px;">
            🎙️
          </button>
          <div id="recordingStatus" style="font-size:16px;color:#666;">Готов к записи</div>
          <div id="recordingsList" style="margin-top:20px;width:100%;max-height:100px;overflow-y:auto;"></div>
        </div>
      `;
      const header = win.querySelector(".window-header");
      const close = win.querySelector(".close");
      const recordBtn = win.querySelector("#recordBtn");
      const recordingStatus = win.querySelector("#recordingStatus");
      const recordingsList = win.querySelector("#recordingsList");
      
      close.onclick = () => { playCloseSound(); win.remove(); };
      let drag=false, offsetX=0, offsetY=0;
      header.onmousedown=(e)=>{ drag=true; offsetX=e.clientX-win.offsetLeft; offsetY=e.clientY-win.offsetTop; zIndex++; win.style.zIndex=zIndex; };
      document.onmousemove=(e)=>{ if(drag){ win.style.left=e.clientX-offsetX+"px"; win.style.top=e.clientY-offsetY+"px"; } };
      document.onmouseup=()=>{ drag=false; };
      
      let mediaRecorder;
      let audioChunks = [];
      let isRecording = false;
      
      recordBtn.onclick = async () => {
        if (!isRecording) {
          try {
            const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
            mediaRecorder = new MediaRecorder(stream);
            audioChunks = [];
            
            mediaRecorder.ondataavailable = (event) => {
              audioChunks.push(event.data);
            };
            
            mediaRecorder.onstop = () => {
              const audioBlob = new Blob(audioChunks, { type: 'audio/wav' });
              const audioUrl = URL.createObjectURL(audioBlob);
              const recordingItem = document.createElement('div');
              recordingItem.style.cssText = 'padding:5px;border:1px solid #ddd;margin-bottom:5px;border-radius:4px;';
              recordingItem.innerHTML = `
                <audio controls style="width:100%;"></audio>
                <div>Запись ${new Date().toLocaleTimeString()}</div>
              `;
              recordingItem.querySelector('audio').src = audioUrl;
              recordingsList.appendChild(recordingItem);
            };
            
            mediaRecorder.start();
            isRecording = true;
            recordBtn.style.background = "#4CAF50";
            recordingStatus.textContent = "Идёт запись...";
            recordingStatus.style.color = "#4CAF50";
          } catch (err) {
            recordingStatus.textContent = "Ошибка: " + err.message;
          }
        } else {
          mediaRecorder.stop();
          isRecording = false;
          recordBtn.style.background = "#f44336";
          recordingStatus.textContent = "Запись остановлена";
          recordingStatus.style.color = "#666";
        }
      };
      
      playOpenSound();
      desktop.appendChild(win);
    }
  };
} catch(e){ window.APP_LIST["audiorecorder"] = null; }

try {
  window.APP_LIST["filecompressor"] = {
    runCMD: function() {
      const win = document.createElement("div");
      win.className = "window";
      win.style.zIndex = ++zIndex;
      win.style.width = "450px";
      win.style.height = "300px";
      win.innerHTML = `
        <div class="window-header">
          <span>📦 Архиватор</span>
          <span class="close">✖</span>
        </div>
        <div class="window-content" style="display:flex;flex-direction:column;height:100%;">
          <div style="margin-bottom:15px;">
            <label>Выберите файлы для архивации:</label>
            <input type="file" id="filesInput" multiple style="width:100%;margin-top:5px;">
          </div>
          <div style="margin-bottom:15px;">
            <label>Тип архива:</label>
            <select id="archiveType" style="width:100%;margin-top:5px;">
              <option value="zip">ZIP</option>
              <option value="tar">TAR</option>
            </select>
          </div>
          <button onclick="compressFiles()" style="background:#4CAF50;color:white;padding:10px;border:none;border-radius:4px;cursor:pointer;">
            📦 Создать архив
          </button>
          <div id="result" style="margin-top:15px;padding:10px;background:#f0f0f0;border-radius:4px;"></div>
        </div>
      `;
      const header = win.querySelector(".window-header");
      const close = win.querySelector(".close");
      close.onclick = () => { playCloseSound(); win.remove(); };
      let drag=false, offsetX=0, offsetY=0;
      header.onmousedown=(e)=>{ drag=true; offsetX=e.clientX-win.offsetLeft; offsetY=e.clientY-win.offsetTop; zIndex++; win.style.zIndex=zIndex; };
      document.onmousemove=(e)=>{ if(drag){ win.style.left=e.clientX-offsetX+"px"; win.style.top=e.clientY-offsetY+"px"; } };
      document.onmouseup=()=>{ drag=false; };
      
      window.compressFiles = function() {
        const filesInput = document.getElementById("filesInput");
        const archiveType = document.getElementById("archiveType").value;
        const result = document.getElementById("result");
        
        if (filesInput.files.length > 0) {
          const fileNames = Array.from(filesInput.files).map(f => f.name).join(", ");
          result.innerHTML = `✅ Архив ${archiveType.toUpperCase()} создан!<br>Файлы: ${fileNames}<br>Размер: ${Math.floor(Math.random() * 1000)} KB`;
        } else {
          result.innerHTML = "❌ Выберите файлы для архивации";
        }
      };
      
      playOpenSound();
      desktop.appendChild(win);
    }
  };
} catch(e){ window.APP_LIST["filecompressor"] = null; }

try {
  window.APP_LIST["colorpicker"] = {
    runCMD: function() {
      const win = document.createElement("div");
      win.className = "window";
      win.style.zIndex = ++zIndex;
      win.style.width = "350px";
      win.style.height = "400px";
      win.innerHTML = `
        <div class="window-header">
          <span>🎨 Палитра цветов</span>
          <span class="close">✖</span>
        </div>
        <div class="window-content" style="display:flex;flex-direction:column;align-items:center;height:100%;">
          <input type="color" id="colorInput" value="#ff0000" style="width:150px;height:150px;border:none;border-radius:8px;margin-bottom:20px;">
          <div style="text-align:center;width:100%;">
            <div style="margin-bottom:10px;">
              <strong>HEX:</strong> <span id="hexValue">#FF0000</span>
            </div>
            <div style="margin-bottom:10px;">
              <strong>RGB:</strong> <span id="rgbValue">rgb(255, 0, 0)</span>
            </div>
            <div style="margin-bottom:10px;">
              <strong>HSL:</strong> <span id="hslValue">hsl(0, 100%, 50%)</span>
            </div>
            <button onclick="copyColor()" style="background:#2196F3;color:white;padding:8px 16px;border:none;border-radius:4px;cursor:pointer;">
              📋 Копировать HEX
            </button>
          </div>
        </div>
      `;
      const header = win.querySelector(".window-header");
      const close = win.querySelector(".close");
      const colorInput = win.querySelector("#colorInput");
      const hexValue = win.querySelector("#hexValue");
      const rgbValue = win.querySelector("#rgbValue");
      const hslValue = win.querySelector("#hslValue");
      
      close.onclick = () => { playCloseSound(); win.remove(); };
      let drag=false, offsetX=0, offsetY=0;
      header.onmousedown=(e)=>{ drag=true; offsetX=e.clientX-win.offsetLeft; offsetY=e.clientY-win.offsetTop; zIndex++; win.style.zIndex=zIndex; };
      document.onmousemove=(e)=>{ if(drag){ win.style.left=e.clientX-offsetX+"px"; win.style.top=e.clientY-offsetY+"px"; } };
      document.onmouseup=()=>{ drag=false; };
      
      function updateColorValues(hex) {
        hexValue.textContent = hex.toUpperCase();
        
        const r = parseInt(hex.slice(1, 3), 16);
        const g = parseInt(hex.slice(3, 5), 16);
        const b = parseInt(hex.slice(5, 7), 16);
        
        rgbValue.textContent = `rgb(${r}, ${g}, ${b})`;
        
        const max = Math.max(r, g, b);
        const min = Math.min(r, g, b);
        const l = (max + min) / 2 / 255 * 100;
        const d = max - min;
        const s = max === min ? 0 : d / (1 - Math.abs(2 * l / 100 - 1)) / 255 * 100;
        const h = max === min ? 0 : 
          max === r ? (g - b) / d + (g < b ? 6 : 0) :
          max === g ? (b - r) / d + 2 :
          (r - g) / d + 4;
        
        hslValue.textContent = `hsl(${Math.round(h * 60)}, ${Math.round(s)}%, ${Math.round(l)}%)`;
      }
      
      window.copyColor = function() {
        navigator.clipboard.writeText(hexValue.textContent);
        alert("Цвет скопирован: " + hexValue.textContent);
      };
      
      colorInput.addEventListener('input', (e) => {
        updateColorValues(e.target.value);
      });
      
      updateColorValues(colorInput.value);
      
      playOpenSound();
      desktop.appendChild(win);
    }
  };
} catch(e){ window.APP_LIST["colorpicker"] = null; }

try {
  window.APP_LIST["qrscanner"] = {
    runCMD: function() {
      const win = document.createElement("div");
      win.className = "window";
      win.style.zIndex = ++zIndex;
      win.style.width = "400px";
      win.style.height = "450px";
      win.innerHTML = `
        <div class="window-header">
          <span>📱 QR Scanner</span>
          <span class="close">✖</span>
        </div>
        <div class="window-content" style="display:flex;flex-direction:column;align-items:center;height:100%;">
          <div style="margin-bottom:20px;">
            <label>Текст для QR-кода:</label>
            <textarea id="qrText" style="width:300px;height:100px;margin-top:10px;padding:10px;border:1px solid #ddd;border-radius:4px;" placeholder="Введите текст..."></textarea>
          </div>
          <button onclick="generateQR()" style="background:#4CAF50;color:white;padding:10px 20px;border:none;border-radius:4px;cursor:pointer;margin-bottom:20px;">
            📱 Создать QR
          </button>
          <div id="qrResult" style="width:200px;height:200px;border:2px dashed #ddd;display:flex;align-items:center;justify-content:center;color:#666;">
            QR-код появится здесь
          </div>
        </div>
      `;
      const header = win.querySelector(".window-header");
      const close = win.querySelector(".close");
      close.onclick = () => { playCloseSound(); win.remove(); };
      let drag=false, offsetX=0, offsetY=0;
      header.onmousedown=(e)=>{ drag=true; offsetX=e.clientX-win.offsetLeft; offsetY=e.clientY-win.offsetTop; zIndex++; win.style.zIndex=zIndex; };
      document.onmousemove=(e)=>{ if(drag){ win.style.left=e.clientX-offsetX+"px"; win.style.top=e.clientY-offsetY+"px"; } };
      document.onmouseup=()=>{ drag=false; };
      
      window.generateQR = function() {
        const text = document.getElementById("qrText").value;
        const qrResult = document.getElementById("qrResult");
        
        if (text.trim()) {
          qrResult.innerHTML = `
            <div style="text-align:center;">
              <div style="font-size:48px;margin-bottom:10px;">📱</div>
              <div style="font-size:12px;color:#4CAF50;">QR-код создан!</div>
              <div style="font-size:10px;margin-top:5px;">Текст: ${text.substring(0, 30)}${text.length > 30 ? "..." : ""}</div>
            </div>
          `;
        } else {
          qrResult.innerHTML = "❌ Введите текст";
        }
      };
      
      playOpenSound();
      desktop.appendChild(win);
    }
  };
} catch(e){ window.APP_LIST["qrscanner"] = null; }

try {
  window.APP_LIST["unitconverter"] = {
    runCMD: function() {
      const win = document.createElement("div");
      win.className = "window";
      win.style.zIndex = ++zIndex;
      win.style.width = "450px";
      win.style.height = "350px";
      win.innerHTML = `
        <div class="window-header">
          <span>🔄 Конвертер единиц</span>
          <span class="close">✖</span>
        </div>
        <div class="window-content" style="display:flex;flex-direction:column;height:100%;">
          <div style="margin-bottom:15px;">
            <label>Тип конвертации:</label>
            <select id="convertType" onchange="updateUnits()" style="width:100%;margin-top:5px;padding:5px;">
              <option value="length">Длина</option>
              <option value="weight">Вес</option>
              <option value="temperature">Температура</option>
              <option value="volume">Объём</option>
            </select>
          </div>
          <div style="display:flex;gap:10px;margin-bottom:15px;">
            <div style="flex:1;">
              <label>Из:</label>
              <select id="fromUnit" style="width:100%;margin-top:5px;padding:5px;"></select>
              <input type="number" id="fromValue" placeholder="Значение" style="width:100%;margin-top:5px;padding:5px;">
            </div>
            <div style="flex:1;">
              <label>В:</label>
              <select id="toUnit" style="width:100%;margin-top:5px;padding:5px;"></select>
              <input type="text" id="toValue" readonly placeholder="Результат" style="width:100%;margin-top:5px;padding:5px;background:#f0f0f0;">
            </div>
          </div>
          <button onclick="convert()" style="background:#2196F3;color:white;padding:10px;border:none;border-radius:4px;cursor:pointer;">
            🔄 Конвертировать
          </button>
        </div>
      `;
      const header = win.querySelector(".window-header");
      const close = win.querySelector(".close");
      close.onclick = () => { playCloseSound(); win.remove(); };
      let drag=false, offsetX=0, offsetY=0;
      header.onmousedown=(e)=>{ drag=true; offsetX=e.clientX-win.offsetLeft; offsetY=e.clientY-win.offsetTop; zIndex++; win.style.zIndex=zIndex; };
      document.onmousemove=(e)=>{ if(drag){ win.style.left=e.clientX-offsetX+"px"; win.style.top=e.clientY-offsetY+"px"; } };
      document.onmouseup=()=>{ drag=false; };
      
      const units = {
        length: { units: ['метр', 'километр', 'сантиметр', 'миллиметр', 'миля', 'ярд'], factor: [1, 0.001, 100, 1000, 0.000621, 1.094] },
        weight: { units: ['килограмм', 'грамм', 'фунт', 'унция', 'тонна'], factor: [1, 1000, 2.205, 35.274, 0.001] },
        temperature: { units: ['Цельсий', 'Фаренгейт', 'Кельвин'], factor: [1, 1, 1] },
        volume: { units: ['литр', 'миллилитр', 'галлон', 'кубический метр'], factor: [1, 1000, 0.264, 0.001] }
      };
      
      window.updateUnits = function() {
        const type = document.getElementById("convertType").value;
        const fromUnit = document.getElementById("fromUnit");
        const toUnit = document.getElementById("toUnit");
        
        fromUnit.innerHTML = units[type].units.map(unit => `<option value="${unit}">${unit}</option>`).join('');
        toUnit.innerHTML = units[type].units.map(unit => `<option value="${unit}">${unit}</option>`).join('');
      };
      
      window.convert = function() {
        const type = document.getElementById("convertType").value;
        const fromValue = parseFloat(document.getElementById("fromValue").value);
        const fromUnit = document.getElementById("fromUnit").value;
        const toUnit = document.getElementById("toUnit").value;
        const toValue = document.getElementById("toValue");
        
        if (isNaN(fromValue)) {
          toValue.value = "❌ Неверное значение";
          return;
        }
        
        const fromIndex = units[type].units.indexOf(fromUnit);
        const toIndex = units[type].units.indexOf(toUnit);
        
        let result;
        if (type === 'temperature') {
          if (fromUnit === 'Цельсий' && toUnit === 'Фаренгейт') result = fromValue * 9/5 + 32;
          else if (fromUnit === 'Фаренгейт' && toUnit === 'Цельсий') result = (fromValue - 32) * 5/9;
          else if (fromUnit === 'Цельсий' && toUnit === 'Кельвин') result = fromValue + 273.15;
          else if (fromUnit === 'Кельвин' && toUnit === 'Цельсий') result = fromValue - 273.15;
          else result = fromValue;
        } else {
          result = fromValue * units[type].factor[fromIndex] / units[type].factor[toIndex];
        }
        
        toValue.value = result.toFixed(4);
      };
      
      updateUnits();
      
      playOpenSound();
      desktop.appendChild(win);
    }
  };
} catch(e){ window.APP_LIST["unitconverter"] = null; }

(function initTaskbar() {
  const taskbar = document.getElementById("taskbar");
  const start = document.getElementById("start");
  
  function updateTaskbar() {
    const existing = document.querySelectorAll(".taskbar-item");
    const windows = document.querySelectorAll(".window");
    
    existing.forEach(item => item.remove());
    
    windows.forEach(win => {
      const header = win.querySelector(".window-header");
      if(!header) return;
      
      const title = header.querySelector("span")?.textContent || "Приложение";
      const item = document.createElement("button");
      item.className = "taskbar-item";
      item.textContent = title;
      item.onclick = () => {
        const isVisible = win.style.display !== "none";
        if(isVisible) {
          win.style.display = "none";
          item.classList.remove("active");
        } else {
          win.style.display = "block";
          item.classList.add("active");
          zIndex++;
          win.style.zIndex = zIndex;
        }
      };
      
      if(win.style.display !== "none") {
        item.classList.add("active");
      }
      
      taskbar.insertBefore(item, start.nextSibling || taskbar.childNodes[1]);
    });
  }
  
  setInterval(updateTaskbar, 300);
})();

