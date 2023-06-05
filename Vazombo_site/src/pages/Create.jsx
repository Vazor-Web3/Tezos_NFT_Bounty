import React, { useState } from "react";
import {Container, Col, Row} from 'reactstrap'
import CommonSection from '../components/Ui/Common-section/CommonSection'

// import '../styles/create-item.css'
// const Upload = () =>{
//    try{
 
//     const data = new FormData()
//     data.append("file", files[0])
//     data.append("title", title)
//     data.append("description", description)
//     data.append("price", price)

//     const response = await fetch(`${serverUrl} /mint`, {
//       method: "POST",
//       headers:{
//         "Access-Control-Allow-Origin": "*"
//       },
//       body:data
//     })
//     if(response) {
//       const data = await response.json()
//       if(data.status === 2000 && data.msg.metadataHash && data.msg.imagesHash){
//          pinningMetadata = false
//          mintingToken = false
//       } else{
//         throw  "no response"
//       }
//     }
//    }catch(error){
//     console.log(error)
//    }finally{
//     pinningMetadata = false
//     mintingToken = false
//    }
// }


 

function Create() {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [selectFile,  setSelectFile] = useState(null);

  function handleChange(e) {
    setSelectFile(e.target.files[0])
  }



  return (
    <>  
   <CommonSection  title='Create NFT'/>
   <Container>
    <Row>
    <Col lg='9' md='8' sm='6'>
    <div className="create__item">
       <form>
    
     <div className="form_input">
          <label htmlFor='' className='my-5 upload__text'>Upload New Files</label>
          <input type='file' 
          className='upload__input' onChange={handleChange} />
        </div>

        <div className="form_input">
          <label htmlFor=''>Price</label>
          <input type='number' 
           placeholder='Enter price for one item (XTZ)'  value={price} onChange={(e) => setPrice(e.target.value)}/>
        </div>
        <div className="form_input">
          <label htmlFor=''>minimum Bid</label>
          <input type='number' 
           placeholder='Enter minimum bid (XTZ)'/>
        </div>
        <div className="form_input">
          <label htmlFor=''>Title</label>
          <input type='text'  placeholder='Enter title'
          value={title}   onChange={(e) => setTitle(e.target.value)}/>
          </div>
        <div className="form_input">
          <label htmlFor=''>Description</label>
        <textarea name='' cols='20' rows='7' placeholder='Enter your description' className='w-100' value={description}   onChange={(e) => setDescription(e.target.value)}></textarea>
          </div>
       </form>
    </div>
    </Col>
    </Row>
    <div className='create'>
    <button className='btn'>Create</button>
    </div>
   
   </Container>
    </>
  )
}

export default Create