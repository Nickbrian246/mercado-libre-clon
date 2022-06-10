import React from "react";

import { Input, Space } from 'antd';



const Search = () => {
  const { Search } = Input;

  const onSearch = (value) => console.log(value);
  return (

    <>
    <Search placeholder="Buscar Productos Marcas y mas ..." onSearch={onSearch} style={{ width: 600, height:'40px' }} size='large' />
    </>
  )
};


export {Search}