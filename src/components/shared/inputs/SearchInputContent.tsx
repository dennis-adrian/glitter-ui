import { SyntheticEvent } from 'react';

export type SearchOptions =
  | Array<{ id: string | number; displayName: string }>
  | undefined;

type Props = {
  show: boolean;
  options?: SearchOptions;
  onSelect: (e: SyntheticEvent<HTMLLIElement>) => void;
};

const SearchInputContent = ({ show, options, onSelect }: Props) => {
  let items;
  if (!options?.length) {
    items = (
      <li className="disabled">
        <span>No se encontraron resultados</span>
      </li>
    );
  } else {
    items = options!.map((option) => (
      <li key={option.id} value={option.id} onClick={onSelect}>
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

export default SearchInputContent;
