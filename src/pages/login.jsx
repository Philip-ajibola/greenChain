import { useState } from "react";
import googleImg from "../assets/unnamed-removebg-preview 1.png";

const Login = () => {
    const [isInvestor, setIsInvestor] = useState(false);
    const [isFarmer, setIsFarmer] = useState(false);
    const [isAgreed, setIsAgreed] = useState(false);
    const [showWarning, setShowWarning] = useState(false);

    const handleButtonClick = () => {
        if (!isAgreed) {
            setShowWarning(true);
        } else {
            setShowWarning(false);
            alert("Form submitted successfully!");
        }
    };

    return (
        <main className="flex items-center justify-center w-full min-h-screen bg-background1 text-white">
            <div className="flex flex-col w-[90%] md:w-[60%] rounded-md bg-background lg:w-[30%] px-4 py-6 border-2 border-white items-center gap-3">
                <p className="font-bold text-2xl">Login</p>
                <p className="font-semibold text-sm font-sans">
                    Unlock opportunities by investing and earning - all in one place.
                </p>
                <div className="flex gap-2 self-start">
                    <input
                        type="checkbox"
                        className="bg-green-900"
                        checked={isInvestor}
                        onChange={() => {
                            setIsInvestor(!isInvestor);
                            if (!isInvestor) setIsFarmer(false);
                        }}
                    />
                    <p className="font-semibold text-sm font-sans">Sign in as an investor</p>
                </div>
                <div className="flex gap-2 self-start">
                    <input
                        type="checkbox"
                        className="bg-green-900"
                        checked={isFarmer}
                        onChange={() => {
                            setIsFarmer(!isFarmer);
                            if (!isFarmer) setIsInvestor(false);
                        }}
                    />
                    <p className="font-semibold text-sm font-sans">Sign in as a farmer</p>
                </div>
                <div
                    className={`flex gap-2 items-center justify-center py-2 w-full border-2 rounded-md border-white ${
                        isInvestor || isFarmer ? "hover:px-2 hover:py-2.5 hover:bg-green-700 transition-all duration-300" : "opacity-50 cursor-not-allowed"
                    }`}
                >
                    <img src={googleImg} alt="Google" />
                    <button
                        onClick={handleButtonClick}
                        disabled={!(isInvestor || isFarmer)}
                        className="text-white"
                    >
                        Sign in with Google
                    </button>
                </div>
                <div className="flex gap-2 self-start">
                    <input
                        type="checkbox"
                        className="bg-green-900"
                        checked={isAgreed}
                        onChange={() => setIsAgreed(!isAgreed)}
                    />
                    <p className="font-semibold text-sm font-sans">
                        I agree to Terms of Service and Privacy Policy
                    </p>
                </div>
                {showWarning && !isAgreed && (
                    <p className="text-red-500 text-sm font-semibold">
                        You must agree to the Terms of Service and Privacy Policy.
                    </p>
                )}
            </div>
        </main>
    );
};

export default Login;
