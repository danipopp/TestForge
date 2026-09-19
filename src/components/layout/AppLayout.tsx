import type { ReactNode } from "react"

interface AppLayoutProps {
  sidebar: ReactNode
  header: ReactNode
  children: ReactNode
}

export function AppLayout({
  sidebar,
  header,
  children
}: AppLayoutProps) {
  return (
    <div className="app-layout">

      {sidebar}

      <main className="main-content">

        {header}

        <section className="workspace">
          {children}
        </section>

      </main>

    </div>
  )
}