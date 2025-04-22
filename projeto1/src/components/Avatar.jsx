import style from './Avatar.module.css';

export function Avatar({ hasBorder = true, src}){

    return(
        <div>
            <img className={hasBorder ? style.avatarWithBorder : style.avatar} 
            src={src}
            />
        </div>
    )
}