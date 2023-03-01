import * as React from 'react';
import { Theme, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Chip from '@mui/material/Chip';
import FormHelperText from '@mui/material/FormHelperText';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

function getStyles(name: string, colorName: readonly string[], theme: Theme) {
  return {
    fontWeight:
      colorName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export default function ColorSelect({colors, setProduct, error, product}:any) {
  const theme = useTheme();
  const names = colors.map((color:any) => ({name: color.name, id: color.id}));

  const handleChange = (event: SelectChangeEvent<typeof product.color>) => {
    const {
      target: { value },
    } = event;
    setProduct((e:any) => ({...e, color: typeof value === 'string' ? value.split(',') : value}));
  };

  return (
    <div>
      <FormControl sx={{ width: '100%' }} error={error.color ? true : false}>
        <InputLabel id="demo-multiple-chip-label" sx={{ backgroundColor: 'white', width: '55px' }}>Colors</InputLabel>
        <Select
          labelId="demo-multiple-chip-label"
          id="demo-multiple-chip"
          multiple
          value={product.color}
          onChange={handleChange}
          input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
          renderValue={(selected) => (
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
              {selected.map((value:any) => (
                <Chip key={value} label={value} />
              ))}
            </Box>
          )}
          MenuProps={MenuProps}
        >
          {names.map(({name, id}:any) => (
            <MenuItem
              key={name}
              value={name}
              id={id}
              style={getStyles(name, product.color, theme)}
            >
              {name}
            </MenuItem>
          ))}
        </Select>
        <FormHelperText>{error.color}</FormHelperText>
      </FormControl>
    </div>
  );
}
