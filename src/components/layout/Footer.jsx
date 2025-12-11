import { Link } from 'react-router-dom';
import './Layout.css';


const Footer = () => {
  return (
    <footer style={{
        backgroundColor: '#111', 
        color: '#fff', 
        padding: '5rem 0 3rem',
    }}>
      <div className="container">
        <div style={{
            display: 'grid', 
            gridTemplateColumns: '1.5fr 1fr 1fr 1fr', 
            gap: '3rem',
            marginBottom: '4rem',
            borderBottom: '1px solid #333',
            paddingBottom: '4rem'
        }}>
          {/* Brand Col */}
          <div>
            <h3 style={{fontSize: '1.2rem', marginBottom: '1.5rem', fontWeight: 700}}>IDEA DENTAL CLINIC</h3>
            <p style={{fontSize: '0.9rem', color: '#999', lineHeight: 1.8}}>
              이데아치과<br/>
              대표자: 국형용<br/>
              사업자등록번호: 123-45-67890
            </p>
          </div>
          
          {/* Location */}
          <div>
            <h4 style={{fontSize: '0.9rem', marginBottom: '1.5rem', color: '#fff'}}>Location</h4>
            <p style={{fontSize: '0.9rem', color: '#999', lineHeight: 1.8}}>
              서울 동대문구 휘경로 13<br/>
              더305빌딩 6, 7F
            </p>
          </div>

          {/* Contact */}
           <div>
             <h4 style={{fontSize: '0.9rem', marginBottom: '1.5rem', color: '#fff'}}>Contact</h4>
             <p style={{fontSize: '0.9rem', color: '#999', lineHeight: 1.8}}>
               T. 02-960-2275<br/>
               F. 02-960-2276
             </p>
           </div>
          
          {/* Social / Menu */}
          <div>
             <h4 style={{fontSize: '0.9rem', marginBottom: '1.5rem', color: '#fff'}}>Connect</h4>
             <ul style={{fontSize: '0.9rem', lineHeight: 2, color: '#999'}}>
                <li><Link to="/about">Kakao Talk</Link></li>
                <li><Link to="/services">Blog</Link></li>
                <li><Link to="/contact">Instagram</Link></li>
             </ul>
             
             <div style={{marginTop: '2rem'}}>
                <h4 style={{fontSize: '0.8rem', color: '#666', marginBottom: '0.5rem', textTransform: 'uppercase'}}>Design</h4>
                <p style={{fontSize: '0.8rem', color: '#666', lineHeight: 1.6}}>
                   UI Design by IDEA<br/>
                   Art Design by MINISH
                </p>
             </div>
          </div>
        </div>
        
        {/* Bottom */}
        <div style={{
            display: 'flex', 
            justifyContent: 'space-between', 
            color: '#555', 
            fontSize: '0.8rem'
        }}>
           <p>© {new Date().getFullYear()} Idea Dental Clinic.</p>
           <p>Privacy Policy | Terms of Use</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
