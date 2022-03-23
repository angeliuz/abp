import React from "react";
import InputBox from "../components/InputBox";
import ModalBook from "../components/ModalBook";
import Check from "../components/Check";

import "./page_014.css";

function Page014(props) {

  const pagina = "014";
  var indexInput = 0;
  const etapa = "2"
  const background = "bgc-bulma";
  const color = "color-bulma";
  const borderColor = "border-color-bulma"
  const bgc_cajas = "bgc-draco";


  return (

    <div className="wrapper bgc-light">
      <div className="d-flex flex-column align-items-center pbp-20">
        <div className="page bgc-white overflow-hidden position-relative" id={"page_" + pagina}>
          <div className={"cabecera-v1 hp-80 " + background}>

          </div>


          <div className="ptp-30 container-titulo-global mbp-20">
            <div className={"f-Ubuntu-B fsp-20 psp-0 text-start lhp-20 " + color}>¿Qué sé sobre los desechos?</div>
            <div className="d-flex">
              {/* <img className="hp-20 align-center mt-3 me-2 mb-2" src="images/page_007/ig.svg" alt=""  /> */}
              <div className={"f-ccdigitaldelivery-bold fsp-35 " + color}>2</div>
              <div className="f-Ubuntu-R fsp-16 ptp-18 psp-10 text-start">
                Marco con un <img src="images/page_014/img_001.svg" className="mbp-10" alt="" /> lo que sé. Luego, completo el juego en la revista.
              </div>
              {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image="images/page_007/img_002.jpg" clasesImagen="cambio hp-40 mtp-10" className="p-0 px-1" /> */}
              {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image="images/page_007/img_001.png" className="p-0 px-1" /> */}
              {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image="images/page_007/img_001.png" className="p-0 px-1" /> */}
              <ModalBook id={"p" + pagina + "_book" + (indexInput += 1)} colorUnidad={background} pagina={"63"} image="images/page_014/revista.svg" clasesImagen="hp-40 text-center mtp-10 msp-5" className="p-0 px-0" />
            </div>
          </div>

          <div className="d-flex w-100 psp-60 pep-60">
            <div className="row w-100">
              <div className="col-md-4">
                <div className="d-flex flex-column pbp-30">
                  <div className="psp-20 pep-20 ptp-10 pbp-20 f-Ubuntu-R fsp-14 w-100 position-relative bgc-draco rounded-p-10 min-hp-100 d-flex center-center">
                    Toda la basura se tira en el mismo contenedor.
                    <div className="position-absolute top-100 start-50 translate-middle msp-0 mtp-0 wp-25 hp-25">
                      <Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check>
                    </div>
                  </div>
                </div>
                <div className="d-flex flex-column pbp-30">
                  <div className="psp-20 pep-20 ptp-10 pbp-20 f-Ubuntu-R fsp-14 w-100 position-relative bgc-draco rounded-p-10 min-hp-100 d-flex center-center">
                    Sé qué es una ecobotella.
                    <div className="position-absolute top-100 start-50 translate-middle msp-0 mtp-0 wp-25 hp-25">
                      <Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check>
                    </div>
                  </div>
                </div>
                <div className="d-flex flex-column pbp-30">
                  <div className="psp-20 pep-20 ptp-10 pbp-20 f-Ubuntu-R fsp-14 w-100 position-relative bgc-draco rounded-p-10 min-hp-100 d-flex center-center">
                    Sé cómo darle una nueva utilidad a un objeto sin desecharlo.
                    <div className="position-absolute top-100 start-50 translate-middle msp-0 mtp-0 wp-25 hp-25">
                      <Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4 d-flex center-center">
                <img src="images/page_014/img_003.jpg" className="w-100" alt="" />
              </div>
              <div className="col-md-4">
                <div className="d-flex flex-column pbp-30">
                  <div className="psp-20 pep-20 ptp-10 pbp-20 f-Ubuntu-R fsp-14 w-100 position-relative bgc-draco rounded-p-10 min-hp-100 d-flex center-center">
                    Identifico cuáles son los materiales que se pueden reciclar.
                    <div className="position-absolute top-100 start-50 translate-middle msp-0 mtp-0 wp-25 hp-25">
                      <Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check>
                    </div>
                  </div>
                </div>
                <div className="d-flex flex-column pbp-30">
                  <div className="psp-20 pep-20 ptp-10 pbp-20 f-Ubuntu-R fsp-14 w-100 position-relative bgc-draco rounded-p-10 min-hp-100 d-flex center-center">
                    Sé qué es y para qué sirve una compostera.
                    <div className="position-absolute top-100 start-50 translate-middle msp-0 mtp-0 wp-25 hp-25">
                      <Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check>
                    </div>
                  </div>
                </div>
                <div className="d-flex flex-column pbp-30">
                  <div className="psp-20 pep-20 ptp-10 pbp-20 f-Ubuntu-R fsp-14 w-100 position-relative bgc-draco rounded-p-10 min-hp-100 d-flex center-center">
                    Sé qué es un punto limpio.
                    <div className="position-absolute top-100 start-50 translate-middle msp-0 mtp-0 wp-25 hp-25">
                      <Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>

          <div className="ptp-30 container-titulo-global mbp-20">
            {/* <div className={"f-Ubuntu-B fsp-20 psp-0 text-start lhp-20 "+color}>¿Qué sé sobre los desechos?</div> */}
            <div className="d-flex">
              <img className="hp-20 align-center mt-3 me-2 mb-2" src="images/page_014/img_004.svg" alt="" />
              <div className={"f-ccdigitaldelivery-bold fsp-35 " + color}>3</div>
              <div className="f-Ubuntu-R fsp-16 ptp-18 psp-10 text-start">
                Conversamos sobre lo que nos gustaría saber sobre los desechos. Anoto 3 ideas.
              </div>
              {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image="images/page_007/img_002.jpg" clasesImagen="cambio hp-40 mtp-10" className="p-0 px-1" /> */}
              {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image="images/page_007/img_001.png" className="p-0 px-1" /> */}
              {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image="images/page_007/img_001.png" className="p-0 px-1" /> */}
              {/* <ModalBook id={ "p" + pagina + "_book"+ (indexInput+=1) } image="images/page_014/revista.svg" clasesImagen="hp-40 text-center mtp-10 msp-5" className="p-0 px-0" /> */}
            </div>
          </div>

          <div className="d-flex w-100 psp-60 pep-60 mbp-70">
            <div className="row w-100">
              <div className="col-md-4 d-flex center-center pbp-20">
                <div className="d-flex flex-column pbp-30 w-100 bgc-woody p-2 rounded-p-20 position-relative">
                  <div className="position-absolute top-0 start-50 translate-middle msp-0 mtp-5"><img src="images/page_014/img_005.png" className="wp-150 " alt="" /></div>
                  <div className="fsp-15 lh-sm text-start bgc-white psp-10 pep-10 ptp-10 rounded-p-20">
                    <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-300" />
                  </div>
                </div>
              </div>
              <div className="col-md-4 d-flex center-center pbp-20">
                <div className="d-flex flex-column pbp-30 w-100 bgc-milk p-2 rounded-p-20 position-relative">
                  <div className="position-absolute top-0 start-50 translate-middle msp-0 mtp-5"><img src="images/page_014/img_005.png" className="wp-150 " alt="" /></div>
                  <div className="fsp-15 lh-sm text-start bgc-white psp-10 pep-10 ptp-10 rounded-p-20">
                    <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-300" />
                  </div>
                </div>
              </div>
              <div className="col-md-4 d-flex center-center pbp-20">
                <div className="d-flex flex-column pbp-30 w-100 bgc-yanfei p-2 rounded-p-20 position-relative">
                  <div className="position-absolute top-0 start-50 translate-middle msp-0 mtp-5"><img src="images/page_014/img_005.png" className="wp-150 " alt="" /></div>
                  <div className="fsp-15 lh-sm text-start bgc-white psp-10 pep-10 ptp-10 rounded-p-20">
                    <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-300" />
                  </div>
                </div>
              </div>
            </div>
          </div>




          {/* BEGIN PIE DE PAGINA */}
          <div className="d-flex hp-90 caja-flotante p-0 m-0 position-absolute justify-content-end align-items-end zindex-2" style={{ bottom: 70, right: 0 }}>
            <div className="f-Ubuntu-M fsp-10 position-absolute mbp-60" style={{ transform: `rotate(270deg)`, color: "dark" }}>
              ABP &copy; SM
            </div>
            <div className="bgc-boros wp-50 hp-30 f-Ubuntu-M fsp-20 psp-5">{props.numeroPagina(pagina)}</div>
          </div>
          <div className="row position-absolute caja-flotante2 p-0 m-0 align-items-end" style={{ bottom: 0 }}>

            <div className="col-1 position-relative col-sm-2 p-0 m-0">
              <img src="images/rotulo_motivacion.svg" className="oculto" alt="" />
              <div className="w-100 hp-15 bgc-yamcha rounded-caja-start"></div>
              <div className="w-100 hp-25 bgc-goten"></div>
            </div>
            <div className="col-7 position-relative col-sm-2 p-0 m-0">
              <img src="images/rotulo_planificacion.svg" className="visible rotulo-etapa position-absolute top-0 start-0" alt="" />
              <div className="w-100 hp-15 bgc-tshinhan rounded-caja"></div>
              <div className="w-100 hp-25 bgc-bulma"></div>
            </div>
            <div className="col-1 position-relative col-sm-2 p-0 m-0">
              <img src="images/rotulo_investigacion.svg" className="oculto" alt="" />
              <div className="w-100 hp-15 bgc-milk rounded-caja"></div>
              <div className="w-100 hp-25 bgc-android18"></div>
            </div>
            <div className="col-1 position-relative col-sm-2 p-0 m-0">
              <img src="images/rotulo_experimentacion.svg" className="oculto" alt="" />
              <div className="w-100 hp-15 bgc-freezer rounded-caja"></div>
              <div className="w-100 hp-25 bgc-pidgey"></div>
            </div>
            <div className="col-1 position-relative col-sm-2 p-0 m-0">
              <img src="images/rotulo_creacion.svg" className="oculto" alt="" />
              <div className="w-100 hp-15 bgc-ash rounded-caja"></div>
              <div className="w-100 hp-25 bgc-saitama"></div>
            </div>
            <div className="col-1 position-relative col-sm-2 p-0 m-0">
              <img src="images/rotulo_difusion.svg" className="oculto" alt="" />
              <div className="w-100 hp-15 bgc-leono rounded-caja-end"></div>
              <div className="w-100 hp-25 bgc-pikachu"></div>
            </div>
          </div>
          {/* END PIE DE PAGINA */}

        </div>
      </div>
    </div>

  );
}

export default Page014;
