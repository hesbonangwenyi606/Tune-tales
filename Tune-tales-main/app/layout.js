import "./globals.css"

export const metadata = {
  title: "Tune Tales",
  description: "Your Music. Your Story. Your Tune Tale.",
    generator: 'v0.app'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
