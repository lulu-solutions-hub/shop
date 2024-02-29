export const loadAllFilesFromFolder = (id: string, section: string) => {
  const postImages = import.meta.glob('~/public/img/cars/*/*/*.png', { eager: true });

  const imagePath = `/public/img/cars/${ id }/${ section }/`;
  console.log(imagePath);
  const images = Object.entries(postImages)
  .filter(([key]) => key.includes(imagePath))
  .map(([, value]) => value?.default);

  return { images };
};