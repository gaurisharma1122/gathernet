import LeftSidebar from './LeftSidebar'
import RightSidebar from './RightSidebar'
import Home from '../pages/Home'
import Profile from '../pages/Profile'
import { Routes, Route } from 'react-router-dom'

const Body = () => {
  return (
    <div className='w-[85%] mx-auto '>
          <div className='flex justify-between'>
            <LeftSidebar />
            <div className='w-[56%] border-l-2 border-r-2 border-l-gray-100 border-r-gray-100'>
              <Routes>
                <Route path='/' element={<Home/>}></Route>
                <Route path='/profile/:id' element={<Profile/>}></Route>
              </Routes>
            </div>
            <RightSidebar />
          </div>
      </div>
  )
}

export default Body