import styles from "./dropdown.module.css"
import cb from 'classnames'
import { Link } from "react-router-dom"

export default function DropdownFeatures() {
  return (
    <ul className={cb(styles.dropdown)}>
      <li><Link className={cb(styles.drop_item)} to="/">History</Link></li>
      <li><Link className={cb(styles.drop_item)} to="/">Our Team</Link></li>
      <li><Link className={cb(styles.drop_item)} to="/">Blog</Link></li>
    </ul>
  )
}
