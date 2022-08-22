import React from "react";

import { faker } from '@faker-js/faker';



faker.finance.amount()
faker.finance.amount() // => "548.81"
faker.finance.amount() // '617.87'
faker.finance.amount(5, 10) // '5.53'
faker.finance.amount(5, 10, 0) // '8'
faker.finance.amount(5, 10, 2, '$') // '$5.85'
faker.finance.amount(5, 10, 5, '', true) // '9,75067'

/**Generador de tajetass ********************************************** */
const generateCard = () => {

  return {
    _id: faker.datatype.uuid(),
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    image: faker.image.food(),
    status:faker.datatype.boolean(),
  }
}

export {generateCard};

const generateManyBooks = (size) =>  {
  
	const limit = size ?? 10; // si no me envian el tamaño por defecto tome 10 o genere 10
	const fakeBooks = [];
	for ( let index = 0; index < limit; index += 1) {
	fakeBooks.push(generateCard());
}
	return [...fakeBooks] // para evitar errores de mutacion
};

export {generateManyBooks  };

/*********************************************************************************************** */

/*Generador de comentarios para comentarios con ratio de estrellas* *************************************************************************/

const generateComments = () => {

  return {
    Comment:faker.commerce.productDescription(),
    _id: faker.datatype.uuid(),
    rateStarts: faker.commerce.price(1,5), 
    status:false,
  
  }
    
}

const generateManyComments = (size) => {
  const limit = size ?? 15;
  const fakeComments = [];
  for (let index = 0; index < limit; index += 1 ) {
    fakeComments.push(generateComments());
    
  }

  return [...fakeComments]
}
export {generateManyComments}
/************************************************************************************************ */

/*Generador de tarjetas de credito* *************************************************************************/

const generateCreditCards = () => {

  return {
    accountNumber:faker.finance.account(4) ,
    _id: faker.datatype.uuid(),
    status:faker.datatype.boolean(),
  }
    
}

const generateManyCreditCards = (size) => {
  const limit = size ?? 5;
  const fakeComments = [];
  for (let index = 0; index < limit; index += 1 ) {
    fakeComments.push(generateCreditCards());
    
  }

  return [...fakeComments]
}
export {generateManyCreditCards}
/************************************************************************************************ */