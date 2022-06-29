import { useCallback, useEffect, useRef, useState } from 'react'

import logoDesktop from './assets/logo-desktop.svg'
import logoMobile from './assets/logo-mobile.svg'
import cups from './assets/rocket-coffee.png'
import blurTop from './assets/blur-2.png'
import blurBottom from './assets/blur-1.png'
import blurMobile from './assets/blur-mobile.png'

export function App() {
  const navbarRef = useRef<HTMLElement>(null)
  const [isActiveMenu, setIsActiveMenu] = useState(false)
  const toggleMenu = useCallback(() => {
    setIsActiveMenu(value => !value)
  }, [])

  useEffect(() => {
    if (navbarRef && navbarRef.current) {
      const navbarElm = navbarRef.current
      navbarElm.addEventListener('click', e => {
        const clickedElement = e.target as HTMLElement
        if (clickedElement.tagName === 'A') {
          const activeClasses = ['font-bold', 'border-l-brand-500']
          const linkActivesToRemove = [...document.querySelectorAll('[data-link]')]
          linkActivesToRemove.forEach(elm => elm.classList.remove(...activeClasses))
          clickedElement.classList.add(...activeClasses)
        }
      })
    }
  }, [])
  return (
    <div className='relative w-full h-screen table bg-black'>
      <header className='md:flex hidden items-center justify-between h-40 w-full max-w-4xl m-auto'>
        <img className='w-14' src={logoDesktop} alt='Logo desktop' />
        <nav className='flex text-white items-center gap-8 text-sm'>
          <a href='#'>Home</a>
          <a href='#'>Menu</a>
          <a href='#'>Recompensas</a>
          <a href='#'>Gift Cards</a>
          <a href='#'>Lojas</a>
        </nav>
        <button className='z-20 w-44 h-9 border border-brand-500 rounded text-white uppercase font-extrabold text-xs hover:bg-brand-500 transition-colors'>Pegar meu café</button>
      </header>
      <header className='md:hidden w-full h-24 flex items-center justify-between px-6 border-b border-zinc-800 border-solid'>
        <img src={logoMobile} alt='Logo Mobile' />
        <button onClick={toggleMenu} className={`w-12 h-12 flex flex-col items-end justify-center gap-1 ${isActiveMenu ? 'after:absolute before:absolute gap-0 after:w-6 after:rotate-45 before:-rotate-45' : 'after:w-4'} after:h-[2px] after:origin-center before:origin-center after:bg-brand-500 before:w-6 before:h-[2px] before:bg-brand-500`}></button>
      </header> 
      <aside className={`${isActiveMenu ? 'block' : 'hidden'} w-full h-screen bg-black absolute left-0 top-24 z-30`}>
        <nav ref={navbarRef} className='flex flex-col w-full text-white items-start justify-center text-sm font-normal'>
          <a data-link className='relative w-full h-12 flex items-center px-8 border-b border-b-zinc-800 border-l-transparent font-bold border-l-2 border-l-brand-500 hover:border-l-brand-500 transition-colors' href='#'>Home</a>
          <a data-link className='relative w-full h-12 flex items-center px-8 border-b border-b-zinc-800 border-l-2 border-l-transparent hover:border-l-brand-500 transition-colors' href='#'>Menu</a>
          <a data-link className='relative w-full h-12 flex items-center px-8 border-b border-b-zinc-800 border-l-2 border-l-transparent hover:border-l-brand-500 transition-colors' href='#'>Recompensas</a>
          <a data-link className='relative w-full h-12 flex items-center px-8 border-b border-b-zinc-800 border-l-2 border-l-transparent hover:border-l-brand-500 transition-colors' href='#'>Gift Cards</a>
          <a data-link className='relative w-full h-12 flex items-center px-8 border-b border-b-zinc-800 border-l-2 border-l-transparent hover:border-l-brand-500 transition-colors' href='#'>Lojas</a>
        </nav>
      </aside>
      <section className='text-white flex flex-col items-center w-fit m-auto md:text-8xl text-4xl font-bold px-11 z-20'>
        <section className='md:hidden flex flex-col items-center w-full h-full leading-[0] py-24'>
          <span className='font-semibold text-3xl text-center mb-20'>O café que fará seu código decolar para o próximo nível.</span>
          <button className='z-20 w-44 h-9 border border-brand-500 rounded text-white uppercase font-extrabold text-xs hover:bg-brand-500 transition-colors'>{'Pegar meu café >'}</button>
        </section>
        <span>Great Coffee</span>
        <span className='stroke-text'>{'<Great Code/>'}</span>
      </section>
      <img className='relative m-auto mt-4 md:w-[45%] w-full block z-[1]' src={cups} alt='Imagem de copos' />
      <img className='md:block hidden absolute top-0 right-0 w-2/5' src={blurTop} alt='Imagem blur top' />
      <img className='md:block hidden absolute bottom-0 left-0' src={blurBottom} alt='Imagem blur bottom' />
      <img className='absolute md:hidden block bottom-0 left-0 right-0 w-full' src={blurMobile} alt='Imagem blur mobile' />
    </div>
  )
}
