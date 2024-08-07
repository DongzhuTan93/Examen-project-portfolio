
const FormInput = ({
  inputLabel,
  labelFor,
  inputType,
  inputId,
  inputName,
  placeholderText,
  ariaLabelName
}) => {
  return (
		<div className="font-general-regular mb-4">
			<label
				className="block text-lg text-primary-dark mb-1"
				htmlFor={labelFor}
			>
				{inputLabel}
			</label>
			<input
				className="w-full px-5 py-2 border border-gray-300 border-opacity-50 text-primary-dark bg-ternary-light rounded-md shadow-sm text-md"
				type={inputType}
				id={inputId}
				name={inputName}
				placeholder={placeholderText}
				aria-label={ariaLabelName}
				required
			/>
		</div>
  )
}

export default FormInput
