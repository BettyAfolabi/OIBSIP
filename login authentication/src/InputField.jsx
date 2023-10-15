import PropTypes from "prop-types";

const InputField = ({
  label,
  type,
  id,
  name,
  placeholder,
  register,
  error,
  pattern,
  patternMessage,
}) => (
  <div>
    <label htmlFor={id}>{label}</label>
    <div>
      <input
        type={type || "text"}
        id={id}
        placeholder={placeholder}
        {...register(name, {
          required: `${id} is required`,
          pattern: {
            value: pattern,
            message: patternMessage || "Invalid input format",
          },
        })}
      />
      <p className="error">{error?.message}</p>
    </div>
  </div>
);

InputField.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  register: PropTypes.func.isRequired,
  error: PropTypes.object,
  pattern: PropTypes.instanceOf(RegExp),
  patternMessage: PropTypes.string,
  id: PropTypes.string.isRequired,
};

export default InputField;
