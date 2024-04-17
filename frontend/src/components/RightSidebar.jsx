import { FaSearch } from "react-icons/fa";
import Avatar from "react-avatar";

const RightSidebar = () => {
  return (
      <div className="w-[20%]">
          <div className='mt-[1rem] bg-gray-100 rounded-md'>
              <div className="flex gap-2 items-center py-2 px-4">
                  <FaSearch size={18}/>
                  <input type="text" placeholder="Search" className="bg-gray-100 outline-none border-none w-full"/>
              </div>
          </div>
          <div className="mt-[1rem] ">
              <h2 className="font-bold text-md">People you may know</h2>
              <div className="mt-[1rem]">
                  
                  <div className="flex justify-between mb-4">
                    <div className="flex gap-2 items-start">
                            <Avatar googleId="118096717852922241760" size="30" round={true} />
                        <div>
                            <h4 className="text-sm font-semibold">Gauri Sharma</h4>
                            <p className="text-gray-400 text-sm">@gaurisharma_1122</p>
                      </div>
                    </div>
                      <button className="px-4 py-2 text-white bg-blue-600 rounded-md text-sm font-semibold hover:bg-blue-500">Follow</button>
                  </div>
                  <div className="flex justify-between mb-4">
                    <div className="flex gap-2 items-start">
                            <Avatar googleId="118096717852922241760" size="30" round={true} />
                        <div>
                            <h4 className="text-sm font-semibold">Gauri Sharma</h4>
                            <p className="text-gray-400 text-sm">@gaurisharma_1122</p>
                      </div>
                    </div>
                      <button className="px-4 py-2 text-white bg-blue-600 rounded-md text-sm font-semibold hover:bg-blue-500">Follow</button>
                  </div>

                  <div className="flex justify-between mb-4">
                    <div className="flex gap-2 items-start">
                            <Avatar googleId="118096717852922241760" size="30" round={true} />
                        <div>
                            <h4 className="text-sm font-semibold">Gauri Sharma</h4>
                            <p className="text-gray-400 text-sm">@gaurisharma_1122</p>
                      </div>
                    </div>
                      <button className="px-4 py-2 text-white bg-blue-600 rounded-md text-sm font-semibold hover:bg-blue-500">Follow</button>
                  </div>
                  
                  
                      
                  
              </div>
          </div>
      </div>
      
  )
}

export default RightSidebar