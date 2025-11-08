"use client"
export default function Button({ children, variant = "primary", size = "md", className = "", ...props }) {
  const variantClass = `button-${variant}`
  const sizeClass = `button-${size}`
  const baseClass = "button"

  return (
    <button className={`${baseClass} ${variantClass} ${sizeClass} ${className}`} {...props}>
      {children}
    </button>
  )
}
