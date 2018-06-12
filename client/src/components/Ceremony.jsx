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
                    <h2>July 6, 2018</h2>                    
                    <h4>11:00 - Reception | 12:00 - Ceremony</h4>
                </div>
            </div>
        </div>
        <div className="line line-bottom"> </div>        
    </section>
    </ScrollableAnchor>
}