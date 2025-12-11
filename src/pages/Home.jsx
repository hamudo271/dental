import React, { useEffect } from 'react';
import { ArrowRight, Check, Play } from 'lucide-react';
import { Link } from 'react-router-dom';
import useScrollAnimation from '../hooks/useScrollAnimation';

const Home = () => {
  useScrollAnimation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="home-page">
      {/* Minish Style Hero: Video/Immersive */}
      <section className="hero-wrapper" style={{height: '100vh', position: 'relative', overflow: 'hidden'}}>
        <div className="hero-overlay"></div>
        <img 
          src="https://images.unsplash.com/photo-1629904853716-6c29810963f5?q=80&w=2560&auto=format&fit=crop" 
          alt="Clinic Ambience" 
          className="hero-bg"
          style={{transform: 'scale(1.1)'}} // Constant zoom effect
        />
        <div className="container" style={{position: 'relative', zIndex: 2, height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
          <div className="fade-in-up visible">
            <span className="subtitle" style={{color: '#fff', border: '1px solid rgba(255,255,255,0.3)', padding: '0.5rem 1rem', borderRadius: '50px'}}>IDEA DENTAL CLINIC</span>
            <h1 className="title-display" style={{marginTop: '2rem', marginBottom: '2rem', fontSize: '5rem', lineHeight: 1.1, color: '#fff'}}>
              The Standard of<br/>
              <span style={{fontFamily: 'var(--font-serif)', fontStyle: 'italic'}}>Perfection.</span>
            </h1>
            <p style={{fontSize: '1.2rem', color: 'rgba(255,255,255,0.8)', maxWidth: '500px', lineHeight: 1.6, marginBottom: '4rem'}}>
              100% 멸균, 정직한 진료, 통증 없는 치료.<br/>
              이데아치과만의 특별한 기준을 만나보세요.
            </p>
            <div style={{display: 'flex', gap: '1rem'}}>
               <Link to="/contact" className="btn btn-white">Reservation</Link>
               <button className="btn" style={{borderColor: 'rgba(255,255,255,0.3)', color: '#fff', display: 'flex', alignItems: 'center', gap: '10px'}}>
                  <Play size={16} fill="currentColor"/> Watch Message
               </button>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy: Sticky Scroll Section (Minish Style) */}
      <section className="section" style={{background: '#111', color: '#fff', padding: '10rem 0'}}>
         <div className="container">
            <div className="text-center fade-in-up" style={{marginBottom: '8rem'}}>
               <h2 className="title-section" style={{color: '#fff'}}>Philosophy</h2>
               <p style={{color: 'rgba(255,255,255,0.6)'}}>이데아치과가 지키는 3가지 약속</p>
            </div>
            
            <div className="sticky-grid" style={{display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1px', background: '#333', border: '1px solid #333'}}>
               {/* Item 1 */}
               <div className="minish-card fade-in-up delay-100" style={{background: '#1a1a1a', color: '#fff', border: 'none'}}>
                  <span style={{fontSize: '3rem', fontWeight: '100', color: '#444', display: 'block', marginBottom: '2rem'}}>01</span>
                  <h3 style={{fontSize: '1.8rem', marginBottom: '1.5rem'}}>Sterilization</h3>
                  <p style={{color: '#999', lineHeight: 1.6, marginBottom: '2rem'}}>
                    1인 1기구 사용 원칙.<br/>
                    검증된 살균 소독액 사용.<br/>
                    철저한 멸균 시스템.
                  </p>
                  <Link to="/about" style={{color: '#fff', textDecoration: 'underline'}}>MORE DETAILS</Link>
               </div>
               
               {/* Item 2 */}
               <div className="minish-card fade-in-up delay-200" style={{background: '#1a1a1a', color: '#fff', border: 'none'}}>
                  <span style={{fontSize: '3rem', fontWeight: '100', color: '#444', display: 'block', marginBottom: '2rem'}}>02</span>
                  <h3 style={{fontSize: '1.8rem', marginBottom: '1.5rem'}}>Honesty</h3>
                  <p style={{color: '#999', lineHeight: 1.6, marginBottom: '2rem'}}>
                    자연치아 보존 최우선.<br/>
                    꼭 필요한 진료만 권유.<br/>
                    정확한 진단과 계획.
                  </p>
               </div>
               
               {/* Item 3 */}
               <div className="minish-card fade-in-up delay-300" style={{background: '#1a1a1a', color: '#fff', border: 'none'}}>
                  <span style={{fontSize: '3rem', fontWeight: '100', color: '#444', display: 'block', marginBottom: '2rem'}}>03</span>
                  <h3 style={{fontSize: '1.8rem', marginBottom: '1.5rem'}}>Pain-Free</h3>
                  <p style={{color: '#999', lineHeight: 1.6, marginBottom: '2rem'}}>
                    의식하 진정요법(수면마취).<br/>
                    편안한 진료 환경.<br/>
                    치과 공포증 해소.
                  </p>
               </div>
            </div>
         </div>
      </section>

      {/* Services: Bento Grid (Minish Style) */}
      <section className="section" style={{background: '#f9f9f9'}}>
        <div className="container">
           <div className="fade-in-up" style={{display: 'flex', justifyContent: 'space-between', alignItems: 'end', marginBottom: '4rem'}}>
              <div>
                 <span className="subtitle" style={{color: '#000'}}>SOLUTIONS</span>
                 <h2 className="title-section" style={{marginBottom: 0}}>Clinical<br/>Services</h2>
              </div>
              <Link to="/services" className="btn" style={{background: '#000', color: '#fff'}}>VIEW ALL</Link>
           </div>
           
           <div className="minish-grid fade-in-up delay-200">
              {/* Service 1 */}
              <div className="minish-card">
                 <h3 style={{fontSize: '1.5rem', marginBottom: '1rem'}}>매복 사랑니</h3>
                 <p style={{color: '#666', lineHeight: 1.6}}>대학병원급 난이도 발치도<br/>안전하고 빠르게.</p>
                 <div style={{marginTop: '2rem', display: 'flex', justifyContent: 'flex-end'}}>
                    <ArrowRight size={20} color="#ccc"/>
                 </div>
              </div>
              {/* Service 2 */}
              <div className="minish-card">
                 <h3 style={{fontSize: '1.5rem', marginBottom: '1rem'}}>임플란트</h3>
                 <p style={{color: '#666', lineHeight: 1.6}}>오차 없는 식립.<br/>반영구적 수명 보장.</p>
                 <div style={{marginTop: '2rem', display: 'flex', justifyContent: 'flex-end'}}>
                    <ArrowRight size={20} color="#ccc"/>
                 </div>
              </div>
              {/* Service 3 */}
              <div className="minish-card">
                 <h3 style={{fontSize: '1.5rem', marginBottom: '1rem'}}>충치치료</h3>
                 <p style={{color: '#666', lineHeight: 1.6}}>자연치아 보존.<br/>통증 최소화.</p>
                 <div style={{marginTop: '2rem', display: 'flex', justifyContent: 'flex-end'}}>
                    <ArrowRight size={20} color="#ccc"/>
                 </div>
              </div>
              {/* Service 4 */}
              <div className="minish-card">
                 <h3 style={{fontSize: '1.5rem', marginBottom: '1rem'}}>수면마취</h3>
                 <p style={{color: '#666', lineHeight: 1.6}}>자는 동안 끝나는<br/>편안한 치료.</p>
                 <div style={{marginTop: '2rem', display: 'flex', justifyContent: 'flex-end'}}>
                    <ArrowRight size={20} color="#ccc"/>
                 </div>
              </div>
              {/* Service 5 */}
              <div className="minish-card">
                 <h3 style={{fontSize: '1.5rem', marginBottom: '1rem'}}>심미치료</h3>
                 <p style={{color: '#666', lineHeight: 1.6}}>아름다운 미소 디자인.<br/>라미네이트/올세라믹.</p>
                 <div style={{marginTop: '2rem', display: 'flex', justifyContent: 'flex-end'}}>
                    <ArrowRight size={20} color="#ccc"/>
                 </div>
              </div>
              {/* Service 6 */}
              <div className="minish-card">
                 <h3 style={{fontSize: '1.5rem', marginBottom: '1rem'}}>턱관절</h3>
                 <p style={{color: '#666', lineHeight: 1.6}}>근본적 원인 해결.<br/>스플린트/물리치료.</p>
                 <div style={{marginTop: '2rem', display: 'flex', justifyContent: 'flex-end'}}>
                    <ArrowRight size={20} color="#ccc"/>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* Safety Q&A (Preserved) */}
      <section className="section">
         <div className="container">
            <div className="text-center fade-in-up" style={{marginBottom: '6rem'}}>
               <span className="subtitle">SAFETY CHECK</span>
               <h2 className="title-section">We Ask Ourselves</h2>
            </div>
            <div className="wide-grid">
               <div className="fade-in-up delay-100" style={{border: '1px solid #eee', padding: '4rem'}}>
                  <h3 style={{fontSize: '1.5rem', marginBottom: '1.5rem'}}>위생장갑 착용?</h3>
                  <p style={{color: '#666', lineHeight: 1.6}}>의료진의 손 위생은 기본입니다. 환자 한 분 한 분을 뵐 때마다 새로운 위생장갑을 착용하여 교차 감염을 원천 차단합니다.</p>
               </div>
               <div className="fade-in-up delay-200" style={{border: '1px solid #eee', padding: '4rem'}}>
                  <h3 style={{fontSize: '1.5rem', marginBottom: '1.5rem'}}>살균 소독액?</h3>
                  <p style={{color: '#666', lineHeight: 1.6}}>겉으로만 깨끗한 것이 아닙니다. 눈에 보이지 않는 세균까지 완벽하게 제거하는 검증된 전문 살균 소독액만을 사용합니다.</p>
               </div>
               <div className="fade-in-up delay-300" style={{border: '1px solid #eee', padding: '4rem'}}>
                  <h3 style={{fontSize: '1.5rem', marginBottom: '1.5rem'}}>과잉 진료?</h3>
                  <p style={{color: '#666', lineHeight: 1.6}}>효과를 위한 과다 사용은 하지 않습니다. 정확한 진단 하에 꼭 필요한 약물과 마취제만을 정량 사용하여 환자의 안전을 지킵니다.</p>
               </div>
            </div>
         </div>
      </section>
      
      {/* Interior Preview */}
      <section className="section bg-light text-center fade-in-up">
         <div className="container">
            <span className="subtitle">INTERIOR</span>
            <h2 className="title-section" style={{marginBottom: '5rem'}}>Comfort & Private</h2>
            <img src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=2000" style={{width: '100%', height: '600px', objectFit: 'cover'}} alt="Interior Wide"/>
         </div>
      </section>

      {/* Why Idea Section (New Request) */}
      <section className="section" style={{paddingBottom: '10rem'}}>
         <div className="container">
            {/* Header */}
            <div className="fade-in-up" style={{marginBottom: '5rem'}}>
               <h2 className="title-display" style={{fontSize: '3.5rem', marginBottom: '1.5rem', color: '#000'}}>
                  <span style={{color: '#000'}}>이데아</span>를 많은 사람들이<br/>선택하는 이유
               </h2>
               <p style={{fontSize: '1.1rem', color: '#666', fontWeight: 600}}>
                  [ 원데이 이데아 클리닉 / 고난이도 임플란트 클리닉 / 특수교정 클리닉 ]<br/>
                  <span style={{fontWeight: 400}}>고난이도 치과 치료 전문 병원은 <span style={{color: '#000', fontWeight: 700, textDecoration: 'underline'}}>이데아치과</span>입니다.</span>
               </p>
            </div>

            {/* 3 Cards Grid */}
            <div style={{display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem', marginBottom: '2rem'}}>
               {/* Card 1: Scale */}
               <div className="fade-in-up delay-100" style={{borderRadius: '20px', overflow: 'hidden', position: 'relative', height: '400px', backgroundColor: '#f5f5f7'}}>
                  <img src="https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?auto=format&fit=crop&q=80&w=1000" style={{width: '100%', height: '100%', objectFit: 'cover'}} alt="Scale"/>
                  <div style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'rgba(0,0,0,0.3)', padding: '2.5rem'}}>
                     <span style={{background: '#333', color: '#fff', padding: '0.4rem 1rem', borderRadius: '4px', fontSize: '0.9rem', marginBottom: '1rem', display: 'inline-block'}}>규모</span>
                     <h3 style={{color: '#fff', fontSize: '1.8rem', marginBottom: '1rem', fontWeight: 700}}>대학병원급<br/>대형 규모</h3>
                     <p style={{color: 'rgba(255,255,255,0.8)', fontSize: '0.95rem', lineHeight: 1.6}}>의원급이 아닌 대학병원급<br/>시설과 장비를 갖추었습니다.</p>
                  </div>
               </div>

               {/* Card 2: Trust */}
               <div className="fade-in-up delay-200" style={{borderRadius: '20px', overflow: 'hidden', position: 'relative', height: '400px', backgroundColor: '#f5f5f7'}}>
                  <img src="https://images.unsplash.com/photo-1629909615184-74f495363b63?auto=format&fit=crop&q=80&w=1000" style={{width: '100%', height: '100%', objectFit: 'cover'}} alt="Trust"/>
                  <div style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'rgba(0,0,0,0.3)', padding: '2.5rem'}}>
                     <span style={{background: '#333', color: '#fff', padding: '0.4rem 1rem', borderRadius: '4px', fontSize: '0.9rem', marginBottom: '1rem', display: 'inline-block'}}>신뢰</span>
                     <h3 style={{color: '#fff', fontSize: '1.8rem', marginBottom: '1rem', fontWeight: 700}}>이데아 15년<br/>보증서 발행</h3>
                     <p style={{color: 'rgba(255,255,255,0.8)', fontSize: '0.95rem', lineHeight: 1.6}}>치료에 대한 자신감을 정품 인증을 통해<br/>최대 15년간 보증합니다.</p>
                  </div>
               </div>

               {/* Card 3: Belief */}
               <div className="fade-in-up delay-300" style={{borderRadius: '20px', overflow: 'hidden', position: 'relative', height: '400px', backgroundColor: '#f5f5f7'}}>
                  <img src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=1000" style={{width: '100%', height: '100%', objectFit: 'cover'}} alt="Belief"/>
                  <div style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'rgba(0,0,0,0.3)', padding: '2.5rem'}}>
                     <span style={{background: '#333', color: '#fff', padding: '0.4rem 1rem', borderRadius: '4px', fontSize: '0.9rem', marginBottom: '1rem', display: 'inline-block'}}>믿음</span>
                     <h3 style={{color: '#fff', fontSize: '1.8rem', marginBottom: '1rem', fontWeight: 700}}>이데아치과의<br/>20년 연혁</h3>
                     <p style={{color: 'rgba(255,255,255,0.8)', fontSize: '0.95rem', lineHeight: 1.6}}>20년 전부터 환자가 원하는 치료가<br/>무엇인지 고민하며 성장했습니다.</p>
                  </div>
               </div>
            </div>

            {/* Bottom Wide Card: Expert Team */}
            <div className="fade-in-up delay-400" style={{borderRadius: '20px', border: '1px solid #eee', padding: '4rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: '#fff', boxShadow: '0 10px 30px rgba(0,0,0,0.03)'}}>
               <div style={{maxWidth: '500px'}}>
                  <span style={{background: '#111', color: '#fff', padding: '0.4rem 1rem', borderRadius: '50px', fontSize: '0.9rem', marginBottom: '1.5rem', display: 'inline-block'}}>전문성 & 편리함</span>
                  <h3 style={{fontSize: '2rem', marginBottom: '1rem', fontWeight: 700}}>9명의 전문의들이 365일<br/>고객님의 치료를 도와드리겠습니다.</h3>
                  <p style={{color: '#666', lineHeight: 1.6}}>특수 교정, 고난도 임플란트 등 9명의 전문과 의사가<br/>환자들의 편의를 위해 매일 진료를 합니다.</p>
               </div>
               <div style={{flex: 1, display: 'flex', justifyContent: 'flex-end'}}>
                   <img src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=800" style={{height: '300px', objectFit: 'contain', mixBlendMode: 'multiply'}} alt="Doctor Team"/>
               </div>
            </div>
         </div>
      </section>


    </div>
  );
};

export default Home;
