import React from "react";
import InputBox from "../components/InputBox";
import ModalBook from "../components/ModalBook";
import Sopa1 from "../components/Sopa1";

import "./page_026.css";

function Page026(props) {

  const pagina = "026";
  var indexInput = 0;
  const etapa = "3"
  const background = "bgc-android18";
  const color = "color-android18";
  const colorSesion = "color-primary";
  const borderColor = "border-color-android18"
  const bgc_cajas = "bgc-goku";


  return (

    <div className="wrapper bgc-light">
      <div className="d-flex flex-column align-items-center pbp-20">
        <div className="page bgc-white overflow-hidden position-relative" id={"page_" + pagina}>
          <div className="cabecera-v1 hp-80 bgc-android18">
          </div>

          <div className="ptp-30 container-titulo-global mbp-10">
            <div className={"f-Ubuntu-B fsp-20 psp-0 text-start lhp-20 " + color}>¿Qué podemos reciclar?</div>
            <div className="d-flex">
              {/* <img className="hp-20 align-center mt-3 me-2 mb-2" src={"images/page_"+pagina+"/img_001.svg"} alt=""  /> */}
              <div className={"f-ccdigitaldelivery-bold fsp-35 " + color}>3</div>
              <div className="f-Ubuntu-R fsp-16 ptp-18 psp-10 pep-10 text-start">
                Leo la historieta de la revista y completamos.
              </div>
              {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image="images/generales/play.svg" clasesImagen="cambio hp-40 mtp-10" className="p-0 px-1" /> */}
              {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image="images/page_007/img_001.png" className="p-0 px-1" /> */}
              {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image="images/page_007/img_001.png" className="p-0 px-1" /> */}
              <ModalBook id={"p" + pagina + "_book" + (indexInput += 1)} colorUnidad={background} pagina={"69"} image={"images/page_" + pagina + "/img_002.svg"} clasesImagen="hp-40 text-center mtp-10 " className="p-0 px-0" />
            </div>
          </div>


          <div className="d-flex msp-60 mep-60 mbp-0 mtp-0">

            <div className="row m-0 psp-10 pep-10 ptp-10 pbp-0 bgc-makoto border-style-solid border-1 border-color-dark rounded-p-20 w-100">

              <div className="col-md-12 col-lg-12 position-relative">
                <div className="position-absolute top-0 start-100 translate-middle msp--60 mtp--60 visible-768"><img src={"images/page_" + pagina + "/img_001.png"} className="wp-100 " alt="" /></div>
                <div className="d-flex flex-column mbp-0 mtp-0 w-100">
                  <div className="p-2 min-hp-80 w-100 ">
                    <div className="f-Ubuntu-L fsp-15 msp-0 mep-10 text-start">

                      <span>Un punto limpio es</span>
                    </div>
                    <InputBox id={"p" + pagina + "_book" + (indexInput += 1)} pagina={"75"} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-110" />
                  </div>

                </div>

              </div>

            </div>
          </div>

          <div className="ptp-30 container-titulo-global mbp-10">
            {/* <div className={"f-Ubuntu-B fsp-20 psp-0 text-start lhp-20 "+color}>¿Qué podemos reciclar?</div> */}
            <div className="d-flex">
              {/* <img className="hp-20 align-center mt-3 me-2 mb-2" src={"images/page_"+pagina+"/img_001.svg"} alt=""  /> */}
              <div className={"f-ccdigitaldelivery-bold fsp-35 " + color}>4</div>
              <div className="f-Ubuntu-R fsp-16 ptp-18 psp-10 pep-10 text-start">
                Busco en la sopa de letras los 5 desechos que puedo dejar en el punto limpio.
              </div>
              {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image="images/generales/play.svg" clasesImagen="cambio hp-40 mtp-10" className="p-0 px-1" /> */}
              {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image="images/page_007/img_001.png" className="p-0 px-1" /> */}
              {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image="images/page_007/img_001.png" className="p-0 px-1" /> */}
              {/* <ModalBook id={ "p" + pagina + "_book"+ (indexInput+=1) } image={"images/page_"+pagina+"/img_002.svg"} clasesImagen="hp-40 text-center mtp-10 " className="p-0 px-0" /> */}
            </div>
          </div>


          <div className="d-flex position-relative">

            <div className="d-flex w-100 mtp-0 mbp-0 psp-0 pep-0 ptp-0 pbp-0 position-absolute zindex-10">
              <div className="row m-0 psp-10 pep-10 ptp-10 pbp-0 w-100">
                <div className="col-12 p-0 m-0 position-relative d-flex center-center">

                  <Sopa1
                    id={"sopa_" + indexInput + "_" + pagina}
                    totalCajas="100"
                    classNameCaja="wp-30 hp-30 d-flex center-center border-style-solid border-color-android18 border-1"
                    classNameContenedor="d-flex flex-wrap wp-302 border-style-solid border-color-android18 border-1"
                  />


                </div>
              </div>
            </div>

            <div className="d-flex w-100 justify-content-center">

              <div className="d-flex msp-60 mep-60 mbp-0 mtp-0">

                <div className="row m-0 psp-10 pep-10 ptp-10 pbp-0 w-100">

                  <div className="col-md-12 col-lg-12 position-relative m-0 p-0">

                    <img src={"images/page_" + pagina + "/sopa2.svg"} className="w-100 " alt="" />

                  </div>

                </div>
              </div>


            </div>

          </div>


          <div className="ptp-30 container-titulo-global mbp-10">
            {/* <div className={"f-Ubuntu-B fsp-20 psp-0 text-start lhp-20 "+color}>¿Qué podemos reciclar?</div> */}
            <div className="d-flex">
              {/* <img className="hp-20 align-center mt-3 me-2 mb-2" src={"images/page_"+pagina+"/img_001.svg"} alt=""  /> */}
              <div className={"f-ccdigitaldelivery-bold fsp-35 " + color}>5</div>
              <div className="f-Ubuntu-R fsp-16 ptp-18 psp-10 pep-10 text-start">
                Completo el crucigrama en la revista.
              </div>
              {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image="images/generales/play.svg" clasesImagen="cambio hp-40 mtp-10" className="p-0 px-1" /> */}
              {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image="images/page_007/img_001.png" className="p-0 px-1" /> */}
              {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image="images/page_007/img_001.png" className="p-0 px-1" /> */}
              <ModalBook id={"p" + pagina + "_book" + (indexInput += 1)} colorUnidad={background} pagina={"75"} image={"images/page_" + pagina + "/img_004.svg"} clasesImagen="hp-40 text-center mtp-10 " className="p-0 px-0" />
            </div>
          </div>


          <div className="d-flex w-100 mtp-50 psp-60 pep-60 ptp-20 mbp-0 bgc-ermac border-top-style-solid border-color-android18 border-2 pbp-150">
            <div className="row w-100 p-0 m-0">
              <div className="col-12 position-relative">
                <div className="position-absolute top-0 start-100 translate-middle msp--10 mtp--52 visible-768"><img src={"images/page_" + pagina + "/img_005.png"} className="wp-80 " alt="" /></div>
                <div className="f-pixilate-bold fsp-18 lh-sm text-start mbp-5">¿Cómo voy?</div>
                <div className="d-flex flex-column mbp-20 mtp-10 w-100">
                  <div className="p-2 min-hp-80 w-100 border-style-solid border-2 rounded-p-10 border-color-white bgc-white">
                    <div className="f-Ubuntu-L fsp-15 msp-0 mep-10 text-start">
                      <img src={"images/generales/flecha_e" + etapa + ".svg"} className="mep-5 mtp-3 wp-15" alt="" />
                      <span>¿Qué he aprendido hoy nuevo e interesante?</span>
                    </div>
                    <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-20" />
                    <div className="f-Ubuntu-L fsp-15 msp-0 mep-10 mtp-20 text-start">
                      <img src={"images/generales/flecha_e" + etapa + ".svg"} className="mep-5 mtp-3 wp-15" alt="" />
                      <span>Me queda una duda sobre...</span>
                    </div>
                    <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-20" />
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
          <div className="row w-100 position-absolute caja-flotante2 p-0 m-0 align-items-end" style={{ bottom: 0 }}>
            <div className="col-1 col-sm-2 p-0 m-0 position-relative">
              <img src="images/rotulo_motivacion.svg" className="oculto" alt="" />
              <div className="w-100 hp-15 bgc-yamcha rounded-caja-start"></div>
              <div className="w-100 hp-25 bgc-goten"></div>
            </div>
            <div className="col-1 col-sm-2 p-0 m-0 position-relative">
              <img src="images/rotulo_planificacion.svg" className="oculto" alt="" />
              <div className="w-100 hp-15 bgc-tshinhan rounded-caja"></div>
              <div className="w-100 hp-25 bgc-bulma"></div>
            </div>
            <div className="col-7 col-sm-2 p-0 m-0 position-relative">
              <img src="images/rotulo_investigacion.svg" className="visible rotulo-etapa position-absolute top-0 start-0" alt="" />
              <div className="w-100 hp-15 bgc-milk rounded-caja"></div>
              <div className="w-100 hp-25 bgc-android18"></div>
            </div>
            <div className="col-1 col-sm-2 p-0 m-0 position-relative">
              <img src="images/rotulo_experimentacion.svg" className="oculto" alt="" />
              <div className="w-100 hp-15 bgc-freezer rounded-caja"></div>
              <div className="w-100 hp-25 bgc-pidgey"></div>
            </div>
            <div className="col-1 col-sm-2 p-0 m-0 position-relative">
              <img src="images/rotulo_creacion.svg" className="oculto" alt="" />
              <div className="w-100 hp-15 bgc-ash rounded-caja"></div>
              <div className="w-100 hp-25 bgc-saitama"></div>
            </div>
            <div className="col-1 col-sm-2 p-0 m-0 position-relative">
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

export default Page026;
