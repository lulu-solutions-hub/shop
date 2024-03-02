export {};

declare global {

  interface Car {
    id: number,
    name: string,
    price: number,
    desc: string,
    subtitle: string,
    pictureDesc: {
        title: string,
        subtitle?: string,
      }[],
    functions: {
      subtitle: string,
      size: string,
      details: string,
      video: string,
    },
  }
}