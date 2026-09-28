function Hero() {
  return (
    <section className="hero-section" id="home">
      <div className="container hero-shell">
        <div className="hero-copy">
          <span className="eyebrow">Cloud knowledge hub</span>
          <h1>Cloud Computing, Simplified.</h1>
          <p>
            Explore the concepts, technologies, services and platforms that power
            modern cloud computing.
          </p>

          <div className="hero-actions">
            <button type="button" className="primary-button">
              Explore the Wiki
            </button>
            <button type="button" className="secondary-button">
              Learn the Basics
            </button>
          </div>

          <ul className="hero-stats" aria-label="Cloud key facts">
            <li>
              <strong>100+</strong>
              <span>Concepts</span>
            </li>
            <li>
              <strong>3</strong>
              <span>Core models</span>
            </li>
            <li>
              <strong>24/7</strong>
              <span>Global access</span>
            </li>
          </ul>
        </div>

        <div className="hero-visual" aria-label="Abstract cloud infrastructure illustration">
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
