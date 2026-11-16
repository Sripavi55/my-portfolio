import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowDown, ArrowUpRight, Github, Linkedin, Mail, Menu, X, Download,
  Code2, Database, Server, Layers3, ExternalLink, MapPin, Sparkles,
  Terminal, GitBranch, GraduationCap, Award, BriefcaseBusiness
} from "lucide-react";

const profile = {
  name: "Sri Pavithra P",
  role: "Full Stack Developer",
  email: "sripavithraselvam@gmail.com",
  linkedin: "https://www.linkedin.com/in/sri-pavithra-539719301",
  github: "https://github.com/Sripavi55",
  leetcode: "https://leetcode.com/u/sri_pavithra5/",
  college: "Karpagam College of Engineering",
  degree: "B.Tech — Information Technology",
  graduation: "2027",
};

const skills = [
  { title: "Frontend", icon: Layers3, items: ["React.js", "JavaScript", "HTML5", "CSS3", "Responsive UI"] },
  { title: "Backend", icon: Server, items: ["Java", "Spring Boot", "Python", "REST APIs"] },
  { title: "Database", icon: Database, items: ["MySQL", "PostgreSQL", "MongoDB", "SQL"] },
  { title: "Tools & Concepts", icon: Terminal, items: ["Git", "GitHub", "VS Code", "OOP", "DBMS"] },
];

const projects = [
  {
    number: "01",
    name: "ShopVerse",
    type: "Full Stack E-Commerce Platform",
    description: "A role-based e-commerce platform with Buyer, Seller and Admin experiences. The admin dashboard supports product and user management, order tracking, analytics and reporting.",
    tags: ["React", "JavaScript", "Context API", "LocalStorage", "Spring Boot"],
    link: "https://github.com/RITHIKAPALANISAMY/ecommerce-frontend",
    note: "Team project",
  },
  {
    number: "02",
    name: "AI-Driven SQL Log Analyzer",
    type: "Machine Learning · Security Analytics",
    description: "A SQL log monitoring and data-leak detection solution using Isolation Forest to identify unusual database activity, a risk-scoring engine, explainable alerts and a real-time monitoring dashboard.",
    tags: ["Python", "Pandas", "Scikit-learn", "Isolation Forest", "React", "SQL"],
    link: "https://github.com/Sripavi55",
    note: "Final-year project",
  },
];

const certifications = [
  "Wipro — Java Full Stack Certification",
  "Salesforce App Builder Certification",
  "SQL Intermediate — HackerEarth",
  "Front End Development — Great Learning",
  "MongoDB — ICT Academy",
  "RDBMS PostgreSQL — IIT Spoken Tutorial",
];

const reveal = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

