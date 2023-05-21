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
        <h1 className="title">Call of Dragons Tools</h1>
        <div className="sections">
          <Link key="/test" href="test">
            <a className="section">
              <h2 className="section-title">Call of Dragons Wiki Bot</h2>
              <p className="section-description">Discord Bot that presents details about Call of Dragons heroes, artifacts, and behemoths</p>
            </a>
          </Link>
          <Link key="/test" href="test">
            <a className="section">
              <h2 className="section-title">Test</h2>
              <p className="section-description">Test</p>
            </a>
          </Link>
        </div>
        <div className="sections">
          <Link key="/test" href="test">
            <a className="section">
              <h2 className="section-title">Test</h2>
              <p className="section-description">Test</p>
            </a>
          </Link>
          <Link key="/test" href="test">
            <a className="section">
              <h2 className="section-title">Test</h2>
              <p className="section-description">Test</p>
            </a>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Home;