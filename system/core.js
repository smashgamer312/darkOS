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

// ======== LOAD APPS ========
try {
  // CMD
  window.APP_LIST["cmd"] = {
    runCMD: function(term, args) {
      try {
        if(args[0] === "echo") term.print(args.slice(1).join(" "));
        else if(args[0] === "help") term.print("Доступные команды: echo, help, clear");
        else if(args[0] === "clear") term.clear();
        else throw new Error("Команда не найдена: " + args[0]);
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
