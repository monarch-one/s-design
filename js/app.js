/**
 * s.design — Vanesa Salcedo CV
 * Edit CONTENT + I18N to personalize.
 */

const CONTENT = {
  name: "Vanesa Salcedo",
  nameLines: ["Vanesa", "Salcedo"],
  /**
   * Email ofuscado (base64). No texto plano en el repo.
   * u = btoa(local) · d = btoa(domain)
   * salcedovanesa@gmail.com
   */
  emailParts: {
    u: "c2FsY2Vkb3ZhbmVzYQ==",
    d: "Z21haWwuY29t",
  },
  /** Instagram handle sin @ — vacío = oculto */
  instagram: "valesalcedoo_",
  /**
   * LinkedIn (perfil algo desactualizado; se muestra como secundario).
   * Upwork: canal principal de freelance — pegá la URL pública del perfil.
   */
  linkedinUrl: "https://www.linkedin.com/in/vanesa-salcedo-6889a637",
  upworkUrl: "",
  location: {
    es: "Mendoza, AR",
    en: "Mendoza, AR",
  },
  meta: {
    es: { loc: "Mendoza, AR", tz: "UTC−3", stack: "brand · type · remote" },
    en: { loc: "Mendoza, AR", tz: "UTC−3", stack: "brand · type · remote" },
  },
  roles: {
    es: [
      "Senior Graphic Designer",
      "Freelance · Upwork",
      "Brand · type · digital",
    ],
    en: [
      "Senior Graphic Designer",
      "Freelance · Upwork",
      "Brand · type · digital",
    ],
  },
  experience: {
    es: [
      {
        hash: "upwk",
        role: "Senior Graphic Designer",
        company: "Upwork",
        period: "perfil activo",
        desc: "Perfil freelance de alto rendimiento: encargos remotos de branding, identidad y diseño digital para clientes internacionales. Track record sólido de Job Success y proyectos de largo aliento.",
      },
      {
        hash: "ese",
        role: "Freelance Senior Graphic Designer",
        company: "ESE Graphic Design",
        period: "nov 2009 — presente",
        desc: "Estudio propio desde Mendoza. Identidad, branding, print y digital para agencias, desarrolladores y estudios de todo el mundo.",
      },
      {
        hash: "fbvl",
        role: "Freelance Graphic Designer",
        company: "Fabvla snc",
        period: "jun 2011 — presente",
        desc: "Colaboración continua con estudio web/móvil (Treviso, Italia): UI, marca y piezas para productos digitales e interactivos.",
      },
      {
        hash: "fr06",
        role: "Diseñadora gráfica freelance",
        company: "independiente",
        period: "desde 2006",
        desc: "Diseño para web developers, agencias y estudios internacionales. Trayectoria sostenida en identidad y comunicación visual.",
      },
    ],
    en: [
      {
        hash: "upwk",
        role: "Senior Graphic Designer",
        company: "Upwork",
        period: "active profile",
        desc: "High-performing freelance profile: remote branding, identity, and digital design for international clients. Strong Job Success track record and long-term engagements.",
      },
      {
        hash: "ese",
        role: "Freelance Senior Graphic Designer",
        company: "ESE Graphic Design",
        period: "Nov 2009 — present",
        desc: "Own studio based in Mendoza. Identity, branding, print, and digital for agencies, developers, and studios worldwide.",
      },
      {
        hash: "fbvl",
        role: "Freelance Graphic Designer",
        company: "Fabvla snc",
        period: "Jun 2011 — present",
        desc: "Ongoing collaboration with a web/mobile studio (Treviso, Italy): UI, brand, and pieces for digital and interactive products.",
      },
      {
        hash: "fr06",
        role: "Freelance graphic designer",
        company: "independent",
        period: "since 2006",
        desc: "Design for web developers, agencies, and international studios. Sustained practice in identity and visual communication.",
      },
    ],
  },
  education: {
    es: [
      {
        hash: "form",
        role: "Formación en diseño",
        company: "— completar —",
        period: "—",
        desc: "Agregar título, institución y año (LinkedIn desactualizado no lo lista con claridad).",
      },
    ],
    en: [
      {
        hash: "form",
        role: "Design education",
        company: "— to complete —",
        period: "—",
        desc: "Add degree, school, and year (LinkedIn is outdated and unclear here).",
      },
    ],
  },
  skills: {
    es: [
      {
        title: "identidad",
        items: ["Branding", "Logotipos", "Sistemas visuales", "Guidelines"],
      },
      {
        title: "tipografía",
        items: ["Jerarquía", "Pairing", "Editorial", "Aplicada"],
      },
      {
        title: "medios",
        items: ["Print", "Digital", "Web UI", "Packaging"],
      },
      {
        title: "herramientas",
        items: ["Illustrator", "Photoshop", "InDesign", "Figma"],
      },
      {
        title: "remoto",
        items: ["Upwork top track", "Agencias", "Estudios", "Dev teams"],
      },
      {
        title: "idiomas",
        items: ["Español nativo", "Inglés profesional"],
      },
    ],
    en: [
      {
        title: "identity",
        items: ["Branding", "Logotypes", "Visual systems", "Guidelines"],
      },
      {
        title: "typography",
        items: ["Hierarchy", "Pairing", "Editorial", "Applied"],
      },
      {
        title: "media",
        items: ["Print", "Digital", "Web UI", "Packaging"],
      },
      {
        title: "tools",
        items: ["Illustrator", "Photoshop", "InDesign", "Figma"],
      },
      {
        title: "remote",
        items: ["Upwork top track", "Agencies", "Studios", "Dev teams"],
      },
      {
        title: "languages",
        items: ["Spanish native", "Professional English"],
      },
    ],
  },
  /**
   * Selección de trabajo (portfolio editorial).
   * href opcional; sin href = solo ficha.
   * Fuentes: blog ESE + categorías de práctica (LinkedIn desactualizado).
   */
  work: [
    {
      id: "upwork",
      title: { es: "Upwork", en: "Upwork" },
      desc: {
        es: "Perfil freelance de alto rendimiento. Branding, identidad y diseño digital para clientes globales — el canal donde se ve el track record actual.",
        en: "High-performing freelance profile. Branding, identity, and digital design for global clients — the channel that shows the current track record.",
      },
      tags: ["Remote", "Brand", "Digital"],
      href: null, // se rellena con CONTENT.upworkUrl si existe
    },
    {
      id: "scuba100",
      title: { es: "Scuba100", en: "Scuba100" },
      desc: {
        es: "Marca, diales de reloj y web para Italian Soul (Italia). Con Fabio Ligresti y Alessandro Zanatta.",
        en: "Brand, watch dials, and web for Italian Soul (Italy). With Fabio Ligresti and Alessandro Zanatta.",
      },
      tags: ["Brand", "Product", "Web"],
      href: "https://salcedovanesa.blogspot.com/search/label/Watches",
    },
    {
      id: "vinilozz",
      title: { es: "VinilOzz", en: "VinilOzz" },
      desc: {
        es: "Identidad de marca para VinilOzz.com — Argentina.",
        en: "Brand identity for VinilOzz.com — Argentina.",
      },
      tags: ["Brand", "Identity"],
      href: "https://salcedovanesa.blogspot.com/2012/07/vinilozzcom.html",
    },
    {
      id: "expo",
      title: { es: "Expo Salones & Catering", en: "Expo Salones & Catering" },
      desc: {
        es: "Piezas print y web para la expo — Argentina.",
        en: "Print and web pieces for the expo — Argentina.",
      },
      tags: ["Print", "Web"],
      href: "https://salcedovanesa.blogspot.com/search/label/Printing",
    },
  ],
};

