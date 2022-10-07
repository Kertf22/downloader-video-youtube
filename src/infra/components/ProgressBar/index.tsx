import style from "./index.module.css"

interface IProgressBarProps {
    id: string;
}
const ProgressBar = ({ id }: IProgressBarProps) => {

    return (<div id={id} className={`${style.progress} ${style["progress-striped"]}`}>
        <div className={style["progress-bar"]}>
        </div>
    </div>
    )
};

export { ProgressBar };