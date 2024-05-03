import Chapters from "./Chapters";

import { FiHome,FiBookmark,FiGrid  } from "react-icons/fi";
import { GiBookPile } from "react-icons/gi";
import { HiOutlineBookOpen } from "react-icons/hi2";
import { BsSend } from "react-icons/bs";

const icons = [
  {
    id:1,
    icon:<FiHome style={{fontSize:"40px"}} />
  },
  {
    id:2,
    icon:<GiBookPile style={{fontSize:"40px"}} />
  },
  {
    id:3,
    icon:<HiOutlineBookOpen style={{fontSize:"40px"}} />
  },
  {
    id:4,
    icon:<FiBookmark style={{fontSize:"40px"}} />
  },
  {
    id:5,
    icon:<FiGrid style={{fontSize:"40px"}} />
  },
  {
    id:6,
    icon:<BsSend style={{fontSize:"40px"}} />
  }
]
const apiURL = process.env.API_URL;

async function getChapters(){    
    const res = await fetch(`http://localhost:5500/chapter`).then(res => {
        return res.json();
    }).catch( err => {
        console.error("getChapters Error:",err);
    })
    return res;
}

async function getBook(){
    const res = await fetch(`http://localhost:5500/books`).then(
      res => {
        return res.json();
      }
    ).catch(err => {
      console.error('Book Error: ',err);
    })
    return res;
  }
  
  async function getHadith(){
    const res = await fetch(`http://localhost:5500/hadith/sections`).then(
      res => {
        return res.json();
      }
    ).catch(err => {
      console.log("getHadith Error: ",err);
    })
    return res;
  }
  


export default async function Dashboard(){
    const chapters = await getChapters();
    const books = await getBook();
    const hadiths = await getHadith();
    return(
        <div className="lg:ml-4 md:mr-0 md:ml-16 h-screen rounded-xl flex">
          <div className="md:visible xl:visible xl:w-16 lg:invisible lg:w-0 md:invisible md:w-0 sm:invisible sm:w-0 flex flex-col justify-center pr-4">
              {
                icons.map((icon) => (
                  <button className="h-20 2xl:visible 2xl:w-min xl:visible lg:invisible lg:w-0 md:invisible md:w-0  sm:invisible sm:w-0" key={icon.id}>{icon.icon}</button>
                ))
              }
            </div>
            <Chapters books={books} chapters={chapters} hadiths={hadiths}  />
        </div>
    )
}