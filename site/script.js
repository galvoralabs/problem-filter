const root = document.documentElement;
const themeToggle = document.querySelector("[data-theme-toggle]");
const themeGlyph = document.querySelector(".theme-glyph");
const title = document.querySelector("[data-showcase-title]");
const input = document.querySelector("[data-showcase-input]");
const verdict = document.querySelector("[data-verdict]");
const reason = document.querySelector("[data-reason]");
const ai = document.querySelector("[data-ai]");
const resultPanel = document.querySelector("[data-result]");
const steps = [...document.querySelectorAll(".showcase-step")];

const showcase = [
  {
    title: "Courier settlement mismatch",
    input: "A seller loses money every week because courier settlement reports disagree with delivered orders.",
    incident: "Concrete money loss",
    filter: "Checks failed workaround",
    verdictStep: "Validate first",
    verdict: "Validate first",
    reason: "The money-loss outcome is concrete. Validate whether sellers have the data and will investigate often enough.",
    ai: "Unnecessary for calculation",
  },
  {
    title: "Waiting tracker",
    input: "Build a tracker that reminds people to follow up when someone has not replied.",
    incident: "Repeated follow-up work",
    filter: "Checks category saturation",
    verdictStep: "Reject",
    verdict: "Reject",
    reason: "The pain is real, but the generic workflow already exists as a dedicated product category.",
    ai: "Optional for extraction",
  },
  {
    title: "Icon pack",
    input: "Build an icon pack for people who want a nicer home screen.",
    incident: "No incident supplied",
    filter: "Checks for user pull",
    verdictStep: "No evidence",
    verdict: "Insufficient evidence",
    reason: "This describes a format and aesthetic, not a user problem with demonstrated pull.",
    ai: "Not required",
  },
];

let current = 0;

function renderShowcase(index) {
  const item = showcase[index];
  title.textContent = item.title;
  input.textContent = item.input;
  verdict.textContent = item.verdict;
  reason.textContent = item.reason;
  ai.textContent = item.ai;
  document.querySelector('[data-showcase-step="incident"]').textContent = item.incident;
  document.querySelector('[data-showcase-step="filter"]').textContent = item.filter;
  document.querySelector('[data-showcase-step="verdict"]').textContent = item.verdictStep;
  steps.forEach((step, stepIndex) => step.classList.toggle("is-active", stepIndex === index));
  resultPanel.classList.remove("is-updating");
  void resultPanel.offsetWidth;
  resultPanel.classList.add("is-updating");
  window.setTimeout(() => resultPanel.classList.remove("is-updating"), 240);
}

function setTheme(theme) {
  root.dataset.theme = theme;
  const isLight = theme === "light";
  themeGlyph.textContent = isLight ? "☀" : "☾";
  themeToggle.setAttribute("aria-label", isLight ? "Switch to dark theme" : "Switch to light theme");
  themeToggle.title = isLight ? "Switch to dark theme" : "Switch to light theme";
  localStorage.setItem("problem-filter-theme", theme);
}

themeToggle.addEventListener("click", () => setTheme(root.dataset.theme === "light" ? "dark" : "light"));
setTheme(localStorage.getItem("problem-filter-theme") || "dark");
renderShowcase(current);

window.setInterval(() => {
  current = (current + 1) % showcase.length;
  renderShowcase(current);
}, 4600);
