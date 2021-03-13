import React, { useState } from 'react';

const ImageUpload = ({
  setImage, toggleClose, logClick,
}) => {
  const [tempImageArr, setTempImageArr] = useState([]);

  const handleImageUpload = (e) => {
    const tempArr = [];
    const { files } = e.target;
    for (let i = 0; i < files.length; i += 1) {
      tempArr.push(URL.createObjectURL(files[i]));
    }
    setTempImageArr(tempArr);
  };

  const handleSubmit = () => {
    logClick('submit upload images', 'QandA');
    setImage(tempImageArr);
    toggleClose(false);
  };

  return (
    <>
      <div>
        <form>
          {tempImageArr.length < 5 ? <input type="file" accept="image/png, image/jpeg, image/jpg" onChange={(e) => handleImageUpload(e)} multiple /> : null}
        </form>
        <div className="image-thumbnail">
          {tempImageArr.length > 0 ? tempImageArr.map((image) => (<img key={image} alt="Uploaded thumbnail" src={image} style={{ width: '100px', height: '100px' }} />)) : null }
        </div>
      </div>
      <button type="button" onClick={() => handleSubmit()}> Submit Uploads </button>
    </>
  );
};

export default ImageUpload;
