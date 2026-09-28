function Hero() {
  return (
    <section className="hero-section" id="home">
      <div className="container hero-shell">
        <div className="hero-copy">
          <span className="eyebrow">Centro de conocimiento cloud</span>
          <h1>Computación en la nube, simplificada.</h1>
          <p>
            Explora los conceptos, tecnologías, servicios y plataformas que impulsan
            la computación en la nube moderna.
          </p>

          <div className="hero-actions">
            <button type="button" className="primary-button">
              Explorar la wiki
            </button>
            <button type="button" className="secondary-button">
              Aprender lo básico
            </button>
          </div>

          <ul className="hero-stats" aria-label="Datos clave de la nube">
            <li>
              <strong>100+</strong>
              <span>Conceptos</span>
            </li>
            <li>
              <strong>3</strong>
              <span>Modelos clave</span>
            </li>
            <li>
              <strong>24/7</strong>
              <span>Acceso global</span>
            </li>
          </ul>
        </div>

        <div className="hero-visual" aria-label="Ilustración abstracta de infraestructura en la nube">
          <div className="cloud cloud-back" />
          <div className="cloud cloud-front" />
          <div className="node node-1" />
          <div className="node node-2" />
          <div className="node node-3" />
          <div className="node node-4" />
          <div className="node node-5" />
          <div className="line line-1" />
          <div className="line line-2" />
          <div className="line line-3" />
          <div className="server server-1" />
          <div className="server server-2" />
          <div className="server server-3" />
        </div>
      </div>
    </section>
  )
}

export default Hero
