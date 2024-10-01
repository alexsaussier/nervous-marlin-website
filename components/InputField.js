export default function InputField({ label, name, type, placeholder, value, onChange, darkMode = false }) {
  const labelClass = darkMode 
    ? "block text-sm font-medium text-gray-200"
    : "block text-sm font-medium text-gray-700";

  const inputClass = darkMode
    ? "mt-1 block w-full px-3 py-2 rounded-md border-gray-600 bg-gray-700 text-white shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-base"
    : "mt-1 block w-full px-3 py-2 rounded-md border-gray-300 shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-base";

  return (
    <div>
      <label htmlFor={name} className={labelClass}>{label}</label>
      <input
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={inputClass}
      />
    </div>
  );
}
