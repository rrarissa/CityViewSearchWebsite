import './App.scss';
import CityInput from "./CityInput";
import ImageList from "./ImageList";
import {useEffect, useState} from "react";

function App() {
    const [images, setImages] = useState([])
    const [bgImage, setbgImage] = useState("")
    const updateImages = (newImages) => {
        console.log('get updated images', newImages)
        setImages(newImages)
    }
    const updateBG = img =>{
        setbgImage(img)
    }
    useEffect(()=>{
        images.length > 0 &&
        setbgImage(images[0])}, [images])
  return (
    <div className="App" style={{ background: bgImage && bgImage.regular && `url('${bgImage.regular}') no-repeat center center/cover fixed`}}>
        <div className="searchBar">
            <CityInput cbUpdateImages={updateImages}/>
        </div>
        <ImageList images={images} updateBG={updateBG}/>
    </div>
  );
}

export default App;
