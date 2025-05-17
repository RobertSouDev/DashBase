import { Link } from "react-router-dom";

export default function Navbar() {
    return ( 
        <nav className="bg-white w-full h-20 md:h-48   flex font-light  fixed top-0 z-50">
            <div className="w-[50%] flex justify-center items-center">
                <div className="font-serif      flex justify-center items-center md:m-4 text-3xl text-red-600">
                    <h1 >Lima Investimentos</h1>
                </div>
            </div>
            <div className=" w-[50%]  flex items-center p-4  ">
                <ul className="w-full   font-serif text-2xl flex justify-around  ">
                    <li className="relative inline-block group hover:text-red-700">
                        <Link to="/">Home</Link>
                        <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-red-600 transition-all duration-500 group-hover:w-full"></span>
                    </li>
                    <li className="relative inline-block group hover:text-red-700">
                        <Link to="/blogs">Sobre</Link>
                        <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-red-600 transition-all duration-500 group-hover:w-full"></span>
                    </li>
                    <li className="relative inline-block group hover:text-red-700">
                        <Link to="/contact">Noticias</Link>
                        <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-red-600 transition-all duration-500 group-hover:w-full"></span>
                    </li>
                    <li className="relative inline-block group hover:text-red-700">
                        <Link to="/contact">Contato</Link>
                        <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-red-600 transition-all  duration-500 group-hover:w-full"></span>
                    </li>
                </ul>
            </div>
        </nav>
     );
}