const I18N = {
  es: {
    status: "disponible para encargos",
    "nav.about": "about",
    "nav.experience": "experience",
    "nav.education": "education",
    "nav.skills": "skills",
    "nav.work": "work",
    "nav.contact": "contact",
    "hero.eyebrow": "curriculum · diseño",
    "hero.lead":
      "Senior graphic designer freelance desde 2006. Identidad, branding y diseño digital para agencias, estudios y equipos de producto en todo el mundo — con un perfil Upwork de alto rendimiento.",
    "hero.cta": "iniciar conversación",
    "hero.ctaSecondary": "ver selección",
    "about.label": "about",
    "about.title": "perfil",
    "about.p1":
      "Soy Vanesa. Diseñadora gráfica argentina (Mendoza). Desde 2006 trabajo para web developers, agencias y estudios de diseño en el mundo: marca, tipografía aplicada y piezas digitales.",
    "about.p2":
      "Dirijo ESE Graphic Design y colaboro con Fabvla (Italia). El track record vivo está en Upwork — LinkedIn quedó atrás. Prefiero menos, mejor: jerarquía clara y rigor formal.",
    "experience.label": "experience",
    "experience.title": "trayectoria",
    "education.label": "education",
    "education.title": "formación",
    "skills.label": "skills",
    "skills.title": "oficio & herramientas",
    "work.label": "work",
    "work.title": "selección",
    "contact.label": "contact",
    "contact.title": "hablemos",
    "contact.lead":
      "Abierta a encargos de identidad, branding y diseño digital. Preferí Upwork o mail.",
    "contact.copy": "copiar email",
    "contact.copied": "copiado ✓",
    "contact.hintBefore": "tip: pulsá",
    "contact.hintAfter": "para copiar el email",
    "contact.viaInstagram": "Instagram →",
    "contact.viaUpwork": "Upwork →",
    "contact.viaLinkedin": "LinkedIn →",
    "footer.built": "set with care · no frameworks",
    "project.link": "ver proyecto →",
    "project.badge.selected": "selected",
    "project.badge.live": "live",
  },
  en: {
    status: "open for commissions",
    "nav.about": "about",
    "nav.experience": "experience",
    "nav.education": "education",
    "nav.skills": "skills",
    "nav.work": "work",
    "nav.contact": "contact",
    "hero.eyebrow": "curriculum · design",
    "hero.lead":
      "Senior freelance graphic designer since 2006. Identity, branding, and digital design for agencies, studios, and product teams worldwide — with a high-performing Upwork profile.",
    "hero.cta": "start a conversation",
    "hero.ctaSecondary": "see selection",
    "about.label": "about",
    "about.title": "profile",
    "about.p1":
      "I'm Vanesa. Argentinian graphic designer (Mendoza). Since 2006 I've worked for web developers, agencies, and design studios worldwide: brand, applied type, and digital pieces.",
    "about.p2":
      "I run ESE Graphic Design and collaborate with Fabvla (Italy). The live track record is on Upwork — LinkedIn fell behind. I prefer fewer, better: clear hierarchy and formal rigor.",
    "experience.label": "experience",
    "experience.title": "trajectory",
    "education.label": "education",
    "education.title": "education",
    "skills.label": "skills",
    "skills.title": "craft & tools",
    "work.label": "work",
    "work.title": "selection",
    "contact.label": "contact",
    "contact.title": "let's talk",
    "contact.lead":
      "Open to identity, branding, and digital design commissions. Prefer Upwork or email.",
    "contact.copy": "copy email",
    "contact.copied": "copied ✓",
    "contact.hintBefore": "tip: press",
    "contact.hintAfter": "to copy email",
    "contact.viaInstagram": "Instagram →",
    "contact.viaUpwork": "Upwork →",
    "contact.viaLinkedin": "LinkedIn →",
    "footer.built": "set with care · no frameworks",
    "project.link": "view project →",
    "project.badge.selected": "selected",
    "project.badge.live": "live",
  },
};

