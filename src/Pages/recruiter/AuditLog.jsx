export default function AuditLog({ logs }) {
  return (
    <div className="p-4 border rounded-lg">
      <h3 className="font-semibold mb-4">Activity Timeline</h3>

      <ul className="space-y-3 text-sm">
        {logs.map((log) => (
          <li key={log.id} className="text-gray-600">
            <span className="block">{log.message}</span>
            <span className="text-xs text-gray-400">
              {new Date(log.time).toLocaleString()}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}