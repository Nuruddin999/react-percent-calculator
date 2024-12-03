import React, {ButtonHTMLAttributes} from "react"
import styles from "./custombutton.module.scss";

type HTMLButtonProps = ButtonHTMLAttributes<HTMLButtonElement>
const CustomButton = (props: HTMLButtonProps) => {
    return <button className={styles.customButtom} {...props}  />
}

export default CustomButton