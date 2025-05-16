export default function Home() {
    return ( 
        <div className="min-h-screen  w-full pt-20">
            <div className="h-auto md:h-[56rem]">
                <div className="h-[55%]  flex items-center justify-center gap-4">
                    <div className="h-80 w-[30%]  text-8xl  flex flex-col justify-end gap-4 bg-fixed">
                        <h1 className="border-b-3 border-red-600 ">Investimento</h1>
                        <h1 className="border-b-3 border-red-600 w-[80%]">No Futuro</h1>
                    </div>
                    <div className="h-80 w-[30%] ">

                    </div>
                </div>
                <div className=" md:w-full  md:h-[45%] bg-[url('./public/home.avif')] bg-cover md:bg-[center_top_60%] bg-fixed">

                </div>
            </div>
            <div className="  flex md:justify-center font-serif">
                    <div className=" md:w-[40%] p-10 ">
                        <h3 className="text-red-600 font-light">Lima Investimentos - Sobre</h3>
                        <p className="text-5xl font-normal ">
                            Sou um título. Clique aqui para editar e adicionar o seu próprio texto. É fácil! Basta clicar em "Editar Texto" ou clicar duas vezes sobre mim e você poderá adicionar o seu próprio conteúdo.
                        </p>
                    </div>
            </div>

        </div>
     );
}
