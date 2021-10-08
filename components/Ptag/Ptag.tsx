import {PtagProps} from "./Ptag.props";
import styles from './Ptag.module.css';
import cn from "classnames";

export const Ptag = ({size = 'm', children}: PtagProps): JSX.Element => {
    return (
        <p className={cn(styles.paragraph, {
            [styles.s]: size == 's',
            [styles.m]: size == 'm',
            [styles.xl]: size == 'xl'
        })}>{children}</p>
    );
};
