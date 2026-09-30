import { Link } from 'react-router'
import { navItems } from '../data/siteContent'

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-shell">
        <div className="footer-branding">
          <Link to="/" className="brand">
            <span className="brand-mark">C</span>
            <span>CloudWiki</span>
          </Link>
          <p>Una wiki educativa sencilla sobre la computación en la nube.</p>
        </div>

        <div className="footer-links" aria-label="Navegación del pie de página">
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
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <p>© 2026 CloudWiki. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
