import React,{useState} from 'react'
import '../Components/Groups/GroupCard.css'

export default function Grouplist(){

    const [cards] = useState([
        {
        title : 'Group name',
        text : 'Group description Note that the development build is not optimized Note that the development build is not optimized Note that the development build is not optimized.'
        },
        {
            title : 'Group name',
            text : 'Group description Note that the development build is not optimized Note that the development build is not optimized Note that the development build is not optimized.'
        },
        {
            title : 'Group name',
            text : 'Group description Note that the development build is not optimized Note that the development build is not optimized Note that the development build is not optimized.'
        },
        {
            title : 'Group name',
            text : 'Group description Note that the development build is not optimized Note that the development build is not optimized Note that the development build is not optimized.'
        },
        {
        title : 'Group name',
        text : 'Group description Note that the development build is not optimized Note that the development build is not optimized Note that the development build is not optimized.'
        }, 
        {
        title : 'Group name',
        text : 'Group description Note that the development build is not optimized Note that the development build is not optimized Note that the development build is not optimized.'
        },
]);

    return(
        <div>
            <section>
                <div className='container'>
                    <h1> GROUPS</h1>
                    <div>
                        <input type="text" placeholder='Keyword' />
                        <input type="text" placeholder='Location' />
                        <button className='btn'> Search</button>
                    </div>
                    <div className='cards'>
                        {
                            cards.map((card, i) => (
                                <div key={i} className="card">
                                    <h3>
                                        {card.title}
                                    </h3>
                                    <p> {card.text} </p>
                                    <button className='btn'>Visit Group</button>
                                </div>
                                    ))
                        }
                       
                    </div>
                </div>
            </section>
        </div>
    )
}


