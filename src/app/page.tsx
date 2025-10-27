import "@digdir/designsystemet-css/index.css";
import "@digdir/designsystemet-theme";


import {
  Search,
  SearchInput,
  SearchClear,
  SearchButton,
} from "@digdir/designsystemet-react";

export default function Home() {
  return (
    <>
      <Search data-color="brand1" data-size="sm">
        <SearchInput aria-label="Søk"/>
        <SearchClear />
        <SearchButton />
      </Search>
    </>
  );
}
