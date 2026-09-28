export const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'Concepts', href: '#concepts' },
  { label: 'Services', href: '#services' },
  { label: 'Providers', href: '#providers' },
  { label: 'Resources', href: '#resources' },
]

export const introCards = [
  { title: 'Compute', text: 'Virtual machines and processing power delivered on demand.' },
  { title: 'Storage', text: 'Scalable data storage for files, backups, and application data.' },
  { title: 'Networking', text: 'Secure connections, routing, load balancing, and traffic control.' },
  { title: 'Databases', text: 'Managed database services for structured and unstructured data.' },
]

export const serviceModels = [
  {
    title: 'IaaS',
    subtitle: 'Infrastructure as a Service',
    description:
      'Users rent virtual machines, storage, and networking resources without managing physical hardware.',
  },
  {
    title: 'PaaS',
    subtitle: 'Platform as a Service',
    description:
      'Developers deploy applications on managed platforms while the provider handles the underlying infrastructure.',
  },
  {
    title: 'SaaS',
    subtitle: 'Software as a Service',
    description:
      'Applications are delivered over the internet, allowing users to access software without installation or maintenance.',
  },
]

export const deploymentModels = [
  { title: 'Public Cloud', icon: '☁️', description: 'Shared cloud resources provided over the internet for scalability and cost efficiency.' },
  { title: 'Private Cloud', icon: '🔒', description: 'Dedicated cloud infrastructure used by a single organization for stronger control and privacy.' },
  { title: 'Hybrid Cloud', icon: '🔄', description: 'A mix of public and private environments that balances flexibility and governance.' },
  { title: 'Multi-Cloud', icon: '🌐', description: 'Multiple cloud providers are used together to reduce risk and improve resilience.' },
]

export const providers = [
  { name: 'AWS', description: 'A broad portfolio of compute, storage, networking, and managed services.' },
  { name: 'Microsoft Azure', description: 'Enterprise-focused cloud services, data platforms, and integrated developer tools.' },
  { name: 'Google Cloud', description: 'Data, analytics, AI, and container-first cloud solutions for modern workloads.' },
]

export const wikiTopics = [
  { title: 'Virtualization', description: 'Abstracting hardware into virtual resources that can be shared and scaled efficiently.' },
  { title: 'Containers', description: 'Lightweight packages that bundle code and dependencies for consistent deployment.' },
  { title: 'Kubernetes', description: 'An orchestration platform for automating container deployment, scaling, and management.' },
  { title: 'Serverless', description: 'Runs application logic in response to events without managing servers directly.' },
  { title: 'Cloud Security', description: 'Protecting workloads, identities, data, and networks through policies and controls.' },
  { title: 'Cloud Storage', description: 'Durable and scalable storage for files, backups, media, and structured datasets.' },
  { title: 'Cloud Networking', description: 'Connecting services, subnets, endpoints, and traffic flows across cloud environments.' },
  { title: 'DevOps', description: 'Combines automation, CI/CD, and collaboration to deliver software faster and more reliably.' },
  { title: 'Cloud Databases', description: 'Managed database systems designed to scale with application demand and reliability needs.' },
  { title: 'Cloud Architecture', description: 'Designing distributed systems that balance performance, cost, security, and resilience.' },
]
