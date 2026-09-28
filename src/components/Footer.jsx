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
          <p>A simple educational wiki about Cloud Computing.</p>
        </div>

        <div className="footer-links" aria-label="Footer navigation">
          {navItems.map((item) => (
            <a key={item.label} href={item.href}>
              {item.label}
            </a>
          ))}
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <p>© 2026 CloudWiki. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
