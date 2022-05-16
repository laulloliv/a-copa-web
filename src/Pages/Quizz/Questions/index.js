import './style.scss'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Quizz from '..'

export default function ViewQuestions() {
  const [question1, setQuestion1] = useState(true)
  const [question2, setQuestion2] = useState(true)
  const [question3, setQuestion3] = useState(true)
  const [resp1, setResp1] = useState('')
  const [resp2, setResp2] = useState('')
  const [resp3, setResp3] = useState('')
  const navigate = useNavigate()

  function Resultado() {
    function goToHome() {
      navigate('/')
    }

    function Result0() {
      return (
        <section>
          <div className="card-result">
            <p id="num">0/3</p>
            <p id="result">Passou longee! Tente novamente.</p>
            <img
              src="https://www.polemicaparaiba.com.br/wp-content/uploads/2022/02/neymar-neymar-triste-psg-13042021172959180.jpeg"
              alt="Neymar"
              height="150em"
            ></img>
            <div className="buttons">
              <button onClick={() => window.location.replace('/Quizz')}>
                Reiniciar
              </button>
              <button onClick={() => goToHome()}>Início</button>
            </div>
          </div>
        </section>
      )
    }

    function Result1() {
      return (
        <section>
          <div className="card-result">
            <p id="num">1/3</p>
            <p id="result">Passou longee! Tente novamente.</p>
            <img
              src="https://www.polemicaparaiba.com.br/wp-content/uploads/2022/02/neymar-neymar-triste-psg-13042021172959180.jpeg"
              alt="Neymar"
              height="150em"
            ></img>
            <div className="buttons">
              <button onClick={() => window.location.reload()}>
                Reiniciar
              </button>
              <button onClick={() => goToHome()}>Início</button>
            </div>
          </div>
        </section>
      )
    }

    function Result2() {
      return (
        <section>
          <div className="card-result">
            <p id="num">2/3</p>
            <p id="result">Na Traaave! Tente novamente.</p>
            <img
              src="https://bolavip.com/__export/1640531588284/sites/bolavip/img/2021/12/26/mbappx_1.jpeg_1546398727.jpeg"
              alt="Mbappe"
              height="150em"
            ></img>
            <div className="buttons">
              <button onClick={() => window.location.reload()}>
                Reiniciar
              </button>
              <button onClick={() => goToHome()}>Início</button>
            </div>
          </div>
        </section>
      )
    }

    function Result3() {
      return (
        <section>
          <div className="card-result">
            <p id="num">3/3</p>
            <p id="result">Parabéns! Você acertou todas.</p>
            <img
              src="https://imagens.ne10.uol.com.br/veiculos/_midias/jpg/2022/04/19/806x444/1_000_328f3uu-20882963.jpg"
              alt="Cristiano Ronaldo"
              height="150em"
            ></img>
            <div className="buttons">
              <button onClick={() => window.location.reload()}>
                Reiniciar
              </button>
              <button onClick={() => goToHome()}>Início</button>
            </div>
          </div>
        </section>
      )
    }

    let contador = 0

    if (resp1 == 'França') {
      contador += 1
    }
    if (resp2 == 'Italia') {
      contador += 1
    }
    if (resp3 == 'Brasil') {
      contador += 1
    }

    switch (contador) {
      case 0:
        return <Result0></Result0>
      case 1:
        return <Result1></Result1>
      case 2:
        return <Result2></Result2>
      case 3:
        return <Result3></Result3>
      default:
        return console.log('tente novamente')
    }
  }

  function Pergunta1() {
    const [op1, setop1] = useState(false)
    const [op2, setop2] = useState(false)
    const [op3, setop3] = useState(false)

    return (
      <section>
        <div className="card-quest">
          <p>Qual foi a seleção campeã da Copa de 2018?</p>

          <div className="input-quest">
            <label>
              <input
                type="radio"
                value={'Alemanha'}
                checked={resp1 == 'Alemanha'}
                onChange={() => {
                  setop1(!op1)
                  setop2(false)
                  setop3(false)
                  setResp1('Alemanha')
                  console.log(resp1)
                }}
              />
              Alemanha
            </label>
            <label>
              <input
                type="radio"
                value={'Argentina'}
                checked={resp1 == 'Argentina'}
                onChange={() => {
                  setop1(false)
                  setop2(!op2)
                  setop3(false)
                  setResp1('Argentina')
                  console.log(resp1)
                }}
              />
              Argentina
            </label>
            <label>
              <input
                type="radio"
                value={'França'}
                checked={resp1 == 'França'}
                onChange={() => {
                  setop1(false)
                  setop2(false)
                  setop3(!op3)
                  setResp1('França')
                  console.log(resp1)
                }}
              />
              França
            </label>
          </div>
          <p id="num">1/3</p>
          <button onClick={() => setQuestion1(false)}>Próxima</button>
        </div>
      </section>
    )
  }

  //----------------------------------

  function Pergunta2() {
    const [op1, setop1] = useState(false)
    const [op2, setop2] = useState(false)
    const [op3, setop3] = useState(false)

    return (
      <section>
        <div className="card-quest">
          <p>Qual a seleção vencedora da final de 1998?</p>

          <div className="input-quest">
            <label>
              <input
                type="radio"
                value={'Italia'}
                checked={resp2 == 'Italia'}
                onChange={() => {
                  setop1(!op1)
                  setop2(false)
                  setop3(false)
                  setResp2('Italia')
                  console.log(resp2)
                }}
              />
              Itália
            </label>
            <label>
              <input
                type="radio"
                value={'México'}
                checked={resp2 == 'México'}
                onChange={() => {
                  setop1(false)
                  setop2(!op2)
                  setop3(false)
                  setResp2('México')
                  console.log(resp2)
                }}
              />
              México
            </label>
            <label>
              <input
                type="radio"
                value={'Brasil'}
                checked={resp2 == 'Brasil'}
                onChange={() => {
                  setop1(false)
                  setop2(false)
                  setop3(!op3)
                  setResp2('Brasil')
                  console.log(resp2)
                }}
              />
              Brasil
            </label>
          </div>
          <p id="num">2/3</p>
          <button onClick={() => setQuestion2(false)}>Próxima</button>
        </div>
      </section>
    )
  }

  //---------------------------

  function Pergunta3() {
    const [op1, setop1] = useState(false)
    const [op2, setop2] = useState(false)
    const [op3, setop3] = useState(false)

    return (
      <section>
        <div className="card-quest">
          <p>Qual a seleção com mais participações em copas?</p>

          <div className="input-quest">
            <label>
              <input
                type="radio"
                value={'Uruguai'}
                checked={resp3 == 'Uruguai'}
                onChange={() => {
                  setop1(!op1)
                  setop2(false)
                  setop3(false)
                  setResp3('Uruguai')
                  console.log(resp3)
                }}
              />
              Uruguai
            </label>
            <label>
              <input
                type="radio"
                value={'México'}
                checked={resp3 == 'México'}
                onChange={() => {
                  setop1(false)
                  setop2(!op2)
                  setop3(false)
                  setResp3('México')
                  console.log(resp3)
                }}
              />
              México
            </label>
            <label>
              <input
                type="radio"
                value={'Brasil'}
                checked={resp3 == 'Brasil'}
                onChange={() => {
                  setop1(false)
                  setop2(false)
                  setop3(!op3)
                  setResp3('Brasil')
                  console.log(resp3)
                }}
              />
              Brasil
            </label>
          </div>
          <p id="num">3/3</p>
          <button onClick={() => setQuestion3(false)}>Próxima</button>
        </div>
      </section>
    )
  }

  return question1 ? (
    <Pergunta1></Pergunta1>
  ) : question2 ? (
    <Pergunta2></Pergunta2>
  ) : question3 ? (
    <Pergunta3></Pergunta3>
  ) : (
    <Resultado></Resultado>
  )
}
