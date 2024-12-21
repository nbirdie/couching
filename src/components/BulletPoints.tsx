import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import styles from './BulletPoints.module.css';
import cn from 'classnames';

interface BulletPointsProps {
  title: string;
  subtitle?: string;
  hightlight?: string;
  points: { title: string; subtitle?: string }[];
  pageId: string;
}

export default function BulletPoints({
  title,
  subtitle,
  hightlight,
  points,
  pageId,
}: BulletPointsProps) {
  const [visiblePoints, setVisiblePoints] = useState<number[]>([]);

  useEffect(() => {
    setVisiblePoints([]);
  }, [pageId]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') {
        setVisiblePoints((prev) => {
          const next = points.findIndex((_, i) => !prev.includes(i));
          return next >= 0 ? [...prev, next] : prev;
        });
      } else if (e.key === 'ArrowLeft') {
        setVisiblePoints((prev) => prev.slice(0, -1));
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [points]);

  const handleNext = () => {
    setVisiblePoints((prev) => {
      const next = points.findIndex((_, i) => !prev.includes(i));
      return next >= 0 ? [...prev, next] : prev;
    });
  };

  const handlePrev = () => {
    setVisiblePoints((prev) => prev.slice(0, -1));
  };

  const handleReset = () => {
    setVisiblePoints([]);
  };

  const handleShowAll = () => {
    setVisiblePoints(points.map((_, index) => index));
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2>{title}</h2>

        <div className={styles.controls}>
          <button onClick={handleReset} className={styles.button}>
            <X size={20} />
          </button>
          <button onClick={handlePrev} className={styles.button}>
            <ChevronLeft size={20} />
          </button>
          <button onClick={handleNext} className={styles.button}>
            <ChevronRight size={20} />
          </button>
          <button
            onClick={handleShowAll}
            className={cn(styles.button, styles['christmas-button'])}
          >
            Показать все
          </button>
        </div>
      </div>
      <ul className={styles.points}>
        {subtitle && (
          <h3 dangerouslySetInnerHTML={{ __html: subtitle ?? '' }} />
        )}
        {points.map((point, index) => (
          <li
            key={index}
            className={`${styles.point} ${
              visiblePoints.includes(index) ? styles.visible : ''
            }`}
          >
            <p className={styles.hightlight}>{point.title}</p>
            {point.subtitle && (
              <span className={styles.subtitle}>{point.subtitle}</span>
            )}
          </li>
        ))}
      </ul>
      {hightlight && <p className={styles.hightlight}>{hightlight}</p>}
    </div>
  );
}
