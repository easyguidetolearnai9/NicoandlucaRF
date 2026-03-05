(function () {
  const params = new URLSearchParams(window.location.search);
  const requestedTopicKey = params.get("topic") || "site-guide";
  const activeTopicKey = (window.TOPICS && window.TOPICS[requestedTopicKey]) ? requestedTopicKey : "site-guide";
  const topic = window.TOPICS[activeTopicKey];
  const searchForm = document.getElementById("search-form");
  const searchInput = document.getElementById("search-input");

  const sourceMap = {
    dashboard: "./dashboard-4x.jpg",
    forecast: "./reference-4x.jpg"
  };

  function topicUrl(key) {
    return "/detail?topic=" + encodeURIComponent(key);
  }

  function setMetaTag(attribute, key, content) {
    let tag = document.querySelector("meta[" + attribute + "='" + key + "']");
    if (!tag) {
      tag = document.createElement("meta");
      tag.setAttribute(attribute, key);
      document.head.appendChild(tag);
    }
    tag.setAttribute("content", content);
  }

  function setCanonical(url) {
    let link = document.querySelector("link[rel='canonical']");
    if (!link) {
      link = document.createElement("link");
      link.setAttribute("rel", "canonical");
      document.head.appendChild(link);
    }
    link.setAttribute("href", url);
  }

  function setSeoTags() {
    const canonicalUrl = new URL(window.location.origin + "/detail");
    canonicalUrl.search = "?topic=" + encodeURIComponent(activeTopicKey);
    const canonical = canonicalUrl.toString();
    const description = topic.summary;
    const title = topic.title + " | Nico & Luca RF";
    const image = window.location.origin + "/dashboard-4x.jpg";

    document.title = title;
    setCanonical(canonical);
    setMetaTag("name", "description", description);
    setMetaTag("property", "og:type", "article");
    setMetaTag("property", "og:title", title);
    setMetaTag("property", "og:description", description);
    setMetaTag("property", "og:url", canonical);
    setMetaTag("property", "og:image", image);
    setMetaTag("name", "twitter:card", "summary_large_image");
    setMetaTag("name", "twitter:title", title);
    setMetaTag("name", "twitter:description", description);
    setMetaTag("name", "twitter:image", image);
  }

  function setActiveNav() {
    const navMap = {
      dashboard: "nav-dashboard",
      forecast: "nav-forecast",
      species: "nav-species",
      charters: "nav-charters",
      profile: "nav-profile"
    };
    if (navMap[topic.nav]) {
      document.getElementById(navMap[topic.nav]).classList.add("is-active");
    }
  }

  function renderMarketplacePage() {
    document.title = "Fresh Catch Marketplace | Nico & Luca RF";
    document.body.className = "home-exact marketplace-exact-page";
    document.body.innerHTML = `
      <main class="exact-shell marketplace-shell">
        <section class="exact-view marketplace-view is-active" aria-label="Fresh Catch Marketplace" style="--scene-image:url('./marketplace-page-exact.png');">
          <img class="exact-image" src="./marketplace-page-exact.png" alt="Fresh Catch Marketplace">
          <div class="hotspot-layer">
            <a class="hotspot" href="/" style="--x:24.5; --y:0.6; --w:11.8; --h:4.8;" aria-label="Open dashboard"></a>
            <a class="hotspot" href="/#forecast" style="--x:36.2; --y:0.6; --w:9.8; --h:4.8;" aria-label="Open forecast"></a>
            <a class="hotspot" href="/detail?topic=species-season" style="--x:46.0; --y:0.6; --w:8.8; --h:4.8;" aria-label="Open species"></a>
            <a class="hotspot" href="/detail?topic=charter-marketplace" style="--x:54.6; --y:0.6; --w:12.8; --h:4.8;" aria-label="Open marketplace"></a>
            <a class="hotspot" href="/detail?topic=site-guide" style="--x:67.5; --y:0.6; --w:7.8; --h:4.8;" aria-label="Open profile"></a>

            <a class="hotspot" href="/detail?topic=charter-marketplace" style="--x:2.4; --y:4.6; --w:51.8; --h:77.8;" aria-label="Open marketplace page"></a>
            <a class="hotspot" href="/detail?topic=charter-marketplace" style="--x:55.2; --y:4.2; --w:29.6; --h:51.2;" aria-label="Open captain portal preview"></a>
            <a class="hotspot" href="/detail?topic=charter-marketplace" style="--x:54.8; --y:54.9; --w:31.2; --h:41.7;" aria-label="Open marketplace controls"></a>
          </div>
        </section>
      </main>
    `;
    setSeoTags();
  }

  function applyPreviewCrop(crop) {
    const cropFrame = document.getElementById("crop-frame");
    const cropImage = document.getElementById("crop-image");
    const contextImage = document.getElementById("context-image");
    const contextHighlight = document.getElementById("context-highlight");
    const source = sourceMap[topic.view || "dashboard"];

    cropImage.src = source;
    cropImage.alt = topic.title + " panel preview";
    contextImage.src = source;
    contextImage.alt = topic.title + " panel context";

    const aspect = (1024 * crop.w) / (454 * crop.h);
    cropFrame.style.aspectRatio = String(aspect);
    cropImage.style.width = String(10000 / crop.w) + "%";
    cropImage.style.left = "-" + String((crop.x / crop.w) * 100) + "%";
    cropImage.style.top = "-" + String((crop.y / crop.h) * 100) + "%";

    contextHighlight.style.left = crop.x + "%";
    contextHighlight.style.top = crop.y + "%";
    contextHighlight.style.width = crop.w + "%";
    contextHighlight.style.height = crop.h + "%";
  }

  function createVisual(type) {
    switch (type) {
      case "wind":
        return "<div class='wind-visual' style='position:absolute; inset:18px 22px 40px;'><svg viewBox='0 0 240 120' class='wind-svg' aria-hidden='true'><path class='wind-stream' d='M10 36c18-10 34-14 54-14 28 0 40 16 62 16 22 0 32-14 52-14 22 0 36 8 50 19'></path><path class='wind-stream soft' d='M2 62c20-8 35-10 55-10 18 0 29 8 46 8 22 0 32-10 50-10 22 0 40 10 76 10'></path><path class='wind-stream gold' d='M14 88c22-8 36-11 56-11 18 0 28 7 42 7 24 0 35-12 58-12 19 0 34 7 52 16'></path><circle class='wind-spark' cx='78' cy='38' r='3.5'></circle><circle class='wind-spark two' cx='148' cy='60' r='3'></circle><circle class='wind-spark three' cx='118' cy='84' r='2.8'></circle></svg></div><div class='metric-value' style='position:absolute; left:22px; bottom:18px; font-size:3.4rem;'><span>16</span> <small>mph</small></div>";
      case "wave":
        return "<div class='wave-visual' style='position:absolute; inset:18px 18px 40px;'><svg viewBox='0 0 220 120' class='animate-wave'><path d='M0 68c20 0 28-20 54-20s32 20 58 20 32-20 58-20 32 20 58 20' fill='none' stroke='rgba(111,245,255,0.82)' stroke-width='4'></path><path d='M0 84c16 0 20-10 40-10s20 10 40 10 20-10 40-10 20 10 40 10 20-10 40-10 20 10 40 10' fill='none' stroke='rgba(119,218,255,0.32)' stroke-width='2.5'></path><path d='M0 98c10 0 14-7 28-7s14 7 28 7 14-7 28-7 14 7 28 7 14-7 28-7 14 7 28 7 14-7 28-7 14 7 28 7' fill='none' stroke='rgba(242,196,91,0.18)' stroke-width='1.6'></path></svg></div>";
      case "score":
        return "<div class='score-wrap' style='max-width:300px; margin:20px auto 0;'><div class='score-ring'></div><div class='score-core'><div><strong>62</strong><span>/ 100</span></div></div><div class='score-pill'>Favorable Conditions</div></div>";
      case "tide":
        return "<div style='padding:18px; height:100%;'><svg viewBox='0 0 260 160' class='graph-svg animate-graph'><path d='M10 90c24 0 30 10 54 10 24 0 28-60 62-60 36 0 42 80 74 80 20 0 28-24 52-24 20 0 28 10 36 10' fill='none' stroke='rgba(111,245,255,0.88)' stroke-width='5' stroke-linecap='round'></path><path d='M10 90c24 0 30 10 54 10 24 0 28-60 62-60 36 0 42 80 74 80 20 0 28-24 52-24 20 0 28 10 36 10L250 150H10z' fill='rgba(111,245,255,0.14)'></path><path d='M176 18v110' stroke='rgba(242,196,91,0.58)' stroke-dasharray='4 6'></path><circle cx='176' cy='120' r='6' fill='#8ef8ff'></circle></svg></div>";
      case "days":
        return "<div style='padding:18px; display:grid; grid-template-columns:repeat(3,minmax(0,1fr)); gap:12px;'><div class='mini-day'><span class='mini-day-date'>Tue</span><span class='mini-day-label'>66/100</span></div><div class='mini-day'><span class='mini-day-date'>Fri</span><span class='mini-day-label'>68/100</span></div><div class='mini-day'><span class='mini-day-date'>Sun</span><span class='mini-day-label'>68/100</span></div></div>";
      case "fish":
        return "<div class='fish-row' style='padding:18px;'><div class='fish-tile'><svg class='fish-svg' viewBox='0 0 150 70'><defs><linearGradient id='detailFish1' x1='0%' y1='0%' x2='100%' y2='100%'><stop offset='0%' stop-color='#9bff75'></stop><stop offset='35%' stop-color='#f4f15f'></stop><stop offset='100%' stop-color='#24d9a4'></stop></linearGradient></defs><path d='M8 39c8-10 24-18 46-20 12-10 30-12 53-4 11 4 22 12 34 25-10 2-18 5-25 12-10 0-18-2-24-7-15 8-36 9-58 2-9-3-19-5-26-8z' fill='url(#detailFish1)'></path></svg><div class='fish-name'>Mahi-Mahi</div></div><div class='fish-tile'><svg class='fish-svg' viewBox='0 0 150 70'><defs><linearGradient id='detailFish2' x1='0%' y1='0%' x2='100%' y2='100%'><stop offset='0%' stop-color='#a8c7d8'></stop><stop offset='50%' stop-color='#d4eaf4'></stop><stop offset='100%' stop-color='#7fa8ba'></stop></linearGradient></defs><path d='M10 37c18-9 38-14 64-13 13-8 27-8 42 0 10 6 17 12 24 19-13 1-22 4-27 9-8 1-16 0-22-4-20 4-42 3-67-3-6-1-10-4-14-8z' fill='url(#detailFish2)'></path></svg><div class='fish-name'>Wahoo</div></div></div>";
      case "boat":
        return "<div style='padding:24px 18px 0; height:100%;'><svg class='boat-svg' viewBox='0 0 260 170'><defs><linearGradient id='detailBoatHull' x1='0%' y1='0%' x2='100%' y2='100%'><stop offset='0%' stop-color='#edf5ff'></stop><stop offset='40%' stop-color='#b4c8dd'></stop><stop offset='100%' stop-color='#566e8f'></stop></linearGradient></defs><path d='M16 146l57-32 88-8 79 17-30 23H47z' fill='url(#detailBoatHull)'></path><path d='M85 76l25-26h46l37 37-41 9-60-3z' fill='#2b3345'></path><path d='M101 82l21-21h31l21 21-31 6z' fill='#8ca1bc'></path><path d='M50 146l68 17 107-2 16-13' fill='none' stroke='rgba(85,227,255,0.46)' stroke-width='3'></path></svg></div>";
      case "temp":
        return "<div style='padding:14px 18px; height:100%;'><div class='module-value'>74.7&deg;F</div><div class='forecast-visual'><svg viewBox='0 0 220 90' class='animate-wave'><path d='M0 56c18 0 18-18 36-18s18 18 36 18 18-18 36-18 18 18 36 18 18-18 36-18 18 18 36 18' fill='none' stroke='rgba(111,245,255,0.82)' stroke-width='4'></path><path d='M0 68c15 0 15-10 30-10s15 10 30 10 15-10 30-10 15 10 30 10 15-10 30-10 15 10 30 10 15-10 30-10' fill='none' stroke='rgba(255,141,98,0.5)' stroke-width='3'></path></svg></div></div>";
      case "hourly":
        return "<div style='padding:18px; display:grid; grid-template-columns:repeat(4,minmax(0,1fr)); gap:10px;'><div class='hour-chip'><span class='hour-time'>7:00 AM</span><span class='hour-score'>64/100</span></div><div class='hour-chip'><span class='hour-time'>8:00 AM</span><span class='hour-score'>70/100</span></div><div class='hour-chip'><span class='hour-time'>9:00 AM</span><span class='hour-score'>71/100</span></div><div class='hour-chip'><span class='hour-time'>11:00 AM</span><span class='hour-score'>69/100</span></div></div>";
      default:
        return "<div style='padding:18px;'><svg viewBox='0 0 220 120' class='graph-svg animate-wave'><path d='M0 72c20 0 28-18 54-18s32 18 58 18 32-18 58-18 32 18 58 18' fill='none' stroke='rgba(111,245,255,0.82)' stroke-width='4'></path></svg></div>";
    }
  }

  function applySearch(event) {
    event.preventDefault();
    const query = searchInput.value.trim().toLowerCase();
    if (!query) {
      return;
    }
    const match = Object.entries(window.TOPICS || {}).find((entry) => {
      const item = entry[1];
      return (
        item.title.toLowerCase().indexOf(query) >= 0 ||
        item.summary.toLowerCase().indexOf(query) >= 0 ||
        item.eyebrow.toLowerCase().indexOf(query) >= 0
      );
    });
    if (match) {
      window.location.href = topicUrl(match[0]);
    }
  }

  if (activeTopicKey === "charter-marketplace") {
    renderMarketplacePage();
    if (searchForm) {
      searchForm.addEventListener("submit", applySearch);
    }
    return;
  }

  setSeoTags();
  document.getElementById("topic-eyebrow").textContent = topic.eyebrow;
  document.getElementById("topic-title").textContent = topic.title;
  document.getElementById("topic-summary").textContent = topic.summary;
  document.getElementById("crop-note").textContent = topic.view === "forecast" ? "This preview comes from the forecast view so the explanation stays visually tied to the main site layout." : "This preview comes from the dashboard view so the explanation stays tied to the current conditions layout.";
  document.getElementById("context-note").textContent = "The gold outline shows where this panel lives inside the full " + topic.view + " screen.";
  document.getElementById("visual-tag").textContent = topic.visualLabel || "Animated insight";

  const highlights = document.getElementById("topic-highlights");
  topic.highlights.forEach((item) => {
    const chip = document.createElement("div");
    chip.className = "info-chip";
    chip.textContent = item;
    highlights.appendChild(chip);
  });

  applyPreviewCrop(topic.crop);

  setActiveNav();

  const returnLink = document.getElementById("topic-return");
  returnLink.href = topic.view === "forecast" ? "/#forecast" : "/";
  returnLink.textContent = topic.view === "forecast" ? "Back To Forecast View" : "Back To Dashboard View";

  document.getElementById("visual-stage").innerHTML = createVisual(topic.visual);

  const topicSections = document.getElementById("topic-sections");
  topic.sections.forEach((section) => {
    const card = document.createElement("article");
    card.className = "scene detail-section";
    card.innerHTML = "<div class='scene-inner'><h2>" + section.heading + "</h2><p>" + section.body + "</p></div>";
    topicSections.appendChild(card);
  });

  const relatedGrid = document.getElementById("related-grid");
  topic.related.forEach((key) => {
    const item = window.TOPICS[key];
    if (!item) {
      return;
    }
    const card = document.createElement("article");
    card.className = "glass-card related-card";
    card.innerHTML =
      "<strong>" + item.eyebrow + "</strong>" +
      "<p>" + item.title + "</p>" +
      "<a class='related-link' href='" + topicUrl(key) + "'>Open Topic</a>";
    relatedGrid.appendChild(card);
  });

  if (searchForm) {
    searchForm.addEventListener("submit", applySearch);
  }
})();
