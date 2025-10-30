import { Textfield} from "@digdir/designsystemet-react";

interface CustomTextfieldProps {
    description?: string;
    error?: string;
    label: string;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function customTextfield({description, error, label, value, onChange}: CustomTextfieldProps) {
    return(
        <Textfield 
            counter={0}
            description={description}
            error={error}
            label={label}
            value={value}
            onChange={onChange}
            className="[&_input]:border-2 [&_input]:pl-2 [&_input]:border-black [&_input]:rounded-md [&_input]:focus:outline-none [&_input]:focus:ring-0"
            />
    )
}