import { Link } from 'react-router-dom';
import './Layout.css';

const Footer = () => {
  return (
    <footer style={{
        backgroundColor: '#fff', 
        color: '#000', 
        padding: '5rem 0 3rem', 
        borderTop: '1px solid #eee'
    }}>
      <div className="container">
        <div style={{
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
            gap: '3rem',
            marginBottom: '4rem'
        }}>
          {/* Brand Col */}
          <div>
            <h3 style={{fontFamily: 'var(--font-serif)', fontSize: '1.2rem', marginBottom: '1.5rem'}}>IDEA DENTAL</h3>
            <p style={{fontSize: '0.9rem', color: '#666', lineHeight: 1.8}}>
              이데아치과<br/>
              대표자: 국형용<br/>
              사업자등록번호: 123-45-67890
            </p>
          </div>
          
          {/* Contact Col */}
          <div>
            <h4 style={{fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '1.5rem', color: '#999'}}>Contact</h4>
            <p style={{fontSize: '0.9rem', lineHeight: 1.8}}>
              서울 동대문구 휘경로 13<br/>
              더305빌딩 6, 7F<br/>
              T. 02-960-2275
            </p>
          </div>
          
          {/* Menu Col */}
          <div>
             <h4 style={{fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '1.5rem', color: '#999'}}>Menu</h4>
             <ul style={{fontSize: '0.9rem', lineHeight: 2}}>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/services">Services</Link></li>
                <li><Link to="/contact">Location</Link></li>
             </ul>
          </div>
        </div>
        
        {/* Bottom */}
        <div style={{
            borderTop: '1px solid #f5f5f5', 
            paddingTop: '2rem', 
            display: 'flex', 
            justifyContent: 'space-between', 
            color: '#ccc', 
            fontSize: '0.8rem'
        }}>
           <p>© {new Date().getFullYear()} Idea Dental Clinic. All Rights Reserved.</p>
           <p>Design by Antigravity</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
