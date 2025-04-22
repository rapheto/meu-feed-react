import { Avatar } from './Avatar';
import style from './Sidebar.module.css';
import { PencilLine } from 'phosphor-react';

export function Sidebar() {
    return(
        <aside className={style.sidebar}>
           <img 
                className={style.cover}
                src="https://images.unsplash.com/photo-1741800465167-0c276ad75e08?q=50&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
           />
            <div className={style.profile}>
                <Avatar src="https://avatars.githubusercontent.com/u/78823263?v=4" />
                <strong>
                    Raphael
                </strong>
                <span>
                    Desenvolvedor
                </span>

                <footer>
                    <a href="#">
                        <PencilLine size={20}/>
                        Editar seu perfil
                    </a>
                </footer>
            </div>
        </aside>
        
    )
}