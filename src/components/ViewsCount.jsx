import { useEffect, useState } from 'react';

export default function ViewsCount() {
  const [count, setCount] = useState("...");

  useEffect(() => {
    fetch("https://31tioiek50.execute-api.us-east-2.amazonaws.com/")
      .then(res => res.json())
      .then(data => setCount(data.count))
      .catch(() => setCount("Error"));
  }, []);

  const getMessage = (count) => {
    if (count === "...") return "Loading visitor count...";
    if (count === "Error") return "Couldn't load visitor count 😢";
    
    const messages = [
      `You're visitor #${count}! Thanks for stopping by! 👋`,
      `Wow! You're the ${count}th person to visit my portfolio! 🎉`,
      `Visitor #${count} - you're awesome! 🌟`,
      `Hey there, visitor #${count}! Welcome to my corner of the web! 🚀`
    ];
    
    return messages[Math.floor(Math.random() * messages.length)];
  };

  return (
    <div className="text-center py-4">
      <p className="text-2xl text-gray-100 dark:text-white font-semibold">
        {getMessage(count)}
      </p>
    </div>
  );
}