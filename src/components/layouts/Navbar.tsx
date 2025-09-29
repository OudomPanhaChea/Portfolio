import { NavLink } from 'react-router-dom'
import { assets } from '../../assets/assets'
import ROUTES from '../../utils/routes'
import { useState } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
const Navbar = () => {
  const [active, setActive] = useState<string>('/');

  useGSAP(() => {
    gsap.from('.navbar', {
      width: '0',
      height: 40,
      opacity: 0,
      ease: 'power1.in',
      duration: 0.6,
    });

    gsap.timeline({
      scrollTrigger: {
        trigger: '.navbar',
        start: 'top top',
        end: '420% top',
        scrub: true,
        markers: true
      }
    }).from('.navbar', {
      backgroundColor: '#28282b',
      ease: 'power1.inOut',
      duration: 1,
    })
  });

  return (
    <>
      <div className="w-full md:container mx-auto fixed bottom-0 md:bottom-auto md:top-3 xl:top-4 left-[50%] translate-x-[-50%] z-50 flex justify-center">
        {/* desktop */} 
        <div id='navbar' className='navbar w-full sm:w-[90%] md:w-[80%] lg:w-[70%] xl:w-[60%] 2xl:w-[55%] mx-2 p-2 lg:mx-4 bg-primary/80 backdrop-blur-sm rounded-full hidden md:flex items-center justify-between'>
          <NavLink to={'/'} className='ml-8'>
            <img src={assets.Logo} className='w-[24px] lg:w-[28px]' alt="logo" />
          </NavLink>

          <div />

          <ul className='text-white flex items-center gap-2 md:gap-4 lg:gap-6 xl:gap-8 text-sm'>
            {ROUTES.map((route, i) => (
              <li key={i}>
                <NavLink 
                  to={route.link}
                  onClick={() => setActive(route.link)} 
                  className={`block px-2 text-white/70 transition hover:text-white/100 ${active === route.link ? 'font-semibold text-white/100' : ''}`}
                >
                  {route.label}
                </NavLink>
              </li>
            ))}
          </ul>

          <div className='h-6 w-0.5 bg-white/70 rounded-full' />
          
          <button className='bg-white font-medium text-primary rounded-full overflow-hidden'>
            <NavLink to={'/hireme'} className='py-2.5 lg:py-3 px-4 lg:px-6 block text-sm'>
              Hire me
            </NavLink>
          </button>
        </div>

        {/* mobile */}
        <div className='w-full px-2 py-3 bg-primary flex md:hidden items-center justify-between'>
          <ul className='text-white w-full flex items-center justify-around text-xs'>
            {ROUTES.map((route, i) => (
              <li key={i} className='w-[60px]'>
                <NavLink 
                  to={route.link}
                  onClick={() => setActive(route.link)} 
                  className={`flex flex-col text-xs items-center gap-2 md:hidden px-2 text-white/70 transition hover:text-white/100 font-light ${active === route.link ? 'text-white/100' : ''}`}
                >
                  {active === route.link ? <route.fillIcon size={route.iconSize} /> : <route.icon size={route.iconSize} />}
                  {route.label}
                </NavLink>
              </li>
            ))}
          </ul>

          <button className='absolute right-3 bottom-[110%] bg-primary font-medium text-white rounded-full overflow-hidden'>
            <NavLink to={'/hireme'} className='py-3 px-4 block text-sm'>
              Hire me
            </NavLink>
          </button>
        </div>
      </div>

      <div className="navbar container mx-auto fixed top-3 left-[50%] translate-x-[-50%] z-50 md:hidden block">
        <NavLink to={'/'} className='ml-3 bg-primary w-[60px] h-[60px] flex items-center justify-center rounded-full'>
          <img src={assets.Logo} className='w-[24px]' alt="logo" />
        </NavLink>
      </div>
    </>
  )
}

export default Navbar
