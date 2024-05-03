"use client"
import { bookType, chapterType, hadithType } from "@/types"
import { useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import { GiOpenBook } from "react-icons/gi";
import { BsMoonStarsFill } from "react-icons/bs";
import {FiCopy, FiBookmark, FiShare2, FiAlertOctagon, FiArrowUpRight } from 'react-icons/fi'
import { Switch } from "@headlessui/react";
import { BreadCrumb } from "./BreadCrumb";
import { Chapter } from "./Chapter";

const buttons = [
    {
        id:1,
        icon:<FiCopy style={{color:"rgb(148 163 184)",fontSize:"25px"}} />
    },
    {
        id:2,
        icon:<FiBookmark style={{color:"rgb(148 163 184)",fontSize:"25px"}} />
    },
    {
        id:3,
        icon:<FiShare2 style={{color:"rgb(148 163 184)",fontSize:"25px"}} />
    },
    {
        id:4,
        icon:<FiAlertOctagon style={{color:"rgb(148 163 184)",fontSize:"25px"}} />
    },
    {
        id:5,
        icon:<FiArrowUpRight style={{color:"rgb(148 163 184)",fontSize:"25px"}} />
    }
]



type ChaptersProp = {
    books:bookType[];
    chapters:chapterType[];
    hadiths:hadithType[];
}

export default function Chapters({books,chapters,hadiths}:ChaptersProp){
    
    const [isBook,setBook] = useState(true)
    const [chapter,setChapter] = useState({
        chapterTitle:'',
        chapterNumber:''
    })

    function whichBook(book:bookType) {
        return book;
    }

    function whichChapter(chapter:chapterType){
        return chapter;
    }

    return(
        <div className="grid 2xl:grid-cols-4 2xl:col-span-3 xl:grid-cols-3 xl:col-span-3 xl:gap-4 lg:gap-1 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 lg:w-full md:w-full rounded-t-xl bg-slate-100 py-5 pl-0 pr-6">
            <div className="border rounded-t-xl border-slate-200 bg-white ml-8 2xl:visible 2xl:w-4/5 2xl:h-full xl:invisible xl:w-0 xl:h-0 lg:invisible lg:w-0 lg:h-0 md:invisible md:w-0 md:h-0 sm:invisible sm:w-0 sm:h-0">
                <div className="flex items-center justify-between border border-b-2 border-slate-200 rounded-t-xl border-t-0 border-x-0">
                    <button onClick={() => setBook(true)} className={`${isBook ? 'text-white bg-emerald-600' : 'bg-white' } font-semibold  py-3 px-2 w-1/2 rounded-tl-xl rounded-bl-0 rounded-tr-0 rounded-br-0`}>বই</button>
                    <button onClick={() => setBook(false)} className={`font-semibold ${isBook === false ? 'text-white bg-emerald-600' : 'bg-white'} py-3 px-2 w-1/2 rounded-tr-xl rounded-br-0 rounded-tl-0 rounded-bl-0`}>অধ্যায়</button>
                </div>
                <div className="m-2">
                    <form className="w-full flex justify-center">
                        <IoSearchOutline style={{backgroundColor:"rgb(241 245 249)",color:"rgb(148 163 184)",fontSize:"52px",padding:"10px",borderTopLeftRadius:"0.5rem",borderBottomLeftRadius:"0.5rem",borderWidth:"0px",borderColor:"rgb(226 232 240)",borderRight:"none"}} />
                        <input className="w-5/6 bg-slate-100 text-slate-400 p-3 rounded-r-xl" placeholder="Seach For Filter" type="search" name="chapter-search" id="chapter-search" />
                    </form>
                </div>
                <div className="my-1 p-1">
                    <ul>
                        {
                            isBook ? (
                               books && books.map((book:bookType) => (
                                    <li key={book.id}>
                                        <button onClick={() => whichBook(book)} className="w-full">
                                            <Chapter id={book.id} title={book.title} subtitle={`সর্বমোট হাদিস - ${book.number_of_hadis}`} />
                                        </button>
                                    </li>
                                ))
                            ) : (
                                chapters.map((chapter:chapterType) => (
                                    <li key={chapter.id}>
                                        <button onClick={() => whichChapter(chapter)} className="w-full">
                                            <Chapter id={chapter.id} title={chapter.title} subtitle={`হাদিসের রেঞ্জ: ${chapter.hadis_range}`} />
                                        </button>
                                    </li>
                                ))
                            )
                        }
                    </ul>
                </div>
            </div>
            <div className="rounded-t-xl xl:col-span-3 2xl:col-span-2 lg:col-span-2 md:col-span-3 h-screen overflow-y-scroll w-full scroll-smooth customScrollbar">
                <section>
                    <BreadCrumb bookName={books && books[0].book_name} bookTitle={books[0].title} bookNumber={books[0].id} bookTitle_ar={books[0].title_ar} hadis_range={books[0].number_of_hadis}  />
                    <div className="bg-white my-4 py-4 px-4 flex items-center gap-4 rounded-xl">
                        <h1 className="bg-emerald-600 px-3 py-1 rounded-xl text-white font-semibold">
                            {chapters[0].number}
                        </h1>
                        <h1 className="font-medium">{chapters[0].title}</h1>
                    </div>
                </section>
                {
                    hadiths && hadiths.map((hadith:hadithType) => (
                        <section key={hadith.hadith_id} className=" rounded-xl my-4">
                            <div className="bg-white flex items-center gap-2 py-2 px-4 rounded-t-xl">
                                <GiOpenBook style={{fontSize:"35px",color:`${hadith.grade_color}`}} />
                                <h1 className="font-semibold">{hadith.number}</h1>
                            </div>
                            <div className="bg-white rounded-b-xl py-4">
                            {
                                hadith.preface.length !== 0 ? (
                                    <div className="py-2 px-4">
                                        <p className="py-2 border-b-2 font-semibold text-sm">{hadith.title}</p>
                                        <p className="py-2 text-sm">{hadith.preface}</p>
                                    </div>
                                ) : (
                                    <div>
                                        <p className="px-4 font-semibold">{hadith.number}</p>
                                    </div>
                                )
                            }
                            </div>
                            <div className="bg-white my-4 px-4 rounded-xl">
                                <div className="flex items-center lg:justify-between md:justify-between sm:justify-between gap-4 my-1">
                                    <div className="flex items-center gap-4 py-4">
                                    <BsMoonStarsFill style={{fontSize:"20px",color:`${hadith.grade_color}`}} />
                                    <h1 lang="bn">{hadith.hadith_id}</h1>
                                    </div>
                                    <div className="2xl:invisible xl:invisible lg:visible py-4">
                                    <span className="bg-emerald-500 px-3 py-1.5 rounded-xl text-white ">{hadith.grade}</span>
                                    </div>
                                </div>
                                <p className="text-xl font-normal" dir="rtl" lang="ar">{hadith.ar_diacless}</p>
                                <div>
                                    <p className="text-emerald-600 font-semibold text-sm my-2">{hadith.narrator}</p>
                                    <p lang="bn" className="py-2 text-sm    leading-relaxed">{hadith.bn}</p>
                                </div>
                                <div className="mt-6 flex items-center justify-between">
                                    <h1>হাদিসের মান : <span className="bg-emerald-500 px-3 py-1.5 rounded-xl text-white">{hadith.grade}</span></h1>
                                    <div className="flex items-center gap-8">
                                        {
                                            buttons.map((button) => (
                                                <button key={button.id}>{button.icon}</button>
                                            ))
                                        }
                                    </div>
                                </div>
                            </div>
                        </section>
                    ))
                }
            </div>
            <div className="rounded-xl lg:visible md:invisible md:w-0 lg:w-full">
                <div className="bg-white rounded-xl p-4">
                    <h1 className="py-4 text-xl text-center">সেটিংস</h1>
                    <div>
                        <h3>আরবি ফন্ট সিলেক্ট করুন</h3>
                        <select className="w-full px-2 py-4 text-xl border border-green rounded-xl" name="font-select" id="font-select">
                            <option value="KFGQ">KFGQ</option>
                            <option value="me-quran">Me Quran</option>
                            <option value="al-mushaf">Al Mushaf</option>
                            <option value="amiri">Amiri</option>
                            <option value="arial">Arial</option>
                        </select>
                    </div>
                    <div>
                        <h3 className="font-medium py-4">এরাবিক ফন্ট সাইজ</h3>
                        <div className="w-full flex items-center justify-between">
                            <input className="w-5/6" min="18" max="40" type="range" name="ar-font-size" id="ar-font-size" />
                            <h3 className="px-2 font-semibold">22</h3>
                        </div>
                        <h3 className="font-medium py-4">অনুবাদ ফন্ট সাইজ</h3>
                        <div className="w-full flex items-center justify-between">
                           <input className="w-5/6" type="range" name="bn-font-size" id="bn-font-size" min="14" max="25" /> 
                           <h3 className="px-2 font-semibold">17</h3>
                        </div>
                        <div className="flex items-center justify-between px-2 py-4">
                            <p>নাইট মোড</p>
                            <Switch checked={false} onChange={() => {return false}} className="bg-gray-200 relative inline-flex h-6 w-11 items-center rounded-full">
                                <span className="translate-x-1 inline-block h-4 w-4 transform rounded-full bg-white transition" />   
                            </Switch>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col justify-center rounded-xl bg-emerald-500 my-4 px-4 py-4">
                    <h1 className="text-2xl text-white">আপনিও সদাকায়ে জারিয়াতে অংশ নিন</h1>
                    <p className="text-white py-4">আপনার দান, সেটা ছোট হলেও, ইসলামের বার্তা ও হাদিস প্রচারে সহায়তা করবে। আমাদের কাজের অংশ হতে এবং এই গুরুত্বপূর্ণ কাজে সাহায্য করতে আমাদের প্রজেক্টে হাদিয়া দিন। ইনশাআল্লাহ এটি সদাকায়ে জারিয়াহ হিসেবে আল্লাহ্‌র কাছে কবুল হবে।</p>
                    <button className="rounded-xl bg-white py-2 px-4 text-emerald-600 w-1/3 place-self-center">সাপোর্ট করুন</button>
                </div>
            </div>
        </div>    
    )
}