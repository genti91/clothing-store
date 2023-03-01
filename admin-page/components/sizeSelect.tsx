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

export default function SizeSelect({sizes, setProduct, error, product}:any) {
  const theme = useTheme();
  const names = sizes.map((size:any) => ({name: size.name, id: size.id}));

  const handleChange = (event: SelectChangeEvent<typeof product.color>) => {
    const {
      target: { value },
    } = event;
    setProduct((e:any) => ({...e, size: typeof value === 'string' ? value.split(',') : value}));
  };

  return (
    <div>
      <FormControl sx={{ width: '100%' }} error={error.size ? true : false}>
        <InputLabel id="demo-multiple-chip-label" sx={{ backgroundColor: 'white', width: '48px' }}>Sizes</InputLabel>
        <Select
          labelId="demo-multiple-chip-label"
          id="demo-multiple-chip"
          multiple
          value={product.size}
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
              style={getStyles(name, product.size, theme)}
            >
              {name}
            </MenuItem>
          ))}
        </Select>
        <FormHelperText>{error.size}</FormHelperText>
      </FormControl>
    </div>
  );
}
