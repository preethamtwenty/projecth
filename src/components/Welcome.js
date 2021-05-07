import React,{useState,useEffect} from 'react';
import '../css/welcome.css';
import Header from './Header';
import Button from '@material-ui/core/Button';
import { selectUser } from '../features/User/userSlice';
import { useSelector, useDispatch } from 'react-redux';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import db from '../firebase';
import { useHistory } from "react-router-dom";
function Welcome() {

    const[code,setCode]=useState('');
    const[Codes,setCodes]=useState([]);
    const[ids,setIds]=useState([]);
    const user =useSelector(selectUser);
    let history = useHistory();

    useEffect(() => {
        //This is where the code runs
        db.collection('session').onSnapshot(snapshot =>{
          //Whenever a new session comes this section refershes 
          setCodes(snapshot.docs.map(doc => ({
            id: doc.id,
            Codes: doc.data()
          })));
        })
      }, []);

    console.log(Codes)

    var IDs=[];

    for (var i = 0; i < Codes.length; i++) {
       IDs.push(Codes[i].id)
    }
    var available=false;
      const sendcode=e=>{
             e.preventDefault();
        
        
        for (var j = 0; j < IDs.length; j++) {
            
            
            if(IDs[j]===code){
                available=true;
                // console.log(available)             
            }
         }
        
                 
        if(available===true){
            history.push(`/${code}`);    
         }else{             
            alert("Please check your code!");
         }
        
    }


    return (

        <>

        <div>
            <Header/>
        </div>
        <div className="welcome"> 
            <div className="welcome_page">
            <div className="title">
             
            </div>
            <br/>
            <br/>

            <div classname="code_part">
                {
                    user?(
                        <>
                        <input className="welcome_textarea" onChange ={e=>setCode(e.target.value)} value={code} placeholder="Enter code"/> 
                            <center>

                            <Button variant="contained" 
                            style={{marginLeft:'20px'}} onClick={sendcode}
                            > Submit ! </Button>    

                            </center>
                        </>
                    ):(
                        <>
                        <input className="welcome_textarea" onChange ={e=>setCode(e.target.value)} value={code} disabled={true} placeholder="Login to enter code"/> 
                        </>
                        
                        

                    )
                    
                }
                    
                
               


                

                


               
                <br/>
            <br/>          
            
            </div>  
            <br/>
            <br/>  
            
            <div className="admin_link" style={{marginTop:'20px', fontSize:'20px'}}>
                
              

                

             

              <br>
              </br>
              <br>
              </br>

            </div>  
            

           
        </div>
            
        </div>
        </>
    )
}

export default Welcome
