import styles from "./dropdown.module.css"
import cb from 'classnames'
import { Link } from "react-router-dom"
import todo from "../../assets/images/icon-todo.svg"
import calendar from "../../assets/images/icon-calendar.svg"
import reminder from "../../assets/images/icon-reminders.svg"
import planning from "../../assets/images/icon-planning.svg"

export default function DropdownCompany() {
  return (
    <ul className={cb(styles.dropdown)}>
      <li><Link className={cb(styles.drop_item)} to="/"><span><img src={todo} alt="" srcSet="" /></span>Todo List</Link></li>
      <li><Link className={cb(styles.drop_item)} to="/"><span><img src={calendar} alt="" srcSet="" /></span>Calendar</Link></li>
      <li><Link className={cb(styles.drop_item)} to="/"><span><img src={reminder} alt="" srcSet="" /></span>Reminders</Link></li>
      <li><Link className={cb(styles.drop_item)} to="/"><span><img src={planning} alt="" srcSet="" /></span>Planning</Link></li>
  </ul>
  )
}
