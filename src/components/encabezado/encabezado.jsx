import { Link } from 'react-router-dom';

function Header() {
    return (

        <div>
            <nav className="navbar navbar-expand-md bg-dark navbar-dark">

                <Link className="nav-link text-light" to='/reporte'><h4>LoVendo.com</h4></Link>

                <div className="collapse navbar-collapse" id="collapsibleNavbar">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" to='/reporte'>| &nbsp;
                                <i className="fas fa-cart-arrow-down"></i>&nbsp;&nbsp;Gestion ventas&nbsp;</Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to='/vendedores'>| &nbsp;
                                <i className="far fa-address-card"> &nbsp;&nbsp;Gestion vendedores&nbsp;</i></Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to='/usuarios'>| &nbsp;
                                <i className="far fa-user-circle"></i>&nbsp;&nbsp;Gestion usuarios&nbsp;</Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to='/login'>| &nbsp;
                                <i className="fas fa-sign-out-alt"></i>&nbsp;&nbsp;Cerrar sesión</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}

export default Header;
