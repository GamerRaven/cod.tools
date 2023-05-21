import Link from 'next/link';
import './index.css';
import Header from '@/components/header/header';

const Home = () => {
  const sections = [
    { 
      path: '/page1', 
      title: 'Section 1', 
      description: 'Description for section 1' 
    },
    { 
      path: '/page2', 
      title: 'Section 2', 
      description: 'Description for section 2' 
    },
  ];

  return (
    <>
      <Header />
      <div className="container">
        <h1 className="title">Welcome to CoD Tools</h1>
        <h3 className="subtitle">Subtitle goes here</h3>
        <div className="sections">
          {sections.map(section => (
            <Link key={section.path} href={section.path}>
              <a className="section">
                <h2 className="section-title">{section.title}</h2>
                <p className="section-description">{section.description}</p>
              </a>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;