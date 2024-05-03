import { TbBooks } from "react-icons/tb";
import { IoMdSettings } from "react-icons/io";
import { IoSearchOutline } from "react-icons/io5";
import { BiDonateHeart } from "react-icons/bi";

export default function Header(){
    return(
        <header className="flex items-center justify-between p-4 md:w-full sm:w-full">
            <div className="flex items-center gap-3">
                <div className="border border-green-700 rounded">
                    <TbBooks style={{color:"rgb(21 128 61)",fontSize:"30px",padding:"3px"}} />
                </div>
                <div className="flex items-center">
                    <div className="lg:invisible lg:h-0 lg:w-0">
                        <h1 className="text-xl font-medium text-green-700">আল হাদিস</h1>
                    </div>
                    <div className="lg:visible md:invisible sm:invisible">
                        <h1 className="font-bold">হাদিস সমূহ</h1>
                        <h5 className="text-sm font-medium">হাদিস পড়ুন শিখুন এবং জানুন</h5>
                    </div>
                </div>
            </div>
            <div className="flex items-center gap-5">
                <form className="flex items-center">
                    <div className="lg:visible md:visible sm:visible">
                    <IoSearchOutline style={{backgroundColor:"rgb(226 232 240)",color:"rgb(148 163 184)",fontSize:"44px",borderRadius:"0.75rem",padding:"10px"}} />
                    </div>
                    <div className="flex xl:visible md:invisible md:w-0 lg:invisible lg:w-0 sm:invisible sm:w-0">
                        <IoSearchOutline style={{backgroundColor:"white",color:"rgb(148 163 184)",fontSize:"52px",padding:"10px",borderTopLeftRadius:"0.5rem",borderBottomLeftRadius:"0.5rem",borderWidth:"2px",borderColor:"rgb(226 232 240)",borderRight:"none"}} />
                        <input className="w-[200px] bg-white py-3 px-1 rounded-l-0 rounded-r border-l-0 border-2 border-slate-200" placeholder="Search Hadith" type="search" name="header-search" id="header-search" />
                    </div>
                </form>
                <div className="flex items-center">
                    <div className="lg:invisible lg:h-0 lg:w-0 md:visible">
                        <button className="bg-green-700 p-1 rounded">
                            <IoMdSettings style={{fontSize:'30px',color:"white",marginInline:"auto",padding:"5px"}} />
                        </button>
                    </div>
                    <div className="md:invisible sm:invisible sm:w-0 sm:h-0 md:w-0 md:h-0 lg:visible lg:w-auto lg:h-auto">
                    <button className="flex items-center gap-1 bg-emerald-600 text-white text-sm font-medium px-4 py-3  rounded">
                        সাপোর্ট করুন
                        <BiDonateHeart style={{fontSize:"25px"}} />
                    </button>
                    </div>
                </div>
            </div>
        </header>
    )
}