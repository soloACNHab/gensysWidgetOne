import { useState, useEffect, useRef } from "react";

export default function useMessages(transcriptStream, callState) {
  const [messages, setMessages] = useState([]);
  //const hasStarted = useRef(false);
  const timers = useRef([]);

  useEffect(() => {
    if (callState === "ended") {
      //show all full transcript immediately
      timers.current.forEach(clearTimeout);
      timers.current = [];

      setMessages(transcriptStream);
      return;
    }
    /*if (hasStarted.current) return; // Prevent restarting the stream if callState changes again
    hasStarted.current = true;*/

    transcriptStream.forEach((msg, index) => {
      const timer = setTimeout(() => {
        setMessages((prevMessages) => [...prevMessages, msg]);
      }, index * 3000); // Simulate receiving a new message every 3 seconds
      timers.current.push(timer);
    });

    return () => {
      timers.current.forEach(clearTimeout);
    };
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [transcriptStream, callState]);
  return messages;
}
