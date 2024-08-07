import { motion } from 'framer-motion'
import Image from 'next/image'
import { FiArrowDownCircle } from 'react-icons/fi'
import DevelopImage from '../../../public/images/developer.jpg'
import backgroundImage from '../../../public/images/background.png'


function AppBanner () {
  return (
		<motion.section
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ ease: 'easeInOut', duration: 0.9, delay: 0.2 }}
			className="flex flex-col sm:flex-row items-center py-5 ml-20 sm:py-10 mt-5 sm:mt-10 mb-20 px-5 sm:px-10 relative"
			style={{
				backgroundImage: `url(${backgroundImage.src})`,
				backgroundSize: 'cover',
				backgroundPosition: 'center',
				height: '100%', // Ensure it covers the full viewport height
				width: '100%',
			  }}
		>
			<div className="w-full md:w-3/4 text-left mr-10 sm:mb-0">
				<motion.h1
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{
					  ease: 'easeInOut',
					  duration: 0.9,
					  delay: 0.1
					}}
					className="font-general-semibold text-2xl lg:text-3xl xl:text-4xl text-center sm:text-left uppercase"
				>
					Hej, jag heter Dong
				</motion.h1>
				<motion.p
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{
					  ease: 'easeInOut',
					  duration: 0.9,
					  delay: 0.2
					}}
					className="font-general-medium mt-4 text-lg md:text-xl lg:text-2xl xl:text-3xl text-center sm:text-left leading-normal text-gray-500"
				>
					En Full-Stack utvecklare & Design entusiast, baserad i Kalmar, Sverige.
				</motion.p>
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{
					  ease: 'easeInOut',
					  duration: 0.9,
					  delay: 0.3
					}}
					className="flex justify-center sm:block"
				>
					<a
						download="CV.pdf"
						href="/files/CV.pdf"
						className="font-general-medium flex justify-center items-center w-48 sm:w-56 mt-12 mb-6 sm:mb-0 text-lg border border-indigo-200 py-3 sm:py-3 shadow-lg rounded-lg bg-indigo-50 focus:ring-1 focus:ring-indigo-900 hover:bg-indigo-500 text-gray-500 hover:text-white duration-500"
						aria-label="Download Resume"
					>
						<FiArrowDownCircle className="ml-0 sm:ml-1 mr-2 sm:mr-3 h-5 w-5 sn:w-6 sm:h-6 duration-200"></FiArrowDownCircle>
						<span className="text-sm sm:text-lg duration-200">
							Ladda ner mitt  CV
						</span>
					</a>
				</motion.div>
			</div>
			<motion.div
				initial={{ opacity: 0, y: -180 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ ease: 'easeInOut', duration: 0.9, delay: 0.2 }}
				className="w-full sm:w-3/5 text-center sm:text-right mt-20 mr-20"
			>
				<Image
					src={ DevelopImage }
					alt="Developer"
					width={500}
					className="w-full sm:w-auto max-w-full h-auto"
				/>
			</motion.div>
		</motion.section>
  )
}

export default AppBanner
