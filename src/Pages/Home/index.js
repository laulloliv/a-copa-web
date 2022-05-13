import Carrossel from '../../Componentes/Carrossel'
import Menu from '../../Componentes/Menu'
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
            <Card>
              <p>1930</p>
            </Card>
            <ArrowForwardRoundedIcon></ArrowForwardRoundedIcon>
            <Card>
              <p>1934</p>
            </Card>
            <ArrowForwardRoundedIcon></ArrowForwardRoundedIcon>
            <Card>
              <p>1938</p>
            </Card>
            <ArrowForwardRoundedIcon></ArrowForwardRoundedIcon>
            <Card>
              <p>1950</p>
            </Card>
            <ArrowForwardRoundedIcon></ArrowForwardRoundedIcon>
            <Card>
              <p>1954</p>
            </Card>
          </div>
          <div className="linha-2">
            <Card>
              <p>1958</p>
            </Card>
            <ArrowForwardRoundedIcon></ArrowForwardRoundedIcon>
            <Card>
              <p>1962</p>
            </Card>
            <ArrowForwardRoundedIcon></ArrowForwardRoundedIcon>
            <Card>
              <p>1966</p>
            </Card>
            <ArrowForwardRoundedIcon></ArrowForwardRoundedIcon>
            <Card>
              <p>1970</p>
            </Card>
            <ArrowForwardRoundedIcon></ArrowForwardRoundedIcon>
            <Card>
              <p>1974</p>
            </Card>
          </div>

          <div className="linha-3">
            <Card>
              <p>1978</p>
            </Card>
            <ArrowForwardRoundedIcon></ArrowForwardRoundedIcon>
            <Card>
              <p>1982</p>
            </Card>
            <ArrowForwardRoundedIcon></ArrowForwardRoundedIcon>
            <Card>
              <p>1986</p>
            </Card>
            <ArrowForwardRoundedIcon></ArrowForwardRoundedIcon>
            <Card>
              <p>1990</p>
            </Card>
            <ArrowForwardRoundedIcon></ArrowForwardRoundedIcon>
            <Card>
              <p>1994</p>
            </Card>
          </div>
          <div className="linha-4">
            <Card>
              <p>1998</p>
            </Card>
            <ArrowForwardRoundedIcon></ArrowForwardRoundedIcon>
            <Card>
              <p>2002</p>
            </Card>
            <ArrowForwardRoundedIcon></ArrowForwardRoundedIcon>
            <Card>
              <p>2006</p>
            </Card>
            <ArrowForwardRoundedIcon></ArrowForwardRoundedIcon>
            <Card>
              <p>2010</p>
            </Card>
            <ArrowForwardRoundedIcon></ArrowForwardRoundedIcon>
            <Card>
              <p>2014</p>
            </Card>
          </div>

          <div className="linha-5">
            <Card>
              <p>2018</p>
            </Card>
            <ArrowForwardRoundedIcon></ArrowForwardRoundedIcon>
            <Card22>
              <p>2022</p>
            </Card22>
          </div>
        </div>
      </section>

      <Footer></Footer>
    </>
  )
}

export default Home
