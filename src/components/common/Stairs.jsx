
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useRef } from 'react'
import { useLocation } from 'react-router-dom'
const Stairs = () => {
  const pathname = useLocation().pathname
  const stairParentRef = useRef(null)

  useGSAP(() => {
    const stairs = gsap.utils.selector(stairParentRef)('.stair')
    const tl = gsap.timeline()

    tl.set(stairParentRef.current, { display: 'flex' })
      .set(stairs, { yPercent: 0 })
      .fromTo(
        stairs,
        { height: 0 },
        { height: '100%', duration: 0.55, stagger: -0.08, ease: 'power2.inOut' },
      )
      .to(stairs, { yPercent: 100, duration: 0.55, stagger: -0.08, ease: 'power2.inOut' })
      .set(stairParentRef.current, { display: 'none' })
      .set(stairs, { yPercent: 0, height: '100%' })
  }, { dependencies: [pathname], scope: stairParentRef })
  return (
    <div>
      <div ref={stairParentRef} className='h-screen w-full fixed top-0 z-20 pointer-events-none' style={{ display: 'none' }}>
        <div className='h-full  w-full flex '>
        <div className='stair h-full w-1/5 bg-black'></div>
        <div className='stair h-full w-1/5 bg-black'></div>
        <div className='stair h-full w-1/5 bg-black'></div>
        <div className='stair h-full w-1/5 bg-black'></div>
        <div className='stair h-full w-1/5 bg-black'></div>
      </div>
    </div>
    </div>
  )
}

export default Stairs
