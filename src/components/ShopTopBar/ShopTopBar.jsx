import React from 'react'
import styles from './ShopTopBar.module.css'
import SearchBar from '../SearchBar/SearchBar'
import LocationBar from '../LocationBar/LocationBar'

function ShopTopBar({noLoc, bgColor, locColor, searchColor, borderSize}) {

  return (
    <header className={`${styles["ShopTopBar"]} bg-[${bgColor}] border-b-${borderSize}`}>
        {!noLoc && <LocationBar color={locColor}/>}
        <div className={styles["SearchBarContainer"]}>
            <SearchBar placeholder="Search for shops and restaurants" bgColor={searchColor}/>
        </div>        
    </header>
  )
}

export default ShopTopBar