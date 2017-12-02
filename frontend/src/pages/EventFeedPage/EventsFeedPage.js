import React, { Component } from "react";
import { connect } from "react-redux";
import { EventPanel } from "../../components/EventPanel/EventPanel";
import { Container, Row, Col } from "reactstrap";
import { eventFeedFetch, fetchEventChanges } from "./Actions";
import { getEventFeedState, getEvents } from "./Reducer";
import { Link } from 'react-router';

export class EventsFeedPage extends Component {
  //Reacti event - zde si dispatchneme pak sagu a ta nataha pres axios data
  componentDidMount() {
    //Spustim redux action a ta spusti sagu
    const { eventFeedFetch } = this.props;
    eventFeedFetch();
  }

  render() {
    const { events } = this.props;

    return (
      <Row className="eventsFeedPage">
        <Col md="8" sm="12">
          {
            events.length
            &&
            events.map(event => <EventPanel eventId={event.id} event={event} key={event.id} />)
            ||
            <h2>There are currently no events. <Link to="addLunch">Let's create one!</Link></h2>
          }
        </Col>
      </Row>
    );
  }
}

const mapStateToProps = storeState => {
  // pouziju selecty definovany v reduceru. Je to hezci, kdyz si pak budem
  // upravovat model, odpadne spoustu problemu.
  const eventListState = getEventFeedState(storeState);
  return { events: getEvents(eventListState) };

};


export function mapDispatchToProps(dispatch) {
  return {
    eventFeedFetch: () => dispatch(eventFeedFetch()),
  };
}


// Connect  - obali comopnentu a udela z ni container, který má řístup do
// REDUXoveho Storu
const EventsFeedContainer = connect(mapStateToProps, mapDispatchToProps)(EventsFeedPage);

export default EventsFeedContainer;