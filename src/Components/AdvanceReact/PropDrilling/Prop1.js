import React from "react";
import Prop2 from "./Prop2";
import Prop3 from "./Prop3";
const Prop1 = ({ Props3 }) => {
  return (
    <div>
      <Prop2 Props3={"this is the props 3 data inside prop1"} />
      <Prop3 Props3="   my props data is given" />
    </div>
  );
};

export default Prop1;
