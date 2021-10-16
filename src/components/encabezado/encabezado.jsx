import { Link } from 'react-router-dom';

function Header() {
    return (

        <div>
            <nav className="navbar navbar-expand-md bg-dark navbar-dark">
                
                <Link className="nav-link text-light" to='/reporte'><h4>LoVendo.com</h4></Link>
                    
                <div className="collapse navbar-collapse" id="collapsibleNavbar">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" to='/login'>Inicio</Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to='/reporte'>Reporte de ventas</Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to='/vendedores'>Vendedores</Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to='/usuarios'>Usuarios</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}

export default Header;
