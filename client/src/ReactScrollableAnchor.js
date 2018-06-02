import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './css/main.css'
import { Jumbotron } from 'react-bootstrap'
import HomeSection from './components/Home'
import Location from './components/Location'
import NavigationBar from './components/NavigationBar'
import Ceremony from './components/Ceremony'
import RSVP from './components/RSVP'
import axios from 'axios'
import { configureAnchors } from 'react-scrollable-anchor'

export default class Page extends Component {

  constructor() {
    super();
    this.state = {      
      fullName: '',
      email: '',
      message: '',
      guests: '',
      events: '',
    };
    this.handleRsvp = this.handleRsvp.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  
  handleChange(event) {    
    const obj = {};
    obj[event.target.name] = event.target.value;
    this.setState(obj);
  };

  handleRsvp(event) {
    event.preventDefault();
    const data = {
      fullName: this.state.fullName,
      email: this.state.email,
      message: this.state.message,
      guests: this.state.guests,
      events: this.state.events,
    };
    // axios.post(`${process.env.REACT_APP_USERS_SERVICE_URL}/rsvp`, data)
    axios.post(`rsvp`, data)
      .then((res) => {
        console.log(res);
        this.getUsers();
        this.setState({fullName: '', email: '', message: '', guests: '', events: ''});
      })
      .catch((err) => {
        console.log(err);
      });
  }


  render() {
    configureAnchors({scrollDuration: 1200})
    return (
      <div>
        <NavigationBar id={'navigation-bar'} brand={"Gili & Matan - The Wedding"} />
        <HomeSection id={'home'} />
        <Ceremony id={'ceremony'} />
        <Location id={'location'} />
        <RSVP id={'rsvp'} handleRsvp={this.handleRsvp} handleChange={this.handleChange} {...this.state  }/>
      </div>
    )
  }
}
