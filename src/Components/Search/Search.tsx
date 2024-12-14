import React, {
  useState,
  useEffect,
} from "react";
import { useDebounce } from "use-debounce";

interface Props {
  handleSearchChange: (e: string) => void;
}

const Search: React.FC<Props> = ({
  handleSearchChange,
}: Props): JSX.Element => {
  const [text, setText] = useState("");
  const [debouncedValue] = useDebounce(text, 500);

  useEffect(() => {
    handleSearchChange(debouncedValue);
  }, [debouncedValue]);

  return (
    <section className="relative bg-gray-100">
      <div className="max-w-4xl mx-auto p-6 space-y-6">
        <form
          className="form relative flex flex-col w-full p-10 space-y-4 bg-darkBlue rounded-lg md:flex-row md:space-y-0 md:space-x-3"
        >
          <input
            className="flex-1 p-3 border-2 rounded-lg placeholder-black focus:outline-none"
            id="search-input"
            placeholder="Search companies"
            onChange={(e) => {
              setText(e.target.value);
            }}
          ></input>
        </form>
      </div>
    </section>
  );
};

export default Search;
