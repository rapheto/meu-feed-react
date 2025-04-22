import  { Post } from './components/Post.jsx';
import { Sidebar } from './components/Sidebar.jsx';

import styles from './App.module.css';
import './global.css'
 
const posts = [
  {
    id:1,
    author: {
      avatarUrl: 'https://github.com/rapheto.png',
      name: 'Raphael Miranda',
      role: 'Student @CesarSchool',
    },
    content:[
      { type: 'paragraph', content: 'Fala galera!'},
      { type: 'paragraph', content:'Do Youtube!'},
      { type: 'link', content:'rapheto.design'},
    ],
    publisehdAt: new Date('2025-04.20 21:00:00'),
  },
  {
    id:2,
    author: {
      avatarUrl: 'https://github.com/diego3g.png',
      name: 'Diego Fernandes',
      role: 'CTO @RocketSeat'
    },
    content:[
      { type: 'paragraph', content: 'Fala galera!'},
      { type: 'paragraph', content:'Do Youtube!'},
      { type: 'link', content:'rapheto.design'},
    ],
    publisehdAt: new Date('2025-04.20 21:00:00'),
  },
];

export function App() {
  return (
    <div>
      <div className={styles.wrapper}>
        <aside>
          <Sidebar />
        </aside>
        <main>
          {posts.map(post => {
            return (
              <Post
              
              />
            )
          })}
        </main>

      </div>
    </div>
  )
}