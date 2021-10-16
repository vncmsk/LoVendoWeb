import React from 'react'
import '../../styles/gestionVendedores.css'
import Header from '../../components/encabezado/encabezado';


const gestionVendedores = () => {
    return (
        <div>

            <body>

                <header>
                    <Header />

                    <br />

                    <div
                        className="p-2 border w-75 m-auto p-3 mb-2 bg-warning text-black mt-6 d-xl-block d-lg-block d-sm-none text-center">
                        <h1>Gestion de vendedores</h1>
                    </div>

                </header>

                {/* -- OffCanvas -- */}

                <div className="container">
                    <div className=" d-grid gap-2 d-md-flex col-md-4 offset-md-7 justify-content-md-end">
                        <button className="btn btn-warning me-md-2 m-3" type="button" data-bs-toggle="offcanvas"
                            data-bs-target="#offcanvas" aria-controls="offcanvas">
                            Agregar nuevo vendedor
                        </button>
                    </div>

                    <div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvas" aria-labelledby="offcanvasLabel">

                        <div className="offcanvas-header">
                            <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas"
                                aria-label="Close">
                            </button>
                        </div>

                        <form className="form-signin">
                            <h1 className="h3 mb-2 fw-normal text-center">Nuevo vendedor</h1>
                            <br />
                            <div className="form-floating">
                                <input className="form-control" id="floatingInput" placeholder="Nombre de usuario" />
                                <label for="floatingInput">Nombre de usuario</label>
                            </div>

                            <hr />

                            <div className="form-floating">
                                <input className="form-control" id="floatingInput" placeholder="Nombre completo" />
                                <label for="floatingInput">Nombre completo</label>
                            </div>

                            <div className="form-floating">
                                <input className="form-control" id="floatingInput" placeholder="Fecha de nacimiento" />
                                <label for="floatingInput">Fecha de nacimiento</label>
                            </div>

                            <div className="form-floating">
                                <input className="form-control" id="floatingInput" placeholder="Edad" />
                                <label for="floatingInput">Edad</label>
                            </div>

                            <div className="form-floating">
                                <input className="form-control" id="floatingInput" placeholder="Cédula" />
                                <label for="floatingInput">Cédula</label>
                            </div>

                            <div className="form-floating">
                                <input className="form-control" id="floatingInput" placeholder="Teléfono" />
                                <label for="floatingInput">Teléfono</label>
                            </div>

                            <div className="form-floating">
                                <input className="form-control" id="floatingInput" placeholder="Correo electrónico" />
                                <label for="floatingInput">Correo electrónico</label>
                            </div>

                            <hr />

                            <div className="form-floating">
                                <input className="form-control" id="floatingInput" placeholder="Cargo" />
                                <label for="floatingInput">Cargo</label>
                            </div>

                            <div className="form-floating">
                                <input className="form-control" id="floatingInput" placeholder="Fecha de contratación" />
                                <label for="floatingInput">Fecha de contratación</label>
                            </div>

                            <br />

                            <div className="d-grid gap-2 d-md-block text-center">
                                <button className="w-50 btn btn-warning btn-primary" type="submit">Agregar</button>
                            </div>
                        </form>
                    </div>
                </div>


                {/* --lista de vendedores-- */}

                <div className="row justify-content-center">

                    <div className="card w-75 p-3 border border-secondary">
                        <h5 className="card-header fs-2 bg-transparent">Andres</h5>
                        <div className="card-body">
                            <p className="card-text me-md-2">
                                <ul>
                                    <li className="fw-normal">Cargo: ########</li>
                                    <li className="fw-normal">Cédula: ########</li>
                                    <li className="fw-normal">Correo electronico: #########</li>
                                </ul>
                            </p>

                            <div className=" d-grid gap-2 d-md-flex justify-content-md-end">
                                <button type="button" className="btn btn-warning me-md-2 col-2">Editar</button>
                                <button type="button" className="btn btn-warning me-md-2 col-2">Eliminar</button>
                            </div>
                        </div>
                    </div>

                    <div className="card w-75 p-3 border border-secondary">
                        <h5 className="card-header fs-2 bg-transparent">Maria</h5>
                        <div className="card-body">
                            <p className="card-text me-md-2">
                                <ul>
                                    <li className="fw-normal">Cargo: ########</li>
                                    <li className="fw-normal">Cédula: ########</li>
                                    <li className="fw-normal">Correo electronico: #########</li>
                                </ul>
                            </p>

                            <div className=" d-grid gap-2 d-md-flex justify-content-md-end">
                                <button type="button" className="btn btn-warning me-md-2 col-2">Editar</button>
                                <button type="button" className="btn btn-warning me-md-2 col-2">Eliminar</button>
                            </div>
                        </div>
                    </div>

                </div>

                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/js/bootstrap.bundle.min.js"
                    integrity="sha384-/bQdsTh/da6pkI1MST/rWKFNjaCP5gBSY4sEBT38Q/9RBh9AH40zEOg7Hlq2THRZ"
                    crossorigin="anonymous">
                </script>

            </body>
        </div>
    )
}

export default gestionVendedores
