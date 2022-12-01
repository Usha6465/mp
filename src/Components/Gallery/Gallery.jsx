import React,{useState} from 'react';
import image from "../Components/Gallery/image";
import '../Components/Gallery/Gallery.css';

export default function Gallery(){

    const [selectedImg, setSelectedImg] = useState(image[0]);

    return(
        <div>
            <div className='container'>
                <img src={selectedImg} alt="Seleted" className='selected'/>
                <div className='imgContainer'>
                    {image.map((img, index) => (
                    <img style= {{border: selectedImg=== img ? "4px solid black" : " "}}key={index} src={img} alt="dog" onClick={() => setSelectedImg(img)} />
                    ))}   
                </div>
            </div>             
        </div>
    );

}
