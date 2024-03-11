export const loadAllFilesFromFolder = (id: string, section: string) => {
  const postImages = import.meta.glob('~/public/img/cars/*/*/*.{png,mp4,jpg,jpeg}', { eager: true });

  const imagePath = `/public/img/cars/${ id }/${ section }/`;
  console.log(imagePath);
  const files = Object.entries(postImages)
  .filter(([key]) => key.includes(imagePath))
  .map(([, value]) => value?.default);

  return { files };
};