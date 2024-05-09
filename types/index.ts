export {};

declare global {

  interface Car {
    id: number,
    alt: string,
    name: string,
    price: number,
    desc: string,
    subtitle: string,
    pictureDesc: {
        title: string,
        subtitle?: string,
      }[],
    functions?: {
      subtitle: string,
    },
    size: string,
    details: string,
  }
}