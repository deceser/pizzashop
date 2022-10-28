import React from "react";

import { Box__Icon } from "../../../styles/icons";
import icons from "../../../arr/icons";

const Icons = () => {
  return (
    <Box__Icon>
      {icons.map((item, id) => (
        <img src={item.image} alt={item.name} width="70px" key={id} />
      ))}
    </Box__Icon>
  );
};
export default Icons;
