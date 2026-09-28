import { serviceModels } from '../data/siteContent'

function ServiceModels() {
  return (
    <section className="content-section alt-section" id="services">
      <div className="container">
        <div className="section-heading centered">
          <span className="eyebrow">Service models</span>
          <h2>Cloud Service Models</h2>
        </div>

        <div className="card-grid three-up">
          {serviceModels.map((service) => (
            <article key={service.title} className="info-card service-card">
              <div className="card-badge">{service.title}</div>
              <h3>{service.subtitle}</h3>
              <p>{service.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServiceModels
