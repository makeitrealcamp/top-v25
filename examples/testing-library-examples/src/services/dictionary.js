const baseUrl = 'https://api.dictionaryapi.dev/api/v2/entries/en';

export const getMeaning = async ({ word = 'cat' }) => {
  const respose = await fetch(`${baseUrl}/${word}`);
  const data = await respose.json();

  return { data }
}
