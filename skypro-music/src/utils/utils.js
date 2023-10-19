export const formatSecondsToTime = (time) => {
  const hours = Math.floor(time / 3600);
  const minutes = Math.floor((time % 3600) / 60);
  const seconds = Math.floor(time % 60);
  let fulltime = 0;

  const formattedHours = String(hours).padStart(2);
  let formattedMinutes = String(minutes).padStart(2);
  const formattedSeconds = String(seconds).padStart(2, '0');

  if (hours === 0) {
    fulltime = `${formattedMinutes}:${formattedSeconds}`;
  } else {
    formattedMinutes = String(minutes).padStart(2, '0');
    fulltime = `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
  }

  return fulltime;
};

export const shuffleArray = (array) => {
  return array.sort(() => Math.random() - 0.5);
};
