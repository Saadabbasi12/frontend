export default function AIScreeningSummary() {
  return (
    <div className="p-4 border rounded-lg mt-6 bg-gray-50">
      <h3 className="font-semibold mb-3">
        AI Screening Summary
      </h3>

      <p className="text-sm text-gray-600 mb-3">
        Transcript (mock):
        <br />
        “I have 3 years of experience with React and enjoy building
        clean user interfaces…”
      </p>

      <ul className="text-sm space-y-1">
        <li>🗣 Communication: 8.5 / 10</li>
        <li>🎯 Clarity: 8 / 10</li>
        <li>💡 Confidence: 7.5 / 10</li>
      </ul>

      <p className="mt-3 text-sm font-medium">
        Recommendation: <span className="text-green-600">Proceed to interview</span>
      </p>
    </div>
  );
}