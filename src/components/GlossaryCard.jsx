import React from 'react'
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Paper } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'relative',
    height: 'auto',
    margin: '10px 10px 20px',
    padding: '0 25px 0 0',
    display: 'flex',
    justifyContent: 'flex-start',
    background: '#222222',
    textAlign: 'left',
    transition: '0.3s',
    color: 'white',
    fontSize: '16px',
    alignItems: 'center',
    '& $h2': {
      margin: '0 15px 0 50px',
      // position: 'relativse',
      width: '150px ',
      // fontFamily: 'Zengo',
      letterSpacing: '0.05em',
      fontWeight: '100',
      color: '#c08fff',
      textShadow: '0 0 10px #7000ff'
    },
    '& $p': {
      textAlign: 'left',
      width: '100%',
      // width: `calc(100%-150px)`,
      fontFamily: 'sans-serif',
      opacity: '0.8',
    },

    [theme.breakpoints.down("sm")]: {
      display: 'block',
      textAlign: 'center',
      '& $h2': {
        margin: '0',
        padding: '15px 0 0',
        width: '100%',
      },
      '& $p': {
        padding: '10px 20px 20px',
        margin: '0'
      },
    },

  },



}));


function GlossaryCard(props) {

  const classes = useStyles();

  return (
    <div>
      <Paper elevation={10} className={classes.root}  >
        <img src='/images/corner.png' style={{ width: '50px', position: 'absolute', left: '0', top: '0' }} />
        <img src='/images/corner.png' style={{ width: '50px', position: 'absolute', right: '0', transform: `rotateZ(180deg)`, bottom: '0' }} />
        {props.children}
      </Paper>
    </div>
  )
}

export default GlossaryCard
