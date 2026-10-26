import { useState } from "react";

const albums = [
  { title: "Ninaithale", time: "4:32", cover: "nina" },
  { title: "Thendral", time: "3:58", cover: "thendral" },
  { title: "Unnai Mattum", time: "4:21", cover: "unnai" },
  { title: "Vaanam", time: "5:12", cover: "vaanam" },
];

const chorus = [
  ["Kaathalum Kadandhu Pogum", "Chorus"],
  ["Thalapathy 66 (Title Track)", "Chorus"],
  ["Master (Vaathi Raid)", "Chorus"],
];

export function PassionPage() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <div className="passion">
      <header className="p-bar">
        <a className="p-logo" href="#home" onClick={close}>
          <span className="p-wave" aria-hidden="true">
            <i />
            <i />
            <i />
            <i />
          </span>
          <span>
            <strong>Rahmanoj</strong>
            <small>Singer · Artist · Dreamer</small>
          </span>
        </a>

        <button
          className="p-menu"
          type="button"
          aria-expanded={open}
          aria-controls="passion-nav"
          onClick={() => setOpen((value) => !value)}
        >
          Menu
        </button>

        <nav className={open ? "p-links open" : "p-links"} id="passion-nav" aria-label="Passion portfolio">
          <a href="#home" onClick={close}>
            Home
          </a>
          <a href="#about" onClick={close}>
            About
          </a>
          <a href="#music" onClick={close}>
            Music
          </a>
          <a href="#chorus" onClick={close}>
            Movie Chorus
          </a>
          <a href="#music" onClick={close}>
            Gallery
          </a>
          <a href="#contact" onClick={close}>
            Contact
          </a>
          <a className="p-back" href="/" data-switch="analyst" onClick={close}>
            Data Portfolio
          </a>
        </nav>

        <div className="p-tools">
          <a className="p-listen" href="#music">
            <Headphones /> Listen Now
          </a>
        </div>
      </header>

      <main>
        <section className="p-hero" id="home" aria-labelledby="passion-title">
          <div className="p-hero-photo" role="img" aria-label="Rahmanoj singing on stage" />
          <p className="p-note">
            Same voice…
            <br />
            Different stories…
          </p>
          <div className="p-scroll" aria-hidden="true">
            <span>Scroll</span>
            <i />
          </div>

          <div className="p-hero-copy">
            <p className="p-kicker">
              Music is not just a sound
              <br />
              It’s a part of me
            </p>
            <h1 id="passion-title">
              <span>Hi, I’m</span>
              <em>Rahmanoj</em>
            </h1>
            <p className="p-lead">
              A passionate singer with a journey of melodies — from recorded albums to movie choruses, and as the
              main singer of a sing-along troop. Now, I’m also serving as a Secretary, but music will always be my
              first love.
            </p>
            <dl className="p-stats">
              <div>
                <dt>4+</dt>
                <dd>
                  Album Songs
                </dd>
              </div>
              <div>
                <dt>Movie</dt>
                <dd>Chorus</dd>
              </div>
              <div>
                <dt>1</dt>
                <dd>
                  Sing-Along Troop
                  <br />
                  (Main Singer)
                </dd>
              </div>
            </dl>
            <div className="p-actions">
              <a className="p-gold" href="#music">
                <PlayIcon /> Listen to My Songs
              </a>
              <a className="p-ghost" href="#about">
                Explore My Journey <span aria-hidden="true">↓</span>
              </a>
            </div>
          </div>
        </section>

        <section className="p-board">
          <div className="p-albums" id="music">
            <div className="p-board-head">
              <h2>
                <MusicIcon /> My Albums
              </h2>
              <a href="#music">
                View All <span aria-hidden="true">→</span>
              </a>
            </div>
            <div className="p-album-row">
              {albums.map((album) => (
                <article className="p-album" key={album.title}>
                  <div className={`p-cover is-${album.cover}`}>
                    <span className="p-play" aria-hidden="true">
                      <PlayIcon />
                    </span>
                    <span className="p-time">{album.time}</span>
                    {album.cover === "thendral" ? <b>Thendral</b> : null}
                    {album.cover === "unnai" ? <b>Unnai Mattum</b> : null}
                  </div>
                  <h3>{album.title}</h3>
                  <p>Album Song</p>
                </article>
              ))}
            </div>
            <div className="p-dots" aria-hidden="true">
              <i />
              <i />
              <i />
              <i className="is-on" />
            </div>
          </div>

          <div className="p-chorus" id="chorus">
            <div className="p-board-head">
              <h2>
                <FilmIcon /> Movie Chorus
              </h2>
              <a href="#chorus">
                View All <span aria-hidden="true">→</span>
              </a>
            </div>
            <article className="p-chorus-card">
              <div className="p-mic" aria-hidden="true" />
              <h3>
                Movie Chorus
                <small>Selected Works</small>
              </h3>
              <ul>
                {chorus.map(([title, role]) => (
                  <li key={title}>
                    <span className="p-play" aria-hidden="true">
                      <PlayIcon />
                    </span>
                    <span>
                      <strong>{title}</strong>
                      {role}
                    </span>
                  </li>
                ))}
              </ul>
            </article>
          </div>

          <aside className="p-about" id="about">
            <h2>
              <PersonIcon /> About Me
            </h2>
            <p>
              Music has always been my escape, my energy and my expression. From recorded albums to movie choruses,
              from leading a sing-along troop to now working as a Secretary — my journey has been a mix of passion,
              responsibility and dreams.
            </p>
            <ul>
              <li>
                <MusicIcon /> Singer
              </li>
              <li>
                <PeopleIcon /> Sing-Along Troop (Main Singer)
              </li>
              <li>
                <CaseIcon /> Secretary
              </li>
            </ul>
            <p className="p-sign">Rahmanoj</p>
          </aside>
        </section>
      </main>

      <footer className="p-foot" id="contact">
        <p>
          <span className="p-wave" aria-hidden="true">
            <i />
            <i />
            <i />
            <i />
          </span>
          “Music connects people, and that’s the most beautiful thing about it.”
        </p>
        <div className="p-follow">
          <span>Follow Me</span>
          <a href="#contact" aria-label="YouTube">
            <YtIcon />
          </a>
          <a href="#contact" aria-label="Instagram">
            <IgIcon />
          </a>
          <a href="#contact" aria-label="Spotify">
            <SpotIcon />
          </a>
        </div>
      </footer>
    </div>
  );
}

function PlayIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M8 5.5v13l11-6.5-11-6.5Z" />
    </svg>
  );
}

function Headphones() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M4 13a8 8 0 0 1 16 0" />
      <rect x="3" y="13" width="4" height="7" rx="1.5" />
      <rect x="17" y="13" width="4" height="7" rx="1.5" />
    </svg>
  );
}

function MusicIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M9 18a3 3 0 1 1-2-2.83V6l10-2v9" />
      <circle cx="7" cy="18" r="2.2" />
      <circle cx="17" cy="15" r="2.2" />
    </svg>
  );
}

function FilmIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M7 5v14M17 5v14M3 9h4M3 15h4M17 9h4M17 15h4" />
    </svg>
  );
}

function PersonIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="8" r="3" />
      <path d="M5.5 19a6.5 6.5 0 0 1 13 0" />
    </svg>
  );
}

function PeopleIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="9" cy="9" r="2.4" />
      <circle cx="16" cy="10" r="2" />
      <path d="M4.5 18a4.5 4.5 0 0 1 9 0M13 18a4 4 0 0 1 6.5-3" />
    </svg>
  );
}

function CaseIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="3" y="7" width="18" height="12" rx="2" />
      <path d="M9 7V5h6v2M3 12h18" />
    </svg>
  );
}

function YtIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M4 8.5a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v7a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3v-7Z" />
      <path d="m11 10 4 2-4 2v-4Z" />
    </svg>
  );
}

function IgIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="4" y="4" width="16" height="16" rx="4" />
      <circle cx="12" cy="12" r="3.2" />
      <circle cx="17" cy="7" r="0.8" />
    </svg>
  );
}

function SpotIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="8" />
      <path d="M8 10.2c2.4-1 5.6-.8 8 .6M8.4 13c1.8-.7 4.2-.5 6 .5M8.8 15.6c1.3-.4 3-.3 4.2.4" />
    </svg>
  );
}
