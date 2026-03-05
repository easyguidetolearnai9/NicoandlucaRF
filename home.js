(function () {
  const views = {
    dashboard: document.getElementById("dashboard-view"),
    forecast: document.getElementById("forecast-view")
  };

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
    hydrateViewAssets(view);

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

  const initialView = window.location.hash === "#forecast" ? "forecast" : "dashboard";
  setActiveView(initialView);

  window.addEventListener("load", () => {
    const delayedView = initialView === "dashboard" ? "forecast" : "dashboard";
    window.setTimeout(() => hydrateViewAssets(delayedView), 1200);
  });
})();
