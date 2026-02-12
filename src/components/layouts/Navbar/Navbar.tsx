import NavbarTitle from '@/components/common/NavbarTitle/NavbarTitle'
import { ThemeController } from '@/components/common/ThemeController/ThemeController'


function Navbar() {
  return (
    <header className='py-4 px-8 shadow-sm border-b flex items-center justify-between'>
     <NavbarTitle/>
     <ThemeController/>
    </header>
  )
}

export default Navbar