import { User } from "../../types/userTypes";

export type SearchOption = User;

type Props = {
  show: boolean;
  options?: SearchOption[] | undefined;
};

const SearchContent = ({ show, options }: Props) => {
  let items;
  if (!options?.length) {
    items = (
      <li className="disabled">
        <span>No se encontraron resultados</span>
      </li>
    );
  } else {
    items = options!.map((option) => (
      <li key={option.id}>
        <span>{option.displayName}</span>
      </li>
    ));
  }

  return (
    <div className={`dropdown ${show ? 'dropdown-open' : ''}`}>
      <ul
        tabIndex={0}
        className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-full mt-4"
      >
        {items}
      </ul>
    </div>
  );
};

export default SearchContent;
