import React, { useEffect } from 'react';
import useScrollAnimation from '../hooks/useScrollAnimation';

const Contact = () => {
  useScrollAnimation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="contact-page">
      <div className="page-header">
        <div className="container">
          <h1 className="page-title">Location</h1>
          <p className="section-subtitle">이데아치과 오시는 길</p>
        </div>
      </div>

      <div className="section">
        <div className="container">
          <div className="contact-container">
            <div>
               <div className="contact-info-item">
                 <div className="contact-label">ADDRESS</div>
                 <div className="contact-value" style={{fontSize: '1.2rem', lineHeight: 1.5}}>
                    서울 동대문구 휘경로 13 더305빌딩 6, 7F<br/>
                    (외대앞역 1번출구 도보 2분)
                 </div>
               </div>
               
               <div className="contact-info-item">
                 <div className="contact-label">TEL</div>
                 <div className="contact-value">02-960-2275</div>
               </div>

               <div className="contact-info-item">
                 <div className="contact-label">HOURS</div>
                 <ul style={{fontSize: '1.1rem', lineHeight: 2, color: '#333'}}>
                    <li>평일: 10:00 - 19:00</li>
                    <li>화/목 (야간): 10:00 - 21:00</li>
                    <li>토요일: 10:00 - 14:00</li>
                    <li>점심시간: 13:00 - 14:00</li>
                    <li><span style={{color: '#999'}}>일요일 및 공휴일 휴진</span></li>
                 </ul>
               </div>
            </div>

            <div style={{width: '100%', minHeight: '400px', backgroundColor: '#f5f5f5', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                <p style={{color: '#999', fontSize: '1.5rem', fontWeight: 300}}>MAP AREA</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
