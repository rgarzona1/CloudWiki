import { navItems } from '../data/siteContent'

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-shell">
        <div className="footer-branding">
          <a href="#home" className="brand">
            <span className="brand-mark">C</span>
            <span>CloudWiki</span>
          </a>
          <p>Una wiki educativa sencilla sobre la computación en la nube.</p>
        </div>

        <div className="footer-links" aria-label="Navegación del pie de página">
          {navItems.map((item) => (
            <a key={item.label} href={item.href}>
              {item.label}
            </a>
          ))}
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
