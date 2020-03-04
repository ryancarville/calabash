import React, { Component } from "react";
import map from './images/map.jpg'
import flag from './images/flag.png'
import "./Island.css";
export default class Island extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fixedNav: "island-nav-relative"
    };
  }
  componentDidMount() {
    if (this.props.location.state !== undefined) {
      if (this.props.location.state.from === "travel") {
        document.getElementById("how-to-get-to-bequia").scrollIntoView();
      }
      if (this.props.location.state.from === "beaches") {
        document.getElementById("the-island-beaches").scrollIntoView();
      }
      if (this.props.location.state.from === "food&drink") {
        document.getElementById("the-island-dining").scrollIntoView();
      }
    }
    document.addEventListener("scroll", () => {
      if (window.scrollY >= 75) {
        this.setState({
          fixedNav: "island-nav-fixed"
        });
      } else {
        this.setState({
          fixedNav: "island-nav-relative"
        });
      }
    });
  }

  render() {
    return (
      <section id="the-island">
        <ul id="the-island-nav" className={this.state.fixedNav}>
          <li>
            <a href="#the-island-geo">Geography</a>
          </li>
          <li>
            <a href="#the-island-tourism">Tourism</a>
          </li>
          <li>
            <a href="#the-island-history">History</a>
          </li>
          <li>
            <a href="#the-island-beaches">Beaches</a>
          </li>
          <li>
            <a href="#the-island-dining">Food & Drink</a>
          </li>
          <li>
            <a href="#the-island-todo">Things To Do</a>
          </li>

          <li>
            <a href="#how-to-get-to-bequia">How to Get Here</a>
          </li>
        </ul>

        <article className="padding50">
          <span id="the-island-intro-map">
            <h2>Bequia: Island of the Clouds</h2>
            <img src={map} alt="map" id="bequia-map" />
            <i style={{ fontSize: 12 }}>
              Hand drawn map of Bequia by Xandra circa 1979
            </i>
          </span>
          <aside id="the-island-geo">
            <br />
            <h2>Geography</h2>
            <p>
              Bequia is a small island, measuring 7 square miles (18 km2) with a
              population of approximately 5,300. The native population are
              primarily a mixture of people of African, Scottish and Island
              Carib descent. A substantial number of white Barbadians also
              settled the Mount Pleasant area of Bequia in the 1860s. Many of
              their descendants still inhabit the area. Other highly populated
              areas include the island capital, Port Elizabeth, which hosts the
              ferry terminal and Paget Farm, which hosts the airport. There are
              also villages at Lower Bay, La Pompe, Hamilton and Belmont. Other
              prominent areas of Bequia include Spring, the site of a former
              coconut plantation and home to agricultural animals, Industry Bay
              and Park Bay, where the Old Hegg Turtle Sanctuary is located. The
              island's hills are much lower than the peaks of St. Vincent, 10
              miles (16 km) to the north, so they do not receive as many rain
              showers. Princess Margaret, who had a home on nearby Mustique,
              visited Bequia in the 1950s and had a beach renamed in her honour.
              Princess Margaret Beach is next to Port Elizabeth and is situated
              inside Admiralty Bay on the west coast. The beach was originally
              known as Tony Gibbons, and continues to be known by that name
              locally, though the origin of this name is uncertain. Also on the
              west coast are the island's main port and a large natural harbour.
            </p>
          </aside>
          <aside id="the-island-tourism">
            <br />
            <h2>Tourism</h2>
            <p>
              Bequia is popular among cruising yachts, expats and tourists. One
              of the busiest times of the year is the annual Easter Regatta and
              Music Fest. Two scuba diving stores run dive trips to 28
              identified dive sites around Bequia. There are several wrecks and
              shallow caves accessible to advanced divers. It is not unusual to
              see Hawksbill turtles, lobsters, moray eels and many kinds of fish
              when diving around Bequia.
            </p>
          </aside>
          <aside id="the-island-history">
            <br />
            <h2>History</h2>
            <span id="flag-wrap">
              <img src={flag} alt="flag" id="flag" />
              <br />
              <i style={{ fontSize: 12 }}>
                Official Flag of Bequia, Saint Vincent and The Grenadines
              </i>
            </span>
            <p>
              As a result of the Treaty of Utrecht, which brought an end to the
              War of Spanish Succession and established peace between the
              Spanish and British Empires, Great Britain obtained the lucrative
              monopoly over the Asiento slave trade. Runaway and shipwrecked
              slaves inhabited the island of St. Vincent in the 17th century.
              According to an early account of the French West Indies, which
              considered Bequia as part of Grenada, Bequia was too inaccessible
              to colonize and Caribs and Arawaks used the island for fishing and
              farming. A few Portuguese and Dutch slave ships en route to Sint
              Eustatius from West Africa reportedly shipwrecked on the Grenadine
              reefs. Bequia was under French control in the 18th century and
              during the Seven Years' War with England, the island was used by
              the fleets of their Spanish and Dutch allies to take on supplies,
              while British ships were banned. The 1763 Treaty of Paris produced
              a significant re-alignment in the map of the Caribbean; St.
              Vincent and the Grenadine islands, including Grenada, were given
              to the British in exchange for Guadeloupe, Martinique and St.
              Lucia. The name Petit Martinique comes from this era, as does
              Petit Saint Vincent. In 1779 the French seized the island, despite
              the treaty, but were forced to relinquish control to Britain again
              soon after. The early 18th century saw the development of a sugar
              industry and the production of related products including molasses
              and rum. Other major produce included coffee, indigo and
              arrowroot. At one point in time, the islands of St. Vincent and
              the Grenadines were the single largest producer of arrowroot
              starch in the world. Currently, Hairoun and Vincy strong rum are
              major export products primarily to the European Union. Under a
              programme instituted by Great Britain to give land to indigent
              settlers, James Hamilton, father of Alexander Hamilton, moved from
              St. Croix to Bequia in 1774 where he remained until 1790. The land
              granted to Hamilton lies along the shore of Southeast Bay. Despite
              his son's frequent gifts of money and entreaties to immigrate or
              at least visit him, neither visited the other. Some historians
              believe that the famous pirate Edward Teach had his base in
              Bequia. The opening shot of the movie Blackbeard, Pirate of the
              Caribbean, made by the BBC, displays a replica of his first ship
              off the coast of Bequia in the St. Vincent passage. According to
              local legend, Saint Vincent and the Grenadines was not only
              Teach's base, but also the place from which Sir Francis Drake
              planned his attacks on the Spanish admiralty in Don Blas de Lezo's
              Cartagena. Indeed, it is thought that Henry Morgan may also have
              anchored in Admiralty Bay, as it was then the safest natural
              harbour in the Eastern Caribbean during hurricane season. Bequia
              was used as a repair facility for ships. Beside Nelson's Dockyard
              on Antigua, and the Carlyle in Bridgetown, Barbados, there were no
              other drydocks or shipyards in the area. Wooden shipbuilding and
              ship-repair on Bequia was possible due to the presence of cedar
              trees on the island and a sufficiently deep and sheltered harbour.
            </p>
          </aside>
        </article>
        <article id="the-island-beaches" className="padding50">
          <br />
          <span>
            <header>
              <h2>Beaches</h2>
              <p>
                Bequia offers some the Caribbeans most spectacular beaches. With
                10 major beaches you are sure to find one that you'll love. No
                matter which ones you choose, crystal clear turquoise water and
                clean soft sand await you.
              </p>
            </header>
            <aside>
              <h4>Hope Beach</h4>
              <p>
                Our "home" beach, Hope is known the island over for its wild
                landscape and coconut bearing palm groves. Its Atlantic waters
                also make it the perfect surf spot. Since it is only accessible
                via a foot path, you are most likely to have the wild beach all
                to yourself.
              </p>
            </aside>
            <aside>
              <h4>Lower Bay</h4>
              <p>
                Well known for it's lively atmosphere. Lower Bay is always sure
                to satisfy any beach party desires. With many beach side bars
                and restaurants you can easily spend many hours on its shores.
              </p>
            </aside>
            <aside>
              <h4>Princess Margaret (formally Tony Gibson)</h4>
              <p>
                Renamed after the late Princess swam of its shore, this idyllic
                beach offers breath-taking views of Admiral Bay along with the
                popular beach bar/restaurant{" "}
                <a
                  href="https://jacksbeachbar.com/"
                  rel="noopener noreferrer"
                  target="_blank"
                  style={{ color: "white" }}
                >
                  Jack's Bar
                </a>
                . Reached by the Belmont walkway, car or boat, this picturesque
                setting is a must visit.
              </p>
            </aside>
            <aside>
              <h4>Friendship Bay</h4>
              <p>
                A lovely white sand beach where the Atlantic and Caribbean Sea
                meet. Friendship Bay is the home of the only all-inclusive hotel
                on the island: Bequia Beach Hotel. This said, the beach and the
                hotel restaurants are open to the public so don't let that turn
                you away. With it's southeast exposure, this is an excellent
                early day chill spot.
              </p>
            </aside>
          </span>
          <span>
            <aside>
              <h4>Port Elizabeth</h4>
              <p>
                Located at the "heart" of the island, Port Elizabeth is not for
                sipping a cocktail on its sandy shores. It's most popular use is
                for accessing the daily ferry's and boats coming and going from
                the island. But it's still not to be missed for its adjacent
                open-air markets, shops and cafes.
              </p>
            </aside>

            <aside>
              <h4>Spring Bay</h4>
              <p>
                This Instagram worthy, palm grove beach is on the north east end
                of the island. Although small in size, it makes up for it with
                its isolation and gorgeous setting.
              </p>
            </aside>

            <aside>
              <h4>Ravine Bay</h4>
              <p>
                The only black sand beach on island, this secluded beach is
                known for its rocky points and massive waves.
              </p>
            </aside>
            <aside>
              <h4>Crescent Beach (also known as Industry Bay)</h4>
              <p>
                Located on the east of the island, this Atlantic water is
                choppier than the more tranquil waters you’ll find elsewhere on
                Bequia but this beautiful beach is protected from the rough
                waves by the reef so it’s a good bet if you want to snorkel. The
                restaurant Sugar Reef, which is nestled within a coconut
                plantation, is also on the same stretch of sand and worth
                including as a pitstop.
              </p>
            </aside>
            <aside>
              <h4>Belmont</h4>
              <p>
                The Bequia Plantation hotel at the southern end of the beach is
                reached via the Belmont Walkway and is perfectly positioned to
                make the most of the picturesque views. Take in the scenery and
                tuck into one of the pizza’s from their wood fired oven.
              </p>
            </aside>
            <aside>
              <h4>Adams bay</h4>
              <p>
                Head south, away from the airport, and you’ll find this idyllic
                beach with white, white sand. For swimmers who like company, the
                waters are often visited by manta rays.
              </p>
            </aside>
          </span>
        </article>
        <article id="the-island-dining" className="padding50">
          <br />
          <span>
            <header>
              <h2>Food & Drink</h2>
              <p>
                Hospitality is in Bequia’s DNA. From Port Elizabeth’s buzzing
                harbour front to the sleepier shores of Friendship Bay, here’s a
                list of the best bars and restaurants that will develop a taste
                for island life.
              </p>
            </header>
            <aside>
              <h3>Mac’s Pizza</h3>
              <p>
                A favorite, Always busy, people flock here for pizza and tapas
                whether it’s to eat in or takeaway. Bag a table on the candlelit
                terrace overlooking the boardwalk and sea. Try the generous
                lobster pizza and delicious meatball tapas.
              </p>
            </aside>
            <aside>
              <h3>Jack's Beach Bar</h3>
              <p>
                An institution on the island, this hip spot overlooking the
                tranquil waters of Princess Margaret Beach has been given a
                recent facelift but its bohemian charm remains a big draw. Try
                the tuna salad and the grilled Mahi Mahi.
              </p>
            </aside>
            <aside>
              <h3>Papa's</h3>
              <p>
                Live music is a regular feature in this spot where the views
                over Admiralty Bay are as delicious as the food. Take a break
                from fish and try the steak.
              </p>
            </aside>
            <aside>
              <h3>Fernando's</h3>
              <p>
                Caught and cooked by Fernando, catch of the day served at this
                hillside restaurant nestled above Lower Bay is a must. Try the
                calaloo soup and grilled barracuda. We’d always recommend
                reserving a table.
              </p>
            </aside>
            <aside>
              <h3>Plantation</h3>
              <p>
                Pull up by boat or walk along Belmont Walkway to this restaurant
                set within the Bequia Plantation Hotel at the southern end of
                Admiralty Bay. Try their wood fire pizzas and cocktails.
              </p>
            </aside>
            <aside>
              <h3>Porthole</h3>
              <p>
                Head here for the low-key, friendly vibe and traditional
                Caribbean dishes. Full of West Indian flavour, Mrs Taylor’s roti
                and rum punch are the best on the island. Just the place for a
                quick but tasty lunch.
              </p>
            </aside>
            <aside>
              <h3>Bagatelle</h3>
              <p>
                Located at Bequia Beach Hotel, cocktails or a candlelit dinner
                are on your doorstep with this waterside restaurant which is
                only a short stroll down the beach from Friendship House. They
                serve international cuisine with classic Caribbean influences.
              </p>
            </aside>
            <aside>
              <h3>Blue Tropic</h3>
              <p>
                Another Bequia Beach Hotel offering, cocktails or a candlelit
                dinner are on your doorstep with this waterside restaurant which
                is only a short stroll down the beach from Friendship House.
                They serve international cuisine with classic Caribbean
                influences.
              </p>
            </aside>

            <aside>
              <h3>De Reef</h3>
              <p>
                This barefoot beachside bar was made for whiling away afternoons
                over piña colada and chicken. Saturday night’s BBQ “Mingle” is
                always a hit too.
              </p>
            </aside>
          </span>
          <span>
            <aside>
              <h3>Keegan's</h3>
              <p>
                This barefoot beachside bar was made for whiling away afternoons
                over piña colada and chicken. Saturday night’s BBQ “Mingle” is
                always a hit too.
              </p>
            </aside>

            <aside>
              <h3>Sugar Reef</h3>
              <p>
                Flanked by a coconut plantation and the beach, this beautiful
                restaurant serves mouthwatering local bites and is the perfect
                excuse to head to the north of the island, particularly if
                teamed with a trip to Crescent Beach.
              </p>
            </aside>

            <aside>
              <h3>Firefly</h3>
              <p>
                Sister to an equally popular hotel on Mustique, the BBQ and
                Creole nights are wonderful. This traditional plantation
                restaurant focusses on ingredients that are home grown, locally
                sourced and is a favourite with both visitors and local island
                residents for breakfast, lunch and dinner.
              </p>
            </aside>
            <aside>
              <h3>Laura's</h3>
              <p>
                Sister to an equally popular hotel on Mustique, the BBQ and
                Creole nights are wonderful. This traditional plantation
                restaurant focusses on ingredients that are home grown, locally
                sourced and is a favourite with both visitors and local island
                residents for breakfast, lunch and dinner.
              </p>
            </aside>
            <aside>
              <h3>Chameleon Cafe</h3>
              <p>
                Sister to an equally popular hotel on Mustique, the BBQ and
                Creole nights are wonderful. This traditional plantation
                restaurant focusses on ingredients that are home grown, locally
                sourced and is a favourite with both visitors and local island
                residents for breakfast, lunch and dinner.
              </p>
            </aside>
            <aside>
              <h3>Gingerbread Cafe</h3>
              <p>
                Sister to an equally popular hotel on Mustique, the BBQ and
                Creole nights are wonderful. This traditional plantation
                restaurant focusses on ingredients that are home grown, locally
                sourced and is a favourite with both visitors and local island
                residents for breakfast, lunch and dinner.
              </p>
            </aside>
            <aside>
              <h3>Fig Tree</h3>
              <p>
                Sister to an equally popular hotel on Mustique, the BBQ and
                Creole nights are wonderful. This traditional plantation
                restaurant focusses on ingredients that are home grown, locally
                sourced and is a favourite with both visitors and local island
                residents for breakfast, lunch and dinner.
              </p>
            </aside>
            <aside>
              <h3>Whaleboner</h3>
              <p>
                Sister to an equally popular hotel on Mustique, the BBQ and
                Creole nights are wonderful. This traditional plantation
                restaurant focusses on ingredients that are home grown, locally
                sourced and is a favourite with both visitors and local island
                residents for breakfast, lunch and dinner.
              </p>
            </aside>
            <aside>
              <h3>Dawns Cafe</h3>
              <p>
                Sister to an equally popular hotel on Mustique, the BBQ and
                Creole nights are wonderful. This traditional plantation
                restaurant focusses on ingredients that are home grown, locally
                sourced and is a favourite with both visitors and local island
                residents for breakfast, lunch and dinner.
              </p>
            </aside>
            <aside>
              <h3>Bar One</h3>
              <p>
                Sister to an equally popular hotel on Mustique, the BBQ and
                Creole nights are wonderful. This traditional plantation
                restaurant focusses on ingredients that are home grown, locally
                sourced and is a favourite with both visitors and local island
                residents for breakfast, lunch and dinner.
              </p>
            </aside>
          </span>
        </article>

        <article id="the-island-todo" className="padding50">
          <br />
          <header>
            <h2>Things To Do</h2>
            <p>
              Bequia is a place to perfect the art of liming. Liming is the art
              of doing nothing. But if you are a traveler that enjoys an
              adventure over a sunbed don't stress. We still have excellent
              options for you!
            </p>
          </header>
          <span>
            <aside>
              <h3>
                Sailing <i className="fas fa-anchor"></i>
              </h3>
              <p>
                Bequia has a long history of sailing. In the 1700's it was the
                go to island for wooden boat building. Today the legacy lives on
                thru the many shared and private chartered yachts. And if speed
                boats are more your thing don't worry, there are many of those
                as well for charter.
              </p>
            </aside>
            <aside>
              <h3>
                Hiking <i className="fas fa-hiking"></i>
              </h3>
              <p>
                Like hiking? What about getting the best view of the island?
                Then hiking to the highest point on the island is a must. Mt.
                Peggy is a friendly hike on the south side of the island. The
                trail head is located in La Pomep and is about 2 hours round
                trip. Closed toe shoes are recommend.
              </p>
            </aside>
            <aside>
              <h3>
                Diving <i className="fas fa-fish"></i>
              </h3>
              <p>
                If you are a dive enthusiast then Bequia is heave on earth. With
                26 dive locations, 100's of species of marine life and 2 dive
                shops you are sure to find a underwater treasure.
              </p>
            </aside>
            <aside>
              <h3>
                Relaxing <i className="fas fa-umbrella-beach"></i>
              </h3>
              <p>
                After you arrive you will quickly learn the number on activity
                on island is to do nothing at all. For some it comes as easy as
                breathing. For others it takes a bit to get use to. But for all
                it is nesscary from time to time. Come to practice the art of
                "liming".
              </p>
            </aside>
          </span>
        </article>
        <article id="how-to-get-to-bequia" className="padding50">
          <br />
          <h2>How to Get Here</h2>
          <aside>
            <h3>By Air</h3>
            <p>
              Erected in 1992, the James F. Mitchell International Airport for
              small planes is located near Paget Farm. With a runway length of
              3,609 feet (1,100 metres), Bequia can be reached by plane with
              daily connections from Kingstown, Bridgetown and surrounding
              islands.
            </p>
            <p>
              <h4>Fly from Barbados</h4>
              The following airlines provide regular flights to{" "}
              <a href="https://www.gaia.bb/">
                Grantley Adams International Airport
              </a>{" "}
              in Barbados.
              <br />
              <a
                href="https://www.virginatlantic.co.uk"
                target="_blank"
                rel="noopener noreferrer"
              >
                Virgin Atlantic
              </a>
              <br />
              <a
                href="https://www.britishairways.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                British Airways
              </a>
              <br />
              <a
                href="https://www.aircanada.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Air Canada
              </a>
              <br />
              <a
                href="https://www.lufthansa.com/ "
                target="_blank"
                rel="noopener noreferrer"
              >
                Lufthansa
              </a>
              <br />
              <br />
              From Barbados you will need to take one of the 2 daily shared
              chartered flights offered by{" "}
              <a
                href="https://flysvgair.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                SVG Air
              </a>
              .
            </p>
            <p>
              <h4>Arriving via Saint Vincent</h4>
              Another route that can be taken is by flying into to{" "}
              <a
                href="http://www.svg-airport.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Argyle International Airport
              </a>{" "}
              in Saint Vincent. With this method of arrival you will need to
              then take a taxi from the airport to the Kingstown harbor and take
              the{" "}
              <a
                href="https://www.bequiaexpress.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Bequia Express
              </a>{" "}
              ferry to Bequia.
              <br />
              <br />
              <a
                href="https://www.aa.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                American Airlines
              </a>{" "}
              has weekly flights from Miami and New York City.
              <br />
              <a
                href="http://www.svg-airport.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Air Canada
              </a>{" "}
              has weekly flights from Toronto.
            </p>
          </aside>
          <aside>
            <h3>By Sea</h3>
            <p>
              Regularly scheduled ferries run from the main island of Saint
              Vincent. Three ferries operate between the capital, Kingstown, and
              the local port of Port Elizabeth. The other islands in the
              Grenadines can be reached by the last operational schooner in the
              Caribbean, the antique original Bequia-built SS Friendship Rose,
              as well as other charter/tour boats that are widely available and
              based in Port Elizabeth, islands for matches. The ferry offers
              daytime as well as overnight charters, and onboard picnics are
              locally renowned. This has resulted in significant increases in
              mostly domestic tourism. The ferry pier is located 45 minutes'
              drive from Argyle International Airport and is served by two
              companies, Bequia Express and Admiralty Transport. Bequia Express
              uses a family-owned ferry that is 148 feet (45 m) long with a
              cargo space measuring 4,440 square feet (412 m2) of which 3,000
              square feet (280 m2) is sheltered with a 14-foot (4.3 m) ceiling.
              The approximate capacity of the ship is 28 cars or 10 to 20
              containers and is licensed for 400 passengers. The Admiral II is a
              similarly-sized vessel with a capacity for 250 passengers.
              Travellers on the Admiral II have a choice between air-conditioned
              indoor seating or covered outdoor seating. The passage between
              Kingstown and Port Elizabeth is a 9-mile (14 km) trip taking
              approximately one hour. Pedestrians such as hitchhikers and
              backpackers have the option of the Grenadines mail boat which
              travels to Port Elizabeth at irregular intervals. The mail boat
              calls at Canouan, Mayreau and Union islands although boarding at
              Mayreau can be difficult, as the vessel remains in deeper waters,
              with passengers being required to embark and leave through the use
              of smaller craft, which land on the nearby beach.
            </p>
          </aside>
        </article>
      </section>
    );
  }
}
