import * as React from "react"

export function SimpleThemeToggle({ label }: { label: string }) {
  // The inline script in index.html sets the class before first paint; start from it.
  const [theme, setTheme] = React.useState<"light" | "dark">(() =>
    document.documentElement.classList.contains("dark") ? "dark" : "light"
  )

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light"
    setTheme(newTheme)
    localStorage.setItem("theme", newTheme)
    document.documentElement.classList.toggle("dark", newTheme === "dark")
  }

  return (
    <button className="theme-toggle" onClick={toggleTheme} aria-label={label} title={label}>
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        {theme === "light" ? (
          <path d="M13.5 9.5A5.5 5.5 0 0 1 6.5 2.5a5.5 5.5 0 1 0 7 7z" />
        ) : (
          <>
            <circle cx="8" cy="8" r="3.2" />
            <path d="M8 1v2M8 13v2M1 8h2M13 8h2" />
          </>
        )}
      </svg>
    </button>
  )
}
