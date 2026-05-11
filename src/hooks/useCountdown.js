import { useEffect, useState } from "react";

function compute(targetTs) {
  let diff = targetTs - Date.now();
  if (diff < 0) diff = 0;
  const days = Math.floor(diff / 86400000);
  diff %= 86400000;
  const hours = Math.floor(diff / 3600000);
  diff %= 3600000;
  const minutes = Math.floor(diff / 60000);
  const seconds = Math.floor((diff % 60000) / 1000);
  return { days, hours, minutes, seconds };
}

export default function useCountdown(targetISO) {
  const targetTs = new Date(targetISO).getTime();
  const [time, setTime] = useState(() => compute(targetTs));

  useEffect(() => {
    setTime(compute(targetTs));
    const id = setInterval(() => setTime(compute(targetTs)), 1000);
    return () => clearInterval(id);
  }, [targetTs]);

  return time;
}
