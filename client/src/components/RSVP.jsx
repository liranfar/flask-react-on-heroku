import React from 'react'
import '../css/RSVP.css'
import ScrollableAnchor from 'react-scrollable-anchor'

export default props => {
    const { id } = props;
    // const options = map(timezone,(val,key) => <option key={val} value={val}> {key}</option>);
    return <ScrollableAnchor id={'rsvp-scroll'}>
    <section id="rsvp" className="bg-white section-divider section-divider-y">
        <div className="container">
            <div className="row align-items-center justify-content-center">
                <div className="col-md-8 col-md-offset-2">
                    <form onSubmit={(event) => props.handleRsvp(event)} id="form-rsvp">
                        <div className="row">
                            <div className="col-12 text-center">                                
                                <h3 className="font-alt letter-spacing-1 mb-0 mt-2 text-uppercase title-small">RSVP</h3>
                                <span className="bg-base-color d-block mt-1 mx-auto sep-line-thick"></span>                                
                            </div>
                        </div>

                        <div className="row mt-4">
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label htmlFor="rsvp-name" className="text-medium">Name:</label>
                                    <input
                                        type="text"
                                        name="fullName"
                                        id="rsvp-name"
                                        className="font-alt form-control required"
                                        placeholder="Your Full Name"
                                        value={props.fullName}
                                        onChange={props.handleChange}
                                        required
                                    />
                                </div>
                            </div>


                            <div className="col-md-6">
                                <div className="form-group">
                                    <label htmlFor="rsvp-email" className="text-medium">Email:</label>
                                    <input
                                        type="email"
                                        name="email"
                                        id="rsvp-email"
                                        className="font-alt form-control required email"
                                        placeholder="Your Email Address"
                                        value={props.email}
                                        onChange={props.handleChange}
                                        required
                                    />
                                </div>

                            </div>

                        </div>


                        <div className="row">
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label htmlFor="rsvp-events" className="text-medium">Events:</label>
                                    <select onChange={props.handleChange} value={props.events} name="events" id="rsvp-events" className="font-alt form-control required">
                                        <option value="">- Please Select -</option>
                                        <option value="Ceremony &amp; Reception">Ceremony &amp; Reception</option>
                                        <option value="Ceremony Only">Ceremony Only</option>
                                        <option value="Reception Only">Reception Only</option>
                                        <option value="Sory, Can't Make Either">Sory, Can't Make Either</option>
                                    </select>
                                </div>
                            </div>

                            <div className="col-md-6">
                                <div className="form-group">
                                    <label htmlFor="rsvp-guests" className="text-medium">Guests:</label>
                                    <select onChange={props.handleChange} value={props.guests} name="guests" id="rsvp-guests" className="font-alt form-control required">
                                        <option value="">- Please Select -</option>
                                        <option value="No Guests">No Guests</option>
                                        <option value="1 Guest">1 Guest</option>
                                        <option value="2 Guests">2 Guests</option>
                                        <option value="3 Guests">3 Guests</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-12">
                                <label htmlFor="rsvp-message" className="text-medium">Additional Information:</label>
                                <textarea
                                    name="message" 
                                    id="rsvp-message" 
                                    className="font-alt form-control" 
                                    rows="6" 
                                    placeholder="eg. Vegetarian Requests"
                                    value={props.message}
                                    onChange={props.handleChange}
                                     />
                            </div>

                            <div className="col-md-12 mt-4 text-center">
                                <button type="submit" id="btn-form-rsvp" className="btn btn-small btn-lg-medium btn-base-color">RSVP Now</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
    </ScrollableAnchor>
}