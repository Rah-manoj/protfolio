import { useOriginalInteractions } from "./useOriginalInteractions";

export function App() {
  useOriginalInteractions();

  return (
    <>
      <header className="topbar">
        <nav className="nav wrap" aria-label="Main navigation">
          <a className="brand" href="#top" aria-label="Shanmugakumar M, home">
            <span>SHANMUGAKUMAR M</span>
          </a>
          <button className="menu-toggle" type="button" aria-expanded="false" aria-controls="nav-links">
            Menu
          </button>
          <div className="nav-links" id="nav-links">
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#experience">Experience</a>
            <a href="#projects">Projects</a>
            <a className="contact-link" href="#contact">
              Contact
            </a>
            <a className="nav-resume" href="#resume-download" data-resume-download>
              Download Resume <span aria-hidden="true">↓</span>
            </a>
          </div>
          <a className="header-cta" href="YOUR_SINGER_PORTFOLIO_URL" aria-label="Open my future singer portfolio">
            My Passion Portfolio <span aria-hidden="true">↗</span>
          </a>
        </nav>
      </header>
      <main id="top">
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-inner wrap">
            <div>
              <p className="eyebrow">Data Analyst</p>
              <h1 id="hero-title">
                Clarity in <span>Data.</span>
              </h1>
              <p className="hero-tagline">Confidence in Decisions.</p>
              <div className="hero-actions">
                <a className="button button-light" href="#projects">
                  Explore projects <span className="arrow" aria-hidden="true">↘</span>
                </a>
                <a
                  className="button button-outline"
                  id="resume-download"
                  href="assets/Shanmugakumar-M-Resume.pdf"
                  download="Shanmugakumar-M-Resume.pdf"
                >
                  Download resume <span className="arrow" aria-hidden="true">↓</span>
                </a>
              </div>
            </div>
            <div className="hero-aside">
              <p>Turning complex information into reliable insights and practical solutions.</p>
            </div>
          </div>
          <div className="hero-art">
            <svg viewBox="0 0 640 620" aria-hidden="true" focusable="false">
              <circle className="orbit" cx="320" cy="300" r="258" />
              <circle className="orbit-dash" cx="320" cy="300" r="222" />
              <circle className="orbit" cx="320" cy="300" r="170" />
              <path
                className="signal-soft"
                d="M68 365 C150 365 174 245 254 245 S356 356 437 356 505 254 572 254"
              />
              <path
                className="signal"
                pathLength="1"
                d="M80 410 C155 410 183 285 257 285 S366 378 438 378 504 275 560 275"
              />
              <circle className="node node-a" cx="80" cy="410" r="7" />
              <circle className="node node-b" cx="257" cy="285" r="7" />
              <circle className="node node-c" cx="438" cy="378" r="7" />
              <circle className="node node-d" cx="560" cy="275" r="7" />
              <circle cx="320" cy="300" r="115" fill="#fff" />
            </svg>
            <div className="avatar-placeholder avatar-image-wrap" role="img" aria-label="Shanmugakumar 3D avatar">
              <img className="avatar-photo" src="shanmugakumar-3d-avatar.png" alt="Shanmugakumar M 3D avatar" />
            </div>
          </div>
          <div className="hero-scroll">Scroll to explore</div>
        </section>

        <section id="about" className="wrap" aria-labelledby="about-title">
          <div className="section-head reveal">
            <div className="section-label">/ About me</div>
            <h2 id="about-title">
              Turning fragmented information into <em>clear direction.</em>
            </h2>
          </div>
          <div className="about-copy reveal">
            <p className="about-text">
              I work at the intersection of data quality, analytical thinking, and intelligent automation —
              transforming fragmented information into structured insights that support better decisions.
            </p>
            <div className="focus-list" aria-label="Areas of focus">
              <div className="focus-row">
                <span>Data Analysis</span>
                <span>↗</span>
              </div>
              <div className="focus-row">
                <span>Data Validation</span>
                <span>↗</span>
              </div>
              <div className="focus-row">
                <span>Dashboard Management</span>
                <span>↗</span>
              </div>
              <div className="focus-row">
                <span>Workflow Automation</span>
                <span>↗</span>
              </div>
            </div>
          </div>
          <div className="education reveal">
            <div className="education-item">
              <p className="meta-label">Education</p>
              <p>B.E. – Electronics and Communication Engineering (ECE)</p>
            </div>
            <div className="education-item">
              <p className="meta-label">Certification</p>
              <p>Python Programming Certification</p>
            </div>
          </div>
        </section>

        <section id="skills" className="skills-section" aria-labelledby="skills-title">
          <div className="wrap">
            <div className="section-head reveal">
              <div className="section-label">/ Skills</div>
              <h2 id="skills-title">
                Tools for thoughtful <em>analysis.</em>
              </h2>
            </div>
            <div className="skills-content reveal">
              <p className="skill-intro">
                A practical toolkit for organizing information, validating data, building clear analysis, and
                reducing repetitive work.
              </p>
              <div className="skills-grid" aria-label="Skills">
                <span className="skill">
                  <svg className="skill-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <rect x="3.5" y="3.5" width="17" height="17" rx="2" />
                    <path d="M9 3.5v17M15 3.5v17M3.5 9h17M3.5 15h17" />
                  </svg>
                  Excel
                </span>
                <span className="skill">
                  <svg className="skill-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <ellipse cx="12" cy="5.5" rx="8" ry="3" />
                    <path d="M4 5.5v13c0 1.7 3.6 3 8 3s8-1.3 8-3v-13M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3" />
                  </svg>
                  SQL
                </span>
                <span className="skill">
                  <svg className="skill-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <path d="M12 3.5H9.3a3.8 3.8 0 0 0-3.8 3.8v2.6h7.1v1.3H7.2a3.8 3.8 0 0 0-3.8 3.8v1.7a3.8 3.8 0 0 0 3.8 3.8h2.6v-2.7a3.8 3.8 0 0 1 3.8-3.8h2.7a3.8 3.8 0 0 0 3.8-3.8V7.3a3.8 3.8 0 0 0-3.8-3.8H12Z" />
                    <circle cx="9" cy="7.2" r=".65" fill="currentColor" stroke="none" />
                    <circle cx="15.5" cy="17" r=".65" fill="currentColor" stroke="none" />
                  </svg>
                  Python
                </span>
                <span className="skill">
                  <svg className="skill-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <path d="M4 20V11M10 20V6M16 20v-8M22 20H2" />
                    <path d="M4 8V4M10 3V2M16 9V5" />
                  </svg>
                  Power BI
                </span>
                <span className="skill">
                  <svg className="skill-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <path d="M5 7.5h6l3 4.5h5M5 16.5h6l3-4.5" />
                    <circle cx="4" cy="7.5" r="2" />
                    <circle cx="4" cy="16.5" r="2" />
                    <circle cx="20" cy="12" r="2" />
                  </svg>
                  n8n
                </span>
                <span className="skill">
                  <svg className="skill-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <path d="M12 3.5v2M12 18.5v2M3.5 12h2M18.5 12h2M6 6l1.4 1.4m9.2 9.2L18 18m0-12-1.4 1.4m-9.2 9.2L6 18" />
                    <circle cx="12" cy="12" r="6.2" />
                    <circle cx="12" cy="12" r="2.1" />
                  </svg>
                  Automation
                </span>
              </div>
            </div>
          </div>
        </section>

        <section id="experience" className="wrap" aria-labelledby="experience-title">
          <div className="section-head reveal">
            <div className="section-label">/ Experience</div>
            <h2 id="experience-title">
              Reliable workflows. <em>Useful insight.</em>
            </h2>
          </div>
          <article className="experience-card reveal">
            <div className="experience-top">
              <div>
                <h3>Senior Digital Content Analyst</h3>
                <p className="experience-company">
                  WARX Digital Private Limited <span aria-hidden="true">·</span> Erode, Tamil Nadu
                </p>
              </div>
              <span className="experience-duration">Jan 2024 – Present</span>
            </div>
            <ul className="experience-bullets">
              <li>Lead a team of 5 members in anti-piracy operations while maintaining productivity and quality targets.</li>
              <li>Support onboarding, mentoring, and operational guidance for team members.</li>
              <li>Coordinate escalation handling, reporting, and process-improvement activities.</li>
              <li>Ensure adherence to SLA requirements and operational compliance standards.</li>
            </ul>
            <div className="experience-top previous-role-top">
              <div>
                <h3>Digital Content Analyst</h3>
                <p className="experience-company">
                  WARX Digital Private Limited <span aria-hidden="true">·</span> Erode, Tamil Nadu
                </p>
              </div>
              <span className="experience-duration">Dec 2022 – Jan 2024</span>
            </div>
            <ul className="experience-bullets">
              <li>
                Monitored and investigated unauthorized digital content across online platforms to identify
                piracy-related activities and policy violations.
              </li>
              <li>
                Reviewed user-generated content, reports, and digital links while following operational guidelines
                and quality standards.
              </li>
              <li>
                Handled sensitive, time-critical investigations with attention to detail and established escalation
                procedures.
              </li>
              <li>Prepared operational dashboards and reports using Power BI and Excel to track trends and performance.</li>
              <li>Collaborated with teams to improve moderation workflows, reporting quality, and issue resolution.</li>
            </ul>
            <div className="focus-tags" aria-label="Key focus areas">
              <span className="focus-tag">Data Validation</span>
              <span className="focus-tag">Dashboard Management</span>
              <span className="focus-tag">Structured Reporting</span>
              <span className="focus-tag">Data Quality</span>
              <span className="focus-tag">Workflow Automation</span>
            </div>
          </article>
        </section>

        <section id="projects" className="projects-section" aria-labelledby="projects-title">
          <div className="wrap">
            <div className="section-head reveal">
              <div className="section-label">/ Projects</div>
              <h2 id="projects-title">
                Ideas made <em>operational.</em>
              </h2>
            </div>
            <div className="project-list">
              <article
                className="project reveal project-clickable"
                data-project-url=""
                tabIndex={0}
                role="link"
                aria-label="Add project URL for AI-Powered Data Cleaning & ETL Automation"
              >
                <div className="project-number">01</div>
                <div>
                  <h3>AI-Powered Data Cleaning & ETL Automation</h3>
                  <p>
                    Developing an n8n-based workflow to profile datasets, identify quality issues, validate cleaning
                    rules, transform records, and prepare structured outputs for analysis.
                  </p>
                  <span className="status">In development</span>
                  <p className="project-tools">n8n · Data quality · ETL automation</p>
                </div>
                <div className="project-visual" aria-hidden="true">
                  <svg viewBox="0 0 220 120">
                    <path className="diagram-flow" d="M56 60h36m36 0h36" />
                    <rect className="diagram-box" x="18" y="39" width="40" height="42" rx="11" />
                    <rect className="diagram-box" x="92" y="39" width="40" height="42" rx="11" />
                    <rect className="diagram-box" x="166" y="39" width="36" height="42" rx="11" />
                    <path className="diagram-glyph" d="M30 51h16M30 58h12M30 65h15" />
                    <path className="diagram-glyph" d="m103 60 6 6 12-13" />
                    <path className="diagram-glyph" d="M176 51h16M176 58h16M176 65h11" />
                  </svg>
                </div>
              </article>
              <article
                className="project reveal project-clickable"
                data-project-url=""
                tabIndex={0}
                role="link"
                aria-label="Add project URL for Sales Data Analysis & Power BI Dashboard"
              >
                <div className="project-number">02</div>
                <div>
                  <h3>Sales Data Analysis & Power BI Dashboard</h3>
                  <p>
                    A portfolio project focused on exploring sales trends, customer patterns, key performance
                    indicators, and business performance through data analysis and visualization.
                  </p>
                  <p className="project-tools">Data analysis · Power BI · Visualization</p>
                </div>
                <div className="project-visual" aria-hidden="true">
                  <svg viewBox="0 0 220 120">
                    <path className="diagram-axis" d="M25 94h170M32 90V25" />
                    <rect className="diagram-bar" x="50" y="65" width="22" height="29" rx="4" />
                    <rect className="diagram-bar" x="88" y="48" width="22" height="46" rx="4" />
                    <rect className="diagram-bar" x="126" y="56" width="22" height="38" rx="4" />
                    <rect className="diagram-bar" x="164" y="34" width="22" height="60" rx="4" />
                    <path className="diagram-trend" d="m45 57 42-16 38 8 49-25" />
                    <circle className="diagram-point" cx="45" cy="57" r="3" />
                    <circle className="diagram-point" cx="87" cy="41" r="3" />
                    <circle className="diagram-point" cx="125" cy="49" r="3" />
                    <circle className="diagram-point" cx="174" cy="24" r="3" />
                  </svg>
                </div>
              </article>
              <article
                className="project reveal project-clickable"
                data-project-url=""
                tabIndex={0}
                role="link"
                aria-label="Add project URL for Telegram Link Extraction & Verification Automation"
              >
                <div className="project-number">03</div>
                <div>
                  <h3>Telegram Link Extraction & Verification Automation</h3>
                  <p>
                    Developed Python-based Telegram utilities to retrieve message and media-post links, extract
                    relevant URLs, and organize results into text files for verification and reporting workflows.
                  </p>
                  <p className="project-tools">Python · Telethon · Telegram API · File handling</p>
                </div>
                <div className="project-visual" aria-hidden="true">
                  <svg viewBox="0 0 220 120">
                    <rect className="diagram-box" x="30" y="28" width="106" height="64" rx="14" />
                    <path className="diagram-glyph" d="M48 46h68M48 57h34M48 68h45" />
                    <path
                      className="diagram-link"
                      d="m151 47 8-8a12 12 0 0 1 17 17l-9 9m-2 9-8 8a12 12 0 0 1-17-17l9-9m7 16 16-16"
                    />
                    <circle className="diagram-dot" cx="185" cy="82" r="9" />
                    <path className="diagram-check" d="m181 82 3 3 5-6" />
                  </svg>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section id="contact" className="contact-section wrap" aria-labelledby="contact-title">
          <div className="section-head reveal">
            <div className="section-label">/ Contact</div>
            <h2 id="contact-title">
              Let’s make data <em>clear.</em>
            </h2>
          </div>
          <div className="contact-body reveal">
            <p className="contact-title">
              Open to a <em>conversation.</em>
            </p>
            <div className="contact-links">
              <a className="contact-link-row" href="mailto:shanmugakuamr1999@gmail.com">
                <span>
                  <svg className="contact-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <rect x="3" y="5" width="18" height="14" rx="2" />
                    <path d="m4 7 8 6 8-6" />
                  </svg>
                  Email
                </span>
                <span>shanmugakuamr1999@gmail.com</span>
              </a>
              <a className="contact-link-row phone-placeholder" href="tel:YOUR_PHONE_NUMBER" data-phone-placeholder>
                <span>
                  <span className="contact-icon-text">☎</span> Phone
                </span>
                <span>ADD YOUR CONTACT NUMBER</span>
              </a>
              <a
                className="contact-link-row"
                href="https://www.linkedin.com/in/shanmugakumar-m"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>
                  <svg className="contact-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <rect x="3.5" y="3.5" width="17" height="17" rx="3" />
                    <circle cx="8" cy="9" r="1" />
                    <path d="M8 11.5v5M12 16.5v-3a2 2 0 0 1 4 0v3M12 11.5v5" />
                  </svg>
                  LinkedIn
                </span>
                <span>Connect professionally ↗</span>
              </a>
              <a
                className="contact-link-row"
                href="https://github.com/Rah-manoj"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>
                  <svg className="contact-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <path d="m8 7-5 5 5 5M16 7l5 5-5 5M14 5l-4 14" />
                  </svg>
                  GitHub / Portfolio
                </span>
                <span>View profile ↗</span>
              </a>
            </div>
          </div>
        </section>
      </main>
      <footer>
        <div className="footer-inner wrap">
          <span className="footer-name">SHANMUGAKUMAR M</span>
          <span>DATA ANALYST · CLARITY IN DATA. CONFIDENCE IN DECISIONS.</span>
        </div>
      </footer>
    </>
  );
}