function SectionHeading({ eyebrow, title, copy }) {
  return <motion.div variants={reveal} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.25 }} className="section-heading">
    <span className="eyebrow">{eyebrow}</span>
    <h2>{title}</h2>
    {copy && <p>{copy}</p>}
  </motion.div>;
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const nav = ["About", "Skills", "Projects", "Education", "Contact"];
  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell">
      <div className="ambient ambient-one" /><div className="ambient ambient-two" />
      <header className="header">
        <a className="brand" href="#home" onClick={closeMenu}><span className="brand-mark">SP</span><span>SRI PAVITHRA</span></a>
        <button className="menu-toggle" aria-label="Toggle navigation" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button>
        <nav className={menuOpen ? "nav nav-open" : "nav"}>
          {nav.map(item => <a key={item} href={`#${item.toLowerCase()}`} onClick={closeMenu}>{item}</a>)}
          <a className="nav-cta" href="/resume.pdf" target="_blank" rel="noreferrer">Resume <ArrowUpRight size={15}/></a>
        </nav>
      </header>

      <main>
        <section className="hero section-wrap" id="home">
          <motion.div className="hero-copy" initial="hidden" animate="show" variants={{ show: { transition: { staggerChildren: 0.12 } } }}>
            <motion.div variants={reveal} className="availability"><span className="pulse" /> OPEN TO INTERNSHIPS & ENTRY-LEVEL OPPORTUNITIES</motion.div>
            <motion.p variants={reveal} className="hero-kicker">HELLO, I'M</motion.p>
            <motion.h1 variants={reveal}>Sri Pavithra <span>P</span></motion.h1>
            <motion.h2 variants={reveal}>I build <span>thoughtful digital</span><br className="desktop-break"/> experiences.</motion.h2>
            <motion.p variants={reveal} className="hero-description">An aspiring Full Stack Developer and IT undergraduate passionate about building useful web applications, solving problems and turning ideas into clean, reliable products.</motion.p>
            <motion.div variants={reveal} className="hero-actions">
              <a className="button button-primary" href="#projects">Explore my work <ArrowUpRight size={17}/></a>
              <a className="button button-ghost" href="#contact">Let's connect <Mail size={16}/></a>
            </motion.div>
            <motion.div variants={reveal} className="social-row">
              <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub"><Github/></a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin/></a>
              <a href={profile.leetcode} target="_blank" rel="noreferrer" aria-label="LeetCode"><Code2/></a>
              <span className="social-divider"/>
              <span className="location"><MapPin size={14}/> Tamil Nadu, India</span>
            </motion.div>
          </motion.div>
          <motion.div className="hero-visual" initial={{ opacity: 0, scale: .92 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: .8, delay: .25 }}>
            <div className="photo-frame">
              <div className="photo-placeholder">
                <img src="/profile.jpg" alt="Sri Pavithra profile" onError={(e) => { e.currentTarget.style.display = "none"; e.currentTarget.nextSibling.style.display = "grid"; }} />
                <div className="photo-fallback">SP<span>ADD YOUR PHOTO</span></div>
              </div>
              <div className="photo-caption"><span>FULL STACK DEVELOPER</span><span>2027 · IT</span></div>
            </div>
            <div className="float-card float-top"><Sparkles size={16}/><span>Curious by nature</span></div>
            <div className="float-card float-bottom"><Code2 size={17}/><span>Build · Learn · Improve</span></div>
            <div className="orbit orbit-one"/><div className="orbit orbit-two"/>
          </motion.div>
          <a href="#about" className="scroll-cue"><ArrowDown size={15}/> SCROLL TO EXPLORE</a>
        </section>

        <section className="section-wrap about-section" id="about">
          <SectionHeading eyebrow="01 / ABOUT ME" title="A little about my journey." />
          <div className="about-grid">
            <motion.div variants={reveal} initial="hidden" whileInView="show" viewport={{ once: true }} className="about-main">
              <p className="large-copy">I enjoy creating <em>useful technology</em> that brings together intuitive interfaces, thoughtful backend logic and well-structured data.</p>
              <p>I am pursuing a B.Tech in Information Technology at Karpagam College of Engineering. I have worked with Java, Spring Boot, React, Python and SQL through coursework and hands-on projects. I enjoy learning by building, debugging and improving real applications.</p>
              <p>My current focus is strengthening my full-stack development skills and building software that is practical, maintainable and user-friendly.</p>
            </motion.div>
            <motion.div variants={reveal} initial="hidden" whileInView="show" viewport={{ once: true }} className="about-side">
              <div className="info-card"><span className="info-icon"><GraduationCap/></span><div><small>EDUCATION</small><strong>{profile.degree}</strong><span>{profile.college}</span></div></div>
              <div className="info-card"><span className="info-icon"><BriefcaseBusiness/></span><div><small>CAREER INTEREST</small><strong>Full Stack Development</strong><span>Frontend · Backend · Databases</span></div></div>
              <div className="info-card"><span className="info-icon"><GitBranch/></span><div><small>DEVELOPMENT APPROACH</small><strong>Learn by building</strong><span>Projects · Problem solving · Collaboration</span></div></div>
            </motion.div>
          </div>
        </section>

        <section className="section-wrap skills-section" id="skills">
          <SectionHeading eyebrow="02 / TOOLKIT" title="Technologies I work with." copy="A growing toolkit across frontend, backend and data."/>
          <div className="skills-grid">
            {skills.map((group, i) => <motion.article className="skill-card" key={group.title} variants={reveal} initial="hidden" whileInView="show" viewport={{ once: true }} transition={{ delay: i * .08 }}>
              <div className="skill-card-top"><span className="skill-icon"><group.icon size={20}/></span><span className="skill-index">0{i + 1}</span></div>
              <h3>{group.title}</h3><div className="tag-list">{group.items.map(item => <span className="tag" key={item}>{item}</span>)}</div>
            </motion.article>)}
          </div>
        </section>

        <section className="section-wrap projects-section" id="projects">
          <SectionHeading eyebrow="03 / SELECTED WORK" title="Projects with purpose." copy="A selection of work where I turn concepts into working solutions."/>
          <div className="project-list">
            {projects.map((project, i) => <motion.article className="project-card" key={project.number} variants={reveal} initial="hidden" whileInView="show" viewport={{ once: true }}>
              <div className="project-number">{project.number}</div>
              <div className="project-content">
                <div className="project-meta"><span>{project.type}</span><span className="project-note">{project.note}</span></div>
                <h3>{project.name}</h3><p>{project.description}</p>
                <div className="tag-list">{project.tags.map(tag => <span className="tag" key={tag}>{tag}</span>)}</div>
              </div>
              <a className="project-link" href={project.link} target="_blank" rel="noreferrer" aria-label={`View ${project.name}`}><ArrowUpRight/></a>
            </motion.article>)}
          </div>
        </section>

        <section className="section-wrap education-section" id="education">
          <SectionHeading eyebrow="04 / EDUCATION & CREDENTIALS" title="Learning is a constant."/>
          <div className="education-grid">
            <motion.div className="education-card" variants={reveal} initial="hidden" whileInView="show" viewport={{ once: true }}>
              <span className="timeline-dot"/><span className="eyebrow">2023 — 2027</span><h3>{profile.degree}</h3><p>{profile.college}</p><span className="education-status">UNDERGRADUATE</span>
            </motion.div>
            <motion.div className="cert-card" variants={reveal} initial="hidden" whileInView="show" viewport={{ once: true }}>
              <div className="cert-heading"><Award/><div><span className="eyebrow">CERTIFICATIONS</span><h3>Credentials & learning</h3></div></div>
              <ul>{certifications.map(cert => <li key={cert}><span className="cert-check">↗</span>{cert}</li>)}</ul>
            </motion.div>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="section-wrap contact-inner">
            <SectionHeading eyebrow="05 / CONTACT" title="Have an opportunity in mind?" copy="I'm interested in internships, entry-level roles and opportunities to collaborate. Let's start a conversation."/>
            <a className="contact-email" href={`mailto:${profile.email}`}>{profile.email}<ArrowUpRight/></a>
            <div className="contact-bottom">
              <div className="contact-links">
                <a href={profile.github} target="_blank" rel="noreferrer"><Github size={17}/> GitHub <ExternalLink size={13}/></a>
                <a href={profile.linkedin} target="_blank" rel="noreferrer"><Linkedin size={17}/> LinkedIn <ExternalLink size={13}/></a>
                <a href={profile.leetcode} target="_blank" rel="noreferrer"><Code2 size={17}/> LeetCode <ExternalLink size={13}/></a>
              </div>
              <a className="button button-primary" href="/resume.pdf" target="_blank" rel="noreferrer"><Download size={16}/> View resume</a>
            </div>
          </div>
        </section>
      </main>
      <footer className="footer"><a className="brand" href="#home"><span className="brand-mark">SP.</span><span>SRI PAVITHRA</span></a><span>Designed & built with curiosity. © {new Date().getFullYear()}</span><a href="#home">Back to top ↑</a></footer>
    </div>
  );
}

export default App;