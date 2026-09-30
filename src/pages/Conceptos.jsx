const concepts = [
  {
    title: 'Virtualización',
    description:
      'Permite crear recursos virtuales, como servidores, a partir de una misma infraestructura física.',
  },
  {
    title: 'Contenedores',
    description:
      'Empaquetan una aplicación y sus dependencias para ejecutarla de forma consistente en distintos entornos.',
  },
  {
    title: 'Serverless',
    description:
      'Permite ejecutar código sin administrar directamente los servidores que lo ejecutan.',
  },
  {
    title: 'Cloud Storage',
    description:
      'Guarda y permite acceder a datos a través de internet usando almacenamiento escalable.',
  },
]

function Conceptos() {
  return (
    <section className="content-section">
      <div className="container">
        <div className="section-heading centered page-heading">
          <span className="eyebrow">Fundamentos</span>
          <h1>Conceptos de Cloud Computing</h1>
          <p>Conoce algunas ideas que hacen posible la computación en la nube.</p>
        </div>

        <div className="card-grid three-up">
          {concepts.map((concept) => (
            <article key={concept.title} className="info-card model-card">
              <h2>{concept.title}</h2>
              <p>{concept.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Conceptos
