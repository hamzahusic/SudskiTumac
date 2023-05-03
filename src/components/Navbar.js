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
              <nav className="flex containter py-5 justify-between px-5 text-lg items-center">
                  <p className="font-bold tracking-wide">{langdb.navTitle}</p>
                  <div>
                  <a href="#contact" className="bg-[#4cc5fd] text-white font-bold py-2 px-10">{langdb.navBtn}</a>
                        <select className="p-2 border-l-[1px] border-gray-500 ml-3" onChange={(e) => handleChange(e)}>
                              <option value="BA">BA</option>
                              <option value="DE">DE</option>
                        </select>
                  </div>
              </nav>
        </div>
  );
}

export default Navbar;
