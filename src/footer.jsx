
import logo from './assets/logo-white.png'

const Footer = () => {
  return (
    <footer className="bg-gray-800 xl:px-6 py-12 text-white">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="col-span-1 md:col-span-1 text-center md:text-left">
            <a href="https://inarcons.com/" className="mb-6" rel="home">
              <img  src={logo} className='h-13 w-auto' alt="#" decoding="async" 
              />
            </a>
            <p className='mt-6 text-left'>One stop shop for your building materials,
            professionals, and networks</p> 
          </div>
          <div className=" hidden col-span-1 md:col-span-2 text-center md:text-left grid grid-cols-1 md:grid-cols-3 gap-4">


          <section id="nav_menu-11" className="widget widget_nav_menu">
          <h2 className="widget-title text-2xl font-bold">Our Main Services</h2><nav className="menu-our-main-services-container" aria-label="Our Main Services"><ul id="menu-our-main-services" className="menu"><li id="menu-item-866" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-866"><a href="#" className="menu-link">Sample Preparation</a></li>
          <li id="menu-item-867" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-867"><a href="#" className="menu-link">Healthcare Labs</a></li>
          <li id="menu-item-868" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-868"><a href="#" className="menu-link">Advanced Microscopy</a></li>
          <li id="menu-item-869" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-869"><a href="#" className="menu-link">Chemical Research</a></li>
          <li id="menu-item-870" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-870"><a href="#" className="menu-link">Pathology Testing</a></li>
          </ul></nav>
        </section>
        <section id="nav_menu-12" className="widget widget_nav_menu"><h2 className="widget-title text-2xl font-bold">Useful Links</h2><nav className="menu-useful-links-container" aria-label="Useful Links"><ul id="menu-useful-links" className="menu"><li id="menu-item-871" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-871"><a href="#" className="menu-link">About Our Lab</a></li>
          <li id="menu-item-872" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-872"><a href="#" className="menu-link">Customer Insight</a></li>
          <li id="menu-item-873" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-873"><a href="#" className="menu-link">Free Consultation</a></li>
          <li id="menu-item-875" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-875"><a href="#" className="menu-link">Meet Our Team</a></li>
          <li id="menu-item-876" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-876"><a href="#" className="menu-link">Our Services</a></li>
          </ul></nav>
        </section>
        <section id="nav_menu-10" className="widget widget_nav_menu"><nav className="menu-links-container" aria-label="Menu"><ul id="menu-links" className="menu"><li id="menu-item-877" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-877"><a href="#" className="menu-link">Scientific</a></li>
          <li id="menu-item-878" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-878"><a href="#" className="menu-link">Chemistry</a></li>
          <li id="menu-item-879" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-879"><a href="#" className="menu-link">Gemological</a></li>
          <li id="menu-item-2532" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-2532"><a href="#" className="menu-link">Privacy Policy</a></li>
          <li id="menu-item-881" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-881"><a href="#" className="menu-link">Testimonials</a></li>
</ul></nav></section>

          </div>
        </div>
      </div>
      <div className="container mx-auto mt-16">
	      <p className="text-left">Copyright © 2025 Powered by <a href='https://indomaber.com' target='_blank'>Indomaber.com</a></p>
      </div>
    </footer>
  )
}
export default Footer