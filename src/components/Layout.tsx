import { ReactNode } from 'react';
import styles from './Layout.module.css';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className={styles.layout}>
      {/* <nav className={styles.nav}>
        <Link 
          to="/" 
          className={location.pathname === '/' ? styles.active : ''}
        >
          Главная
        </Link>
        <Link 
          to="/year-review" 
          className={location.pathname === '/year-review' ? styles.active : ''}
        >
          Итоги года
        </Link>
        <Link 
          to="/pricing" 
          className={location.pathname === '/pricing' ? styles.active : ''}
        >
          Цены
        </Link>
      </nav> */}
      <main className={styles.main}>{children}</main>
    </div>
  );
}
