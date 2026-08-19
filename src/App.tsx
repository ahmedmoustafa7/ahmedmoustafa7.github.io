"use client";

import { useEffect, useState } from "react";

const linkedinUrl = "https://www.linkedin.com/in/ahmed-moustafa-5022743b2/";

const projects = [
  {
    number: "01",
    status: "COURSEWORK LAB",
    accent: "cyan",
    title: "Linux Systems Administration",
    description:
      "Configured users, groups, permissions, backups, and core administration workflows inside a virtualized Linux environment.",
    tags: ["Linux", "VMware", "CLI", "Permissions"],
    detail:
      "Practiced the methodical workflow behind real support work: understand the system, isolate the issue, apply the smallest safe change, and verify the result.",
  },
  {
    number: "02",
    status: "LEARNING LAB",
    accent: "acid",
    title: "AWS Cloud Architecture",
    description:
      "Modeled resilient cloud environments using networking, compute, identity, storage, database, and scaling concepts.",
    tags: ["AWS", "EC2", "VPC", "IAM", "S3"],
    detail:
      "Studied how services such as load balancing, Auto Scaling, RDS, SQS, and Lambda fit together to create available and maintainable systems.",
  },
  {
    number: "03",
    status: "IN PROGRESS",
    accent: "violet",
    title: "Relational Database Design",
    description:
      "Building strong SQL fundamentals through tables, keys, relationships, queries, normalization, and data integrity.",
    tags: ["SQL", "Databases", "ERD", "Data Modeling"],
    detail:
      "The focus is not just writing queries, but understanding how thoughtful structure makes information accurate, useful, and easier to maintain.",
  },
  {
    number: "04",
    status: "ACADEMIC PROJECT",
    accent: "warm",
    title: "Edge AI Intrusion Detection",
    description:
      "Explored how edge AI can identify suspicious network behavior closer to the source and reduce response latency.",
    tags: ["Edge AI", "Cybersecurity", "Networking", "Research"],
    detail:
      "Researched the tradeoffs between local processing, centralized analysis, speed, privacy, and resource limits in modern network defense.",
  },
];

const skillGroups = [
  {
    label: "PROGRAMMING + DATA",
    icon: "{ }",
    skills: ["Python", "SQL", "Database Design", "HTML / CSS"],
  },
  {
    label: "SYSTEMS + SUPPORT",
    icon: ">_",
    skills: ["Technical Support", "Troubleshooting", "Linux", "VMware"],
  },
  {
    label: "CLOUD + NETWORKING",
    icon: "☁",
    skills: ["AWS Fundamentals", "Computer Networking", "IAM", "Virtualization"],
  },
  {
    label: "WORK STRENGTHS",
    icon: "↗",
    skills: ["Accuracy", "Fast-paced Operations", "Teamwork", "Time Management"],
  },
];

function ArrowUpRight() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M7 17 17 7M8 7h9v9" />
    </svg>
  );
}

