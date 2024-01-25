import Logo from '../assets/Logo.svg'
import {Button} from './Button'

const Header = () => {
    return ( 
        <header className="flex items-center justify-between py-5 px-32">
        <img src={Logo} alt="" />
 
        <div className='flex items-center gap-8'>
         <a href="#">Início</a>
         <a href="#">Serviços</a>
         <a href="#">Nosso Portfólio</a>
         <Button title='Fale conosco' size= 'sm'/>
        </div>
     </header>
     );
}
 
export default Header;