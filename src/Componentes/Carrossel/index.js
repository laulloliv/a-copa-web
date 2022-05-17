import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link } from 'react-router-dom'
import { Text_Slide } from '../Estilos/text'

import './style.scss'

function Carrossel() {
  return (
    <Carousel fade className="body-carrossel">
      <Carousel.Item>
        <img
          id="slide-img-1"
          className="d-block w-100"
          src="https://sismf.museudofutebol.org.br/anexos/imagem/553939/w:640/h:640/c:0"
          alt="First slide"
          height="40em"
        />
        <Carousel.Caption className="title-slide-1">
          <Text_Slide>
            <Link to="/Estatisticas" style={{ textDecoration: 'none' }}>
              <div className="slide-1">
                <h3>Copa do Mundo:</h3>
                <p>Confira as Estatísticas</p>
              </div>
            </Link>
          </Text_Slide>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          id="slide-img-2"
          className="d-block w-100"
          src="https://www.lance.com.br/files/article_main/uploads/2020/12/07/5fce89da30630.jpeg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <Text_Slide>
            <Link to="/CopaDe2022" style={{ textDecoration: 'none' }}>
              <div className="slide-2">
                <h3>Copa do Mundo 2022</h3>
                <p>Confira as Chaves!</p>
              </div>
            </Link>
          </Text_Slide>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          id="slide-img-3"
          className="d-block w-100"
          src="https://www.audita.com.br/upload/post/blog-registro-copa-mundo.png"
          alt="Third slide"
        />

        <Carousel.Caption>
          <Text_Slide>
            <Link to="/Quizz" style={{ textDecoration: 'none' }}>
              <div className="slide-3">
                <p>
                  Você conhece tudo sobre Copa do Mundo? Teste agora seus
                  conhecimentos com o Quizz do A Copa!
                </p>
              </div>
            </Link>
          </Text_Slide>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}

export default Carrossel
