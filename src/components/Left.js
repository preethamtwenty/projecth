import React from 'react';
import '../css/left.css';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import { selectUser } from '../features/User/userSlice';
import { useSelector, useDispatch } from 'react-redux';
function Left({user_name,photoURL,question,id}) {
   
    return (
        <div className="left">
            <div className="left_box">
                <div className="left_header">
                <   Avatar alt="Remy Sharp" src={photoURL} />

                <div className="name_header">
                    {user_name}
                </div>

                </div>
                <div className="left_body">
                    <div style={{fontWeight:'600'}}>
                        Q  :
                    </div>

                    <div className='left_question'>
                    {question}
                    </div>
                </div>

                <div className="left_footer">
                    <div>

                    </div>
                    <div>
                    <Button color="secondary">Answer</Button>

                    </div>
                    

                </div>

                
            </div>

            
        </div>
    )
}

export default Left
