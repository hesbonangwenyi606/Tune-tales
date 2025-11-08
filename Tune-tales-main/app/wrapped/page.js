"use client"
import { useState, useEffect } from "react"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import Card from "@/components/Card"
import Button from "@/components/Button"

export default function Wrapped() {
  const [wrapped, setWrapped] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchWrapped() {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/analyze`,
          { credentials: "include" }
        )
        const data = await res.json()
        if (!data.error) setWrapped(data)
      } catch (error) {
        console.error(error)
      } finally {
        setLoading(false)
      }
    }
    fetchWrapped()
  }, [])

  if (loading) return <p>Loading your music magic… 🎧</p>

  if (!wrapped) {
    return (
      <>
        <Header />
        <main className="page-container">
          <p>No Wrapped data yet. Try connecting again.</p>
        </main>
        <Footer />
      </>
    )
  }

  const topTrack = wrapped.top_tracks[0]
  return (
    <>
      <Header />
      <main className="page-container">
        <div className="container">
          <h1 className="page-title">Your Wrapped Card</h1>

          <Card>
            <div className="wrapped-card-container">
              <h3 className="card-title">{topTrack.name}</h3>
              <p className="card-description">
                {topTrack.artists[0].name}
              </p>
            </div>

            <div className="share-button-container">
              <Button size="lg">Generate My Card</Button>
              <Button variant="secondary" size="lg">
                Share
              </Button>
            </div>
          </Card>
        </div>
      </main>
      <Footer />
    </>
  )
}
