import Navbar from './components/Navbar'
import TechCatalog from './components/TechCatalog'

function App() {
  return (
    <div>
      <Navbar />
      <main className="min-h-screen bg-white">
        <TechCatalog />
      </main>
    </div>
  )
}

export default App
