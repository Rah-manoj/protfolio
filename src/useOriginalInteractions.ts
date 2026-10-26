import { useEffect } from "react";

export function useOriginalInteractions() {
  useEffect(() => {
    const cleanups: Array<() => void> = [];
    const listen = (
      target: EventTarget,
      type: string,
      handler: EventListener,
      options?: AddEventListenerOptions,
    ) => {
      target.addEventListener(type, handler, options);
      cleanups.push(() => target.removeEventListener(type, handler, options));
    };

    const hero = document.querySelector(".hero");
    const heroArt = document.querySelector<HTMLElement>(".hero-art");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const finePointer = window.matchMedia("(pointer: fine)").matches;

    const avatarStage = document.querySelector<HTMLElement>(".avatar-stage");
    const avatarTilt = avatarStage?.querySelector<HTMLElement>(".avatar-tilt");
    if (hero && heroArt && !reducedMotion && finePointer) {
      let pointerFrame = 0;
      let pointerX = 0;
      let pointerY = 0;
      listen(
        hero,
        "pointermove",
        (event) => {
          if (!(event instanceof PointerEvent)) return;
          const bounds = hero.getBoundingClientRect();
          pointerX = ((event.clientX - bounds.left) / bounds.width - 0.5) * 9;
          pointerY = ((event.clientY - bounds.top) / bounds.height - 0.5) * 7;
          if (pointerFrame) return;
          pointerFrame = window.requestAnimationFrame(() => {
            heroArt.style.setProperty("--parallax-x", `${pointerX}px`);
            heroArt.style.setProperty("--parallax-y", `${pointerY}px`);
            if (avatarStage && avatarTilt) {
              avatarStage.classList.add("is-tilting");
              avatarTilt.style.setProperty("--spin-x", `${(-pointerY * 0.7).toFixed(2)}deg`);
              avatarTilt.style.setProperty("--spin-y", `${(pointerX * 1.5).toFixed(2)}deg`);
            }
            pointerFrame = 0;
          });
        },
        { passive: true },
      );
      listen(
        hero,
        "pointerleave",
        () => {
          heroArt.style.setProperty("--parallax-x", "0px");
          heroArt.style.setProperty("--parallax-y", "0px");
          avatarStage?.classList.remove("is-tilting");
          avatarTilt?.style.removeProperty("--spin-x");
          avatarTilt?.style.removeProperty("--spin-y");
        },
        { passive: true },
      );
      cleanups.push(() => {
        if (pointerFrame) window.cancelAnimationFrame(pointerFrame);
      });
    }

    const menuButton = document.querySelector<HTMLButtonElement>(".menu-toggle");
    const navLinks = document.querySelector<HTMLElement>(".nav-links");
    if (menuButton && navLinks) {
      const setMenu = (isOpen: boolean) => {
        navLinks.classList.toggle("open", isOpen);
        menuButton.setAttribute("aria-expanded", String(isOpen));
        document.body.classList.toggle("menu-open", isOpen);
      };
      listen(menuButton, "click", () => {
        setMenu(!navLinks.classList.contains("open"));
      });
      listen(window, "keydown", (event) => {
        if (event instanceof KeyboardEvent && event.key === "Escape") setMenu(false);
      });
      const desktopNav = window.matchMedia("(min-width: 981px)");
      const closeOnDesktop = () => {
        if (desktopNav.matches) setMenu(false);
      };
      desktopNav.addEventListener("change", closeOnDesktop);
      cleanups.push(() => {
        desktopNav.removeEventListener("change", closeOnDesktop);
        document.body.classList.remove("menu-open");
      });
      navLinks.querySelectorAll("a").forEach((link) => {
        listen(link, "click", (event) => {
          if (link.hasAttribute("data-resume-download")) {
            event.preventDefault();
            document.querySelector<HTMLAnchorElement>("#resume-download")?.click();
          }
          setMenu(false);
        });
      });

      const sectionLinks = navLinks.querySelectorAll('a[href^="#"]:not([data-resume-download])');
      const sections = document.querySelectorAll("main section[id]");
      if ("IntersectionObserver" in window) {
        const sectionObserver = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (!entry.isIntersecting) return;
              sectionLinks.forEach((link) => {
                const isCurrent = link.getAttribute("href") === `#${entry.target.id}`;
                link.classList.toggle("active", isCurrent);
                if (isCurrent) link.setAttribute("aria-current", "location");
                else link.removeAttribute("aria-current");
              });
            });
          },
          { rootMargin: "-35% 0px -55% 0px", threshold: 0 },
        );
        sections.forEach((section) => sectionObserver.observe(section));
        cleanups.push(() => sectionObserver.disconnect());
      }
    }

    const topbar = document.querySelector<HTMLElement>(".topbar");
    if (topbar) {
      topbar.style.removeProperty("--scroll-progress");
      let scrollFrame = 0;
      const updateTopbar = () => {
        topbar.classList.toggle("is-scrolled", window.scrollY > 8);
      };
      listen(
        window,
        "scroll",
        () => {
          if (scrollFrame) return;
          scrollFrame = window.requestAnimationFrame(() => {
            updateTopbar();
            scrollFrame = 0;
          });
        },
        { passive: true },
      );
      updateTopbar();
      cleanups.push(() => {
        if (scrollFrame) window.cancelAnimationFrame(scrollFrame);
      });
    }

    document.querySelectorAll<HTMLElement>(".project-clickable").forEach((project) => {
      const openProject = () => {
        const url = project.dataset.projectUrl?.trim();
        if (url) window.open(url, "_blank", "noopener,noreferrer");
      };
      listen(project, "click", openProject);
      listen(project, "keydown", (event) => {
        if (!(event instanceof KeyboardEvent)) return;
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          openProject();
        }
      });
    });

    const phoneLink = document.querySelector("[data-phone-placeholder]");
    if (phoneLink?.getAttribute("href") === "tel:YOUR_PHONE_NUMBER") {
      listen(phoneLink, "click", (event) => {
        event.preventDefault();
      });
    }

    if (!reducedMotion) {
      let scrollFrame = 0;
      const ease = (t: number) => (t < 0.5 ? 4 * t * t * t : 1 - ((-2 * t + 2) ** 3) / 2);
      const smoothScrollTo = (top: number) => {
        const start = window.scrollY;
        const change = top - start;
        const duration = Math.min(980, Math.max(520, Math.abs(change) * 0.55));
        const started = performance.now();
        if (scrollFrame) cancelAnimationFrame(scrollFrame);
        const step = (now: number) => {
          const progress = Math.min(1, (now - started) / duration);
          window.scrollTo(0, start + change * ease(progress));
          scrollFrame = progress < 1 ? requestAnimationFrame(step) : 0;
        };
        scrollFrame = requestAnimationFrame(step);
      };
      listen(document, "click", (event) => {
        if (!(event instanceof MouseEvent)) return;
        if (event.defaultPrevented || event.button !== 0) return;
        if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
        const link = (event.target as Element | null)?.closest("a[href^='#']");
        if (!(link instanceof HTMLAnchorElement)) return;
        if (link.hasAttribute("data-resume-download")) return;
        const hash = link.getAttribute("href");
        if (!hash || hash === "#") return;
        const target = document.querySelector(hash);
        if (!(target instanceof HTMLElement)) return;
        event.preventDefault();
        const top = Math.max(0, target.getBoundingClientRect().top + window.scrollY - 82);
        smoothScrollTo(top);
        history.pushState(null, "", hash);
      });
      cleanups.push(() => {
        if (scrollFrame) cancelAnimationFrame(scrollFrame);
      });
    }

    const revealItems = document.querySelectorAll(".reveal");
    const show = (item: Element) => item.classList.add("is-visible");
    if ("IntersectionObserver" in window && !reducedMotion) {
      const observer = new IntersectionObserver(
        (entries, currentObserver) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            show(entry.target);
            currentObserver.unobserve(entry.target);
          });
        },
        { rootMargin: "0px 0px -8% 0px", threshold: 0 },
      );
      revealItems.forEach((item) => {
        const bounds = item.getBoundingClientRect();
        if (bounds.top < window.innerHeight * 0.96) show(item);
        else observer.observe(item);
      });
      cleanups.push(() => observer.disconnect());
    } else {
      revealItems.forEach(show);
    }

    return () => {
      for (const cleanup of cleanups) cleanup();
    };
  }, []);
}
