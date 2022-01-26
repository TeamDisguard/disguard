/**
 * Capitalises the first letter of every word in a phrase
 * @param phrase The phrase to title case
 */
export const toTitleCase = (phrase: string) => {
  return phrase.replace(/\w\S*/g, (word) => word[0].toUpperCase() + word.slice(1));
};
