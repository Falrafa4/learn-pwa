export default function Input({name, type, placeholder, ref}) {
    return (
        <input
            type={type}
            id={name}
            className="text-sm border border-slate-300 rounded w-full py-2 px-3 text-slate-700 focus:ring focus:ring-blue-600"
            placeholder={placeholder}
            name={name}
            ref={ref}
        />
    )
}