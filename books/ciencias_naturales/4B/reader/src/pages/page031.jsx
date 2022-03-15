import React from "react";
import InputBox from "../components/InputBox";
import ModalBook from "../components/ModalBook";
import "./page_031.css";

function Page031(props) {
  const pagina = "031";
  var indexInput = 0;

  return (
    <div className="wrapper bgc-light">
      <div className="d-flex flex-column align-items-center pbp-20">
        <div
          className="page bgc-white overflow-hidden position-relative"
          id={"page_" + pagina}
        >
          {/* BEGIN CABECERA VERSIÓN 2 */}
          <div className="cabecera-v1 hp-80 bgc-android18"></div>
          {/* END CABECERA VERSIÓN 2 */}

          <div className="ptp-30 psp-60 pep-60">
            <div className="f-Ubuntu-M fsp-20 color-android18 text-start">
              Durante la lectura
            </div>
          </div>
          <div className="ptp-10 container-titulo-global mbp-20">
            <div className="d-flex">
              <div className="f-ccdigitaldelivery-bold fsp-35 color-android18">
                2
              </div>
              <div className="f-Ubuntu-R fsp-16 ptp-18 psp-10 pep-10 text-start">
                Me detengo en la lectura y registro.
              </div>
            </div>
          </div>

          <div className="row mx-4 position-relative">
            <div className="col-sm-12 col-md-6 position-relative mbp-10">

              <div className="box-color-24-1">
                <div className="f-Ubuntu-M alinea fsp-18 rounded-caja bgc-vegeta w-100 p-2 text-center color-white">
                  Ideas principales
                </div>
                <div className=" linea1 bgc-white min-hp-200 p-2  rounded-seb-20 border-style-solid border-color-vegeta border-2">
                  <InputBox
                    id={"p" + pagina + "_input" + (indexInput += 1)}
                    className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-175"
                  />
                </div>
              </div>
            </div>



            <div className="col-sm-12 col-md-6 position-relative mbp-40">
              <div className="position-absolute posicion-centro-centro translate-middle zindex-1"><img src={"images/page_" + pagina + "/img_005.png"} className="rotacion-centro-centro" alt="" /></div>
              <div className="position-absolute top-0 start-100 translate-middle visible-768 zindex-2 msp--50 mtp--50">
                <img src="images/page_031/img_001.png" className="" alt="" />
              </div>

              <div className="box-color-24-2 ptp-14">
                <div className="f-Ubuntu-M alinea fsp-18 rounded-caja bgc-saitama w-100 p-2 text-center color-white">
                  Palabras que no entiendo
                </div>
                <div className="linea1 bgc-white min-hp-200 p-2  rounded-seb-20 border-style-solid border-color-saitama border-2">
                  <InputBox
                    id={"p" + pagina + "_input" + (indexInput += 1)}
                    className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-175"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="ptp-10 container-titulo-global mbp-20">
            <div className="d-flex">
              <div className="f-ccdigitaldelivery-bold fsp-35 color-android18">
                3
              </div>
              <div className="f-Ubuntu-R fsp-16 ptp-18 psp-10 pep-10 text-start">
                Busco el significado de las palabras que desconozco.
              </div>
            </div>
          </div>

          <div className="d-flex msp-60 mep-60 mbp-100 mtp-30 rounded-p-20  ">
            <div className="row w-100 p-0 m-0">

              <div className="col-md-4 position-relative justify-content-center align-items-center">
                <div className="position-absolute  translate-middle msp-3 mtp-0 zindex-1">
                  <img
                    src="images/page_070/img_002.png"
                    className="wp-60 giro90-res"
                    alt=""
                  />
                </div>
                <div className="position-absolute flecha-p31 translate-middle msp-3 mtp-15 zindex-1 mtp-10">
                  <img src="images/page_031/flecha_01.png" className="wp-30 giro90-res" alt="" />
                </div>
                <div className="d-flex justify-content-center w-100 ">
                  <div className="bgc-soldados w-50 rounded-caja ptp-5 pbp-5 color-white fsp-16 f-Ubuntu-M  ">
                    Palabra
                  </div>
                </div>
                <div className="d-flex flex-column center-center mbp-5 mtp-0 w-100 rounded-p-10 bgc-white border-style-solid border-1 border-color-soldados">
                  <div className="p-2 w-100 d-flex ">
                    <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-70" />
                  </div>
                </div>
              </div>

              <div className="col-md-8 position-relative justify-content-center align-items-center padding-p31">
                <div className="position-absolute top-50 start-100 translate-middle msp-3 mtp-0 zindex-1"></div>
                <div className="d-flex justify-content-center w-100 ">
                  <div className="bgc-soldados w-30 rounded-caja ptp-5 pbp-5 color-white fsp-16 f-Ubuntu-M  ">
                    Significado
                  </div>
                </div>
                <div className="d-flex flex-column center-center mbp-5 mtp-0 w-100 rounded-p-10 bgc-white border-style-solid border-1 border-color-soldados">
                  <div className="p-2 w-100 d-flex">
                    <InputBox
                      id={"p" + pagina + "_input" + (indexInput += 1)}
                      className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-70"
                    />
                  </div>
                </div>
              </div>

              <div className="col-md-4 position-relative justify-content-center align-items-center padding-p31">
                <div className="position-absolute top-0 start-0 translate-middle msp-3 mtp-0 zindex-1"></div>
                <div className="position-absolute flecha-p31 translate-middle msp-3 mtp-15 zindex-1 mtp-10">
                  <img src="images/page_031/flecha_02.png" className="wp-30 giro90-res" alt="" />
                </div>
                <div className="d-flex justify-content-center w-100 invisible-768">
                  <div className="bgc-bulma w-50 rounded-caja ptp-5 pbp-5 color-white fsp-16 f-Ubuntu-M  ">
                    Palabra
                  </div>
                </div>
                <div className="d-flex flex-column center-center mbp-5 mtp-0 w-100 rounded-p-10 bgc-white border-style-solid border-1 border-color-bulma">
                  <div className="p-2 w-100 d-flex">
                    <InputBox
                      id={"p" + pagina + "_input" + (indexInput += 1)}
                      className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-70"
                    />
                  </div>
                </div>
              </div>

              <div className="col-md-8 position-relative justify-content-center align-items-center padding-p31">
                <div className="position-absolute top-50 start-100 translate-middle msp-3 mtp-0 zindex-1"></div>
                <div className="d-flex justify-content-center w-100 invisible-768">
                  <div className="bgc-bulma w-30 rounded-caja ptp-5 pbp-5 color-white fsp-16 f-Ubuntu-M  ">
                    Significado
                  </div>
                </div>
                <div className="d-flex flex-column center-center mbp-5 mtp-0 w-100 rounded-p-10 bgc-white border-style-solid border-1 border-color-bulma">
                  <div className="p-2 w-100 d-flex">
                    <InputBox
                      id={"p" + pagina + "_input" + (indexInput += 1)}
                      className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-70"
                    />
                  </div>
                </div>
              </div>

              <div className="col-md-4 position-relative justify-content-center align-items-center padding-p31">
                <div className="position-absolute top-0 start-0 translate-middle msp-3 mtp-0 zindex-1"></div>
                <div className="position-absolute flecha-p31 translate-middle msp-3 mtp-15 zindex-1 mtp-10">
                  <img src="images/page_031/flecha_03.png" className="wp-30 giro90-res" alt="" />
                </div>
                <div className="d-flex justify-content-center w-100 invisible-768">
                  <div className="bgc-android18 w-50 rounded-caja ptp-5 pbp-5 color-white fsp-16 f-Ubuntu-M  ">
                    Palabra
                  </div>
                </div>
                <div className="d-flex flex-column center-center mbp-5 mtp-0 w-100 rounded-p-10 bgc-white border-style-solid border-1 border-color-android18">
                  <div className="p-2 w-100 d-flex">
                    <InputBox
                      id={"p" + pagina + "_input" + (indexInput += 1)}
                      className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-70"
                    />
                  </div>
                </div>
              </div>

              <div className="col-md-8 position-relative justify-content-center align-items-center padding-p31">
                <div className="position-absolute top-50 start-100 translate-middle msp-3 mtp-0 zindex-1"></div>
                <div className="d-flex justify-content-center w-100 invisible-768">
                  <div className="bgc-android18 w-30 rounded-caja ptp-5 pbp-5 color-white fsp-16 f-Ubuntu-M  ">
                    Significado
                  </div>
                </div>
                <div className="d-flex flex-column center-center mbp-5 mtp-0 w-100 rounded-p-10 bgc-white border-style-solid border-1 border-color-android18">
                  <div className="p-2 w-100 d-flex">
                    <InputBox
                      id={"p" + pagina + "_input" + (indexInput += 1)}
                      className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-70"
                    />
                  </div>
                </div>
              </div>

              <div className="col-md-4 position-relative justify-content-center align-items-center padding-p31">
                <div className="position-absolute top-0 start-0 translate-middle msp-3 mtp-0 zindex-1"></div>
                <div className="position-absolute flecha-p31 translate-middle msp-3 mtp-15 zindex-1 mtp-10">
                  <img src="images/page_031/flecha_04.png" className="wp-30 giro90-res" alt="" />
                </div>
                <div className="d-flex justify-content-center w-100 invisible-768">
                  <div className="bgc-pidgey w-50 rounded-caja ptp-5 pbp-5 color-white fsp-16 f-Ubuntu-M  ">
                    Palabra
                  </div>
                </div>
                <div className="d-flex flex-column center-center mbp-5 mtp-0 w-100 rounded-p-10 bgc-white border-style-solid border-1 border-color-pidgey">
                  <div className="p-2 w-100 d-flex">
                    <InputBox
                      id={"p" + pagina + "_input" + (indexInput += 1)}
                      className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-70"
                    />
                  </div>
                </div>
              </div>

              <div className="col-md-8 position-relative justify-content-center align-items-center padding-p31">
                <div className="position-absolute top-50 start-100 translate-middle msp-3 mtp-0 zindex-1"></div>
                <div className="d-flex justify-content-center w-100 invisible-768">
                  <div className="bgc-pidgey w-30 rounded-caja ptp-5 pbp-5 color-white fsp-16 f-Ubuntu-M  ">
                    Significado
                  </div>
                </div>
                <div className="d-flex flex-column center-center mbp-5 mtp-0 w-100 rounded-p-10 bgc-white border-style-solid border-1 border-color-pidgey">
                  <div className="p-2 w-100 d-flex">
                    <InputBox
                      id={"p" + pagina + "_input" + (indexInput += 1)}
                      className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-70"
                    />
                  </div>
                </div>
              </div>

              <div className="col-md-4 position-relative justify-content-center align-items-center padding-p31">
                <div className="position-absolute top-0 start-0 translate-middle msp-3 mtp-0 zindex-1"></div>
                <div className="position-absolute flecha-p31 translate-middle msp-3 mtp-15 zindex-1 mtp-10">
                  <img src="images/page_031/flecha_05.png" className="wp-30 giro90-res" alt="" />
                </div>
                <div className="d-flex justify-content-center w-100 invisible-768">
                  <div className="bgc-saitama w-50 rounded-caja ptp-5 pbp-5 color-white fsp-16 f-Ubuntu-M  ">
                    Palabra
                  </div>
                </div>
                <div className="d-flex flex-column center-center mbp-5 mtp-0 w-100 rounded-p-10 bgc-white border-style-solid border-1 border-color-saitama">
                  <div className="p-2 w-100 d-flex">
                    <InputBox
                      id={"p" + pagina + "_input" + (indexInput += 1)}
                      className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-70"
                    />
                  </div>
                </div>
              </div>

              <div className="col-md-8 position-relative justify-content-center align-items-center padding-p31">
                <div className="position-absolute top-50 start-100 translate-middle msp-3 mtp-0 zindex-1"></div>
                <div className="d-flex justify-content-center w-100 invisible-768">
                  <div className="bgc-saitama w-30 rounded-caja ptp-5 pbp-5 color-white fsp-16 f-Ubuntu-M  ">
                    Significado
                  </div>
                </div>
                <div className="d-flex flex-column center-center mbp-5 mtp-0 w-100 rounded-p-10 bgc-white border-style-solid border-1 border-color-saitama">
                  <div className="p-2 w-100 d-flex">
                    <InputBox
                      id={"p" + pagina + "_input" + (indexInput += 1)}
                      className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-70"
                    />
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
            className="row w-100 position-absolute caja-flotante2 p-0 m-0 align-items-end"
            style={{ bottom: 0 }}
          >
            <div className="col-1 col-md-2 p-0 m-0 position-relative">
              <img
                src="images/rotulo_motivacion.svg"
                className="oculto"
                alt=""
              />
              <div className="w-100 hp-15 bgc-yamcha rounded-caja-start"></div>
              <div className="w-100 hp-25 bgc-goten"></div>
            </div>
            <div className="col-1 col-md-2 p-0 m-0 position-relative">
              <img
                src="images/rotulo_planificacion.svg"
                className="oculto"
                alt=""
              />
              <div className="w-100 hp-15 bgc-tshinhan rounded-caja"></div>
              <div className="w-100 hp-25 bgc-bulma"></div>
            </div>
            <div className="col-7 col-md-2 p-0 m-0 position-relative">
              <img
                src="images/rotulo_investigacion.svg"
                className="visible rotulo-etapa position-absolute top-0 start-0"
                alt=""
              />
              <div className="w-100 hp-15 bgc-milk rounded-caja"></div>
              <div className="w-100 hp-25 bgc-android18"></div>
            </div>
            <div className="col-1 col-md-2 p-0 m-0 position-relative">
              <img
                src="images/rotulo_experimentacion.svg"
                className="oculto"
                alt=""
              />
              <div className="w-100 hp-15 bgc-freezer rounded-caja"></div>
              <div className="w-100 hp-25 bgc-pidgey"></div>
            </div>
            <div className="col-1 col-md-2 p-0 m-0 position-relative">
              <img src="images/rotulo_creacion.svg" className="oculto" alt="" />
              <div className="w-100 hp-15 bgc-ash rounded-caja"></div>
              <div className="w-100 hp-25 bgc-saitama"></div>
            </div>
            <div className="col-1 col-md-2 p-0 m-0 position-relative">
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

export default Page031;
