import styles from "./navbar.module.css"
import cb from "classnames"
import { Link } from "react-router-dom"

import arrowdown from "../../assets/images/icon-arrow-down.svg"
import DropdownCompany from "../dropdown/DropdownCompany"
import DropdownFeatures from "../dropdown/DropdownFeatures"

import menu from "../../assets/images/icon-menu.svg"
import closeMenu from "../../assets/images/icon-close-menu.svg"
import { useState } from "react"
export default function Navbar() {
  const [toggle, setToggle] = useState(true)


  function handleToggle() {
    setToggle(!toggle)
  }

  return (
    <nav className={cb(styles.navbar, "container")}>
      <Link className={cb(styles.brand)} to="/">snap</Link>
      {
        toggle && (
          <div className={cb(styles.overly)}></div>
        )
      }
      <ul className={cb(styles.ul_links, toggle ? styles.show: "")}>
        <div className={styles.close_menu}>
        <img onClick={handleToggle} src={closeMenu} alt="" srcset="" />
        </div>
        <li className={cb(styles.nav_item)}>
          <Link className={cb(styles.nav_links)} to="/">Features</Link>
          <span className={cb("arrow")}><img src={arrowdown} alt="" srcSet="" /></span>
          <div className={cb(styles.dropdown_content)}>
            <DropdownCompany />
          </div>
        </li>
        <li className={cb(styles.nav_item)}>
          <Link className={cb(styles.nav_links)} to="/">Company </Link>
          <span className={cb("arrow")}><img src={arrowdown} alt="" srcSet="" /></span>
          <div className={cb(styles.dropdown_content)}>
            <DropdownFeatures />
          </div>
        </li>
        <li className={cb(styles.nav_item)}><Link className={cb(styles.nav_links)} to="/">Careers </Link></li>
        <li className={cb(styles.nav_item)}><Link className={cb(styles.nav_links)} to="/">About </Link></li>
      <div className={cb(styles.connect)}>
        <Link className={cb(styles.nav_links)} to="/">Login</Link>
        <Link to="/" className={cb(styles.nav_links, styles.register_link)}>Register</Link>
      </div>
      </ul>

      <div className={cb(styles.hamber_menu)}>
        <img onClick={handleToggle} src={menu} alt="" srcSet="" />
      </div>
    </nav>
  )
}
