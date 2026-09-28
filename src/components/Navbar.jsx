import { navItems } from '../data/siteContent'

function Navbar() {
  return (
    <header className="site-header">
      <div className="container nav-shell">
        <a href="#home" className="brand" aria-label="CloudWiki home">
          <span className="brand-mark">C</span>
          <span>CloudWiki</span>
        </a>

        <nav className="main-nav" aria-label="Main navigation">
          {navItems.map((item) => (
            <a key={item.label} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <button type="button" className="primary-button nav-button">
          Explore Wiki
        </button>
      </div>
    </header>
  )
}

export default Navbar
