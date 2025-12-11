import { Link } from 'react-router-dom';
import './Layout.css';

const Footer = () => {
  return (
    <footer style={{
        backgroundColor: '#111', 
        color: '#888', 
        fontSize: '0.85rem',
        borderTop: '1px solid #222'
    }}>
      {/* Top Bar (Legal Links) */}
      <div style={{borderBottom: '1px solid #222'}}>
        <div className="container" style={{display: 'flex', gap: '2rem', padding: '1.5rem 2rem'}}>
           <Link to="#" style={{color: '#fff', fontWeight: 'bold'}}>개인정보처리방침</Link>
           <Link to="#">이용약관</Link>
           <Link to="#">환자권리장전</Link>
           <Link to="/contact">오시는 길</Link>
        </div>
      </div>

      {/* Main Content */}
      <div className="container" style={{padding: '4rem 2rem 5rem'}}>
         <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '3rem'}}>
            
            {/* Left: Info */}
            <div style={{maxWidth: '600px'}}>
               <h3 style={{color: '#fff', fontSize: '1.1rem', marginBottom: '1.5rem', fontWeight: 600}}>이데아치과 IDEA Dental Clinic</h3>
               <div style={{lineHeight: '1.8', display: 'flex', flexWrap: 'wrap', gap: '2rem'}}>
                  <div>
                    <p>대표자 : 국형용</p>
                    <p>사업자등록번호 : 123-45-67890</p>
                    <p>T. 02-960-2275 &nbsp; | &nbsp; F. 02-960-2276</p>
                  </div>
                  <div>
                    <p>주소 : 서울 동대문구 휘경로 13, 더305빌딩 6, 7F</p>
                    <p>E-mail : help@ideadental.com</p>
                  </div>
               </div>
               <p style={{marginTop: '2rem', fontSize: '0.8rem', opacity: 0.6}}>
                  Copyright © {new Date().getFullYear()} Idea Dental Clinic. All Rights Reserved.
               </p>
            </div>

            {/* Right: Design Credits */}
            <div style={{textAlign: 'right'}}>
               <div style={{marginBottom: '2rem'}}>
                 <span style={{display: 'block', textTransform: 'uppercase', fontSize: '0.75rem', letterSpacing: '0.1em', marginBottom: '0.5rem'}}>UI Design</span>
                 <strong style={{color: '#fff', fontSize: '1rem', fontFamily: 'var(--font-serif)'}}>IDEA ART</strong>
               </div>
               <div>
                 <span style={{display: 'block', textTransform: 'uppercase', fontSize: '0.75rem', letterSpacing: '0.1em', marginBottom: '0.5rem'}}>Art Design</span>
                 <strong style={{color: '#fff', fontSize: '1rem', fontFamily: 'var(--font-serif)'}}>MINISH</strong>
               </div>
            </div>

         </div>
      </div>
    </footer>
  );
};

export default Footer;
