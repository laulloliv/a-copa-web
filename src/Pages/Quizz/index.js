import './style.scss'
import Menu from '../../Componentes/Menu'
import Footer from '../../Componentes/Footer'
import ViewQuestions from './Questions'

export function Quizz() {
  return (
    <>
      <Menu boolean={false}></Menu>
      <div className="title">
        <h2>Quizz</h2>
      </div>

      <ViewQuestions></ViewQuestions>

      <Footer></Footer>
    </>
  )
}

export default Quizz
