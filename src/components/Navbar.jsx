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
                    <li className="hover:border-b hover:text-red-600">
                        <Link to="/home">Home</Link>
                    </li>
                    <li className="hover:border-b hover:text-red-600">
                        <Link to="/blogs">Sobre</Link>
                    </li>
                    <li className="hover:border-b hover:text-red-600">
                        <Link to="/contact">Noticias</Link>
                    </li>
                    <li className="hover:border-b hover:text-red-600">
                        <Link to="/contact">Contato</Link>
                    </li>
                </ul>
            </div>
        </nav>
     );
}

