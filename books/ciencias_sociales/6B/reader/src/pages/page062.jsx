import React from "react";
import InputBox from "../components/InputBox";
import ModalBook from "../components/ModalBook";


import "./page_062.css";

function Page062(props) {

  const pagina = "062";
  var indexInput = 0;
  const etapa = "5"
  const background = "bgc-saitama";
  const color = "color-saitama";
  const borderColor = "border-color-saitama"
  const borderColorTabla = "border-color-bobafett"
  const bgc_cajas = "bgc-bobafett";

  return (
    <div className="wrapper bgc-light">
      <div className="d-flex flex-column align-items-center pbp-20">
        <div className="page bgc-white overflow-hidden position-relative" id={"page_" + pagina}>
          <div className={"cabecera-v1 hp-80 " + background}>
          </div>



          <div className="ptp-10 container-titulo-global mbp-0">
            {/* <div className={"f-Ubuntu-B fsp-20 psp-20 text-start lhp-20 " + color}>
                            Plan de trabajo
                        </div> */}
            <div className="d-flex psp-20">
              <img className="hp-20 align-center mt-3 me-2 mb-2" src={"images/page_" + pagina + "/img_001.svg"} alt="" />
              <div className={"f-ccdigitaldelivery-bold fsp-35 " + color}>
                3
              </div>
              <div className="f-Ubuntu-R fsp-16 ptp-18 psp-10 pep-10 text-start">
                En grupo, evaluamos el proceso de elaboración de nuestra obra.
              </div>
              {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image={"images/generales/play.svg"} clasesImagen="cambio hp-40 mtp-10" className="p-0 px-1" /> */}
              {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image={"images/page_"+pagina+"/img_001.png"} className="p-0 px-1" /> */}
              {/* <ModalBook id={ "p" + pagina + "_book"+ (indexInput+=1) } image={"images/page_"+pagina+"/revista65.svg"} clasesImagen="hp-40 text-center mtp-10 " className="p-0 px-0" /> */}
            </div>
          </div>






          <div className="d-flex mtp-30 msp-90 mep-60 position-relative">

            <div className="position-absolute top-0 start-100 translate-middle msp-0 mtp-40 visible-768 imagen-64-sobre-papel zindex-1"><img src={"images/page_" + pagina + "/img_002.png"} className="wp-60 mtp--20 msp--50" alt="" /></div>
            <div className="position-absolute top-100 start-0 translate-middle msp-0 mtp--70 visible-768 imagen-64-sobre-papel zindex-1"><img src={"images/page_" + pagina + "/img_003.png"} className="wp-70" alt="" /></div>
            {/* <div className="position-absolute top-0 start-0 translate-middle msp-0 mtp--40 visible-768 imagen1-64-sobre-papel zindex-1"><img src={"images/page_" + pagina + "/img_003.png"} className="wp-60" alt="" /></div> */}
            <div className="row w-100">

              <div className="cb-ep-paper-62 ">
                <div className="cb-ep-paper-content-62 f-Ubuntu-L text-start hp-700 ">
                  <div className="mtp-5 ">
                    <div className="d-flex justify-content-center align-items-center text-start f-Ubuntu-R fsp-15 ptp-3 psp-5">¿Qué deberíamos mantener durante el proceso de elaboración?</div>
                    <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 fsp-15 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-300" />

                  </div>
                </div>
              </div>
            </div>

          </div>






          <div className="d-flex global-margin mtp-0 mbp-100 psp-0 pep-0 ptp-0 pbp-0">
            <div className="row p-0 m-0 w-100">
              <div className="col-12 p-0 m-0 position-relative">

                <div className="row">
                  <div className="col-6 position-relative">
                    <div className="position-absolute top-0 start-0   msp-0 mtp-0 visible-768 zindex-1"><img src={"images/page_" + pagina + "/img_004.png"} className="wp-30 msp-10 mtp--5" alt="" /></div>
                    <div className="bgc-white w-100 border-style-solid border-2 border-color-hotaru rounded-p-10 m-1">

                      <div className="f-Ubuntu-R fsp-16 lh-sm ptp-15 pbp-0 psp-15 pep-15 hp-60  text-center d-flex align-items-center">
                        ¿Qué aspectos de nuestro trabajo deberíamos mejorar?
                      </div>
                      <div className="psp-20 pep-20 ptp-0 pbp-5 m-0  w-100 bgc-hotaru">
                        <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="mtp-20 p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-380" />
                      </div>

                    </div>
                  </div>
                  <div className="col-6 position-relative">
                    <div className="position-absolute top-0 end-0   msp-0 mtp-0 visible-768 zindex-1"><img src={"images/page_" + pagina + "/img_004.png"} className="wp-30 mep-15 mtp--5" alt="" /></div>
                    <div className="position-absolute top-100 start-0 translate-middle  msp-0 mtp-0 visible-768 zindex-1"><img src={"images/page_" + pagina + "/img_005.png"} className="wp-90 mep-5 mtp-0" alt="" /></div>
                    <div className="position-absolute top-50 start-100 translate-middle   msp-0 mtp-0 visible-768 zindex-1"><img src={"images/page_" + pagina + "/img_006.png"} className="wp-50 mep--5 mtp-0" alt="" /></div>
                    <div className="bgc-white w-100 border-style-solid border-2 border-color-bobafett rounded-p-10 m-1">

                      <div className="f-Ubuntu-R fsp-16 lh-sm ptp-15 pbp-0 psp-15 pep-15 hp-60  text-center d-flex align-items-center">
                        ¿Qué estrategias aplicaremos para implementar esas mejoras?
                      </div>
                      <div className="psp-20 pep-20 ptp-0 pbp-5 m-0  w-100 bgc-bobafett">
                        <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="mtp-20 p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-380" />
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
            <div className="bgc-misty wp-50 hp-30 f-Ubuntu-M fsp-20 psp-5">{props.numeroPagina(pagina)}</div>
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
            <div className="col-1 col-sm-2 p-0 m-0 position-relative">
              <img src="images/rotulo_investigacion.svg" className="oculto" alt="" />
              <div className="w-100 hp-15 bgc-milk rounded-caja"></div>
              <div className="w-100 hp-25 bgc-android18"></div>
            </div>
            <div className="col-1 col-sm-2 p-0 m-0 position-relative">
              <img src="images/rotulo_experimentacion.svg" className="oculto" alt="" />
              <div className="w-100 hp-15 bgc-freezer rounded-caja"></div>
              <div className="w-100 hp-25 bgc-pidgey"></div>
            </div>
            <div className="col-7 col-sm-2 p-0 m-0 position-relative">
              <img src="images/rotulo_creacion.svg" className="visible rotulo-etapa position-absolute top-0 start-0" alt="" />
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

export default Page062;
