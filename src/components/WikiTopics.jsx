import { wikiTopics } from '../data/siteContent'

function WikiTopics() {
  return (
    <section className="content-section" id="resources">
      <div className="container">
        <div className="section-heading centered">
          <span className="eyebrow">Aprende más</span>
          <h2>Explora temas</h2>
        </div>

        <div className="topic-grid">
          {wikiTopics.map((topic) => (
            <article key={topic.title} className="topic-card">
              <h3>{topic.title}</h3>
              <p>{topic.description}</p>
              <a href="#" aria-label={`Aprender más sobre ${topic.title}`}>
                Aprender más <span aria-hidden="true">→</span>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WikiTopics
