"use client"

import Link from "next/link"
import { useState } from "react"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="header">
      <div className="header-nav-container">
        <Link href="/" className="header-logo">
          Tune Tales
        </Link>

        <nav className="header-nav-links">
          <li>
            <Link href="/" className="header-nav-link">
              Home
            </Link>
          </li>
          <li>
            <Link href="/dashboard" className="header-nav-link">
              Dashboard
            </Link>
          </li>
          <li>
            <Link href="/login" className="header-nav-link">
              Login
            </Link>
          </li>
        </nav>
      </div>
    </header>
  )
}
