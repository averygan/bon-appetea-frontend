import React, { useContext } from 'react'
import { LocationContext } from '../../contexts/LocationContext'
import { capitalize } from '../../utils/utils'
import styles from './LocationBar.module.css'
import { GrLocation } from 'react-icons/gr'
import { TbShoppingBag } from 'react-icons/tb'

function LocationBar({color}) {
  let { location } = useContext(LocationContext)

  return (
    <section className={`${styles["LocationBar"]}`}
            style={{color: color}}>
        <div className={styles["locLeft"]}>
          <GrLocation/>
          <div>
              <h1>{capitalize(location.name)}</h1>
              <p>{capitalize(location.block)} {capitalize(location.road)}, Singapore {location.postalCode}</p>
          </div>
        </div>
        <TbShoppingBag className="text-2xl" />
    </section>
  )
}

export default LocationBar