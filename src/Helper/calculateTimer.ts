function calculateTimer(timeInSeconds: number): Array<number | string> {
  const hours: number = Math.floor(timeInSeconds / 216000);
  const minutes: number = Math.floor(timeInSeconds / 3600);
  const seconds: number = Math.floor((timeInSeconds - minutes * 3600) / 60);
  const splitSeconds: number = timeInSeconds - minutes * 3600 - seconds * 60;
  const hoursFormat = hours < 10 ? `0${hours}` : hours;
  const minutesFormat = minutes < 10 ? `0${minutes}` : minutes;
  const secondsFormat = seconds < 10 ? `0${seconds}` : seconds;
  const splitSecondsFormat =
    splitSeconds < 10 ? `0${splitSeconds}` : splitSeconds;
  return [hoursFormat, minutesFormat, secondsFormat, splitSecondsFormat];
}

export default calculateTimer;
