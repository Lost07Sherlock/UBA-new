import React from "react";
import { Container, Row, Col, Table } from "react-bootstrap";
import { StudentIdentityCard } from "../../../../components/Javascript/StudentIdentityCard";
import { InitCard } from "../../../../components/Javascript/InitCard";
import "../../css/StudentTeam.css";
import "../../css/Villages.css";
import food_kit from '../../../../Images/Puranpur/recreational_activities.jpg'
import map1 from "../../../../Images/Initiatives/Puranpur/map1.jpg";
import SAGAR from "../../../../Images/StudentTeam/SAGAR GUPTA.jpg";
import Anuj from "../../../../Images/StudentTeam/Anuj.jpeg";
import Pratibha from "../../../../Images/StudentTeam/Pratibha.jpg";
import Null from "../../../../Images/StudentTeam/Null.jpeg"
import Charu from "../../../../Images/StudentTeam/Charu.jpg"
import Abhishek from "../../../../Images/StudentTeam/Abhishek.jpg";
import init10 from "../../../../Images/Initiatives/Puranpur/init10.jpg";
import init11 from "../../../../Images/Initiatives/Puranpur/init11.jpg";
import init12 from "../../../../Images/Initiatives/Puranpur/init12.jpg";
import Radhika from "../../../../Images/StudentTeam/Radhika_agr.jpg";
import Harsh_jha from "../../../../Images/StudentTeam/Harsh_Jha.jpg"
import Anand from "../../../../Images/StudentTeam/Anand.jpg"
import Rasika from "../../../../Images/StudentTeam/Rasika.jpeg"
import FPO from "../../../../Images/Puranpur/FPO awarness.jpg"
import Ecobricks from "../../../../Images/Ecobricks.jpg"

