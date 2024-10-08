import React from 'react'
import '../css/Footer.css'

const Footer1 = () => {
  return (
    <>
    <footer id="footer_cont" className="pt-5 mt-5" style={{marginTop:'5rem'}}>
    <div className="container">
      <div className="justify-content=evenly row">
        <div className="col-me col-md-3 col-sm-6">
          <h5 id="footer_title" className="text-warning">Contact Us</h5>
          <p>Address : Student Activity Center,Unnat Bharat Abhiyan, IIT Roorkee, Uttarakhand</p>
          <p>Phone : (+91) 7452971049</p>
          <p>Email : uba@iitr.ac.in</p>
        </div>
        <div className="col-me col-md-3 col-sm-6">
          <h5 id="footer_title" className="text-warning">USEFUL LINKS</h5>
          <ul>
            <li><a href="https://www.iitr.ac.in/">IIT Roorkee</a></li>
            <li><a href="https://unnatbharatabhiyan.gov.in/">UBA IIT Delhi</a></li>
            <li><a href="/faculty">Faculty</a></li>
            <li><a href="/studentteam">Student Team</a></li>
            <li><a href="/">Action Plan</a></li>
            <li><a href="/contact">Contact Us</a></li>
          </ul>
        </div>
        <div className="col-me col-md-3 col-sm-6">
          <h5 id="footer_title" className="text-warning">RECENT EVENTS</h5>
          <p>“Samarthya – to lead the transformation, 2022”, is a platform being organised by Unnat Bharat Abhiyan IIT Roorkee on completion of 175 years of IIT Roorkee, to bring Self Help Groups, farmers, entrepreneurs, and students under one umbrella.</p>
          <p><a id="yuva" href="https://samarthyauba.iitr.ac.in/">Samarthya</a></p>
        </div>
        <div className="col-me col-md-3 col-sm-6">
          <h5 id="footer_title" className="text-warning">UBA SOCIAL MEDIA</h5>
          <ul>
            <li><a href="https://twitter.com/uba_iitr">Twitter</a></li>
            <li><a href="https://twitter.com/uba_iitr">Facebook</a></li>
            <li><a href="https://www.instagram.com/uba.iitr/">Instagram</a></li>
            <li><a href="https://www.youtube.com/@unnatbharatabhiyaniitroork3728">Youtube</a></li>
          </ul>
        </div>
      </div>
    </div>
    <div className="bottom-bar col-12">
      <p className="text-center">WEBSITE DEVELOPED BY UBA IITR WITH ❤️</p>
      <p className="text-center">COPYRIGHT © 2022 SOCIAL WELFARE. ALL RIGHTS RESERVED.</p>
    </div>
  </footer>
  </>
  
  )
}

export default Footer1
