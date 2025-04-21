import { useState } from 'react'
import loadinggif from './assets/giphy.gif'
import logo from './assets/img/logo-inarcons.png'

const Header = () => {
  const [openMobileMenu, setOpenMobileMenu] = useState(false)
  const [loading, setLoading] = useState(false)

  return (
    <header className='bg-white shadow-sm sticky top-0 z-50 pt-10 xl:px-6 pb-5'>
      <div className={openMobileMenu? "w-full xl:max-w-7xl flex justify-between items-center mx-auto  px-10 pt-4 pb-0" 
        : 'container mx-auto flex justify-between items-center '}>
        <div className='flex justify-items-start items-center gap-6'>
          <a href="https://inarcons.com/" className="custom-logo-link" rel="home">
          {loading  ? 
            <img src={loadinggif} alt='' width="100" height="auto" />
          :
            <img className='h-14' alt='Inarcons Logo' style={{height: '52px'}}
            src={logo} 
            />
          }
          </a>
          <a href="https://inarcons.com/digital-exhibition/megabuild" className="hidden md:flex text-gray-800 text-xl font-bold relative"
          >Digital Exhibition
            <div className='absolute h-1.5 left-0 right-0 bg-amber-400' style={{bottom: '-10px'}}></div>
          </a>
        </div>
        <div className='md:hidden'>
          <button type="button" className={openMobileMenu ? "hidden" : "block"} aria-expanded="false"
            onClick={()=>{setOpenMobileMenu(true)}}
          >            
            <span aria-hidden="true" className="text-emerald-700 ahfb-svg-iconset ast-inline-flex svg-baseline">
              <svg
                  className="ast-mobile-svg ast-menu-svg"
                  fill="currentColor"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24">
                  <path
                      d="M3 13h18c0.552 0 1-0.448 1-1s-0.448-1-1-1h-18c-0.552 0-1 0.448-1 1s0.448 1 1 1zM3 7h18c0.552 0 1-0.448 1-1s-0.448-1-1-1h-18c-0.552 0-1 0.448-1 1s0.448 1 1 1zM3 19h18c0.552 0 1-0.448 1-1s-0.448-1-1-1h-18c-0.552 0-1 0.448-1 1s0.448 1 1 1z"></path>
              </svg>
            </span>
          </button>
          <button className={openMobileMenu ? "block" : "hidden"}
            onClick={()=>{setOpenMobileMenu(false)}}
          >            
            <span aria-hidden="true" className="text-emerald-700 ahfb-svg-iconset ast-inline-flex svg-baseline">
                <svg
                    className="ast-mobile-svg ast-close-svg"
                    fill="currentColor"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24">
                    <path
                        d="M5.293 6.707l5.293 5.293-5.293 5.293c-0.391 0.391-0.391 1.024 0 1.414s1.024 0.391 1.414 0l5.293-5.293 5.293 5.293c0.391 0.391 1.024 0.391 1.414 0s0.391-1.024 0-1.414l-5.293-5.293 5.293-5.293c0.391-0.391 0.391-1.024 0-1.414s-1.024-0.391-1.414 0l-5.293 5.293-5.293-5.293c-0.391-0.391-1.024-0.391-1.414 0s-0.391 1.024 0 1.414z"></path>
                </svg>
              </span>
          </button>
        </div>
      </div>
      <div  className={openMobileMenu ? "block" : "hidden"}>
        <ul className="text-emerald-700 main-header-menu ast-menu-shadow ast-nav-menu ast-flex  submenu-with-border astra-menu-animation-fade  stack-on-mobile">
          <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home menu-item-258 pt-0 pr-10 pb-2 text-right">
            <a href="https://gardamedis.co.id/" className="menu-link">Digital Exhibition</a>
          </li>
        </ul>
      </div>
    </header>
  )
}
export default Header