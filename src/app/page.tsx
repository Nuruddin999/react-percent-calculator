"use client"

import styles from "./main.module.scss";
import React, {useState} from "react";
import InputField from "@/components/ui/InputField";
import CustomButton from "@/components/ui/button";
import {RemoveCircle} from "@mui/icons-material";
import {IconButton} from "@mui/material";
import ReactECharts from 'echarts-for-react';

export default function Home() {
    const [name, setName] = useState('');
    const [sum, setSum] = useState('');
    const [data, setData] = useState<Array<{ name: string, sum: number, share: string }>>([]);

    const handleNameChange = (e: any) => setName(e.target.value);

    const handleSumChange = (e: any) => {
        setSum(e.target.value);
    };

    const handleDelete = (id: string) => {
        let fileterdData = data.filter(el => el.name !== id)
        setData(fileterdData)
    }

    const calculate = () => {

        let current = parseInt(sum)
        const updatedData = [...data, {name, sum: current, share: 0}];

        const newTotalShare = updatedData.reduce((accumulator, currentValue) => {
            return accumulator + currentValue.sum;
        }, 0);

        const finalData = updatedData.map(item => ({
            ...item,
            share: ((item.sum / newTotalShare) * 100).toFixed(2),
        }));

        setData(finalData);

        setName("");
        setSum("");
    }


    return (
        <div className={styles.mainsec}>
            <div className={styles.textBlock}>
                <h1>Калькулятор долей от общей суммы</h1>
                <p>У одного 100 тыс руб, у другого 300 тыс. руб - нужно узнать у кого какие доли в процентах</p>
            </div>
            <div className={styles.contentBlock}>
                <div className={styles.dataSide}>
                    <div className={styles.inpts}>
                        <InputField placeholder="Имя" onChange={handleNameChange} value={name}/>
                        <InputField placeholder="Сумма" onChange={handleSumChange} value={sum}/>
                        <CustomButton onClick={calculate}>=</CustomButton>
                    </div>
                    <div className={styles.dataWrapper}>
                        {data.map(el =>
                            <div key={el.name} className={styles.dataItem}>
                                <div className={styles.leftData}>
                                    <span>{el.name}</span>
                                    <span>{el.sum}</span>
                                </div>
                                <span className={styles.sharePercent}>{el.share}%</span>
                                <IconButton onClick={() => handleDelete(el.name)}><RemoveCircle
                                    color="error"/></IconButton>
                            </div>)}
                    </div>
                </div>
                <div className={styles.chartSide}>
                    {data.length > 0 && <ReactECharts
                        option={{
                            title: {
                                text: 'Участники',
                                left: 'center'
                            },
                            legend: {
                                bottom: 10,
                                left: 'center',
                                data: data.map(item => item.name)
                            },
                            series: [
                                {
                                    type: 'pie',
                                    radius: '85%',
                                    data: data.map(item => ({name: item.name, value: item.sum})),
                                    emphasis: {
                                        itemStyle: {
                                            shadowBlur: 10,
                                            shadowOffsetX: 0,
                                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                                        }
                                    }
                                }
                            ]
                        }}
                        style={{height: '70vh', width: '100%'}}
                        notMerge={true}
                        lazyUpdate={true}
                        theme={"theme_name"}
                    />}
                </div>
            </div>
        </div>
    );
}
