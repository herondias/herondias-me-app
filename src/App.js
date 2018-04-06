import React, { Component, Fragment } from 'react'

import Menu from './layout/Menu'
import Header from './layout/Header'
import Footer from './layout/Footer'
import Contact from './components/Contact'
import About from './components/About'
import Portfolio from './components/Portfolio'


class App extends Component {
  render() {
    return (
      <Fragment>
        <Menu />
        <Header />
        <Portfolio />
        <About />
        {/* <Contact /> */}
        <Footer />
      </Fragment>
    )
  }
}

export default App
