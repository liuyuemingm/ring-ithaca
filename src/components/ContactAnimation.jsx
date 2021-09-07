
import React, { useRef } from 'react'
import { makeStyles } from '@material-ui/core/styles';

const appHeight = '64';

const useStyles = makeStyles((theme) => ({

  root: {
    height: `calc(100vh - ${appHeight}px)`,
    textAlign: 'center',
    position: 'relative',
    background: '#222222',
    fontSize: '16px',
    color: 'rgba(255, 190, 0, 1)',
  },

  body: {
    // background: '#555555',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    maxWidth: '60vw'
  },

  eyeframe: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '60%'
  },

  ring: {
    position: 'relative',
    width: '400px',
    animation: 'rotating 60s linear infinite',
    maxWidth: '45vw'
  },

  treasurer: {
    position: 'absolute',
    top: '50%',
    left: '-7%',
    transform: 'translate(-50%, -50%) rotate(-90deg)',
    width: '34%',
    transition: '0.3s',

  },

  president: {
    position: 'absolute',
    top: '6%',
    left: '6%',
    transform: 'translate(-50%, -50%) ',
    width: '29%',
    transition: '0.3s',
  },

  campusgroups: {
    position: 'absolute',
    top: '-5%',
    left: '50%',
    transform: 'translate(-50%, -50%) ',
    width: '19%',
    transition: '0.3s',
    '& $name': {
      display: 'hidden'
    },
  },

  vicepresident: {
    position: 'absolute',
    top: '7%',
    left: '91%',
    transform: 'translate(-50%, -50%) ',
    width: '52.5%',
    transition: '0.3s',
  },

  armorer: {
    position: 'absolute',
    top: '48%',
    left: '105%',
    transform: 'translate(-50%, -50%) rotate(90deg)',
    width: '32%',
    transition: '0.3s',
  },

  eyeball: {
    position: 'absolute',
    top: '51%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '12%',
    transition: '0.2s',
    transformOrigin: '50% 51%'
  },

  name: {
    position: 'absolute',
    width: 'fit-content',
    textShadow: '0 0 5px orange',
    [theme.breakpoints.down('xs')]: {
      fontSize: '15px'
    },
  },

  treasurerContainer: {
    '& $name': {
      opacity: '0'
    },
    '&:hover': {
      '& $treasurer': {
        top: '30%',
        left: '-35%',
        width: '45%',
        transform: 'rotate(-30deg)'
      },
      '& $name': {
        transition: '0.3s',
        opacity: '1'
      },
    },
  },

  presidentContainer: {
    '& $name': {
      opacity: '0'
    },
    '&:hover': {
      '& $president': {
        top: '-12%',
        left: '-15%',
        width: '36%',
        transform: 'rotate(45deg)',
      },
      '& $name': {
        transition: '0.3s',
        opacity: '1'
      },
    },
  },

  campusgroupsContainer: {
    '& $name': {
      opacity: '0'
    },
    '&:hover': {
      '& $campusgroups': {
        top: '-15%',
        left: '50%',
        width: '30%',
      },
      '& $name': {
        transition: '0.3s',
        opacity: '1'
      },
    },
  },

  vicepresidentContainer: {
    '& $name': {
      opacity: '0'
    },
    '&:hover': {
      '& $vicepresident': {
        top: '-18%',
        left: '75%',
        width: '60%',
        transform: 'rotate(-135deg)',
      },
      '& $name': {
        transition: '0.3s',
        opacity: '1'
      },
    },
  },

  armorerContainer: {
    '& $name': {
      opacity: '0'
    },
    '&:hover': {
      '& $armorer': {
        top: '24%',
        left: '88%',
        width: '43%',
        transform: 'rotate(0deg)'
      },
      '& $name': {
        transition: '0.3s',
        opacity: '1'
      },
    },

  },

  link: {
    textDecoration: 'none',
    color: 'white'
  }

}));

function ContactAnimation() {

  const classes = useStyles();
  // const ball = document.getElementById('pupil');
  const eyeball = useRef(null)

  function roll(e) {
    var clientX = e.clientX;
    var clientY = e.clientY;

    if (window.innerWidth < 600) {
      var rotateX = clientX / window.innerWidth - 0.5;
    } else {
      var rotateX = (clientX - 200) / (window.innerWidth - 200) - 0.5;
    }

    var rotateY = -(clientY - 64) / (window.innerHeight - 64) + 0.5;
    var deg = Math.sqrt((Math.abs(rotateX) + Math.abs(rotateY))) * 45;
    var translateX = -50 + rotateX * 45 + '%';
    var translateY = -51 - rotateY * 45 + '%';

    eyeball.current.style.transform =
      "translate(" + translateX + ", " + translateY + ") rotate3d(" + rotateY + "," + rotateX + ",0," + deg + "deg)";
    console.log(window.innerWidth)

  };

  return (
    <div className={classes.root} id='root' onMouseMove={(e) => roll(e)} >
      <div className={classes.body}>

        <img src='/images/contact-ringofsteel.png' className={classes.ring} />
        <img src='/images/contact-eyeframe.png' className={classes.eyeframe} />
        <img src='/images/contact-pupil.png' className={classes.eyeball} ref={eyeball} />

        <div className={classes.treasurerContainer}>
          <img src='/images/contact-treasurer.png' className={classes.treasurer} />
          <p className={classes.name}
            style={{
              left: '-38%', top: '45%',
            }}>
            Treasurer
            <br /> Austin C.
          </p>
        </div>

        <div className={classes.presidentContainer}>
          <img src='/images/contact-president.png' className={classes.president} />
          <p className={classes.name}
            style={{ left: '-28%', top: '14%' }}>
            President
            <br /> Kaitlin Smith
          </p>
        </div>

        <div className={classes.campusgroupsContainer}>
          <img src='/images/contact-campusgroups.png' className={classes.campusgroups} />
          <a className={classes.link} href='https://cornell.campusgroups.com/ROSI/club_signup' target="_blank" rel="noopener noreferrer">
            <p className={classes.name}
              style={{ left: '9%', top: '-28%' }}>
              Cornell  <img src='/images/link.png' style={{ width: '12px' }} />
              <br /> Campus Groups
            </p>
          </a>
        </div>

        <div className={classes.vicepresidentContainer}>
          <img src='/images/contact-vicepresident.png' className={classes.vicepresident} />
          <a className={classes.link} href='https://www.linkedin.com/in/yueming-liu-9aba84196/' target="_blank" rel="noopener noreferrer">
            <p className={classes.name}
              style={{ left: '90%', top: '-10%' }}>
              Vice President
              <br /> U'Ming Liu <img src='/images/link.png' style={{ width: '12px' }} />
            </p>
          </a>
        </div>

        <div className={classes.armorerContainer}>
          <img src='/images/contact-armorer.png' className={classes.armorer} />
          <p className={classes.name}
            style={{ left: '121%', top: '30%' }}>
            Armorer
            <br /> Amy W.
          </p>
        </div>

      </div>
    </div >

  )
}

export default ContactAnimation
