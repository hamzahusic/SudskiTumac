const Navbar = () => {

  return (
        <div className="fixed top-0 left-0 right-0 shadow-lg bg-white z-[999]">
              <nav className="flex containter py-5 justify-between px-5 text-lg items-center">
                  <p className="font-bold tracking-wide">Ovlašteni sudski tumač za njemački jezik</p>
                  <a href="#contact" className="bg-[#4cc5fd] text-white font-bold py-2 px-10">Kontakt</a>
              </nav>
        </div>
  );
}

export default Navbar;
