import { useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import {
  ArrowDown,
  ArrowUpRight,
  BarChart3,
  Code2,
  Mail,
  Menu,
  Palette,
  Sparkles,
  X,
} from "lucide-react";

const photos = [
  {
    number: "01",
    label: "Professional Portrait",
    className: "photo-main",
   src: `${import.meta.env.BASE_URL}images/01-original-portrait.webp`
  },
  {
    number: "02",
    label: "Developer Workspace",
    className: "photo-small photo-two",
   src: `${import.meta.env.BASE_URL}images/portrait-developer-workspace.webp`
  },
  {
    number: "03",
    label: "Outdoor Portrait",
    className: "photo-small photo-three",
  src: `${import.meta.env.BASE_URL}images/portrait-outdoor.webp`
  },
  {
    number: "04",
    label: "Professional Presentation",
    className: "photo-small photo-four",
   src: `${import.meta.env.BASE_URL}images/portrait-presenting.webp`
  },
];

const navigation = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

const skills = [
  {
    number: "01",
    title: "Web Development",
    description:
      "Creating modern, responsive websites and practical web applications.",
    tags: ["HTML", "CSS", "JavaScript", "React", "TypeScript"],
    icon: Code2,
  },
  {
    number: "02",
    title: "Excel Automation",
    description:
      "Developing spreadsheets, advanced formulas, dashboards, and business solutions.",
    tags: ["Excel", "Formulas", "Dashboards", "Data Analysis"],
    icon: BarChart3,
  },
  {
    number: "03",
    title: "Graphic Design",
    description:
      "Designing engaging visual content and professional digital graphics.",
    tags: ["Social Media", "Branding", "Visual Design", "Canva"],
    icon: Palette,
  },
];

const services = [
  {
    number: "01",
    title: "Web Development",
    description:
      "Modern, responsive, and user-friendly websites and web applications built around your goals.",
    features: [
      "Responsive website development",
      "React applications",
      "Landing pages and portfolios",
      "Website improvements",
    ],
    icon: Code2,
    color: "blue",
  },
  {
    number: "02",
    title: "Excel Automation",
    description:
      "Smart spreadsheet solutions that organize information, simplify workflows, and support better decisions.",
    features: [
      "Advanced Excel formulas",
      "Interactive dashboards",
      "Data organization",
      "Business spreadsheets",
    ],
    icon: BarChart3,
    color: "emerald",
  },
  {
    number: "03",
    title: "Graphic Design",
    description:
      "Creative and professional visual designs that communicate your message and strengthen your brand.",
    features: [
      "Social media designs",
      "Marketing materials",
      "Branding and graphics",
      "Professional layouts",
    ],
    icon: Palette,
    color: "violet",
  },
];

const projectTags = {
  transfer: ["React", "TypeScript", "Tailwind CSS", "Supabase"],
  task: ["HTML", "CSS", "JavaScript", "GitHub Pages"],
};

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  const closeMobileMenu = () => setMobileMenuOpen(false);

  const motionSettings = shouldReduceMotion
    ? { duration: 0 }
    : { duration: 0.7 };

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#080b14] text-white">
      <div className="hero-glow" />

      {/* Navigation */}
      <header className="site-header relative z-30 mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-12">
        <a
          href="#home"
          onClick={closeMobileMenu}
          className="flex shrink-0 items-center gap-3"
          aria-label="Roohullah Aryan, home"
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-blue-400/30 bg-blue-500/10 text-blue-300">
            <Code2 size={21} />
          </span>
          <span className="text-lg font-bold tracking-tight">
            ROOHULLAH<span className="text-blue-400">.</span>
          </span>
        </a>

        <nav
          aria-label="Main navigation"
          className="hidden items-center gap-7 text-sm text-slate-400 md:flex lg:gap-9"
        >
          {navigation.map((item) => (
            <a key={item.href} className="nav-link" href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="hidden items-center gap-2 rounded-full border border-white/15 px-5 py-2.5 text-sm font-medium transition hover:border-blue-400 hover:bg-blue-400/10 sm:flex"
        >
          Let's talk <ArrowUpRight size={16} />
        </a>

        <button
          type="button"
          className="mobile-menu-button flex h-11 w-11 items-center justify-center rounded-xl border border-white/15 text-slate-200 transition hover:border-blue-400 hover:bg-blue-400/10 md:hidden"
          aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMobileMenuOpen((open) => !open)}
        >
          {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>

        {mobileMenuOpen && (
          <motion.nav
            id="mobile-navigation"
            aria-label="Mobile navigation"
            initial={shouldReduceMotion ? false : { opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={motionSettings}
            className="mobile-navigation absolute left-4 right-4 top-[calc(100%-4px)] rounded-2xl border border-white/10 bg-[#101827]/[0.98] p-3 shadow-2xl shadow-black/40 backdrop-blur-xl md:hidden"
          >
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={closeMobileMenu}
                className="mobile-nav-link block rounded-xl px-4 py-3 text-sm text-slate-300 transition hover:bg-blue-400/10 hover:text-blue-300"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={closeMobileMenu}
              className="mt-2 flex items-center justify-center gap-2 rounded-xl bg-blue-500 px-4 py-3 text-sm font-semibold text-white transition hover:bg-blue-400"
            >
              Let's talk <ArrowUpRight size={16} />
            </a>
          </motion.nav>
        )}
      </header>

      {/* Hero */}
      <section
        id="home"
        className="hero-section relative z-10 mx-auto grid min-h-[calc(100vh-80px)] max-w-7xl items-center gap-12 px-6 pb-20 pt-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:px-12"
      >
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.9, ease: "easeOut" }}
          className="relative z-10"
        >
          <div className="mb-7 inline-flex max-w-full items-center gap-2 rounded-full border border-blue-400/20 bg-blue-400/7 px-4 py-2 text-[11px] font-medium tracking-wide text-blue-300 sm:text-xs">
            <Sparkles size={14} />
            WELCOME TO MY DIGITAL WORLD
          </div>

          <p className="mb-4 text-lg text-slate-400">Hello, I'm</p>

          <h1 className="text-5xl font-bold leading-[1.08] tracking-tight sm:text-6xl xl:text-7xl">
            Roohullah
            <span className="block hero-gradient">Aryan.</span>
          </h1>

          <h2 className="mt-7 text-xl font-medium text-slate-200 sm:text-2xl">
            Full-Stack Web Developer
          </h2>

          <p className="mt-5 max-w-xl text-base leading-8 text-slate-400">
            I build modern digital experiences, develop practical web
            applications, and turn complex business needs into useful solutions
            through technology and creativity.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="group inline-flex items-center gap-3 rounded-full bg-blue-500 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-500/20 transition hover:-translate-y-1 hover:bg-blue-400"
            >
              Explore my work
              <ArrowUpRight
                size={17}
                className="transition group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-3 rounded-full border border-white/15 px-7 py-3.5 text-sm font-semibold text-slate-200 transition hover:-translate-y-1 hover:border-blue-400/60 hover:bg-white/4"
            >
              Contact me <Mail size={16} />
            </a>
          </div>

          <div className="mt-12 flex flex-wrap items-center gap-5">
            <a
              href="https://github.com/roohullaharyan716-design"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit my GitHub profile"
              className="social-icon"
            >
              <Code2 size={19} />
            </a>
            <span className="h-px w-12 bg-white/15" />
            <span className="text-[10px] tracking-wider text-slate-500 sm:text-xs">
              BUILDING IDEAS INTO REALITY
            </span>
          </div>
        </motion.div>

        {/* Photo composition */}
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.9, x: 35 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={shouldReduceMotion ? { duration: 0 } : { duration: 1, delay: 0.2, ease: "easeOut" }}
          className="photo-stage"
        >
          <div className="photo-orbit orbit-one" />
          <div className="photo-orbit orbit-two" />
          <div className="photo-center-glow" />

          {photos.map((photo, index) => (
            <motion.div
              key={photo.number}
              initial={shouldReduceMotion ? false : { opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={
                shouldReduceMotion
                  ? { duration: 0 }
                  : { delay: 0.5 + index * 0.12, duration: 0.6 }
              }
              className={`photo-card ${photo.className}`}
            >
              <img
                src={photo.src}
                alt={photo.label}
                className="photo-image"
                loading={index === 0 ? "eager" : "lazy"}
                decoding="async"
                fetchPriority={index === 0 ? "high" : "auto"}
              />
            </motion.div>
          ))}

          <motion.div
            animate={shouldReduceMotion ? undefined : { y: [0, -9, 0] }}
            transition={
              shouldReduceMotion
                ? undefined
                : { duration: 4, repeat: Infinity, ease: "easeInOut" }
            }
            className="floating-note"
          >
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-blue-400/15 text-blue-300">
              <Sparkles size={17} />
            </span>
            <span>
              <strong className="block text-sm text-white">Creative mind</strong>
              <span className="text-xs text-slate-400">Always building</span>
            </span>
          </motion.div>

          <div className="photo-caption">
            <span className="h-2 w-2 shrink-0 rounded-full bg-emerald-400" />
            AVAILABLE FOR CREATIVE PROJECTS
          </div>
        </motion.div>

        <a
          href="#about"
          className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-[10px] tracking-[0.25em] text-slate-500 transition hover:text-blue-300 lg:flex"
        >
          SCROLL TO EXPLORE
          <ArrowDown size={15} className="animate-bounce" />
        </a>
      </section>

      {/* About */}
      <section
        id="about"
        className="section-divider relative z-10 px-6 py-24 lg:px-12 lg:py-28"
      >
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-center lg:gap-14">
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={motionSettings}
          >
            <p className="section-eyebrow">GET TO KNOW ME</p>
            <h2 className="section-heading">
              Turning ideas into
              <span className="block hero-gradient">digital solutions.</span>
            </h2>
            <p className="mt-7 max-w-xl leading-8 text-slate-400">
              I'm Roohullah Aryan, a developer passionate about technology,
              creativity, and solving real-world problems. I enjoy building
              practical applications, designing useful digital experiences, and
              continuously improving my technical skills.
            </p>
            <p className="mt-5 max-w-xl leading-8 text-slate-400">
              My work brings together web development, Excel automation, and
              graphic design to create solutions that are both useful and
              visually engaging.
            </p>
            <a
              href="#projects"
              className="mt-8 inline-flex items-center gap-2 font-semibold text-blue-400 transition hover:gap-4"
            >
              Discover my work <ArrowUpRight size={18} />
            </a>
          </motion.div>

          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={motionSettings}
            className="grid grid-cols-1 gap-4 min-[420px]:grid-cols-2"
          >
            <div className="rounded-2xl border border-white/10 bg-white/3 p-6 sm:p-7">
              <Code2 className="mb-5 text-blue-400" size={27} />
              <h3 className="text-lg font-bold">Development</h3>
              <p className="mt-3 text-sm leading-6 text-slate-400">
                Building practical and responsive web applications.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/3 p-6 sm:mt-12 sm:p-7">
              <Sparkles className="mb-5 text-violet-400" size={27} />
              <h3 className="text-lg font-bold">Creativity</h3>
              <p className="mt-3 text-sm leading-6 text-slate-400">
                Combining design and technology to create better experiences.
              </p>
            </div>
            <div className="rounded-2xl border border-blue-400/20 p-6 transition hover:bg-blue-500/4 min-[420px]:col-span-2 sm:p-7">
              <p className="text-sm font-medium text-blue-300">MY APPROACH</p>
              <p className="mt-3 text-xl font-semibold leading-relaxed text-slate-200">
                Learn continuously. Build thoughtfully. Improve every detail.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills */}
      <section
        id="skills"
        className="section-divider relative z-10 px-6 py-24 lg:px-12 lg:py-28"
      >
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={motionSettings}
            className="mb-14 max-w-2xl"
          >
            <p className="section-eyebrow">WHAT I BRING TO THE TABLE</p>
            <h2 className="section-heading">
              Skills & <span className="hero-gradient">Expertise.</span>
            </h2>
            <p className="mt-5 leading-8 text-slate-400">
              A combination of technical knowledge, analytical thinking, and
              creative problem-solving.
            </p>
          </motion.div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {skills.map((skill, index) => {
              const Icon = skill.icon;

              return (
                <motion.article
                  key={skill.number}
                  initial={shouldReduceMotion ? false : { opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={
                    shouldReduceMotion
                      ? { duration: 0 }
                      : { duration: 0.6, delay: index * 0.12 }
                  }
                  whileHover={shouldReduceMotion ? undefined : { y: -8 }}
                  className="group rounded-2xl border border-white/10 bg-white/2.5 p-7 transition-colors hover:border-blue-400/40 hover:bg-blue-500/4"
                >
                  <div className="mb-8 flex items-center justify-between">
                    <Icon size={29} className="text-blue-400" />
                    <span className="text-sm tracking-widest text-slate-600">
                      {skill.number}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold">{skill.title}</h3>
                  <p className="mt-4 min-h-20 text-sm leading-7 text-slate-400">
                    {skill.description}
                  </p>
                  <div className="mt-7 flex flex-wrap gap-2">
                    {skill.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-white/10 bg-white/4 px-3 py-1.5 text-xs text-slate-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section
        id="projects"
        className="section-divider relative z-10 px-6 py-24 lg:px-12 lg:py-28"
      >
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={motionSettings}
            className="mb-16 flex flex-col justify-between gap-6 md:flex-row md:items-end"
          >
            <div>
              <p className="section-eyebrow">SELECTED WORK</p>
              <h2 className="section-heading">
                Projects & <span className="hero-gradient">Experiments.</span>
              </h2>
              <p className="mt-5 max-w-xl leading-8 text-slate-400">
                A selection of projects where I turn ideas into practical
                digital experiences through code, creativity, and
                problem-solving.
              </p>
            </div>
            <span className="text-sm tracking-wider text-slate-500">
              MY DEVELOPMENT JOURNEY / 01—03
            </span>
          </motion.div>

          <div className="grid gap-8 lg:grid-cols-2">
            {/* TransferPro */}
            <motion.article
              initial={shouldReduceMotion ? false : { opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={motionSettings}
              whileHover={shouldReduceMotion ? undefined : { y: -7 }}
              className="group overflow-hidden rounded-3xl border border-white/10 bg-[#0d1423] transition-colors hover:border-blue-400/40"
            >
              <div className="project-preview transfer-preview">
                <div className="dashboard-window">
                  <div className="dashboard-top">
                    <span className="flex items-center gap-2 text-sm font-bold">
                      <span className="h-2.5 w-2.5 rounded-full bg-blue-400" />
                      TransferPro
                    </span>
                    <span className="text-[10px] text-slate-500">DASHBOARD</span>
                  </div>
                  <div className="dashboard-welcome">
                    <span>Business overview</span>
                    <span className="text-xs text-slate-500">
                      Management system
                    </span>
                  </div>
                  <div className="dashboard-stats">
                    <div>
                      <span>Total Transfers</span>
                      <strong>Overview</strong>
                    </div>
                    <div>
                      <span>Payments</span>
                      <strong>Tracking</strong>
                    </div>
                    <div>
                      <span>Customers</span>
                      <strong>Records</strong>
                    </div>
                  </div>
                  <div className="dashboard-chart">
                    <span className="chart-title">Business activity</span>
                    <div className="chart-bars">
                      {[35, 57, 43, 78, 52, 91, 65, 75, 47, 84, 60, 95].map(
                        (height, index) => (
                          <span key={index} style={{ height: `${height}%` }} />
                        ),
                      )}
                    </div>
                  </div>
                  <div className="dashboard-bottom">
                    <span>Customers</span>
                    <span>Transactions</span>
                    <span>Reports</span>
                  </div>
                </div>
                <span className="preview-number">01 / BUSINESS SOFTWARE</span>
              </div>

              <div className="p-6 sm:p-8">
                <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
                  <span className="text-xs font-semibold tracking-[0.2em] text-blue-400">
                    FEATURED PROJECT
                  </span>
                  <span className="rounded-full border border-amber-400/20 bg-amber-400/5 px-3 py-1 text-[10px] text-amber-300">
                    IN DEVELOPMENT
                  </span>
                </div>
                <h3 className="text-2xl font-bold">TransferPro</h3>
                <p className="mt-4 leading-7 text-slate-400">
                  A money transfer management application designed to organize
                  customers, transactions, payments, business expenses, and
                  financial reporting in one place.
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {projectTags.transfer.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-slate-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="mt-8 flex flex-col items-start justify-between gap-3 border-t border-white/10 pt-5 sm:flex-row sm:items-center">
                  <span className="text-sm text-slate-500">
                    Business Management
                  </span>
                  <span className="flex items-center gap-2 text-sm font-semibold text-blue-400">
                    Personal Project <ArrowUpRight size={17} />
                  </span>
                </div>
                <p className="mt-3 text-xs leading-5 text-slate-500">
                  Preview illustration of a project currently being developed.
                </p>
              </div>
            </motion.article>

            {/* Task Manager */}
            <motion.article
              initial={shouldReduceMotion ? false : { opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={
                shouldReduceMotion
                  ? { duration: 0 }
                  : { duration: 0.7, delay: 0.15 }
              }
              whileHover={shouldReduceMotion ? undefined : { y: -7 }}
              className="group overflow-hidden rounded-3xl border border-white/10 bg-[#0d1423] transition-colors hover:border-violet-400/40"
            >
              <div className="project-preview task-preview">
                <div className="task-window">
                  <div className="task-top">
                    <span className="text-sm font-bold">
                      My Tasks<span className="text-violet-400">.</span>
                    </span>
                    <span className="rounded-full bg-violet-400/10 px-3 py-1 text-[10px] text-violet-300">
                      PRODUCTIVITY
                    </span>
                  </div>
                  <p className="mb-5 text-xs text-slate-400">
                    Stay organized. Get things done.
                  </p>
                  <div className="task-input">
                    Add a new task... <span>+</span>
                  </div>
                  <div className="task-row">
                    <span className="task-check">✓</span>
                    <span className="task-label">Plan the next project</span>
                    <span className="task-done">DONE</span>
                  </div>
                  <div className="task-row">
                    <span className="task-check">✓</span>
                    <span className="task-label">Improve daily workflow</span>
                    <span className="task-done">DONE</span>
                  </div>
                  <div className="task-row">
                    <span className="task-empty" />
                    <span className="task-label">Build something amazing</span>
                    <span className="task-pending">TODO</span>
                  </div>
                </div>
                <span className="preview-number">02 / WEB APPLICATION</span>
              </div>

              <div className="p-6 sm:p-8">
                <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
                  <span className="text-xs font-semibold tracking-[0.2em] text-violet-400">
                    LIVE PROJECT
                  </span>
                  <span className="rounded-full border border-emerald-400/20 bg-emerald-400/5 px-3 py-1 text-[10px] text-emerald-300">
                    PUBLISHED
                  </span>
                </div>
                <h3 className="text-2xl font-bold">Task Manager</h3>
                <p className="mt-4 leading-7 text-slate-400">
                  A simple productivity application that helps users organize
                  tasks, manage their workflow, and keep track of everyday work.
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {projectTags.task.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-slate-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="mt-8 flex flex-col items-start justify-between gap-3 border-t border-white/10 pt-5 sm:flex-row sm:items-center">
                  <span className="text-sm text-slate-500">
                    Web Development
                  </span>
                  <a
                    href="https://roohullaharyan716-design.github.io/Task-manager/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm font-semibold text-violet-400 transition hover:gap-3"
                  >
                    View live project <ArrowUpRight size={17} />
                  </a>
                </div>
              </div>
            </motion.article>
          </div>

          {/* Future work */}
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={motionSettings}
            className="mt-8 flex flex-col items-center justify-between gap-5 rounded-2xl border border-dashed border-white/15 bg-white/2 p-7 text-center sm:flex-row sm:p-8 sm:text-left"
          >
            <div>
              <p className="text-lg font-bold">More ideas are taking shape.</p>
              <p className="mt-2 text-sm text-slate-400">
                New projects and experiments will appear here as I build them.
              </p>
            </div>
            <span className="whitespace-nowrap text-sm font-semibold text-blue-400">
              MORE COMING SOON <ArrowUpRight className="ml-1 inline" size={16} />
            </span>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section
        id="services"
        className="section-divider relative z-10 px-6 py-24 lg:px-12 lg:py-28"
      >
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={motionSettings}
            className="mx-auto mb-16 max-w-2xl text-center"
          >
            <p className="section-eyebrow">HOW I CAN HELP</p>
            <h2 className="section-heading">
              Services I <span className="hero-gradient">Provide.</span>
            </h2>
            <p className="mt-5 leading-8 text-slate-400">
              Practical digital solutions designed to help individuals and
              businesses work smarter, look better, and grow.
            </p>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <motion.article
                  key={service.number}
                  initial={shouldReduceMotion ? false : { opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={
                    shouldReduceMotion
                      ? { duration: 0 }
                      : { duration: 0.6, delay: index * 0.12 }
                  }
                  whileHover={shouldReduceMotion ? undefined : { y: -9 }}
                  className={`service-card service-${service.color} group relative overflow-hidden rounded-3xl border border-white/10 bg-[#0d1423] p-7 transition-colors sm:p-8`}
                >
                  <div className="service-card-glow absolute -right-16 -top-16 h-40 w-40 rounded-full blur-3xl transition-all" />

                  <div className="relative flex items-center justify-between">
                    <div className="service-icon flex h-14 w-14 items-center justify-center rounded-2xl border">
                      <Icon size={26} />
                    </div>
                    <span className="text-sm tracking-widest text-slate-600">
                      {service.number}
                    </span>
                  </div>

                  <h3 className="relative mt-9 text-2xl font-bold">
                    {service.title}
                  </h3>

                  <p className="relative mt-4 min-h-24 text-sm leading-7 text-slate-400">
                    {service.description}
                  </p>

                  <div className="relative mt-7 border-t border-white/10 pt-6">
                    <p className="mb-5 text-xs font-semibold tracking-widest text-slate-500">
                      WHAT I OFFER
                    </p>
                    <ul className="space-y-4">
                      {service.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-start gap-3 text-sm text-slate-300"
                        >
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-400" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <a
                    href="#contact"
                    className="relative mt-9 flex items-center justify-between border-t border-white/10 pt-5 text-sm font-semibold text-blue-400"
                  >
                    Discuss a project
                    <ArrowUpRight
                      size={18}
                      className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                    />
                  </a>
                </motion.article>
              );
            })}
          </div>

          <div className="mt-12 text-center">
            <p className="text-sm text-slate-500">
              Have an idea or a project in mind?
            </p>
            <a
              href="#contact"
              className="mt-4 inline-flex items-center gap-2 rounded-full bg-blue-500 px-7 py-3.5 text-sm font-semibold text-white transition hover:-translate-y-1 hover:bg-blue-400"
            >
              Let's work together <ArrowUpRight size={17} />
            </a>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="contact-section relative overflow-hidden px-6 py-24 lg:py-28"
      >
        <div className="contact-glow" />

        <div className="relative mx-auto max-w-6xl">
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={motionSettings}
            className="mb-12 text-center"
          >
            <span className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">
              Get in touch
            </span>

            <h2 className="mt-5 text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
              Have an idea?
              <span className="mt-2 block hero-gradient">
                Let's build it together.
              </span>
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-400">
              I'm always interested in meaningful projects, creative
              collaborations, and opportunities to build useful digital
              solutions.
            </p>
          </motion.div>

          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={
              shouldReduceMotion
                ? { duration: 0 }
                : { duration: 0.7, delay: 0.15 }
            }
            className="mx-auto max-w-3xl rounded-3xl border border-white/10 bg-white/3 p-7 text-center shadow-2xl shadow-blue-950/20 sm:p-10 md:p-12"
          >
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-blue-400/20 bg-blue-500/10 text-blue-400">
              <Sparkles size={30} />
            </div>

            <h3 className="mt-6 text-2xl font-semibold text-white">
              Let's create something remarkable.
            </h3>

            <p className="mt-3 text-sm leading-7 text-slate-400">
              Explore my work, discover my projects, and connect with me on
              GitHub.
            </p>

            <a
              href="https://github.com/roohullaharyan716-design"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-3 rounded-full bg-blue-500 px-7 py-4 text-sm font-semibold text-white transition duration-300 hover:-translate-y-1 hover:bg-blue-400 hover:shadow-lg hover:shadow-blue-500/25"
            >
              Visit my GitHub
              <ArrowUpRight size={18} />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 px-6 py-8">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
          <p className="text-sm text-slate-400">
            © {new Date().getFullYear()}{" "}
            <span className="font-semibold text-white">Roohullah Aryan</span>.
            Built with purpose.
          </p>

          <a
            href="#home"
            className="text-sm text-slate-400 transition hover:text-blue-400"
          >
            Back to top ↑
          </a>
        </div>
      </footer>
    </main>
  );
}

export default App;
