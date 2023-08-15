import React, { useState } from "react";
import { Input } from 'antd';
import { AutoCompleteList } from "./autoCompleteList/AutoCompleteList";
import { useSelector } from 'react-redux'
import { useEffect } from "react";
const Search = () => {
  const [inputSearch, setInputSearch] = useState('');
  const {fakeInformation} = useSelector((state) => state.fakeProductsGroup);
  const [listOfProducstCoincidencies, setListOfProductsCoincidencies] = useState([])
  const [noCoincidences, setNoCoincidences] = useState(false);


  useEffect(()=>{
  if(inputSearch.length > 0){
    let listOfCoincidencies = findCoincidences(fakeInformation, inputSearch)
    if(listOfCoincidencies.length ===0) {
      setNoCoincidences(true)
    }
    setListOfProductsCoincidencies(listOfCoincidencies)
  }


  },[fakeInformation, inputSearch])
  const findCoincidences = (productsGroup, inputWord)=> {
    let listOfCoincidencies = productsGroup.filter((product) => product.title.includes(inputWord))
    return listOfCoincidencies
  }

  const onSearch = (value) => {
    console.log(value);
  };

  const handleInput = (event) => {
    setInputSearch(event.target.value);
    console.log(inputSearch); 
  };
  const handleOnBlur = () => {
    setNoCoincidences(false)
    setListOfProductsCoincidencies([])
  }
  const handleOnFocus = () =>{
    const coincidences = findCoincidences(fakeInformation, inputSearch)
    setListOfProductsCoincidencies(coincidences)
  }

  return (
  <>
  <Input.Search
    onFocus={()=>{handleOnFocus()}}
    onBlur={()=>{
      handleOnBlur()
    }}
    placeholder="Buscar Productos, Marcas y más..."
    onSearch={onSearch}
    value={inputSearch} 
    onChange={handleInput}
    style={{
      width: "600px",
      height: '40px',
      position: "relative"
    }}
    size='large'
  />
{(listOfProducstCoincidencies.length >0  || noCoincidences) && (
    <AutoCompleteList
    setNoCoincidences = {setNoCoincidences}
    noCoincidences = {noCoincidences}
    listOfProducstCoincidencies = {listOfProducstCoincidencies}
    />
)}
  
  </>
  );
};

export { Search };
