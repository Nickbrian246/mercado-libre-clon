import React from "react";

import { faker } from '@faker-js/faker';



faker.finance.amount()
faker.finance.amount() // => "548.81"
faker.finance.amount() // '617.87'
faker.finance.amount(5, 10) // '5.53'
faker.finance.amount(5, 10, 0) // '8'
faker.finance.amount(5, 10, 2, '$') // '$5.85'
faker.finance.amount(5, 10, 5, '', true) // '9,75067'

const generateCard = () => {

  return {
    _id: faker.datatype.uuid(),
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    image: faker.image.food()


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

