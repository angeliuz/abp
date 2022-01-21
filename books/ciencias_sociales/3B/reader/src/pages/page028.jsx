import React from "react";
import InputBox from "../components/InputBox";
import ModalBook from "../components/ModalBook";

import "./page_028.css";

function Page028(props) {
  const pagina = "028";
  var indexInput = 0;

  return (
    <div className="wrapper bgc-light">
      <div className="d-flex flex-column align-items-center pbp-20">
        <div
          className="page bgc-white overflow-hidden position-relative"
          id={"page_" + pagina}
        >
          <div className="cabecera-v1 hp-80 bgc-android18"></div>


        <div className="d-flex psp-60 pep-60">



            <div className="row p-0 m-0">
              <div className="col-6">
                <div className="ptp-10 mbp-0">
                  <div className="d-flex">
                    <img
                      className="hp-20 align-center mt-3 me-2 mb-2"
                      src="images/page_028/img_001.svg"
                      alt=""
                    />
                    <div className="f-ccdigitaldelivery-bold fsp-35 color-android18">
                      2
                    </div>
                    <div className="f-Ubuntu-R fsp-16 ptp-18 psp-10 pep-10 text-start">
                      Creamos tres eslóganes o lemas sobre el valor de la
                      diversidad.
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-6 position-relative">
                <div className="d-flex position-relative bgc-white box-shadow-simple mtp-20 psp-20 pep-20 ptp-20">

                  <div className="position-absolute top-0 start-50 translate-middle mtp--20 msp-0">
                    <img src="images/page_028/img_001.png" className=" wp-40 position-absolute top-0 start-50 translate-middle-x" alt="" />
                  </div>
                  <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-190" />
                </div>
                
              </div>

              <div className="col-6 position-relative">
                <div className="d-flex position-relative bgc-white box-shadow-simple mtp-20 psp-20 pep-20 ptp-20">

                  <div className="position-absolute top-0 start-50 translate-middle mtp--20 msp-0">
                    <img src="images/page_028/img_001.png" className=" wp-40 position-absolute top-0 start-50 translate-middle-x" alt="" />
                  </div>
                  <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-190" />
                  
                </div>
              </div>

              <div className="col-6 position-relative">
                <div className="d-flex position-relative bgc-white box-shadow-simple mtp-20 psp-20 pep-20 ptp-20">

                  <div className="position-absolute top-0 start-50 translate-middle mtp--20 msp-0">
                    <img src="images/page_028/img_001.png" className=" wp-40 position-absolute top-0 start-50 translate-middle-x" alt="" />
                  </div>
                  <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-190" />
                  
                </div>
              </div>

            </div>

          </div>

          <div className="row container-row m-0 psp-60 pep-60">
            <div className="col-2"></div>

            <div className="col-8 ptp-30 position-relative">
            <img
                src="images/page_028/img_003.png"
                className=" hoja-28 position-absolute top-50 start-0 translate-middle"
                alt=""
              />
              <div className="borde-28-3 f-Ubuntu-R fsp-16 ptp-18 pbp-20 psp-20 pep-20 text-center">
                Creamos afiches con nuestros eslóganes para mostrar en nuestra
                Fiesta de la Diversidad.{" "}
              </div>
            </div>
            <div className="col-2"></div>

            <div className="ptp-10 container-titulo-global mbp-0">
              <div className="d-flex">
                <div className="f-ccdigitaldelivery-bold fsp-35 color-android18">
                  3
                </div>
                <div className="f-Ubuntu-R fsp-16 ptp-18 psp-10 pep-10 text-start">
                  Reflexiono sobre lo que aprendí acerca de la diversidad.
                </div>
              </div>
            </div>

            <div className="col-sm-12 col-md-4 mtp-20  position-relative">
              <img
                src="images/page_028/img_005.png"
                className=" rotulo-28 top-0 start-50 translate-middle-x position-absolute w-80"
                alt=""
              />
              <div className=" margen-21 mtp-30 mbp-80 w-100">
                <div className=" w-100  borde-28-4 p-2  min-hp-400">
                  <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-390" />
                </div>
              </div>
            </div>

            <div className="col-sm-12 col-md-4 mtp-20  position-relative">
              <img
                src="images/page_028/img_006.png"
                className="rotulo-28-1 top-0 start-50 translate-middle-x position-absolute w-90"
                alt=""
              />
              <div className=" margen-21 mtp-30 mbp-80 w-100">
                <div className="w-100  borde-28-5 p-2 rounded-p-20 min-hp-400">
                  <InputBox
                    id={"p" + pagina + "_input" + (indexInput += 1)}
                    className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-390"
                  />
                </div>
              </div>
            </div>

            <div className="col-sm-12 col-md-4 mtp-20  position-relative">
              <img
                src="images/page_028/img_007.png"
                className="rotulo-28 top-0 start-50 translate-middle-x position-absolute w-80"
                alt=""
              />
              <div className=" mtp-30 mbp-80 w-100">
                <div className="w-100  borde-28-6 p-2 rounded-p-20 min-hp-400">
                  <InputBox
                    id={"p" + pagina + "_input" + (indexInput += 1)}
                    className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-390"
                  />
                </div>
              </div>
            </div>


          </div>



          {/* BEGIN PIE DE PAGINA */}
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
            className="row w-100 position-absolute caja-flotante2 p-0 m-0 align-items-end"
            style={{ bottom: 0 }}
          >
            <div className="col-1 col-sm-2 p-0 m-0 position-relative">
              <img
                src="images/rotulo_motivacion.svg"
                className="oculto"
                alt=""
              />
              <div className="w-100 hp-15 bgc-yamcha rounded-caja-start"></div>
              <div className="w-100 hp-25 bgc-goten"></div>
            </div>
            <div className="col-1 col-sm-2 p-0 m-0 position-relative">
              <img
                src="images/rotulo_planificacion.svg"
                className="oculto"
                alt=""
              />
              <div className="w-100 hp-15 bgc-tshinhan rounded-caja"></div>
              <div className="w-100 hp-25 bgc-bulma"></div>
            </div>
            <div className="col-7 col-sm-2 p-0 m-0 position-relative">
              <img
                src="images/rotulo_investigacion.svg"
                className="visible rotulo-etapa position-absolute top-0 start-0"
                alt=""
              />
              <div className="w-100 hp-15 bgc-milk rounded-caja"></div>
              <div className="w-100 hp-25 bgc-android18"></div>
            </div>
            <div className="col-1 col-sm-2 p-0 m-0 position-relative">
              <img
                src="images/rotulo_experimentacion.svg"
                className="oculto"
                alt=""
              />
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

export default Page028;
