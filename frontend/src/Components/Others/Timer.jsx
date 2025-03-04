import { useState, useEffect } from "react";
import { Clock, Pause, Play, Minimize } from "lucide-react";


export default function ExperimentTimer({ experimentStarted }) {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    let interval;

    if (experimentStarted) {
      setRunning(true);
    }

    if (running) {
      interval = setInterval(() => {
        setTime((prev) => prev + 1);

        // Trigger haptic feedback every 10 seconds
        if (time > 0 && time % 300 === 0 && "vibrate" in navigator) {
          navigator.vibrate(1200);
        }
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [running, experimentStarted, time]);

  return (
    <div className="fixed top-4 right-10 bg-gray-900 text-white rounded-full p-2 flex items-center shadow-lg ">
      <button onClick={() => setExpanded(!expanded)}>
        <Clock className="w-6 h-6 text-white cursor-pointer" />
      </button>

      {expanded && (
        <div className="flex items-center bg-gray-800 px-4 py-2 rounded-lg ml-2">
          <span className="text-lg font-semibold">{formatTime(time)}</span>
          <button onClick={() => setRunning(!running)} className="ml-3">
            {running ? <Pause className="w-5 h-5 cursor-pointer" /> : <Play className="w-5 h-5 cursor-pointer" />}
          </button>
          <button onClick={() => setExpanded(false)} className="ml-2">
            <Minimize className="w-5 h-5 cursor-pointer " />
          </button>
        </div>
      )}
    </div>
  );
}

function formatTime(seconds) {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
}
