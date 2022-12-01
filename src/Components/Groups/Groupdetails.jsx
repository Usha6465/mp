import React,{useState} from 'react'
import Modal from '../Components/Modal/Modal'
import '../Components/Groups/card.css'

function Groupdetails()
{
    const[name,setName] = useState("Group Name");
    const[description, setDesc] =useState("Gardening is the practice of growing and cultivating plants as part of horticulture. In gardens, ornamental plants are often grown for their flowers, foliage, or overall appearance; useful plants, such as root vegetables, leaf vegetables, fruits, and herbs, are grown for consumption, for use as dyes, or for medicinal or cosmetic use.");
    const[date, setDate] = useState("29/11/2022")
    // function eventhandler(e)
    // {
    //     e.preventDefault();
    // } 

    return(
        <div >
            <div className='Card'>
                <div className='upper-container'>
                    <div className='image-container'>
                        <img src="" alt="" height="100px" width="100px" />
                    </div>
                    <div className='flex'>
                        <button className='btn1'> JOIN </button>
                    </div>
                </div>
            </div>
        
            <div className='lower-container'>
                <h3>NAME : {name}</h3>
                <p>BIO : {description}</p>
                <p>DATE OF CREATION : {date}</p>
                <Modal /> <br />
                <button className='btn'>
                    Events
                </button>
                <button className='btn'>
                    Blog
                </button>
                <button className='btn'>
                    Gallery
                </button>
                <br /><br />
            </div>
        </div>
    )
}

export default Groupdetails;