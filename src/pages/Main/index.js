import React, { Fragment } from "react";
import Header from "../../components/header"; 
import Photo from "../../components/photo";
import Button from "../../components/button";
import Section from "../../components/section";
import Activities from "../../components/activities";
import List from "../../components/list";
import Form from "../../components/form";
import Footer from "../../components/footer";
import Biography from "../../components/biography";
import Blog from "../../components/blog";
import Portfolio from "../../components/portfolio";
import Notc1 from "../../resources/images/Cisco.jpg"
import Notc2 from "../../resources/images/Android.jpg"
import Notc3 from "../../resources/images/cyber.jpg"
import "./styles.css";

const Main = () => {
  return (
    <Fragment><div>
      <a name="topAnchor" href="index.html" id="topAnchor">.</a>
      </div>
      <Header />
      <div className="mainContainer">
        <div className="headerContainer">
          <div className="bgContainer">
            <Photo />
            <Button>Ver Currículo</Button>
          </div>
        </div>
        <Section />
        <Activities />
        <List />
        <div id="blogContainer">
          <h2>Blog</h2>
          <Blog 
            link="https://www.bleepingcomputer.com/news/security/the-week-in-ransomware-june-14th-2019-pylocky-and-gandcrab-cleans-up/"
            image={Notc3} 
            titulo="The Week in Ransomware - June 14th 2019 - pyLocky and GandCrab Cleans Up"
            texto="This week we saw French law enforcement releasing a decryptor for the pyLocky Ransomware.  We also saw a charity in Washington and a airplane manufacturer become infected with ransomware."
          />
          <Blog
            link="https://www.bleepingcomputer.com/news/security/new-android-trojan-leads-users-to-scam-sites-via-notifications/"
            image={Notc2}
            titulo="New Android Trojan Leads Users to Scam Sites via Notifications"
            texto="A new Android Trojan that uses website notifications to redirect users to scam and fraudulent sites has been discovered by security researchers on Google's Play Store."
          />
          <a name="portAnchor" href="teste.html"> </a>
          <Blog
            link="https://www.bleepingcomputer.com/news/security/cisco-ios-xe-software-receives-fix-against-high-severity-flaw/"
            image={Notc1}
            titulo="Cisco IOS XE Software Receives Fix Against High-Severity Flaw"
            texto="Cisco today released an updated version for its IOS XE software to patch a high severity cross-site request forgery (CSRF) vulnerability. Demo exploit code is available."
          />
        </div>
        <Portfolio />
        <Biography />
        <Form />
      </div>
      <Footer />
    </Fragment>
  );
};

export default Main;