import Carrossel from '../../Componentes/Carrossel'
import Menu from '../../Componentes/Menu'
import PopoverCard from '../../Componentes/Popover'
import Footer from '../../Componentes/Footer'
import { Link } from 'react-router-dom'
import Text from '../../Componentes/Estilos/text'
import { Card, Card22 } from '../../Componentes/Estilos/card'
import './style.scss'
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded'

function Home() {
  return (
    <>
      <Menu></Menu>
      <Carrossel></Carrossel>
      <hr></hr>
      <section className="section-camp">
        <div className="sessao-campeas">
          <div className="title-campeas">
            <h3 className="title">Maiores Campeães</h3>
            <Text>
              <Link to="/Estatisticas" style={{ textDecoration: 'none' }}>
                <p className="title" id="title-2">
                  Confira todas as Estatísticas
                </p>
              </Link>
            </Text>
          </div>
          <div className="show-top-3">
            <h3>Top 3</h3>
            <ul className="li-pais">
              <li>
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Flag_of_Brazil.svg/1280px-Flag_of_Brazil.svg.png"
                  alt="Bandeira do Brasil"
                  height="50em"
                />
                <img
                  src="https://iconape.com/wp-content/files/qp/332288/png/332288.png"
                  alt="Troféu"
                  height="35em"
                />
                <img
                  src="https://iconape.com/wp-content/files/qp/332288/png/332288.png"
                  alt="Troféu"
                  height="35em"
                />
                <img
                  src="https://iconape.com/wp-content/files/qp/332288/png/332288.png"
                  alt="Troféu"
                  height="35em"
                />
                <img
                  src="https://iconape.com/wp-content/files/qp/332288/png/332288.png"
                  alt="Troféu"
                  height="35em"
                />
                <img
                  src="https://iconape.com/wp-content/files/qp/332288/png/332288.png"
                  alt="Troféu"
                  height="35em"
                />
              </li>
              <hr></hr>
              <li>
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Flag_of_Germany.svg/255px-Flag_of_Germany.svg.png"
                  alt="Bandeira da Alemanha"
                  width="72em"
                />
                <img
                  src="https://iconape.com/wp-content/files/qp/332288/png/332288.png"
                  alt="Troféu"
                  height="35em"
                />
                <img
                  src="https://iconape.com/wp-content/files/qp/332288/png/332288.png"
                  alt="Troféu"
                  height="35em"
                />
                <img
                  src="https://iconape.com/wp-content/files/qp/332288/png/332288.png"
                  alt="Troféu"
                  height="35em"
                />
                <img
                  src="https://iconape.com/wp-content/files/qp/332288/png/332288.png"
                  alt="Troféu"
                  height="35em"
                />
              </li>
              <hr></hr>
              <li>
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Flag_of_Italy.svg/2560px-Flag_of_Italy.svg.png"
                  alt="Bandeira do Itália"
                  width="72em"
                />
                <img
                  src="https://iconape.com/wp-content/files/qp/332288/png/332288.png"
                  alt="Troféu"
                  height="35em"
                />
                <img
                  src="https://iconape.com/wp-content/files/qp/332288/png/332288.png"
                  alt="Troféu"
                  height="35em"
                />
                <img
                  src="https://iconape.com/wp-content/files/qp/332288/png/332288.png"
                  alt="Troféu"
                  height="35em"
                />
                <img
                  src="https://iconape.com/wp-content/files/qp/332288/png/332288.png"
                  alt="Troféu"
                  height="35em"
                />
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className="linha-do-tempo" id="linha_tempo">
        <hr></hr>
        <h2>Linha do Tempo</h2>
        <div className="anos-copa">
          <div className="linha-1">
            <PopoverCard
              ano="1930"
              title="Final"
              band1="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Flag_of_Uruguay.svg/1280px-Flag_of_Uruguay.svg.png"
              game=" 2 x 1 "
              band2="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Flag_of_Argentina.svg/1280px-Flag_of_Argentina.svg.png"
            ></PopoverCard>
            <ArrowForwardRoundedIcon></ArrowForwardRoundedIcon>
            <PopoverCard
              ano="1934"
              title="Final"
              band1="https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Flag_of_Italy.svg/2560px-Flag_of_Italy.svg.png"
              game=" 2 x 1 "
              band2="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Flag_of_the_Czech_Republic.svg/2560px-Flag_of_the_Czech_Republic.svg.png"
            ></PopoverCard>
            <ArrowForwardRoundedIcon></ArrowForwardRoundedIcon>
            <PopoverCard
              ano="1938"
              title="Final"
              band1="https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Flag_of_Italy.svg/2560px-Flag_of_Italy.svg.png"
              game=" 4 x 2 "
              band2="https://wikiimg.tojsiabtv.com/wikipedia/commons/thumb/c/c1/Flag_of_Hungary.svg/1200px-Flag_of_Hungary.svg.png"
            ></PopoverCard>
            <ArrowForwardRoundedIcon></ArrowForwardRoundedIcon>
            <PopoverCard
              ano="1950"
              title="Final"
              band1="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Flag_of_Uruguay.svg/1280px-Flag_of_Uruguay.svg.png"
              game=" 2 x 1 "
              band2="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Flag_of_Brazil.svg/2560px-Flag_of_Brazil.svg.png"
            ></PopoverCard>
            <ArrowForwardRoundedIcon></ArrowForwardRoundedIcon>
            <PopoverCard
              ano="1954"
              title="Final"
              band1="https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Flag_of_Germany.svg/1280px-Flag_of_Germany.svg.png"
              game=" 5 x 2 "
              band2="https://wikiimg.tojsiabtv.com/wikipedia/commons/thumb/c/c1/Flag_of_Hungary.svg/1200px-Flag_of_Hungary.svg.png"
            ></PopoverCard>
          </div>
          <div className="linha-2">
            <PopoverCard
              ano="1958"
              title="Final"
              band1="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Flag_of_Brazil.svg/2560px-Flag_of_Brazil.svg.png"
              game=" 5 x 2 "
              band2="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Flag_of_Sweden.svg/1280px-Flag_of_Sweden.svg.png"
            ></PopoverCard>
            <ArrowForwardRoundedIcon></ArrowForwardRoundedIcon>
            <PopoverCard
              ano="1962"
              title="Final"
              band1="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Flag_of_Brazil.svg/2560px-Flag_of_Brazil.svg.png"
              game=" 3 x 1 "
              band2="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Flag_of_the_Czech_Republic.svg/2560px-Flag_of_the_Czech_Republic.svg.png"
            ></PopoverCard>
            <ArrowForwardRoundedIcon></ArrowForwardRoundedIcon>
            <PopoverCard
              ano="1966"
              title="Final"
              band1="https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Flag_of_England.svg/2560px-Flag_of_England.svg.png"
              game=" 4 x 2 "
              band2="https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Flag_of_Germany.svg/1280px-Flag_of_Germany.svg.png"
            ></PopoverCard>
            <ArrowForwardRoundedIcon></ArrowForwardRoundedIcon>
            <PopoverCard
              ano="1970"
              title="Final"
              band1="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Flag_of_Brazil.svg/2560px-Flag_of_Brazil.svg.png"
              game=" 4 x 1 "
              band2="https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Flag_of_Italy.svg/2560px-Flag_of_Italy.svg.png"
            ></PopoverCard>
            <ArrowForwardRoundedIcon></ArrowForwardRoundedIcon>
            <PopoverCard
              ano="1974"
              title="Final"
              band1="https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Flag_of_Germany.svg/1280px-Flag_of_Germany.svg.png"
              game=" 2 x 1 "
              band2="https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Flag_of_the_Netherlands.svg/1280px-Flag_of_the_Netherlands.svg.png"
            ></PopoverCard>
          </div>

          <div className="linha-3">
            <PopoverCard
              ano="1978"
              title="Final"
              band1="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Flag_of_Argentina.svg/1280px-Flag_of_Argentina.svg.png"
              game=" 3 x 1 "
              band2="https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Flag_of_the_Netherlands.svg/1280px-Flag_of_the_Netherlands.svg.png"
            ></PopoverCard>
            <ArrowForwardRoundedIcon></ArrowForwardRoundedIcon>
            <PopoverCard
              ano="1982"
              title="Final"
              band1="https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Flag_of_Italy.svg/2560px-Flag_of_Italy.svg.png"
              game=" 3 x 1 "
              band2="https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Flag_of_Germany.svg/1280px-Flag_of_Germany.svg.png"
            ></PopoverCard>
            <ArrowForwardRoundedIcon></ArrowForwardRoundedIcon>
            <PopoverCard
              ano="1986"
              title="Final"
              band1="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Flag_of_Argentina.svg/1280px-Flag_of_Argentina.svg.png"
              game=" 3 x 2 "
              band2="https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Flag_of_Germany.svg/1280px-Flag_of_Germany.svg.png"
            ></PopoverCard>
            <ArrowForwardRoundedIcon></ArrowForwardRoundedIcon>
            <PopoverCard
              ano="1990"
              title="Final"
              band1="https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Flag_of_Germany.svg/1280px-Flag_of_Germany.svg.png"
              game=" 1 x 0 "
              band2="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Flag_of_Argentina.svg/1280px-Flag_of_Argentina.svg.png"
            ></PopoverCard>
            <ArrowForwardRoundedIcon></ArrowForwardRoundedIcon>
            <PopoverCard
              ano="1994"
              title="Final"
              band1="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Flag_of_Brazil.svg/2560px-Flag_of_Brazil.svg.png"
              game=" 0 (3) x 0 (2) "
              band2="https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Flag_of_Italy.svg/2560px-Flag_of_Italy.svg.png"
            ></PopoverCard>
          </div>
          <div className="linha-4">
            <PopoverCard
              ano="1998"
              title="Final"
              band1="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Flag_of_France.svg/2560px-Flag_of_France.svg.png"
              game=" 3 x 0 "
              band2="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Flag_of_Brazil.svg/2560px-Flag_of_Brazil.svg.png"
            ></PopoverCard>
            <ArrowForwardRoundedIcon></ArrowForwardRoundedIcon>
            <PopoverCard
              ano="2002"
              title="Final"
              band1="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Flag_of_Brazil.svg/2560px-Flag_of_Brazil.svg.png"
              game=" 2 x 0 "
              band2="https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Flag_of_Germany.svg/1280px-Flag_of_Germany.svg.png"
            ></PopoverCard>
            <ArrowForwardRoundedIcon></ArrowForwardRoundedIcon>
            <PopoverCard
              ano="2006"
              title="Final"
              band1="https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Flag_of_Italy.svg/2560px-Flag_of_Italy.svg.png"
              game=" 1 (5) x 1 (3) "
              band2="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Flag_of_France.svg/2560px-Flag_of_France.svg.png"
            ></PopoverCard>
            <ArrowForwardRoundedIcon></ArrowForwardRoundedIcon>
            <PopoverCard
              ano="2010"
              title="Final"
              band1="https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Flag_of_the_Netherlands.svg/1280px-Flag_of_the_Netherlands.svg.png"
              game=" 0 x 1 "
              band2="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Flag_of_Spain.svg/1280px-Flag_of_Spain.svg.png"
            ></PopoverCard>
            <ArrowForwardRoundedIcon></ArrowForwardRoundedIcon>
            <PopoverCard
              ano="2014"
              title="Final"
              band1="https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Flag_of_Germany.svg/1280px-Flag_of_Germany.svg.png"
              game=" 1 x 0 "
              band2="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Flag_of_Argentina.svg/1280px-Flag_of_Argentina.svg.png"
            ></PopoverCard>
          </div>

          <div className="linha-5">
            <PopoverCard
              ano="2018"
              title="Final"
              band1="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Flag_of_France.svg/2560px-Flag_of_France.svg.png"
              game=" 4 x 2 "
              band2="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Flag_of_Croatia.svg/1280px-Flag_of_Croatia.svg.png"
            ></PopoverCard>
            <ArrowForwardRoundedIcon></ArrowForwardRoundedIcon>

            <Link
              to="/CopaDe2022"
              style={{ textDecoration: 'none', color: 'black' }}
            >
              <Card22>
                <p>2022</p>
              </Card22>
            </Link>
          </div>
        </div>
      </section>
      <Footer></Footer>
    </>
  )
}

export default Home
