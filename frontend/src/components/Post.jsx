import Avatar from 'react-avatar'
import { LuDot } from "react-icons/lu";
import { FaRegHeart, FaRegCommentAlt, FaRegBookmark } from "react-icons/fa";

const Post = () => {
  return (
      <div className='hover: cursor-pointer hover:bg-gray-100 border-b-2 border-b-gray-100'>
          <div className='flex gap-2 items-start py-4 px-4'>
              <Avatar googleId="118096717852922241760" size="40" round={true} />
              <div>
                  <div>
                    <h4 className='text-lg font-semibold'>Gauri Sharma</h4>
                    <div className='flex gap-2'>
                        <span className='text-sm text-gray-400 font-normal'>@gaurisharma_1122</span>
                        <span className='text-sm text-gray-400 flex items-center'><LuDot/>5h</span>
                    </div>
                  </div>
                  <div className='mt-2'>
                      <p className='text-md'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum ex amet pariatur rem maxime laudantium expedita quae, fugiat consequatur, id, provident autem explicabo. Blanditiis a, dolore animi nulla sed facere.</p>
                      <div className='mt-[1rem] w-[80%]'>
                          <img src="https://dummyimage.com/100x100/000/fff" alt="" className='w-full rounded-md'/>
                      </div>
                  </div>
                  <div className='flex gap-[2rem] mt-[1rem]'>
                      <div className='flex gap-1 items-center text-gray-400 hover:text-pink-600'>
                        <FaRegHeart size={18} /> <span className='text-md'>120</span>
                      </div>
                      <div className='flex gap-1 items-center text-gray-400 hover:text-blue-600'>
                        <FaRegCommentAlt size={18}/> <span className='text-md'>12</span>
                      </div>
                      <div className='flex gap-1 items-center text-gray-400 hover:text-black'>
                        <FaRegBookmark size={18}/>
                      </div>
                  </div>
              </div>
          </div>
      </div>
      
  )
}

export default Post