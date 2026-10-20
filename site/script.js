const examples = [
  {
    match: ["notification", "summar"],
    verdict: "Insufficient evidence",
    reason: "The feature is clear, but the person, incident, workaround, and consequence are missing.",
    ai: "Not yet determined",
  },
  {
    match: ["waiting", "refund", "reply", "follow"],
    verdict: "Reject",
    reason: "The pain is real, but the generic workflow already exists as a dedicated product category.",
    ai: "Optional for extraction",
  },
  {
    match: ["courier", "shipping", "seller", "settlement"],
    verdict: "Validate first",
    reason: "The money-loss outcome is concrete. Validate whether users have the data and will investigate often enough.",
    ai: "Unnecessary for calculation",
  },
  {
    match: ["icon", "wallpaper", "widget"],
    verdict: "Insufficient evidence",
    reason: "This describes a format and aesthetic, not a user problem with demonstrated pull.",
    ai: "Not required",
  },
];

const input = document.querySelector("#idea-input");
const button = document.querySelector("[data-evaluate]");
const verdict = document.querySelector("[data-verdict]");
const reason = document.querySelector("[data-reason]");
const ai = document.querySelector("[data-ai]");
const themeToggle = document.querySelector("[data-theme-toggle]");

button.addEventListener("click", () => {
  const value = input.value.toLowerCase();
  const found = examples.find((example) => example.match.some((term) => value.includes(term)));
  const result = found || {
    verdict: "Validate first",
    reason: "There may be a real problem here, but the current input needs an incident, workaround, and competitive check.",
    ai: "Decide after the core outcome",
  };
  verdict.textContent = result.verdict;
  reason.textContent = result.reason;
  ai.textContent = result.ai;
});

themeToggle.addEventListener("click", () => {
  const light = document.documentElement.dataset.theme === "light";
  document.documentElement.dataset.theme = light ? "dark" : "light";
  themeToggle.textContent = light ? "Light" : "Dark";
});
