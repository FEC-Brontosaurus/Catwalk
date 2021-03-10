import React, { useState, useRef } from 'react';

const ImageUpload = ({ imageFiles, setImage, toggleClose, logClick }) => {
  const [tempImageArr, setTempImageArr] = useState([]);
  const uploadedImage = useRef({});


  const handleImageUpload = (e) => {
    const tempArr = [];
    const files = e.target.files;
    for (let i = 0; i < files.length; i += 1) {
      tempArr.push(URL.createObjectURL(files[i]));
    }
    setTempImageArr(tempArr);
  }

  const handleSubmit = (e) => {
     setImage(tempImageArr);
     toggleClose(false);
  }

return (
  <>
    <div>
      <form>
        {tempImageArr.length < 5 ? <input type="file" accept="image/png, image/jpeg, image/jpg" onChange={(e) => handleImageUpload(e)} multiple/> : null}
      </form>
      <div className="image-thumbnail">
        {tempImageArr.length > 0 ? tempImageArr.map((image) => (<img src={image} style={{width: '100px', height: '100px'}}/> )) : null }
      </div>
    </div>
    <button type="button" onClick={(e) => handleSubmit(e)}> Submit Uploads </button>
  </>
)
}

export default ImageUpload;