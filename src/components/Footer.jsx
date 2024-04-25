const Footer = () => {
  return (
    <footer className="bg-[#436850] text-white p-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="col-span-2">
          <h2 className="text-2xl font-bold mb-4">About Ecoyaan</h2>
          <p>
            Ecoyaan is a platform dedicated to promoting sustainability and eco-friendly living. Our mission is to build an eco-conscious community for people and products, offering a range of sustainable products and resources to help you live a greener life.
          </p>
        </div>
        <div className="col-span-1">
          <h2 className="text-2xl font-bold mb-4">Quick Links</h2>
          <ul>
            <li><a href="/" className="hover:text-[#1cb95c]">Home</a></li>
            <li><a href="/about" className="hover:text-[#1cb95c]">About us</a></li>
            <li><a href="/contact" className="hover:text-[#1cb95c]">Contact</a></li>
            <li><a href="/careers" className="hover:text-[#1cb95c]">Careers</a></li>
            <li><a href="/sell" className="hover:text-[#1cb95c]">Sell on Ecoyaan</a></li>
          </ul>
        </div>
        <div className="col-span-1">
          <h2 className="text-2xl font-bold mb-4">Connect with Us</h2>
          <div>
            <a href="#" className="block hover:text-[#1cb95c] mb-2">Facebook</a>
            <a href="#" className="block hover:text-[#1cb95c] mb-2">Twitter</a>
            <a href="#" className="block hover:text-[#1cb95c] mb-2">Instagram</a>
            <a href="#" className="block hover:text-[#1cb95c] mb-2">LinkedIn</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
