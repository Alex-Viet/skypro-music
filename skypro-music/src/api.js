export async function getTracks() {
  const response = await fetch(
    'https://skypro-music-api.skyeng.tech/catalog/track/all/',
  );

  if (!response.ok) {
    throw new Error('Ошибка загрузки данных');
  }

  const data = await response.json();
  return data;
}
