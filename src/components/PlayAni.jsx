/*
 * not used in the project
 */


import { actions } from './Parry_1';
import { useEffect } from 'react'


function PlayAni() {

  try {
    useEffect(() => {
      actions.guard_3_hand.play();
      // actions.guard_3_hand.repetitions = 3;
    })
  }
  catch (err) {
    alert(err.message);
  }
  return null
}

export default PlayAni
