import Header from "@/components/Header"
import Footer from "@/components/Footer"
import Card from "@/components/Card"

export default function Mood() {
  const moods = ["Energetic", "Chill", "Melancholic", "Party", "Focus", "Romantic"]

  return (
    <>
      <Header />
      <main className="page-container">
        <div className="container">
          <h1 className="page-title">Your Mood Analysis</h1>

          <Card>
            <h2 className="card-title">Emotional Landscape</h2>
            <div className="mood-tags">
              {moods.map((mood) => (
                <span key={mood} className="mood-tag">
                  {mood}
                </span>
              ))}
            </div>

            <h3 className="card-title" style={{ marginTop: "var(--spacing-lg)" }}>
              Mood Distribution
            </h3>
            <div className="chart-placeholder">📊 Radar Chart Visualization</div>
          </Card>
        </div>
      </main>
      <Footer />
    </>
  )
}
