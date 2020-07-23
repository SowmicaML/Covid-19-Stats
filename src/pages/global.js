import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";
import axios from "axios";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import corona from "../images/corona.jpg";
import NumberFormat from "react-number-format";
import RingLoader from "react-spinners/RingLoader";

const Global = () => {
  const [latest, setlatest] = useState([]);
  const [results, setResults] = useState([]);
  const [searchCountries, setSearchCountries] = useState("");
  const [loading, setloading] = useState(true);
  useEffect(() => {
    axios
      .all([
        axios.get("https://corona.lmao.ninja/v2/all"),
        axios.get("https://corona.lmao.ninja/v2/countries?sort=country"),
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
  //last update milliseconds-->date (IST)
  const date = new Date(parseInt(latest.updated));
  const lastUpdated = date.toString();

  //To filter a country
  const filterCountries = results.filter((item) => {
    return searchCountries !== ""
      ? item.country.toLowerCase().includes(searchCountries.toLowerCase())
      : item;
  });

  //To display country wise data
  const countries = filterCountries.map((data, i) => {
    return (
      <Col>
        <Card
          key={data.country}
          bg="light"
          text="dark"
          className="text-center"
          style={{ margin: "10px" }}
        >
          <Card.Img
            variant="top"
            src={data.countryInfo.flag}
            style={{ maxWidth: "300px", height: "150px" }}
          />
          <Card.Body>
            <Card.Title>{data.country}</Card.Title>
            <Card.Text>
              Cases:{" "}
              <NumberFormat
                displayType={"text"}
                thousandSeparator={true}
                thousandsGroupStyle="lakh"
                value={data.cases}
              />
            </Card.Text>
            <Card.Text>
              Active:{" "}
              <NumberFormat
                displayType={"text"}
                thousandSeparator={true}
                thousandsGroupStyle="lakh"
                value={data.active}
              />
            </Card.Text>
            <Card.Text>
              Critical:{" "}
              <NumberFormat
                displayType={"text"}
                thousandSeparator={true}
                thousandsGroupStyle="lakh"
                value={data.critical}
              />
            </Card.Text>
            <Card.Text>
              Recovered:{" "}
              <NumberFormat
                displayType={"text"}
                thousandSeparator={true}
                thousandsGroupStyle="lakh"
                value={data.recovered}
              />
            </Card.Text>
            <Card.Text>
              Deaths:{" "}
              <NumberFormat
                displayType={"text"}
                thousandSeparator={true}
                thousandsGroupStyle="lakh"
                value={data.deaths}
              />
            </Card.Text>
            <Card.Text>
              Today's cases:{" "}
              <NumberFormat
                displayType={"text"}
                thousandSeparator={true}
                thousandsGroupStyle="lakh"
                value={data.todayCases}
              />
            </Card.Text>
            <Card.Text>
              Today's death:{" "}
              <NumberFormat
                displayType={"text"}
                thousandSeparator={true}
                thousandsGroupStyle="lakh"
                value={data.todayDeaths}
              />
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    );
  });
  return (
    <div>
      <div
        className="header text-center font-weight-bold"
        style={{ fontSize: "30px" }}
      >
        <div style={{ justifyContent: "center", display: "flex" }}>
          <RingLoader size={60} color={"#123abc"} loading={loading} />
        </div>
        <img src={corona} alt="" width="150px" height="75px" />
        <br />
        COVID-19 STATS
      </div>
      <CardDeck className="deck" style={{ padding: "20px", width: "100%" }}>
        <Card
          bg="danger"
          text="white"
          className="text-center"
          style={{ margin: "10px" }}
        >
          <Card.Body>
            <Card.Title>
              <h4>Confirmed</h4>
            </Card.Title>
            <Card.Text>
              <NumberFormat
                displayType={"text"}
                thousandSeparator={true}
                thousandsGroupStyle="lakh"
                value={latest.cases}
              />
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small>Last Updated on {lastUpdated}</small>
          </Card.Footer>
        </Card>
        <Card
          bg="primary"
          text="white"
          className="text-center"
          style={{ margin: "10px" }}
        >
          <Card.Body>
            <Card.Title>
              <h4>Active</h4>
            </Card.Title>
            <Card.Text>
              <NumberFormat
                displayType={"text"}
                thousandSeparator={true}
                thousandsGroupStyle="lakh"
                value={latest.active}
              />
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small>Last updated on {lastUpdated}</small>
          </Card.Footer>
        </Card>
        <Card
          bg="success"
          text="white"
          className="text-center"
          style={{ margin: "10px" }}
        >
          <Card.Body>
            <Card.Title>
              <h4>Recovered</h4>
            </Card.Title>
            <Card.Text>
              <NumberFormat
                displayType={"text"}
                thousandSeparator={true}
                thousandsGroupStyle="lakh"
                value={latest.recovered}
              />
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small>Last updated on {lastUpdated}</small>
          </Card.Footer>
        </Card>
        <Card
          bg="secondary"
          text="white"
          className="text-center"
          style={{ margin: "10px" }}
        >
          <Card.Body>
            <Card.Title>
              <h4>Recovered</h4>
            </Card.Title>
            <Card.Text>
              <NumberFormat
                displayType={"text"}
                thousandSeparator={true}
                thousandsGroupStyle="lakh"
                value={latest.deaths}
              />
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small>Last updated on {lastUpdated}</small>
          </Card.Footer>
        </Card>
      </CardDeck>

      <div className="countries" style={{ margin: "5px", padding: "10px" }}>
        <Form>
          <Form.Group controlId="formGroupSearch">
            <Form.Control
              bg="dark"
              type="text"
              placeholder="Search for countries"
              onChange={(e) => setSearchCountries(e.target.value)}
            />
          </Form.Group>
        </Form>
        <Row xs={1} md={2} lg={5}>
          {countries}
        </Row>
      </div>
    </div>
  );
};

export default Global;
