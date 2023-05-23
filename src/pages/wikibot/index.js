import './index.css';
import Header from '@/components/header/header';

export default function WikiBot() {
  return (
    <>
      <Header />
      <div className="infobox">
        <h1 className="title">Call of Dragons Wiki Bot</h1>
        <div className="button-group">
          <a className="button" href="https://discord.com/api/oauth2/authorize?client_id=1100937871969501364&permissions=274878024704&scope=bot" target="_blank">
            Invite Bot
          </a>
          <a className="button" href="https://top.gg/bot/1100937871969501364/vote" target="_blank">
            Vote Bot
          </a>
          <a className="button" href="https://discord.com/invite/TFjt39ezmp" target="_blank">
            Support Server
          </a>
          <a className="button" href="https://github.com/GamerRaven/Call-of-Dragons-Wiki-Bot" target="_blank">
            GitHub
          </a>
        </div>
      </div>
      <div className="features">
        <h1 className="section-title">Features</h1>
        <div className="features-row">
          <div className="features-box">
            <img src="https://raw.githubusercontent.com/GamerRaven/Call-of-Dragons-Wiki-Bot/main/.readme/Hero.png" alt="Feature 1" />
            <h2 className="title">Heroes</h2>
            <p className="description">Learn about the effectiveness, roles, buffs, and pairings of heroes.</p>
          </div>
          <div className="features-box">
            <img src="https://raw.githubusercontent.com/GamerRaven/Call-of-Dragons-Wiki-Bot/main/.readme/Artifact.png" alt="Feature 2" />
            <h2 className="title">Artifacts</h2>
            <p className="description">Learn about the usage and effectiveness of artifacts.</p>
          </div>
        </div>
        <div className="features-row">
          <div className="features-box">
            <img src="https://raw.githubusercontent.com/GamerRaven/Call-of-Dragons-Wiki-Bot/main/.readme/Behemoth.png" alt="Feature 3" />
            <h2 className="title">Behemoths</h2>
            <p className="description">Learn about what each behemoths do and how to defeat them.</p>
          </div>
          <div className="features-box">
            <img src="https://i.imgur.com/dxbW3fu.png" alt="Feature 4" />
            <h2 className="title">Tier List</h2>
            <p className="description">Get a sorted Tier List to learn which heroes and artifacts to invest in.</p>
          </div>
        </div>
      </div>
      <div className='commands'>
        <h1 className='section-title'>Commands</h1>
      </div>
    </>
  );
}