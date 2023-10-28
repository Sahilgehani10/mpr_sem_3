import React from "react";
import ReactDOM from "react-dom/client";
import "./Payment.css";

const Subscriptiondata = [
  {
    id: 1,
    Name: "Basic plan",
    Numberacc: "1",
    Feature1: "Unlimited access to the entire music library",
    Feature2: "Ad-free experience",
    Feature3: "-",
    price: "$2/month",
  },

  {
    id: 2,
    Name: "Premium plan",
    Numberacc: 1,
    Feature1: "Unlimited access to the entire music library",
    Feature2: "Ad-free experience",
    Feature3: "Stream offline",
    price: "3$/month",
  },

  {
    id: 3,
    Name: "Family plan",
    Numberacc: "4",
    Feature1: "Unlimited access to the entire music library",
    Feature2: "Ad-free experience",
    Feature3: "Stream offline",
    price: "7$/month",
  },

  {
    id: 4,
    Name: "Ultimate Plan ",
    Numberacc: 4,
    Feature1: "Unlimited access to the entire music library",
    Feature2: "Ad-free experience",
    Feature3: "Stream offline",
    price: "7$/month",
  },
];

export default function Payment() {
  return (
    <div className="container-payment">
      <Headerp />
      <Subscription></Subscription>
      <Cardsp></Cardsp>
      <Footerp />
    </div>
  );
}

function Headerp() {
  return (
    <div className="header">
      <h1>
        <img src="Groovy-logos_white.png" alt="" />
      </h1>
      <h2>Start your free 3-month trial.</h2>
    </div>
  );
}

function Subscription() {
  return (
    <main className="subscription">
      <h2>-OUR PLANS-</h2>
    </main>
  );
}

function Cardsp() {
  return (
    <div className="cards">
      {Subscriptiondata.map((plans) => (
        <Plans planobj={plans} key={plans.id}></Plans>
      ))}

      {/* <Plans
        Name="Basic plan"
        Numberacc="Number of accounts: 1"
        Feature1="Unlimited access to the entire music library"
        Feature2="Ad-free experience"
        Feature3="-"
        price="2$/month"
      ></Plans>
      <Plans
        Name="Premium plan"
        Numberacc="Number of accounts: 1"
        Feature1="Unlimited access to the entire music library"
        Feature2="Ad-free experience"
        Feature3="Stream offline"
        price="3$/month"
      ></Plans>

      <Plans
        Name="Family plan"
        Numberacc="Number of accounts: 4"
        Feature1="Unlimited access to the entire music library"
        Feature2="Ad-free experience"
        Feature3="Stream offline"
        price="7$/month"
      ></Plans> */}
    </div>
  );
}

function Plans({ planobj }) {
  return (
    <div className="plans">
      <h3>{planobj.Name}</h3>
      <h4 className="p1">{planobj.Numberacc}</h4> <p>{planobj.Feature1}</p>
      <p>{planobj.Feature2}</p> <p>{planobj.Feature3}</p>
      <span>{planobj.price}</span>
      <button className="btn">Get started</button>
    </div>
  );
}

function Footerp() {
  return (
    <div className="footer">
      <p>No commitment. Cancel anytime.</p>
    </div>
  );
}
