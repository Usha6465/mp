import React, { useState } from 'react';
import "../Modal/Modal.css";

export default function Modal() {
  const [modal, setModal] = useState(false);
  const toggleModal =() => {
    setModal(!modal)
  }

  if(modal)
  {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }

  return (
    <>
      <button className='btn-modal' onClick={toggleModal}>
        MEMBERS IN THE GROUP
      </button>
{modal && (
      <div className='modal'>
        <div 
        onClick={toggleModal} 
        className='overlay'></div>
        <div className='modal-content'>
          <h2>People in the Group</h2>
          {/* <p>
            Ipsum molestiae natus adipisci modi eligendi? Debitis amet quae unde
            commodi aspernatur enim, consectetur. Cumque deleniti temporibus
            ipsam atque a dolores quisquam quisquam adipisci possimus
            laboriosam. Quibusdam facilis doloribus debitis! Sit quasi quod
            accusamus eos quod. Ab quos consequuntur eaque quo rem! Mollitia
            reiciendis porro quo magni incidunt dolore amet atque facilis ipsum
            deleniti rem!
          </p> */}
          <table>
            <tr>
              <th>NAME</th>
              <th>ViewProfile</th>
            </tr>
            <tr>
              <td>ABC</td>
              <td>Link </td>
            </tr>
          </table>

          <button className='close-modal' onClick={toggleModal}>
            CLOSE
          </button>
        </div>
      </div>
)}
    </>
  );
}

