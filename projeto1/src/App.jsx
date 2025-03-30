import  { Post } from './Post.jsx';
import { Sidebar } from './components/Sidebar.jsx';
import styles from './App.module.css';

import './global.css'

export function App() {
  return (
    <div>
      <div className={styles.wrapper}>
        <aside>
          <Sidebar />
        </aside>
        <main>
          <Post 
            author='Raphael'
            content='Ola mundo'
          />
          <Post
            author='Pedro'
            content='Ola pedro'
          />
        </main>

      </div>
    </div>
  )
}