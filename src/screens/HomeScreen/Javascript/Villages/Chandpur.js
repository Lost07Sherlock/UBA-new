import React from "react";
import { Container, Row, Col, Table } from "react-bootstrap";
import { StudentIdentityCard } from "../../../../components/Javascript/StudentIdentityCard";
import { InitCard } from "../../../../components/Javascript/InitCard";
import "../../css/StudentTeam.css";
import "../../css/Villages.css";
import ShubhamK from "../../../../Images/StudentTeam/Shubham_kumar.jpg"
import map1 from "../../../../Images/Initiatives/Chandpur/map1.jpg";
import ABHINAV from "../../../../Images/StudentTeam/ABHINAV SAINI.jpg";
import KESHAV from "../../../../Images/StudentTeam/KESHAV PARETA.jpg";
import Ani from "../../../../Images/StudentTeam/Ani.jpg";
import Null from "../../../../Images/StudentTeam/Null.jpeg";
import Kinshu from "../../../../Images/StudentTeam/Kinshu.jpg";
import init1 from "../../../../Images/Initiatives/Chandpur/init1.jpeg";
import init2 from "../../../../Images/Initiatives/Chandpur/init2.jpeg";
import init3 from "../../../../Images/Initiatives/Chandpur/init3.jpg";
import Radhika from "../../../../Images/StudentTeam/Radhika_agr.jpg";
import Harsh_jha from "../../../../Images/StudentTeam/Harsh_Jha.jpg"
import Anand from "../../../../Images/StudentTeam/Anand.jpg"
import Rasika from "../../../../Images/StudentTeam/Rasika.jpeg"

