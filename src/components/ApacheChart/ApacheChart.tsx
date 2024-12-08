import React from "react"
import styles from "./achart.module.scss";
import ReactECharts from "echarts-for-react";




const ApacheChart = ({data}: { data:any}) => {
    return <div className={styles.chartSideBlock}>
        <div className={styles.chartSide}>
            <ReactECharts
                option={{
                    title: {
                        text: 'Участники',
                        left: 'center'
                    },
                    legend: {
                        bottom: 10,
                        left: 'center',
                        data: data.map((item:{name:string,sum:string})=>item.name)
                    },
                    series: [
                        {
                            type: 'pie',
                            radius: '85%',
                            data: data.map((item:{name:string,sum:string}) => ({name: item.name, value: item.sum})),
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
            />
        </div>
    </div>
}

export default ApacheChart