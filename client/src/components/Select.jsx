import React, { useRef, useEffect, useState } from "react";
import { InputLabel, FormControl, Select } from "@material-ui/core";

const OutlinedSelect = ({
  label,
  options,
  onChange,
  noOptionMessage,
  disabled
}) => {
  const inputLabel = useRef(null);
  const [labelWidth, setLabelWidth] = useState(0);
  useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth);
  }, []);

  return (
    <FormControl variant="outlined" fullWidth disabled={disabled}>
      <InputLabel ref={inputLabel} htmlFor={label}>
        {label}
      </InputLabel>
      <Select
        fullWidth
        native
        onChange={onChange}
        labelWidth={labelWidth}
        inputProps={{
          name: label,
          id: label
        }}
      >
        {options ? (
          <>
            <option value={0}>Please select</option>
            {options.map(option => (
              <option key={option.value} value={option.value}>
                {option.text}
              </option>
            ))}
          </>
        ) : (
          <option value={0}>{noOptionMessage}</option>
        )}
      </Select>
    </FormControl>
  );
};

export default OutlinedSelect;
