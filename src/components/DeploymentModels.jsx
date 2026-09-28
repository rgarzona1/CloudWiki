import { deploymentModels } from '../data/siteContent'

function DeploymentModels() {
  return (
    <section className="content-section">
      <div className="container">
        <div className="section-heading centered">
          <span className="eyebrow">Deployment options</span>
          <h2>Cloud Deployment Models</h2>
        </div>

        <div className="card-grid four-up">
          {deploymentModels.map((model) => (
            <article key={model.title} className="info-card model-card">
              <div className="model-icon" aria-hidden="true">{model.icon}</div>
              <h3>{model.title}</h3>
              <p>{model.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default DeploymentModels
