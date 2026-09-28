import { introCards } from '../data/siteContent'

function Introduction() {
  return (
    <section className="content-section" id="concepts">
      <div className="container">
        <div className="section-heading">
          <span className="eyebrow">Fundamentos</span>
          <h2>¿Qué es la computación en la nube?</h2>
        </div>

        <div className="intro-layout">
          <div className="intro-copy">
            <p>
              La computación en la nube ofrece recursos informáticos como servidores,
              almacenamiento, bases de datos, redes y software a través de internet.
              En lugar de poseer hardware o mantener infraestructura física, los usuarios
              acceden a servicios escalables bajo demanda mediante plataformas cloud.
            </p>
          </div>

          <div className="concept-grid" aria-label="Componentes clave de la nube">
            {introCards.map((card) => (
              <article key={card.title} className="concept-card">
                <span className="concept-pill">{card.title}</span>
                <p>{card.text}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Introduction
