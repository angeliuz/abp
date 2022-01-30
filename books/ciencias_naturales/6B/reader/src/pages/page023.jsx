import React from "react";
import InputBox from "../components/InputBox";
import ModalBook from "../components/ModalBook";
import ModalVideo from "../components/ModalVideo";

import "./page_023.css";

function Page023(props) {
  const pagina = "023";
  var indexInput = 0;
  const etapa = "3";
  const background = "bgc-android18";
  const color = "color-android18";
  const colorSesion = "color-primary";
  const borderColor = "border-color-android18";
  const bgc_cajas = "bgc-goku";

  return (
    <div className="wrapper bgc-light">
      <div className="d-flex flex-column align-items-center pbp-20">
        <div
          className="page bgc-white overflow-hidden position-relative"
          id={"page_" + pagina}
        >
          <div className="cabecera-v1 hp-80 bgc-android18"></div>
          {/* <div className={"cabecera-v2 d-flex flex-column " + background}>
            <div className="d-flex contenedor-cabecera-v2 ptp-40 psp-30 pep-30">
              <div
                className={
                  "caja wp-150 text-center fsp-24 f-IntroRustG-Base " +
                  colorSesion
                }
              >
                SESIÓN 4
              </div>
              <div className="section-name d-flex align-items-center fsp-24 fw-700 f-Ubuntu-M color-white">
                ¿Cómo nos relacionamos entre nosotros?
              </div>
            </div>
          </div> */}

          <div className="ptp-30 container-titulo-global mbp-10">
            {/* <div
              className={"f-Ubuntu-B fsp-20 psp-0 text-start lhp-20 " + color}
            >
              Recordamos nuestro desafío
            </div> */}
            <div className="d-flex">
              {/* <img className="hp-20 align-center mt-3 me-2 mb-2" src={"images/page_"+pagina+"/img_001.svg"} alt=""  /> */}
              <div className={"f-ccdigitaldelivery-bold fsp-35 " + color}>
                3
              </div>
              <div className="f-Ubuntu-R fsp-16 ptp-18 psp-10 pep-10 text-start">
                Leo la noticia de la revista y completo el crucigrama.
              </div>
              {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image="images/generales/play.svg" clasesImagen="cambio hp-40 mtp-10" className="p-0 px-1" /> */}
              {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image="images/page_007/img_001.png" className="p-0 px-1" /> */}
              {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image="images/page_007/img_001.png" className="p-0 px-1" /> */}
              <ModalBook
                id={"p" + pagina + "_book" + (indexInput += 1)}
                image={"images/page_" + pagina + "/img_001.svg"}
                clasesImagen="hp-40 text-center mtp-10 "
                className="p-0 px-0"
              />
            </div>
          </div>


          <div className="msp-60 mep-60 mtp-20 mbp-10">
            <div className="row p-0 m-0">
              <div className="col-sm-12 col-md-3 position-relative">
              
              </div>
              <div className="w-100 mx-auto position-relative mbp-20">
                <div className=""><img src={"images/page_" + pagina + "/img_005.png"} className="wp-400" alt="" /></div>
                <div className="position-absolute top-50 start-0 translate-middle mtp--90 msp-70 visible-768 "><img src="images/page_023/img_001.png" className="wp-100" alt="" /></div>
                <div className="position-absolute top-50 start-100 translate-middle mtp--130 msp--50 visible-768 "><img src="images/page_023/img_002.png" className="wp-100" alt="" /></div>
              </div>
            </div>
          </div>

          <div className="d-flex msp-60 mep-60 mbp-60 mtp-30">

            <div className="row m-0 psp-10 pep-10 ptp-0 pbp-10 rounded-p-20 w-100">

              <div className="col-sm-12 col-md-6 position-relative mbp-40">
                <div className="d-flex justify-content-end  w-100 ">
                  <div className="position-absolute top-0 start-0 translate-middle mtp-120 msp-100 bgc-voldemort min-wp-200 hp-300 rounded-p-10 ptp-5 pbp-5 color-white fsp-15 f-Ubuntu-M ">
                  Horizontales
                  </div>
                </div>
                <div className="d-flex mbp-20  w-100 ">
                  <div className="p-2 min-hp-250 w-100 border-style-solid border-2 rounded-p-10 border-color-voldemort bgc-white zindex-2">
                    <ol className="text-start f-Ubuntu-L">
                      <li>Es un sistema que transforma este tipo
                        de energía en energía eléctrica.</li>
                      <li>Cerro Pabellón utiliza esta característica
                        de la Tierra para obtener energía.</li>


                    </ol>
                    {/* <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-140" /> */}
                  </div>
                </div>
              </div>

              <div className="col-sm-12 col-md-6 position-relative mbp-40">
              <div className="position-absolute top-0 start-100 translate-middle mtp--85 msp--90 visible-768 "><img src="images/page_023/img_004.png" className="" alt="" /></div>
                <div className="d-flex justify-content-end  w-100 ">
                  <div className="position-absolute top-0 start-100 translate-middle msp--100 mtp-120 bgc-ken min-wp-200 hp-300 rounded-p-10 ptp-5 pbp-5 color-white fsp-15 f-Ubuntu-M ">
                    Verticales
                  </div>
                </div>
                <div className="d-flex mbp-20  w-100 ">
                  <div className="p-2 min-hp-250 w-100 border-style-solid border-2 rounded-p-10 border-color-ken bgc-white zindex-2">
                    <ol className="text-start f-Ubuntu-L" start="3">
                      <li>En Chile, se encuentra la primera planta
                        de energía de este tipo en Sudamérica.</li>
                      <li>En esta región, se instaló el primer
                        convertidor a escala real de energía
                        de las olas.</li>
                      <li>Uno de los objetivos de esta innovación
                        es liderar la investigación en este tipo
                        de energía.</li>

                    </ol>
                    {/* <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-140" /> */}
                  </div>
                </div>
              </div>


            </div>
          </div>




          {/* PIE DE PAGINA */}
          <div
            className="d-flex hp-90 caja-flotante p-0 m-0 position-absolute justify-content-end align-items-end zindex-2"
            style={{ bottom: 70, right: 0 }}
          >
            <div
              className="f-Ubuntu-M fsp-10 position-absolute mbp-60"
              style={{ transform: `rotate(270deg)`, color: "dark" }}
            >
              ABP &copy; SM
            </div>
            <div className="bgc-boros wp-50 hp-30 f-Ubuntu-M fsp-20 psp-5">
              {props.numeroPagina(pagina)}
            </div>
          </div>
          <div
            className="row position-absolute caja-flotante2 p-0 m-0 align-items-end marcador-etapa"
            style={{ bottom: 0 }}
          >
            <div className="col-1 position-relative col-sm-2 p-0 m-0">
              <img
                src="images/rotulo_motivacion.svg"
                className="oculto"
                alt=""
              />
              <div className="w-100 hp-15 bgc-yamcha rounded-caja-start"></div>
              <div className="w-100 hp-25 bgc-goten"></div>
            </div>
            <div className="col-1 position-relative col-sm-2 p-0 m-0">
              <img
                src="images/rotulo_planificacion.svg"
                className="oculto"
                alt=""
              />
              <div className="w-100 hp-15 bgc-tshinhan rounded-caja"></div>
              <div className="w-100 hp-25 bgc-bulma"></div>
            </div>
            <div className="col-7 position-relative col-sm-2 p-0 m-0">
              <img
                src="images/rotulo_investigacion.svg"
                className="visible rotulo-etapa position-absolute top-0 start-0"
                alt=""
              />
              <div className="w-100 hp-15 bgc-milk rounded-caja"></div>
              <div className="w-100 hp-25 bgc-android18"></div>
            </div>
            <div className="col-1 position-relative col-sm-2 p-0 m-0">
              <img
                src="images/rotulo_experimentacion.svg"
                className="oculto"
                alt=""
              />
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
        </div>
      </div>
    </div>
  );
}

export default Page023;
