import { useEffect, useState } from 'react';

const TableOfContents = ({ headings }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      const index = headings.findIndex(
        ({ offsetTop }) => offsetTop > scrollPosition
      );

      setActiveIndex(index === -1 ? headings.length - 1 : index - 1);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [headings]);

  return (
    <div className="table-of-contents">
      <h2>目次</h2>
      <ul>
        {headings.map(({ title }, index) => (
          <li key={index}>
            <a
              href={`#heading-${index}`}
              className={index === activeIndex ? 'active' : ''}
            >
              {title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TableOfContents;