const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
let lang = localStorage.getItem("sd-lang") || (navigator.language?.startsWith("en") ? "en" : "es");
let typewriterTimer = null;
let typewriterIndex = 0;
let typewriterChar = 0;
let typewriterDeleting = false;

function t(key) {
  return I18N[lang][key] ?? I18N.en[key] ?? key;
}

function applyI18n() {
  document.documentElement.lang = lang;

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    if (el.classList.contains("btn__feedback") && el.closest("#copy-email")) {
      const value = t("contact.copied");
      if (value) el.textContent = value;
      return;
    }
    const key = el.getAttribute("data-i18n");
    const value = t(key);
    if (value) el.textContent = value;
  });

  document.querySelectorAll(".lang__btn").forEach((btn) => {
    const active = btn.dataset.lang === lang;
    btn.classList.toggle("is-active", active);
    btn.setAttribute("aria-pressed", String(active));
  });

  const meta = CONTENT.meta?.[lang] || CONTENT.meta?.es;
  if (meta) {
    const loc = document.getElementById("meta-loc");
    const tz = document.getElementById("meta-tz");
    const stack = document.getElementById("meta-stack");
    if (loc) loc.textContent = meta.loc;
    if (tz) tz.textContent = meta.tz;
    if (stack) stack.textContent = meta.stack;
  }

  renderExperience();
  renderEducation();
  renderSkills();
  renderWork();
  restartTypewriter();
}

function setLang(next) {
  if (next === lang) return;
  lang = next;
  localStorage.setItem("sd-lang", lang);
  applyI18n();
}

