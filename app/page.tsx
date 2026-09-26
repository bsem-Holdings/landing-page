import { Link as LinkIcon, ChevronRight, Info } from 'lucide-react';

export default function Home() {
  return (
    <div className="main-wrapper">
      <div className="container">
        
        <section className="hero">
          <h1>
            Welcome to <span>bsem Holdings</span>
          </h1>
          <p>
          </p>
          <a 
            href="https://www.roblox.com/communities/16435914/bsem#!/about" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn-primary"
          >
            Join the Group <ChevronRight size={20} />
          </a>
        </section>

        <section className="section">
          <div className="section-header">
            <Info className="icon-brand" size={32} />
            <h2>About Us</h2>
          </div>
          
          <div className="about-box">
            <p>
              bsem Holdings is a developer-driven storefront on Roblox striving to create realistic and feature-rich products for various community types alike.
            </p>
          </div>
        </section>

        <section className="section">
          <div className="section-header">
            <LinkIcon className="icon-brand" size={32} />
            <h2>Quick Links</h2>
          </div>
          
          <div className="links-grid">
            <a 
              href="/roblox" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="link-card"
            >
              <h3>Roblox Group</h3>
              <p>View our main group page and join the community.</p>
            </a>
            
            <a 
              href="/discord" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="link-card"
            >
              <h3>Discord Server</h3>
              <p>Join the community server for announcements.</p>
            </a>

            <a 
              href="https://horizon.bsemhldgs.org" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="link-card"
            >
              <h3>Horizon</h3>
              <p>Explore the online organization manager.</p>
            </a>

            <a 
              href="https://www.roblox.com/games/11760190354/bsem-Roblox-Purchase-Center" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="link-card"
            >
              <h3>Purchase Center</h3>
              <p>Explore our latest products and services.</p>
            </a>
          </div>
        </section>

      </div>

      <footer className="footer">
        <div className="container">
          <p>2026 © The bsem Holdings Group. All rights reserved.</p>
          <p>
            <a href="mailto:support@bsemhldgs.org">support@bsemhldgs.org</a>
          </p>
        </div>
      </footer>
    </div>
  );
}
