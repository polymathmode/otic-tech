import NavLogo   from "../../assets/images/ot-nav.webp"


const Navbar = () => (
  <nav className="bg-white shadow-md fixed w-full top-0 z-50">
    <div className="max-w-7xl mx-auto px-4">
      <div className="flex justify-between items-center h-16">
        <div className="flex items-center">
            <img src={NavLogo} alt=""
            className='w-3/20 max-h-10' 
            />
          <span className="text-2xl font-bold text-pink-600">Otic Tech </span>
        </div>
        <div className="hidden md:flex space-x-8">
          <a href="#" className="text-gray-700 hover:text-pink-600">Home</a>
          <a href="#" className="text-gray-700 hover:text-pink-600">About</a>
          <a href="#" className="text-gray-700 hover:text-pink-600">Services</a>
          <a href="#" className="text-gray-700 hover:text-pink-600">Products</a>
          <a href="#" className="text-gray-700 hover:text-pink-600">Contact</a>
        </div>
        <button className="bg-pink-600 text-white px-4 py-2 rounded-md hover:bg-pink-700">
           CODE WITH US
        </button>
      </div>
    </div>
  </nav>
);

export default Navbar