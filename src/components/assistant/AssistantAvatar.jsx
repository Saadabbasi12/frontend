export default function AssistantAvatar({ status }) {
  const emojiMap = {
    idle: "😌",
    thinking: "🤔",
    speaking: "🗣️",
    listening: "🎧",
  };

  return (
    <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-2xl">
      {emojiMap[status]}
    </div>
  );
}