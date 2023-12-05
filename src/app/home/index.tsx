"use client";

import HomeList from "@/app/home/HomeList";
import { FeatureListType, featureList } from "@/utils/menu";
import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { TypeAnimation } from "react-type-animation";

export default function Homepage() {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  // Check if the screen width is less than the medium breakpoint
  useEffect(() => {
    setIsMobile(window.innerWidth < 768); // You can adjust the breakpoint as needed
  }, []);

  // Create separate arrays for each column
  const column1 = featureList.slice(0, 4);
  const column2 = featureList.slice(4, 8);
  const column3 = featureList.slice(8);

  // Create separate arrays for mobile layout
  const mobileColumn1 = isMobile ? featureList.slice(0, 6) : [];
  const mobileColumn2 = isMobile ? featureList.slice(6) : [];

  return (
    <section className="home text-layout d-flex justify-content-center align-items-center">
      <Container>
        <div className="d-flex gap-3 mb-4">
          <p style={{ width: 85 }} className="d-none d-sm-block"></p>
          <TypeAnimation
            className="text-heading-4"
            sequence={[
              "Hello World!",
              1000,
              "Hello Fellas!",
              1000,
              "Hello Everyone!",
              1000,
              "Hello Guys!",
              1000,
            ]}
            speed={20}
            repeat={Infinity}
            wrapper="h1"
          />
        </div>
        <div className="d-flex gap-3 mb-4">
          <div
            style={{ width: 85 }}
            className="d-none d-sm-block text-body flex-shrink-0 text-end text-primary-green"
          >
            Greetings.
          </div>
          <div className="home-content">
            <TypeAnimation
              className="d-block text-body text-light-green"
              sequence={[
                `
                Fellow wanderers of the digital domain! I'm Daffa Kurnia Fatah
                - think of me as your trusty coding bard from the sun-kissed lands
                of Denpasar, Bali. With NextJS and ReactJS as my trusty instruments
                since 2021, I craft not only code but also wield the art of design, conjuring up
                web magic through Figma and weaving interactive spells of user
                experience and animation. Your wish is my code!
                `,
              ]}
              speed={99}
              cursor={false}
            />
          </div>
        </div>
        <div className="d-flex gap-3 mb-4">
          <div
            style={{ width: 85 }}
            className="d-none d-sm-block text-body flex-shrink-0 text-end text-primary-green"
          >
            Features.
          </div>
          <Row className="flex-grow-1">
            {/* First Row */}
            <Col md={4} xs={6}>
              {isMobile
                ? mobileColumn1.map((data: FeatureListType, key: number) => (
                    <HomeList
                      key={key}
                      number={data.number}
                      label={data.label}
                      link={data.link}
                      newTab={data.newTab}
                    />
                  ))
                : column1.map((data: FeatureListType, key: number) => (
                    <HomeList
                      key={key}
                      number={data.number}
                      label={data.label}
                      link={data.link}
                      newTab={data.newTab}
                    />
                  ))}
            </Col>
            {/* Second Row */}
            <Col md={4} xs={6}>
              {isMobile
                ? mobileColumn2.map((data: FeatureListType, key: number) => (
                    <>
                      <HomeList
                        key={key}
                        number={data.number}
                        label={data.label}
                        link={data.link}
                        newTab={data.newTab}
                      />
                    </>
                  ))
                : column2.map((data: FeatureListType, key: number) => (
                    <HomeList
                      key={key}
                      number={data.number}
                      label={data.label}
                      link={data.link}
                      newTab={data.newTab}
                    />
                  ))}
            </Col>
            <Col md={4} xs={6}>
              {isMobile
                ? null
                : column3.map((data: FeatureListType, key: number) => (
                    <HomeList
                      key={key}
                      number={data.number}
                      label={data.label}
                      link={data.link}
                      newTab={data.newTab}
                    />
                  ))}
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
}
