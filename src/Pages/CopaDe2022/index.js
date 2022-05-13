import './style.scss'
import Menu from '../../Componentes/Menu'
import Footer from '../../Componentes/Footer'

function CopaDe2022() {
  return (
    <>
      <Menu></Menu>
      <div className="title">
        <h2>Copa de 2022</h2>
      </div>
      <section>
        <h4>Fase de Grupo</h4>
        <img
          src="https://ogimg.infoglobo.com.br/in/25459146-702-150/FT1086A/tabela.jpg"
          alt="Tabela Fase de Grupo Copa do Mundo de 2022"
          height="480em"
        />
      </section>
      <section>
        <h4>Datas</h4>
        <ul>
          <li>
            Fase de grupos:
            <span>21 de novembro a 2 de dezembro (quatro jogos por dia).</span>
          </li>
          <li>
            Oitavas de final:
            <span>3 de dezembro a 6 de dezembro (dois jogos por dia).</span>
          </li>
          <li>
            Quartas de final:
            <span>9 e 10 de dezembro (dois jogos por dia).</span>
          </li>
          <li>
            Semifinais:
            <span>
              13 e 14 de dezembro Disputa de 3º lugar: 17 de dezembro.
            </span>
          </li>
          <li>
            Final:
            <span>18 de dezembro.</span>
          </li>
        </ul>
      </section>
      <section>
        <h4>Horários</h4>
        <ul className="lista-horario">
          <li>
            Fase de grupos:
            <span>7h, 10h, 13h e 16h (última rodada: 12h e 16h).</span>
          </li>
          <li>
            Oitavas e quartas:
            <span>12h e 16h.</span>
          </li>
          <li>
            Semifinal:
            <span>16h.</span>
          </li>
          <li>
            Decisão do 3º lugar e final:
            <span>12h.</span>
          </li>
          <li className="obs">* Horário de Brasília.</li>
        </ul>
      </section>
      <Footer></Footer>
    </>
  )
}

export default CopaDe2022
