type Props = {
  label: string;
  placeholder?: string;
  required?: boolean;
};

const InputField = ({ label, placeholder, required }: Props) => {
  return (
    <div className="form-control w-full max-w-xs">
      <label className="label">
        <span className="label-text">
          {label}
          <span className="text-red-500">{required && ' *'}</span>
        </span>
      </label>
      <input
        type="text"
        placeholder={placeholder}
        className="input input-bordered input-primary w-full max-w-xs"
      />
    </div>
  );
};

export default InputField;
