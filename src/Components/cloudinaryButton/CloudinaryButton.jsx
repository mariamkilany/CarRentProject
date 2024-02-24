import { Button, Typography } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

export default function CloudinaryButton({ onImageUpload }) {
  const uploadImg = (img) => {
    const formData = new FormData();
    formData.append("file", img);
    formData.append("upload_preset", "xnszmvpl");
    axios
      .post("https://api.cloudinary.com/v1_1/dgobv1j6b/image/upload", formData)
      .then((response) => {
        const imageUrl = response.data.url;
        onImageUpload(imageUrl);
      });
  };

  return (
    <>
      <Button
        component="label"
        role={undefined}
        variant="contained"
        tabIndex={-1}
        startIcon={<CloudUploadIcon />}
      >
        <input
          type="file"
          style={{ display: "none" }}
          onChange={(e) => uploadImg(e.target.files[0])}
        />
        <Typography variant="h5">Upload Image</Typography>
      </Button>
    </>
  );
}
/**
 * How to use it in any page:
 *- Define State to hold imageURL => const [imageUrl, setImageUrl] = useState(null)
 *- Define function to handle the change =>const handleImageUpload = (url) => {setImageUrl(url);}
 *- Use the button and pass handle function as props =>  <CloudinaryButton onImageUpload={handleImageUpload} />
 *-Use URL in your img src =>{imageUrl && <img src={imageUrl} />}
 *
 */
