import {TagProps} from "./Tag.props";
import styles from './Tag.module.css';
import cn from "classnames";

export const Tag = ({size = 's', children, color = 'ghost', href, ...props}: TagProps): JSX.Element => {
    return (
        <div className={cn(styles.tag, {
            [styles.s]: size == 's',
            [styles.m]: size == 'm',
            [styles.ghost]: color == 'ghost',
            [styles.green]: color == 'green',
            [styles.grey]: color == 'grey',
            [styles.red]: color == 'red',
            [styles.primary]: color == 'primary',
        })}>
            {
                href ?
                    <a href={href}>{children}</a>
                    :
                    <>{children}</>
            }
        </div>
    );
};
