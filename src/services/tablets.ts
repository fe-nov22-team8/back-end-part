import { Product as Tablet } from '../models/product';

export const getAll = async () => {
  const tablets = await Tablet.findAll({
    where: { category: 'tablets' },
  });

  return tablets;
};

/* eslint-disable */
const tabletsInfo = [
  {
    id: 'apple-ipad-10.2-space-grey',
    namespaceId: 'apple-ipad-10.2',
    name: "Apple iPad 10.2' 2021 Wi-Fi 64 GB Space Gray",
    capacityAvailable: ['64GB'],
    capacity: '64GB',
    priceRegular: 550,
    priceDiscount: 450,
    colorsAvailable: ['space-gray'],
    color: 'space-gray',
    images: [
      'img/ipads/ipad_10_2/silver/00.png',
      'img/ipads/ipad_10_2/silver/01.png',
      'img/ipads/ipad_10_2/silver/02.png',
      'img/ipads/ipad_10_2/silver/03.png',
      'img/ipads/ipad_10_2/silver/04.png',
    ],
    description: [
      {
        title: 'And then there was Pro',
        text: [
          'A transformative double-camera system that ' +
            'adds tons of capability without complexity.',
          'An unprecedented leap in battery life. And a mind-blowing chip that doubles down on machine learning ' +
            'and pushes the boundaries of what a tablets can do. Welcome to the first iPad powerful enough to be called Pro.',
        ],
      },
      {
        title: 'Camera',
        text: [
          'Meet the double-camera system to combine cutting-edge technology with the legendary simplicity of iPad.' +
            'Capture up to four times more scene. Get beautiful images in drastically lower light.' +
            'Shoot the highest-quality video in a smartphone — then edit with the same ' +
            'tools you love for photos. You’ve never shot with anything like it.',
        ],
      },
      {
        title:
          'Shoot it. Flip it. Zoom it. Crop it. Cut it. Light it. Tweak it. Love it.',
        text: [
          'iPad 11 Pro lets you capture videos that are beautifully true to life, with greater detail and smoother motion.' +
            'Epic processing power means it can shoot 4K video with extended dynamic' +
            'range and cinematic video stabilization — all at 60 fps. You get more creative control, too,' +
            'with four times more scene and powerful new editing tools to play with.',
        ],
      },
    ],
    screen: "11' Liqud retina IPS",
    resolution: '1668x2388',
    processor: 'Apple M2',
    ram: '8GB',
    camera: '12 Mp + 10 Mp',
    zoom: 'Digital, 3x',
    cell: ['GSM', 'HSPA', 'LTE', '5G'],
  },
  {
    id: 'apple-ipad-11-space-grey',
    namespaceId: 'apple-ipad-11',
    name: "Apple iPad Pro 11' M1 Wi-Fi 128 GB Space Gray",
    capacityAvailable: ['128GB'],
    capacity: '128GB',
    priceRegular: 1100,
    priceDiscount: 990,
    colorsAvailable: ['space-gray'],
    color: 'space-gray',
    images: [
      'img/ipads/ipad_pro_11_m1/silver/00.png',
      'img/ipads/ipad_pro_11_m1/silver/01.png',
      'img/ipads/ipad_pro_11_m1/silver/02.png',
      'img/ipads/ipad_pro_11_m1/silver/03.png',
      'img/ipads/ipad_pro_11_m1/silver/04.png',
    ],
    description: [
      {
        title: 'And then there was Pro',
        text: [
          'A transformative double-camera system that adds tons of capability without complexity.',
          'An unprecedented leap in battery life. And a mind-blowing chip that doubles down on machine learning and pushes the boundaries of what a tablets can do. Welcome to the first iPad powerful enough to be called Pro.',
        ],
      },
      {
        title: 'Camera',
        text: [
          'Meet the double-camera system to combine cutting-edge technology with the legendary simplicity of iPad. Capture up to four times more scene. Get beautiful images in drastically lower light. Shoot the highest-quality video in a smartphone — then edit with the same tools you love for photos. You’ve never shot with anything like it.',
        ],
      },
      {
        title:
          'Shoot it. Flip it. Zoom it. Crop it. Cut it. Light it. Tweak it. Love it.',
        text: [
          'iPad 11 Pro lets you capture videos that are beautifully true to life, with greater detail and smoother motion. Epic processing power means it can shoot 4K video with extended dynamic range and cinematic video stabilization — all at 60 fps. You get more creative control, too, with four times more scene and powerful new editing tools to play with.',
        ],
      },
    ],
    screen: "11' Liqud retina IPS",
    resolution: '1668x2388',
    processor: 'Apple M2',
    ram: '8GB',
    camera: '12 Mp + 10 Mp',
    zoom: 'Digital, 5x',
    cell: ['GSM', 'HSPA', 'LTE', '5G'],
  },
];
/* eslint-enable */

export const getInfo = (id: string) => {
  const tabletInfo = tabletsInfo.find((tablet) => tablet.id === id);

  return tabletInfo || null;
};
