import styles from "./layout.module.css"
import cb from "classnames"
import Navbar from "../components/navbar/Navbar"

export default function Layout({children}) {
  return (
    <>
      <header><Navbar/></header>
      <main className={cb("container", styles.main)}>{children}</main>
      <footer></footer>
    </>
  )
}
