(() => {
  document.querySelectorAll(".faq-list-item-svg").forEach((el) => {
    el.style.pointerEvents = "auto";
    el.setAttribute("role", "button");
    el.setAttribute("tabindex", "0");
    el.setAttribute("aria-label", "Toggle FAQ item");
  });

  const faq = new Accordion("#faq-accordion", {
    duration: 250,
    showMultiple: false,
    openOnInit: [0],
    elementClass: "ac",
    panelClass: "ac-panel",
    triggerClass: "faq-list-item-svg",
  });

  document
    .querySelectorAll("#faq-accordion .faq-list-item-svg")
    .forEach((el) => {
      el.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          el.click();
        }
      });
    });
})();