export const Chandpur = () => {
  return (
    <>
      <div style={{alignContent:'center' , alignItems:'center' }}>
        <Row>
          <div class="container tittle1 bg-overlay1">
            <div className="my-5" style={{ textAlign: "center" }}>
              <h3>GOPALPUR</h3>
              <p>HOME/VILLAGE/GOPALPUR</p>
            </div>
          </div>
        </Row>
        <Row>
          <section className="how-can-help1 what-we1">
            <div className="container tittle1">
              <Row>
                <Col class="col-md-8 with-map1">
                  <span class="big-text1">
                    <small>About Gopalpur</small>
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
                  Gopalpur village comes under Vikasnagar block of district
                    Dehradun, Uttarakhand. Being very close to mountains, it is
                    situated on the banks of one of the tributaries of Yamuna
                    River. It is nearly 36 km from Dehradun in the North-West
                    direction. From West, it is surrounded by Chharba village
                    (of Sahaspur block) and from East Horawala village
                    (Vikasnagar block) surrounds it.
                  </p>
                  <p align="justify">
                  The village is divided in two parts namely- Gopalpur Khurd
                    and Gopalpur Kala, of which Gopalpur Kala is nearly 1.25
                    times larger than Gopalpur Khurd (population wise).
                  </p>
                  <p align="justify">
                  Gopalpur Kala is a small village with total 46 families
                    residing. The Gopalpur Kala village has population of 227 of
                    which 117 are males while 110 are females as per Population
                    Census 2011.
                  </p>
                  <p align="justify">
                  In Gopalpur Kala village population of children with age 0-6
                    is 26 which makes up 11.45 % of the total population of the
                    village. Average Sex Ratio of Gopalpur Kala village is 940
                    which is lower than Uttarakhand state average of 963. Child
                    Sex Ratio for the Gopalpur Kala as per census is 1167,
                    higher than Uttarakhand average of 890.
                  </p>
                  <p align="justify">
                  Gopalpur Kala village has higher literacy rate as compared
                    to Uttarakhand. In 2011, literacy rate of Gopalpur Kala
                    village was 85.57 % compared to 78.82 % of Uttarakhand. In
                    Gopalpur Kala male literacy stands at 92.38 % while female
                    literacy rate was 78.13 %.
                  </p>
                  <p align="justify">
                  Gopalpur Khurd is a small village with total 44 families
                    residing. The Gopalpur Khurd village has a population of 183
                    of which 87 are males while 96 are females as per Census
                    2011. In Gopalpur Khurd village the population of children
                    with age 0-6 is 24 which makes up 13.11 % of total
                    population of village. Average Sex Ratio of Gopalpur Khurd
                    village is 1103 which is higher than Uttarakhand state
                    average of 963. Child Sex Ratio for the Gopalpur Khurd as
                    per census is 846, lower than Uttarakhand average of 890.
                  </p>
                  <p align="justify">
                  Gopalpur Khurd village has higher literacy rate compared to
                    Uttarakhand. In 2011, literacy rate of Gopalpur Khurd
                    village was 84.91 % compared to 78.82 % of Uttarakhand. In
                    Gopalpur Khurd male literacy stands at 95.95 % while female
                    literacy rate was 75.29 %.
                  </p>
                  <p></p>
                </Col>
                <div  style={{alignItems:'center',alignContent:'center',width:'full' , marginTop:'2rem'}}>
                <div  style={{alignItems:'center',alignContent:'center'}}>
                  <div className="program1 w-full">
                    <div className="inner1">
                      <h3>
                        Gopalpur
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
        <Row>
          <Row>
            <div className="tittle1" style={{ textAlign: "center" }}>
              <h2>Village Details</h2>
              <p>Comprehensive data about the village.</p>
            </div>
          </Row>
          <Col className="my-5" md={{ span: 4, offset: 2 }}>
            <div className="my-2" style={{ textAlign: "center" }}>
              <h4> Location</h4>
            </div>
            <Table striped bordered hover size="sm">
              <thead>
                <tr>
                  <th>Level</th>
                  <th>Details</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>State</td>
                  <td>Uttarakhand</td>
                </tr>
                <tr>
                  <td>District</td>
                  <td>Haridwar</td>
                </tr>
                <tr>
                  <td>Gram Panchayat</td>
                  <td>Gopalpur</td>
                </tr>
                <tr>
                  <td>Village Head/Pradhan</td>
                  <td>Pinki</td>
                </tr>
                <tr>
                  <td>Block</td>
                  <td>Roorkee</td>
                </tr>
                <tr>
                  <td>Block Officer</td>
                  <td>--</td>
                </tr>
                <tr>
                  <td>Police Station</td>
                  <td>--</td>
                </tr>
              </tbody>
            </Table>
          </Col>
          <Col className="my-5" md={{ span: 4 }}>
            <div className="my-2" style={{ textAlign: "center" }}>
              <h4> Demography</h4>
            </div>
            <Table striped bordered hover size="sm">
              <thead>
                <tr>
                  <th>Particular</th>
                  <th>Total</th>
                  <th>Male</th>
                  <th>Female</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Total no. of Houses</td>
                  <td>340</td>
                  <td>--</td>
                  <td>--</td>
                </tr>
                <tr>
                  <td>Population</td>
                  <td>1860</td>
                  <td>1001</td>
                  <td>859</td>
                </tr>
                <tr>
                <td>Child (0-6)</td>
                  <td>309</td>
                  <td>172</td>
                  <td>137</td>
                </tr>
                <tr>
                <td>Schedule Caste</td>
                  <td>1263</td>
                  <td>675</td>
                  <td>588</td>
                </tr>
                <tr>
                  <td>Schedule Tribes</td>
                  <td>0</td>
                  <td>0</td>
                  <td>0</td>
                </tr>
                <tr>
                  <td>Literacy</td>
                  <td>60.16%</td>
                  <td>68.03%</td>
                  <td>50.98%</td>
                </tr>
                <tr>
                  <td>Total Workers</td>
                  <td>504</td>
                  <td>469</td>
                  <td>35</td>
                </tr>
                <tr>
                  <td>Main Workers</td>
                  <td>479</td>
                  <td>449</td>
                  <td>30</td>
                </tr>
                <tr>
                  <td>Marginal Workers</td>
                  <td>25</td>
                  <td>20</td>
                  <td>5</td>
                </tr>
              </tbody>
            </Table>
          </Col>
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
              <InitCard
                image={init1}
                village="Gopalpur |"
                date="July 3, 2021"
                init="Student Help Initiative"
                initiative="Addressing the problems faced by students and providing study material in Gopalpur."
              />
              <br />
            </center>
          </div>
          <div className="col-lg-4">
            <center>
              <InitCard
                image={init2}
                village="Gopalpur |"
                date="April 05-10, 2021"
                init="Computer Installation Initiative"
                initiative="Team UBA set up computers in GIC school to ease in online education in pandemic time."
              />
              <br />
            </center>
          </div>
          <div className="col-lg-4">
            <center>
              <InitCard
                image={init3}
                village="Gopalpur |"
                date="September 14, 2020"
                init="Essay Writing Competition"
                initiative="Celebrating Hindi Diwas with village students of GIC Horawala"
              />
              <br />
            </center>
          </div>
        </div>
      </Container>
      <Container style={{ background: "#f7f8f9" }}>
        <h1 className="text-center headingStudent1 my-5">Village Team</h1>
        <Row>
        <div className="col-lg-5" style={{ marginLeft: "auto" }}>
          <StudentIdentityCard
              studImg={ShubhamK}
              name="Shubham Kumar"
              pos="Village Co-ordinator"
              village="Gopalpur"
              email="Email: s_kumar5@me.iitr.ac.in"
              linkedIn="https://www.linkedin.com/in/shubham-kumar-305b52240"
            />
            <br />
          </div>
          <div className="col-lg-5" style={{ marginLeft: "auto" }}>
          <StudentIdentityCard
              studImg={Rasika}
              name="Rasika Kaple"
              pos="Village Co-ordinator"
              village="Gopalpur"
              linkedIn="https://www.linkedin.com/in/rasikakaple/"
              email = "Email: k_rdnyaneshwar@me.iitr.ac.in"
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
