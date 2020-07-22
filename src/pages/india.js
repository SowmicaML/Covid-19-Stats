import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";
import "./india.css";
import flag from "../images/flag.jpg";
import RingLoader from "react-spinners/RingLoader";
import { Svg1, Svg2, Svg3, Svg4 } from "../components/svg";

const India = () => {
  const [latest, setlatest] = useState([]);
  const [results, setResults] = useState([]);
  const [loading, setloading] = useState(true);

  useEffect(() => {
    axios
      .all([
        axios.get("https://api.covidindiatracker.com/total.json"),
        axios.get("https://api.covidindiatracker.com/state_data.json"),
      ])
      .then((responseArr) => {
        setlatest(responseArr[0].data);
        setResults(responseArr[1].data);
        setloading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const rows = results.map((data, i) => {
    const district = data.districtData;
    const state = data.id;
    return (
      <>
        <tr
          key={i}
          data-toggle="collapse"
          data-target={`#${data.id}`}
          aria-expanded="false"
          aria-controls="navbarSupportedContent"
          aria-label="Toggle navigation"
          style={{ backgroundColor: "#F8F9FA" }}
        >
          <td>{data.state}</td>
          <td>{data.confirmed}</td>
          <td>{data.active}</td>
          <td>{data.recovered}</td>
          <td>{data.deaths}</td>
        </tr>

        {district.map((val, i) => (
          <tr className=" collapse" id={state} key={val.id}>
            <td>{val.id}</td>
            <td>{val.confirmed}</td>
          </tr>
        ))}
      </>
    );
  });
  return (
    <div className="indiapage">
      <div style={{ justifyContent: "center", display: "flex" }}>
        <RingLoader size={60} color={"#123abc"} loading={loading} />
      </div>
      <div className=" heading text-center">
        Covid-19 India Stats
        <br />
        <img src={flag} alt="" width="150px" height="75px" />
      </div>
      <div className="details">
        <CardDeck className="font-weight-bold">
          <Card className=" confirmed text-center text-danger" bg="light">
            <Card.Body>
              <Card.Title>
                <h4>Confirmed</h4>
              </Card.Title>
              <Card.Text> <NumberFormat
                displayType={"text"}
                thousandSeparator={true}
                thousandsGroupStyle="lakh"
                value={latest.confirmed}
              /></Card.Text>
              <Card.Text>+<NumberFormat
                displayType={"text"}
                thousandSeparator={true}
                thousandsGroupStyle="lakh"
                value={latest.cChanges}
              /></Card.Text>
            </Card.Body>
            <Card.Footer>
              <Svg1 />
            </Card.Footer>
          </Card>
          <Card className=" active text-center text-info" bg="light">
            <Card.Body>
              <Card.Title>
                <h4>Active</h4>
              </Card.Title>
              <Card.Text><NumberFormat
                displayType={"text"}
                thousandSeparator={true}
                thousandsGroupStyle="lakh"
                value={latest.active}
              /></Card.Text>
            </Card.Body>

            <Card.Footer>
              <Svg2 />
            </Card.Footer>
          </Card>
          <Card className="recovered text-center text-success" bg="light">
            <Card.Body>
              <Card.Title>
                <h4>Recovered</h4>
              </Card.Title>
              <Card.Text><NumberFormat
                displayType={"text"}
                thousandSeparator={true}
                thousandsGroupStyle="lakh"
                value={latest.recovered}
              /></Card.Text>
              <Card.Text>+<NumberFormat
                displayType={"text"}
                thousandSeparator={true}
                thousandsGroupStyle="lakh"
                value={latest.rChanges}
              /></Card.Text>
            </Card.Body>
            <Card.Footer>
              <Svg3 />
            </Card.Footer>
          </Card>
          <Card className=" deaths text-center text-secondary" bg="light">
            <Card.Body>
              <Card.Title>
                <h4>Deaths</h4>
              </Card.Title>
              <Card.Text><NumberFormat
                displayType={"text"}
                thousandSeparator={true}
                thousandsGroupStyle="lakh"
                value={latest.deaths}
              /></Card.Text>
              <Card.Text>+<NumberFormat
                displayType={"text"}
                thousandSeparator={true}
                thousandsGroupStyle="lakh"
                value={latest.dChanges}
              /></Card.Text>
            </Card.Body>
            <Card.Footer>
              <Svg4 />
            </Card.Footer>
          </Card>
        </CardDeck>
      </div>
      <div className="tablediv pt-5">
        <table className="table table-hover">
          <thead>
            <tr>
              <th scope="col">State</th>
              <th scope="col">Confirmed</th>
              <th scope="col">Active</th>
              <th scope="col">Recovered</th>
              <th scope="col">Deaths</th>
            </tr>
          </thead>
          <tbody>{rows}</tbody>
        </table>
      </div>
    </div>
  );
};

export default India;
