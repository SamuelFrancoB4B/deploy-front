import Image from 'next/image'
import styles from './Hero.module.css'

const Hero = () => {
  return (
    <div className="relative h-screen bg-cover bg-center" style={{ backgroundImage: `url('/qw5.jpg')` }} >
      <div className="container absolute inset-0 flex justify-between">
          <div className='z-10 flex flex-col items-stretch justify-center'>
            <Image src="/HeroPhoto.png" alt="hero" height={700} width={700}/>
          </div>
          <div className='z-10 flex flex-col items-center justify-center'>
            <h1 style={{ textShadow: '8px 8px 12px rgba(0, 0, 0, 0.7)' }} className='text-white text-right' >The best place <br/> to get your phone</h1>
          </div>
      </div>
    </div >
  )
}

export default Hero