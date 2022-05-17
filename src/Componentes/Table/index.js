import * as React from 'react'
import { styled } from '@mui/material/styles'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell, { tableCellClasses } from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import { makeStyles } from '@material-ui/styles'
import { useTheme } from '@material-ui/core/styles'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import './style.scss'

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    height: '100%'
  }
}))

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
  const classes = useStyles
  const theme = useTheme()
  const matches = useMediaQuery('(min-width:1130px)')
  const matches2 = useMediaQuery('(min-width:920px)')
  console.log(matches)
  return (
    <TableContainer component={Paper}>
      <Table
        className={classes.root}
        sx={
          matches
            ? { minWidth: 700 }
            : matches2
            ? { minWidth: 500 }
            : { minWidth: 300 }
        }
        aria-label="customized table"
      >
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
  const classes = useStyles
  const theme = useTheme()
  const matches = useMediaQuery('(min-width:1130px)')
  const matches2 = useMediaQuery('(min-width:920px)')
  return (
    <TableContainer component={Paper}>
      <Table
        sx={
          matches
            ? { minWidth: 700 }
            : matches2
            ? { minWidth: 500 }
            : { minWidth: 300 }
        }
        aria-label="customized table"
      >
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
