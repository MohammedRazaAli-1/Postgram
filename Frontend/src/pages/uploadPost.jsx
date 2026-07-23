import axios from 'axios';

import cors from 'cors';

import { useNavigate } from 'react-router-dom';

const UploadPost = () =>{

    const navigate = useNavigate()

    const HandleSubmit =async (e) =>{

        e.preventDefault();

        const fromdata = new FormData(e.target);

        try{

            await axios.post('http://localhost:3000/create-post' , fromdata)

            console.log("post uploaded successfully")

            navigate('/post-feed')
           
        }catch(e){

            console.log("ERROR" , e)

        }
        
    }

    return(
        <>
    
        <h1>Upload Your Post</h1>
    
        <form onSubmit={HandleSubmit}>
    
            <input type="file" name="image" accept="image/*" className="select-image" required />
    
            <input type="text" name="caption" placeholder="write caption" required className="caption" />
    
            <button type="submit" className="submit-button">Submit</button>
    
        </form>
    
        </>
    
)

}

export default UploadPost