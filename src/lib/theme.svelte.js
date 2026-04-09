const STORAGE_KEY = "theseems-theme";

function systemPrefersDark() {
  return (
    typeof globalThis !== "undefined" &&
    "matchMedia" in globalThis &&
    globalThis.matchMedia("(prefers-color-scheme: dark)").matches
  );
}

function readStored() {
  if (typeof localStorage === "undefined") return null;
  const v = localStorage.getItem(STORAGE_KEY);
  if (v === "light" || v === "dark") return v;
  return null;
}

export const theme = $state({
  value: readStored() ?? (systemPrefersDark() ? "dark" : "light"),
});

function syncDom() {
  if (typeof document === "undefined") return;
  document.documentElement.classList.toggle("dark", theme.value === "dark");
}

syncDom();

export function toggleTheme() {
  theme.value = theme.value === "dark" ? "light" : "dark";
  syncDom();
  if (typeof localStorage !== "undefined") {
    localStorage.setItem(STORAGE_KEY, theme.value);
  }
}
