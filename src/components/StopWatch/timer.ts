import React, { useState } from "react";

type Lap = {
  start: Date;
  finish?: Date;
};

function getParts(time: number) {
  const hour: number = Math.floor(time / 216000);
  const minute: number = Math.floor(time / 3600);
  const second: number = Math.floor((time - minute * 3600) / 60);
  const milliSecond: number = time - minute * 3600 - second * 60;
  return { hour, minute, second, milliSecond };
}

function getHour(time: number) {
  const hour = getParts(time).hour;
  return hour < 10 ? `0${hour}` : hour.toString();
}

function getMinute(time: number) {
  const minute = getParts(time).minute;
  return minute < 10 ? `0${minute}` : minute.toString();
}

function getSecond(time: number) {
  const second = getParts(time).second;
  return second < 10 ? `0${second}` : second.toString();
}

function getMilliSecond(time: number) {
  const milliSecond = getParts(time).milliSecond;
  return milliSecond < 10 ? `0${milliSecond}` : milliSecond.toString();
}

export function useTimer() {
  const [time, setTime] = useState(0);
  const [currentLap, setCurrentLap] = useState<Lap>();
  const [laps, setLaps] = useState<Lap[]>([]);
  const [timeInterval, setTimeInterval] = useState<NodeJS.Timeout>();
  const [isIntervalPaused, setIsIntervalPaused] = useState(false);
  const [isStarted, setIsStarted] = useState(false);

  const [hour, setHour] = useState<string>("00");
  const [minute, setMinute] = useState<string>("00");
  const [second, setSecond] = useState<string>("00");
  const [milliSecond, setMilliSecond] = useState<string>("00");

  React.useEffect(() => {
    setTimeInterval((currentTimeInterval) => {
      if (!isStarted) {
        return undefined;
      }

      return setInterval(() => {
        setTime((currentTime) =>
          !isIntervalPaused ? currentTime + 10 : currentTime
        );
        console.log(time);
        setHour(getHour(time));
        setMinute(getMinute(time));
        setSecond(getSecond(time));
        setMilliSecond(getMilliSecond(time));
      }, 10);
    });
    return () => clearInterval(timeInterval!);
  }, [isStarted]);

  function start() {
    setCurrentLap({ start: new Date() });
    setIsIntervalPaused(false);
    setIsStarted(true);
  }

  function pause() {
    setIsIntervalPaused(true);
  }

  function reset() {
    setTime(0);
    setCurrentLap(undefined);
    setLaps([]);
    clearInterval(timeInterval!);
  }

  function addLap() {
    setLaps((laps) => [
      ...laps,
      {
        ...currentLap!,
        finish: new Date(),
      },
    ]);
    setCurrentLap({ start: new Date() });
  }

  return {
    start,
    pause,
    reset,
    addLap,
    hour,
    minute,
    second,
    milliSecond,
  };
}
