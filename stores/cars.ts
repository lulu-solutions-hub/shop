import { defineStore } from "pinia";

  // {
  //   id: ,
  // alt: "",
  //   name: '',
  //   price: ,
  //   desc: "",
  //   pictureDesc: [
  //     {
  //       title: "",
  //       subtitle: "",
  //     },
  //   ],
  //   functions: {
  // subtitle: "",
  //   details: "",
  //   size: ""
  //   },
  // }

export const useCarsStore = defineStore('card', () => {
  const cars: Car[] = [
    {
      id: 0,
      name: 'Porsche 911 RSR',
      price: 2899,
      alt: "конструктор Porsche 911 RSR",
      desc: "це деталізований конструктор який налічує 1580 шт деталей та розміри, призначений для створення реалістичної моделі спортивного автомобіля. Модель відтворює зовнішній вигляд справжнього Porsche 911 RSR і має робочі двері для доступу до внутрішнього простору. Зручні механізми керування включають обертання керма та інші рухомі елементи. Конструктор включає численні деталі, такі як аеродинамічні елементи, спойлери, фари та диски коліс, для максимального реалізму. Зазвичай дані моделі мають великі розміри, а комплект постачається з докладними інструкціями для легкого збирання",
      subtitle: "Конструктор Porsche 911 RSR: Ваш шлях до легендарного досвіду! Купуйте зараз!",
      pictureDesc: [
        {
          title: "Конструктор містить безліч функцій, які є ідентичними до оригінального автомобілля, і це є дивовижним!",
          subtitle: "",
        },
        {
          title: "ДВИГУН",
          subtitle: "Зверніть увагу на шестициліндровий опозитний двигун з рухливими поршнями.",
        },
        {
          title: "ПІДВІСКА",
          subtitle: "Також рухома підвіска на кожне колесо",
        },
      ],
      details: '1580 Деталей',
      size: "Розміри: 50д x 21ш x 17в",
      functions: {
        subtitle: "Зовнішній вигляд вражає своєю красою, відзначається чіткими контурами і аеродинамічними елементами. Порше вражає реалістичністю завдяки робочому рульовому мосту, шістциліндровому двигуну з рухомими поршнями і можливості незалежного переміщення коліс одне від одного.",
      },
    },
    {
      id: 2,
      name: 'BMW M 1000 RR',
      price: 2999,
      alt: "конструктор BMW M 1000 RR",
      desc: "Розроблений для перегонів і вдосконалений для доріг, BMW M 1000 RR завоював серця любителів мотоциклів. Тепер ви можете насолодитися захоплюючим процесом складання та створити власну версію цього чудового мотоцикла за допомогою набору Technic (42130). Чиста сила Пориньте в багату деталізацію цієї вражаючої моделі мотоцикла. Вперше у всесвіті Technic він виконаний у масштабі 1:5. Завдяки реалістичним деталям модель виглядає та рухається так само, як справжній. Дослідіть функціональну триступеневу (+ нейтраль) коробку передач, рульове управління, передню та задню підвіски, ланцюговий привід та рядний чотирипоршневий двигун. Модель мотоцикла у відомих кольорах BMW дуже стильно виглядає в інтер'єрі, а в комплекті є 2 підставки для демонстрації. Контролюй своє бажання Конструктор Technic BMW M 1000 RR є частиною колекції конструкторів для дорослих. Ці конструктори для дорослих віддають данину поваги найвідомішим у світі зразкам техніки та запрошують познайомитися з цими машинами за допомогою невимушеного конструювання.",
      subtitle: "Набір для збирання для дорослих – запустіть свій творчий двигун за цією захоплюючою збіркою. Набір BMW M 1000 RR Technic (42130) – це ідеальна модель для дорослих, які шукають новий захоплюючий проект",
      pictureDesc: [
        {
          title: "Культовий бренд",
          subtitle: "Шанувальники оцінять яскраве поєднання червоного, білого та синього кольорів.",
        },
        {
          title: "Вершина продуктивності",
          subtitle: "Оснащений 3-ступінчастою коробкою передач (+ нейтральна передача), підвіскою та 4-поршневим двигуном.",
        },
        {
          title: "Керуй своєю мрією",
          subtitle: "Неймовірний конструктор, що включає в себе демонстраційний і гоночний стенд.",
        },
      ],
      details: '1920 Деталей',
      size: "Розміри: 45д x 27в x 17ш",
    },
    // {
    //   id: 1,
    //   name: 'Lamborghini Sián',
    //   price: 1999,
    //   desc: "Ця унікальна модель масштабу 1:8 має висоту понад 13 см, довжину 60 см і ширину 25 см. Також вона обладнана декоративною підставкою для виставки та унікальним серійним номером для отримання доступу до ексклюзивного онлайн-контенту. Поставляється у спеціальній коробці, включає дві інструкції зі складання журнальних столиків, ілюстрації та «за лаштунковими» інтерв'ю.",
    //   subtitle: "",
    //   pictureDesc: [
    //     {
    //       title: "Спойлер",
    //       subtitle: "Ніщо не зрівняється з вражаючою величчю заднього спойлера, що елегантно встановлюється на своєму місці на суперспортивному автомобілі, такому як Lamborghini Sián FKP 37. Важливо було точно відтворити його рух, оскільки цей спойлер забезпечує необхідну аеродинамічну стабільність при високих швидкостях. Ця функція представляла собою виклик, але (з промовчанням спойлера!) успішно подолана.",
    //     },
    //     {
    //       title: "Під капотом",
    //       subtitle: "Чудовим акцентом є спеціально розроблена дорожня сумка, яка легко зберігається під капотом.",
    //     },
    //     {
    //       title: "Автентична робота",
    //       subtitle: "Двигун моделі, встановлений позаду, відтворює легендарний V12 із рухливими поршнями, чотириколісним приводом і активною передньою й задньою підвіскою. Колеса оснащені автентичними гальмівними дисками й супортами та точно відтворюють задній диференціал автомобіля.",
    //     },
    //   ],
    // }
  ];

  const getCarById = (id: number) => {
    return cars.find(x => x.id === id);
  };

  return { cars, getCarById };
});