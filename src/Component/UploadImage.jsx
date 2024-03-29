import React, { useState } from "react";
import '../style/UploadImage.css';

const UploadImage = () => {
        const [selectedImages, setSelectedImages] = useState([]);
      
        const onSelectFile = (event) => {
          const selectedFiles = event.target.files;
          const selectedFilesArray = Array.from(selectedFiles);
      
          const imagesArray = selectedFilesArray.map((file) => {
            return URL.createObjectURL(file);
          });
      
          setSelectedImages((previousImages) => previousImages.concat(imagesArray));
      
          // FOR BUG IN CHROME
          event.target.value = "";
        };
      
        function deleteHandler(image) {
          setSelectedImages(selectedImages.filter((e) => e !== image));
          URL.revokeObjectURL(image);
        }
return ( 
    <section>
      <label>
        + Add Images
        <br />
        <span>up to 10 images</span>
        <input  className="inpt1"
          type="file"
          name="images"
          onChange={onSelectFile}
          multiple
          accept="image/png , image/jpeg, image/webp"
        />
      </label>
      <br />

      <input type="file" multiple className="inpt1" />

      {selectedImages.length > 0 &&
        (selectedImages.length > 10 ? (
          <p className="error">
            You can't upload more than 10 images! <br />
            <span>
              please delete <b> {selectedImages.length - 10} </b> of them{" "}
            </span>
          </p>
        ) : (
          <button
            className="upload-btn"
            onClick={() => {
              console.log(selectedImages);
            }}
          >
            UPLOAD {selectedImages.length} IMAGE
            {selectedImages.length === 1 ? "" : "S"}
          </button>
        ))}

      <div className="images">
        {selectedImages &&
          selectedImages.map((image, index) => {
            return (
              <div key={image} className="image">
                <img src={image} height="150" alt="upload" />
                <button onClick={() => deleteHandler(image)}>
                  delete image
                </button>
                <p>{index + 1}</p>
              </div>
            );
          })}
      </div>
    </section>
 );
};
 
export default UploadImage;