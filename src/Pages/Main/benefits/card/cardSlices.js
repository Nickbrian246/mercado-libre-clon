import React from "react";

import { cardList } from "./cardList";
import { Card } from "./Card";

const cardSlices = cardList.map((data) => (
  <Card data = {data} key = {data.id}/>
))

export {cardSlices};