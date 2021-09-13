import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SocialMedia from './SocialMedia';
import { SOCIALMEDIAURLS } from '../config/config';
import myPicture from '../assets/ignacio-figueroa.jpeg';
import linkedinIcon from '../assets/linkedin.png';
import gitlabIcon from '../assets/gitlab.png';
import githubIcon from '../assets/github.png';
import styled from 'styled-components';

function Profile() {
    const RoundedImg = styled.img`
        border-radius: 50%;
        height: 10em;
        width: auto;
    `;    

    return(
        <div>
            <Row>
                <Col>
                    <RoundedImg src={myPicture} alt='José Ignacio Figueroa Zúñiga'/>
                    <h5>José Ignacio Figueroa Zúñiga</h5>
                    <Row>
                        <Col>
                            <SocialMedia iconPath={linkedinIcon} url={SOCIALMEDIAURLS.LINKEDIN} alt='LinkedIn' />
                        </Col>
                        <Col>
                            <SocialMedia iconPath={gitlabIcon} url={SOCIALMEDIAURLS.GITLAB} alt='GitLab' />
                        </Col>
                        <Col>
                            <SocialMedia iconPath={gitlabIcon} url={SOCIALMEDIAURLS.PERSONALGITLAB} alt='GitLab Personal' />
                        </Col>
                        <Col>
                            <SocialMedia iconPath={githubIcon} url={SOCIALMEDIAURLS.GITHUB} alt='Github' />
                        </Col>
                    </Row>
                </Col>
            </Row>
        </div>
    );
}

export default Profile;