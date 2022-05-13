import { Link } from 'react-router-dom'
import Text from '../Estilos/text'
import './style.scss'

function Menu() {
  return (
    <header>
      <div className="logo">
        <div className="logo-logo">
          A{' '}
          <img
            src="https://img.icons8.com/ios-filled/50/000000/football.png"
            alt="logo"
          />{' '}
          Copa
        </div>
      </div>
      <div className="menu">
        <Text>
          <Link to="/" style={{ textDecoration: 'none' }}>
            <p
              onClick={e => {
                e.preventDefault()
                window.location.replace('/#linha_tempo')
              }}
            >
              Linha do Tempo
            </p>
          </Link>
        </Text>
        <Text>
          <Link to="/Estatisticas" style={{ textDecoration: 'none' }}>
            <p>Estatísticas</p>
          </Link>
        </Text>
        <Text>
          <Link to="/" style={{ textDecoration: 'none' }}>
            <p>Início</p>
          </Link>
        </Text>
        <Text>
          <Link to="/CopaDe2022" style={{ textDecoration: 'none' }}>
            <p>Copa de 2022</p>
          </Link>
        </Text>
        <Text>
          <Link to="/Quizz" style={{ textDecoration: 'none' }}>
            <p>Quizz</p>
          </Link>
        </Text>
      </div>
    </header>
  )
}

export default Menu
