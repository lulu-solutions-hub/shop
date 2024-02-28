import { defineStore } from "pinia";

export const useCarsStore = defineStore('card', () => {
  const cars = [
    {
      id: 0,
      name: 'car',
      price: 1000
    },
    {
      id: 1,
      name: 'abe',
      price: 10000
    },
  ];

  const getCarById = (id: number) => {
    return cars[id];
  };

  return { cars, getCarById };
});