import { FormEvent, SyntheticEvent, useState } from 'react';

import SearchContent, {
  SearchOptions,
} from 'src/components/shared/inputs/SearchInputContent';

type Props = {
  label?: string;
  labelStyles?: string;
  options?: SearchOptions;
  placeholder?: string;
  onSelect: (selectedId: number) => void;
};

const SearchInput = ({
  label,
  labelStyles,
  options,
  placeholder,
  onSelect,
}: Props) => {
  const [inputText, setInputText] = useState('');
  const [searchedOptions, setSearchedOptions] =
    useState<SearchOptions>(options);

  const handleSearch = (e: FormEvent<HTMLInputElement>) => {
    setInputText(e.currentTarget.value);

    const filtered = options?.filter((option) => {
      return option.displayName
        .toLowerCase()
        .includes(e.currentTarget.value.toLowerCase());
    });

    setSearchedOptions(filtered);
  };

  const handleSelect = (e: SyntheticEvent<HTMLLIElement>) => {
    setInputText('');
    onSelect(e.currentTarget.value);
  };

  return (
    <div aria-label="search input" className="form-control">
      {label && (
        <label className="label">
          <span className={`${labelStyles} label-text`}>{label}</span>
        </label>
      )}
      <input
        type="search"
        className="input input-bordered input-primary w-full"
        placeholder={placeholder}
        value={inputText}
        onChange={handleSearch}
      />
      <SearchContent
        show={!!inputText}
        options={searchedOptions}
        onSelect={handleSelect}
      />
    </div>
  );
};

export default SearchInput;
