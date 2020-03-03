import React from "react";
import Slideshow from "../Slideshow/Slideshow";
import "./House.css";

export default function House(props) {
  return (
    <section id="house-sec">
      <article id="the-house-intro">
        <Slideshow />
      </article>
      <a href="#house-intro">
        <i className="fas fa-angle-double-down downArrow" />
      </a>

      <article>
        <aside id="house-intro">
          <header>
            <h2>The House</h2>
          </header>
          <p>
            Located at the heart of the island and nestled into the sweeping
            hillside above the wild and secluded beach of Hope Bay, Calabash
            Villa offers unparalleled views and tranquility. Purchased in 2018,
            the entire property underwent a dramatic transformation. Stripping
            the structure back to it's support elements and rebuilding every
            aspect of the house, Calabash has become a modern paradise. With
            polished concrete floors, handman solid wood furniture and not to
            mention the two 16 foot glass walls to maximize the beauty that is
            Bequia. But we didn't stop there! A complete landscaping overhaul
            with the addition of over 150 of new fruit tress, tropical flowers
            and fauna.
          </p>

          <header>
            <h2>Everything you need and nothing you don't.</h2>
          </header>
          <p>
            Calabash Villa has been designed with to maximize your privacy and
            of course, the view. Spanning over two floors, this 4 en suite
            bedroom villa encourages the indoor/outdoor villa lifestyle.{" "}
          </p>
          <p>
            With two self contained levels, the house can be rented in it's
            entirely or by floor. Both levels have been finished when tih
            highest standard and both offer spectacular ocean views.
          </p>
        </aside>
        <aside id="penthouse-info">
          <img src="../images/plans/1.jpg" alt="plan1" className="plan-img" />
          <span>
            <h4>Penthouse</h4>
            <ul>
              <li>Two en suite bedrooms</li>
              <li>
                Master suite complete with Super King size bed, hand crafted bed
                frame and luxury linens
              </li>
              <li>
                Second bedroom suite with King size bed, handcrafted bedframe
                and luxury linens
              </li>
              <li>All bathrooms stocked with high end cotton bath sets</li>
              <li>Fully stocked kitchen</li>
              <li>Seven by four foot kitchen island for dinning</li>
              <li>Two 16 foot sliding glass walls</li>
              <li>Polished Concrete floors thru out</li>
              <li>55 inch OLED Smart TV with Netflix</li>
              <li>Private Water Edge Pool</li>
              <li>Outdoor dinning area</li>
              <li>Poolside lounge areas</li>
              <li>Four poolside sun loungers</li>
              <li>Gas Outdoor Grill area</li>
              <li>Fresh herb garden</li>
              <li>Full wrap around veranda</li>
              <li>Veranda Hanging chairs</li>
              <li>Fast WiFi</li>
              <li>Hardon/Kardon Studio 2 Bluetooth Speaker</li>
              <li>Turkish Beach Towels</li>
            </ul>
          </span>
        </aside>

        <aside id="garden-info">
          <span>
            <h4>Garden Flat</h4>
            <ul>
              <li>Two en suite bedrooms</li>
              <li>
                Both bedrooms complete with King size beds, handcrafted
                bedframes and luxury linens
              </li>
              <li>All bathrooms stocked with high end cotton bath sets</li>
              <li>Fully stocked kitchen</li>
              <li>Outdoor lounge bed</li>
              <li>Outdoor dinner area</li>
              <li>Private Garden</li>
              <li>42 inch LED TV with Apple TV and Netflix</li>
              <li>Fast WiFi</li>
              <li>Bose Bluetooth Speaker</li>
              <li>Numerous hammocks around garden</li>
              <li>Polished Concrete floors thru out</li>
              <li>Turkish Beach Towels</li>
            </ul>
          </span>
          <img src="../images/plans/2.jpg" alt="plan1" className="plan-img" />
        </aside>
      </article>
    </section>
  );
}
