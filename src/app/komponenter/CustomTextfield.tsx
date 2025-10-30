import { Textfield} from "@digdir/designsystemet-react";

interface CustomTextfieldProps {
    description?: string;
    error?: string;
    label: string;
}

export default function customTextfield({description, error, label}: CustomTextfieldProps) {
    return(
        <Textfield 
            counter={0}
            description={description}
            error={error}
            label={label} 
            className="[&_input]:border-2 [&_input]:pl-2 [&_input]:border-black [&_input]:rounded-md [&_input]:focus:outline-none [&_input]:focus:ring-0"
            />
    )
}