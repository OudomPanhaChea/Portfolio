import Image, { StaticImageData } from 'next/image';
import React from 'react'

interface SkillProps {
  label: string;
  image: StaticImageData;
}

const SkillsCard: React.FC<SkillProps> = ({ label, image }) => {
  return (
    <div className='flex-center flex-col gap-2'>
      <div className={`w-16 h-16 flex-center`}>
        <Image src={image} alt={label} className={`${label === 'CSS3' ? 'scale-70' :''}`}/> 
      </div>
      <h3 className='text-sm lg:text-base font-semibold'>{label}</h3>
    </div>
  )
}

export default SkillsCard
