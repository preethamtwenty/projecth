import React,{useState,useEffect} from 'react';
import '../css/main.css';
import Left from './Left';
import Center from './Center';
import Right from './Right';
import { useParams } from 'react-router-dom';

import db from '../firebase';

function Main() {
    const { code } = useParams()
    const [questions,setQuestions]=useState([])
    var lengthq=questions.length

    useEffect(() => {
        db.collection("session")
            .doc(code)
            .collection("questions")
            .orderBy("timestamp", "asc")
            .onSnapshot((snapshot) =>
             setQuestions(snapshot.docs.map((doc) => (
              { q_id: doc.id, 
                x: doc.data() 
              })))
          );
    },[lengthq] )

    return (
        <div className="main">
            
            <div className="main_left">
            {questions.map(({q_id,x}) => (
          <Left
            user_name={x.name}
            photoURL={x.photoURL}
            question={x.question}
            id={q_id}
            key={q_id}
            
            
           
           />
        ))}
                


            </div>
            <div className="main_center">
                <Center/>
            </div>

            <div className="main_right">
                <Right/>
                <Right/>
                <Right/>
                <Right/><Right/>


            </div>
            
        </div>
    )
}

export default Main
