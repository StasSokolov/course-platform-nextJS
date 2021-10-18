import {AdvantagesProps} from "./Advantages.props";
import style from './Advantages.module.css';

export const Advantages = ({advantages}: AdvantagesProps): JSX.Element => {
    return (
        <>
            {advantages.map(a => (
                    <div key={a._id} className={style.advantage}>
                        <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="25" cy="25" r="25" fill="#C8F8E4"/>
                            <g clipPath="url(#clip0_77:0)">
                                <path
                                    d="M36.297 20.3684L23.636 33.0285C22.6984 33.9663 21.1775 33.9663 20.2391 33.0285L13.7034 26.4923C12.7655 25.5546 12.7655 24.0336 13.7034 23.0956C14.6415 22.1575 16.1622 22.1575 17.0999 23.0953L21.938 27.9335L32.8999 16.9715C33.838 16.0334 35.3589 16.0341 36.2966 16.9715C37.2344 17.9094 37.2344 19.4299 36.297 20.3684Z"
                                    fill="#1DC37E"/>
                            </g>
                            <defs>
                                <clipPath id="clip0_77:0">
                                    <rect width="24" height="24" fill="white" transform="translate(13 13)"/>
                                </clipPath>
                            </defs>
                        </svg>
                        <div className={style.title}>{a.title}</div>
                        <hr className={style.vline}/>
                        <div>{a.description}</div>
                    </div>
                )
            )}
        </>
    );
};
