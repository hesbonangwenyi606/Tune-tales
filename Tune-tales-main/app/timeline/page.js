import Header from "@/components/Header"
import Footer from "@/components/Footer"
import Card from "@/components/Card"

export default function Timeline() {
  const seasons = ["Spring", "Summer", "Fall", "Winter"]

  return (
    <>
      <Header />
      <main className="page-container">
        <div className="container">
          <h1 className="page-title">Timeline Trends</h1>

          <Card>
            <h2 className="card-title">Your Music Evolution</h2>
            <div className="chart-placeholder">📈 Line Chart Visualization</div>

            <h3 className="card-title" style={{ marginTop: "var(--spacing-lg)" }}>
              Seasonal Breakdown
            </h3>
            <div className="season-labels">
              {seasons.map((season) => (
                <div key={season} className="season-label">
                  <p className="season-label-title">{season}</p>
                  <p className="season-label-activity">{Math.floor(Math.random() * 100)}% activity</p>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </main>
      <Footer />
    </>
  )
}
