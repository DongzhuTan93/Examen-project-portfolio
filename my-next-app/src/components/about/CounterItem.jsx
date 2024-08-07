
const CounterItem = ({ title, counter, measurement }) => {
  return (
		<div className="mb-20 sm:mb-0">
			<h2 className="text-4xl text-center text-secondary-dark mb-2">
				{counter} {measurement}
			</h2>
			<span className="font-general-regular block text-xl text-center text-ternary-dark ">
				{title}
			</span>
		</div>
  )
}

export default CounterItem
