// ======== ELEMENTS ========
const start = document.getElementById("start");
const menu = document.getElementById("startMenu");
const desktop = document.getElementById("desktop");
const openBtn = document.getElementById("openAppBtn");
const boot = document.getElementById("boot");
const system = document.getElementById("system");

let zIndex = 1;

// ======== BOOT SCREEN ========
function finishBoot() {
    boot.style.display = "none";         // скрываем загрузку
    system.classList.remove("hidden");    // показываем рабочий стол
    document.body.style.cursor = "auto";  // показываем курсор
    bootActive = false;
}

// Таймаут для автоматического завершения загрузки
setTimeout(() => {
    if (bootActive) {
        finishBoot();
    }
}, 2500); // 2.5 секунды загрузки


// ======== START MENU ========
start.onclick = () => {
  menu.style.display = menu.style.display === "block" ? "none" : "block";
};

// ======== OPEN SIMPLE WINDOW ========
openBtn.onclick = openApp;

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
  close.onclick = () => win.remove();

  let drag = false, offsetX = 0, offsetY = 0;
  header.onmousedown = (e) => { 
    drag = true; 
    offsetX = e.clientX - win.offsetLeft; 
    offsetY = e.clientY - win.offsetTop; 
    zIndex++; win.style.zIndex = zIndex; 
  };
  document.onmousemove = (e) => { if(drag){ win.style.left = e.clientX - offsetX + "px"; win.style.top = e.clientY - offsetY + "px"; } };
  document.onmouseup = () => { drag = false; };

  desktop.appendChild(win);
}

// ======== CRITICAL WINDOW ========
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
  close.onclick = () => win.remove();

  let drag = false, offsetX = 0, offsetY = 0;
  header.onmousedown = (e) => { drag = true; offsetX = e.clientX - win.offsetLeft; offsetY = e.clientY - win.offsetTop; zIndex++; win.style.zIndex = zIndex; };
  document.onmousemove = (e) => { if(drag){ win.style.left = e.clientX - offsetX + "px"; win.style.top = e.clientY - offsetY + "px"; } };
  document.onmouseup = () => { drag = false; };

  desktop.appendChild(win);
}

// ======== APP LIST ========
window.APP_LIST = window.APP_LIST || {};

// Приложение "Глюк"
try {
  window.APP_LIST["jfdhguigdi"] = {
    runCMD: function() {
      // Скрыть курсор
      document.body.style.cursor = 'none';
      // Эффект линий (оставляют след)
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
        for(let i=0;i<120;i++) { // больше линий
          ctx.save();
          ctx.globalAlpha = 0.85;
          ctx.lineWidth = 2 + Math.random()*6; // толще
          ctx.strokeStyle = `hsl(${Math.random()*360},100%,${40+Math.random()*60}%)`;
          ctx.beginPath();
          ctx.moveTo(Math.random()*canvas.width, Math.random()*canvas.height);
          ctx.lineTo(Math.random()*canvas.width, Math.random()*canvas.height);
          ctx.stroke();
          ctx.restore();
        }
        setTimeout(drawLines, 16); // быстрее, чем requestAnimationFrame
      }
      drawLines();

      // Неприятный звук (Web Audio API, тише и разный питч)
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
        // ctx.clearRect(0,0,canvas.width,canvas.height); // след остаётся
        canvas.remove();
        oscs.forEach(osc=>osc.stop());
        ctxAudio.close();
        // Показываем чёрный экран
        const black = document.createElement('div');
        black.style.position = 'fixed';
        black.style.left = 0;
        black.style.top = 0;
        black.style.width = '100vw';
        black.style.height = '100vh';
        black.style.background = '#000';
        black.style.zIndex = 100000;
        document.body.appendChild(black);
        // Курсор не возвращается
      }, 5000);
    }
  };
} catch(e){ window.APP_LIST["jfdhguigdi"] = null; }

