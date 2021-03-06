import React from "react"
import "./aboutUs.scss"
import Image from "../Image"
// import Img from "gatsby-image"
// import { StyledButton } from "../Elements/Elements"
// import { Link } from "gatsby"
import { StaticQuery, graphql } from "gatsby"

import Banner1 from "./aboutUs_banner1"
import Banner2 from "./aboutUs_banner2"



// import * as React from 'react'
// import { graphql } from 'gatsby'
// import { GatsbyImage } from "gatsby-plugin-image"

// const HomePage = ({data}) => {
//   return (
//     <div>
//       {data.allFile.edges.node.map((item, index) => {
//         return <div key={index}>
//           <GatsbyImage image={item.childImageSharp.gatsbyImageData} alt="" />
//        </div>

//        })}

//     </div>
//   )
// }

// export const query = graphql`
//   query HomePageQuery {
//       allFile(filter: { sourceInstanceName: { eq: "images" } }) {
//         edges {
//           node {
//             childImageSharp {
//               gatsbyImageData(layout: FIXED)
//             }
//           }
//         }
//      }
//   }
// `

// export default HomePage



// const AboutUs = ({data}) => (
// const AboutUs = ({ className, children }) => (
  const AboutUs = () => (
  <StaticQuery
    query={graphql`
      query {
        file(relativePath: { eq: "IMG_0622.jpg" }) {
          childImageSharp {
            fluid(quality: 90) {
              ...GatsbyImageSharpFluid_withWebp_noBase64
            }
          }
        }
      }
    `}
    
     render={data => {
       // Set ImageData.
      //  const imageData = data.file.childImageSharp.fluid
      // const imageData = data.allFile.edges.node.childImageSharp
       return (
      //   <div>
      //   {data.allFile.edges.node.map((item, index) => {
      //     return <div key={index}>
      //       <GatsbyImage image={item.childImageSharp.gatsbyImageData} alt="" />
      //    </div>
  
      //    })}
  
      // </div>
        <div className="aboutUs">
          {/* <Img Tag="section" className={className} fluid={imageData}>
           {children}
          </Img> */}
          <div className="aboutUs__banner">
                   <Banner1 className="aboutUs__banner__bgc1" />
          </div>
          <div className="wrap mx-auto my-5 ">
                  <p className="h1 font-weight-bolder">Quem somos</p>
                  <p className="inner-wrap">
                  Fundada em 2021, somos uma organiza????o sem fins lucrativos de brasileiros Engenheiros e Arquitetos, registrados e n??o registrados
                  com EGBC (Engineers & Geoscientists British Columbia) e AIBC (Architectural Institute of British Columbia) que residem em British
                  Columbia, Canad??.
                  </p>
                  <br />
                </div>
          <div className="wrap mx-auto my-5 ">
              <p className="h1 font-weight-bolder">Nossa Vis??o</p>
              <p className="inner-wrap">
              Oferecer suporte, inspira????o e informa????o para os engenheiros e arquitetos brasileiros
              que queiram (re)construir suas carreiras em British Columbia, Canada.
              </p>
              <br />
          </div>
          <div className="wrap mx-auto my-5">
                  <p className="h1 font-weight-bolder">Nossa Miss??o</p>
                  <p className="inner-wrap">
                  Unir e integrar os arquitetos e engenheiros brasileiros ?? ind??stria canadense em British
                  Columbia.
                  </p>
                  {/* <div>
                <div className="container pt-3 aboutUs__icons">
                 <div className="row justify-content-lg-between inner-wrap justify-content-md-center justify-content-center">
                   <div className="col-lg-2 col-md-4 col-sm-6">
                     <div className="aboutUs__icon">
                       <Img filename={"aboutUs_icon1.png"} alt="icon1" />
                     </div>
                     <p className="h4">Embrace</p>
                    </div>
                   <div className="col-lg-2 col-md-4 col-sm-6">
                    <div className="aboutUs__icon">
                      <Img filename={"aboutUs_icon2.png"} alt="icon2" />
                    </div>
                    <p className="h4">Learning</p>
                   </div>
                   <div className="col-lg-2 col-md-4 col-sm-6">
                     <div className="aboutUs__icon">
                       <Img filename={"aboutUs_icon3.png"} alt="icon3" />
                     </div>
                     <p className="h4">Learning</p>
                   </div>
                   <div className="col-lg-2 col-md-4 col-sm-6">
                     <div className="aboutUs__icon">
                       <Img filename={"aboutUs_icon4.png"} alt="icon4" />
                     </div>
                     <p className="h4">Relationships</p>
                   </div>
                   <div className="col-lg-2 col-md-4 col-sm-6">
                     <div className="aboutUs__icon">
                       <Img filename={"aboutUs_icon5.png"} alt="icon5" />
                     </div>
                     <p className="h4">Together</p>
                   </div>
                 </div>
                </div>
              </div> */}
                </div>
          <div className="aboutUs__banner">
            <Banner2 className="aboutUs__banner__bgc2">
              <div className="wrap mx-auto">
                <p className="h1 font-weight-bolder">
                Nossos Valores
                </p>
                <br />
                <div className="aboutUs__banner__bgc2__bgc2text">
                <p className="h1 font-weight">
                &#9679; Uni??o: N??o somos concorrentes, torcemos pelo seu sucesso.
                </p>
                <p className="h1 font-weight">
                &#9679; Conex??o: Ningu??m est?? sozinho - Queremos ajud??-lo a manter o otimismo aut??ntico.
                </p>
                <p className="h1 font-weight">
                &#9679; Valoriza????o: Fazemos a diferen??a com nosso profissionalismo e alta qualidade.
                </p>
                <p className="h1 font-weight">
                &#9679; Entusiasmo: Paix??o por fazer o melhor.
                </p>
                </div>
                {/* <div className="row wrap justify-content-around mt-5">
            <div className="col-md-3 col-sm-6 aboutUs__banner__item">
              <p className="display-4 font-weight-bolder">Social
              </p>
              <p className="h3">Social</p>
            </div>
            <div className="col-md-3 col-sm-6 aboutUs__banner__item">
              <p className="display-4 font-weight-bolder">
              Business
              </p>
              <p className="h3">Business</p>
            </div>
            <div className="col-md-3 col-sm-6 aboutUs__banner__item">
              <p className="display-4 font-weight-bolder">
              Founders
              </p>
              <p className="h3">Founders</p>
            </div>
            <div className="col-md-3 col-sm-6 aboutUs__banner__item">
              <p className="display-4 font-weight-bolder">
              $ 
              </p>
              <p className="h3">total funds collected</p>
            </div>
          </div> */}
              </div>
            </Banner2>
          </div>

          <div className="wrap mx-auto mt-5 aboutUs__members">
          <p className="h1 font-weight-bolder">Nosso Time</p>
          <p className="inner-wrap">
          Formado por engenheiros e arquitetos brasileiros com interesse em colaborar com orienta????o sobre os processos de EGBC (Engineers
& Geocientists British Columbia) e AIBC (Architectural Institute of British Columbia).
          </p>
          <div className="container mt-5 inner-wrap">
           <div className="row justify-content-around">
                 <div className="col-md-3 col-sm-6">
                    {/* <Img Tag="section" className={className} fluid={imageData}>
                    {children}
                    </Img> */}
                    <Image filename={"01.png"} alt="lillen" />
                    <div className="aboutUs__label">
                     {/* <span className="aboutUs__label__name">Name</span> */}
                     <span className="aboutUs__label__name">Lillen Vater</span> |{" "}
                     {/* <span className="aboutUs__label__name">{name}</span> |{" "} */}
                     {/* {position} */}
                     B. Eng. Ambiental
                   </div>
                  </div>
                 <div className="col-md-3 col-sm-6">
                    {/* <Img Tag="section" className={className} fluid={imageData}>
                    {children}
                    </Img> */}
                    <Image filename={"02.png"} alt="rubio" />
                    <div className="aboutUs__label">
                     {/* <span className="aboutUs__label__name">Name</span> */}
                     <span className="aboutUs__label__name">Luis Rubio</span> |{" "}
                     {/* <span className="aboutUs__label__name">{name}</span> |{" "} */}
                     {/* {position} */}
                     B. Eng. Mec??nico
                   </div>
                  </div>
                 <div className="col-md-3 col-sm-6">
                    {/* <Img Tag="section" className={className} fluid={imageData}>
                    {children}
                    </Img> */}
                    <Image filename={"03.jpg"} alt="thalita" />
                    <div className="aboutUs__label">
                     {/* <span className="aboutUs__label__name">Name</span> */}
                     <span className="aboutUs__label__name">Thalita Sympovsky</span> |{" "}
                     {/* <span className="aboutUs__label__name">{name}</span> |{" "} */}
                     {/* {position} */}
                     P. Eng. de Processo S??nior
                   </div>
                  </div>
                  <div className="col-md-3 col-sm-6">
                    {/* <Img Tag="section" className={className} fluid={imageData}>
                    {children}
                    </Img> */}
                    <Image filename={"04.png"} alt="fabiano" />
                    <div className="aboutUs__label">
                     {/* <span className="aboutUs__label__name">Name</span> */}
                     <span className="aboutUs__label__name">Fabiano Falbo</span> |{" "}
                     {/* <span className="aboutUs__label__name">{name}</span> |{" "} */}
                     {/* {position} */}
                     B. Eng. Civil
                   </div>
                  </div>
                  <div className="col-md-3 col-sm-6">
                    {/* <Img Tag="section" className={className} fluid={imageData}>
                    {children}
                    </Img> */}
                    <Image filename={"05.jpg"} alt="katiussa" />
                    <div className="aboutUs__label">
                     {/* <span className="aboutUs__label__name">Name</span> */}
                     <span className="aboutUs__label__name">Katiussa Sulzbacher</span> |{" "}
                     {/* <span className="aboutUs__label__name">{name}</span> |{" "} */}
                     {/* {position} */}
                     B. Eng. Civil
                   </div>
                  </div>
                  <div className="col-md-3 col-sm-6">
                    {/* <Img Tag="section" className={className} fluid={imageData}>
                    {children}
                    </Img> */}
                    <Image filename={"06.png"} alt="helena" />
                    <div className="aboutUs__label">
                     {/* <span className="aboutUs__label__name">Name</span> */}
                     <span className="aboutUs__label__name">Helena Araujo</span> |{" "}
                     {/* <span className="aboutUs__label__name">{name}</span> |{" "} */}
                     {/* {position} */}
                     B. Arq.
                   </div>
                  </div>
                  <div className="col-md-3 col-sm-6">
                    {/* <Img Tag="section" className={className} fluid={imageData}>
                    {children}
                    </Img> */}
                    <Image filename={"07.png"} alt="elen" />
                    <div className="aboutUs__label">
                     {/* <span className="aboutUs__label__name">Name</span> */}
                     <span className="aboutUs__label__name">Elen Ferreira</span> |{" "}
                     {/* <span className="aboutUs__label__name">{name}</span> |{" "} */}
                     {/* {position} */}
                      Eng. de Tr??fego Tecnol. / Software Developer
                   </div>
                  </div>
                  {/* <div className="col-md-3 col-sm-6"> */}
                    {/* <Img Tag="section" className={className} fluid={imageData}>
                    {children}
                    </Img> */}
                    {/* <Image filename={"08.jpg"} alt="alexandra" />
                    <div className="aboutUs__label"> */}
                     {/* <span className="aboutUs__label__name">Name</span> */}
                     {/* <span className="aboutUs__label__name">Alexandra Rhod</span> |{" "} */}
                     {/* <span className="aboutUs__label__name">{name}</span> |{" "} */}
                     {/* {position} */}
                     {/* Engenheira Civil
                   </div>
                  </div> */}
            </div>
          </div>
          </div>

       {/* <div className="wrap mx-auto mt-5 aboutUs__members">
         <p className="h1 font-weight-bolder">Our Team</p>
         <p className="inner-wrap">
           We bring a wealth of experience from social enterprise, start-ups,
           organizations, and non-profit sectors. Meet the team who set our
           global direction, goals and strategies.
         </p>
         <div className="container mt-5 inner-wrap">
           <div className="row justify-content-around">
             {/* {teamMembers.map(({ node }, index) => {
               const { image, name, position } = node */}
               {/* return (
                 <div className="col-md-3 col-sm-6">
                 <div className="col-md-3 col-sm-6" key={index}>
                   <Img
                     // fluid={image.fluid}
                     loading="auto"
                     alt="team1"
                     className="aboutUs__image"
                   />

                   <div className="aboutUs__label">
                     <span className="aboutUs__label__name">Name</span>
                     <span className="aboutUs__label__name">{name}</span> |{" "}
                     {position}
                   </div>
                 </div>
               ) */}
             {/* })} */}


             {/* {teamMembers.map(({ node }, index) => {
               const { image, name, position } = node
               return (
                 <div className="col-md-3 col-sm-6" key={index}>
                   <Img
                     fluid={image.fluid}
                     loading="auto"
                     alt="team1"
                     className="aboutUs__image"
                   />

                   <div className="aboutUs__label">
                     <span className="aboutUs__label__name">{name}</span> |{" "}
                     {position}
                   </div>
                 </div>
               )
             })} */}
           {/* </div>
         </div>
       </div> */} 


        </div>
       )
     }}
   />
)



export default AboutUs
