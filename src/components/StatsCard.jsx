
export default function StatsCard({ label, value, icon, color = "blue" }) {
  const colors = {
    blue: "bg-blue-50 text-blue-600 ring-blue-100",
    green: "bg-green-50 text-green-600 ring-green-100",
    yellow: "bg-yellow-50 text-yellow-600 ring-yellow-100",
    red: "bg-red-50 text-red-600 ring-red-100",
    purple: "bg-purple-50 text-purple-600 ring-purple-100",
  };

  return (
    <div className="bg-white rounded-2xl p-5 flex items-center gap-4
      shadow-sm ring-1 ring-gray-100
      hover:shadow-lg hover:-translate-y-0.5
      transition-all duration-300"
    >
      {/* Icon */}
      <div
        className={`p-3 rounded-xl flex items-center justify-center ring-4 ${colors[color]}`}
      >
        {icon}
      </div>

      {/* Text */}
      <div>
        <p className="text-sm font-medium text-gray-500 tracking-wide">
          {label}
        </p>
        <p className="text-3xl font-bold text-gray-900">
          {value}
        </p>
      </div>
    </div>
  );
}
