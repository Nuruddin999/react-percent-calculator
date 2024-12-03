import {GITHUB_COLORS} from "@/components/GithubChart/colors";
export  const getActualColors = (data:Array<any>)=>data.map((item, index) => {
    const colorKey = Object.keys(GITHUB_COLORS)[index];
    return  GITHUB_COLORS[colorKey as keyof typeof GITHUB_COLORS].color!
})