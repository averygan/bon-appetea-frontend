import React from 'react'
import styles from './ShopTopBar.module.css'
import SearchBar from '../SearchBar/SearchBar'
import LocationBar from '../LocationBar/LocationBar'

function ShopTopBar({noLoc, bgColor, locColor, searchColor, setQuery, query}) {

  return (
    <header className={`${styles["ShopTopBar"]}`}
            style={{
                backgroundColor: bgColor,
                }}>
        {!noLoc && <LocationBar color={locColor}/>}
        <div className={styles["SearchBarContainer"]}>
            <SearchBar placeholder="Search for shops and restaurants" bgColor={searchColor} setQuery={setQuery} query={query}/>
        </div>        
    </header>
  )
}

export default ShopTopBar