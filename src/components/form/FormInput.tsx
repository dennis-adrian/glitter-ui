import { ChangeEvent } from 'react';

type Props = {
  label: string;
  name: string;
  placeholder?: string;
  required?: boolean;
  value: string;
  onValueChange: ({ field, value }: { field: string; value: string }) => void;
};

const InputField = ({
  label,
  name,
  required,
  onValueChange,
  ...props
}: Props) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    onValueChange({ field: name, value });
  };

  return (
    <div className="form-control w-full mt-2">
      <label className="label">
        <span className="label-text">
          {label}
          <span className="text-red-500">{required && ' *'}</span>
        </span>
      </label>
      <input
        {...props}
        className="input input-bordered input-primary w-full"
        onChange={handleChange}
      />
    </div>
  );
};

export default InputField;
