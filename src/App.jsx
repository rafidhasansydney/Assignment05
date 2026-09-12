import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TechCatalog from './components/TechCatalog'
import Footer from './components/Footer'

function App() {
  const [stack, setStack] = useState([])

  const addToStack = (tech) => {
    if (stack.some((item) => item.id === tech.id)) {
      toast.warning(`${tech.name} is already in your stack`)
      return
    }
    setStack([...stack, tech])
    toast.success(`${tech.name} added to your stack`)
  }

  const removeFromStack = (id) => {
    const removed = stack.find((item) => item.id === id)
    setStack(stack.filter((item) => item.id !== id))
    toast.info(`${removed.name} removed from your stack`)
  }

  const clearStack = () => {
    setStack([])
    toast.error('All technologies removed from your stack')
  }

  return (
    <div>
      <Navbar />
      <main className="min-h-screen bg-white">
        <Hero />
        <TechCatalog
          stack={stack}
          onAdd={addToStack}
          onRemove={removeFromStack}
          onClear={clearStack}
        />
      </main>
      <Footer />
      <ToastContainer position="bottom-right" autoClose={2000} />
    </div>
  )
}

export default App
