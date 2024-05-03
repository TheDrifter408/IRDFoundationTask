import { GiBookPile } from "react-icons/gi";
import { TbBooks } from "react-icons/tb";
type BreadCrumbProps = {
    bookTitle:string;
    bookNumber:number;
    bookName:string;
    bookTitle_ar:string;
    hadis_range:number;
}

export function BreadCrumb({bookTitle,bookNumber,bookName,bookTitle_ar,hadis_range}:BreadCrumbProps){
    return(
        <div className="rounded-xl bg-white">
            <div className="p-3 border-b-2 rounded-t-xl">
                <div className="flex items-center pt-2">
                    <TbBooks style={{color:""}} />
                    <p className="text-gray-500"> &lt; {bookName} &lt; {bookNumber}</p>
                </div>
            </div>
            <div className="flex items-center px-4 py-2 justify-between rounded-xl ">
                <div className="flex items-center gap-2 py-2">
                    <GiBookPile style={{fontSize:"50px",color:"#46B891"}} />
                    <div className="mx-2">
                        <h1 className="text-2xl">{bookTitle}</h1>
                        <h3 className="text-sm">সর্বমোট হাদিস - {hadis_range}</h3>
                    </div>
                </div>
                <div>
                    <h1 className="text-3xl">{bookTitle_ar}</h1>
                </div>
            </div>
        </div>
    )
}