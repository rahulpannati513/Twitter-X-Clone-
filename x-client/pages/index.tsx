import Image from "next/image";
import { Inter } from "next/font/google";
import { FaXTwitter } from "react-icons/fa6";
import { MdHome } from "react-icons/md";
import { BsSearch } from "react-icons/bs";
import { IoNotificationsOutline } from "react-icons/io5";
import { TbMessageShare } from "react-icons/tb";
import { LuSquareSlash } from "react-icons/lu";import { IoListSharp } from "react-icons/io5";
import { PiBookmarkSimpleFill } from "react-icons/pi";
import { SlPeople } from "react-icons/sl";
const inter = Inter({ subsets: ["latin"] });
import { GiCharacter } from "react-icons/gi";
import { TbPremiumRights } from "react-icons/tb";
import { CgMoreO } from "react-icons/cg";

//for making the sidebar we are making a interface to make a list
interface TwitterSidebarButton{
  title:string;
  icon:React.ReactNode; //an icon is an reactnode
}

//
const sidebarMenuItems: TwitterSidebarButton[]=[{
  title:"Home",
  icon:<MdHome />,
},{
  title:"Explore",
  icon:<BsSearch />,
},{
  title:"Notifications",
  icon:<IoNotificationsOutline />,
},{
  title:"Messages",
  icon:<TbMessageShare />,
},{
  title:"Grok",
  icon:<LuSquareSlash />,
},{
  title:"Lists",
  icon:<IoListSharp />,
},{
  title:"Bookmarks",
  icon:<PiBookmarkSimpleFill />,
},{
  title:"Communities",
  icon:<SlPeople />,
},{
  title:"Premium",
  icon:<TbPremiumRights />,
},{
  title:"Profile",
  icon:<GiCharacter />,
},{
  title:"More",
  icon:<CgMoreO />,
},

];

export default function Home() {
  return (
    <div>
      <div className="grid grid-cols-12 h-screen w-screen pl-56 ">
        <div  className="col-span-3  pt-1">
       
       <div className="text-4xl h-fit hover:bg-gray-600  rounded-full p-2  cursor-pointer transition-all">
        <FaXTwitter  />
       </div> 
       <div className="mt-4 font-bold ">
        <ul>{sidebarMenuItems.map(item=>
        <li className="flex justify-start items-center gap-4 text-3xl hover:bg-gray-800 rounded-full px-5 cursor-pointer py-2 w-fit"> 
          <span>{item.title}</span>
          <span>{item.icon}</span>
        </li> 
        )}
        </ul>
        </div>

        </div>
        <div className="col-span-6 border-r-[0.2px] border-r-slate-500  border-l-[0.2px] border-l-slate-500"></div>
        <div className="col-span-3"></div>
      </div>
    </div> 
  );
}
