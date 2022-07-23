import React, { useRef, useState } from "react";
import { Input, Button } from "antd";

import { useSelector , useDispatch} from 'react-redux';
import { setComments } from "../../../../Store/salesPage";

import { faker } from '@faker-js/faker';




const AskTheSeller = () => {
  
  const [ObjectArray, setObjectArray ] = useState([])
  const [InputValue, setInputValue] = useState('');
  const refSendQuestionButton = useRef(null);
  const refInput = useRef( null);
  const dispatch = useDispatch();
  
// los handle estan funcionando
const handleInput = (event) => {
      setInputValue (event.target.value);
      
};
const handleSendQuestion = () => {
  if (InputValue === ''){
    return refInput.current.focus()
    
  }
  if(InputValue !==  ''){
    const newArray = [...ObjectArray];
    newArray.push({
      question: InputValue,
      defaultQuestion:'hello there',
      id: faker.datatype.uuid(),
    });
    setObjectArray(newArray);
    setInputValue('');
    dispatch(setComments(newArray));
  }
};

const keyEvent = (e) => {
if (e.key==='Enter' && InputValue !== '') {
  handleSendQuestion();
}
}
console.log(ObjectArray,'soy el objeto');



//
  return (
    <>
    <div style={{marginTop:'40px'}}>

      <p style={{
        fontSize:'18px',
        fontWeight:'600',
        }}>
          Preguntale al vendedor
      </p>

    <Input
    onKeyUp={keyEvent}
    ref={refInput}
    placeholder="Escribe tu pregunta"
    size="large" 
    onChange={handleInput}
    value={InputValue}
    style={{
      width:'549px',
      paddingTop:'15px',
      paddingLeft:'16px',
      minHeight:'48px',
      paddingBottom:'13px',
      borderRadius:'10px',
      }}/>
    <Button
    ref={refSendQuestionButton}
    onClick={()=> { handleSendQuestion()}}
    type="primary"
    size="large" 
    style={{
      marginLeft:'10px',
      width:'152px',
      height:'44px',
      fontWeight:'bold',
      fontSize:'16px',
      borderRadius:'10px',
      }} 
      >
        Preguntar
    </Button>
    </div>

    </>
  )
};

export {AskTheSeller}