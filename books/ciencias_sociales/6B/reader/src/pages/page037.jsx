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
          <div className="cabecera-v1 hp-80 bgc-android18">
          </div>




          <div className="container-titulo-global mtp-20 mbp-0">
            {/* <div className={"f-Ubuntu-B fsp-20 psp-20 text-start lhp-20 " + color}>
              xxx
            </div> */}
            <div className="d-flex psp-20">
              {/* <img className="hp-20 align-center mt-3 me-2 mb-2" src={"images/page_"+pagina+"/img_.svg"} alt=""  /> */}
              <div className={"f-ccdigitaldelivery-bold fsp-35 " + color}>
                3
              </div>
              <div className="f-Ubuntu-R fsp-16 ptp-18 psp-10 pep-10 text-start">
                A partir de la investigación, identifico dos grandes desafíos que enfrenta el derecho que seleccionamos y propongo dos formas en que la sociedad puede proteger a las personas frente a ellos. Justifico su importancia y los comparto con mi grupo.
              </div>
              {/* <img src={"images/page_"+pagina+"/img_00.svg"} className="wp-100" alt=""/> */}
              {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image={"images/generales/play.svg"} clasesImagen="cambio hp-40 mtp-10" className="p-0 px-1" /> */}
              {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image={"images/page_"+pagina+"/img_001.png"} className="p-0 px-1" /> */}
              {/* <ModalBook id={ "p" + pagina + "_book"+ (indexInput+=1) } image={"images/page_"+pagina+"/revista.svg"} clasesImagen="hp-40 text-center mtp-10 " className="p-0 px-0" /> */}
            </div>
          </div>





          <div className="msp-60 mep-40 mb-10 mbp-5">
            <div className="d-flex justify-content-center p-1 position-relative">
              <div className="position-absolute top-100 start-100 translate-middle msp--30 visible-768 zindex-1"><img src={"images/page_" + pagina + "/img_003.png"} className="wp-110" alt="" /></div>
              <div className="row  w-100 f-Ubuntu-R fsp-16 fw-700 color-white rounded-p-20 d-flex align-items-center">



                <div className="col-6 position-relative ">

                  <div className="d-flex mbp-20 mtp-10 w-100 h-100 psp-10  bgc-azuka p-2 rounded-p-10  position-relative">
                    <div className="position-absolute top-50 start-100 translate-middle   msp-0 mtp-0   zindex-1"><img src={"images/page_" + pagina + "/img_001.svg"} className="wp-45 msp-40" alt="" /></div>
                    <div className="d-block w-100">

                      <div className="f-Ubuntu-R fsp-16 text-start p-1 color-dark">Dos grandes desafíos son:</div>
                      <div className=" p-2 min-hp-100 w-100 border-style-solid border-2 mbp-5 rounded-p-10 border-color-azuka  bgc-white">
                        <div className="d-flex align-items-start justify-content-start    f-Ubuntu-R fsp-15   ">
                          <div className="psp-5 ptp-10 pep-5 color-rukia fsp-18 fw-700">1</div>
                          <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="w-90 mtp-0 p-0 px-1 text-start color-dark flex-grow-1 contenedor-linea lhp-35 min-hp-150" />

                        </div>
                      </div>
                      <div className=" p-2 min-hp-100 w-100 border-style-solid border-2 pbp-10 rounded-p-10 border-color-azuka  bgc-white ">
                        <div className="d-flex align-items-start justify-content-start    f-Ubuntu-R fsp-15   ">
                          <div className="psp-5 ptp-10 pep-5   color-rukia fsp-18 fw-700">2</div>
                          <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="w-90 mtp-0 p-0 px-1 color-dark text-start flex-grow-1 contenedor-linea lhp-35 min-hp-150" />

                        </div>
                      </div>

                    </div>
                  </div>


                </div>



                <div className="col-6 d-flex align-items-center   position-relative h-100">

                  {/* <div className="position-absolute top-50 start-0 translate-middle msp-10 mtp-0 wp-30 hp-30 d-flex align-items-center justify-content-center rounded-p-5 border-2 color-pidgey border-style-solid border-color-pidgey bgc-bison">1</div> */}
                  <div className=""></div>

                  <div className="d-flex mbp-20 mtp-10  w-100 pep-10   ">
                    <div className="p-2  w-100 ">
                      <div className="f-Ubuntu-R fsp-16 text-center color-rukia"> Son importantes porque: </div>
                      <div className="mtp-10  w-100 pep-10  psp-10 border-style-solid border-2 rounded-p-10 border-color-azuka  bgc-white  zindex-1">

                        <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 color-dark text-start flex-grow-1 contenedor-linea lhp-35 min-hp-360" />
                      </div>
                    </div>
                  </div>
                </div>


              </div>
            </div>

          </div>





          <div className="msp-60 mep-40 mb-10 mbp-80">
            <div className="d-flex justify-content-center p-1 position-relative">
              {/* <div className="position-absolute top-0 start-100 translate-middle visible-768 zindex-2 wp-100 msp--30 mtp--10"><img src="images/page_062/img_004.png" className="wp-70" alt="" /></div> */}
              {/* <div className="position-absolute top-100 start-50 translate-middle visible-768   zindex-2 wp-100 msp-0 mtp--25"><img src="images/page_062/img_007.png" className="wp-80" alt="" /></div> */}
              <div className="row  w-100 f-Ubuntu-R fsp-16 fw-700 color-white rounded-p-20 d-flex align-items-center">



                <div className="col-6 position-relative ">
                <div className="position-absolute top-50 start-100 translate-middle msp--20 mtp-0  zindex-1"><img src={"images/page_" + pagina + "/img_002.svg"} className="wp-45 msp-60" alt="" /></div>
                  <div className="d-flex mbp-20 mtp-10 w-100 h-100 psp-10  bgc-windu p-2 rounded-p-10  position-relative">
                    <div className="position-absolute top-100 start-50 translate-middle msp--20 mtp-10   zindex-1"><img src={"images/page_" + pagina + "/img_004.png"} className="wp-110" alt="" /></div>
                    <div className="d-block w-100">

                      <div className="f-Ubuntu-R fsp-16 text-start p-1 color-dark">Dos mecanismos de protección ante estos desafíos son:</div>
                      <div className=" p-2 min-hp-100 w-100 border-style-solid border-2 mbp-5  rounded-p-10 border-color-windu  bgc-white ">
                        <div className="d-flex align-items-start justify-content-start    f-Ubuntu-R fsp-15   ">
                          <div className="psp-5 ptp-10 pep-5 color-saitama fsp-18 fw-700">1</div>
                          <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="w-90 mtp-0 p-0 px-1 color-dark text-start flex-grow-1 contenedor-linea lhp-35 min-hp-150" />

                        </div>
                      </div>
                      <div className=" p-2 min-hp-100 w-100 border-style-solid border-2 rounded-p-10 border-color-windu  bgc-white position-relative">
                        
                        <div className="d-flex align-items-start justify-content-start    f-Ubuntu-R fsp-15   ">
                          <div className="psp-5 ptp-10 pep-5  color-saitama fsp-18 fw-700">2</div>
                          <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="w-90 mtp-0 p-0 px-1 color-dark text-start flex-grow-1 contenedor-linea lhp-35 min-hp-150" />

                        </div>
                      </div>

                    </div>
                  </div>


                </div>



                <div className="col-6 d-flex align-items-center   position-relative h-100">

                  {/* <div className="position-absolute top-50 start-0 translate-middle msp-10 mtp-0 wp-30 hp-30 d-flex align-items-center justify-content-center rounded-p-5 border-2 color-pidgey border-style-solid border-color-pidgey bgc-bison">1</div> */}
                  <div className=""></div>

                  <div className="d-flex mbp-20 mtp-10  w-100 pep-10   ">
                    <div className="p-2  w-100 ">
                      <div className="f-Ubuntu-R fsp-16 text-center color-saitama"> Son importantes porque: </div>
                      <div className="mtp-10  w-100 pep-10 psp-10  border-style-solid border-2 rounded-p-10 border-color-windu  bgc-white  zindex-1">

                        <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 color-dark text-start flex-grow-1 contenedor-linea lhp-35 min-hp-360" />
                      </div>
                    </div>
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
