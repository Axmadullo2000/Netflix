import {ErrorMessage, FieldHookConfig, useField} from 'formik'

import {InputElementProps} from "@/pages/components/InputElement/InputElementProps";

function InputElement({...props}: InputElementProps & FieldHookConfig<string>) {
    const [field, meta, helpers] = useField(props)

    return (
        <div>
            <input className={`input ${meta.touched && meta.error && 'border-red-500 border-2 focus:bg-transparent'}`} {...props} {...field} />
            <p className={'text-red-500'}><ErrorMessage name={field.name} /></p>
        </div>
    );
}

export default InputElement;
