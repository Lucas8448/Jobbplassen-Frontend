import {
  Search,
  SearchInput,
  SearchClear,
  SearchButton,
} from "@digdir/designsystemet-react";

export default function SokFelt() {
  return (
    <div className="flex justify-center items-center">
      <div className="w-60 flex justify-center items-center border-2 border-black-600 rounded-md">
        <Search>
          <SearchInput aria-label="Søk" />
          <SearchClear />
          <SearchButton className="bg-blue-600 hover:text-gray-200" />
        </Search>
      </div>
    </div>
  );
}
