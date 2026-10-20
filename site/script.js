const examples = {
  "courier settlement": {
    text: "A seller loses money every week because courier settlement reports disagree with delivered orders.",
    verdict: "Validate first",
    reason: "The money-loss outcome is concrete. Validate whether sellers have the data and will investigate often enough.",
    ai: "Unnecessary for calculation",
  },
  "icon pack": {
    text: "Build an icon pack for people who want a nicer home screen.",
    verdict: "Insufficient evidence",
    reason: "This describes a format and aesthetic, not a user problem with demonstrated pull.",
    ai: "Not required",
  },
  "waiting tracker": {
    text: "Build a tracker that reminds people to follow up when someone has not replied.",
    verdict: "Reject",
    reason: "The pain is real, but the generic workflow already exists as a dedicated product category.",
    ai: "Optional for extraction",
  },
};

const root = document.documentElement;
const input = document.querySelector("#idea-input");
const evaluateButton = document.querySelector("[data-evaluate]");
const resultPanel = document.querySelector("[data-result]");
const verdict = document.querySelector("[data-verdict]");
const reason = document.querySelector("[data-reason]");
const ai = document.querySelector("[data-ai]");
const themeToggle = document.querySelector("[data-theme-toggle]");
const themeGlyph = document.querySelector(".theme-glyph");

function evaluateIdea() {
  const value = input.value.toLowerCase();
  const found = Object.entries(examples).find(([key]) => value.includes(key.split(" ")[0]) || key.split(" ").every((term) => value.includes(term)));
  const result = found ? found[1] : {
    verdict: "Validate first",
    reason: "There may be a real problem here, but the input needs an incident, workaround, consequence, and competitive check.",
    ai: "Decide after the core outcome",
  };

  resultPanel.classList.remove("is-updating");
  void resultPanel.offsetWidth;
  resultPanel.classList.add("is-updating");
  window.setTimeout(() => {
    verdict.textContent = result.verdict;
    reason.textContent = result.reason;
    ai.textContent = result.ai;
    resultPanel.classList.remove("is-updating");
  }, 160);
}

function loadExample(key) {
  const example = examples[key];
  if (!example) return;
  input.value = example.text;
  evaluateIdea();
  input.focus({ preventScroll: true });
}

function setTheme(theme) {
  root.dataset.theme = theme;
  const isLight = theme === "light";
  themeGlyph.textContent = isLight ? "☀" : "☾";
  themeToggle.setAttribute("aria-label", isLight ? "Switch to dark theme" : "Switch to light theme");
  themeToggle.title = isLight ? "Switch to dark theme" : "Switch to light theme";
  localStorage.setItem("problem-filter-theme", theme);
}

evaluateButton.addEventListener("click", evaluateIdea);
document.querySelectorAll("[data-example]").forEach((element) => element.addEventListener("click", () => loadExample(element.dataset.example)));
document.querySelectorAll("[data-focus-demo]").forEach((element) => element.addEventListener("click", () => window.setTimeout(() => input.focus({ preventScroll: true }), 250)));
themeToggle.addEventListener("click", () => setTheme(root.dataset.theme === "light" ? "dark" : "light"));

const savedTheme = localStorage.getItem("problem-filter-theme");
setTheme(savedTheme || "dark");
