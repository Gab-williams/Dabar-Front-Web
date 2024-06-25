import React, { useEffect } from 'react';

export default function Popup({ is_close, Setis_close }) {
  useEffect(() => {
    // Run the JotForm embed handler script after the component mounts
    const script = document.createElement('script');
    script.src = 'https://cdn.jotfor.ms/s/umd/latest/for-form-embed-handler.js';
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      window.jotformEmbedHandler(
        "iframe[id='JotFormIFrame-241696181874569']",
        "https://form.jotform.com/"
      );
    };
    
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className={`popupshow ${is_close ? '' : 'active'}`}>
      <section className='items_in'>
        <div>
          <span onClick={() => Setis_close(false)} className='x_text'>Close</span>
        </div>
        {/* <article className='main_content'>
        We want to 
        serve you better ! 
        </article> */}
        <iframe
          id="JotFormIFrame-241762136205551"
          src="https://form.jotform.com/241762136205551"
          title="JotForm"
          width="100%"
          height="500px"
          allowFullScreen
          frameBorder="0"
          style={{ border: 'none' }}
        ></iframe>
       
      </section>
    </div>
  );
}
