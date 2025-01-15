import {  Mail, Phone, Home,Facebook,Twitter,Linkedin,Instagram } from 'lucide-react';

const Footer = () => (
    <footer>
      <div className="bg-pink-600 py-4">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white mb-4 md:mb-0">Get connected with us on social networks!</p>
          <div className="flex space-x-6">
            <a href="#" className="text-white hover:text-gray-200"><Facebook /></a>
            <a href="#" className="text-white hover:text-gray-200"><Twitter /></a>
            <a href="#" className="text-white hover:text-gray-200"><Linkedin /></a>
            <a href="#" className="text-white hover:text-gray-200"><Instagram /></a>
          </div>
        </div>
      </div>
  
      <div className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-pink-600 pb-2">Email</h3>
            <div className="space-y-2">
              <div className="flex items-center">
                <Mail className="w-5 h-5 mr-2" />
                <a href="osamudiameojo@gmail.com">osamudiameojo@gmail.com</a>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 mr-2" />
                <a href="nduulenu@gmail.com">nduulenu@gmail.com</a>
              </div>
            </div>
          </div>
  
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-pink-600 pb-2">Phone</h3>
            <div className="space-y-2">
              <div className="flex items-center">
                <Phone className="w-5 h-5 mr-2" />
                <a href="tel:+2348146169103">+234 814 616 9103
                </a>
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 mr-2" />
                <a href="tel:+2347058204192">+234 705 820 4192</a>
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 mr-2" />
                <a href="tel:+2347037110597">+234 703 711 0597 </a>
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 mr-2" />
                <a href="+2347058132079">+234 705 813 2079</a>
              </div>
            </div>
          </div>
  
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-pink-600 pb-2">Office Address</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <Home className="w-5 h-5 mr-2 mt-1" />
                <span>11 Osaigbovo Street Ugbighoko Benin City, Nigeria.</span>
              </div>
              <div className="flex items-start">
                <Home className="w-5 h-5 mr-2 mt-1" />
                <span>18 Illamoye Street,Ijesha,Surulere,Lagos,Nigeria.</span>
              </div>
            </div>
          </div>
        </div>
  
        <div className="max-w-7xl mx-auto px-4 mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>Copyright © 2025 Oti Tech Technologies Ltd. All right reserved.</p>
        </div>
      </div>
    </footer>
  );
  
  export default Footer