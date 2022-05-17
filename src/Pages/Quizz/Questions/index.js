import './style.scss'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function ViewQuestions() {
  const [start, setStart] = useState(true)
  const [question1, setQuestion1] = useState(true)
  const [question2, setQuestion2] = useState(true)
  const [question3, setQuestion3] = useState(true)
  const [resp1, setResp1] = useState('')
  const [resp2, setResp2] = useState('')
  const [resp3, setResp3] = useState('')
  const navigate = useNavigate()

  function goToHome() {
    navigate('/')
  }

  function Inicio() {
    return (
      <section>
        <div className="card-questions">
          <p>
            Teste agora seus conhecimentos sobre Copa do Mundo <br></br> com
            esse quizz super divertido!
          </p>
          <button onClick={() => setStart(false)}>Começar</button>
        </div>
      </section>
    )
  }

  function Result(props) {
    return (
      <section>
        <div className="card-result">
          <p id="num">{props.nota}</p>
          <p id="result">{props.frase}</p>
          <img src={props.img} alt={props.alt} height="150em"></img>
          <div className="buttons">
            <button
              onClick={() => {
                setStart(true)
                setQuestion1(true)
                setQuestion2(true)
                setQuestion3(true)
                setResp1('')
                setResp2('')
                setResp3('')
              }}
            >
              <img
                src="https://img.icons8.com/ios-glyphs/25/000000/replay.png"
                alt="load icon"
              />
            </button>
            <button onClick={() => goToHome()}>Início</button>
          </div>
        </div>
      </section>
    )
  }

  function Resultado() {
    let contador = 0

    if (resp1 == 'França') {
      contador += 1
    }
    if (resp2 == 'Uruguai') {
      contador += 1
    }
    if (resp3 == 'Brasil') {
      contador += 1
    }

    switch (contador) {
      case 0:
        return (
          <Result
            nota={'0/3'}
            frase={'Passoou Longe! Tente Novamente.'}
            img={
              'https://www.polemicaparaiba.com.br/wp-content/uploads/2022/02/neymar-neymar-triste-psg-13042021172959180.jpeg'
            }
            alt={'Neymar'}
          ></Result>
        )
      case 1:
        return (
          <Result
            nota={'1/3'}
            frase={'Passoou Longe! Tente Novamente.'}
            img={
              'https://www.polemicaparaiba.com.br/wp-content/uploads/2022/02/neymar-neymar-triste-psg-13042021172959180.jpeg'
            }
            alt={'Neymar'}
          ></Result>
        )
      case 2:
        return (
          <Result
            nota={'2/3'}
            frase={'Na Trave! Tente Novamente.'}
            img={
              'https://bolavip.com/__export/1640531588284/sites/bolavip/img/2021/12/26/mbappx_1.jpeg_1546398727.jpeg'
            }
            alt={'Mbappe'}
          ></Result>
        )
      case 3:
        return (
          <Result
            nota={'3/3'}
            frase={'Parabéns! Você acertou todas.'}
            img={
              'https://imagens.ne10.uol.com.br/veiculos/_midias/jpg/2022/04/19/806x444/1_000_328f3uu-20882963.jpg'
            }
            alt={'Cristiano Ronaldo'}
          ></Result>
        )
      default:
        return console.log('tente novamente')
    }
  }

  function Question(props) {
    const [op1, setop1] = useState(false)
    const [op2, setop2] = useState(false)
    const [op3, setop3] = useState(false)

    return (
      <section>
        <div className="card-quest">
          <p>{props.pergunta}</p>

          <div className="input-quest">
            <label>
              <input
                type="radio"
                value={props.resposta1}
                checked={
                  props.setR === '1'
                    ? resp1 === props.resposta1
                    : props.setR === '2'
                    ? resp2 === props.resposta1
                    : resp3 === props.resposta1
                }
                onChange={() => {
                  setop1(!op1)
                  setop2(false)
                  setop3(false)
                  props.setR === '1'
                    ? setResp1(props.resposta1)
                    : props.setR === '2'
                    ? setResp2(props.resposta1)
                    : setResp3(props.resposta1)
                }}
              />
              {props.resposta1}
            </label>
            <label>
              <input
                type="radio"
                value={props.resposta2}
                checked={
                  props.setR === '1'
                    ? resp1 === props.resposta2
                    : props.setR === '2'
                    ? resp2 === props.resposta2
                    : resp3 === props.resposta2
                }
                onChange={() => {
                  setop1(false)
                  setop2(!op2)
                  setop3(false)
                  props.setR === '1'
                    ? setResp1(props.resposta2)
                    : props.setR === '2'
                    ? setResp2(props.resposta2)
                    : setResp3(props.resposta2)
                }}
              />
              {props.resposta2}
            </label>
            <label>
              <input
                type="radio"
                value={props.resposta3}
                checked={
                  props.setR === '1'
                    ? resp1 === props.resposta3
                    : props.setR === '2'
                    ? resp2 === props.resposta3
                    : resp3 === props.resposta3
                }
                onChange={() => {
                  setop1(false)
                  setop2(false)
                  setop3(!op3)
                  props.setR === '1'
                    ? setResp1(props.resposta3)
                    : props.setR === '2'
                    ? setResp2(props.resposta3)
                    : setResp3(props.resposta3)
                }}
              />
              {props.resposta3}
            </label>
          </div>
          <p id="num">{props.num}</p>
          <button onClick={props.next}>Próxima</button>
        </div>
      </section>
    )
  }

  return start ? (
    <Inicio></Inicio>
  ) : question1 ? (
    <Question
      pergunta={'Qual a seleção vencedora da Copa do Mundo de 2018?'}
      resposta1={'Alemanha'}
      resposta2={'Argentina'}
      resposta3={'França'}
      num={'1/3'}
      next={() => setQuestion1(false)}
      setR={'1'}
    ></Question>
  ) : question2 ? (
    <Question
      pergunta={'Qual a seleção vencedora da primeira Copa do Mundo (1930)?'}
      resposta1={'Itália'}
      resposta2={'Uruguai'}
      resposta3={'Hungria'}
      num={'2/3'}
      next={() => setQuestion2(false)}
      setR={'2'}
    ></Question>
  ) : question3 ? (
    <Question
      pergunta={'Qual a seleção com mais participações em copas?'}
      resposta1={'México'}
      resposta2={'Alemanha'}
      resposta3={'Brasil'}
      num={'3/3'}
      next={() => setQuestion3(false)}
      setR={'3'}
    ></Question>
  ) : (
    <Resultado></Resultado>
  )
}
