import React from "react";
import { Button__ViewAll } from "../../styles/button";
const ViewAll = ({ clickShowItem }) => {
  return (
    <Button__ViewAll variant="contained" onClick={clickShowItem}>
      View All
    </Button__ViewAll>
  );
};

export default ViewAll;
