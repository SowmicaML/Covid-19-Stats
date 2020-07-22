import React from "react";

import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import covid from "../images/covid.jpg";

function Covidsymptom() {
  return (
    <div style={{ margin: "20px" }}>
      <Tabs>
        <TabList>
          <Tab>Overview</Tab>
          <Tab>Symptoms</Tab>
          <Tab>Prevention</Tab>
        </TabList>

        <TabPanel>
          <h2>What Is COVID-19?</h2>
          <img src={covid} alt="" width="300px" height="150px" />
          <br />
          <p>
            A coronavirus is a kind of common virus that causes an infection in
            your nose, sinuses, or upper throat. Most coronaviruses aren't
            dangerous. In early 2020, after a December 2019 outbreak in China,
            the World Health Organization identified SARS-CoV-2 as a new type of
            coronavirus. The outbreak quickly spread around the world.
          </p>
          <p>
            COVID-19 is a disease caused by SARS-CoV-2 that can trigger what
            doctors call a respiratory tract infection. It can affect your upper
            respiratory tract (sinuses, SARS-CoV-2 is one of seven types of
            coronavirus, including the ones that cause severe diseases like
            Middle East respiratory syndrome (MERS) and sudden acute respiratory
            syndrome (SARS).
          </p>
          <hr />
          <h3>How It Spreads?</h3>
          <p>
            The virus that causes COVID-19 is mainly transmitted through
            droplets generated when an infected person coughs, sneezes, or
            exhales. These droplets are too heavy to hang in the air, and
            quickly fall on floors or surfaces.
          </p>
          <p>
            You can be infected by breathing in the virus if you are within
            close proximity of someone who has COVID-19, or by touching a
            contaminated surface and then your eyes, nose or mouth.
          </p>
          <p>
            Source:
            <a
              href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019"
              style={{ color: "blue" }}
            >
              who.int
            </a>
          </p>
        </TabPanel>
        <TabPanel>
          <p>
            COVID-19 affects different people in different ways. Most infected
            people will develop mild to moderate illness and recover without
            hospitalization.
          </p>

          <h4>Most common symptoms:</h4>
          <ul>
            <li>fever</li>
            <li>dry cough</li>
            <li>tiredness</li>
          </ul>
          <h4>Less common symptoms:</h4>
          <ul>
            <li>aches and pains</li>
            <li>sore throat</li>
            <li>diarrhoea</li>
            <li>conjunctivitis</li>
            <li>headache</li>
            <li>loss of taste or smell</li>
            <li>a rash on skin, or discolouration of fingers or toes</li>
          </ul>
          <h4>Serious symptoms:</h4>
          <ul>
            <li>difficulty breathing or shortness of breath</li>
            <li>chest pain or pressure</li>
            <li>loss of speech or movement</li>
          </ul>
          <p>
            Seek immediate medical attention if you have serious symptoms.
            Always call before visiting your doctor or health facility.
          </p>

          <p>
            People with mild symptoms who are otherwise healthy should manage
            their symptoms at home.
          </p>
          <p>
            On average it takes 5–6 days from when someone is infected with the
            virus for symptoms to show, however it can take up to 14 days.
          </p>
          <p>
            Source:
            <a
              href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019/question-and-answers-hub/q-a-detail/q-a-coronaviruses#:~:text=symptoms"
              style={{ color: "blue" }}
            >
              who.int
            </a>
          </p>
        </TabPanel>
        <TabPanel>
          <p>
            Protect yourself and others around you by knowing the facts and
            taking appropriate precautions. Follow advice provided by your local
            public health agency.
          </p>

          <h4>To prevent the spread of COVID-19:</h4>

          <ul>
            <li>
              Clean your hands often. Use soap and water, or an alcohol-based
              hand rub.
            </li>
            <li>
              Maintain a safe distance from anyone who is coughing or sneezing.
            </li>

            <li>Don’t touch your eyes, nose or mouth.</li>
            <li>
              Cover your nose and mouth with your bent elbow or a tissue when
              you cough or sneeze.
            </li>
            <li>Stay home if you feel unwell.</li>
            <li>
              If you have a fever, cough and difficulty breathing, seek medical
              attention. Call in advance.
            </li>
            <li>Follow the directions of your local health authority.</li>
          </ul>
          <p>
            Avoiding unneccessary visits to medical facilities allows healthcare
            systems to operate more effectively, therefore protecting you and
            others.
          </p>
          <p>
            Source:
            <a
              href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019/advice-for-public"
              style={{ color: "blue" }}
            >
              who.int
            </a>
          </p>
        </TabPanel>
      </Tabs>
    </div>
  );
}

export default Covidsymptom;
