import React from "react"
import { Link } from "gatsby"
import "../css/main.css"
import layoutStyles from "../css/layout.module.css"
import "../css/modeTogglerStyles.css"
import Social from "./social"
import { ThemeToggler } from "gatsby-plugin-dark-mode"
import "@fortawesome/fontawesome-free/css/all.css"
const Header = () => (
  <ThemeToggler>
    {({ theme, toggleTheme }) => {
      if (theme === null) {
        return null
      }

      return (
        <header>
          <nav className={layoutStyles.nav}>
            <div className="container">
              <div className={layoutStyles.navContainer}>
                <Link to="/" className={layoutStyles.brand}>
                  <i className="fas fa-home"></i>
                </Link>
                <div className={layoutStyles.navLinks}>
                  <Link to="/blog/">Blog</Link>
                  <Link to="/projects/">Projects</Link>
                  <Link to="/articles/">Articles</Link>
                  <div className="modeToggler">
                    <button
                      onClick={() =>
                        toggleTheme(theme === "light" ? "dark" : "light")
                      }
                    >
                      <div></div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </header>
      )
    }}
  </ThemeToggler>
)

const Main = ({ children }) => (
  <div className={layoutStyles.main}>{children}</div>
)

const Footer = () => (
  <footer className={layoutStyles.footer}>
    <div className="container">
      <div className={layoutStyles.footerLinks}>
        <Social />
      </div>
      <p>All materials &copy; Danilo Del Busso 2020</p>
    </div>
  </footer>
)

const Layout = ({ children }) => {
  React.useEffect(() => {
    const defineVh = () => {
      let vh = window.innerHeight * 0.01
      document.documentElement.style.setProperty("--vh", `${vh}px`)
    }

    defineVh()
    window.addEventListener("resize", defineVh)
  }, [])

  return (
    <>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </>
  )
}

export default Layout
