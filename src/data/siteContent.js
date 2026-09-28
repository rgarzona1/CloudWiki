export const navItems = [
  { label: 'Inicio', href: '#home' },
  { label: 'Conceptos', href: '#concepts' },
  { label: 'Servicios', href: '#services' },
  { label: 'Proveedores', href: '#providers' },
  { label: 'Recursos', href: '#resources' },
]

export const introCards = [
  { title: 'Cómputo', text: 'Máquinas virtuales y potencia de procesamiento entregadas bajo demanda.' },
  { title: 'Almacenamiento', text: 'Almacenamiento de datos escalable para archivos, copias de seguridad y aplicaciones.' },
  { title: 'Redes', text: 'Conexiones seguras, enrutamiento, equilibrio de carga y control del tráfico.' },
  { title: 'Bases de datos', text: 'Servicios gestionados de bases de datos para datos estructurados y no estructurados.' },
]

export const serviceModels = [
  {
    title: 'IaaS',
    subtitle: 'Infraestructura como servicio',
    description:
      'Los usuarios alquilan máquinas virtuales, almacenamiento y recursos de red sin gestionar el hardware físico.',
  },
  {
    title: 'PaaS',
    subtitle: 'Plataforma como servicio',
    description:
      'Los desarrolladores implementan aplicaciones en plataformas gestionadas mientras el proveedor administra la infraestructura subyacente.',
  },
  {
    title: 'SaaS',
    subtitle: 'Software como servicio',
    description:
      'Las aplicaciones se entregan a través de internet para que los usuarios accedan al software sin instalación ni mantenimiento.',
  },
]

export const deploymentModels = [
  { title: 'Nube pública', icon: '☁️', description: 'Recursos compartidos en la nube ofrecidos a través de internet para mayor escalabilidad y eficiencia de costos.' },
  { title: 'Nube privada', icon: '🔒', description: 'Infraestructura dedicada usada por una sola organización para un mayor control y privacidad.' },
  { title: 'Nube híbrida', icon: '🔄', description: 'Una combinación de entornos públicos y privados que equilibra flexibilidad y gobernanza.' },
  { title: 'Multinube', icon: '🌐', description: 'Se usan varios proveedores de nube para reducir riesgos y mejorar la resiliencia.' },
]

export const providers = [
  { name: 'AWS', description: 'Un amplio portafolio de servicios de cómputo, almacenamiento, redes y gestión.' },
  { name: 'Microsoft Azure', description: 'Servicios en la nube enfocados en empresas, plataformas de datos y herramientas de desarrollo integradas.' },
  { name: 'Google Cloud', description: 'Soluciones en datos, analítica, IA y contenedores para cargas de trabajo modernas.' },
]

export const wikiTopics = [
  { title: 'Virtualización', description: 'Abstrae el hardware en recursos virtuales que pueden compartirse y escalarse de forma eficiente.' },
  { title: 'Contenedores', description: 'Paquetes ligeros que incluyen código y dependencias para un despliegue consistente.' },
  { title: 'Kubernetes', description: 'Una plataforma de orquestación para automatizar despliegues, escalado y gestión de contenedores.' },
  { title: 'Sin servidor', description: 'Ejecuta lógica de aplicaciones en respuesta a eventos sin gestionar servidores directamente.' },
  { title: 'Seguridad en la nube', description: 'Protege cargas de trabajo, identidades, datos y redes mediante políticas y controles.' },
  { title: 'Almacenamiento en la nube', description: 'Almacenamiento duradero y escalable para archivos, copias de seguridad y conjuntos de datos.' },
  { title: 'Redes en la nube', description: 'Conecta servicios, subredes, puntos finales y flujos de tráfico entre entornos cloud.' },
  { title: 'DevOps', description: 'Combina automatización, CI/CD y colaboración para entregar software más rápido y confiable.' },
  { title: 'Bases de datos en la nube', description: 'Sistemas gestionados diseñados para escalar según la demanda y la necesidad de confiabilidad.' },
  { title: 'Arquitectura en la nube', description: 'Diseña sistemas distribuidos que equilibran rendimiento, costo, seguridad y resiliencia.' },
]
