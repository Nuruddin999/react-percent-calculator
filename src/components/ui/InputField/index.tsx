import React from "react"
import {HTMLInputProps, InputFieldProps} from "@/components/ui/InputField/types";
import styles from "./inputfield.module.scss";
const InputField = (props: InputFieldProps) => {
  return <input  {...props} className={styles.inputField+" "+props.className} />
}

export default InputField