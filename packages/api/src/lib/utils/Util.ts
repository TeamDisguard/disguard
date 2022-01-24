export const toTitleCase = (phrase: string) => {
  return phrase.replace(/\w\S*/g, (word) => word[0].toUpperCase());
};
