import { introCards } from '../data/siteContent'

function Introduction() {
  return (
    <section className="content-section" id="concepts">
      <div className="container">
        <div className="section-heading">
          <span className="eyebrow">Foundation</span>
          <h2>What is Cloud Computing?</h2>
        </div>

        <div className="intro-layout">
          <div className="intro-copy">
            <p>
              Cloud computing delivers computing resources such as servers,
              storage, databases, networking, and software over the internet.
              Instead of owning hardware or maintaining physical infrastructure,
              users access scalable services on demand through cloud platforms.
            </p>
          </div>

          <div className="concept-grid" aria-label="Core cloud components">
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
