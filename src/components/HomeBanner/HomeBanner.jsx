import React from 'react'
import styles from './HomeBanner.module.css'
import { Link } from 'react-router-dom'

function HomeBanner() {
  return (
    <div className={styles["wrapper"]}>
      <nav id={styles["homeBanner"]}>
        <ul>
        <li className={styles["banner-row"]}>
            <Link to="/deals">
              <img src="/assets/images/banner-offers.png" alt="Offers"/>panda close
            </Link>
          </li>
          <li className={styles["banner-row"]}><img src="/assets/images/banner-meal.png"  alt="Meal for One"/>Meal for one</li>
          <li className={styles["banner-row"]}><img src="/assets/images/banner-pandamart.png"  alt="pandamart"/>pandamart groceries</li>
          <li className={styles["banner-row"]}><img src="/assets/images/banner-pickup.png"  alt="Pick-up"/>Pick-up</li>
        </ul>
      </nav>
    </div>
  )
}

export default HomeBanner