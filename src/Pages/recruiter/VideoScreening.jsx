import { useState } from "react";

export default function VideoScreening({ onSubmit }) {
  const [video, setVideo] = useState(null);
  const [decision, setDecision] = useState("");
  const [notes, setNotes] = useState("");

  return (
    <div className="p-4 border rounded-lg mt-6">
      <h3 className="font-semibold mb-3">Video Screening</h3>

      {/* Upload */}
      <input
        type="file"
        accept="video/*"
        onChange={(e) => setVideo(e.target.files[0])}
        className="mb-3"
      />

      {/* Preview */}
      {video && (
        <video
          controls
          src={URL.createObjectURL(video)}
          className="w-full rounded mb-3"
        />
      )}

      {/* Decision */}
      <div className="flex gap-3 mb-3">
        {["Pass", "Hold", "Reject"].map((d) => (
          <button
            key={d}
            onClick={() => setDecision(d)}
            className={`px-3 py-1 rounded border ${
              decision === d
                ? "bg-blue-600 text-white"
                : ""
            }`}
          >
            {d}
          </button>
        ))}
      </div>

      {/* Notes */}
      <textarea
        placeholder="Recruiter notes..."
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
        className="w-full border rounded p-2 text-sm"
      />

      <button
        disabled={!video || !decision}
        onClick={() =>
          onSubmit({
            video,
            decision,
            notes,
          })
        }
        className="mt-3 px-4 py-2 bg-blue-600 text-white rounded disabled:opacity-50"
      >
        Submit Screening
      </button>
    </div>
  );
}