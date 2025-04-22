import { Avatar } from './Avatar';
import { Comment } from './Comment';
import style from './Post.module.css';

export function Post(){
    return(
        <article className={style.post}>
            <header>
                <div className={style.author}>
                    <Avatar src="https://github.com/diego3g.png" alt="" />
                    <div className={style.authorInfo}>
                        <strong>
                            Raphael
                        </strong>
                        <span>
                            Desenvolvedor
                        </span>
                    </div>
                </div>
                <time title="31 de Março às 20h16" datetime="2025-03-31 20:17">Publicado há 1 hora</time>
            </header>

            <div className={style.content}>
                <p>Oii galerainha do youtube</p>
                <p>como voces tão</p>
                <p><a href="">rapha.design</a></p>
                <p>
                    <a href="">#newproject</a>{' '}
                    <a href="">#presentation</a>{' '}
                    <a href="">#rocketseat</a>{' '}         
                </p>

            </div>
            <form className={style.commentForm}>
                <strong>
                        Deixe seu feedback
                </strong>
                <textarea
                    placeholder="Deixe um comentário"
                />
                <footer>
                    <button type="submit">Publicar</button>
                </footer>
                
            </form>
            <div className={style.commentList}>
                <Comment/>
                <Comment/>
                <Comment/>
            </div>
        </article>
    )

}