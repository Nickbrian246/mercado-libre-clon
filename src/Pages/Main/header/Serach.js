import React, { useState } from "react";
import { Input } from 'antd';
import { AutoCompleteList } from "./autoCompleteList/AutoCompleteList";
import { useSelector } from 'react-redux'
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
const Search = () => {
  const [inputSearch, setInputSearch] = useState('');
  const {fakeInformation} = useSelector((state) => state.fakeProductsGroup);
  const [listOfProducstCoincidencies, setListOfProductsCoincidencies] = useState([])
  const [noCoincidences, setNoCoincidences] = useState(false);
  const [openAutoCompleteList,setOpenAutoCompleteList] = useState(false);
  const navigate = useNavigate()


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
    
  };

  const handleInput = (event) => {
    setInputSearch(event.target.value);
 
  };
  const handleProductSelected = (id) => {
    navigate(`/payPage/${id}`)
    handleOnBlur()
  }

  const handleOnBlur = () => {
    setNoCoincidences(false)
    setOpenAutoCompleteList((prevState) => !prevState)
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
      {(listOfProducstCoincidencies.length >0  || noCoincidences || openAutoCompleteList) && (
        <AutoCompleteList
        handleProductSelected ={handleProductSelected}
        setNoCoincidences = {setNoCoincidences}
        noCoincidences = {noCoincidences}
        listOfProducstCoincidencies = {listOfProducstCoincidencies}
        />
    )}
  </>
  );
};

export { Search };
