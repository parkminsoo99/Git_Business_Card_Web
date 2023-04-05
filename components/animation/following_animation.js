import React from 'react'

import Lottie from 'react-lottie-player'

import lottieJson from '/public/follow.json'

export default function Following_Animation() {
  return (
    <Lottie
      loop
      animationData={lottieJson}
      play
      style={{ width: 300, height: 250 }}
    />
  )
}