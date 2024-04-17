import Avatar from 'react-avatar';
const CreatePost = () => {
  return (
      <div>
          <div className="flex w-[100%] border-b-2 border-b-gray-100 sticky top-0 bg-white">
              <div className="w-[50%]">
                  <h4 className="text-center py-4 text-lg font-semibold hover: cursor-pointer border-b-[3px] border-b-white hover:border-b-blue-600 hover:text-blue-600 hover:bg-gray-100">For you</h4>
              </div>
              <div className="w-[50%]">
                  <h4 className="text-center py-4 text-lg font-semibold hover: cursor-pointer border-b-[3px] border-b-white hover:border-b-blue-600 hover:text-blue-600 hover:bg-gray-100">Following</h4>
              </div>
          </div>

          <div className='border-b-2 border-b-gray-100'>
          <div className='flex pt-4 px-4 gap-2 items-start '>
              <Avatar googleId="118096717852922241760" size="40" round={true} />
              <textarea name="" id="" rows="2" className='w-full px-2 py-2 outline-none border-none' placeholder='What is happening?' ></textarea>
              </div>
              <div className='text-right px-4 pb-4'>
                  <button className='px-4 py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-500 mt-[1rem]'>
                    Post
                  </button>
              </div>
        </div>
      </div>
      
  )
}

export default CreatePost