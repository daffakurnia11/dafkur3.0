import React from "react";
import Icon from "../Icon";
import { ExperienceDataType, workData } from "@/utils/experiences";

export default function WorkExp() {
  return (
    <>
      <h1 className="text-heading-4 text-light-green text-center">
        Work Experiences
      </h1>
      <div className="position-relative experience-content mt-2 pb-3 pt-2">
        <div className="vertical-line position-absolute translate-middle-x"></div>
        {workData.map((data: ExperienceDataType, key: number) => (
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
        <div className="experience-arrow d-flex align-items-center gap-3 gap-sm-0 mt-3 flex-row flex-sm-column">
          <div className="arrow-down-line d-flex justify-content-center align-items-center z-2 position-relative">
            <Icon icon="arrow-down-double" size={24} />
          </div>
          <h5 className="text-heading-5 text-center">See Others</h5>
        </div>
      </div>
    </>
  );
}
