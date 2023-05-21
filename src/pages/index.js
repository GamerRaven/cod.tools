import Link from 'next/link';
import './index.css';
import Header from '@/components/header/header';

export default function Home(){
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