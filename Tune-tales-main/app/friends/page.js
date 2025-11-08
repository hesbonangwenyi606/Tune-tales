import Header from "@/components/Header"
import Footer from "@/components/Footer"
import Card from "@/components/Card"
import Button from "@/components/Button"

export default function Friends() {
  return (
    <>
      <Header />
      <main className="page-container">
        <div className="container">
          <h1 className="page-title">Friend Match</h1>

          <Card>
            <h2 className="card-title">Find Your Music Soulmate</h2>
            <p className="card-description">
              Enter a friend code to compare your music tastes and discover shared artists.
            </p>

            <input type="text" placeholder="Enter friend code..." className="friend-input" />
            <Button size="lg">Compare Tastes</Button>

            <div className="comparison-grid">
              <div className="comparison-card">
                <h3 className="comparison-card-title">Your Top Artists</h3>
                <ul className="comparison-list">
                  <li className="comparison-list-item">Luna Echo</li>
                  <li className="comparison-list-item">Neon Dreams</li>
                  <li className="comparison-list-item">Cosmic Waves</li>
                </ul>
              </div>

              <div className="comparison-card">
                <h3 className="comparison-card-title">Shared Artists</h3>
                <ul className="comparison-list">
                  <li className="comparison-list-item">Luna Echo ✓</li>
                  <li className="comparison-list-item">Neon Dreams ✓</li>
                </ul>
              </div>
            </div>
          </Card>
        </div>
      </main>
      <Footer />
    </>
  )
}
