import { Link } from "react-router-dom";

export default function Navbar() {
    return ( 
        <nav className="w-full h-20  flex">
            <div className="w-[50%] flex justify-center">
                <div className="font-mono  w-30 h-12 border-t border-b  flex justify-center items-center md:m-4 text-3xl text-red-500">
                    <h1>DashBase</h1>
                </div>
            </div>
            <div className=" w-[50%]  flex items-center  ">
                <ul className="w-full   font-serif text-2xl flex justify-around  ">
                    <li className="hover:border-b hover:text-red-500">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="hover:border-b hover:text-red-500">
                        <Link to="/blogs">Blogs</Link>
                    </li>
                    <li className="hover:border-b hover:text-red-500">
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>
            </div>
        </nav>
     );
}

