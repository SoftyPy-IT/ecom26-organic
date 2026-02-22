import React from 'react';
import Image from 'next/image';
interface Props {
  title: string;
  subtitle: string;
  image?: string;
  align?: 'center' | 'left' | 'right';
  color?: string;
}

export default function SectionHeader({ title, subtitle, image, align = "center", color = "[#81b03f]" }: Props) {
  return (
    <div className={`py-12 flex flex-col items-${align} text-${align}`}>
      <div className='relative'>
        <Image src={image || "https://freebw.com/templates/oragnive-v1/images/icons/symbol-02.png"} alt="" width={100} height={100} />
      </div>
      <div className='absolute'>
        <p className={`text-${color} italic text-lg font-bold mb-2`}>{subtitle}</p>
        <h2 className="text-4xl font-bold uppercase">{title}</h2>
      </div>
    </div>
  );
}
