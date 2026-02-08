// ===== Theme Dropdown + Theme Resolver =====

const dropdown = document.querySelector(".theme-dropdown");
const trigger = dropdown.querySelector(".theme-trigger");
const menu = dropdown.querySelector(".theme-menu");
const options = dropdown.querySelectorAll(".theme-menu button[data-theme]");

const STORAGE_KEY = "theme"; // stores: "light" | "dark" | "system"

// OS preference query
const prefersDarkMQ = window.matchMedia("(prefers-color-scheme: dark)");

function getStoredPreference() {
  // null if nothing stored
  return localStorage.getItem(STORAGE_KEY);
}

function getAppliedTheme(storedPreference) {
  // storedPreference is what the USER chose
  if (storedPreference === "light") return "light";
  if (storedPreference === "dark") return "dark";

  // "system" OR empty => resolve from OS
  return prefersDarkMQ.matches ? "dark" : "light";
}

function applyTheme(appliedTheme) {
  // appliedTheme is what the PAGE uses right now
  document.documentElement.setAttribute("data-theme", appliedTheme);
}

function setPreference(storedPreference) {
  // storedPreference is what the USER chose
  localStorage.setItem(STORAGE_KEY, storedPreference);

  // Apply the resolved theme immediately
  const applied = getAppliedTheme(storedPreference);
  applyTheme(applied);

  // Optional: reflect selection state in the menu
  options.forEach((btn) => {
    btn.setAttribute("aria-checked", btn.dataset.theme === storedPreference ? "true" : "false");
  });

  // Optional: update the trigger to show the currently selected icon/text
  updateTriggerDisplay(storedPreference);
}

function updateTriggerDisplay(storedPreference) {
  // Show the chosen mode (dark/light/system) on the trigger button
  // We'll clone the selected option's SVG into the trigger
  const selectedBtn = dropdown.querySelector(`.theme-menu button[data-theme="${storedPreference}"]`);

  if (!selectedBtn) return;

  const selectedSvg = selectedBtn.querySelector("svg");
  const triggerSvg = trigger.querySelector("svg");

  if (selectedSvg && triggerSvg) {
    triggerSvg.replaceWith(selectedSvg.cloneNode(true));
  }

  // If you want the label to stay "Theme", leave it.
  // If you want it to change to "Dark/Light/OS default", uncomment below:
  // const label = trigger.querySelector("span");
  // label.textContent = selectedBtn.innerText.trim();
}

// ===== Dropdown open/close =====
function openMenu() {
  dropdown.classList.add("open");
  trigger.setAttribute("aria-expanded", "true");
}

function closeMenu() {
  dropdown.classList.remove("open");
  trigger.setAttribute("aria-expanded", "false");
}

function toggleMenu() {
  dropdown.classList.contains("open") ? closeMenu() : openMenu();
}

// Trigger click toggles menu
trigger.addEventListener("click", (e) => {
  e.preventDefault();
  toggleMenu();
});

// Click an option
options.forEach((btn) => {
  btn.addEventListener("click", () => {
    const choice = btn.dataset.theme; // "light" | "dark" | "system"
    setPreference(choice);
    closeMenu();
  });
});

// Close menu when clicking outside
document.addEventListener("click", (e) => {
  if (!dropdown.contains(e.target)) closeMenu();
});

// Close on Escape
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeMenu();
});

// ===== Page load: apply stored preference (or system if none) =====
(function initTheme() {
  const stored = getStoredPreference() || "system"; // default choice
  const applied = getAppliedTheme(stored);

  applyTheme(applied);
  updateTriggerDisplay(stored);

  // mark aria-checked for current stored choice
  options.forEach((btn) => {
    btn.setAttribute("aria-checked", btn.dataset.theme === stored ? "true" : "false");
  });

  // a11y attributes
  trigger.setAttribute("aria-haspopup", "menu");
  trigger.setAttribute("aria-expanded", "false");
  menu.setAttribute("role", "menu");
  options.forEach((btn) => btn.setAttribute("role", "menuitemradio"));
})();

// ===== If user chose "system", follow OS changes live =====
prefersDarkMQ.addEventListener("change", () => {
  const stored = getStoredPreference();
  if (stored === "system" || stored === null) {
    applyTheme(getAppliedTheme("system"));
  }
});
