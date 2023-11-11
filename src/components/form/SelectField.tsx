type Props = {
  label: string;
  options?: { value: string; label: string }[];
  required?: boolean;
};

const SelectField = ({ label, options, required }: Props) => {
  return (
    <div className="form-control w-full">
      <label className="label">
        <span className="label-text">
          {label}
          <span className="text-red-500">{required && ' *'}</span>
        </span>
      </label>
      <select className="select select-primary w-full">
        <option disabled selected>
          Selecciona un opción
        </option>
        {options?.map((option, index) => (
          <option value={option.value} key={index}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectField;
