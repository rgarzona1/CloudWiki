import { Link } from 'react-router'

function NotFound() {
  return (
    <section className="content-section">
      <div className="container">
        <div className="section-heading centered page-heading">
          <span className="eyebrow">Error 404</span>
          <h1>Página no encontrada</h1>
          <p>La dirección que intentaste visitar no corresponde a una página de CloudWiki.</p>
        </div>
        <p className="not-found-link">
          <Link to="/">Volver al inicio</Link>
        </p>
      </div>
    </section>
  )
}

export default NotFound
