import Link from "next/link";
import './index.css';
import Header from '@/components/header/header';

export default function Home() {
  return (
    <>
      <Header />
      <div className="container">
        <h1 className="title">Call of Dragons Wiki Bot</h1>
        <div className="button-group">
          <Link href="https://discord.com/oauth2/authorize?client_id=1100937871969501364&permissions=274878024704&scope=bot" target="_blank_">
            <a className="button">
              Invite Bot
            </a>
          </Link>
          <Link href="https://top.gg/bot/1100937871969501364" target="_blank_">
            <a className="button">
              Vote Bot
            </a>
          </Link>
          <Link href="#">
            <a className="button">
              Features
            </a>
          </Link>
          <Link href="https://top.gg/bot/1100937871969501364/vote" target="_blank_">
            <a className="button">
              Join Support Server
            </a>
          </Link>
        </div>
      </div>
    </>
  );
}