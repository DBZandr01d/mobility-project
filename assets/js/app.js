/* ==========================================================================
   The Mobility Project — application shell + client-side router
   Clean URLs (no ".html"), History API on http(s), hash fallback on file://
   ========================================================================== */

(function () {
  "use strict";

  var BASE = window.__APP_BASE__ || "/";
  var FILE_MODE = location.protocol === "file:";
  var ROUTES = window.ROUTES;
  var NAV_ITEMS = window.NAV_ITEMS;

  var view = document.getElementById("view");
  var header = document.getElementById("header");
  var nav = document.getElementById("nav");
  var drawer = document.getElementById("drawer");
  var burger = document.getElementById("burger");

  /* ------------------------------------------------------------ utilities */

  function clean(p) {
    return String(p || "").replace(/^\/+|\/+$/g, "");
  }

  /** Current route key, derived from the address bar. */
  function currentPath() {
    if (FILE_MODE) return clean(location.hash.replace(/^#\/?/, ""));
    var p = location.pathname;
    if (BASE !== "/" && p.indexOf(BASE) === 0) p = p.slice(BASE.length);
    return clean(p);
  }

  /** Absolute href for a route key, valid in both modes. */
  function hrefFor(path) {
    path = clean(path);
    if (FILE_MODE) return "#" + (path ? "/" + path : "");
    return BASE + path;
  }

  function resolve(path) {
    var r = ROUTES[path];
    if (r && r.alias !== undefined) return { key: r.alias, route: ROUTES[r.alias] };
    if (r) return { key: path, route: r };
    return { key: "404", route: ROUTES["404"] };
  }

  /* ------------------------------------------------------------ chrome UI */

  function navMarkup(isDrawer) {
    return NAV_ITEMS.map(function (item) {
      if (item.cta) {
        var cls = isDrawer ? "btn btn--navy" : "btn btn--navy";
        return '<a class="' + cls + '" href="#" data-link="how-to-buy">' + item.label + "</a>";
      }
      if (item.external) {
        return (
          '<a href="' + item.href + '" target="_blank" rel="noopener">' + item.label + "</a>"
        );
      }
      return (
        '<a href="' + hrefFor(item.path) + '" data-route data-nav="' + item.key + '">' +
        item.label +
        "</a>"
      );
    }).join("");
  }

  function markActive(key) {
    var all = document.querySelectorAll("[data-nav]");
    for (var i = 0; i < all.length; i++) {
      var on = all[i].getAttribute("data-nav") === key;
      all[i].classList.toggle("is-active", on);
      if (on) all[i].setAttribute("aria-current", "page");
      else all[i].removeAttribute("aria-current");
    }
  }

  function setMeta(route) {
    document.title = route.title || "The Mobility Project";
    var m = document.querySelector('meta[name="description"]');
    if (m && route.desc) m.setAttribute("content", route.desc);
  }

  /* ------------------------------------------------------- scroll reveals */

  var observer =
    "IntersectionObserver" in window
      ? new IntersectionObserver(
          function (entries) {
            entries.forEach(function (e) {
              if (!e.isIntersecting) return;
              e.target.classList.add("is-in");
              observer.unobserve(e.target);
            });
          },
          { rootMargin: "0px 0px -8% 0px", threshold: 0.08 }
        )
      : null;

  function bindReveals(root) {
    var nodes = root.querySelectorAll(".reveal");
    for (var i = 0; i < nodes.length; i++) {
      if (!observer) {
        nodes[i].classList.add("is-in");
        continue;
      }
      nodes[i].style.transitionDelay = Math.min(i % 4, 3) * 70 + "ms";
      observer.observe(nodes[i]);
    }
  }

  /* --------------------------------------------------------------- render */

  function render(replaceScroll) {
    var path = currentPath();
    var res = resolve(path);

    view.innerHTML = res.route.view();
    // restart the enter animation
    view.style.animation = "none";
    void view.offsetWidth;
    view.style.animation = "";

    setMeta(res.route);
    markActive(res.route.nav || null);
    bindReveals(view);
    bindGallery(view);
    applyPumpLinks(document);

    if (!replaceScroll) {
      window.scrollTo({ top: 0, behavior: "auto" });
      // Move focus into the new view so keyboard and screen-reader users are
      // not left at the bottom of the previous page.
      view.focus({ preventScroll: true });
    }
    onScroll();
  }

  function navigate(path, opts) {
    opts = opts || {};
    var target = hrefFor(path);
    if (FILE_MODE) {
      if (location.hash === target) return render();
      location.hash = target; // triggers hashchange -> render
      return;
    }
    if (location.pathname === target && !opts.force) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    history.pushState({ path: clean(path) }, "", target);
    render();
  }

  /* ----------------------------------------------------- global listeners */

  document.addEventListener("click", function (e) {
    var link = e.target.closest ? e.target.closest("a") : null;
    if (!link) return;

    // Route links
    if (link.hasAttribute("data-route")) {
      if (e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0) return;
      e.preventDefault();
      closeDrawer();
      var raw = link.getAttribute("href") || "";
      var path = FILE_MODE ? raw.replace(/^#\/?/, "") : raw.replace(BASE, "");
      navigate(path);
      return;
    }

    if (link.hasAttribute("data-link")) closeDrawer();
  });

  window.addEventListener("popstate", function () {
    render();
  });

  if (FILE_MODE) window.addEventListener("hashchange", function () { render(); });

  function onScroll() {
    header.classList.toggle("is-stuck", window.scrollY > 8);
  }
  window.addEventListener("scroll", onScroll, { passive: true });

  /* --------------------------------------------------------- mobile menu */

  function openDrawer() {
    drawer.classList.add("is-open");
    burger.classList.add("is-open");
    burger.setAttribute("aria-expanded", "true");
    document.body.classList.add("no-scroll");
    var links = drawer.querySelectorAll("a");
    for (var i = 0; i < links.length; i++) {
      links[i].style.transitionDelay = 60 + i * 45 + "ms";
    }
  }

  function closeDrawer() {
    if (!drawer.classList.contains("is-open")) return;
    drawer.classList.remove("is-open");
    burger.classList.remove("is-open");
    burger.setAttribute("aria-expanded", "false");
    document.body.classList.remove("no-scroll");
  }

  burger.addEventListener("click", function () {
    if (drawer.classList.contains("is-open")) closeDrawer();
    else openDrawer();
  });

  // Resizing past the desktop breakpoint hides the drawer via CSS — make sure
  // the body scroll lock goes with it.
  window.addEventListener("resize", function () {
    if (window.innerWidth > 900) closeDrawer();
  });

  document.addEventListener("keydown", function (e) {
    if (e.key !== "Escape") return;
    closeDrawer();
    closeLightbox();
  });

  /* ------------------------------------------------------------- lightbox */

  var lightbox = document.getElementById("lightbox");
  var lightboxImg = document.getElementById("lightboxImg");

  function bindGallery(root) {
    var buttons = root.querySelectorAll("[data-full]");
    for (var i = 0; i < buttons.length; i++) {
      buttons[i].addEventListener("click", function () {
        var inner = this.querySelector("img");
        // Reveal the dialog BEFORE assigning src: a browser will not start the
        // fetch for an <img> that is still inside a hidden subtree.
        lightbox.classList.add("is-open");
        lightboxImg.alt = inner ? inner.alt : "";
        lightboxImg.src = this.getAttribute("data-full");
        requestAnimationFrame(function () {
          lightbox.classList.add("is-visible");
        });
        document.body.classList.add("no-scroll");
      });
    }
  }

  function closeLightbox() {
    if (!lightbox.classList.contains("is-open")) return;
    lightbox.classList.remove("is-visible");
    document.body.classList.remove("no-scroll");
    setTimeout(function () {
      lightbox.classList.remove("is-open");
      lightboxImg.removeAttribute("src");
    }, 300);
  }

  lightbox.addEventListener("click", function (e) {
    if (e.target === lightbox || e.target.id === "lightboxClose") closeLightbox();
  });

  /* ---------------------------------------------------------- intro film */

  function initIntro() {
    var intro = document.getElementById("intro");
    var video = document.getElementById("introVideo");
    var skip = document.getElementById("introSkip");
    var progress = document.getElementById("introProgress");
    var seen = false;

    try {
      seen = sessionStorage.getItem("mp-intro-seen") === "1";
    } catch (err) {
      seen = false;
    }

    // Only the landing route opens with the film, and only once per session.
    if (seen || currentPath() !== "") {
      intro.parentNode.removeChild(intro);
      return;
    }

    document.body.classList.add("no-scroll");

    function end() {
      if (!intro.parentNode) return;
      try {
        sessionStorage.setItem("mp-intro-seen", "1");
      } catch (err) {
        /* private mode — fine */
      }
      intro.classList.add("is-hidden");
      document.body.classList.remove("no-scroll");
      video.pause();
      setTimeout(function () {
        if (intro.parentNode) intro.parentNode.removeChild(intro);
      }, 1000);
    }

    skip.addEventListener("click", end);
    video.addEventListener("ended", end);
    video.addEventListener("timeupdate", function () {
      if (!video.duration) return;
      progress.style.width = (video.currentTime / video.duration) * 100 + "%";
    });
    video.addEventListener("error", end);

    var play = video.play();
    if (play && play.catch) play.catch(function () { /* autoplay blocked */ });

    // Never let a stalled asset trap the visitor.
    setTimeout(function () {
      if (video.readyState === 0) end();
    }, 4000);
  }

  /* ------------------------------------------------------------ pump.fun */

  function applyPumpLinks(root) {
    if (typeof window.applyHowToBuyLinks === "function") {
      window.applyHowToBuyLinks(root);
    }
  }

  /* ----------------------------------------------------------------- boot */

  // Static chrome (brand, footer) writes route links as plain relative hrefs so
  // the markup stays readable. Normalise them once — before the nav is
  // generated, since navMarkup already emits final hrefs.
  var staticLinks = document.querySelectorAll("[data-route]");
  for (var s = 0; s < staticLinks.length; s++) {
    staticLinks[s].setAttribute("href", hrefFor(staticLinks[s].getAttribute("href")));
  }

  nav.innerHTML = navMarkup(false);
  drawer.innerHTML = navMarkup(true);

  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  render(true);
  initIntro();
  onScroll();
})();
