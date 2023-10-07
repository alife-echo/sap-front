import react from 'react'
import '../globals.css';
import { FaRegCopyright } from 'react-icons/fa'

function Footer () {
    return(
        <footer className="flex">
            <p>
            COPYRIGHT <span><FaRegCopyright size={16}/></span> 2021-2023 - SAP TODOS OS DIREITOS RESERVADOS
            </p>
      </footer>
    )
}


export default Footer