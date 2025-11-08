import Header from "@/components/Header"
import Footer from "@/components/Footer"
import Card from "@/components/Card"
import Link from "next/link"

export default function Dashboard() {
  const features = [
    {
      title: "Wrapped Card Generator",
      description: "Create a shareable card showcasing your top tracks and artists.",
      href: "/wrapped",
      icon: "🎵",
    },
    {
      title: "Mood Analysis",
      description: "Discover the emotional landscape of your music taste.",
      href: "/mood",
      icon: "🎭",
    },
    {
      title: "Music Map",
      description: "Explore your listening patterns across the globe.",
      href: "/map",
      icon: "🗺️",
    },
    {
      title: "Timeline Trends",
      description: "Track how your music preferences evolve over time.",
      href: "/timeline",
      icon: "📈",
    },
    {
      title: "Friend Match",
      description: "Find your music soulmate and compare tastes.",
      href: "/friends",
      icon: "👥",
    },
  ]

  return (
    <>
      <Header />
      <main className="page-container">
        <div className="dashboard-container">
          <div className="dashboard-header-section">
            <div className="dashboard-avatar">MT</div>
            <div className="dashboard-user-info">
              <h1 className="dashboard-user-name">Welcome back, Music Lover</h1>
              <p className="dashboard-user-subtitle">Ready to discover your music alter-ego?</p>
            </div>
          </div>

          <div className="dashboard-grid">
            {features.map((feature) => (
              <Card key={feature.title}>
                <div className="card-icon">{feature.icon}</div>
                <h3 className="card-title">{feature.title}</h3>
                <p className="card-description">{feature.description}</p>
                <Link href={feature.href} className="card-link">
                  Explore →
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
