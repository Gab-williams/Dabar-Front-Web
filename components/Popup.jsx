import React from 'react'

export default function Popup({is_close, Setis_close}) {
    return (
        <div className={is_close?'popupshow':'active'}>
            <section className='items_in'>
                <div> <span onClick={()=>Setis_close(false)} className='x_text'>x</span></div>
                 <article className='main_content'>
                    Welcome To TheDabar
                 </article>
                 <article className='btn_contaner'>
                      <button onClick={()=>Setis_close(false)} >Close</button>
                 </article>
            </section>
        </div>
    )
}
