import { motion } from "framer-motion"
import { styles } from '../styles'
import { staggerContainer } from '../utils/motins'


const SectionWrapper = (Component, idName) => function HOC() {
    return (
        <motion.section
            variants={staggerContainer()}
            initial='hidden'
            whileInView={"show"}
            viewport={{ once: true, amount: 0.25 }}
            className={`${styles.padding} mx-auto relative max-w-7xl`}
        >
            <span className='hash-span' id={idName}></span>
            <Component />
        </motion.section>
    )
}

export default SectionWrapper