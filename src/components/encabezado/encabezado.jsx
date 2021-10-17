import { Link } from 'react-router-dom';

function Header() {
    return (

        <div>
            <nav className="navbar navbar-expand-md bg-dark navbar-dark">
                
                <Link className="nav-link text-light" to='/reporte'><h4>LoVendo.com</h4></Link>
                    
                <div className="collapse navbar-collapse" id="collapsibleNavbar">
                    <ul className="navbar-nav">

                        <li className="nav-item">
                            <Link className="nav-link" to='/reporte'>Gestion Ventas |</Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to='/vendedores'>Gestion Vendedores |</Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to='/usuarios'>Gestion Usuarios |</Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to='/login'>Cerrar sesion |</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}

export default Header;
