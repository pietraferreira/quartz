// ---------------------------------------------------------------------------
// Make the "Recent Notes" sidebar section collapsible.
//
// The recent-notes plugin renders:
//   <div class="recent-notes"><h3>Recent Notes</h3><ul class="recent-ul">…</ul></div>
//
// We turn the <h3> into a button-like toggle: clicking it folds/unfolds the
// list. The collapsed/expanded choice is remembered in localStorage so it
// stays consistent as you move around the site.
// ---------------------------------------------------------------------------

const STORAGE_KEY = "recent-notes-collapsed"

function setup() {
  const containers = document.querySelectorAll<HTMLElement>(".recent-notes")
  const collapsed = localStorage.getItem(STORAGE_KEY) === "true"

  containers.forEach((container) => {
    const heading = container.querySelector<HTMLElement>("h3")
    if (!heading) return

    // apply persisted state
    container.classList.toggle("is-collapsed", collapsed)
    heading.setAttribute("role", "button")
    heading.setAttribute("tabindex", "0")
    heading.setAttribute("aria-expanded", String(!collapsed))

    const toggle = () => {
      const nowCollapsed = !container.classList.contains("is-collapsed")
      // keep every Recent Notes block on the page in sync
      document
        .querySelectorAll<HTMLElement>(".recent-notes")
        .forEach((c) => c.classList.toggle("is-collapsed", nowCollapsed))
      document
        .querySelectorAll<HTMLElement>(".recent-notes h3")
        .forEach((h) => h.setAttribute("aria-expanded", String(!nowCollapsed)))
      localStorage.setItem(STORAGE_KEY, String(nowCollapsed))
    }

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault()
        toggle()
      }
    }

    heading.addEventListener("click", toggle)
    heading.addEventListener("keydown", onKey)
    window.addCleanup(() => {
      heading.removeEventListener("click", toggle)
      heading.removeEventListener("keydown", onKey)
    })
  })
}

document.addEventListener("nav", setup)
