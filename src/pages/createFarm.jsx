import edit from "../assets/edit-03.png";
import image from "../assets/Vector1.png";
import {Copyright} from "@mui/icons-material";

const CreateFarm = ()=>{
    return(
        <div className="flex items-center justify-center w-full bg-background1 min-h-screen py-8">
            <div className="flex flex-col w-[95%] lg:w-[40%] py-8 rounded-xl border-2 border-white items-center justify-center text-white gap-3 bg-background bg-opacity-80">
                <div
                    className="relative flex items-center flex-col justify-center gap-2 rounded-full h-[120px] w-[120px] border-2 border-white ">
                    <div className="gap-3 flex flex-col items-center justify-center ">
                        <img className="self-center" src={image} alt={"img"}/>
                        <p className="font-bold text-sm">add image</p>
                    </div>
                    <img className="absolute right-3 bottom-0" src={edit} alt={"img"}/>
                </div>
                <div className="flex flex-col w-full px-3 gap-8 lg:gap-12 ">
                    <div className="w-[100%] ml-3">
                        <p>Name <span className="text-red-700 font-extrabold">*</span></p>
                        <input
                            className="px-3 py-3  w-[90%] bg-transparent border-2 border-white rounded-md"
                            type="text"
                            placeholder="Farm Name"
                        />
                    </div>

                    <div className="w-[100%] ml-3">
                        <p>Description <span className="text-red-700 font-extrabold">*</span></p>
                        <input
                            className="px-3 h-[120px] w-[90%] py-3 bg-transparent border-2 border-white rounded-md placeholder:font-bold placeholder-adjust"
                            placeholder="Farm Description"
                        />
                        <p></p>
                    </div>
                    <div className="w-[100%] ml-3">
                        <p>Location<span className="text-red-700 font-extrabold">*</span></p>
                        <input
                           type="text"
                           className="px-3 py-3  w-[90%] bg-transparent border-2 border-white rounded-md placeholder:font-bold "
                           placeholder="Location"
                        />
                    </div>

                    <div className="w-[100%] ml-3">
                        <p>Amount Needed<span className="text-red-700 font-extrabold">*</span></p>
                        <input
                            type="text"
                            className=" self-center  px-3 py-3  w-[90%] bg-transparent border-2 border-white rounded-md placeholder:font-bold "
                            placeholder="$ Amount Needed for Investment"
                        />
                    </div>
                </div>
                <div className="flex gap-3 self-end mr-16">
                    <button
                        className="px-3 py-2 bg-transparent  font-semibold hover:border-y-green-700 hover:border-white hover:rounded-md hover:border-2  transition-all duration-300">Cancel
                    </button>
                    <button
                        className="px-3 py-2 bg-green-700 rounded-md font-semibold hover:bg-green-900 hover:py-3 hover:px-4 transition-all duration-300">Create
                        Farm
                    </button>
                </div>
            </div>
            <Copyright/>
        </div>

    )
}
export default CreateFarm;