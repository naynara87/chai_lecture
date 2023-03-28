import React from "react";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import styled from "@emotion/styled";
import { SerializedStyles } from "@emotion/react";

interface OptionItemProps {
  optionCss?: SerializedStyles;
}
const OptionItem = styled.div<OptionItemProps>`
  font-size: 12px;
  ${({ optionCss }) => optionCss}
`;

interface LabelProps {
  selected: boolean;
  labelCss?: SerializedStyles;
}
const Label = styled.div<LabelProps>`
  font-size: 12px;
  ${({ labelCss }) => labelCss}
`;

const InputLabelCustom = styled(InputLabel)`
  overflow: visible;
`;

interface SelectBoxProps extends OptionItemProps, Omit<LabelProps, "selected"> {
  optionList: string[];
  onChange: (value: string) => void;
  value: string;
  label: string;
  defaultValue?: string;
  width?: number;
  height?: number;
  selectBoxSize?: "small" | "medium";
}
function SelectBox({
  optionList,
  onChange,
  value,
  label,
  defaultValue,
  width = 118,
  height = 35,
  optionCss,
  labelCss,
  selectBoxSize = "small",
}: SelectBoxProps) {
  const handleChange = (event: SelectChangeEvent) => {
    onChange(event.target.value);
  };

  return (
    <Box sx={{ minWidth: width, height }}>
      <FormControl fullWidth size={selectBoxSize}>
        <InputLabelCustom id="demo-simple-select-label">
          <Label selected={!!value} labelCss={labelCss}>
            {label}
          </Label>
        </InputLabelCustom>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={value}
          label={label}
          onChange={handleChange}
          defaultValue={defaultValue}
          sx={{ height }}
        >
          {optionList.map((option, index) => (
            <MenuItem value={option} key={`${option}_${index}`}>
              <OptionItem optionCss={optionCss}>{option}</OptionItem>
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}

export default SelectBox;
