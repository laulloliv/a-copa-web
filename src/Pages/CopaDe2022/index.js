import './style.scss'
import Menu from '../../Componentes/Menu'
import Footer from '../../Componentes/Footer'

function CopaDe2022() {
  return (
    <main>
      <Menu boolean={false}></Menu>
      <section>
        <h2>Copa de 2022</h2>
        <div>
          <h4>Fase de Grupo</h4>
          <img
            id="tabela"
            src="https://ogimg.infoglobo.com.br/in/25459146-702-150/FT1086A/tabela.jpg"
            alt="Tabela Fase de Grupo Copa do Mundo de 2022"
            height="480em"
          />
        </div>
      </section>
      <section>
        <div className="lista">
          <h4>Datas</h4>
          <ul className="lista-horario">
            <li className="itens-lista">
              Fase de grupos:
              <span>
                21 de novembro a 2 de dezembro (quatro jogos por dia).
              </span>
            </li>
            <li className="itens-lista">
              Oitavas de final:
              <span>3 de dezembro a 6 de dezembro (dois jogos por dia).</span>
            </li>
            <li className="itens-lista">
              Quartas de final:
              <span>9 e 10 de dezembro (dois jogos por dia).</span>
            </li>
            <li className="itens-lista">
              Semifinais:
              <span>
                13 e 14 de dezembro Disputa de 3º lugar: 17 de dezembro.
              </span>
            </li>
            <li className="itens-lista">
              Final:
              <span>18 de dezembro.</span>
            </li>
          </ul>
        </div>
      </section>
      <section>
        <div className="lista">
          <h4>Horários</h4>
          <ul className="lista-horario">
            <li className="itens-lista">
              Fase de grupos:
              <span>7h, 10h, 13h e 16h (última rodada: 12h e 16h).</span>
            </li>
            <li className="itens-lista">
              Oitavas e quartas:
              <span>12h e 16h.</span>
            </li>
            <li className="itens-lista">
              Semifinal:
              <span>16h.</span>
            </li>
            <li className="itens-lista">
              Decisão do 3º lugar e final:
              <span>12h.</span>
            </li>
            <li id="obs" className="itens-lista">
              * Horário de Brasília.
            </li>
          </ul>
        </div>
      </section>
      <Footer></Footer>
    </main>
  )
}

export default CopaDe2022
