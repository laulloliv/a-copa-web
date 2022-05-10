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
        <p>Linha do Tempo</p>
        <p>Estatísticas</p>
        <p>Início</p>
        <p>Copa de 2022</p>
        <p>Quizz</p>
      </div>
    </header>
  )
}

export default Menu
