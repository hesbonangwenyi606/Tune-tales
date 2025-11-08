export default function Card({ children, className = "", hover = true, ...props }) {
  const hoverClass = hover ? "card-hover" : ""

  return (
    <div className={`card ${hoverClass} ${className}`} {...props}>
      {children}
    </div>
  )
}
