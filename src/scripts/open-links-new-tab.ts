function applyNewTabTargets(root: ParentNode = document) {
  const links = Array.from(root.querySelectorAll<HTMLAnchorElement>("a[href]"));

  links.forEach((link) => {
    if (link.hasAttribute("data-same-tab")) return;

    link.target = "_blank";

    const relValues = new Set(link.rel.split(/\s+/).filter(Boolean));
    relValues.add("noopener");
    relValues.add("noreferrer");
    link.rel = Array.from(relValues).join(" ");
  });
}

function initNewTabLinks() {
  applyNewTabTargets();

  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      mutation.addedNodes.forEach((node) => {
        if (!(node instanceof HTMLElement)) return;

        if (node.matches("a[href]")) {
          applyNewTabTargets(node.parentNode || document);
          return;
        }

        if (node.querySelector("a[href]")) {
          applyNewTabTargets(node);
        }
      });
    });
  });

  observer.observe(document.body, { childList: true, subtree: true });
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initNewTabLinks, { once: true });
} else {
  initNewTabLinks();
}
