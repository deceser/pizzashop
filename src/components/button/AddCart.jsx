import React from "react";
import { Button__AddCart } from "../../styles/cardProduct";

const AddCart = ({ onClickAdd }) => {
  return <Button__AddCart onClick={onClickAdd}>Add</Button__AddCart>;
};
export default AddCart;
