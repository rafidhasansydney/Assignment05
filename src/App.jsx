import { useState } from 'react'
import Navbar from './components/Navbar'
import TechCatalog from './components/TechCatalog'

function App() {
  const [stack, setStack] = useState([])

  const addToStack = (tech) => {
    if (stack.some((item) => item.id === tech.id)) {
      alert(`${tech.name} is already in your stack`)
      return
    }
    setStack([...stack, tech])
  }

  const removeFromStack = (id) => {
    setStack(stack.filter((item) => item.id !== id))
  }

  const clearStack = () => setStack([])

  return (
    <div>
      <Navbar />
      <main className="min-h-screen bg-white">
        <TechCatalog
          stack={stack}
          onAdd={addToStack}
          onRemove={removeFromStack}
          onClear={clearStack}
        />
      </main>
    </div>
  )
}

export default App
