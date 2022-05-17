import './style.scss'
import Menu from '../../Componentes/Menu'
import Footer from '../../Componentes/Footer'
import { TableArtilheiros, TableBestPlayers } from '../../Componentes/Table'

function Estatisticas() {
  return (
    <main>
      <Menu boolean={false}></Menu>
      <div className="title">
        <h2>Estatísticas</h2>
      </div>
      <section className="the-best">
        <h4>Top 5 Artilheiros</h4>
        <div>
          <TableArtilheiros></TableArtilheiros>
        </div>
      </section>
      <section className="the-best">
        <h4 id="title-table-2">Top 5 Maiores Jogadores</h4>
        <div>
          <TableBestPlayers></TableBestPlayers>
        </div>
      </section>
      <Footer></Footer>
    </main>
  )
}

export default Estatisticas
