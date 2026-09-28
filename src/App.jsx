import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Introduction from './components/Introduction'
import ServiceModels from './components/ServiceModels'
import DeploymentModels from './components/DeploymentModels'
import CloudProviders from './components/CloudProviders'
import WikiTopics from './components/WikiTopics'
import CallToAction from './components/CallToAction'
import Footer from './components/Footer'

function App() {
  return (
    <div className="page-shell">
      <Navbar />
      <main>
        <Hero />
        <Introduction />
        <ServiceModels />
        <DeploymentModels />
        <CloudProviders />
        <WikiTopics />
        <CallToAction />
      </main>
      <Footer />
    </div>
  )
}

export default App
