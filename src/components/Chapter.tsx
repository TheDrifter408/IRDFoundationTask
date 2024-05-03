
type ChapterProp = {
    id:number;
    title:string;
    subtitle:string;
}

export function Chapter({id,title,subtitle}:ChapterProp){
    return(
        <div className="flex items-center gap-4 px-4 rounded-xl py-5 bg-emerald-50">
            <div className="rounded-xl rotate-45 bg-emerald-600 px-4 py-2">
                <p className="text-white -rotate-45">{id}</p>
            </div>
            <div>
                <h2 className="text-black">{title}</h2>
                <h4 className="text-slate-400 xl:text-xs md:text-xs sm:text-xs">{subtitle}</h4>
            </div>
        </div>
    )
}
