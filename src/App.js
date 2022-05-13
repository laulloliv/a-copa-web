import { Route, BrowserRouter, Routes } from 'react-router-dom'
import { render } from 'react-dom'
import CopaDe2022 from './Pages/CopaDe2022'
import Estatisticas from './Pages/Estatisticas'
import Home from './Pages/Home'
import Quizz from './Pages/Quizz'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Estatisticas" element={<Estatisticas />}></Route>
        <Route path="/CopaDe2022" element={<CopaDe2022 />}></Route>
        <Route path="/Quizz" element={<Quizz />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