function restartTypewriter() {
  if (typewriterTimer) clearTimeout(typewriterTimer);
  typewriterIndex = 0;
  typewriterChar = 0;
  typewriterDeleting = false;
  const el = document.getElementById("typewriter");
  if (el) el.textContent = "";
  if (reducedMotion) {
    const roles = CONTENT.roles[lang];
    if (el) el.textContent = roles[0] ?? "";
    return;
  }
  tickTypewriter();
}

function tickTypewriter() {
  const el = document.getElementById("typewriter");
  if (!el) return;

  const roles = CONTENT.roles[lang];
  const current = roles[typewriterIndex % roles.length];

  if (!typewriterDeleting) {
    typewriterChar += 1;
    el.textContent = current.slice(0, typewriterChar);
    if (typewriterChar >= current.length) {
      typewriterDeleting = true;
      typewriterTimer = setTimeout(tickTypewriter, 1700);
      return;
    }
    typewriterTimer = setTimeout(tickTypewriter, 48 + Math.random() * 36);
  } else {
    typewriterChar -= 1;
    el.textContent = current.slice(0, typewriterChar);
    if (typewriterChar <= 0) {
      typewriterDeleting = false;
      typewriterIndex = (typewriterIndex + 1) % roles.length;
      typewriterTimer = setTimeout(tickTypewriter, 360);
      return;
    }
    typewriterTimer = setTimeout(tickTypewriter, 30);
  }
}

function renderTimeline(rootId, items) {
  const root = document.getElementById(rootId);
  if (!root) return;
  root.innerHTML = (items || [])
    .map(
      (item) => `
    <li class="timeline__item">
      <span class="timeline__hash">${escapeHtml(item.hash)}</span>
      <h3 class="timeline__role">
        ${escapeHtml(item.role)}
        <span class="timeline__company"> · ${escapeHtml(item.company)}</span>
      </h3>
      <p class="timeline__meta">${escapeHtml(item.period)}</p>
      <p class="timeline__desc">${escapeHtml(item.desc)}</p>
    </li>`
    )
    .join("");
}

function renderExperience() {
  renderTimeline("timeline", CONTENT.experience[lang]);
}

function renderEducation() {
  renderTimeline("education-timeline", CONTENT.education[lang]);
}

function renderSkills() {
  const root = document.getElementById("skills-grid");
  if (!root) return;
  const groups = CONTENT.skills[lang];

  root.innerHTML = groups
    .map(
      (group) => `
    <article class="skill-card">
      <h3 class="skill-card__title">${escapeHtml(group.title)}</h3>
      <ul class="skill-card__list">
        ${group.items
          .map((item) => `<li class="skill-tag">${escapeHtml(item)}</li>`)
          .join("")}
      </ul>
    </article>`
    )
    .join("");
}

function resolveWorkHref(item) {
  if (item.id === "upwork" && CONTENT.upworkUrl) return CONTENT.upworkUrl;
  return item.href || null;
}

function renderWork() {
  const root = document.getElementById("projects-grid");
  if (!root) return;
  const items = CONTENT.work || [];

  root.innerHTML = items
    .map((item, i) => {
      const title = item.title?.[lang] || item.title?.es || item.id;
      const desc = item.desc?.[lang] || item.desc?.es || "";
      const href = resolveWorkHref(item);
      const badge = href ? "live" : "selected";
      const badgeLabel = t(`project.badge.${badge}`);
      const linkHtml = href
        ? `<a class="project-card__link" href="${escapeAttr(href)}" target="_blank" rel="noopener noreferrer">${escapeHtml(
            t("project.link")
          )}</a>`
        : `<span class="project-card__link project-card__link--muted mono">${escapeHtml(item.id)}</span>`;

      return `
    <article class="project-card" data-id="${escapeAttr(item.id)}">
      <div class="project-card__top">
        <h3 class="project-card__title">${escapeHtml(title)}</h3>
        <span class="project-card__index">0${i + 1}</span>
      </div>
      <div class="project-card__meta mono">
        <span class="project-badge project-badge--${escapeAttr(badge)}">${escapeHtml(badgeLabel)}</span>
      </div>
      <p class="project-card__desc">${escapeHtml(desc)}</p>
      <div class="project-card__tags">
        ${(item.tags || []).map((tag) => `<span class="skill-tag">${escapeHtml(tag)}</span>`).join("")}
      </div>
      <div class="project-card__actions">
        ${linkHtml}
      </div>
    </article>`;
    })
    .join("");
}

