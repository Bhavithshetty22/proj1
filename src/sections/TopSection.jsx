// TopSection.jsx
import CircularText from "../reactbits/CircularText";
import "./TopSection.css";
import DarkVeil from "../reactbits/DarkVeli";
import StaggeredMenu from '../reactbits/StaggeredMenu';
import ScrollProgressBar from "../components/ui/scroll-progress";


export default function TopSection() {
    
const menuItems = [
  { label: 'Home', ariaLabel: 'Go to home page', link: '/' },
  { label: 'About', ariaLabel: 'Learn about us', link: '/about' },
  { label: 'Services', ariaLabel: 'View our services', link: '/services' },
  { label: 'Contact', ariaLabel: 'Get in touch', link: '/contact' }
];

const socialItems = [
  { label: 'Twitter', link: 'https://twitter.com' },
  { label: 'GitHub', link: 'https://github.com' },
  { label: 'LinkedIn', link: 'https://linkedin.com' }
];
  return (
    
    <div className="top-section">
        
    
      <div className="container">
       

      {/* Header */}
      {/* Main Content */}
    
        <div className="main-content">
          <div className="title-wrapper">
            <h1>FRONTEND</h1>
            <h1 className="dev">DEVELOPER</h1>
          </div>
          <div className="description1">
            <p>Hi! I’m <span className="name1">Bhavith</span>, a Frontend Engineer focused on building <br/>scalable, high-performance web interfaces with clean architecture and exceptional user experience.</p>
          </div>
          <div className="button2">HIRE ME</div>

        </div>

        {/* Footer */}
        <div className="footer">
          {/* Scroll Badge */}
          <div className="scroll-badge">
            <CircularText
              text="SCROLL DOWN SCROLL DOWN "
              onHover="speedUp"
              spinDuration={10}
              className="custom-class"
            />
          </div>
          
          {/* Right Info Section */}
           <div className="status-wrapper">
            <div className="status-item">
              <div className="status-text" style={{ fontFamily: 'Anton', color: 'rgb(149, 36, 255)' }}>7+</div>
              <div className="location-text" style={{fontSize:'16px'}}>Completed Projects</div>
            </div>
            <div className="status-item">
              <div className="status-text" style={{ fontFamily: 'Anton',letterSpacing:'2px', color: 'rgb(149, 36, 255)' }}>1k+</div>
              <div className="location-text" style={{fontSize:'16px'}}>Hours Worked</div>
            </div>
          </div>
        </div>
        </div>
       <StaggeredMenu
    position="right"
    items={menuItems}
    socialItems={socialItems}
    displaySocials={true}
    displayItemNumbering={true}
    menuButtonColor="#fff"
    openMenuButtonColor="#fff"
    changeMenuColorOnOpen={true}
    colors={['#B19EEF', '#5227FF']}
    logoUrl="/path-to-your-logo.svg"
    accentColor="#ff6b6b"
    onMenuOpen={() => console.log('Menu opened')}
    onMenuClose={() => console.log('Menu closed')}
    style={{ position: 'absolute', zIndex: 1000 }} 
  />
  <ScrollProgressBar />
      </div>
    
  );
}
