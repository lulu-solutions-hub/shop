import { defineStore } from "pinia";

  // {
  //   id: ,
  //   name: '',
  //   price: '',
  //   desc: "",
  //   pictureDesc: [
  //     {
  //       title: "",
  //       subtitle: "",
  //       img: "",
  //     },
  //   ],
  //   functions: {
  //     title: "",
  //     subtitle: "",
  //   },
  //   video: ""
  // }

export const useCarsStore = defineStore('card', () => {
  const cars: Car[] = [
    {
      id: 0,
      name: 'Porsche 911',
      price: 2899,
      desc: "це деталізований конструктор який налічує 1580 шт деталей та розміри, призначений для створення реалістичної моделі спортивного автомобіля. Модель відтворює зовнішній вигляд справжнього Porsche 911 RSR і має робочі двері для доступу до внутрішнього простору. Зручні механізми керування включають обертання керма та інші рухомі елементи. Конструктор включає численні деталі, такі як аеродинамічні елементи, спойлери, фари та диски коліс, для максимального реалізму. Зазвичай LEGO Technic моделі мають великі розміри, а комплект постачається з докладними інструкціями для легкого збирання",
      subtitle: "Конструктор Porsche 911: Ваш шлях до легендарного досвіду! Купуйте зараз!",
      pictureDesc: [
        {
          title: "Конструктор містить безліч функцій, які є ідентичними до оригінального автомобілля, і це є дивовижним!",
          subtitle: "",
        },
        {
          title: "ДВИГУН",
          subtitle: "Зверніть увагу на шістициліндровий опозитний двигун з рухливими поршнями.",
        },
        {
          title: "ПІДВІСКА",
          subtitle: "Також рухома підвіска на кожне колесо",
        },
      ],
      functions: {
        subtitle: "Зовнішній вигляд вражає своєю красою, відзначається чіткими контурами і аеродинамічними елементами. Серед них - спеціально розроблені бічні дзеркала та задній спойлер із кріпленням \"лебединої шиї\", що сприяє зменшенню підйомної сили задньої частини автомобіля. Порше вражає реалістичністю завдяки робочому рульовому мосту, шістциліндровому двигуну з рухомими поршнями і можливості незалежного переміщення коліс одне від одного.",
        video: ""
      },

    },
  ];

  const getCarById = (id: number) => {
    return cars[id];
  };

  return { cars, getCarById };
});