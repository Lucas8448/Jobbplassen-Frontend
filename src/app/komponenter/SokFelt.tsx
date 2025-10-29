import {
  Search,
  SearchInput,
  SearchClear,
  SearchButton,
} from "@digdir/designsystemet-react";

export default function SokFelt() {
  return (
    <div className="flex justify-center items-center mt-6 mb-10">
    <div className="w-[400px] flex justify-center items-center border-2 border-black rounded-md text-white focus-within:border-black">
        <Search>
        <SearchInput 
            aria-label="Søk" 
            className="text-black pl-2 border-none focus:ring-0 focus:outline-none"
        />
        <SearchClear />
        <SearchButton className="bg-blue-600 hover:text-gray-200" />
        </Search>
    </div>
    </div>

  );
}
