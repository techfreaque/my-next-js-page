import { useEffect, useRef, useState } from "react";

// Funny loading messages that get progressively more concerning
const loadingMessages = [
  "Thinking...",
  "Processing your request...",
  "Consulting the digital archives...",
  "Asking Max's brain for permission...",
  "Decoding professional achievements...",
  "Still thinking... this is a good question!",
  "Hmm, let me think harder...",
  "Calculating the perfect response...",
  "This is taking longer than expected...",
  "Did you break me? Just kidding, still working...",
  "Okay, this is getting embarrassing...",
  "I'm definitely overthinking this now...",
  "Maybe I should have paid attention in AI school...",
  "Is this thing on? *taps microphone*",
  "I'm not stuck, you're stuck!",
  "Calling tech support... just kidding, still processing...",
  "Error 404: Patience not found. Still working though!",
  "I promise I'm not just staring at the wall...",
  "This is fine. Everything is fine. 🔥",
  "At this point I'm just shutting down... 🔥",
  "At this point I'm just shutting down..🔥🔥",
  "At this point I'm just shutting down🔥🔥",
  "At this point I'm just shutting do🔥🔥",
  "At this point I'm just shutting 🔥🔥",
  "At this point I'm just shuttin🔥🔥",
  "At this point I'm just shutt🔥🔥",
  "At this point I'm just shu🔥🔥",
  "At this point I'm just s🔥🔥",
  "At this point I'm just🔥🔥",
  "At this point I'm ju🔥🔥",
  "At this point I'm 🔥🔥",
  "At this point I'🔥🔥",
  "At this point 🔥🔥",
  "At this poin🔥🔥",
  "At this po🔥🔥",
  "At this 🔥🔥",
  "At thi🔥🔥",
  "At t🔥🔥",
  "At🔥🔥",
  "🔥🔥",
  "🔥",
  "",
];

export function useChatLoading(): {
  isLoading: boolean;
  loadingText: string;
  startLoadingAnimation: () => void;
  stopLoadingAnimation: () => void;
  setIsLoading: (loading: boolean) => void;
} {
  const [isLoading, setIsLoading] = useState(false);
  const [loadingText, setLoadingText] = useState(loadingMessages[0]);
  const loadingIntervalRef = useRef<number | null>(null);

  const startLoadingAnimation = (): void => {
    setLoadingText(loadingMessages[0]);

    let messageIndex = 0;
    loadingIntervalRef.current = window.setInterval(() => {
      messageIndex++;
      if (messageIndex < loadingMessages.length) {
        setLoadingText(loadingMessages[messageIndex]);
      } else {
        // After all messages, cycle through the last few funny ones
        const funnyMessages = loadingMessages.slice(-5);
        setLoadingText(funnyMessages[messageIndex % funnyMessages.length]);
      }
    }, 2000); // Change message every 2 seconds
  };

  const stopLoadingAnimation = (): void => {
    if (loadingIntervalRef.current) {
      clearInterval(loadingIntervalRef.current);
      loadingIntervalRef.current = null;
    }
    setLoadingText(loadingMessages[0]);
  };

  // Cleanup loading animation on unmount
  useEffect(() => {
    return (): void => {
      if (loadingIntervalRef.current) {
        clearInterval(loadingIntervalRef.current);
      }
    };
  }, []);

  return {
    isLoading,
    loadingText,
    startLoadingAnimation,
    stopLoadingAnimation,
    setIsLoading,
  };
}
