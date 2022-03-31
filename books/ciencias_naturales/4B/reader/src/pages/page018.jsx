import React from "react";
import InputBox from "../components/InputBox";
import ModalBook from "../components/ModalBook";

import "./page_018.css";

function Page018(props) {
  const pagina = "018";
  var indexInput = 0;
  const background = "bgc-bulma";
  const color = "color-bulma";
  const borderColor = "border-color-bulma";
  const borderColorTabla = "border-color-buzz";
  const bgc_cajas = "bgc-goku";

  return (
    <div className="wrapper bgc-light">
      <div className="d-flex flex-column align-items-center pbp-20">
        <div
          className="page bgc-white overflow-hidden position-relative"
          id={"page_" + pagina}
        >
          <div className="cabecera-v1 hp-80 bgc-bulma"></div>

          <div className="container-titulo-global mtp-20 mbp-0">
            <div className={"f-Ubuntu-B fsp-20 psp-20 text-start lhp-20 " + color}>
              ¿Qué veo en las fotografías?
            </div>
            <div className="d-flex psp-20">
              {/* <img className="hp-20 align-center mt-3 me-2 mb-2" src={"images/page_"+pagina+"/img_.svg"} alt=""  /> */}
              <div className={"f-ccdigitaldelivery-bold fsp-35 " + color}>
                3
              </div>
              <div className="f-Ubuntu-R fsp-16 ptp-18 psp-10 pep-10 col-10 text-start">
                Leo la revista y formulo nuevas preguntas para hacerles a mis
                profesores y familiares.
              </div>
              {/* <img src={"images/page_"+pagina+"/img_00.svg"} className="wp-100" alt=""/> */}
              {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image={"images/generales/play.svg"} clasesImagen="cambio hp-40 mtp-10" className="p-0 px-1" /> */}
              {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image={"images/page_"+pagina+"/img_001.png"} className="p-0 px-1" /> */}
              <ModalBook id={"p" + pagina + "_book" + (indexInput += 1)} colorUnidad={background} pagina={"78"} image={"images/page_" + pagina + "/revista.svg"} clasesImagen="hp-40 text-center mtp-10 " className="p-0 px-0" />
            </div>
          </div>


          <div className="ptp-30 psp-60 pep-60 pbp-140">
            <div className="d-flex flex-wrap msp--20 justify-content-center">
              <img
                src="images/page_018/img_002.svg"
                className="mtp--10"
                alt=""
              />
              <img src="images/page_018/img_003.svg" className="mtp-5" alt="" />
              <img
                src="images/page_018/img_004.svg"
                className="mtp--25"
                alt=""
              />
              <img src="images/page_018/img_005.svg" className="" alt="" />
            </div>
            <div className="row w-100">
              <div className="col-md-6 col-12 position-relative ">
                <img src="images/page_018/img_006.svg" className="" alt="" />
                <div className="position-absolute top-0 start-50 mtp-20 msp--140 rotate-1">
                  <InputBox
                    id={"p" + pagina + "_input" + (indexInput += 1)}
                    className="p-0 px-1 text-start flex-grow-1 lhp-35 min-hp-90 wp-240 msp-30"
                  />
                </div>
              </div>
              <div className="col-md-6 col-12 position-relative ">
                <img src="images/page_018/img_007.svg" className="" alt="" />
                <div className="position-absolute top-0 start-50 mtp-10 msp--140 rotate--1">
                  <InputBox
                    id={"p" + pagina + "_input" + (indexInput += 1)}
                    className="p-0 px-1 text-start flex-grow-1 lhp-35 min-hp-90 wp-240 msp-30"
                  />
                </div>
                <div className="position-absolute start-50 top-0 mtp-20 msp-140">
                  <img
                    src="images/page_018/img_010.png"
                    className="hp-60"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="row w-100">
              <div className="col-md-6 col-12 position-relative ">
                <img src="images/page_018/img_006.svg" className="" alt="" />
                <div className="position-absolute top-0 start-50 mtp-20 msp--140 rotate-1">
                  <InputBox
                    id={"p" + pagina + "_input" + (indexInput += 1)}
                    className="p-0 px-1 text-start flex-grow-1 lhp-35 min-hp-90 wp-240 msp-30"
                  />
                </div>
              </div>
              <div className="col-md-6 col-12 position-relative ">
                <img src="images/page_018/img_007.svg" className="" alt="" />
                <div className="position-absolute top-0 start-50 mtp-10 msp--140 rotate--1">
                  <InputBox
                    id={"p" + pagina + "_input" + (indexInput += 1)}
                    className="p-0 px-1 text-start flex-grow-1 lhp-35 min-hp-90 wp-240 msp-30"
                  />
                </div>
              </div>
            </div>
            <div className="d-flex pbp-20">
              <div className="f-ccdigitaldelivery-bold fsp-35 color-bulma">
                4
              </div>
              <div className="f-Ubuntu-R fsp-16 ptp-15 col-10 psp-10 text-left text-start">
                Registro las experiencias de profesores y familiares que más
                llamaron mi atención. Luego, las comparto con mi equipo.
              </div>
            </div>
            <div className="position-relative">
              <img
                src="images/page_018/img_012.png"
                className="position-absolute translate-middle wp-20 top-50 start-0 msp--1"
                alt=""
              />
              <div className="w-100 bgc-white box-shadow-simple ptp-5 psp-15">
                <InputBox
                  id={"p" + pagina + "_input" + (indexInput += 1)}
                  className="p-0 px-1 text-start flex-grow-1 lhp-25 min-hp-240 w-98"
                />
              </div>
              <img
                src="images/page_018/img_011.png"
                className="position-absolute hp-200 translate-middle top-0 start-100 mtp--95 msp--5"
                alt=""
              />
              <img
                src="images/page_018/img_013.png"
                className="hp-60 position-absolute translate-middle top-50 start-100 mtp--20"
                alt=""
              />
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
            className="row position-absolute caja-flotante2 p-0 m-0 align-items-end"
            style={{ bottom: 0 }}
          >
            <div className="col-1 position-relative col-md-2 p-0 m-0">
              <img
                src="images/rotulo_motivacion.svg"
                className="oculto"
                alt=""
              />
              <div className="w-100 hp-15 bgc-yamcha rounded-caja-start"></div>
              <div className="w-100 hp-25 bgc-goten"></div>
            </div>
            <div className="col-7 position-relative col-md-2 p-0 m-0">
              <img
                src="images/rotulo_planificacion.svg"
                className="visible rotulo-etapa position-absolute top-0 start-0"
                alt=""
              />
              <div className="w-100 hp-15 bgc-tshinhan rounded-caja"></div>
              <div className="w-100 hp-25 bgc-bulma"></div>
            </div>
            <div className="col-1 position-relative col-md-2 p-0 m-0">
              <img
                src="images/rotulo_investigacion.svg"
                className="oculto"
                alt=""
              />
              <div className="w-100 hp-15 bgc-milk rounded-caja"></div>
              <div className="w-100 hp-25 bgc-android18"></div>
            </div>
            <div className="col-1 position-relative col-md-2 p-0 m-0">
              <img
                src="images/rotulo_experimentacion.svg"
                className="oculto"
                alt=""
              />
              <div className="w-100 hp-15 bgc-freezer rounded-caja"></div>
              <div className="w-100 hp-25 bgc-pidgey"></div>
            </div>
            <div className="col-1 position-relative col-md-2 p-0 m-0">
              <img src="images/rotulo_creacion.svg" className="oculto" alt="" />
              <div className="w-100 hp-15 bgc-ash rounded-caja"></div>
              <div className="w-100 hp-25 bgc-saitama"></div>
            </div>
            <div className="col-1 position-relative col-md-2 p-0 m-0">
              <img src="images/rotulo_difusion.svg" className="oculto" alt="" />
              <div className="w-100 hp-15 bgc-leono rounded-caja-end"></div>
              <div className="w-100 hp-25 bgc-pikachu"></div>
            </div>
          </div>
          {/* FIN PIE DE PAGINA */}
        </div>
      </div>
    </div>
  );
}

export default Page018;
