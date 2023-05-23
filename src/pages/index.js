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
          <Link key="wikibot" href="/wikibot">
            <a className="section">
              <h2 className="section-title">Call of Dragons Wiki Bot</h2>
              <p className="section-description">Discord Bot that presents details about Call of Dragons heroes, artifacts, and behemoths</p>
            </a>
          </Link>
          <Link key="/test" href="test">
            <a className="section">
              <h2 className="section-title">Coming Soon...</h2>
              <p className="section-description">Coming Soon...</p>
            </a>
          </Link>
        </div>
      </div>
    </>
  );
};