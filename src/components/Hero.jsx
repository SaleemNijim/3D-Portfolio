import { motion } from "framer-motion";
import { styles } from '../styles'
import { ComputersCanvas } from "./canvas"
import { useEffect, useState } from "react";

const Hero = () => {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {

    const mediaQuery = window.matchMedia('(max-width:500px)')
    setIsMobile(mediaQuery.matches)

    const handelMediaQueryChange = (event) => {
      setIsMobile(event.matches)
    }
    mediaQuery.addEventListener('change', handelMediaQueryChange)
    return () => {
      mediaQuery.removeEventListener('change', handelMediaQueryChange)
    }

  }, [])

  return (
    // Main section
    <section className="relative w-full h-screen mx-auto">
      {/* Container Div */}
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>

        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]"> </div>
          <div className="w-1 sm:h-80 h-40 violet-gradient"></div>
        </div>


        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>Hi, I'm <span className="text-[#915eef]">Saleem</span></h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>I specialize in creating dynamic user interfaces,<br className="sm:block hidden" /> and responsive web applications. </p>
        </div>
        {/*  */}
      </div>
      {/* Coumputer Canvas */}
      <ComputersCanvas />


      <div className={`${isMobile ? 'bottom-[50px]' : ''} absolute xs:bottom-[-10px] bottom-52 w-full flex justify-center items-center cursor-pointer`}>
        <a href='#about' className=" cursor-pointer">
          <div className="w-[28px] h-[50px]  border-2 rounded-full  border-secondary flex justify-center items-start p-2 ">
            <motion.div
              animate={{
                y: [0, 24, 0]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop'
              }}
              className="w-2 h-2 rounded-full bg-secondary mb-1 "
            />
          </div>
        </a>
      </div>


    </section>
  )
}

export default Hero