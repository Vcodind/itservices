export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Wooden Enterprise</h3>
            <p className="text-gray-400">
              Providing reliable IT services and server maintenance solutions since 2010.
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-400 hover:text-white transition">Home</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition">Services</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-white transition">About Us</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white transition">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Services</h4>
            <ul className="space-y-2">
              <li className="text-gray-400">Server Maintenance</li>
              <li className="text-gray-400">IT Support</li>
              <li className="text-gray-400">Cloud Solutions</li>
              <li className="text-gray-400">Network Security</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Contact Info</h4>
            <address className="text-gray-400 not-italic">
              <p>12, Mallinath Complex,
                Opp.</p> 
                <p>Sujata Flats, Jain Colony,
                Shahibag, </p>
              <p>Ahmedabad, Gujarat – 380004</p>
              <p>Email: wooden.ent@hotmail.com</p>
              <p>Phone: +91 99782 32537</p>
            </address>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>© {new Date().getFullYear()} Wooden Enterprise. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}