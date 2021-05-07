import React,{useState} from 'react';
import '../css/center.css';
import Button from '@material-ui/core/Button';
import { selectUser } from '../features/User/userSlice';
import { useSelector, useDispatch } from 'react-redux';
import db from '../firebase';
import { useParams } from 'react-router-dom';
import firebase from 'firebase';

function Center() {
    const user =useSelector(selectUser);
    const[question,setQuestion]=useState('')

  const { code } = useParams()
    const askquestion=e=>{
        e.preventDefault();
        
        db.collection("session")
            .doc(code)
            .collection("questions").
            add({
              name:user.user?.displayName,
              photoURL:user.user?.photoURL,
              question:question,
              timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            })
        console.log('button clicked')
    
        setQuestion('')
        
        
      }
    return (
        <div className="center">
            <textarea className="text_area" onChange ={e=>setQuestion(e.target.value)} value={question} placeholder="Enter your question">

            </textarea>
            <div>
                <div className="center_footer">
                    <div>
                        

                    </div>

                    <div>
                        <Button variant="outlined"  onClick={askquestion}>POST</Button>

                    </div>

                    <div>

                    </div>
                </div>
            
           
            </div>
            
        </div>
    )
}

export default Center
