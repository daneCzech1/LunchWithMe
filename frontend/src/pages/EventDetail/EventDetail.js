import React, { Component } from 'react';
import { EventPanel } from '../../components/EventPanel/EventPanel';
import { Row, Col } from 'reactstrap';
import { withRouter } from 'react-router-dom'
import axios from 'axios'
import Api from '../../Api';
import { getEventById } from "../EventFeedPage/Reducer";
import { getUserInfo } from "../../components/FBLogin/Reducer";
import { connect } from 'react-redux';
import { LunchBuddyIcon } from "../../components/LunchBuddyIcon";
import { switchEventAttendance } from "../EventFeedPage/Actions";
import { getEvent, getEventState } from './Reducer'
import { EventFetch } from './Actions'

export class EventDetail extends Component {



    componentDidMount() {
        console.log("->>>>>>> STATE", this.props);
<<<<<<< HEAD
        const { EventFetch } = this.props;
        EventFetch(this.props.params.eventId);

=======
        const {EventFetch} = this.props;
        EventFetch(this.props.params.eventId);
        
>>>>>>> 5e8535509219e23d94c1624b81d338b42cb8ce30
    }

    getEvent() {
        // axios.get('http://localhost:3001/events/' + this.props.params.eventId).then(
        //     (response) => this.setState({event: response.data})
        // );
    }


    render() {
        const { event } = this.props;
        const { id } = this.props;
<<<<<<< HEAD
    

        
=======



>>>>>>> 5e8535509219e23d94c1624b81d338b42cb8ce30


        return (
            <Row className="eventDetailsPage"></Row>
        );



    }

}


const mapStateToProps = storeState => {
<<<<<<< HEAD
    console.log('storeState: ', storeState);
=======
>>>>>>> 5e8535509219e23d94c1624b81d338b42cb8ce30
    // pouziju selecty definovany v reduceru. Je to hezci, kdyz si pak budem
    // upravovat model, odpadne spoustu problemu.
    const eventState = getEventState(storeState);
    return { event: getEvent(eventState) };

};


export function mapDispatchToProps(dispatch) {
    return {
        EventFetch: (id) => dispatch(EventFetch(id)),
    };
}




export const EventDetailContainer = connect(
    mapStateToProps,
<<<<<<< HEAD
    mapDispatchToProps
=======
   mapDispatchToProps
>>>>>>> 5e8535509219e23d94c1624b81d338b42cb8ce30
)(EventDetail);


export default EventDetailContainer;