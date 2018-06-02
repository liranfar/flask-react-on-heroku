import React from 'react'
import '../css/ceremony.css'
import ScrollableAnchor from 'react-scrollable-anchor'

export default props => {
    const { id } = props;
    return <ScrollableAnchor id={'ceremony-scroll'}>
    <section id={id}>
        <div className="line"></div>
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <h1>The Ceremony</h1>
                    <h3><span>Will Be Held On</span></h3>
                    <h2>26, 2013</h2>
                    <h5><span>~ December ~</span></h5>
                    <h4>Mi'rojul Muttaqinallah Mosque, Yogyakarta 09.00 WIB</h4>
                </div>
            </div>
        </div>
        <div className="line line-bottom"> </div>        
    </section>
    </ScrollableAnchor>
}