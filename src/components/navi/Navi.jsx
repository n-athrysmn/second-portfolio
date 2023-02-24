import { useState, React } from 'react'
import './navi.css'
import { FaUserGraduate, FaUserAlt } from "react-icons/fa"
import { BsFillHouseFill, BsHouseDoor } from "react-icons/bs"
import { RiProjector2Line,  RiProjector2Fill } from "react-icons/ri"
import { BrowserRouter as Router } from 'react-router-dom'

const Navi = () => {

    const [selected, setSelected] = useState(0);
    const handleClick = (activated) => () => {
      setSelected(activated);
    }

    return (
        <Router>
            <nav className='NavbarMenu'>
                <ul className='MenuList'>
                    <li><a onClick={handleClick(1)} className={selected === 1 ? 'nav-items active' : 'nav-items' } href="#home">{selected === 1 ? <BsFillHouseFill/>  : <BsHouseDoor/>}<span>home</span></a></li>
                    <li><a onClick={handleClick(2)} className={selected === 2 ? 'nav-items active' : 'nav-items' }  href="#about">{selected === 2 ? <FaUserGraduate/> : <FaUserAlt/>}<span>about</span></a></li>
                    <li><a onClick={handleClick(3)} className={selected === 3 ? 'nav-items active' : 'nav-items' }  href="#projects">{selected === 3 ? <RiProjector2Fill/> : <RiProjector2Line/>}<span>projects</span></a></li>
                    {/* <li><a className='nav-items' href="#contacts"><FaPhoneAlt/> Contacts</a></li>
                    <li><a className='nav-items' href="https://api.whatsapp.com/send?phone=60192549717&text=Hi%20Athira!" target={'_blank'} rel={'noreferrer'}><FaWhatsapp/></a></li>
                    <li><a className='nav-items' href="https://www.linkedin.com/in/noraathira/" target={'_blank'} rel={'noreferrer'}><FaLinkedinIn/></a></li> */ }
                </ul>
            </nav>
        </Router>
    )
}

export default Navi