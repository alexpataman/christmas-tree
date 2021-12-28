export const localStoragePrefix = 'alexp_christmas_';
export const maxFavorites = 20;
export const backgroundIDs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
export const treeIDs = [1, 2, 3, 4, 5, 6];
export const treeCoords: { [key: number]: string } = {
  1: '245,0,206,53,192,82,200,113,153,132,179,175,163,184,165,213,112,203,101,221,124,250,116,265,156,292,115,302,118,334,78,339,72,360,110,382,103,416,31,426,12,449,49,491,92,513,8,538,2,571,74,659,109,647,95,674,141,691,169,678,185,707,354,701,377,687,386,666,437,677,499,549,443,526,427,488,461,468,455,434,417,425,411,403,369,397,428,373,432,342,396,341,376,314,404,295,397,270,382,259,406,233,397,210,363,214,352,172,362,145,346,131,321,147,319,125,310,107,311,74',
  2: '211,45,40,484,45,553,18,553,2,636,86,650,127,700,226,668,309,691,380,697,473,649,493,580,478,528,448,448,387,282,375,244,297,72,250,-1',
  3: '205,52,14,608,58,669,317,698,472,655,491,598,476,543,372,246,321,116,237,-1',
  4: '240,0,154,153,164,188,130,200,147,252,84,309,90,352,67,397,99,417,33,481,83,488,46,535,4,593,16,652,75,652,77,709,181,670,258,707,300,681,324,699,431,697,460,640,491,613,402,535,442,522,402,474,447,461,386,358,403,344,359,229,320,140',
  5: '248,8,4,620,49,659,74,688,360,699,487,629,415,423',
  6: '257,3,153,143,114,257,58,362,24,514,24,558,0,617,169,691,302,703,477,640,493,574,426,406,445,367,348,150,292,30',
};
export const garlandIDs = ['multicolor', 'red', 'blue', 'yellow', 'green'];
export const snowDefaultState = false;
export const audioDefaultState = false;
export const garlandDefaultState = false;
export const audioURL = './assets/audio/audio.mp3';
export const snow = {
  intensity: 200,
  duration: 10,
};
export const defaultDecorationSortOrder = 'name_asc';

export const pageTitles = {
  home: 'Наряди елку!',
  decoration: 'Игрушки',
  tree: 'Ёлка',
};

export const sortOptions = [
  {
    value: 'name_asc',
    label: 'По названию, от А до Я',
  },
  {
    value: 'name_desc',
    label: 'По названию, от Я до А',
  },
  {
    value: 'year_asc',
    label: 'По году, по возрастанию',
  },
  {
    value: 'year_desc',
    label: 'По году, по убыванию',
  },
  {
    value: 'quantity_asc',
    label: 'По количеству, по возрастанию',
  },
  {
    value: 'quantity_desc',
    label: 'По количеству, по убыванию',
  },
];

export const colorOptions = [
  { id: 'white', value: 'белый' },
  { id: 'yellow', value: 'желтый' },
  { id: 'red', value: 'красный' },
  { id: 'blue', value: 'синий' },
  { id: 'green', value: 'зелёный' },
];

export const shapeOptions = [
  { id: 'ball', value: 'шар' },
  { id: 'bell', value: 'колокольчик' },
  { id: 'cone', value: 'шишка' },
  { id: 'snowflake', value: 'снежинка' },
  { id: 'toy', value: 'фигурка' },
];

export const sizeOptions = [
  { id: 'large', value: 'большой' },
  { id: 'medium', value: 'средний' },
  { id: 'small', value: 'малый' },
];
