import Header from "@/components/Header"
import Footer from "@/components/Footer"
import Card from "@/components/Card"

export default function Map() {
  return (
    <>
      <Header />
      <main className="page-container">
        <div className="container">
          <h1 className="page-title">Your Music Map</h1>

          <Card>
            <div className="map-placeholder">
              <div className="map-pin map-pin-red" style={{ left: "30%", top: "40%" }}></div>
              <div className="map-pin map-pin-blue" style={{ left: "60%", top: "50%" }}></div>
              <div className="map-pin map-pin-red" style={{ left: "45%", top: "60%" }}></div>🌍 Global Listening
              Patterns
            </div>
          </Card>
        </div>
      </main>
      <Footer />
    </>
  )
}
