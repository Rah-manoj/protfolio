import { useEffect, useRef, useState } from "react";
import { App } from "./App";
import { PassionPage } from "./PassionPage";
import "./passion.css";

type Page = "analyst" | "passion";
type Veil = "off" | "in" | "out";

function readPage(): Page {
  const path = window.location.pathname.replace(/\/+$/, "");
  return path.endsWith("/passion") ? "passion" : "analyst";
}

const LABEL: Record<Page, string> = {
  passion: "Rahmanoj",
  analyst: "Shanmugakumar M",
};

export function Site() {
  const [page, setPage] = useState<Page>(readPage);
  const [veil, setVeil] = useState<Veil>("off");
  const [label, setLabel] = useState(LABEL[readPage()]);
  const pageRef = useRef(page);
  const busy = useRef(false);
  const pending = useRef<Page | null>(null);

  useEffect(() => {
    pageRef.current = page;
    document.documentElement.dataset.page = page;
    document.title =
      page === "passion" ? "Rahmanoj — Singer, Artist, Dreamer" : "Shanmugakumar M — Data Analyst";
  }, [page]);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const go = (next: Page, fromHistory: boolean) => {
      if (next === pageRef.current) return;
      if (busy.current) {
        pending.current = next;
        return;
      }

      const apply = () => {
        pageRef.current = next;
        setPage(next);
        if (!fromHistory) {
          history.pushState({ page: next }, "", next === "passion" ? "/passion" : "/");
        }
        window.scrollTo(0, 0);
      };

      if (reduced) {
        apply();
        return;
      }

      busy.current = true;
      setLabel(LABEL[next]);
      setVeil("in");
      window.setTimeout(() => {
        apply();
        setVeil("out");
        window.setTimeout(() => {
          setVeil("off");
          busy.current = false;
          const queued = pending.current;
          pending.current = null;
          if (queued && queued !== pageRef.current) go(queued, true);
        }, 700);
      }, 640);
    };

    const onClick = (event: MouseEvent) => {
      if (event.defaultPrevented || event.button !== 0) return;
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      const link = (event.target as Element | null)?.closest("a[data-switch]");
      if (!(link instanceof HTMLAnchorElement)) return;
      event.preventDefault();
      go(link.dataset.switch === "passion" ? "passion" : "analyst", false);
    };

    const onPop = () => go(readPage(), true);

    document.addEventListener("click", onClick);
    window.addEventListener("popstate", onPop);
    return () => {
      document.removeEventListener("click", onClick);
      window.removeEventListener("popstate", onPop);
    };
  }, []);

  return (
    <>
      {page === "passion" ? <PassionPage /> : <App />}
      <div className={`switch-veil is-${veil}`} aria-hidden="true">
        <span className="switch-veil-line" />
        <p>{label}</p>
      </div>
    </>
  );
}
