import React from "react";
import InputBox from "../components/InputBox";
import ModalBook from "../components/ModalBook";

import "./page_022.css";

function Page022(props) {
  const pagina = "022";
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

          <div className="ptp-30 container-titulo-global mbp-20">
            <div
              className={"f-Ubuntu-B fsp-20 psp-0 text-start lhp-20 " + color}
            >
              ¡Tenemos derechos!
            </div>
            <div className="d-flex">
              {/* <img className="hp-20 align-center mt-3 me-2 mb-2" src={"images/page_"+pagina+"/img_001.svg"} alt=""  /> */}
              <div className={"f-ccdigitaldelivery-bold fsp-35 " + color}>
                2
              </div>
              <div className="f-Ubuntu-R fsp-16 ptp-18 psp-10 pep-10 text-start">
                Leo la revista y contesto.
              </div>
              {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image="images/generales/play.svg" clasesImagen="cambio hp-40 mtp-10" className="p-0 px-1" /> */}
              {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image="images/page_007/img_001.png" className="p-0 px-1" /> */}
              {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image="images/page_007/img_001.png" className="p-0 px-1" /> */}
              <ModalBook id={"p" + pagina + "_book" + (indexInput += 1)} colorUnidad={background} pagina={"64"} image={"images/page_" + pagina + "/img_001.svg"} clasesImagen="hp-40 text-center mtp-10" className="p-0 px-0" />
            </div>
          </div>

          <div className="d-flex psp-60 pep-60">
            <div className="row  w-100">
              <div className="col-3"></div>
              <div className="col-6">
                <div className="w-100 bgc-beethoven border-color-ken border-style-solid border-2 f-Ubuntu-R fsp-18 ptp-10 pbp-10 psp-10 pep-10 text-center mtp-10 rounded-p-10">
                  Los dos derechos que más me llamaron la atención son…
                </div>
              </div>
              <div className="col-3"></div>

              <div className="col-md-6 col-sm-12 ">
                <div className="bgc-white rounded-p-10 border-color-ken border-style-solid border-2 mtp-30 msp-20">
                  <div className="d-flex ptp-0 ">
                    <div className="px-1 flex-shrink-1 f-Ubuntu-M fsp-30 color-pidgey">
                      1.
                    </div>
                    <div className="px-1 w-100">
                      <InputBox
                        id={"p" + pagina + "_input" + (indexInput += 1)}
                        className="max-wp-250 p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-90"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-6 col-sm-12">
                <div className="bgc-white rounded-p-10  border-style-solid border-2 mtp-30 border-color-ken msp-20">
                  <div className="d-flex ptp-0 ">
                    <div className="px-1 flex-shrink-1 f-Ubuntu-M fsp-30 color-pidgey">
                      2.
                    </div>
                    <div className="px-1 w-100">
                      <InputBox
                        id={"p" + pagina + "_input" + (indexInput += 1)}
                        className="max-wp-250 p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-90"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="ptp-10 container-titulo-global msp--55 mbp-0">
                <div className="d-flex msp-10">
                  <img
                    className="hp-20 align-center mt-3 me-2 mb-2"
                    src="images/page_022/img_002.svg"
                    alt=""
                  />
                  <div className="f-ccdigitaldelivery-bold fsp-35 color-android18">
                    3
                  </div>
                  <div className="f-Ubuntu-R fsp-16 ptp-18 psp-10 pep-10 text-start">
                    Leo la revista y completo.
                  </div>
                  <ModalBook id={"p" + pagina + "_book" + (indexInput += 1)} colorUnidad={background} pagina={"66"} image={"images/page_" + pagina + "/img_003.svg"} clasesImagen="hp-40 text-center mtp-10" className="p-0 px-0" />
                </div>
              </div>
            </div>
          </div>

          <div className="d-flex flex-column position-relative msp-60 mep-60 mtp-30">
            <div className="col-md-12 col-lg-12 position-relative">
              <div className="position-absolute top-0 start-100 translate-middle msp--100 mtp-50 visible-768">
                <img
                  src="images/page_022/img_004.png"
                  className="  msp-180 mbp-90"
                  alt=""
                />
              </div>

              <div className="d-flex flex-column mbp-20 mtp-20 p-2 w-100 border-style-solid border-2 border-color-dark bgc-white bgc-azuka">
                <div className="col-md-12 col-lg-12 position-relative text-start f-Ubuntu-R fsp-15 psp-10">
                  Opinamos que esta noticia…
                </div>
                <InputBox
                  id={"p" + pagina + "_input" + (indexInput += 1)}
                  className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-250"
                />
              </div>
            </div>
          </div>

          {/* <div className="d-flex flex-column position-relative msp-60 mep-60 mtp-30">
            <div className="position-absolute libro">
              <img
                src="images/page_022/img_004.png"
                className="  msp-180 mbp-90"
                alt=""
              />
            </div>
            <div className="borde-22-2 p-3 hp-250 w-100 ">
              <div></div>
              <div className="f-Ubuntu-L text-start fsp-16 lh-sm  mbp-30">
                Opinamos que esta noticia…
              </div>

              <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-170"/>
            </div>
          </div> */}

          <div className="ptp-10 container-titulo-global mbp-0">
            <div className="d-flex">
              <div className="f-ccdigitaldelivery-bold fsp-35 color-android18">
                4
              </div>
              <div className="f-Ubuntu-R fsp-16 ptp-18 psp-10 pep-10 text-start">
                Buscamos un libro que hable sobre los derechos de la niñez para
                conocer más sobre ellos.
              </div>
              <ModalBook
                id={"p" + pagina + "_book" + (indexInput += 1)}
                clasesImagen="hp-40 text-center mtp-15 msp--10"
                className="p-0 px-0"
              />
            </div>
          </div>

          <div className="position-relative msp-60 mep-60 mtp-30">
            <div className="row">
              <div className="col-sm-12 col-md-6 position-relative">
                <div className="position-absolute top-0 start-0 translate-middle mtp-80 msp--100">
                  <img
                    src="images/page_022/img_006.png"
                    className="  msp-180 mbp-90"
                    alt=""
                  />
                </div>
                <div className="position-absolute top-0 start-50 translate-middle-x  ">
                  <img
                    src="images/page_022/img_005.png"
                    className="hp-35"
                    alt=""
                  />
                </div>
                <div className="border-style-solid border-4 border-color-naraku w-100 p-2 mtp-20 mbp-80">
                  <div className="f-Ubuntu-L text-start fsp-16 lh-sm ">
                    El libro que encontramos es…
                  </div>

                  <InputBox
                    id={"p" + pagina + "_input" + (indexInput += 1)}
                    className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-150"
                  />
                </div>
              </div>

              <div className="col-sm-12 col-md-6 position-relative mbp-80">
                <div className="position-absolute top-0 start-50 translate-middle-x  ">
                  <img
                    src="images/page_022/img_005.png"
                    className="hp-35"
                    alt=""
                  />
                </div>
                <div className="border-style-solid border-4 border-color-naraku w-100 p-2 mtp-20">
                  <div className="f-Ubuntu-L text-start fsp-16 lh-sm ">
                    En él descubrimos…
                  </div>

                  <InputBox
                    id={"p" + pagina + "_input" + (indexInput += 1)}
                    className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-150"
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

export default Page022;
