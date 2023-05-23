import { useRouter } from 'next/router';
import Link from 'next/link';
import './header.css'; 

const Header = () => {
  const router = useRouter();
  const pages = [
    { path: '/', name: 'Home' },
    { path: '/wikibot', name: 'Wiki Bot' },
  ];

  return (
    <header className="header">
      <div className="header-container">
        <h1 className="header-title">CoD Tools</h1>
        <nav className="nav">
          {pages.map(page => (
            <Link key={page.path} href={page.path}>
              <a className={`nav-link font-montserrat ${router.pathname === page.path ? 'text-accent' : 'text-primary'}`}>
                {page.name}
              </a>
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;