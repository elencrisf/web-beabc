import React from "react"
import "./successStories.scss"
import Youtube from "./Youtube"
import { Link } from "gatsby"
import { StyledButton } from "../../Elements/Elements"

const SuccessStories = () => {
  return (
    <div>
    <Youtube />
        <div className="home__successStories__description p-5">
            <h1 className="font-weight-bold">
              Sobre BEABC
            </h1>
            <p>         
            A ideia de formar uma organização e criar BEABC partiu no momento em que eu participava de
            um programa subsidiado pelo governo da Columbia Britânica que oferece suporte aos
            profissionais imigrantes e ajuda a criar networking. Comentei com a minha case manager sobre
            um grupo de WhatsApp onde havia na época 110 profissionais brasileiros de engenharia e
            arquitetura. Então, ela sugeriu que tivéssemos uma associação porque assim seria mais fácil
            oferecer ajuda e informação sobre a nossa indústria.
            </p>
            <br></br>
            <p> 
            Reunimos os que gostaram da sugestão e
            formamos um time de trabalho com ideias similares e com um coração disposto a ajudar.
            Nos últimos 6 meses, trabalhamos juntos para desenvolver uma boa fundação e criarmos a
            BEABC com o propósito de representar, fortalecer e integrar os profissionais brasileiros de
            engenharia e arquitetura na Columbia Britânica, CA.
            </p>
            <br></br>
            <p>
            Lillen Vater, Co founder, Agosto 2021
            </p>
            <h1>Propósito BEABC</h1>
            <p>Os propósitos da Sociedade são:
            Representar engenheiros e arquitetos brasileiros na Colúmbia Britânica e aumentar suas
            contribuições para o sucesso da profissão de engenheiro na Colúmbia Britânica, Canadá.
            Valorizar, fortalecer e integrar os profissionais brasileiros de engenharia e arquitetura na
            Columbia Britânica.
            <br></br>
            Ajudar a estabelecer contatos com outras organizações técnicas e profissionais, como
            Engenheiros e Geocientistas da Colúmbia Britânica (EGBC) e Instituto de Arquitetura da
            Colúmbia Britânica (AIBC) fornecer outros serviços para seus membros, como:
            <br></br>
            i) Criar meios de articulação entre os membros para se conhecerem, partilharem as suas
            informações e ideias profissionais e discutirem assuntos técnicos de interesse mútuo;
            <br></br>
            ii) Coordenar apresentações técnicas relacionadas com a engenharia e arquitetura, e outras
            palestras de interesse geral para os membros e o público em geral;
            <br></br>
            iii) Coordenar eventos sociais por ano para criar um ambiente para os membros e suas famílias
            se socializarem e desfrutarem dos seus momentos de lazer juntos;
            <br></br>
            iv) Auxiliar os engenheiros e arquitetos que são novos na Columbia Britânica na adaptação ao
            seu novo ambiente, fornecendo-lhes as informações necessárias sobre as leis canadenses e
            provinciais relativas à profissão de engenheiro e arquiteto, apresentando-os à cultura
            canadense no local de trabalho e auxiliando-os na procura de emprego; e
            <br></br>
            v) Prestar assistência à comunidade brasileira e aos estudantes brasileiros que frequentam
            programas de engenharia e arquitetura em universidades da Colúmbia Britânica para encontrar
            seus caminhos para sua futura vida profissional.
            <br></br>
            A BEABC é contrária a quaisquer formas de preconceitos ou discriminações, não admitindo
            controvérsias de raça, natureza religiosa, cor, gênero, ou político-partidárias, em suas
            atividades, dependências ou em seu quadro social.
            </p>          
          <div className="my-3">
            <Link to="aboutUs">
              <StyledButton outline={true}>
                Saiba mais sobre nós
              </StyledButton>
            </Link>
          </div>
        </div>
      </div>
  )
}

export default SuccessStories