import axios from "axios"

import { useEffect, useState } from "react"

const PostFeed = () =>{

    const [PostFeed , setPostFeed] = useState([])

    useEffect( ()=>{

         axios.get('http://localhost:3000/posts')

         .then((post)=>{setPostFeed(post.data)})

    } , [])

    return(

        <>

        <h1>Your Posts</h1>

        <div>

        {PostFeed.length > 0 && PostFeed.map((posts) =>{

            return(

            <div key={posts._id}>

                <img src={posts.image} alt={posts.caption} />

                <p>{posts.caption}</p>
                
            </div>

            )

        })}

        </div>
        
        </>

    )

}

export default PostFeed