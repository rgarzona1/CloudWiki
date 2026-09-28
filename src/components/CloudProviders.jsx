import { providers } from '../data/siteContent'

function CloudProviders() {
  return (
    <section className="content-section alt-section" id="providers">
      <div className="container">
        <div className="section-heading centered">
          <span className="eyebrow">Platform examples</span>
          <h2>Major Cloud Providers</h2>
        </div>

        <div className="card-grid three-up provider-grid">
          {providers.map((provider) => (
            <article key={provider.name} className="info-card provider-card">
              <div className="provider-logo" aria-label={`${provider.name} logo`}>
                {provider.name}
              </div>
              <p>{provider.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CloudProviders
