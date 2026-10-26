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
      listen(menuButton, "click", () => {
        const isOpen = navLinks.classList.toggle("open");
        menuButton.setAttribute("aria-expanded", String(isOpen));
      });
      navLinks.querySelectorAll("a").forEach((link) => {
        listen(link, "click", (event) => {
          if (link.hasAttribute("data-resume-download")) {
            event.preventDefault();
            document.querySelector<HTMLAnchorElement>("#resume-download")?.click();
          }
          navLinks.classList.remove("open");
          menuButton.setAttribute("aria-expanded", "false");
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

    const topbar = document.querySelector(".topbar");
    if (topbar) {
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

    const revealItems = document.querySelectorAll(".reveal");
    if ("IntersectionObserver" in window && !reducedMotion) {
      const observer = new IntersectionObserver(
        (entries, currentObserver) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-visible");
              currentObserver.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.12 },
      );
      revealItems.forEach((item) => observer.observe(item));
      cleanups.push(() => observer.disconnect());
    } else {
      revealItems.forEach((item) => item.classList.add("is-visible"));
    }

    return () => {
      for (const cleanup of cleanups) cleanup();
    };
  }, []);
}
