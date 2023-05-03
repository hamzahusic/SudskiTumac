import { useContext } from "react";
import { langContext } from "../lib/langContext";
import { bosDb, deDb } from "../lib/langData";

const Navbar = () => {
  const {langdb,setLangDb} = useContext(langContext);

  const handleChange = (e) => {
      e.target.value === "DE" ? setLangDb(deDb) : setLangDb(bosDb);
  }

  return (
        <div className="fixed top-0 left-0 right-0 shadow-lg bg-white z-[999]">
              <nav className="flex containter py-5 justify-between px-[17px] sm:px-5 md:text-lg items-center">
                  <p className="hidden sm:block font-bold tracking-wide ">{langdb.navTitle}</p>
                  <p className="block sm:hidden font-bold tracking-wide max-w-[40%] break-words">{langdb.navShortTitle}</p>
                  <div>
                        <a href="#contact" className="bg-[#4cc5fd] text-white font-bold py-2 px-5 md:px-10 hover:bg-[#27a6e0]">{langdb.navBtn}</a>
                        <select className="p-1 sm:p-2 border-l-[1px] border-gray-500 ml-2 sm:ml-3" onChange={(e) => handleChange(e)}>
                              <option value="BA">BA</option>
                              <option value="DE">DE</option>
                        </select>
                  </div>
              </nav>
        </div>
  );
}

export default Navbar;
