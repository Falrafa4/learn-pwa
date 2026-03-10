import Input from "./Input";
import Label from "./Label";

export default function InputForm({ label, name, type, placeholder, ref }) {
    return (
        <div className="mb-6">
            <Label htmlFor={name}>
                {label}
            </Label>
            <Input name={name} type={type} placeholder={placeholder} ref={ref} />
        </div>
    )
}