function escapeHtml(str) {
  return String(str)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function escapeAttr(str) {
  return escapeHtml(str).replaceAll("'", "&#39;");
}

function initReveal() {
  const nodes = document.querySelectorAll("[data-reveal]");
  if (reducedMotion) {
    nodes.forEach((n) => n.classList.add("is-visible"));
    return;
  }

  const io = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          io.unobserve(entry.target);
        }
      }
    },
    { rootMargin: "0px 0px -8% 0px", threshold: 0.12 }
  );

  nodes.forEach((n) => io.observe(n));
}

function decodeEmail() {
  const parts = CONTENT.emailParts;
  if (!parts?.u || !parts?.d) return "";
  try {
    return `${atob(parts.u)}@${atob(parts.d)}`;
  } catch {
    return "";
  }
}

function initCopyEmail() {
  const btn = document.getElementById("copy-email");
  const hint = document.getElementById("contact-hint");
  const hasEmail = Boolean(CONTENT.emailParts?.u && CONTENT.emailParts?.d);

  if (!hasEmail) {
    if (btn) btn.hidden = true;
    if (hint) hint.hidden = true;
    return;
  }

  if (!btn) return;
  btn.hidden = false;
  if (hint) hint.hidden = false;

  const copy = async () => {
    const email = decodeEmail();
    if (!email) return;
    try {
      await navigator.clipboard.writeText(email);
    } catch {
      const ta = document.createElement("textarea");
      ta.value = email;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      ta.remove();
    }
    btn.classList.add("is-copied");
    window.setTimeout(() => btn.classList.remove("is-copied"), 1600);
  };

  btn.addEventListener("click", copy);

  window.addEventListener("keydown", (e) => {
    if (e.key.toLowerCase() === "e" && !e.metaKey && !e.ctrlKey && !e.altKey) {
      const tag = document.activeElement?.tagName;
      if (tag === "INPUT" || tag === "TEXTAREA") return;
      e.preventDefault();
      copy();
    }
  });
}

function initInstagram() {
  const handle = (CONTENT.instagram || "").trim().replace(/^@/, "");
  const links = document.querySelectorAll("[data-instagram-link]");
  if (!handle) {
    links.forEach((el) => {
      el.hidden = true;
    });
    return;
  }
  const href = `https://instagram.com/${encodeURIComponent(handle)}`;
  links.forEach((el) => {
    el.hidden = false;
    el.href = href;
  });
}

function initProfileLinks() {
  const upwork = (CONTENT.upworkUrl || "").trim();
  document.querySelectorAll("[data-upwork-link]").forEach((el) => {
    if (!upwork) {
      el.hidden = true;
      return;
    }
    el.hidden = false;
    el.href = upwork;
  });

  // Si no hay Upwork, el mail pasa a CTA primario
  const emailBtn = document.getElementById("copy-email");
  if (emailBtn) {
    emailBtn.classList.toggle("btn--primary", !upwork);
    emailBtn.classList.toggle("btn--ghost", Boolean(upwork));
  }

  const linkedin = (CONTENT.linkedinUrl || "").trim();
  document.querySelectorAll("[data-linkedin-link]").forEach((el) => {
    if (!linkedin) {
      el.hidden = true;
      return;
    }
    el.hidden = false;
    el.href = linkedin;
  });
}

function initLang() {
  document.querySelectorAll(".lang__btn").forEach((btn) => {
    btn.addEventListener("click", () => setLang(btn.dataset.lang));
  });
}

function applyStaticContent() {
  const lines = CONTENT.nameLines || CONTENT.name.split(" ");
  const l1 = document.getElementById("name-line-1");
  const l2 = document.getElementById("name-line-2");
  if (l1) l1.textContent = lines[0] || CONTENT.name;
  if (l2) l2.textContent = lines.slice(1).join(" ") || "";

  document.title = `CV · ${CONTENT.name}`;
  document.getElementById("year").textContent = String(new Date().getFullYear());

  const desc = document.querySelector('meta[name="description"]');
  if (desc) {
    desc.setAttribute(
      "content",
      `Curriculum vitae — ${CONTENT.name}. Diseño de alto nivel, tipografía, identidad.`
    );
  }
}

function main() {
  applyStaticContent();
  applyI18n();
  initLang();
  initReveal();
  initCopyEmail();
  initInstagram();
  initProfileLinks();
}

main();
