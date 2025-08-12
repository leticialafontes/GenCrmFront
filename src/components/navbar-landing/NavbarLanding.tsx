function NavbarLanding() {

    return (
        <>
            <nav className="fixed top-0 w-full z-10 bg-red-900/25 backdrop-filter backdrop-blur-md backdrop-contrast-100 shadow-md border-b border-red-900">
                <div className="max-w-8xl px-10 py-0.5 flex items-center gap-200 justify-center">
                    <div>
                            <a href="#home"><img
                                src="https://ik.imagekit.io/gengrupo03/landing-rh/110_Sem_Titulo_20250808095939.png?updatedAt=1754673913526"
                                alt="Logo da GenRH"
                                className='h-16'
                            /></a>
                        </div>
                    <div className="flex gap-5">
                        <a href="#equipe" className="text-white font-semibold hover:bg-red-800/30 m-0 py-5 px-1">Equipe</a>
                        <a href="#sobre" className="text-white font-semibold hover:bg-red-800/30 m-0 py-5 px-1">Sobre</a>
                        <a href="#tech" className="text-white font-semibold hover:bg-red-800/30 m-0 py-5 px-1">Tech</a>
                        <a href="#futuro" className="text-white font-semibold hover:bg-red-800/30 m-0 py-5 px-1">Futuro</a>
                        <a href="#contato" className="text-white font-semibold hover:bg-red-800/30 m-0 py-5 px-1">Contato</a>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default NavbarLanding