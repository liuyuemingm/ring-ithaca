import React from 'react'
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import LaunchOutlinedIcon from '@material-ui/icons/LaunchOutlined';

const useStyles = makeStyles((theme) => ({

  root: {
    // border: 'solid black 5px',
    margin: '24px 12px 0',
    padding: '0',
    background: 'black',
    borderRadius: '15px',
    transition: '0.5s',
    fontSize: '16px',
    color: 'white',
    '&:hover': {

      '& $content': {
        opacity: '0.8',
      },
    },

  },

  content: {
    transition: '0.3s',
    opacity: '0',
    background: 'rgb(0,0,0,0.6)',
  },

  link: {
    textDecoration: 'none',
    color: 'white',
    '&:hover': {
      color: '#c08fff',
      textShadow: '0 0 10px #7000ff',
    },
  }

}));


function WeaponCard(props) {

  const classes = useStyles();

  return (

    <Card className={classes.root} style={props.style}>
      <CardMedia image={props.path} style={{ height: '100%' }} />
      <div className={classes.content} style={{ position: 'relative', bottom: '80px', minHeight: '100px' }}>
        <p style={{ padding: '10px ', margin: '0', fontSize: '24px' }}>
          {props.name}
        </p>
        <p style={{ margin: '3px 10px', padding: '0' }}>
          {props.description}
        </p>
        <p style={{ margin: '0 10px', padding: '0', height: '22px', position: 'relative', top: '-3px' }}>
          Fight:
          <a className={classes.link} href={props.link} target="_blank" rel="noopener noreferrer">
            {props.fights}
          </a>
          <img src='/images/link.png' style={{ width: '12px' }} />
        </p>
        <p> </p>
      </div>
    </Card >

  )
}


export default WeaponCard
