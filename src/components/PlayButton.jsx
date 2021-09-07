import React, { useRef } from 'react'
import PlayAni from './PlayAni'
import { Button } from '@material-ui/core'
import * as THREE from 'three'
// import { sayHi } from './Model'
import ThreeScene from './ThreeScene'
import Testing from './testing'


window.asdf = 0;
const PlayButton = props => {
  const testingRef = useRef();

  // useEffect(() => {
  //   effect

  // }, [input])
  const clickhandler = () => {
    console.log(testingRef);
  }

  return (
    <Button
      onClick={() => { window.asdf++ }}
      style={{

        position: 'absolute',
        bottom: '50vh',
        left: '40vw',
        background: 'purple'
      }}>
      increment window asdf value
      {/* <Testing ref={testingRef} /> */}
    </Button>
  )
}

export default PlayButton
