import '@digdir/designsystemet-css/index.css'
import '@digdir/designsystemet-theme'

import { Search } from '@digdir/designsystemet-react';

export default function Home() {
  return (
    <>
      <Search>
        <Search.Input aria-label='Søk' />
        <Search.Clear />
        <Search.Button />
      </Search>
    </>
  )
}