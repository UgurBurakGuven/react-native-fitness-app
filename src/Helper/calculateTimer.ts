function calculateTimer(timeInSeconds: number): Array<number | string> {
  let hours: number = Math.floor(timeInSeconds / 216000);
  let minutes: number = Math.floor(timeInSeconds / 3600);
  let seconds: number = Math.floor((timeInSeconds - minutes * 3600) / 60);
  let splitSeconds: number = timeInSeconds - minutes * 3600 - seconds * 60;
  let hoursFormat = hours < 10 ? `0${hours}` : hours;
  let minutesFormat = minutes < 10 ? `0${minutes}` : minutes;
  let secondsFormat = seconds < 10 ? `0${seconds}` : seconds;
  let splitSecondsFormat =
    splitSeconds < 10 ? `0${splitSeconds}` : splitSeconds;
  return [hoursFormat, minutesFormat, secondsFormat, splitSecondsFormat];
}

export default calculateTimer;
