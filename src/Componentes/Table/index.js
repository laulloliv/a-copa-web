import * as React from 'react'
import { styled } from '@mui/material/styles'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell, { tableCellClasses } from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import './style.scss'

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    color: theme.palette.common.white
  }
}))

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.background.hover
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0
  }
}))

function createData(country, player, score) {
  return { country, player, score }
}

const rows = [
  createData('Alemanha', 'Miroslav Klose', 16),
  createData('Brasil', 'Ronaldo', 15),
  createData('Alemanha', 'Gerd Müller', 14),
  createData('França', 'Just Fontaine', 13),
  createData('Brasil', 'Pelé', 12)
]

function createPlayers(country, player, score) {
  return { country, player, score }
}

const rows_thebest = [
  createPlayers('Brasil', 'Pelé', 10),
  createPlayers('Argentina', 'Diego Maradona', 10),
  createPlayers('Alemanha', 'Franz Beckenbauer', 5),
  createPlayers('Brasil', 'Garrincha', 7),
  createPlayers('Alemanha', 'Gerd Muller', 13)
]

export function TableArtilheiros() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>País</StyledTableCell>
            <StyledTableCell align="center">Jogador</StyledTableCell>
            <StyledTableCell align="right">Gols</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody className="body-table">
          {rows.map(row => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.country}
              </StyledTableCell>
              <StyledTableCell align="center">{row.player}</StyledTableCell>
              <StyledTableCell align="right">{row.score}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export function TableBestPlayers() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>País</StyledTableCell>
            <StyledTableCell align="center">Jogador</StyledTableCell>
            <StyledTableCell align="right">Camisa</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody className="body-table">
          {rows_thebest.map(row => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.country}
              </StyledTableCell>
              <StyledTableCell align="center">{row.player}</StyledTableCell>
              <StyledTableCell align="right">{row.score}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
