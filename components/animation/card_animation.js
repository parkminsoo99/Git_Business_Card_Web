import React from 'react'

import Lottie from 'react-lottie-player'

import lottieJson from '/public/card.json'

export default function Card_Animation() {
  return (
    <Lottie
      loop
      animationData={lottieJson}
      play
      style={{ width: 300, height: 250 }}
    />
  )
}