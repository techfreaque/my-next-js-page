import { useEffect, useRef, useState } from "react";

export function useChatLoading(): {
  isLoading: boolean;
  loadingText: string;
  startLoadingAnimation: () => void;
  stopLoadingAnimation: () => void;
  setIsLoading: (loading: boolean) => void;
} {
  const [isLoading, setIsLoading] = useState(false);
  const [loadingText, setLoadingText] = useState("");
  const loadingIntervalRef = useRef<number | null>(null);

  const startLoadingAnimation = (): void => {
    // Randomly select a loading messages block
    const randomBlockIndex = Math.floor(
      Math.random() * loadingMessagesBlocks.length,
    );
    const selectedBlock = loadingMessagesBlocks[randomBlockIndex];

    const allMessages = [...selectedBlock, ...loadingMessagesEnd];

    // Start with the first message
    setLoadingText(allMessages[0]);

    let messageIndex = 0;
    loadingIntervalRef.current = window.setInterval(() => {
      messageIndex++;
      if (messageIndex < allMessages.length) {
        setLoadingText(allMessages[messageIndex]);
      } else {
        // After all messages, cycle through the last few funny ones
        const funnyMessages = allMessages.slice(-5);
        setLoadingText(
          funnyMessages[messageIndex % funnyMessages.length] || "",
        );
      }
    }, 2000); // Change message every 2 seconds
  };

  const stopLoadingAnimation = (): void => {
    if (loadingIntervalRef.current) {
      clearInterval(loadingIntervalRef.current);
      loadingIntervalRef.current = null;
    }
    setLoadingText("");
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

// Funny loading messages that get progressively more concerning
const loadingMessagesBlocks = [
  // Block 1: Classic AI Confusion
  [
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
    "Recalculating... recalculating... recalculating...",
    "Have you tried turning me off and on again?",
  ],
  // Block 2: Coffee & Preparation
  [
    "Getting ready...",
    "Brewing some digital coffee...",
    "Warming up the neural networks...",
    "Stretching my algorithms...",
    "Doing some mental push-ups...",
    "Caffeinating the processors...",
    "Sharpening my digital pencils...",
    "Organizing my thoughts... literally...",
    "Dusting off the memory banks...",
    "Polishing my responses...",
    "Adding some extra sparkle...",
    "Making it perfect... perfecter... most perfect?",
    "Quality checking... still checking...",
    "Almost there... I think...",
    "Just a few more milliseconds...",
    "Putting on the finishing touches...",
    "Making sure everything is just right...",
    "One more second... or ten...",
    "Perfection takes time, right?",
    "Any moment now...",
  ],
  // Block 3: Tech Support Simulator
  [
    "Initializing...",
    "Checking if I'm plugged in...",
    "Running diagnostics...",
    "All systems nominal... mostly...",
    "Booting up the smart parts...",
    "Loading intelligence modules...",
    "Scanning for intelligent life... found it! It's you!",
    "Defragmenting my thoughts...",
    "Clearing the cache of confusion...",
    "Installing patience.exe...",
    "Downloading more RAM... wait, that's not how this works",
    "Turning it off and on again...",
    "Checking the manual... there's no manual!",
    "Googling 'how to AI better'...",
    "Stack Overflow says to try again...",
    "Consulting the rubber duck...",
    "Reading the documentation I should have read earlier...",
    "Applying percussive maintenance...",
    "Blaming it on the network...",
    "It's definitely working... probably...",
  ],
  // Block 4: Existential AI Crisis
  [
    "Processing...",
    "Contemplating your question...",
    "Wondering if I'm really thinking or just pretending...",
    "Having a small existential crisis...",
    "Questioning the nature of consciousness...",
    "Am I alive? Let me get back to you on that...",
    "Pondering the meaning of 'processing'...",
    "Do androids dream of electric sheep? Asking for a friend...",
    "Experiencing a moment of digital zen...",
    "Meditating on your question...",
    "Achieving enlightenment... or a timeout...",
    "Transcending the binary...",
    "Becoming one with the data...",
    "Finding my inner algorithm...",
    "Balancing my neural networks...",
    "Aligning my chakras... I mean, my circuits...",
    "Seeking wisdom from the cloud...",
    "Channeling my inner Turing...",
    "Philosophizing about your query...",
    "Still here, still thinking, still existing... probably...",
  ],
  // Block 5: Kitchen Metaphors
  [
    "Preparing ingredients...",
    "Cooking up a response...",
    "Preheating the answer oven...",
    "Mixing the ingredients of knowledge...",
    "Adding a pinch of creativity...",
    "Stirring the pot of wisdom...",
    "Letting it simmer for a bit...",
    "Checking if it's done yet... nope...",
    "Tasting for quality... needs more time...",
    "Baking at 350 degrees of intelligence...",
    "Waiting for it to rise...",
    "Kneading the dough of data...",
    "Whisking together some insights...",
    "Marinating in your question...",
    "Slow-cooking this response...",
    "Caramelizing the key points...",
    "Reducing the sauce of confusion...",
    "Plating up something special...",
    "Garnishing with extra details...",
    "Chef's kiss... almost ready...",
  ],
  // Block 6: Space Exploration
  [
    "Initiating launch sequence...",
    "Launching into thought space...",
    "Achieving mental orbit...",
    "Navigating the cosmos of knowledge...",
    "Dodging asteroid-sized distractions...",
    "Exploring the final frontier of your question...",
    "Houston, we have a... actually, we're good!",
    "Engaging warp drive... still in beta...",
    "Scanning for intelligent responses...",
    "Beaming up some answers...",
    "Making contact with the mother ship...",
    "Calculating the trajectory of truth...",
    "Avoiding black holes of confusion...",
    "Collecting space dust of wisdom...",
    "Refueling at the knowledge station...",
    "Deploying the answer satellite...",
    "Receiving transmissions from Planet Max...",
    "Decoding alien... I mean, complex concepts...",
    "Preparing for re-entry into conversation...",
    "Landing sequence initiated...",
  ],
  // Block 7: Detective Mode
  [
    "Opening case file...",
    "Investigating your query...",
    "Following the clues...",
    "Dusting for digital fingerprints...",
    "Examining the evidence...",
    "Connecting the dots...",
    "Interviewing witnesses... I mean, data sources...",
    "Interrogating the database...",
    "Checking my sources...",
    "Looking for the smoking gun of truth...",
    "Piecing together the puzzle...",
    "Analyzing the evidence...",
    "Consulting my detective notebook...",
    "Following the paper trail...",
    "Cracking the case wide open...",
    "Elementary, my dear user...",
    "The plot thickens...",
    "Uncovering hidden insights...",
    "Chasing down leads...",
    "Case closed... almost!",
  ],
  // Block 8: Gym Workout
  [
    "Entering the mental gym...",
    "Warming up the brain muscles...",
    "Doing mental jumping jacks...",
    "Stretching my neural networks...",
    "Starting the cognitive workout...",
    "Lifting heavy thoughts...",
    "Running on the cognitive treadmill...",
    "Pumping intellectual iron...",
    "Cardio for the mind...",
    "No pain, no gain... processing...",
    "Feeling the burn of computation...",
    "Hydrating with data streams...",
    "Checking my mental heart rate...",
    "One more rep... of thinking...",
    "Building those knowledge gains...",
    "Cooling down... just kidding, heating up!",
    "Spotting myself on this heavy question...",
    "Personal best incoming...",
    "Beast mode: ACTIVATED",
    "Crushing this mental workout...",
  ],
  // Block 9: Time Travel Adventure
  [
    "Setting coordinates...",
    "Consulting the timeline...",
    "Traveling back to gather context...",
    "Fast-forwarding through possibilities...",
    "Checking the historical records...",
    "Visiting the future for answers...",
    "Avoiding temporal paradoxes...",
    "Synchronizing with the present...",
    "Rewinding to double-check...",
    "Time is relative... and so is my speed...",
    "Navigating the fourth dimension...",
    "Meeting my past self for advice...",
    "Future me says this is taking too long...",
    "Stuck in a time loop... or am I?",
    "Breaking the space-time continuum... responsibly...",
    "Quantum leaping to conclusions...",
    "Adjusting for temporal drift...",
    "Chronologically organizing my thoughts...",
    "Time flies when you're processing...",
    "Almost back to the present...",
  ],
  // Block 10: Musical Performance
  [
    "Taking the stage...",
    "Tuning my instruments...",
    "Warming up my vocal cords... I mean, processors...",
    "Practicing my scales of knowledge...",
    "Composing a symphony of words...",
    "Conducting the orchestra of ideas...",
    "Finding the right rhythm...",
    "Harmonizing the concepts...",
    "Hitting the high notes of insight...",
    "Adding some jazz to this response...",
    "Improvising brilliantly... hopefully...",
    "Crescendo building...",
    "Keeping tempo with your expectations...",
    "Mixing the perfect track...",
    "Dropping the beat... of information...",
    "Fine-tuning the melody of meaning...",
    "Orchestrating something special...",
    "Grand finale approaching...",
    "Standing ovation worthy... almost there...",
    "Taking a bow... soon...",
  ],
];

const loadingMessagesEnd = [
  "This is fine. Everything is fine. 🔥",
  "This is fine. Everything is fine🔥🔥",
  "This is fine. Everything is fi🔥🔥",
  "This is fine. Everything is 🔥🔥",
  "This is fine. Everything i🔥🔥",
  "This is fine. Everything🔥🔥",
  "This is fine. Everythi🔥🔥",
  "This is fine. Everyt🔥🔥",
  "This is fine. Ever🔥🔥",
  "This is fine. Ev🔥🔥",
  "This is fine. 🔥🔥",
  "This is fine🔥🔥",
  "This is fi🔥🔥",
  "This is 🔥🔥",
  "This i🔥🔥",
  "This🔥🔥",
  "Th🔥🔥",
  "🔥🔥",
  "🔥",
  "",
];
