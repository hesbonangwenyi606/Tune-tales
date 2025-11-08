"use client"; 
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Button from "@/components/Button";
import { spotifyLogin } from "@/lib/api";

export default function Home() {
  return (
    <>
      <Header />
      <main className="hero-container">
        <div className="hero-background"></div>
        <div className="hero-content">
          <h1 className="hero-title">Your Music. Your Story. Your Tune Tale.</h1>
          <p className="hero-subtitle">
            Discover your music alter-ego. Analyze your listening patterns, connect with friends, and share your unique
            music journey.
          </p>
          <div className="hero-cta-container">
            <Button size="lg" onClick={spotifyLogin}>
              Connect with Spotify
            </Button>
            <Button variant="secondary" size="lg">
              Learn More
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
