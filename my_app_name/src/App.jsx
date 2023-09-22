import { useState } from 'react'
import { RoutercontextProvider } from './component/RoutercontextProvider'


function App() {

  const [count, setCount] = useState(0)

  return (
    <>
    <RoutercontextProvider>
      
    </RoutercontextProvider>

    </>
  )
}

export default App
