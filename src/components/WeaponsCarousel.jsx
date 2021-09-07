import React from 'react'
import { makeStyles, useTheme } from '@material-ui/core/styles';
import WeaponCard from './WeaponCard'
import { Paper } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: '0',
    padding: '0',
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, 250px)',
    justifyContent: 'center',
    gridAutoRows: '50px',
    background: 'black'
  },
  link: {
    textDecoration: 'none',
    color: '#c08fff',
    '&:hover': {
      textShadow: '0 0 15px #7000ff, 0 0 15px #7000ff, 0 0 15px #7000ff, 0 0 15px #7000ff',
    },
  }
}));

function WeaponsCarousel() {

  const classes = useStyles();

  return (
    <div style={{ background: 'black' }}>

      <div className={classes.root}>
        <WeaponCard path="/images/weapon-dagger1.jpg" style={{ gridRowEnd: '9 span' }} name='Dagger' fights=' Rapier and Dagger ' link='https://wiki.ringithaca.org/index.php?title=Romeo_and_Tybalt' />
        <WeaponCard path="/images/weapon-buckler1.jpg" style={{ gridRowEnd: '6 span' }} name='Buckler' fights=' Rapier and Buckler ' link='https://wiki.ringithaca.org/index.php?title=Basic_Rapier_and_Buckler' />
        <WeaponCard path="/images/weapon-axes.jpg" style={{ gridRowEnd: '5 span' }} name='Axes' description='There is no fight associated' />
        <WeaponCard path="/images/weapon-falchion.jpg" style={{ gridRowEnd: '9 span' }} name='Falchion' description='There is no fight associated' />
        <WeaponCard path="/images/weapon-Surrender-of-the-Elector-of-Saxony.jpg" style={{ gridRowEnd: '6 span' }} name='Surrender of the Elector of Saxony' />
        <WeaponCard path="/images/weapon-rapier1.jpg" style={{ gridRowEnd: '8 span' }} name='Rapier' fights=' Beginners Fight ' link='https://wiki.ringithaca.org/index.php?title=Beginner%27s_Fight' />
        <WeaponCard path="/images/weapon-broadsword1.jpg" style={{ gridRowEnd: '9 span' }} name='Broadsword' fights=' Basic Broadsword ' link='https://wiki.ringithaca.org/index.php?title=Basic_Broadsword' />
        <WeaponCard path="/images/weapon-Hunting-Sword-with-Scabbard.jpg" style={{ gridRowEnd: '9 span' }} name='Hunting Sword with Scabbard' />
        <WeaponCard path="/images/weapon-rapier-made-in1490.jpg" style={{ gridRowEnd: '6 span' }} name='Rapier' description='It was made in 1490' />
        <WeaponCard path="/images/weapon-Broadsword-detail-of-hilt.jpg" style={{ gridRowEnd: '8 span' }} name='Broadsword' description='Detail of the hilt' />
        <WeaponCard path="/images/weapon-Shield-of-Henry-II-of-France-(reigned-1547–59).jpg" style={{ gridRowEnd: '5 span' }} name='Shield of Henry II of France' />
        <WeaponCard path="/images/weapon-The-Stockbridge-Cup.jpg" style={{ gridRowEnd: '6 span' }} name='Stockbridge Cup' description='Not shield nor cup, it is a plate' />
        <WeaponCard path="/images/weapon-rapier2.jpg" style={{ gridRowEnd: '8 span' }} name='Rapier' fights=' Single Rapier ' link='https://wiki.ringithaca.org/index.php?title=Single_Rapier' />
        {/* <WeaponCard path="/images/weapon4.jpg" style={{ gridRowEnd: '20 span' }} /> */}

      </div>
      <p style={{ opacity: '0.8', padding: '50px 40px 100px', margin: '0px', fontSize: '20px' }}>Please visit
        <a className={classes.link} target="_blank" rel="noopener noreferrer" href='https://wiki.ringithaca.org/index.php?title=Main_Page#Weapons_and_Fights'> Ring of Steel Ithaca </a>
        for a full list of fights.
      </p>
    </div>
  )
}

export default WeaponsCarousel
