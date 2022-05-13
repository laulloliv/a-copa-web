import * as React from 'react'
import Typography from '@mui/material/Typography'
import { Card, Card22 } from '../../Componentes/Estilos/card'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Popover from 'react-bootstrap/Popover'
import 'bootstrap/dist/css/bootstrap.min.css'

function PopoverCard(props) {
  return (
    <OverlayTrigger
      trigger="click"
      key="top"
      placement="top"
      overlay={
        <Popover id={`popover-positioned-top`}>
          <Popover.Header as="h3">{props.title}</Popover.Header>
          <Popover.Body>
            <img src={`${props.band1}`} alt="Bandeira" width="30em"></img>
            {props.game}
            <img src={`${props.band2}`} alt="Bandeira" width="30em"></img>
          </Popover.Body>
        </Popover>
      }
    >
      <Card>
        <p>{props.ano}</p>
      </Card>
    </OverlayTrigger>
  )
}

export default PopoverCard
