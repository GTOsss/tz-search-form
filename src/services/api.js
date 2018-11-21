import { searchObjects } from '@mock-data/search-data';

const sleep = (ms = 1000) => new Promise((resolve) => setTimeout(resolve, ms));

export const apiGetApartments = async ({ countRooms, price, ...args }) => {
  await sleep();
  return searchObjects.filter((item) => {
    const isEqualOtherParams = !Object.keys(args)
      .some((key) => !(typeof args[key] === 'undefined') && (item[key] !== args[key]));

    const countRoomsEmpty = (typeof countRooms === 'undefined') || (countRooms && countRooms.length === 0);
    const countRoomsObjectMap = countRooms && countRooms
      .reduce((acc, curr) => ({ ...acc, [curr.value]: true }), {});
    const isEqualRooms = countRoomsEmpty || countRoomsObjectMap[item.countRooms];
    const isEqualPrice = (item.price >= price[0]) && (item.price <= price[1]);
    return isEqualOtherParams && isEqualRooms && isEqualPrice;
  });
};
