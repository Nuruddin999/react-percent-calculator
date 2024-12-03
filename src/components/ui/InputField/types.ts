import {InputHTMLAttributes} from "react";

export type HTMLInputProps = Pick<
    InputHTMLAttributes<HTMLInputElement>,
    | 'autoComplete'
    | 'autoFocus'
    | 'defaultValue'
    | 'disabled'
    | 'id'
    | 'name'
    | 'onBlur'
    | 'onChange'
    | 'onFocus'
    | 'onInput'
    | 'placeholder'
    | 'readOnly'
    | 'required'
    | 'type'
    | 'value'
>;

export interface InputFieldProps extends HTMLInputProps {
    className?: string;
}