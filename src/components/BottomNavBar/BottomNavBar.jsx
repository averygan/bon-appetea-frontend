import React from 'react'
import { NavLink } from 'react-router-dom';
import styles from './BottomNavBar.module.css'
import { FaUtensils } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import { BsShop, BsPerson } from "react-icons/bs";

function BottomNavBar() {
  return (
      <nav id={styles["bottomNavBar"]}>
          <ul>
              <li><NavLink to="/" className={({isActive}) => (isActive ? styles.active : undefined)}><FaUtensils/><p>Food</p></NavLink></li>
              <li><NavLink to="/grocery" className={({isActive}) => (isActive ? styles.active : undefined)}><BsShop/><p>Grocery</p></NavLink></li>
              <li><NavLink to="/search" className={({isActive}) => (isActive ? styles.active : undefined)}><FiSearch/><p>Search</p></NavLink></li>
              <li><NavLink to="/account" className={({isActive}) => (isActive ? styles.active : undefined)}><BsPerson/><p>Account</p></NavLink></li>
          </ul>
      </nav>
  )
}

export default BottomNavBar