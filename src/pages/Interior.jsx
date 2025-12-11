import React, { useEffect } from 'react';

const Interior = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const photos = [
    {
      url: "https://images.unsplash.com/photo-1600607686527-6fb886090705?auto=format&fit=crop&q=80&w=1200",
      title: "Reception",
      desc: "편안한 시작을 위한 환대 공간",
      wide: true
    },
    {
      url: "https://images.unsplash.com/photo-1600566752355-35792bedcfe1?auto=format&fit=crop&q=80&w=800",
      title: "Consultation Room",
      desc: "프라이빗한 상담을 위한 공간",
      wide: false
    },
    {
      url: "https://images.unsplash.com/photo-1600210492493-0946911123ea?auto=format&fit=crop&q=80&w=800",
      title: "Treatment Center",
      desc: "최첨단 장비를 갖춘 진료실",
      wide: false
    },
    {
      url: "https://images.unsplash.com/photo-1574634534894-89d7576c8259?auto=format&fit=crop&q=80&w=1200",
      title: "Recovery Lounge",
      desc: "치료 후 안정을 위한 휴게 공간",
      wide: true
    }
  ];

  return (
    <div className="interior-page">
      <section className="page-hero-luxury fade-in-up">
        <span className="subtitle" style={{color: '#999'}}>FACILITIES</span>
        <h1 className="title">
          Healing<br/>
          Space
        </h1>
        <p className="desc">
           치료를 넘어 치유의 공간으로.<br/>
           환자분의 심리적 안정을 최우선으로 디자인되었습니다.
        </p>
      </section>

      <section className="container" style={{paddingBottom: '10rem'}}>
         <div className="masonry-grid fade-in-up delay-200">
            {photos.map((photo, index) => (
              <div key={index} className={`masonry-item ${photo.wide ? 'wide' : ''}`} style={{position: 'relative', overflow: 'hidden'}}>
                 <img src={photo.url} alt={photo.title} />
                 <div style={{position: 'absolute', bottom: '2rem', left: '2rem', color: '#fff', textShadow: '0 2px 10px rgba(0,0,0,0.5)'}}>
                    <h3 style={{fontSize: '1.5rem', marginBottom: '0.5rem'}}>{photo.title}</h3>
                    <p style={{fontSize: '1rem', opacity: 0.9}}>{photo.desc}</p>
                 </div>
              </div>
            ))}
         </div>
         
         <div className="text-center fade-in-up delay-300" style={{marginTop: '8rem'}}>
            <p style={{fontSize: '1.1rem', color: '#666', marginBottom: '2rem'}}>
               보다 쾌적하고 안전한 진료 환경을 위해 끊임없이 노력합니다.
            </p>
         </div>
      </section>
    </div>
  );
};

export default Interior;
