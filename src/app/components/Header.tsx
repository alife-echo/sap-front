import { FaSearch, FaSignOutAlt, FaHome, FaLayerGroup, FaCloudUploadAlt, FaEnvelope } from 'react-icons/fa';
import '../globals.css';

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
          <figure>
            <div className='st-blue'>
              <FaHome size={25} />
            </div>
          </figure>
          <figure>
          <div className='st-blue'>
              <FaLayerGroup size={25} />
          </div>
          </figure>
          <figure>
            <div className='st-blue'>
              <FaCloudUploadAlt size={25} />
            </div>
          </figure>
          <figure>
            <div className='st-blue'>
              <FaEnvelope size={25} />
            </div>
          </figure>
          <figure>
            <form action="/logout" method="post">
              <button type="submit">
                <FaSignOutAlt size={25} />
              </button>
            </form>
          </figure>
        </div>
      </nav>
    </header>
  );
}

export default Header;