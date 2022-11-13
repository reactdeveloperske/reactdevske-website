import React from 'react';
import Lottie from 'react-lottie';
import animationData from '../../../public/lotties/animated-logo.json';

type LogoType = {
  size: number;
};

const lottieOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
};

export default function Logo({ size }: LogoType) {
  return <Lottie width={size} height={size} options={lottieOptions} />;
}
