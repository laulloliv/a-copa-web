import './style.scss'
import Menu from '../../Componentes/Menu'
import Footer from '../../Componentes/Footer'
import ViewQuestions from './Questions'
import { useState } from 'react'

export function Quizz() {
  const [start, setStart] = useState(true)

  function Inicio() {
    return (
      <section>
        <div className="card-questions">
          <p>
            Teste agora seus conhecimentos sobre Copa do Mundo <br></br> com
            esse quizz super divertido!
          </p>
          <button onClick={() => setStart(false)}>Começar</button>
        </div>
      </section>
    )
  }

  return (
    <>
      <Menu></Menu>
      <div className="title">
        <h2>Quizz</h2>
      </div>

      {start ? <Inicio></Inicio> : <ViewQuestions></ViewQuestions>}

      <Footer></Footer>
    </>
  )
}

export default Quizz
