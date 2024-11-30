import googleImg from "../assets/unnamed-removebg-preview 1.png"

const Login = ()=> {
    return(
        <main className="flex items-center justify-center w-full min-h-screen bg-background1 text-white">
            <div className="flex flex-col w-[90%] md:w-[60%] rounded-md bg-background lg:w-[30%] px-4 py-6 border-2 border-white items-center gap-3 " >
                <p className="font-bold text-2xl">Login</p>
                <p className="font-semibold text-sm font-sans">Unlock opportunities by investing and earning - all in one place.</p>
                <div className=" flex gap-2 self-start">
                    <input
                        type='checkbox'
                        className="bg-green-900 "
                    />
                    <p className="font-semibold text-sm font-sans">sign in as an investor</p>
                </div>
                <div className=" flex gap-2 self-start">
                    <input
                        type='checkbox'
                        className="bg-green-900"
                    />
                    <p className="font-semibold text-sm font-sans">sign in as an farmer</p>
                </div>

                <div className="flex gap-2 items-center justify-center py-2 w-[100%] border-2  rounded-md border-white hover:px-2 hover:py-2.5 hover:bg-green-700 transition-all duration-300 ">
                    <img src={googleImg} alt={"Google"}/>
                    <p>Sign in with google</p>
                </div>
                <div className=" flex gap-2 self-start">
                    <input
                        type='checkbox'
                        className="bg-green-900"
                    />
                    <p className="font-semibold text-sm font-sans">I agree to Terms of Service and Privacy Policy</p>
                </div>
            </div>
        </main>

    )
}

export default Login;