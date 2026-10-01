import { providers } from '../data/siteContent'

function Proveedores() {
    return (
        <section className="content-section">
            <div className="container">
                <div className="section-heading centered page-heading">
                    <h1>Proveedores de Servicios en la Nube</h1>
                    <p>Descubre los diferentes proveedores de servicio que ofrecen soluciones en la nube para satisfacer tus necesidades.</p>
                </div>

                <div className="card-grid three-up">
                    {providers.map((provider) => (
                        <article key={provider.name} className="info-card provider-card">
                         <div className="card-badge">{provider.name}</div>
                         <h3>{provider.description}</h3>
                        </article>
                                   ))}
                </div>
            </div>
        </section>
    )
}

export default Proveedores