// Крестики-нолики
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
      close.onclick = () => win.remove();
      let drag=false, offsetX=0, offsetY=0;
      header.onmousedown=(e)=>{ drag=true; offsetX=e.clientX-win.offsetLeft; offsetY=e.clientY-win.offsetTop; zIndex++; win.style.zIndex=zIndex; };
      document.onmousemove=(e)=>{ if(drag){ win.style.left=e.clientX-offsetX+"px"; win.style.top=e.clientY-offsetY+"px"; } };
      document.onmouseup=()=>{ drag=false; };
      // Логика игры
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
      desktop.appendChild(win);
    }
  };
} catch(e){ window.APP_LIST["tictactoe"] = null; }

// Калькулятор
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
      close.onclick = () => win.remove();
      let drag=false, offsetX=0, offsetY=0;
      header.onmousedown=(e)=>{ drag=true; offsetX=e.clientX-win.offsetLeft; offsetY=e.clientY-win.offsetTop; zIndex++; win.style.zIndex=zIndex; };
      document.onmousemove=(e)=>{ if(drag){ win.style.left=e.clientX-offsetX+"px"; win.style.top=e.clientY-offsetY+"px"; } };
      document.onmouseup=()=>{ drag=false; };
      // Логика калькулятора
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
            }
          } else if(val === 'C') {
            current = ""; operator = null; operand = null; updateDisplay("0");
          }
        };
      });
      function calc(a,b,op) {
        if(op==='+') return a+b;
        if(op==='-') return a-b;
        if(op==='*') return a*b;
        if(op==='/') return b!==0?a/b:0;
        return b;
      }
      desktop.appendChild(win);
    }
  };
} catch(e){ window.APP_LIST["calc"] = null; }

// ======== LOAD APPS ========
try {
  // CMD
  window.APP_LIST["cmd"] = {
    runCMD: function(term, args) {
      try {
        const cmd = args[0];
        if (!cmd) return;
        if(cmd === "echo") {
          term.print(args.slice(1).join(" "));
        } else if(cmd === "help") {
          term.print("Доступные команды: echo, help, clear, recovery, reboot, shutdown, date, about, notepad, ver, time, sum, random, color, ny");
        } else if(cmd === "clear") {
          term.clear();
        } else if(cmd === "recovery") {
          window.location.href = "recovery.html";
        } else if(cmd === "reboot") {
          location.reload();
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
        // команда whoami удалена
        } else if(cmd === "ny") {
          term.print("🎄 С новым 2026 годом, darkOS! Желаю чтобы эта мини-ос стала самой популярной! (от darklight)");
        } else if(cmd === "ver") {
          term.print("Версия darkOS: 1.2");
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
        } else {
          throw new Error("Команда не найдена: " + cmd);
        }
      } catch(e) { throw e; }
    }
  };
} catch(e){ window.APP_LIST["cmd"] = null; }

