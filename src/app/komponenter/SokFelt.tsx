import {
    Search,
    SearchInput,
    SearchClear,
    SearchButton,
} from "@digdir/designsystemet-react";

export default function SokFelt(){
    return (
        <div className="flex justify-center items-center mt-4">
            <Search data-color="brand1" className="w-[30rem] border-2 border-black">
                <SearchInput aria-label="Søk" className="unset"  />
                <SearchClear />
                <SearchButton className="bg-blue-600 text-white p-4 rounded-sm hover:text-gray-200"/>
            </Search>
        </div>
    )
}