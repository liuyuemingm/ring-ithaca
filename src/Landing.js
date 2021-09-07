import { Link } from 'react-router-dom';
import React, { useRef } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Height } from '@material-ui/icons';

const appHeight = '64';

const useStyles = makeStyles((theme) => ({
  title: {
    position: 'absolute',
    top: '35%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    fontSize: '55px',
    textAlign: 'center',
    textShadow: '0 0 10px #7000ff, 0 0 10px #7000ff',
    color: '#C08FFF',
    fontFamily: 'Sketch-Gothic-School',
    width: '100%',
    [theme.breakpoints.down('xs')]: {
      fontSize: '32px',
    },
  },

  downArrow: {
    position: 'absolute',
    top: '60%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '70px',
    [theme.breakpoints.down('xs')]: {
      width: '50px',
      top: '55%',
    },
  }

}));

function Landing() {
  const classes = useStyles();

  return (
    <div >
      <p className={classes.title}>
        ~ Ring of Steel · Ithaca ~
      </p>

      <Link to={'../Home'}>
        <img className={classes.downArrow} src='/images/downArrow.png' alt='down arrow' />
      </Link>
    </div>
  );
}

export default Landing;
