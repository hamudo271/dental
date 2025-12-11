import React, { useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import useScrollAnimation from '../hooks/useScrollAnimation';

const Services = () => {
  useScrollAnimation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const services = [
    {
        title: "매복 사랑니",
        desc: "대학병원급 난이도 발치도 안전하고 빠르게.",
        detail: "신경 손상 없는 정밀 발치 시스템.",
        icon: "01"
    },
    {
        title: "충치 치료",
        desc: "소중한 자연치아를 지키는 꼼꼼한 진료.",
        detail: "초기 진단부터 보존까지 완벽하게.",
        icon: "02"
    },
    {
        title: "임플란트",
        desc: "오차 없는 식립으로 반영구적 수명 보장.",
        detail: "3D CT 분석을 통한 모의 수술.",
        icon: "03"
    },
    {
        title: "수면 마취",
        desc: "자는 동안 끝나는 편안한 치과 치료.",
        detail: "치과 공포증 환자를 위한 솔루션.",
        icon: "04"
    },
    {
        title: "심미 치료",
        desc: "아름다운 미소를 디자인하는 정밀 시술.",
        detail: "라미네이트, 올세라믹, 미백 관리.",
        icon: "05"
    },
    {
        title: "턱관절",
        desc: "근본적인 원인을 해결하는 턱관절 테라피.",
        detail: "스플린트, 물리치료, 약물치료 병행.",
        icon: "06"
    }
  ];

  return (
    <div className="services-page">
      <section className="page-hero-luxury fade-in-up">
        <span className="subtitle" style={{color: '#999'}}>SOLUTIONS</span>
        <h1 className="title">
          Clinical<br/>
          Excellence
        </h1>
        <p className="desc">
          이데아치과만의 특별한 6가지 진료 솔루션.<br/>
          정확한 진단과 섬세한 테크닉으로 결과의 차이를 만듭니다.
        </p>
      </section>

      <section className="container" style={{paddingBottom: '10rem'}}>
        <div className="minish-grid fade-in-up delay-200">
           {services.map((service, index) => (
             <div key={index} className="minish-card group">
                <span style={{fontSize: '4rem', fontWeight: '100', color: '#f0f0f0', position: 'absolute', top: '2rem', right: '2rem', transition: 'all 0.3s'}} className="group-hover:text-black group-hover:opacity-10">
                   {service.icon}
                </span>
                <h3 style={{fontSize: '1.8rem', marginBottom: '1rem', marginTop: '2rem'}}>{service.title}</h3>
                <p style={{fontSize: '1.1rem', color: '#333', marginBottom: '1rem', lineHeight: 1.6}}>{service.desc}</p>
                <p style={{fontSize: '0.95rem', color: '#999', lineHeight: 1.6}}>{service.detail}</p>
                
                <div style={{marginTop: '3rem', borderTop: '1px solid #eee', paddingTop: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                   <span style={{fontSize: '0.8rem', fontWeight: 'bold', letterSpacing: '0.1em'}}>VIEW DETAIL</span>
                   <ArrowRight size={18} color="#ccc"/>
                </div>
             </div>
           ))}
        </div>
      </section>
    </div>
  );
};

export default Services;