function SectionLabel({ number, children }: { number: string; children: React.ReactNode }) {
  return (
    <div className="section-label">
      <span>{number}</span>
      <p>{children}</p>
    </div>
  );
}

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    setMounted(true);
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(max > 0 ? (window.scrollY / max) * 100 : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <main className={mounted ? "site is-ready" : "site"}>
      <div className="progress-track" aria-hidden="true">
        <div style={{ width: `${scrollProgress}%` }} />
      </div>
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />
      <div className="grid-overlay" />

      <header className="nav-shell">
        <a className="brand" href="#top" aria-label="Ahmed Moustafa, home">
          <span className="brand-mark">AM</span>
          <span className="brand-name">Ahmed Moustafa</span>
        </a>
        <nav className="main-nav" aria-label="Main navigation">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#journey">Journey</a>
        </nav>
        <a className="nav-cta" href={linkedinUrl} target="_blank" rel="noreferrer">
          LinkedIn <ArrowUpRight />
        </a>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <div className="eyebrow reveal reveal-one">
            <span className="status-dot" />
            Open to entry-level IT opportunities
          </div>
          <h1 className="reveal reveal-two">
            I build systems that work.
            <span>And I stay curious when they don&apos;t.</span>
          </h1>
          <p className="hero-lede reveal reveal-three">
            Programming-focused Information Technology &amp; Networking student
            combining technical training with the accuracy, pace, and discipline
            of real-world operations at Amazon.
          </p>
          <div className="hero-actions reveal reveal-four">
            <a className="primary-button" href="#projects">
              Explore my work <span aria-hidden="true">↓</span>
            </a>
            <a className="text-link" href={linkedinUrl} target="_blank" rel="noreferrer">
              Let&apos;s connect <ArrowUpRight />
            </a>
          </div>
          <div className="hero-meta reveal reveal-five">
            <div><span>BASED IN</span><strong>Newark, Delaware</strong></div>
            <div><span>FOCUS</span><strong>Programming + IT Support</strong></div>
            <div><span>EDUCATION</span><strong>Delaware Tech</strong></div>
          </div>
        </div>

        <div className="hero-visual reveal reveal-three" aria-label="Interactive developer profile card">
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />
          <div className="avatar-core">
            <div className="avatar-glow" />
            <span>AM</span>
            <small>IT / DEV</small>
          </div>
          <div className="float-card card-code">
            <span className="card-icon">&lt;/&gt;</span>
            <div><small>CURRENTLY LEARNING</small><strong>Python + SQL</strong></div>
          </div>
          <div className="float-card card-cloud">
            <span className="card-icon">☁</span>
            <div><small>CLOUD FOUNDATION</small><strong>AWS</strong></div>
          </div>
          <div className="terminal-card">
            <div className="terminal-top"><i /><i /><i /></div>
            <code><b>ahmed@portfolio</b>:~$ whoami</code>
            <code className="terminal-response">IT student. Problem solver. Builder.</code>
            <code><b>status</b>: ready_to_learn<span className="cursor">_</span></code>
          </div>
        </div>
      </section>

      <section className="skills-preview" aria-label="Core technologies">
        <span className="preview-label">CORE STACK</span>
        <div className="skill-ticker">
          {['Python', 'SQL', 'Linux', 'AWS', 'Networking', 'VMware', 'Technical Support'].map((skill) => (
            <span key={skill}>{skill}</span>
          ))}
        </div>
      </section>

      <section className="about-section page-section" id="about">
        <SectionLabel number="01">PROFILE</SectionLabel>
        <div className="about-grid">
          <h2>Built on curiosity.<br /><em>Proven under pressure.</em></h2>
          <div className="about-copy">
            <p className="about-lead">
              I&apos;m Ahmed—an IT &amp; Networking student turning classroom concepts into practical, repeatable skills.
            </p>
            <p>
              My programming concentration is sharpening how I think: break complex problems into smaller parts,
              test assumptions, and keep improving the solution. My experience in high-volume warehouse operations
              adds something equally valuable—dependability, attention to detail, and calm execution when the pace is high.
            </p>
            <p>
              I&apos;m looking for a team where I can contribute that work ethic while growing into an excellent technical professional.
            </p>
            <a className="inline-cta" href="#journey">See my journey <span>→</span></a>
          </div>
        </div>
        <div className="principles-grid">
          <article><span>01</span><h3>Learn fast</h3><p>Turn new concepts into usable knowledge through practice and repetition.</p></article>
          <article><span>02</span><h3>Troubleshoot clearly</h3><p>Observe, isolate, test, and verify instead of guessing at the answer.</p></article>
          <article><span>03</span><h3>Perform under pressure</h3><p>Stay accurate and dependable even when priorities and conditions change.</p></article>
        </div>
      </section>

      <section className="projects-section page-section" aria-labelledby="projects-heading">
        <SectionLabel number="02">SELECTED PROJECTS</SectionLabel>
        <div className="section-heading split-heading section-anchor" id="projects">
          <h2 id="projects-heading">Learning by<br /><em>building.</em></h2>
          <p>Academic projects and hands-on labs that show how I approach systems, data, cloud concepts, and technical problems.</p>
        </div>
        <div className="project-grid">
          {projects.map((project) => (
            <article className={`project-card accent-${project.accent}`} key={project.title}>
              <div className="project-top"><span>{project.number}</span><small>{project.status}</small></div>
              <div className="project-graphic" aria-hidden="true">
                <i /><i /><i />
                <b>{project.number}</b>
              </div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-tags">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
              <details>
                <summary>What I explored <span>+</span></summary>
                <p>{project.detail}</p>
              </details>
            </article>
          ))}
        </div>
      </section>

      <section className="skills-section page-section" id="skills">
        <SectionLabel number="03">CAPABILITIES</SectionLabel>
        <div className="section-heading split-heading">
          <h2>Technical range.<br /><em>Human reliability.</em></h2>
          <p>A growing technical toolkit supported by the habits that make it useful: accuracy, communication, persistence, and follow-through.</p>
        </div>
        <div className="skill-groups">
          {skillGroups.map((group, index) => (
            <article className="skill-group" key={group.label}>
              <div className="skill-group-top">
                <span className="skill-icon">{group.icon}</span>
                <small>0{index + 1}</small>
              </div>
              <h3>{group.label}</h3>
              <ul>{group.skills.map((skill) => <li key={skill}>{skill}<span /></li>)}</ul>
            </article>
          ))}
        </div>
      </section>

      <section className="journey-section page-section" id="journey">
        <SectionLabel number="04">EXPERIENCE + EDUCATION</SectionLabel>
        <div className="journey-grid">
          <div className="journey-intro">
            <h2>Building the bridge from <em>operations to technology.</em></h2>
            <p>Every step has strengthened a different part of how I work—from technical foundations to everyday consistency.</p>
          </div>
          <div className="timeline">
            <article className="timeline-item current">
              <div className="timeline-marker"><i /></div>
              <div className="timeline-date">CURRENT</div>
              <div><small>EDUCATION</small><h3>Information Technology &amp; Networking — Programming</h3><h4>Delaware Technical Community College</h4><p>Associate of Applied Science coursework in programming, databases, networking, operating systems, and cloud fundamentals.</p></div>
            </article>
            <article className="timeline-item">
              <div className="timeline-marker"><i /></div>
              <div className="timeline-date">APR 2026 — PRESENT</div>
              <div><small>EXPERIENCE</small><h3>Warehouse Associate</h3><h4>Amazon · Newark, Delaware</h4><p>Delivering accurate work in a fast-paced fulfillment environment while meeting productivity, quality, and safety standards.</p></div>
            </article>
            <article className="timeline-item">
              <div className="timeline-marker"><i /></div>
              <div className="timeline-date">NOV 2024 — FEB 2025</div>
              <div><small>EXPERIENCE</small><h3>Warehouse Associate</h3><h4>Abacus</h4><p>Supported daily fulfillment goals through dependable teamwork, accuracy, and safe warehouse operations.</p></div>
            </article>
          </div>
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div className="contact-glow" />
        <p className="contact-kicker"><span className="status-dot" /> AVAILABLE FOR THE RIGHT OPPORTUNITY</p>
        <h2>Let&apos;s build what&apos;s next.</h2>
        <p>I&apos;m currently exploring entry-level roles in IT support, technical operations, desktop support, data centers, and junior technology teams.</p>
        <a className="contact-button" href={linkedinUrl} target="_blank" rel="noreferrer">Connect on LinkedIn <ArrowUpRight /></a>
      </section>

      <footer>
        <a className="brand" href="#top"><span className="brand-mark">AM</span><span className="brand-name">Ahmed Moustafa</span></a>
        <p>IT &amp; Networking Student · Newark, Delaware</p>
        <a href="#top">Back to top ↑</a>
      </footer>
    </main>
  );
}
