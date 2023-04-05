import React from 'react'

import Lottie from 'react-lottie-player'

import lottieJson from '/public/share_link.json'

export default function Share_Link_Animation() {
  return (
    <Lottie
      loop
      animationData={lottieJson}
      play
      style={{ width: 300, height: 300 }}
    />
  )
}