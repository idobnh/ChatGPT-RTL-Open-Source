(() => {
  "use strict";

  const BUTTON_ID = "chat-direction-toggle";
  const DIRECTION_ATTRIBUTE = "data-chat-direction";
  const SVG_NAMESPACE = "http://www.w3.org/2000/svg";

  let direction = "ltr";
  let mountScheduled = false;

  function createLine(x1, x2, y) {
    const line = document.createElementNS(SVG_NAMESPACE, "line");
    line.setAttribute("x1", String(x1));
    line.setAttribute("x2", String(x2));
    line.setAttribute("y1", String(y));
    line.setAttribute("y2", String(y));
    return line;
  }

  function createIcon() {
    const svg = document.createElementNS(SVG_NAMESPACE, "svg");
    svg.setAttribute("viewBox", "0 0 24 24");
    svg.setAttribute("aria-hidden", "true");
    svg.classList.add("chat-direction-toggle__icon");

    for (const [length, y] of [[16, 5], [11, 9.5], [16, 14], [8, 18.5]]) {
      svg.append(createLine(4, 4 + length, y));
    }

    return svg;
  }

  function updateButton(button) {
    button.dataset.direction = direction;
    button.setAttribute("aria-pressed", String(direction === "rtl"));
    button.setAttribute(
      "aria-label",
      direction === "rtl"
        ? "Text direction: right to left"
        : "Text direction: left to right"
    );
  }

  function setDirection(nextDirection) {
    direction = nextDirection;
    document.documentElement.setAttribute(DIRECTION_ATTRIBUTE, direction);

    const button = document.getElementById(BUTTON_ID);
    if (button) updateButton(button);
  }

  function createButton() {
    const button = document.createElement("button");
    button.id = BUTTON_ID;
    button.type = "button";
    button.className = "chat-direction-toggle";
    button.append(createIcon());
    updateButton(button);

    button.addEventListener("click", () => {
      setDirection(direction === "ltr" ? "rtl" : "ltr");
    });

    return button;
  }

  function findButtonContainer(form) {
    const addButton =
      form.querySelector('[data-testid="composer-plus-btn"]') ||
      form.querySelector('button[aria-label="Add files and more"]') ||
      form.querySelector("button");

    return addButton?.parentElement || form;
  }

  function mountButton() {
    mountScheduled = false;

    if (document.getElementById(BUTTON_ID)) return;

    const editor = document.querySelector(
      '#prompt-textarea[contenteditable="true"]'
    );
    const form = editor?.closest("form");
    if (!form) return;

    findButtonContainer(form).append(createButton());
  }

  function scheduleMount() {
    if (mountScheduled) return;
    mountScheduled = true;
    requestAnimationFrame(mountButton);
  }

  setDirection("ltr");
  scheduleMount();

  new MutationObserver(scheduleMount).observe(document.body, {
    childList: true,
    subtree: true
  });
})();
