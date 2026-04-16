import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

type SectionProfile = {
  glow: string;
  light: string;
  strength: number;
  sweep: number;
};

gsap.registerPlugin(ScrollTrigger);

const motion = {
  revealY: 26,
  revealDuration: 0.82,
  revealStagger: 0.055,
  scrub: 0.36,
  ambientScrub: 0.52,
  ease: "power3.out",
};

const sectionProfiles: Record<string, SectionProfile> = {
  hero: {
    glow: "rgba(246, 214, 66, 0.2)",
    light: "72% 18%",
    strength: 0.18,
    sweep: 0.16,
  },
  story: {
    glow: "rgba(201, 169, 98, 0.16)",
    light: "50% 8%",
    strength: 0.14,
    sweep: 0.1,
  },
  highlights: {
    glow: "rgba(246, 214, 66, 0.2)",
    light: "20% 12%",
    strength: 0.16,
    sweep: 0.12,
  },
  ingredients: {
    glow: "rgba(6, 63, 92, 0.1)",
    light: "82% 18%",
    strength: 0.12,
    sweep: 0.08,
  },
  customize: {
    glow: "rgba(201, 169, 98, 0.14)",
    light: "50% 10%",
    strength: 0.12,
    sweep: 0.08,
  },
  showcase: {
    glow: "rgba(246, 214, 66, 0.16)",
    light: "66% 16%",
    strength: 0.14,
    sweep: 0.1,
  },
  experience: {
    glow: "rgba(255, 248, 232, 0.22)",
    light: "44% 10%",
    strength: 0.1,
    sweep: 0.07,
  },
  testimonials: {
    glow: "rgba(201, 169, 98, 0.12)",
    light: "78% 16%",
    strength: 0.1,
    sweep: 0.07,
  },
  urgency: {
    glow: "rgba(246, 214, 66, 0.18)",
    light: "62% 12%",
    strength: 0.16,
    sweep: 0.1,
  },
  order: {
    glow: "rgba(246, 214, 66, 0.14)",
    light: "50% 12%",
    strength: 0.12,
    sweep: 0.08,
  },
};

const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

function profileFor(section: HTMLElement) {
  return sectionProfiles[section.id] || sectionProfiles.story;
}

function shouldReveal(item: HTMLElement, candidates: HTMLElement[]) {
  if (item.closest("script, style, [data-motion-managed]")) return false;

  const parent = candidates.find((candidate) => {
    if (candidate === item) return false;

    return (
      candidate.matches("article, blockquote, figure, form, li") &&
      candidate.contains(item)
    );
  });

  return !parent;
}

function initSiteMotion() {
  if (reducedMotion.matches) {
    document.documentElement.classList.add("motion-reduced");
    return;
  }

  ScrollTrigger.config({
    ignoreMobileResize: true,
  });

  const sections = Array.from(document.querySelectorAll<HTMLElement>("main > section"));
  const revealItems: HTMLElement[] = [];

  sections.forEach((section) => {
    const profile = profileFor(section);
    const managed = section.hasAttribute("data-motion-managed");

    if (!managed) {
      section.classList.add("motion-section");
    }

    section.style.setProperty("--motion-glow", profile.glow);
    section.style.setProperty("--motion-light", profile.light);
    section.style.setProperty("--motion-strength", String(profile.strength));
    section.style.setProperty("--motion-sweep", String(profile.sweep));
    section.style.setProperty("--motion-progress", "0");

    ScrollTrigger.create({
      trigger: section,
      start: "top 62%",
      end: "bottom 38%",
      onToggle: (self) => section.classList.toggle("is-motion-active", self.isActive),
    });

    gsap.to(section, {
      "--motion-progress": 1,
      ease: "none",
      scrollTrigger: {
        trigger: section,
        start: "top bottom",
        end: "bottom top",
        scrub: motion.ambientScrub,
        invalidateOnRefresh: true,
        fastScrollEnd: true,
      },
    });

    if (managed) return;

    const candidates = Array.from(
      section.querySelectorAll<HTMLElement>("h1, h2, h3, p, article, blockquote, figure, form, li"),
    );

    candidates
      .filter((item) => shouldReveal(item, candidates))
      .slice(0, 16)
      .forEach((item) => {
        item.setAttribute("data-motion-reveal", "");
        revealItems.push(item);
      });
  });

  document
    .querySelectorAll("main article, main blockquote, main form")
    .forEach((item) => item.classList.add("motion-card"));

  document
    .querySelectorAll("main a[href^='#'], main button[type='submit']")
    .forEach((item) => item.classList.add("motion-cta"));

  document.querySelectorAll("main img").forEach((item) => {
    if (item.closest("[data-scene-background], .premium-scroll__scene")) return;
    item.classList.add("motion-image");
  });

  const heroBackground = document.querySelector("#hero [data-scene-background]");
  if (heroBackground) {
    gsap.fromTo(
      heroBackground,
      { scale: 1.025 },
      {
        scale: 1,
        duration: 1.4,
        ease: "power2.out",
        overwrite: "auto",
      },
    );
  }

  gsap.set(revealItems, {
    autoAlpha: 0,
    y: motion.revealY,
    force3D: true,
  });

  ScrollTrigger.batch(revealItems, {
    start: "top 84%",
    once: true,
    interval: 0.08,
    batchMax: 8,
    onEnter: (batch) => {
      const batchItems = batch.filter((item): item is HTMLElement => item instanceof HTMLElement);

      batchItems.forEach((item) => {
        item.style.willChange = "transform, opacity";
      });

      gsap.to(batchItems, {
        autoAlpha: 1,
        y: 0,
        duration: motion.revealDuration,
        stagger: motion.revealStagger,
        ease: motion.ease,
        overwrite: "auto",
        onComplete: () => {
          batchItems.forEach((item) => {
            item.style.willChange = "auto";
          });
        },
      });
    },
  });

  document.documentElement.classList.add("motion-ready");
}

initSiteMotion();
