const root = document.documentElement;
const toggle = document.getElementById("theme-toggle");

function updateLabel() {
  const isDark = root.dataset.theme === "dark";
  toggle.setAttribute(
    "aria-label",
    isDark ? "Switch to light mode" : "Switch to dark mode",
  );
}

toggle.addEventListener("click", () => {
  const next = root.dataset.theme === "dark" ? "light" : "dark";
  root.dataset.theme = next;
  try {
    localStorage.setItem("theme", next);
  } catch (e) {}
  updateLabel();
});

updateLabel();
