import { Header } from "./components/Header"
import { Sidebar } from "./components/Sidebar"
import { Post, PostType } from './components/Post'

import styles from './App.module.css'
import './global.css'


const posts : PostType[] = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/wanderson648.png',
      name: 'Wanderson Oliveira',
      role: 'Analista de TI'
    },
    content: [
      { type: 'paragraph', content: 'Fala garaleraa' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu postifa.' },
      { type: 'link', content: 'jane.design/doctorcare' }
    ],
    publisheAt: new Date('2023-05- 20:44:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/diego3g.png',
      name: 'Diego Fernandes',
      role: 'CTO @ Rocketseat'
    },
    content: [
      { type: 'paragraph', content: 'Fala garaleraa' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu postifa.' },
      { type: 'link', content: 'jane.design/doctorcare' }
    ],
    publisheAt: new Date('2023-05- 20:44:00')
  },

]

function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => (
            <Post
              key={post.id}
              post={post}
            />
          ))}
        </main>
      </div>
    </div>
  )
}

export default App
