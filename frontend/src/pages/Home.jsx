import CreatePost from '../components/CreatePost'
import Post from '../components/Post'

const Home = () => {
  return (
      <div> 
          <CreatePost />
          <Post />
          <Post />
          <Post/>
      </div>
      
  )
}

export default Home