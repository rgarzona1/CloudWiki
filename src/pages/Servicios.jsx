import { serviceModels } from '../data/siteContent'


function Servicios() {
    return (
        <section className="content-section">
            <div className="container">
                <div className="section-heading centered page-heading">
                    <h1>Modelos de Servicio en la Nube</h1>
                    <p>Descubre los diferentes modelos de servicio que ofrece la nube para satisfacer tus necesidades.</p>
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

export default Servicios