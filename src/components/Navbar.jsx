import { Link } from 'react-router'
import { navItems } from '../data/siteContent'

function Navbar() {
  return (
    <header className="site-header">
      <div className="container nav-shell">
        <Link to="/" className="brand" aria-label="Inicio de CloudWiki">
          <span className="brand-mark">C</span>
          <span>CloudWiki</span>
        </Link>

        <nav className="main-nav" aria-label="Navegación principal">
          {navItems.map((item) =>
            item.href.startsWith('/') ? (
              <Link key={item.label} to={item.href}>
                {item.label}
              </Link>
            ) : (
              <a key={item.label} href={item.href}>
                {item.label}
              </a>
            ),
          )}
        </nav>

        <button type="button" className="primary-button nav-button">
          Explorar wiki
        </button>
      </div>
    </header>
  )
}

export default Navbar
