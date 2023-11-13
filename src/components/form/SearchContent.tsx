export type SearchOption = {
  value: string;
  label: string;
};

type Props = {
  show: boolean;
  searchOptions?: SearchOption[];
};

const SearchContent = ({ show, searchOptions }: Props) => {
  let items;
  if (!searchOptions?.length) {
    items = (
      <li className="disabled">
        <span>No se encontraron resultados</span>
      </li>
    );
  } else {
    items = searchOptions!.map((option) => (
      <li className="text-indigo-500" key={option.value}>
        <span>{option.label}</span>
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
