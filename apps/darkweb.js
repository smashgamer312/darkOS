try {
  window.APP_LIST["darkweb"] = {
    runCMD: function() {
      const win = document.createElement("div");
      win.className = "window";
      win.style.width = "900px";
      win.style.height = "600px";
      win.innerHTML = `
        <div class="window-header">
          <span>🌐 darkWeb Browser</span>
          <span class="close">✖</span>
        </div>
        <div class="window-content" style="padding:0;background:#1a1a1a;">
          <!-- Панель инструментов браузера -->
          <div style="background:#2d2d2d;padding:10px;border-bottom:1px solid #444;display:flex;align-items:center;gap:10px;">
            <button id="backBtn" style="background:#444;color:#fff;border:none;padding:5px 10px;border-radius:3px;cursor:pointer;">←</button>
            <button id="forwardBtn" style="background:#444;color:#fff;border:none;padding:5px 10px;border-radius:3px;cursor:pointer;">→</button>
            <button id="refreshBtn" style="background:#444;color:#fff;border:none;padding:5px 10px;border-radius:3px;cursor:pointer;">↻</button>
            <input type="text" id="urlBar" placeholder="Введите URL или поиск..." 
              style="flex:1;padding:8px;border:1px solid #555;border-radius:3px;background:#333;color:#fff;">
            <button id="goBtn" style="background:#007bff;color:#fff;border:none;padding:8px 15px;border-radius:3px;cursor:pointer;">Перейти</button>
          </div>
          
          <!-- Статус-бар -->
          <div id="statusBar" style="background:#333;color:#aaa;padding:5px 10px;font-size:12px;border-bottom:1px solid #444;">
            🌐 Готов к работе
          </div>
          
          <!-- Область контента -->
          <div id="browserContent" style="height:calc(100% - 80px);overflow:auto;background:#000;">
            <div style="padding:40px;text-align:center;color:#888;">
              <div style="font-size:4em;margin-bottom:20px;">🌐</div>
              <h2 style="color:#fff;margin-bottom:10px;">darkWeb Browser</h2>
              <p style="margin-bottom:20px;">Приватный браузер для доступа к скрытым ресурсам</p>
              <div style="background:#2d2d2d;padding:20px;border-radius:8px;margin:20px auto;max-width:500px;text-align:left;">
                <h3 style="color:#007bff;margin-top:0;">🔒 Возможности:</h3>
                <ul style="color:#ccc;list-style:none;padding:0;">
                  <li>🌍 Доступ к .onion сайтам</li>
                  <li>🔐 Анонимный просмотр</li>
                  <li>🚫 Блокировка трекеров</li>
                  <li>🔍 Встроенный поиск</li>
                  <li>⚡ Быстрая загрузка</li>
                </ul>
              </div>
              <p style="font-size:14px;color:#666;">Введите URL в адресную строку для начала навигации</p>
            </div>
          </div>
        </div>
      `;
      
      const header = win.querySelector(".window-header");
      const close = win.querySelector(".close");
      const urlBar = win.querySelector("#urlBar");
      const goBtn = win.querySelector("#goBtn");
      const backBtn = win.querySelector("#backBtn");
      const forwardBtn = win.querySelector("#forwardBtn");
      const refreshBtn = win.querySelector("#refreshBtn");
      const browserContent = win.querySelector("#browserContent");
      const statusBar = win.querySelector("#statusBar");
      
      let currentUrl = '';
      let history = [];
      let historyIndex = -1;
      
      // Функция загрузки контента
      function loadContent(url) {
        if (!url) return;
        
        currentUrl = url;
        urlBar.value = url;
        statusBar.textContent = `🌐 Загрузка: ${url}...`;
        
        // Добавляем в историю
        if (historyIndex < history.length - 1) {
          history = history.slice(0, historyIndex + 1);
        }
        history.push(url);
        historyIndex++;
        
        // Обновляем кнопки навигации
        backBtn.disabled = historyIndex <= 0;
        forwardBtn.disabled = historyIndex >= history.length - 1;
        
        setTimeout(() => {
          // Проверяем специальные URL
          if (url === 'https://freekeyz.xyz' || url === 'freekeyz.xyz') {
            loadFakeSite();
          } else if (url.includes('dark') || url.includes('hidden') || url.includes('onion')) {
            loadDarkSite(url);
          } else if (url.includes('google') || url.includes('search') || url.includes('поиск')) {
            loadSearchResults(url);
          } else {
            loadDefaultSite(url);
          }
        }, 1000);
      }
      
      // Загрузка фейкового сайта ключей
      function loadFakeSite() {
        browserContent.innerHTML = `
          <div style="background:#fff;color:#333;min-height:100%;font-family:Arial,sans-serif;">
            <div style="background:linear-gradient(135deg,#667eea 0%,#764ba2 100%);color:white;padding:20px;text-align:center;">
              <h1 style="margin:0;font-size:2.5em;">🔑 Free DarkOS Keys</h1>
              <p style="margin:10px 0;font-size:1.1em;">Получите бесплатный ключ активации</p>
            </div>
            <div style="padding:40px;max-width:600px;margin:0 auto;">
              <div style="background:#f8f9fa;border:2px dashed #dee2e6;border-radius:10px;padding:30px;text-align:center;margin:20px 0;">
                <h3 style="color:#495057;margin-bottom:20px;">🎁 Ваш бесплатный ключ:</h3>
                <div style="background:#fff;border:2px solid #007bff;border-radius:8px;padding:20px;font-family:'Courier New',monospace;font-size:18px;font-weight:bold;color:#007bff;margin:20px 0;">
                  FAKE-DARKOS-FREE-ACCESS-2024
                </div>
                <button onclick="navigator.clipboard.writeText('FAKE-DARKOS-FREE-ACCESS-2024');alert('Ключ скопирован!')" 
                  style="background:#007bff;color:white;border:none;padding:12px 25px;border-radius:5px;font-weight:bold;cursor:pointer;">
                  📋 Копировать ключ
                </button>
              </div>
              <div style="background:#d4edda;border:1px solid #c3e6cb;border-radius:8px;padding:20px;margin:20px 0;">
                <h4 style="color:#155724;margin-top:0;">✅ Этот ключ:</h4>
                <ul style="color:#155724;">
                  <li>Активирует полную версию DarkOS</li>
                  <li>Снимает все ограничения</li>
                  <li>Дает доступ к премиум функциям</li>
                  <li>Работает навсегда</li>
                </ul>
              </div>
            </div>
          </div>
        `;
        statusBar.textContent = `🌐 Загружено: ${currentUrl}`;
      }
      
      // Загрузка темных сайтов
      function loadDarkSite(url) {
        const siteNames = {
          'dark': 'Dark Web Portal',
          'hidden': 'Hidden Wiki',
          'onion': 'Onion Network'
        };
        
        const siteName = Object.keys(siteNames).find(key => url.includes(key)) || 'Dark Site';
        
        browserContent.innerHTML = `
          <div style="background:#1a1a1a;color:#0f0;font-family:'Courier New',monospace;padding:20px;min-height:100%;">
            <div style="border:2px solid #0f0;padding:20px;margin:20px 0;">
              <h2 style="color:#0f0;text-align:center;margin-bottom:20px;">🔒 ${siteNames[siteName] || 'Dark Site'}</h2>
              <div style="background:#000;padding:15px;border-radius:5px;margin:15px 0;">
                <p style="margin:5px 0;">> ACCESSING_HIDDEN_NETWORK...</p>
                <p style="margin:5px 0;">> ENCRYPTION: AES-256</p>
                <p style="margin:5px 0;">> ANONYMITY: MAXIMUM</p>
                <p style="margin:5px 0;">> STATUS: SECURE</p>
              </div>
              <div style="text-align:center;margin:30px 0;">
                <div style="font-size:3em;margin-bottom:20px;">🕵️</div>
                <p style="color:#ff0;">Доступ к скрытым ресурсам ограничен</p>
                <p style="color:#ff0;">Требуется специальная авторизация</p>
              </div>
              <div style="background:#222;padding:15px;border-radius:5px;margin:20px 0;">
                <p style="color:#888;font-size:12px;">🔐 Этот контент доступен только авторизованным пользователям darkWeb</p>
              </div>
            </div>
          </div>
        `;
        statusBar.textContent = `🌐 Загружено: ${currentUrl} (защищенное соединение)`;
      }
      
      // Загрузка результатов поиска
      function loadSearchResults(query) {
        browserContent.innerHTML = `
          <div style="background:#fff;color:#333;min-height:100%;font-family:Arial,sans-serif;">
            <div style="background:#f8f9fa;border-bottom:1px solid #dee2e6;padding:15px;">
              <div style="max-width:600px;margin:0 auto;">
                <input type="text" value="${query}" style="width:100%;padding:10px;border:1px solid #ddd;border-radius:20px;" readonly>
              </div>
            </div>
            <div style="padding:20px;max-width:600px;margin:0 auto;">
              <h3 style="color:#666;margin-bottom:20px;">Результаты поиска:</h3>
              
              <div style="border-bottom:1px solid #eee;padding:15px 0;margin:15px 0;">
                <h4 style="color:#1a0daa;margin:5px 0;">🔑 Free DarkOS Keys - Бесплатные ключи активации</h4>
                <p style="color:#545454;margin:5px 0;">Получите бесплатные ключи для активации DarkOS. 100% работающие ключи...</p>
                <p style="color:#006621;font-size:14px;margin:5px 0;">https://freekeyz.xyz</p>
              </div>
              
              <div style="border-bottom:1px solid #eee;padding:15px 0;margin:15px 0;">
                <h4 style="color:#1a0daa;margin:5px 0;">🌐 DarkWeb - Скрытая сеть</h4>
                <p style="color:#545454;margin:5px 0;">Доступ к анонимным ресурсам и скрытым сервисам...</p>
                <p style="color:#006621;font-size:14px;margin:5px 0;">https://darkweb.onion</p>
              </div>
              
              <div style="border-bottom:1px solid #eee;padding:15px 0;margin:15px 0;">
                <h4 style="color:#1a0daa;margin:5px 0;">🔒 Hidden Wiki - Скрытая энциклопедия</h4>
                <p style="color:#545454;margin:5px 0;">Полная база знаний о скрытых ресурсах интернета...</p>
                <p style="color:#006621;font-size:14px;margin:5px 0;">https://hiddenwiki.onion</p>
              </div>
              
              <div style="text-align:center;margin:30px 0;color:#666;">
                <p>🔍 Показаны результаты для: "${query}"</p>
              </div>
            </div>
          </div>
        `;
        statusBar.textContent = `🌐 Найдено 3 результата по запросу: ${query}`;
      }
      
      // Загрузка сайта по умолчанию
      function loadDefaultSite(url) {
        browserContent.innerHTML = `
          <div style="background:#fff;color:#333;min-height:100%;font-family:Arial,sans-serif;">
            <div style="padding:40px;text-align:center;">
              <div style="font-size:4em;margin-bottom:20px;">🌐</div>
              <h2 style="color:#333;margin-bottom:10px;">Сайт не найден</h2>
              <p style="color:#666;margin-bottom:20px;">Не удалось загрузить сайт: ${url}</p>
              <div style="background:#f8f9fa;padding:20px;border-radius:8px;margin:20px auto;max-width:400px;">
                <h3 style="color:#dc3545;margin-top:0;">⚠️ Ошибка 404</h3>
                <p style="color:#666;">Возможные причины:</p>
                <ul style="text-align:left;color:#666;">
                  <li>Сайт не существует</li>
                  <li>Требуется VPN или специальный доступ</li>
                  <li>Сайт заблокирован</li>
                </ul>
              </div>
              <p style="font-size:14px;color:#999;">Попробуйте другой URL или воспользуйтесь поиском</p>
            </div>
          </div>
        `;
        statusBar.textContent = `🌐 Ошибка загрузки: ${currentUrl}`;
      }
      
      // Обработчики событий
      close.onclick = () => { playCloseSound(); win.remove(); };
      
      goBtn.onclick = () => loadContent(urlBar.value);
      
      urlBar.onkeypress = (e) => {
        if (e.key === 'Enter') {
          loadContent(urlBar.value);
        }
      };
      
      backBtn.onclick = () => {
        if (historyIndex > 0) {
          historyIndex--;
          loadContent(history[historyIndex]);
        }
      };
      
      forwardBtn.onclick = () => {
        if (historyIndex < history.length - 1) {
          historyIndex++;
          loadContent(history[historyIndex]);
        }
      };
      
      refreshBtn.onclick = () => {
        if (currentUrl) {
          loadContent(currentUrl);
        }
      };
      
      // Перетаскивание окна
      let drag=false, offsetX=0, offsetY=0, zIndex=100;
      header.onmousedown=(e)=>{ drag=true; offsetX=e.clientX-win.offsetLeft; offsetY=e.clientY-win.offsetTop; zIndex++; win.style.zIndex=zIndex; };
      document.onmousemove=(e)=>{ if(drag){ win.style.left=e.clientX-offsetX+"px"; win.style.top=e.clientY-offsetY+"px"; } };
      document.onmouseup=()=>{ drag=false; };
      
      playOpenSound();
      desktop.appendChild(win);
    }
  };
} catch(e){ window.APP_LIST["darkweb"] = null; }