try {
  // Notepad
  window.APP_LIST["notepad"] = {
    runCMD: function() {
      const win = document.createElement("div");
      win.className = "window";
      win.style.zIndex = ++zIndex;

      win.innerHTML = `
        <div class="window-header">
          <span>Блокнот</span>
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

      close.onclick = () => win.remove();

      // Перетаскивание окна
      let drag=false, offsetX=0, offsetY=0;
      header.onmousedown=(e)=>{ drag=true; offsetX=e.clientX-win.offsetLeft; offsetY=e.clientY-win.offsetTop; zIndex++; win.style.zIndex=zIndex; };
      document.onmousemove=(e)=>{ if(drag){ win.style.left=e.clientX-offsetX+"px"; win.style.top=e.clientY-offsetY+"px"; } };
      document.onmouseup=()=>{ drag=false; };

      // ===== Сохранение файла =====
      saveBtn.onclick = () => {
        const blob = new Blob([textarea.value], {type:"text/plain"});
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = "newfile.txt";
        a.click();
        URL.revokeObjectURL(url);
      };

      // ===== Открытие файла =====
      openBtn.onclick = () => fileInput.click();

      fileInput.onchange = (e) => {
        const file = e.target.files[0];
        if(!file) return;
        const reader = new FileReader();
        reader.onload = (event) => {
          textarea.value = event.target.result;
        };
        reader.readAsText(file);
      };

      desktop.appendChild(win);
    }
  };
} catch(e){ window.APP_LIST["notepad"] = null; }

// ======== OPEN CMD ========
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
  close.onclick = () => win.remove();

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

  desktop.appendChild(win);
}

// ======== START MENU BUTTONS ========
menu.insertAdjacentHTML("beforeend", `<button id="openCMDBtn">Командная строка</button>`);
document.getElementById("openCMDBtn").addEventListener("click", openCMD);

menu.insertAdjacentHTML("beforeend", `<button id="openNotepadBtn">Блокнот</button>`);
document.getElementById("openNotepadBtn").addEventListener("click", ()=>{
  if(!window.APP_LIST["notepad"]) return criticalWindow("Блокнот не найден");
  window.APP_LIST["notepad"].runCMD();
});

// Кнопка калькулятора
menu.insertAdjacentHTML("beforeend", `<button id="openCalcBtn">Калькулятор</button>`);
document.getElementById("openCalcBtn").addEventListener("click", ()=>{
  if(!window.APP_LIST["calc"]) return criticalWindow("Калькулятор не найден");
  window.APP_LIST["calc"].runCMD();
});

// Кнопка крестики-нолики
menu.insertAdjacentHTML("beforeend", `<button id="openTTTBtn">Крестики-нолики</button>`);
document.getElementById("openTTTBtn").addEventListener("click", ()=>{
  if(!window.APP_LIST["tictactoe"]) return criticalWindow("Крестики-нолики не найдены");
  window.APP_LIST["tictactoe"].runCMD();
});

// Кнопка "Глюк"
// Кнопка jfdhguigdi
menu.insertAdjacentHTML("beforeend", `<button id="openJfdhguigdiBtn">jfdhguigdi</button>`);
document.getElementById("openJfdhguigdiBtn").addEventListener("click", ()=>{
  if(!window.APP_LIST["jfdhguigdi"]) return criticalWindow("jfdhguigdi не найден");
  window.APP_LIST["jfdhguigdi"].runCMD();
});
// --- Иконка крестики-нолики на рабочем столе ---
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

document.body.classList.add("booting"); // убираем курсор

setTimeout(() => {
  boot.style.display = "none";
  system.classList.remove("hidden");
  document.body.classList.remove("booting"); // возвращаем курсор
  addWallpaperButton();
}, 2500);

// Пуск: Перезагрузка
menu.insertAdjacentHTML("beforeend", `<button id="restartBtn">Перезагрузка</button>`);
document.getElementById("restartBtn").addEventListener("click", () => {
    location.reload(); // перезагрузка страницы
});

// Пуск: Выключение
menu.insertAdjacentHTML("beforeend", `<button id="shutdownBtn">Выключение</button>`);
document.getElementById("shutdownBtn").addEventListener("click", () => {
    system.style.display = "none"; // скрываем систему
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
    if(e.button === 2) { // правая кнопка
        openDesktopMenu(e.clientX, e.clientY);
    }
});

document.addEventListener("mousedown", e => {
    if (e.button === 2) { // правая кнопка
        const oldMenu = document.querySelector(".desktop-context");
        if (oldMenu) oldMenu.remove(); // убираем старое

        // Только если клик на рабочем столе (desktop)
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

// === Часы и дата на рабочем столе ===
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
    clock.style.display = "none"; // скрываем пока boot
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

    // Показываем часы только после boot
    const bootEndCheck = setInterval(() => {
        const boot = document.getElementById("boot");
        if (!boot || boot.style.display === "none") {
            clock.style.display = "block";
            clearInterval(bootEndCheck);
        }
    }, 100);
})();
