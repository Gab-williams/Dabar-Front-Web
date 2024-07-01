import React, { useEffect } from 'react';

export default function Popup({ is_close, Setis_close }) {
  useEffect(() => {
    const lastPopupTime = localStorage.getItem('lastPopupTime');
    const currentTime = new Date().getTime();
    const fiveHours = 5 * 60 * 60 * 1000;

    if (!lastPopupTime || (currentTime - lastPopupTime > fiveHours)) {
      Setis_close(true);
      localStorage.setItem('lastPopupTime', currentTime);
    }

    const interval = setInterval(() => {
      const lastPopupTime = localStorage.getItem('lastPopupTime');
      const currentTime = new Date().getTime();

      if (!lastPopupTime || (currentTime - lastPopupTime > fiveHours)) {
        Setis_close(true);
        localStorage.setItem('lastPopupTime', currentTime);
      }
    }, fiveHours);

    return () => clearInterval(interval);
  }, [Setis_close]);

  return (
    <div className={`popupshow ${is_close ? '' : 'activex'}`}>
      <section
        className='items_in'
        style={{
          backgroundImage: 'url("/assets/img/bg/DabarNetwork.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
         
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '20px',
        }}
      >
        <div style={{ alignSelf: 'flex-end' }}>
          <span
            onClick={() => Setis_close(false)}
            className='x_text'
            style={{
              cursor: 'pointer',
              position: 'absolute',
              top: '20px',
              right: '20px',
              fontSize: '20px',
              color: '#fff',
            }}
          >
            Close
          </span>
        </div>
        <button
          style={{
            padding: '15px 40px',
            backgroundColor: '#000000',
            color: '#fff',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            fontSize: '16px',
            marginBottom: '20px',
          }}
          onClick={() => window.open('https://tix.africa/discover/dabarevent', '_blank')}
        
        >
          Register Now
        </button>
      </section>
    </div>
  );
}
