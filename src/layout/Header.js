import React, { Fragment } from 'react'

const Header = porps => {
    return (
        <Fragment>
            <header className="masthead bg-primary text-white text-center">
                <div className="container">
                    <img className="img-fluid mb-5 d-block mx-auto rounded-circle" src="img/herondias.jpg" alt="" />
                    <h1 className="text-uppercase mb-0">Fulano</h1>
                    <hr className="star-light" />
                    <h2 className="font-weight-light mb-0">FullStack Developer</h2>
                </div>
            </header>
        </Fragment>
    )
}

export default Header