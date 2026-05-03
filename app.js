// ============================================================
//  app.js  ―  UI ロジック
//  リンクデータは links.js で管理しています
// ============================================================

/* ---------- ページ切替 ---------- */
function switchPage(id) {
  document.querySelectorAll(".page").forEach(p => p.classList.remove("active"));
  document.querySelectorAll(".page-tab").forEach(b => b.classList.remove("active"));
  document.getElementById("page-" + id).classList.add("active");
  const tab = document.querySelector(`.page-tab[data-page="${id}"]`);
  if (tab) tab.classList.add("active");
}

/* ---------- ファビコン取得URL候補 ---------- */
function getFavSources(link) {
  const d = link.domain;
  const srcs = [];
  if (link.icon) srcs.push(link.icon);
  srcs.push(
    `https://t1.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://${d}&size=64`,
    `https://www.google.com/s2/favicons?sz=64&domain=${d}`,
    `https://icons.duckduckgo.com/ip3/${d}.ico`,
    `https://${d}/favicon.ico`,
    `https://www.${d}/favicon.ico`
  );
  return srcs;
}

/* ---------- アイコン要素を生成 ---------- */
function buildIcon(link, fallbackColor) {
  const wrap = document.createElement("div");
  wrap.className = "icon-wrap";

  const img = document.createElement("img");
  img.alt = link.name;

  const srcs = getFavSources(link);
  let idx = 0;

  function showFallback() {
    if (wrap.contains(img)) wrap.removeChild(img);
    const fb = document.createElement("div");
    fb.className = "icon-fb";
    const col = fallbackColor || SUB_COLOR;
    fb.style.background = col[0];
    fb.style.color = col[1];
    fb.textContent = link.name[0].toUpperCase();
    wrap.appendChild(fb);
  }

  function tryNext() {
    if (idx < srcs.length) {
      img.src = srcs[idx++];
    } else {
      showFallback();
    }
  }

  img.onerror = tryNext;
  img.onload = function () {
    if (img.naturalWidth <= 4 || img.naturalHeight <= 4) tryNext();
  };

  tryNext();
  wrap.appendChild(img);
  return wrap;
}

/* ---------- カード要素を生成 ---------- */
function buildCard(link, fallbackColor) {
  const a = document.createElement("a");
  a.className = "card";
  a.href = link.url;
  a.target = "_blank";
  a.rel = "noopener";

  const nm = document.createElement("div");
  nm.className = "name";
  nm.textContent = link.name.replace(/\\n/g, "\n");

  if (link.badge) {
    const badge = document.createElement("div");
    badge.className = "badge";
    badge.style.background = GOLD_COLOR[0];
    badge.style.color = GOLD_COLOR[1];
    badge.textContent = link.badge;

    a.appendChild(buildIcon(link, GOLD_COLOR));
    a.appendChild(nm);
    a.appendChild(badge);
  } else {
    a.appendChild(buildIcon(link, fallbackColor));
    a.appendChild(nm);
  }

  return a;
}

/* ---------- メインページ描画 ---------- */
let activeCategory = "すべて";

function renderMainGrid() {
  const gridEl = document.getElementById("grid");
  gridEl.innerHTML = "";

  const filtered =
    activeCategory === "すべて"
      ? MAIN_LINKS
      : MAIN_LINKS.filter(l => l.category === activeCategory);

  filtered.forEach(link => {
    gridEl.appendChild(buildCard(link, CAT_COLORS[link.category]));
  });
}

function buildFilters() {
  const filtersEl = document.getElementById("filters");
  const cats = ["すべて", ...[...new Set(MAIN_LINKS.map(l => l.category))]];

  cats.forEach(cat => {
    const btn = document.createElement("button");
    btn.className = "pill" + (cat === activeCategory ? " active" : "");
    btn.textContent = cat;
    btn.onclick = () => {
      activeCategory = cat;
      document.querySelectorAll(".pill").forEach(p => p.classList.remove("active"));
      btn.classList.add("active");
      renderMainGrid();
    };
    filtersEl.appendChild(btn);
  });
}

/* ---------- セミナーページ描画 ---------- */
function renderSeminarPage() {
  const container = document.getElementById("seminar-sections");
  container.innerHTML = "";

  SEMINAR_SECTIONS.forEach(section => {
    const sec = document.createElement("div");
    sec.className = "sub-section";

    const title = document.createElement("div");
    title.className = "sub-section-title";
    title.textContent = section.title;

    const grid = document.createElement("div");
    grid.className = "grid";
    section.links.forEach(link => {
      grid.appendChild(buildCard(link, SUB_COLOR));
    });

    sec.appendChild(title);
    sec.appendChild(grid);
    container.appendChild(sec);
  });
}

/* ---------- 初期化 ---------- */
document.addEventListener("DOMContentLoaded", () => {
  buildFilters();
  renderMainGrid();
  renderSeminarPage();
});
