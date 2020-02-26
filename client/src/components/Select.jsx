import React, { useRef, useEffect, useState } from "react";
import { InputLabel, FormControl, Select } from "@material-ui/core";

const OutlinedSelect = props => {
  const inputLabel = useRef(null);
  const [labelWidth, setLabelWidth] = useState(0);
  useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth);
  }, []);

  return (
    <FormControl variant="outlined" fullWidth>
      <InputLabel ref={inputLabel} htmlFor={props.label}>
        {props.label}
      </InputLabel>
      <Select
        fullWidth
        native
        value={props.value}
        onChange={props.onChange}
        labelWidth={labelWidth}
        inputProps={{
          name: props.label,
          id: props.label
        }}
      >
        <option value="" />
        <option value={10}>Ten</option>
        <option value={20}>Twenty</option>
        <option value={30}>Thirty</option>
      </Select>
    </FormControl>
  );
};

export default OutlinedSelect;
