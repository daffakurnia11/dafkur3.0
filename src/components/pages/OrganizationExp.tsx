import React from "react";
import Icon from "../Icon";
import { ExperienceDataType, organizationData } from "@/utils/experiences";
import { Container } from "react-bootstrap";

export default function OrganizationExp() {
  return (
    <div className="mt-sm-0 pt-5 experience-section d-flex justify-content-center align-items-center">
      <Container>
        <h1 className="text-heading-4 text-light-green text-center">
          Organizations
        </h1>
        <div className="position-relative experience-content mx-auto mt-2 pb-3 pt-2">
          <div className="vertical-line position-absolute translate-middle-x h-100"></div>
          {organizationData.map((data: ExperienceDataType, key: number) => (
            <div
              key={key}
              className={`d-flex flex-column flex-sm-row gap-2 gap-sm-4 align-items-sm-center ps-3 ps-sm-0 position-relative ${
                key !== 0 && "mt-4 mt-sm-3"
              }`}
            >
              <div className="dots-line position-absolute"></div>
              <small className="flex-sm-fill w-100 text-secondary-green d-block text-start text-sm-end">
                {data.start} - {data.end ?? "Present"}
              </small>
              <div className="flex-sm-fill w-100">
                <p className="text-light-green">{data.position}</p>
                <small className="text-secondary-green">
                  {data.company}
                  <br />
                  {data.place}
                </small>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}
