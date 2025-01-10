import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <article>
        <header>
              <img src="https://unavatar.io/github/mdo" alt="Avatar of Mark Otto"/>
              <strong>Mark Otto</strong>
              <span>@Markotto23</span>

              <aside>
                <button>Seguir</button>
              </aside>

        </header>
    </article>
      
  )
}

export default App
