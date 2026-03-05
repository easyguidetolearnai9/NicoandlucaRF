(function () {
  const views = {
    dashboard: document.getElementById("dashboard-view"),
    forecast: document.getElementById("forecast-view")
  };
  const shell = document.querySelector(".exact-shell");
  let activeView = "dashboard";

  function applyViewGeometry(view) {
    if (!shell || !views.dashboard) {
      return;
    }

    if (window.matchMedia("(max-width: 760px)").matches) {
      shell.style.removeProperty("width");
      views.dashboard.style.removeProperty("aspect-ratio");
      return;
    }

    if (view === "dashboard") {
      shell.style.width = "min(100vw, calc(100dvh * 1024 / 428))";
      views.dashboard.style.aspectRatio = "1024 / 428";
      return;
    }

    shell.style.width = "min(100vw, calc(100dvh * 1024 / 454))";
    views.dashboard.style.aspectRatio = "1024 / 454";
  }

  function hydrateViewAssets(view) {
    const section = views[view];
    if (!section) {
      return;
    }

    if (section.dataset.sceneImage && section.dataset.sceneReady !== "1") {
      section.style.setProperty("--scene-image", "url('" + section.dataset.sceneImage + "')");
      section.dataset.sceneReady = "1";
    }

    section.querySelectorAll("img[data-src]").forEach((image) => {
      if (image.dataset.src) {
        image.src = image.dataset.src;
        image.removeAttribute("data-src");
      }
    });
  }

  function setActiveView(view) {
    activeView = view;
    hydrateViewAssets(view);
    applyViewGeometry(view);

    Object.keys(views).forEach((key) => {
      views[key].classList.toggle("is-active", key === view);
    });
    if (view === "forecast") {
      window.location.hash = "forecast";
    } else {
      history.replaceState(null, "", window.location.pathname);
    }
  }

  document.querySelectorAll("[data-view-toggle]").forEach((button) => {
    button.addEventListener("click", (event) => {
      event.preventDefault();
      setActiveView(button.dataset.viewToggle);
    });
  });

  window.addEventListener("hashchange", () => {
    setActiveView(window.location.hash === "#forecast" ? "forecast" : "dashboard");
  });

  window.addEventListener("resize", () => {
    applyViewGeometry(activeView);
  });

  const initialView = window.location.hash === "#forecast" ? "forecast" : "dashboard";
  setActiveView(initialView);

  window.addEventListener("load", () => {
    const delayedView = initialView === "dashboard" ? "forecast" : "dashboard";
    window.setTimeout(() => hydrateViewAssets(delayedView), 1200);
  });
})();
