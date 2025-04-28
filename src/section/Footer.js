export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8 md:py-12">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          <div>
            <h3 className="text-xl font-bold mb-3 md:mb-4">Wooden Enterprise</h3>
            <p className="text-gray-400 text-sm md:text-base">
              Providing reliable IT services and server maintenance solutions since 2010.
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-3 md:mb-4">Quick Links</h4>
            <ul className="space-y-1 md:space-y-2">
              <li><a href="#home" className="text-gray-400 hover:text-white transition text-sm md:text-base">Home</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition text-sm md:text-base">Services</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-white transition text-sm md:text-base">About Us</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white transition text-sm md:text-base">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-3 md:mb-4">Services</h4>
            <ul className="space-y-1 md:space-y-2">
              <li className="text-gray-400 text-sm md:text-base">Server Maintenance</li>
              <li className="text-gray-400 text-sm md:text-base">IT Support</li>
              <li className="text-gray-400 text-sm md:text-base">Cloud Solutions</li>
              <li className="text-gray-400 text-sm md:text-base">Network Security</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-3 md:mb-4">Contact Info</h4>
            <address className="text-gray-400 not-italic text-sm md:text-base">
              <p className="mb-1">12, Mallinath Complex, Opp. Sujata Flats,</p>
              <p className="mb-1">Jain Colony, Shahibag,</p>
              <p className="mb-1">Ahmedabad, Gujarat – 380004</p>
              <p className="mb-1">Email: wooden.ent@hotmail.com</p>
              <p>Phone: +91 99782 32537</p>
            </address>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-6 md:mt-8 pt-6 md:pt-8 text-center text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} Wooden Enterprise. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}