import React from "react";
import InputBox from "../components/InputBox";
import ModalBook from "../components/ModalBook";

import "./page_037.css";

function Page037(props) {

  const pagina = "037";
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
          {/* BEGIN CABECERA VERSIÓN 2 */}
          <div className={"cabecera-v2 d-flex flex-column " + background}>
            <div className="d-flex contenedor-cabecera-v2 ptp-40 psp-30 pep-30">
              <div className={"caja wp-150 text-center fsp-24 f-IntroRustG-Base " + colorSesion}>SESIÓN 8</div>
              <div className="section-name d-flex align-items-center fsp-24 fw-700 f-Ubuntu-M color-white">Elaboramos nuestras fichas</div>
            </div>

          </div>
          {/* END CABECERA VERSIÓN 2 */}
          <div className="ptp-30 container-titulo-global mbp-20">
            <div className={"f-Ubuntu-B fsp-20 psp-0 text-start lhp-20 " + color}>Organizamos y sintetizamos la información</div>
            <div className="d-flex">
              {/* <img className="hp-20 align-center mt-3 me-2 mb-2" src={"images/page_" + pagina + "/img_002.svg"} alt="" /> */}
              <div className={"f-ccdigitaldelivery-bold fsp-35 " + color}>1</div>
              <div className="f-Ubuntu-R fsp-16 ptp-18 psp-10 pep-10 text-start">
                Creo un mapa mental con las principales ideas o conceptos mencionados
                en la entrevista.
              </div>
              {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image="images/generales/play.svg" clasesImagen="cambio hp-40 mtp-10" className="p-0 px-1" /> */}
              {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image="images/page_007/img_001.png" className="p-0 px-1" /> */}
              {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image="images/page_007/img_001.png" className="p-0 px-1" /> */}
              {/* <ModalBook id={"p" + pagina + "_book" + (indexInput += 1)} image={"images/page_" + pagina + "/img_002.jpg"} clasesImagen="hp-40 text-center mtp-10 " className="p-0 px-0" /> */}
            </div>
          </div>

          <div className="ptp-10 psp-80 pep-80 mbp-0 position-relative">
            <div className="row justify-content-center">
              <div className="col-12 p-0 m-0 position-relative">
              <div className="position-absolute top-100 start-0 translate-middle msp-0 mtp--20 "><img src="images/page_037/img_004.png" className="wp-50 " alt="" /></div> 
              <div className="position-absolute top-100 start-100 translate-middle msp--60 mtp--90 visible-768"><img src="images/page_037/img_003.png" className="wp-150 " alt="" /></div> 
                <div className="position-absolute top-0 start-100 translate-middle"><img src="images/page_037/img_002.svg" className="hp-25 mep-0 mtp-45" alt="" /></div>
                {/* <div className="position-absolute top-50 start-0 translate-middle"><img src="images/page_050/lapiz.png" className="hp-85 mep-5 mtp-45" alt="" /></div> */}
                {/* <div className="position-absolute top-100 start-100 translate-middle"><img src="images/page_050/mono.png" className="hp-110 msp--50 mtp--110" alt="" /></div> */}
                <div className="bgc-jugador001 border-style-solid border-color-goku border-1 box-shadow-simple min-hp-300 ">

                  <div className=" position-absolute top-50 start-50 translate-middle">

                    <div className="d-flex mbp-20 mtp-10 w-100">
                      <div className="p-2 min-hp-100 min-wp-200  border-style-solid border-2 rounded-p-10 border-color-lightDark bgc-white">
                        <div className="f-pixilate-semibold  fsp-18 msp-10 mep-10 text-center">Mi entrevistado<br/>
                          o entrevistada:</div>
                        <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-35" />
                      </div>
                    </div>
                  </div>
                  {/* <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 hp-35 min-hp-260 mep-70 msp-10" /> */}
                </div>
              </div>
            </div>
          </div>

          <div className="ptp-30 container-titulo-global mbp-20">
            {/* <div className={"f-Ubuntu-B fsp-20 psp-0 text-start lhp-20 " + color}>Organizamos y sintetizamos la información</div> */}
            <div className="d-flex">
              {/* <img className="hp-20 align-center mt-3 me-2 mb-2" src={"images/page_" + pagina + "/img_002.svg"} alt="" /> */}
              <div className={"f-ccdigitaldelivery-bold fsp-35 " + color}>2</div>
              <div className="f-Ubuntu-R fsp-16 ptp-18 psp-10 pep-10 text-start">
              Elijo una palabra, una idea y una frase que resuma la entrevista.
              </div>
              {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image="images/generales/play.svg" clasesImagen="cambio hp-40 mtp-10" className="p-0 px-1" /> */}
              {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image="images/page_007/img_001.png" className="p-0 px-1" /> */}
              {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image="images/page_007/img_001.png" className="p-0 px-1" /> */}
              {/* <ModalBook id={"p" + pagina + "_book" + (indexInput += 1)} image={"images/page_" + pagina + "/img_002.jpg"} clasesImagen="hp-40 text-center mtp-10 " className="p-0 px-0" /> */}
            </div>
          </div>

          <div className="d-flex msp-60 mep-60 mbp-0 mtp-30">

            <div className="row m-0 psp-10 pep-10 ptp-0 pbp-10 rounded-p-20 w-100">

            <div className="col-md-12 col-lg-12 position-relative">
            <div className="position-absolute top-50 start-100 translate-middle msp-0 mtp-0 visible-768"><img src="images/page_037/img_005.png" className="wp-30 " alt="" /></div>
                  
                  <div className="d-flex mbp-20 mtp-10 w-100">
                      <div className="p-2 
                       w-100 border-style-solid border-2 rounded-p-10 border-color-android18 bgc-jugador001">
                      <div className="f-Ubuntu-M interior-caja-v1 bgc-white fsp-16 msp-10 mep-10 text-center color-android18">Palabra</div>
                          <InputBox id={ "p" + pagina + "_input"+ (indexInput+=1) } className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-35" />
                      </div>
                  </div>
                </div>

                <div className="col-sm-12 col-md-6 position-relative">
                  
                  <div className="d-flex mbp-20 mtp-10 w-100">
                      <div className="p-2 min-hp-100 w-100 border-style-solid border-2 rounded-p-10 border-color-jade bgc-tanya"> 
                      <div className="f-Ubuntu-M interior-caja-v1 bgc-white fsp-16 msp-10 mep-10 text-center color-saitama">Idea</div>  
                          <InputBox id={ "p" + pagina + "_input"+ (indexInput+=1) } className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-70" />
                      </div>
                  </div>
                </div>
                <div className="col-sm-12 col-md-6 position-relative">
                
                  <div className="d-flex mbp-80 mtp-10 w-100">
                      <div className="p-2 min-hp-100 w-100 border-style-solid border-2 rounded-p-10 border-color-yoda bgc-smoke">
                      <div className="f-Ubuntu-M interior-caja-v1 bgc-white fsp-16 msp-10 mep-10 text-center color-debussy ">Frase</div>
                          <InputBox id={ "p" + pagina + "_input"+ (indexInput+=1) } className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-70" />
                      </div>
                  </div>
                </div>
                
                
            </div>
          </div> 
          {/* PIE DE PAGINA */}
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

        </div>
      </div>
    </div>
  );
}

export default Page037;
