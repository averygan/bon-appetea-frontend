import React from 'react'
import styles from './HomeBanner.module.css'

function HomeBanner() {
  return (
    <div className={styles["wrapper"]}>
      <nav id={styles["homeBanner"]}>
        <ul>
          <li className={styles["banner-row"]}><img src="/assets/images/banner-offers.png"  alt="Meal for One"/>Offers</li>
          <li className={styles["banner-row"]}><img src="/assets/images/banner-meal.png"  alt="Meal for One"/>Meal for one</li>
          <li className={styles["banner-row"]}><img src="/assets/images/banner-pandamart.png"  alt="pandamart"/>pandamart groceries</li>
          <li className={styles["banner-row"]}><img src="/assets/images/banner-pickup.png"  alt="Pick-up"/>Pick-up</li>
        </ul>
      </nav>
    </div>
  )
}

export default HomeBanner