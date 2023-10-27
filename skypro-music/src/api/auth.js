const baseUrl = 'https://skypro-music-api.skyeng.tech/user/';

export async function registerUser({ email, password }) {
  const response = await fetch(`${baseUrl}signup/`, {
    method: 'POST',
    body: JSON.stringify({
      email,
      password,
      username: email,
    }),
    headers: { 'content-type': 'application/json' },
  });

  const data = await response.json();

  if (!response.ok) {
    const error = data.email?.[0] ?? data.username?.[0] ?? data.password?.[0];

    throw new Error(error);
  }

  if (response.status === 500) {
    throw new Error('Сервер не отвечает');
  }

  return data;
}

export async function loginUser({ email, password }) {
  const response = await fetch(`${baseUrl}login/`, {
    method: 'POST',
    body: JSON.stringify({
      email,
      password,
    }),
    headers: { 'content-type': 'application/json' },
  });

  const data = await response.json();

  if (!response.ok) {
    const error = data.detail ?? data.email ?? data.password;

    throw new Error(error);
  }

  if (response.status === 500) {
    throw new Error('Сервер не отвечает');
  }

  return data;
}

function saveToken(token) {
  const tokenObject = JSON.parse(token);
  localStorage.setItem('access', JSON.stringify(tokenObject.access));
  localStorage.setItem('refresh', JSON.stringify(tokenObject.refresh));
}

export async function getToken({ email, password }) {
  const response = await fetch(`${baseUrl}token/`, {
    method: 'POST',
    body: JSON.stringify({
      email,
      password,
    }),
    headers: { 'content-type': 'application/json' },
  });

  const data = await response.json();
  saveToken(JSON.stringify(data));

  if (!response.ok) {
    const error = data.detail ?? data.email ?? data.password;

    throw new Error(error);
  }

  if (response.status === 500) {
    throw new Error('Сервер не отвечает');
  }

  return data;
}

export async function refreshToken(tokenRefresh) {
  const response = await fetch(`${baseUrl}token/refresh/`, {
    method: 'POST',
    body: JSON.stringify({
      refresh: tokenRefresh,
    }),
    headers: { 'content-type': 'application/json' },
  });

  const data = await response.json();
  saveToken(JSON.stringify(data));

  if (!response.ok) {
    const error = data.detail ?? data.email ?? data.password;

    throw new Error(error);
  }

  if (response.status === 500) {
    throw new Error('Сервер не отвечает');
  }

  return data;
}
