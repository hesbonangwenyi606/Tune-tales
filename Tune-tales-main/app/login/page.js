import Header from "@/components/Header"
import Footer from "@/components/Footer"
import Button from "@/components/Button"


export default function Login() {
  return (
    <>
      <Header />
      <main className="login-page-container">
        <div className="login-card">
          <h1 className="login-title">Welcome Back</h1>
          <p className="login-subtitle">Sign in to your Tune Tales account</p>

          <form className="login-form">
            <input type="email" placeholder="Email address" className="login-input" required />
            <input type="password" placeholder="Password" className="login-input" required />

            <div className="login-button-container">
              <Button size="lg" className="button-full-width">
                Sign In
              </Button>
            </div>
          </form>

          <div className="login-divider">
            <div className="login-divider-line"></div>
            <span className="login-divider-text">or</span>
            <div className="login-divider-line"></div>
          </div>

          <Button variant="secondary" size="lg" className="button-full-width">
            Connect with Spotify
          </Button>

          <p className="login-signup-link">
            Don't have an account?{" "}
            <a href="#" className="signup-link">
              Sign up
            </a>
          </p>
        </div>
      </main>
      <Footer />
    </>
  )
}