export const Puranpur = () => {
  return (
    <>
      <div>
        <Row>
          <div class="container tittle1 bg-overlay1">
            <div className="my-5" style={{ textAlign: "center" }}>
              <h3>PURANPUR</h3>
              <p>HOME/VILLAGE/PURANPUR</p>
            </div>
          </div>
        </Row>
        <Row>
          <section className="how-can-help1 what-we1">
            <div className="container tittle1">
              <Row>
                <Col class="col-md-8 with-map1">
                  <span class="big-text1">
                    <small>About Puranpur</small>
                  </span>
                  <hr
                    style={{
                      width: "7rem",
                      height: "0.3rem",
                      background: "#ecc731",
                      opacity: "1",
                    }}
                  />
                  <p align="justify">
                    The UBA team, formed in the month of August, 2017, conducted
                    a survey on August 13, 2017 to understand the village and
                    its people thoroughly with the help of the team members of
                    other villages. The survey was conducted on August 13, 2017,
                    with the student team visiting 120 different households in
                    the village. Efforts were made to reach every part of the
                    village and have as diverse a survey as possible, to negate
                    any bias towards any community or group of people.
                  </p>
                  <p align="justify">
                    The analysis of the survey threw up some very interesting
                    data:
                  </p>
                  <p>
                    All people had a roof on their heads and most of the
                    households had toilets, a rarity, as far as Indian villages
                    go. Many people were not aware of water conservation
                    techniques. Main source of Drinking water is Tube well. The
                    electricity connection is quite stable, with most of the
                    areas receiving electricity at least 20-21 hrs/day. The
                    nearest Hospital is in Bahadarabad. The nearest Bank is
                    Punjab National Bank in Puranpur. Most of the people have
                    Aadhar Card, Voter ID (if eligible), and Ration Card. ITC
                    has constructed toilets in the village through Corporate
                    social responsibility while many toilets under Nirmal
                    Bhaarat Abhiyaan (a scheme under which subsidy is given to
                    the people in construction of the toilets) are left
                    unconstructed. There are three self help groups in the
                    village. A self-help group (SHG) is a village-based
                    financial intermediary committee usually composed of 10–20
                    local women or men. A mixed group is generally not
                    preferred. Most self-help groups are located in India,
                    though SHGs can be found in other countries, especially in
                    South Asia and Southeast Asia.
                  </p>
                  <p>
                    While speaking with the villagers, the team also found some
                    common problems:
                  </p>
                  <p>
                    Water from most of the hand pumps in the village turns
                    yellow after 15 minutes. There is no Waste Disposal system
                    in the village and during rainy seasons there is an overflow
                    of water on roads. Main reason for the pollution of ground
                    water is dumping of waste near water sources. Drainage,
                    Drinking water and Street lights are the major problems in
                    the village.
                  </p>
                  <p></p>
                </Col>

                <div  style={{alignItems:'center',alignContent:'center',width:'full' , marginTop:'2rem'}}>
                <div  style={{alignItems:'center',alignContent:'center'}}>
                  <div className="program1 w-full">
                    <div className="inner1">
                      <h3>
                        Puranpur 
                        <br />
                        August 20, 2023
                        <br />
                        <span>Village Action PLan</span>
                      </h3>
                      <a href="docs/Newsletter2.pdf" class="btn btn-1">
                        FOR MORE DETAILS
                      </a>
                    </div>
                  </div>
                </div>
                </div>
              </Row>
            </div>
          </section>
        </Row>
      </div>
      <Row className="tittle1">
        <h2 className="text-center my-3">
          Land Use Map & <span>Physical Map</span>
        </h2>
        <p className="text-center">
          Mapped data of land use and area of the village.
        </p>
        <br />
        <p className="text-center">
          <b>Land Use Map</b>
        </p>
      </Row>
      <img className="center video-blog1" src={map1} />
      <br />
      <br />

      <section class="don-counter1">
        <div class="overlay">
          <Container>
            <Row id="counters1">
              <Col md={6}>
                <Row>
                  <li class="col-sm-6">
                    <Row>
                      <Col xs={3}>
                        <i class="far fa-heart"></i>
                      </Col>
                      <Col xs={9}>
                        {/* <span class="count1"></span> */}
                        <span>50+</span>
                        <p>Iniatives Undertaken</p>
                      </Col>
                    </Row>
                  </li>

                  <li class="col-sm-6">
                    <Row>
                      <Col xs={3}>
                        <i class="fa fa-users"></i>
                      </Col>
                      <Col xs={9}>
                        {" "}
                        {/* <span class="count2"></span> */}
                        <span>460+</span>
                        <p>volunteers</p>
                      </Col>
                    </Row>
                  </li>
                </Row>
              </Col>

              <Col md={6}>
                <Row>
                  <li class="col-sm-6">
                    <Row>
                      <Col xs={3}>
                        <i class="far fa-thumbs-up"></i>
                      </Col>
                      <Col xs={9}>
                        {" "}
                        {/* <span class="count3"></span> */}
                        <span>5+</span>
                        <p>years of work</p>
                      </Col>
                    </Row>
                  </li>

                  <li class="col-sm-6">
                    <Row>
                      <Col xs={3}>
                        <i class="far fa-smile"></i>
                      </Col>
                      <Col xs={9}>
                        {" "}
                        {/* <span class="count4"></span> */}
                        <span>5500+</span>
                        <p>people benefitted</p>
                      </Col>
                    </Row>
                  </li>
                </Row>
              </Col>
            </Row>
          </Container>
        </div>
      </section>

      <Container style={{ background: "#f7f8f9" }}>
        <h1 className="text-center headingStudent1 my-5">Initiatives</h1>

        <div className="row">
        <div className="col-lg-4">
              <center>
                <InitCard image={food_kit} village="Puranpur | " date="August 5, 2023" init="Recreational Activities" initiative="Team UBA organized co-circular activities for over 100+ students in Puranpur" /><br/>
              </center>
            </div>
          <div className="col-lg-4">
              <center>
                <InitCard image={FPO} village="Puranpur | " date="June 23, 2023" init="FPO Awareness session" initiative="Team conducted session regarding FPO with the farmers of Puranpur." /><br/>
              </center>
            </div>
          <div className="col-lg-4">
            <center>
              <InitCard
                image={Ecobricks}
                village="Puranpur |"
                date="June 05, 2023"
                init="Ecobricks Workshop"
                initiative="Organised informative session about Eco-bricks for the students of Puranpur."
              />
              <br />
            </center>
          </div>
        </div>
      </Container>
      <Container style={{ background: "#f7f8f9", alignContent:'center' }}>
        <h1 className="text-center headingStudent1 my-5">Village Team</h1>
        <Row>
        <div className="col-lg-5" style={{ marginLeft: "auto" }}>
          <StudentIdentityCard
              studImg={Anuj}
              name="Anuj Kumar"
              pos="Village Co-ordinator"
              village="Puranpur"
              email="Email: a_kumar4@cy.iitr.ac.in"
              linkedIn="https://www.linkedin.com/in/anuj-kumar-1aa590230"
            />
            <br />
          </div>
          <div className="col-lg-5" style={{ marginLeft: "auto" }}>
          <StudentIdentityCard
              studImg={Charu}
              name="Charu Sahu"
              pos="Village Co-ordinator"
              village="Puranpur"
              email = "Email: c_sahu@ee.iitr.ac.in"
              linkedIn="https://www.linkedin.com/in/charusahu"
            />
            <br />
          </div>
        </Row>
      </Container>
      <Row className="text-center my-4">
        <h2>
          Be the change <i style={{ color: "#ecc731" }} class="fa fa-heart"></i>{" "}
          <strong>You wish to see</strong>.
        </h2>
      </Row>
    </>
  );
};
