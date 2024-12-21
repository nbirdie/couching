import styles from './Sidebar.module.css';

interface SidebarProps {
  sections: Record<
    string,
    {
      title: string;
      subtitle?: string;
      hightlight?: string;
      points: { title: string; subtitle?: string }[];
    }
  >;
  activeSection: string;
  onSectionChange: (section: string) => void;
}

export default function Sidebar({
  sections,
  activeSection,
  onSectionChange,
}: SidebarProps) {
  return (
    <div className={styles.sidebar}>
      {Object.entries(sections).map(([key, { title }]) => (
        <button
          key={key}
          className={`${styles.button} ${
            activeSection === key ? styles.active : ''
          }`}
          onClick={() => onSectionChange(key)}
        >
          {title}
        </button>
      ))}
    </div>
  );
}
