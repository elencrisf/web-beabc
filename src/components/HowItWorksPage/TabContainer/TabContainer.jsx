import React, { useState } from "react"
import Tabs from "react-bootstrap/Tabs"
import Tab from "react-bootstrap/Tab"
import CardItems from "./CardItems/CardItems"
import Row1 from "./Row1/Row1"
import Row2 from "./Row2/Row2"
// import { StyledButton } from "../../Elements/Elements"
import config from "../../../../website/howItWorks"

import "./tabContainer.scss"

export const TabContainer = () => {
  const [key, setKey] = useState("enterpreneurs")

  return (
    <div className="how-tabs text-custom-text text-center text-display">
      <h1 className="py-5 font-weight-bold how-tabs__title">{config.title}</h1>
      <div>
        <Tabs
          id="controlled"
          activeKey={key}
          onSelect={k => setKey(k)}
          className="justify-content-center"
          transition={false}
        >
          <Tab
            eventKey="enterpreneurs"
            title="Engenharia"
            className={`bg-custom-lightGreen`}
          >
            <div className="how-tabs__card-box wrap">
              <div className="how-tabs__card-box__discription py-5 inner-wrap">
                <h2 className="text-custom-text text-center font-weight-bold">
                  {config.engineerTabTitle}
                </h2>
                <p className="how-tabs__card-box__discription__text pt-3 ">
                  {config.engineerTabDescription}
                </p>
              </div>
              <CardItems array={config.engineerCardData} />
            </div>
            <div className="bg-white mb-5 how-tabs__row-container">
              <div className="wrap">
                <h2 className="text-custom-text text-center font-weight-bold pt-5">
                  {config.engineerSubtitle}
                </h2>
                <p className="how-tabs__card-box__discription__text pb-5"><a href={config.engineerLink}>{config.engineerLink}
                  </a></p>
                <Row1 object={config.engineerRow1Data} />
                {/* <Row2 object={config.enterpreneurRow2Data} /> */}
                {/* <div className="text-center how-tabs__footer">
                  <span className="text-custom-text text-center font-weight-bold mr-5 how-tabs__footer__button-text">
                    {config.enterpreneurButtonText}
                  </span>
                  <StyledButton>Associe-se</StyledButton>
                </div> */}
              </div>
            </div>
          </Tab>

          <Tab
            eventKey="investors"
            title="Arquitetura"
            className="bg-custom-lightYellow"
          >
            <div className="how-tabs__card-box wrap">
              <div className="how-tabs__card-box__discription py-5 inner-wrap">
                <h2 className="text-custom-text text-center font-weight-bold">
                  {config.architectTabTitle}
                </h2>
                <p className="how-tabs__card-box__discription__text pt-3 ">
                  {config.architectTabDescription}
                </p>
              </div>
              <CardItems array={config.architectCardData} green={true} />
            </div>
            <div className="bg-white mb-5">
              <div className="wrap">
                <h2 className="text-custom-text text-center font-weight-bold pt-5">
                  {config.architectSubtitle}
                </h2>
                <p className="how-tabs__card-box__discription__text pb-5"><a href={config.architectLink}>{config.architectLink}
                  </a></p>
                <Row1 object={config.architectRow1Data} />
                <Row2 object={config.architectRow2Data} />
                {/* <Row2 object={config.investorRow2Data} /> */}
                {/* <div className="text-center how-tabs__footer inner-wrap">
                  <span className="text-custom-text text-center font-weight-bold mr-5 how-tabs__footer__button-text">
                    {config.architectButtonText}
                  </span>
                  <StyledButton>Associe-se</StyledButton>
                </div> */}
              </div>
            </div>
          </Tab>
        </Tabs>
      </div>
    </div>
  )
}

export default TabContainer
