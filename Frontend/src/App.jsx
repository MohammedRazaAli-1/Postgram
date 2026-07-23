import {BrowserRouter , Routes , Route} from 'react-router-dom'

import PostFeed from './pages/postFeed'

import UploadPost from './pages/uploadPost'

function App() {

  return (
  <>

    <BrowserRouter>

      <Routes>
    
        <Route path='/upload-post' element={<UploadPost />} />
    
        <Route path='/post-feed' element={<PostFeed />} />
    
      </Routes>
    
    </BrowserRouter>
    
  </>
  
  )

}

export default App
