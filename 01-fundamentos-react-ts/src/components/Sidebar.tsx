import { PencilLine } from 'phosphor-react'
import { Avatar } from './Avatar'

import styles from '../components/Sidebar.module.css'


export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src="https://images.unsplash.com/photo-1604964432806-254d07c11f32?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZGV2ZWxvcGVyfGVufDB8fDB8fHww&auto=format&fit=crop&w=400&q=50" />

      <div className={styles.profile}>
        <Avatar
          src="https://github.com/wanderson648.png"
        />

        <strong>Wanderson Oliveira</strong>
        <span>Web Developer</span>
      </div>

      <footer>
        <a href="#">
          <PencilLine size={20} />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  )
}