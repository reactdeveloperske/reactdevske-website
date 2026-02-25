import Image from 'next/image';
import logo from '../../../public/img/logo.svg';

type LogoType = {
  size: number;
};

export default function Logo({ size }: LogoType) {
  return (
    <Image
      src={logo}
      alt="React developer community Kenya logo"
      width={size}
      height={size}
      className="motion-safe:animate-spin"
      style={{ animationDuration: '10s', width: 'auto', height: 'auto' }}
    />
  );
}
