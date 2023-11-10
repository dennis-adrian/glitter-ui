import InputField from './InputField';
import SelectField from './SelectField';

type Props = {
  fields: {
    label: string;
    placeholder?: string;
    type?: string;
    options?: { value: string; label: string }[];
    required?: boolean;
  }[];
};

const UserForm = ({ fields }: Props) => {
  return (
    <form action="" className="w-full">
      {fields.map((field, index) => {
        if (field.type === 'select') {
          return <SelectField {...field} key={index} />;
        }

        return <InputField {...field} key={index} />;
      })}
    </form>
  );
};

export default UserForm;
