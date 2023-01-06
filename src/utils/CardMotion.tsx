
import { motion } from "framer-motion"
export const CardMotion = ({children}:any) => {
  return (
    <motion.div
    initial={{ opacity: 0}}
    viewport={{ once:true }}
    whileInView={{
      opacity: 1,

      transition: {
        ease: "easeInOut",
        duration: 0.6,
        delay: 0.2,
      },
      
    }}
  >
    {children}
    </motion.div>
  )
}
