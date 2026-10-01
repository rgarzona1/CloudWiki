import Hero from '../components/Hero'
import Introduction from '../components/Introduction'
import ServiceModels from '../components/ServiceModels'
import DeploymentModels from '../components/DeploymentModels'
import CloudProviders from '../components/CloudProviders'
import WikiTopics from '../components/WikiTopics'
import CallToAction from '../components/CallToAction'

function Home() {
  return (
    <>
      <Hero />
      <Introduction />
      <ServiceModels />
      <DeploymentModels />
      <CloudProviders />
      <WikiTopics />
      <CallToAction />
    </>
  )
}

export default Home
