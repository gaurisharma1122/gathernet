import { FaArrowLeftLong } from "react-icons/fa6";
import Avatar from "react-avatar";
import Post from "../components/Post";

const Profile = () => {
  return (
    <div>
      <div className="py-2 px-4 border-b-2 border-b-gray-100 flex gap-[1rem] items-center">
        <FaArrowLeftLong size={24} className="hover:cursor-pointer"/>
        <div>
          <h2 className="text-lg font-bold">Gauri Sharma</h2>
          <p className="text-sm text-gray-400">210 posts</p>
        </div>
      </div>

      <div>
        <div>
          <div className="w-full relative">
            <img src="https://dummyimage.com/100x100/000/fff" alt="banner" className="w-full h-[12rem]" />
            <div className="inline-block rounded-full p-2 bg-white absolute bottom-[-30%] left-[3%]">
              <Avatar googleId="118096717852922241760" size="100" round={true} />
            </div>
          </div>
          <div className="px-4 py-4 text-right">
            <button className="border-2 border-blue-600 text-blue-600 py-2 px-4 text-md font-semibold rounded-md">Following/Edit Profile</button>
          </div>
          <div className="px-4">
            <h2 className="text-xl font-bold">Gauri Sharma</h2>
            <p className="text-md text-gray-400">@gaurisharma1122</p>
            <p className="mt-2 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente dolorum inventore quisquam temporibus culpa perferendis aspernatur magni non pariatur laborum quo fugit consequatur voluptatem, repellendus, adipisci aperiam. Veniam, incidunt repellendus.</p>
          </div>
          <div className="px-4 py-4 flex gap-[2rem] text-md text-gray-400">
            <span><b className="text-black">242</b> Following</span>
            <span><b className="text-black">34</b> Followers</span>
          </div>
        </div>

        <div className="flex w-full border-b-2 border-b-gray-100 bg-white">
              <div className="w-1/3">
                  <h4 className="text-center py-4 text-md font-bold hover: cursor-pointer border-b-[3px] border-b-white hover:border-b-blue-600 hover:text-blue-600 hover:bg-gray-100">Posts</h4>
              </div>
              <div className="w-1/3">
                  <h4 className="text-center py-4 text-md font-bold hover: cursor-pointer border-b-[3px] border-b-white hover:border-b-blue-600 hover:text-blue-600 hover:bg-gray-100">Following</h4>
          </div>
          <div className="w-1/3">
                  <h4 className="text-center py-4 text-md font-bold hover: cursor-pointer border-b-[3px] border-b-white hover:border-b-blue-600 hover:text-blue-600 hover:bg-gray-100">Followers</h4>
              </div>
          </div>

        <div>
          <Post />
          <Post/>
        </div>

      </div>
    </div>
  )
}

export default Profile