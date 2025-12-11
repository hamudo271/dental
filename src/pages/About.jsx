import React, { useEffect } from 'react';

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="about-page">
      {/* Magazine Hero */}
      <section className="page-hero-luxury fade-in-up">
         <span className="subtitle" style={{color: '#999'}}>MEDICAL STAFF</span>
         <h1 className="title">
           Philosophy &<br/>
           <span style={{fontStyle: 'italic'}}>Doctor</span>
         </h1>
         <p className="desc">
           이데아치과가 생각하는 좋은 진료의 기준.<br/>
           기본에 충실하며, 환자의 입장에서 생각합니다.
         </p>
      </section>

      {/* Profile Section */}
      <section className="profile-section container">
         {/* Left: Full Image */}
         <div className="fade-in-up delay-100">
            <img 
               src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=1200&auto=format&fit=crop" 
               alt="Dr. Guk Hyung-yong" 
               className="profile-img"
            />
         </div>

         {/* Right: Content */}
         <div className="profile-content fade-in-up delay-200">
            <div className="quote-box">
               <p className="quote-text">
                 "정직함이 최선의 진료입니다."
               </p>
               <p style={{fontSize: '1.1rem', lineHeight: 1.8, color: '#666'}}>
                  환자분의 치아를 내 가족의 치아처럼 소중히 여기며,<br/>
                  꼭 필요한 진료만 권해드리는 바른 진료를 약속합니다.<br/>
                  통증 없는 편안한 치료로 치과에 대한 두려움을 없애드리겠습니다.
               </p>
            </div>

            <div style={{marginBottom: '4rem'}}>
               <h2 style={{fontSize: '2.5rem', marginBottom: '0.5rem'}}>국형용</h2>
               <span style={{fontSize: '1rem', letterSpacing: '0.1em', color: '#999'}}>대표원장 / 통합치의학과 전문의</span>
            </div>

            <div className="career-list">
               <h4 style={{fontSize: '0.9rem', fontWeight: 'bold', marginBottom: '2rem', borderBottom: '1px solid #000', paddingBottom: '1rem', display: 'inline-block'}}>EDUCATION & CAREER</h4>
               <ul style={{listStyle: 'none', padding: 0, lineHeight: 2.2, color: '#444', fontSize: '0.95rem'}}>
                  <li>연세대학교 학사 졸업</li>
                  <li>경희대학교 치의학전문대학원 석사 졸업</li>
                  <li>보건복지부 인증 통합치의학과 전문의</li>
                  <li>대한치과보존학회 정회원</li>
                  <li>대한치과보철학회 정회원</li>
                  <li>대한구강악안면임플란트학회 정회원</li>
                  <li>대한측두하악장애학회 정회원</li>
                  <li>오스템 임플란트 임상지도의</li>
                  <li>전 (강남)서울매스티지 보철과 원장 역임</li>
                  <li>전 그랜드치과 보존과 원장 역임</li>
               </ul>
            </div>
         </div>
      </section>
    </div>
  );
};

export default About;
