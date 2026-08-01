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
  location: {
    es: "Mendoza, AR",
    en: "Mendoza, AR",
  },
  meta: {
    es: { loc: "Mendoza, AR", tz: "UTC−3", stack: "type · brand · editorial" },
    en: { loc: "Mendoza, AR", tz: "UTC−3", stack: "type · brand · editorial" },
  },
  roles: {
    es: [
      "Diseño de alto nivel",
      "Tipografía & sistemas",
      "Identidad visual",
    ],
    en: [
      "High-level design",
      "Typography & systems",
      "Visual identity",
    ],
  },
  experience: {
    es: [
      {
        hash: "ese",
        role: "Diseño",
        company: "ESE Design",
        period: "presente",
        desc: "Diseño de identidad, tipografía aplicada y sistemas visuales. Encargos de alto nivel con criterio editorial.",
      },
      {
        hash: "indep",
        role: "Diseño independiente",
        company: "freelance",
        period: "—",
        desc: "Marca, piezas editoriales y dirección tipográfica para clientes selectos. Completar con proyectos reales.",
      },
    ],
    en: [
      {
        hash: "ese",
        role: "Design",
        company: "ESE Design",
        period: "present",
        desc: "Identity design, applied typography, and visual systems. High-level commissions with editorial judgment.",
      },
      {
        hash: "indep",
        role: "Independent design",
        company: "freelance",
        period: "—",
        desc: "Brand, editorial pieces, and type direction for select clients. Replace with real projects.",
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
        desc: "Agregar título, institución y año cuando los tengas.",
      },
    ],
    en: [
      {
        hash: "form",
        role: "Design education",
        company: "— to complete —",
        period: "—",
        desc: "Add degree, school, and year when ready.",
      },
    ],
  },
  skills: {
    es: [
      {
        title: "tipografía",
        items: ["Jerarquía", "Pairing", "Editorial", "Lettering"],
      },
      {
        title: "identidad",
        items: ["Marca", "Sistemas visuales", "Guidelines", "Naming support"],
      },
      {
        title: "medios",
        items: ["Print", "Digital", "Packaging", "Señalética"],
      },
      {
        title: "herramientas",
        items: ["Illustrator", "InDesign", "Photoshop", "Figma"],
      },
      {
        title: "idiomas",
        items: ["Español nativo", "Inglés"],
      },
      {
        title: "criterio",
        items: ["Dirección de arte", "Rigor formal", "Menos, mejor"],
      },
    ],
    en: [
      {
        title: "typography",
        items: ["Hierarchy", "Pairing", "Editorial", "Lettering"],
      },
      {
        title: "identity",
        items: ["Brand", "Visual systems", "Guidelines", "Naming support"],
      },
      {
        title: "media",
        items: ["Print", "Digital", "Packaging", "Wayfinding"],
      },
      {
        title: "tools",
        items: ["Illustrator", "InDesign", "Photoshop", "Figma"],
      },
      {
        title: "languages",
        items: ["Spanish native", "English"],
      },
      {
        title: "judgment",
        items: ["Art direction", "Formal rigor", "Fewer, better"],
      },
    ],
  },
  /**
   * Selección de trabajo (portfolio editorial).
   * href opcional; sin href = solo ficha.
   */
  work: [
    {
      id: "identity",
      title: { es: "Identidad", en: "Identity" },
      desc: {
        es: "Sistemas de marca con tipografía protagonista: logotipo, familia tipográfica y aplicaciones.",
        en: "Brand systems led by type: logotype, type family, and applications.",
      },
      tags: ["Brand", "Type", "System"],
      href: null,
    },
    {
      id: "editorial",
      title: { es: "Editorial", en: "Editorial" },
      desc: {
        es: "Maquetación y ritmo de página. Libros, catálogos y piezas de lectura larga.",
        en: "Page layout and rhythm. Books, catalogues, and long-form pieces.",
      },
      tags: ["Layout", "Print", "Rhythm"],
      href: null,
    },
    {
      id: "type",
      title: { es: "Tipografía aplicada", en: "Applied type" },
      desc: {
        es: "Selección, pairing y uso de tipos en contextos de alto nivel visual.",
        en: "Type selection, pairing, and use in high-level visual contexts.",
      },
      tags: ["Type", "Pairing", "Craft"],
      href: null,
    },
    {
      id: "digital",
      title: { es: "Digital", en: "Digital" },
      desc: {
        es: "Interfaces y piezas web donde la tipografía ordena la experiencia.",
        en: "Interfaces and web pieces where type orders the experience.",
      },
      tags: ["UI", "Web", "Type"],
      href: null,
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
      "Diseño de alto nivel con foco en tipografía, identidad y sistemas visuales. Claridad, rigor formal y criterio editorial.",
    "hero.cta": "iniciar conversación",
    "hero.ctaSecondary": "ver selección",
    "about.label": "about",
    "about.title": "perfil",
    "about.p1":
      "Soy Vanesa. Trabajo el diseño desde la tipografía y la identidad: marcas, sistemas visuales y piezas donde el tipo es protagonista.",
    "about.p2":
      "Prefiero menos, mejor: jerarquías claras, ritmo tipográfico y decisiones que se sostienen en el tiempo.",
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
      "Abierta a encargos de identidad, tipografía y diseño editorial de alto nivel. Preferí mail.",
    "contact.copy": "copiar email",
    "contact.copied": "copiado ✓",
    "contact.hintBefore": "tip: pulsá",
    "contact.hintAfter": "para copiar el email",
    "contact.viaInstagram": "Instagram →",
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
      "High-level design focused on typography, identity, and visual systems. Clarity, formal rigor, and editorial judgment.",
    "hero.cta": "start a conversation",
    "hero.ctaSecondary": "see selection",
    "about.label": "about",
    "about.title": "profile",
    "about.p1":
      "I'm Vanesa. I approach design through type and identity: brands, visual systems, and pieces where type leads.",
    "about.p2":
      "I prefer fewer, better: clear hierarchy, typographic rhythm, and decisions that hold over time.",
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
      "Open to high-level identity, typography, and editorial commissions. Prefer email.",
    "contact.copy": "copy email",
    "contact.copied": "copied ✓",
    "contact.hintBefore": "tip: press",
    "contact.hintAfter": "to copy email",
    "contact.viaInstagram": "Instagram →",
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

function renderWork() {
  const root = document.getElementById("projects-grid");
  if (!root) return;
  const items = CONTENT.work || [];

  root.innerHTML = items
    .map((item, i) => {
      const title = item.title?.[lang] || item.title?.es || item.id;
      const desc = item.desc?.[lang] || item.desc?.es || "";
      const badge = item.href ? "live" : "selected";
      const badgeLabel = t(`project.badge.${badge}`);
      const linkHtml = item.href
        ? `<a class="project-card__link" href="${escapeAttr(item.href)}" target="_blank" rel="noopener noreferrer">${escapeHtml(
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
}

main();
