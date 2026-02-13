import { useState } from "react";

export default function RubricEditor({ rubric, onSave }) {
  const [localRubric, setLocalRubric] = useState(rubric);

  const updateItem = (id, field, value) => {
    setLocalRubric((prev) =>
      prev.map((r) => (r.id === id ? { ...r, [field]: value } : r)),
    );
  };

  return (
    <div className="p-4 border rounded-lg">
      <h3 className="font-semibold mb-4">Evaluation Rubric</h3>

      {localRubric.map((item) => (
        <div key={item.id} className="flex gap-3 mb-3">
          <input
            className="border px-2 py-1 flex-1"
            value={item.label}
            onChange={(e) => updateItem(item.id, "label", e.target.value)}
          />
          <input
            type="number"
            className="border px-2 py-1 w-20"
            value={item.weight}
            onChange={(e) =>
              updateItem(item.id, "weight", Number(e.target.value))
            }
          />
        </div>
      ))}

      <button
        onClick={() => onSave(localRubric)}
        className="mt-3 px-4 py-2 bg-blue-600 text-white rounded"
      >
        Save Rubric
      </button>
    </div>
  );
}
