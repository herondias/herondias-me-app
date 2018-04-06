import React, { Fragment } from 'react'

const Footer = porps => {
    return (
        <Fragment>
            <footer class="footer text-center" id="contact">
                <div class="container">
                    <div class="row">

                        <div class="col-md-4 mb-5 mb-lg-0">
                            <h4 class="text-uppercase mb-4">Location</h4>
                            <p class="lead mb-0">Salvador, Bahia - Brazil</p>
                        </div>

                        <div class="col-md-4 mb-5 mb-lg-0">
                            <h4 class="text-uppercase mb-4">Around the Web</h4>
                            <ul class="list-inline mb-0">
                                <li class="list-inline-item">
                                    <a class="btn btn-outline-light btn-social text-center rounded-circle" href="https://www.facebook.com/hsdias" target="_blank">
                                        <i class="fa fa-fw fa-facebook"></i>
                                    </a>
                                </li>
                                <li class="list-inline-item">
                                    <a class="btn btn-outline-light btn-social text-center rounded-circle" href="https://twitter.com/herondias" target="_blank">
                                        <i class="fa fa-fw fa-twitter"></i>
                                    </a>
                                </li>
                                <li class="list-inline-item">
                                    <a class="btn btn-outline-light btn-social text-center rounded-circle" href="https://www.linkedin.com/in/heronsouzadias/" target="_blank">
                                        <i class="fa fa-fw fa-linkedin"></i>
                                    </a>
                                </li>
                                <li class="list-inline-item">
                                    <a class="btn btn-outline-light btn-social text-center rounded-circle" href="https://github.com/herondias" target="_blank">
                                        <i class="fa fa-fw fa-github"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div class="col-md-4">
                            <h4 class="text-uppercase mb-4">Contact</h4>
                            <p class="lead mb-0">
                                herondias@gmail.com <br />
                                +55 71 9 9252-7971
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
        </Fragment>
    )
}

export default Footer