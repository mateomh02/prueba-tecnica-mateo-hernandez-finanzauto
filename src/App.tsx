import './App.css'
import Home from './page/home/Home'
import { ContextGlobal } from './context/Context'
function App() {
  return (
    <ContextGlobal>
      <Home/>
    </ContextGlobal>
  )
}

export default App
