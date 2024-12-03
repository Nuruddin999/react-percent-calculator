import React, {useEffect} from 'react';
import styles from "./dchart.module.scss";
import {getActualColors} from "@/components/GithubChart/utils";

interface LanguageData {
    name: string;
    sum: number;
    share: string;
}

interface GithubChartProps {
    data: LanguageData[];
}

export const GithubChart: React.FC<GithubChartProps> = ({data}) => {

    const [currentColors, setDataColors] = React.useState<string[]>([]);

    useEffect(() => {
        const colorFromData =  getActualColors(data);
        setDataColors(colorFromData)
    }, [data])

    return (
        <div className={styles.languageChart}>
            {data.map((item, index) => {
                return (
                    <span
                        key={index}
                        className={styles.languageBlock}
                        style={{
                            width: `calc(${item.share}%`,
                            backgroundColor: `${currentColors[index]}`
                        }}
                    >
                    </span>
                );
            })}
        </div>
    );
};

