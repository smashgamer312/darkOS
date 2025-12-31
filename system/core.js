const start = document.getElementById("start");
const menu = document.getElementById("startMenu");
const desktop = document.getElementById("desktop");
const openBtn = document.getElementById("openAppBtn");
const boot = document.getElementById("boot");
const system = document.getElementById("system");

let zIndex = 1;

function finishBoot() {
    boot.style.display = "none";
    system.classList.remove("hidden");
    document.body.style.cursor = "auto";
    bootActive = false;
}

setTimeout(() => {
    if (bootActive) {
        finishBoot();
    }
}, 2500);
start.onclick = () => {
  menu.style.display = menu.style.display === "block" ? "none" : "block";
};

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

window.APP_LIST = window.APP_LIST || {};

try {
  window.APP_LIST["jfdhguigdi"] = {
    runCMD: function() {

      document.body.style.cursor = 'none';

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
      close.onclick = () => win.remove();
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
      close.onclick = () => win.remove();
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

try {
  window.APP_LIST["music"] = {
    runCMD: function() {
      const win = document.createElement("div");
      win.className = "window";
      win.style.zIndex = ++zIndex;
      win.innerHTML = `
        <div class="window-header">
          <span>Музыка</span>
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
      close.onclick = () => win.remove();
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
      filesInput.onchange = ()=>{ const files = Array.from(filesInput.files); files.forEach(f=>{ const url = URL.createObjectURL(f); tracks.push({name:f.name,url}); }); if(current===-1 && tracks.length) playIndex(0); renderPlaylist(); };
      playBtn.onclick = ()=>{ if(!audio.src){ if(tracks.length) playIndex(0); return;} if(isPlaying){ audio.pause(); isPlaying=false; playBtn.textContent='▶'; } else { audio.play(); isPlaying=true; playBtn.textContent='⏸'; } };
      prevBtn.onclick = ()=>{ if(tracks.length){ playIndex((current-1+tracks.length)%tracks.length); } };
      nextBtn.onclick = ()=>{ if(tracks.length){ playIndex((current+1)%tracks.length); } };
      vol.oninput = ()=>{ audio.volume = Number(vol.value); };
      shuffleBtn.onclick = ()=>{ shuffle = !shuffle; shuffleBtn.style.opacity = shuffle?1:0.6; };
      audio.onended = ()=>{ if(shuffle){ playIndex(Math.floor(Math.random()*tracks.length)); } else { nextBtn.onclick(); } };
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
          term.print("Доступные команды: echo, help, clear, recovery, reboot, shutdown, date, about, notepad, ver, time, sum, random, color, ny, calc, memory, fortune, banner, pwd, ls, uname, uptime, disk, cpu, gpu, network");
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

        } else if(cmd === "ny") {
          term.print("🎄 С новым 2026 годом, darkOS! Желаю чтобы эта мини-ос стала самой популярной! (от darklight)");
        } else if(cmd === "ver") {
          term.print("Версия darkOS: 1.3");
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
          term.print("darkOS " + new Date().getFullYear() + " (kernel 1.3)");
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
        } else {
          throw new Error("Команда не найдена: " + cmd);
        }
      } catch(e) { throw e; }
    }
  };
} catch(e){ window.APP_LIST["cmd"] = null; }

try {

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

      let drag=false, offsetX=0, offsetY=0;
      header.onmousedown=(e)=>{ drag=true; offsetX=e.clientX-win.offsetLeft; offsetY=e.clientY-win.offsetTop; zIndex++; win.style.zIndex=zIndex; };
      document.onmousemove=(e)=>{ if(drag){ win.style.left=e.clientX-offsetX+"px"; win.style.top=e.clientY-offsetY+"px"; } };
      document.onmouseup=()=>{ drag=false; };

      saveBtn.onclick = () => {
        const blob = new Blob([textarea.value], {type:"text/plain"});
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = "newfile.txt";
        a.click();
        URL.revokeObjectURL(url);
      };

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
    {emoji: '🔤', name: 'Base64', top: '450px', left: '100px', app: 'base64'}
  ];
  
  icons.forEach(ico => {
    const icon = document.createElement('div');
    icon.style.position = 'absolute';
    icon.style.left = ico.left;
    icon.style.top = ico.top;
    icon.style.width = '60px';
    icon.style.height = '60px';
    icon.style.display = 'flex';
    icon.style.flexDirection = 'column';
    icon.style.alignItems = 'center';
    icon.style.justifyContent = 'center';
    icon.style.cursor = 'pointer';
    icon.innerHTML = `<div style="font-size:2em;">${ico.emoji}</div><div style="font-size:0.75em;color:#222;">${ico.name}</div>`;
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
  boot.style.display = "none";
  system.classList.remove("hidden");
  document.body.classList.remove("booting"); 
  addWallpaperButton();
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
      close.onclick = () => win.remove();
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
      close.onclick = () => win.remove();
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
      win.style.width = "400px";
      win.innerHTML = `
        <div class="window-header">
          <span>📁 File Browser</span>
          <span class="close">✖</span>
        </div>
        <div class="window-content" style="height:200px;overflow-y:auto;background:#fff;color:#000;padding:10px;">
          <div style="font-size:12px;line-height:1.8;">
            📂 /home<br>
            &nbsp;&nbsp;📂 darkOS<br>
            &nbsp;&nbsp;&nbsp;&nbsp;📄 main.html<br>
            &nbsp;&nbsp;&nbsp;&nbsp;📄 recovery.html<br>
            &nbsp;&nbsp;&nbsp;&nbsp;📂 system<br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;📄 core.js<br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;📄 shell.css<br>
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
      
      close.onclick = () => win.remove();
      let drag=false, offsetX=0, offsetY=0;
      header.onmousedown=(e)=>{ drag=true; offsetX=e.clientX-win.offsetLeft; offsetY=e.clientY-win.offsetTop; zIndex++; win.style.zIndex=zIndex; };
      document.onmousemove=(e)=>{ if(drag){ win.style.left=e.clientX-offsetX+"px"; win.style.top=e.clientY-offsetY+"px"; } };
      document.onmouseup=()=>{ drag=false; };
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
      close.onclick = () => win.remove();
      let drag=false, offsetX=0, offsetY=0;
      header.onmousedown=(e)=>{ drag=true; offsetX=e.clientX-win.offsetLeft; offsetY=e.clientY-win.offsetTop; zIndex++; win.style.zIndex=zIndex; };
      document.onmousemove=(e)=>{ if(drag){ win.style.left=e.clientX-offsetX+"px"; win.style.top=e.clientY-offsetY+"px"; } };
      document.onmouseup=()=>{ drag=false; };
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
      
      close.onclick = () => win.remove();
      let drag=false, offsetX=0, offsetY=0;
      header.onmousedown=(e)=>{ drag=true; offsetX=e.clientX-win.offsetLeft; offsetY=e.clientY-win.offsetTop; zIndex++; win.style.zIndex=zIndex; };
      document.onmousemove=(e)=>{ if(drag){ win.style.left=e.clientX-offsetX+"px"; win.style.top=e.clientY-offsetY+"px"; } };
      document.onmouseup=()=>{ drag=false; };
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
          <div>🖥️ Версия: 1.3</div>
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
      
      close.onclick = () => win.remove();
      let drag=false, offsetX=0, offsetY=0;
      header.onmousedown=(e)=>{ drag=true; offsetX=e.clientX-win.offsetLeft; offsetY=e.clientY-win.offsetTop; zIndex++; win.style.zIndex=zIndex; };
      document.onmousemove=(e)=>{ if(drag){ win.style.left=e.clientX-offsetX+"px"; win.style.top=e.clientY-offsetY+"px"; } };
      document.onmouseup=()=>{ drag=false; };
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
      
      close.onclick = () => win.remove();
      let drag=false, offsetX=0, offsetY=0;
      header.onmousedown=(e)=>{ drag=true; offsetX=e.clientX-win.offsetLeft; offsetY=e.clientY-win.offsetTop; zIndex++; win.style.zIndex=zIndex; };
      document.onmousemove=(e)=>{ if(drag){ win.style.left=e.clientX-offsetX+"px"; win.style.top=e.clientY-offsetY+"px"; } };
      document.onmouseup=()=>{ drag=false; };
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
      
      close.onclick = () => win.remove();
      let drag=false, offsetX=0, offsetY=0;
      header.onmousedown=(e)=>{ drag=true; offsetX=e.clientX-win.offsetLeft; offsetY=e.clientY-win.offsetTop; zIndex++; win.style.zIndex=zIndex; };
      document.onmousemove=(e)=>{ if(drag){ win.style.left=e.clientX-offsetX+"px"; win.style.top=e.clientY-offsetY+"px"; } };
      document.onmouseup=()=>{ drag=false; };
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
      
      close.onclick = () => win.remove();
      let drag=false, offsetX=0, offsetY=0;
      header.onmousedown=(e)=>{ drag=true; offsetX=e.clientX-win.offsetLeft; offsetY=e.clientY-win.offsetTop; zIndex++; win.style.zIndex=zIndex; };
      document.onmousemove=(e)=>{ if(drag){ win.style.left=e.clientX-offsetX+"px"; win.style.top=e.clientY-offsetY+"px"; } };
      document.onmouseup=()=>{ drag=false; };
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
      
      close.onclick = () => win.remove();
      let drag=false, offsetX=0, offsetY=0;
      header.onmousedown=(e)=>{ drag=true; offsetX=e.clientX-win.offsetLeft; offsetY=e.clientY-win.offsetTop; zIndex++; win.style.zIndex=zIndex; };
      document.onmousemove=(e)=>{ if(drag){ win.style.left=e.clientX-offsetX+"px"; win.style.top=e.clientY-offsetY+"px"; } };
      document.onmouseup=()=>{ drag=false; };
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
      
      close.onclick = () => win.remove();
      let drag=false, offsetX=0, offsetY=0;
      header.onmousedown=(e)=>{ drag=true; offsetX=e.clientX-win.offsetLeft; offsetY=e.clientY-win.offsetTop; zIndex++; win.style.zIndex=zIndex; };
      document.onmousemove=(e)=>{ if(drag){ win.style.left=e.clientX-offsetX+"px"; win.style.top=e.clientY-offsetY+"px"; } };
      document.onmouseup=()=>{ drag=false; };
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
      
      close.onclick = () => win.remove();
      let drag=false, offsetX=0, offsetY=0;
      header.onmousedown=(e)=>{ drag=true; offsetX=e.clientX-win.offsetLeft; offsetY=e.clientY-win.offsetTop; zIndex++; win.style.zIndex=zIndex; };
      document.onmousemove=(e)=>{ if(drag){ win.style.left=e.clientX-offsetX+"px"; win.style.top=e.clientY-offsetY+"px"; } };
      document.onmouseup=()=>{ drag=false; };
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
      
      close.onclick = () => win.remove();
      let drag=false, offsetX=0, offsetY=0;
      header.onmousedown=(e)=>{ drag=true; offsetX=e.clientX-win.offsetLeft; offsetY=e.clientY-win.offsetTop; zIndex++; win.style.zIndex=zIndex; };
      document.onmousemove=(e)=>{ if(drag){ win.style.left=e.clientX-offsetX+"px"; win.style.top=e.clientY-offsetY+"px"; } };
      document.onmouseup=()=>{ drag=false; };
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
      
      close.onclick = () => win.remove();
      let drag=false, offsetX=0, offsetY=0;
      header.onmousedown=(e)=>{ drag=true; offsetX=e.clientX-win.offsetLeft; offsetY=e.clientY-win.offsetTop; zIndex++; win.style.zIndex=zIndex; };
      document.onmousemove=(e)=>{ if(drag){ win.style.left=e.clientX-offsetX+"px"; win.style.top=e.clientY-offsetY+"px"; } };
      document.onmouseup=()=>{ drag=false; };
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
      
      close.onclick = () => win.remove();
      let drag=false, offsetX=0, offsetY=0;
      header.onmousedown=(e)=>{ drag=true; offsetX=e.clientX-win.offsetLeft; offsetY=e.clientY-win.offsetTop; zIndex++; win.style.zIndex=zIndex; };
      document.onmousemove=(e)=>{ if(drag){ win.style.left=e.clientX-offsetX+"px"; win.style.top=e.clientY-offsetY+"px"; } };
      document.onmouseup=()=>{ drag=false; };
      desktop.appendChild(win);
    }
  };
} catch(e){ window.APP_LIST["base64"] = null; }

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