import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css'
import './style.scss'

function Carrossel() {
  return (
    <Carousel fade className="body-carrossel">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://sismf.museudofutebol.org.br/anexos/imagem/553939/w:640/h:640/c:0"
          alt="First slide"
          height="600px"
        />
        <Carousel.Caption className="title-slide-1">
          <h3>Copa do Mundo:</h3>
          <p>Confira as Estatísticas</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.lance.com.br/files/article_main/uploads/2020/12/07/5fce89da30630.jpeg"
          alt="Second slide"
          height="600px"
        />

        <Carousel.Caption>
          <h3>Copa do Mundo 2022</h3>
          <p>Confira as Chaves!</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.audita.com.br/upload/post/blog-registro-copa-mundo.png"
          alt="Third slide"
          height="600px"
        />

        <Carousel.Caption>
          <h3>Quizz</h3>
          <p>
            Você conhece tudo sobre Copa do Mundo? Teste agora seus
            conhecimentos com o Quizz do A Copa!
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}

export default Carrossel
