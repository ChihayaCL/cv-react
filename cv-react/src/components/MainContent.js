import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Profile from './Profile';
import styled from 'styled-components';
import GenericCard from './GenericCard';
import Timeline from './Timeline';
import { aboutMe, linetsTimeline } from '../spanishTexts';

function MainContent() {
    const ContactCol = styled(Col)`
        background-color: #006699;
        color: #fff;
    `;
    const InformationCol = styled(Col)`
        padding: 2em 5em;
    `;
    return(
        <Container fluid>
            <Row>
                <ContactCol md={4}>
                    <Profile />
                </ContactCol>
                <InformationCol md={8} >
                    <GenericCard title={aboutMe.title} mainMessage={aboutMe.mainMessage}/>
                    <hr />
                    <Timeline dates={linetsTimeline.dates} city={linetsTimeline.city} charge={linetsTimeline.charge} description={linetsTimeline.description}/>
                </InformationCol>
            </Row>
        </Container>
    );
}

export default MainContent;