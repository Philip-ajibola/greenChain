import logo from '../assets/image 77.png'

const DashBoardHeader = ()=>{
    return(
        <main className="hidden md:flex items-center gap-3 border-b-1 border-white w-full bg-background1 py-6 px-4">
            <img className="" src={logo} alt="logo"/>
            <p className="text-3xl font-serif font-extrabold text-green-700">GreenChain</p>
        </main>
    )
}

export default DashBoardHeader