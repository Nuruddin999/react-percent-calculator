import styles from "@/app/main.module.scss";
import {IconButton} from "@mui/material";
import {RemoveCircle} from "@mui/icons-material";
import React from "react";

type ParticipantProps = {
    person: {
        name: string;
        sum: number;
        share:string
    },
    handleDelete:(id:string)=>void,
    actualColor: string
}
const Participant: React.FC<ParticipantProps> = ({person,handleDelete,actualColor}) => {
    return <div key={person.name} className={styles.dataItem}>
        <div className={styles.itemColor}>
            <div style={{width: "20px", height: "20px", backgroundColor: actualColor, borderRadius: "50%"}}>
            </div>
        </div>
        <div className={styles.leftData}>
            <span>{person.name}</span>
            <span>{person.sum}</span>
        </div>
        <span className={styles.sharePercent}>{person.share}%</span>
        <IconButton onClick={() => handleDelete(person.name)}><RemoveCircle
            color="error"/></IconButton>
    </div>
}

export default Participant;
