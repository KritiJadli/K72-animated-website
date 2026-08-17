import gsap from 'gsap'
import { useRef } from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

const Agence = () => {

  const imagedivRef = useRef(null)
  const imageRef = useRef(null)
  const imageArray = [
    'https://k72.ca/images/teamMembers/Carl_480x640.jpg?w=480&h=640&fit=crop&s=f0a84706bc91a6f505e8ad35f520f0b7',
    'https://k72.ca/images/teamMembers/Olivier_480x640.jpg?w=480&h=640&fit=crop&s=c13569c0753117d04f1a93cf7b446d64',
    'https://k72.ca/images/teamMembers/ChantalG_480x640.jpg?w=480&h=640&fit=crop&s=13093769c4a19cecd291ddcccd898991',
    'https://k72.ca/images/teamMembers/Michele_480X640.jpg?w=480&h=640&fit=crop&s=ce85dc6d140947736baa739d0e59dab2',
    'https://k72.ca/images/teamMembers/MEL_480X640.jpg?w=480&h=640&fit=crop&s=07c9bfee89816720b873e6748a276af6',
    'https://k72.ca/images/teamMembers/CAMILLE_480X640_2.jpg?w=480&h=640&fit=crop&s=74317575b2d72fd11c5296615c383e4a',
    'https://k72.ca/images/teamMembers/MEGGIE_480X640_2.jpg?w=480&h=640&fit=crop&s=3604b19f8fc7b40f517954147698d847',
    'https://k72.ca/images/teamMembers/joel_480X640_3.jpg?w=480&h=640&fit=crop&s=1cadbf143b3aa916b1b414464acbb4d6'

  ]

  gsap.registerPlugin(ScrollTrigger, useGSAP)

  useGSAP(() => {

    gsap.to(imagedivRef.current, {

      scrollTrigger: {
        trigger: imagedivRef.current,
        markers: true,
        start: 'top 28%',
        end: '+=1600px',
        scrub: true,
        pin: true,
        onUpdate: (elem) => {
          let imageIndex
          if (elem.progress < 1) {
            imageIndex = Math.floor(elem.progress * imageArray.length)
          }
          else {
            imageIndex=imageArray.length-1
          }
          imageRef.current.src= imageArray[imageIndex]
          // console.log(Math.round(elem.progress));
          
        }
      }
    })

  }, [])

  return (
    <div>

      <div
        ref={imagedivRef}
        className="rounded-3xl h-[40vh] w-[15vw] absolute top-20 left-[30vw]"
      >
        <img
          ref={imageRef}
          className="h-full object-cover w-full rounded-2xl "
          src="https://k72.ca/images/teamMembers/Carl_480x640.jpg?w=480&h=640&fit=crop&s=f0a84706bc91a6f505e8ad35f520f0b7"
        />
      </div>

      <div className="font-Lausanne">

        <div className="relative mt-[50vh] flex flex-col gap-2">
          <h1 className="text-[16vw] uppercase leading-[12vw] text-center font-bold tracking-wider">
            SEVEN7Y
            <br />
            TWO
          </h1>
        </div>

        <div className="pl-[50%] mt-20">
          <p className="text-4xl flex flex-col -translate-x-[20%] font-bold ">
            &nbsp;&nbsp;&nbsp;&nbsp;
            We’re inquisitive and open-minded, and we make sure creativity
            crowds out ego from every corner. A brand is a living thing,
            with values, a personality and a story. If we ignore that, we
            can achieve short-term success, but not influence that goes the
            distance. We bring that perspective to every brand story we
            help tell.
          </p>
        </div>

      </div>

    </div>
  )
}

export default Agence