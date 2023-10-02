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

export async function registerUser({ email, password }) {
  const response = await fetch(
    'https://skypro-music-api.skyeng.tech/user/signup/',
    {
      method: 'POST',
      body: JSON.stringify({
        email,
        password,
        username: email,
      }),
      headers: { 'content-type': 'application/json' },
    },
  );

  const data = await response.json();

  if (!response.ok) {
    const error = data.email?.[0] ?? data.username?.[0] ?? data.password?.[0];

    throw new Error(error);
  }

  return data;
}

export async function loginUser({ email, password }) {
  const response = await fetch(
    'https://skypro-music-api.skyeng.tech/user/login/',
    {
      method: 'POST',
      body: JSON.stringify({
        email,
        password,
      }),
      headers: { 'content-type': 'application/json' },
    },
  );

  const data = await response.json();

  if (!response.ok) {
    const error = data.detail;

    throw new Error(error);
  }

  return data;
}
