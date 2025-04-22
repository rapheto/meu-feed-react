import { ThumbsUp, Trash } from 'phosphor-react';
import style from './Comment.module.css';
import { Avatar } from './Avatar';

export function Comment(){
    return(
        <div className={style.comment}>
            <Avatar hasBorder={false} src="https://avatars.githubusercontent.com/u/78823263?v=4"/>

            <div className={style.commentBox}>
                <div className={style.commentContent}>
                    <header>
                        <div className={style.authorTime}>
                            <strong>Raphael</strong>
                            <time title="31 de Março às 20h16" datetime="2025-03-31 20:17">1 hora atrás</time>
                        </div>
                        <button title="Deletar comentário">
                            <Trash size={24}/>
                        </button>
                    </header>

                    <p>Muito bom Raphael, parabéns!</p>
                </div>
                <footer>
                    <button>
                        <ThumbsUp/>
                        Curtir <span>20</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}