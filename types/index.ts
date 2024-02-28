export { };

declare global {

  interface Car {
    name: string,
    price: number,
    imgSlider: string[],
    desc: string,
    pictureDesc: {
      title?: string,
      subtitle: string,
      img: string,
    }
    functions: {
      title: string,
      subtitle: string,
    },
    video: string,
  }
}