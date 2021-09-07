import React from 'react'
import { makeStyles, useTheme } from '@material-ui/core/styles';

const appHeight = 64;

const useStyles = makeStyles((theme) => ({
  root: {
    height: `calc(100vh - ${appHeight}px)`,
    position: 'relative',
    background: '#222222',
  },

  intro: {
    padding: 0,
    margin: '20px',
    fontSize: '16px',
  },

  container: {
    display: 'flex'
  },

  glass: {
    background: 'black',
    maxWidth: '100%',
    minWidth: '300px',
    width: '500px',
    minHeight: '300px',
    position: 'absolute',
    top: '42%',
    left: '5%',
    padding: '0',
    margin: '0',
    borderRadius: '10px',

    background: 'linear-gradient',
    background:
      "linear-gradient(\n  to right bottom,rgba(192,143,255, 0.1),rgba(112,0,255, 0.1)\n)",
    backdropFilter: "blur(0.5rem)",
    boxShadow: '0 0 20px #151515',
    borderLeft: '2px solid rgba(255,255,255, 0.1)',
    borderTop: '2px solid rgba(255,255,255, 0.15)',


    [theme.breakpoints.down('md')]: {
      top: '45%',
      left: '3',
    },
    [theme.breakpoints.down('sm')]: {
      position: 'relative',
      width: '100%',
      left: '0',
      top: '0',
      borderRadius: '0',
      padding: '0',
      margin: '0'
    },
    [theme.breakpoints.down('xs')]: {
      left: '0%',
    },
  },

  risley: {
    maxWidth: '100%',
    width: '650px',
    position: 'absolute',
    top: '5%',
    left: '36%',
    padding: '0',
    margin: '0',
    borderRadius: '10px',
    [theme.breakpoints.down('md')]: {
      width: '550px',
      left: '26%',
    },
    [theme.breakpoints.down('sm')]: {
      position: 'relative',
      width: '100%',
      left: '0',
      top: '0',
      borderRadius: '0',
      padding: 0,
      margin: 0

    },
    [theme.breakpoints.down('xs')]: {
      left: '0%',
    },
  }
}));

function Introduction() {

  const classes = useStyles();

  return (
    <div className={classes.root} >
      <div className={classes.container} >
        <img src='/images/summer.jpg' className={classes.risley} />
      </div>
      <div className={classes.glass}>
        <p className={classes.intro}>
          The Ring of Steel Ithaca is a satellite group of the Ring of Steel,
          a theatrical combat and stunt troupe based out of Ann Arbor, Michigan.
        </p>
        <p className={classes.intro}>
          We are an association that seeks to perform safe, effective fights
          in a manner that advances the story told in a theatrical/film
          production.
        </p>
        <p className={classes.intro}>
          Our training encompasses both armed and unarmed techniques
          as well as elementary stunt work, always stressing safety in
          performance, artistry in choreography, and effective portrayal
          of character through combative scenes.</p>
        <p style={{ textAlign: 'right', padding: '0 10px 5px', opacity: '0.3' }}>
          Photo by U'Ming | 2020 Summer @ Risley
        </p>
      </div>
    </div >
  )
}

export default Introduction
