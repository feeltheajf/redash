import { values } from 'lodash';

// The following colors will be used if you pick "Automatic" color
export const BaseColors = {
  Blue: '#005ABE',
  Red: '#D92C23',
  Yellow: '#FFA30F',
  Green: '#82B414',
  Purple: '#604FE9',
  Cyan: '#50F5ED',
  Orange: '#FF7200',
  'Light Blue': '#7FBCFF',
  Lilac: '#B554FF',
  'Light Green': '#8CFFB4',
  Brown: '#A55F2A',
  Black: '#000000',
  Gray: '#404040',
  Pink: '#FF7DE3',
  'Dark Blue': '#00204D',
  'Light Gray': '#D9D9D9',
};

// Additional colors for the user to choose from
export const AdditionalColors = {
  'Indian Red': '#981717',
  'Green 2': '#17BF51',
  'Green 3': '#049235',
  DarkTurquoise: '#00B6EB',
  'Dark Violet': '#A58AFF',
  'Pink 2': '#C63FA9',
};

export const ColorPaletteArray = values(BaseColors);

const ColorPalette = {
  ...BaseColors,
  ...AdditionalColors,
};

export default ColorPalette;
