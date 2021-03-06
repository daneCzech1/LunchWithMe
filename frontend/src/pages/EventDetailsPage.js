import React, { Component } from 'react'
import { EventPanel } from '../components/EventPanel/EventPanel'
import { Row, Col } from 'reactstrap'

export class EventDetailsPage extends Component {
  render() {
    /*
    // Sample events array
    var sampleEventsArray = [
      {
        maximumLunchBuddies: 8,
        eventId: 1,
        eventName: "This is a sample of event name",
        eventPlace: {
          name: "Tradice",
          location: "Anděl"
        },
        eventCreator: {
          id: 1,
          name: "John",
          surname: "Doe"
        },
        eventDescription: "Today they have gorgeous duck with 8. Check the daily menu and let me know if you are going too. Here is the menu link: http://www.tradiceandel.cz/cz/denni-nabidka/.",
        eventDate: "1.1.2001",
        eventAttendees: [
          {
            id: 1,
            name: "John",
            surname: "Doe"
          },
          {
            id: 2,
            name: "Mary",
            surname: "Doe"
          },
          {
            id: 3,
            name: "Pete",
            surname: "Doe"
          }
        ],
        comments: [
          {
            id: 1,
            author: {
              id: 1,
              name: "John Doe"
            },
            text: "That sounds great. I am looking forward to meeting you. :)",
            published: "2.1.2001"
          },
          {
            id: 2,
            author: {
              id: 2,
              name: "Marry"
            },
            text: "I am joining you too!",
            published: "3.1.2001"
          },
        ]
      }
    ];*/
    const { event } = this.props

    return (
      <Row className="eventDetailsPage">
        <Col md="8" sm="12">
          <EventPanel
            event={event}
            displayComments={true}
            key={event.eventId}
          />
        </Col>
      </Row>
    )
  }
}
