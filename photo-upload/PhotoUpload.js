import Axios from 'axios';
import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import BaseUrl from '../BaseURL';
import Footer from '../Common/Footer'
import Navbar from '../Common/Navbar'

function PhotoUpload() {

    const [file, setFile] = useState(null);
    const handleFileChange = (event) => {
    setFile(event.target.files[0]);
    console.log(event.target.files[0]);
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        
        const formData = new FormData();
        formData.append('file', file);
console.log(formData)
      
        // Axios.post('/upload', formData)
        //   .then((response) => {
        //     console.log(response.data);
        // })
        //   .catch((error) => {
        //     console.log(error);
        // });
    };
      

  return (
    <div>
        {/* <Navbar/> */}
        <div className='max-w-7xl mx-auto pt-12 pb-36 h-screen'>
            <form onSubmit={handleSubmit} encType="multipart/form-data" >
                <input type="file" onChange={handleFileChange}/>
                <button type="submit">Submit</button>
            </form>
        </div>
        {/* <Footer/> */}
    </div>
  )
}

export default PhotoUpload