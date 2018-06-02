import React from 'react'
import ScrollableAnchor from 'react-scrollable-anchor'
import '../css/home.css'
export default (props) => {
    const { id } = props;
    return <ScrollableAnchor id={'home-scroll'}>
        <section  id={id}>
    	<div className="container">
    		<div className="row">
    			<div className="col-md-12">
    				<h1>Gili & Matan</h1>
					<h3><span>Are getting</span></h3>
					<h2>MARRIED!</h2>					
    			</div>
    		</div>
    	</div>
    </section>
    </ScrollableAnchor >
}