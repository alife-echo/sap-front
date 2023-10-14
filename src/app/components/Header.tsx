import { FaSearch, FaSignOutAlt, FaHome, FaLayerGroup, FaCloudUploadAlt, FaEnvelope } from 'react-icons/fa';
import '../globals.css';
import Tooltip from '@mui/material/Tooltip';



function Header() {
  return (
    <header className="on">
      <nav>
        <h1 className="title-home">SAP</h1>
        <div className="form-group fg--search">
          <form method="GET" action="filter-cards">
            <input
              type="text"
              className="input-filter"
              name="filterSearch"
              placeholder="Informações sobre o achado"
            />
            <button type="submit">
              <FaSearch size={25}/>
            </button>
          </form>
        </div>
        <div className="menu-toggle">
          <div className="one"></div>
          <div className="two"></div>
          <div className="three"></div>
        </div>
        <div className="imgs-link">
          <Tooltip title='Página principal'>
          <figure>
              <FaHome size={25} />
          </figure> 
          </Tooltip>
          <Tooltip title='Meus perdidos'>
          <figure>
          
              <FaLayerGroup size={25} />
          </figure>
          </Tooltip>
          <Tooltip title='Enviar item perdido'>
          <figure>

              <FaCloudUploadAlt size={25} />
            
          </figure>
          </Tooltip>
          <Tooltip title='Minhas mensagens'>
          <figure>
            
              <FaEnvelope size={25} />
            
          </figure>
          </Tooltip>
          <figure>
            <form action="/logout" method="post">
            <Tooltip title='Sair'>
              <button type="submit">
             
                <FaSignOutAlt size={25} />
            
              </button>
              </Tooltip>
            </form>
          </figure>
        </div>
      </nav>
    </header>
  );
}

export default Header;
