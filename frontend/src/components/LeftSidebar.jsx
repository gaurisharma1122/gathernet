import gathernetLogo from '../assets/gathernet-logo-nobg.png';
import { FaHome, FaHashtag, FaRegBell, FaRegUserCircle, FaRegBookmark } from "react-icons/fa";
import { MdLogout } from "react-icons/md";

const LeftSidebar = () => {
  return (
      <div className='w-[20%]'>
          <div className='mt-[1rem]'>
              <div className='flex justify-center w-full'>
                  <img src={gathernetLogo} alt="Gathernet-logo" width={160} />
              </div>
              <div className='mt-[2rem]'>
                  <div className='flex items-center gap-2 my-2 px-4 py-2 rounded-md cursor-pointer hover:bg-gray-100'>
                    <FaHome size={24}/> <h4 className='font-semibold text-lg'>Home</h4>
                  </div>
                  <div className='flex items-center gap-2 my-2 px-4 py-2 rounded-md cursor-pointer hover:bg-gray-100'>
                    <FaHashtag size={24}/> <h4 className='font-semibold text-lg'>Explore</h4>
                  </div>
                  <div className='flex items-center gap-2 my-2 px-4 py-2 rounded-md cursor-pointer hover:bg-gray-100'>
                    <FaRegBell size={24}/> <h4 className='font-semibold text-lg'>Notifications</h4>
                  </div>
                  <div className='flex items-center gap-2 my-2 px-4 py-2 rounded-md cursor-pointer hover:bg-gray-100'>
                    <FaRegUserCircle size={24}/> <h4 className='font-semibold text-lg'>Profile</h4>
                  </div>
                  <div className='flex items-center gap-2 my-2 px-4 py-2 rounded-md cursor-pointer hover:bg-gray-100'>
                    <FaRegBookmark size={24}/> <h4 className='font-semibold text-lg'>Bookmarks</h4>
                  </div>
                  <div className='flex items-center gap-2 my-2 px-4 py-2 rounded-md cursor-pointer hover:bg-gray-100'>
                    <MdLogout size={24}/> <h4 className='font-semibold text-lg'>Logout</h4>
                  </div>
              </div>
              <div>
                  <button className='px-4 py-2 w-full text-center bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-500 mt-[1rem]'>
                      Post
                  </button>
              </div>
          </div>
      </div>
      
  )
}

export default LeftSidebar