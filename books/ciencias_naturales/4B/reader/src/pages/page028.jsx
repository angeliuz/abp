import React from "react";
import InputBox from "../components/InputBox";
import ModalBook from "../components/ModalBook";
import Check from "../components/Check";

import "./page_028.css";

function Page028(props) {
  const pagina = "028";
  var indexInput = 0;
  const etapa = "3"
  const background = "bgc-android18";
  const color = "color-android18";
  const borderColor = "border-color-android18"
  const borderColorTable = "border-color-android18"
  const bgc_cajas = "bgc-azuka";

  return (
    <div className="wrapper bgc-light">
      <div className="d-flex flex-column align-items-center pbp-20">
        <div className="page bgc-white overflow-hidden position-relative" id={"page_" + pagina} >
          <div className="cabecera-v1 hp-80 bgc-android18"></div>


          <div className="ptp-50 container-titulo-global mbp-0">
            <div className={"f-Ubuntu-B fsp-20 psp-20 text-start lhp-20 " + color}>
              Riesgos en el colegio
            </div>
            <div className="d-flex psp-20">
              {/* <img className="hp-20 align-center mt-3 me-2 mb-2" src="images/page_016/img_001.svg" alt=""  /> */}
              <div className={"f-ccdigitaldelivery-bold fsp-35 " + color}>3</div>
              <div className="f-Ubuntu-R fsp-16 ptp-18 psp-10 pep-10 text-start">
                Marco con un <img src={"images/page_" + pagina + "/img_001.svg"} className="" alt="" /> los riesgos que identifico en mi colegio.
              </div>
              {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image="images/generales/play.svg" clasesImagen="cambio hp-40 mtp-10" className="p-0 px-1" /> */}
              {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image="images/page_007/img_001.png" className="p-0 px-1" /> */}
              {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image="images/page_007/img_001.png" className="p-0 px-1" /> */}
              {/* <ModalBook id={ "p" + pagina + "_book"+ (indexInput+=1) } image="images/page_007/revista65.svg" clasesImagen="hp-40 text-center mtp-10 " className="p-0 px-0" /> */}
            </div>
          </div>



          <div className="global-margin">
            <div className="row ">
              <div className="ptp-0 psp-60  contenedor-pagina">
                <div className="cb-paper">
                  <div className="cb-paper-content f-Ubuntu-L text-start position-relative">
                    <div className="position-absolute top-0 start-100 translate-middle visible-768 zindex-1 msp--10 mtp-50">
                      <img
                        src="images/page_028/img_001.png"
                        className=""
                        alt=""
                      />
                    </div>
                    <div className="position-absolute top-50 start-0 translate-middle visible-768 zindex-1 msp--10 mtp-50">
                      <img
                        src="images/page_028/img_003.png"
                        className=""
                        alt=""
                      />
                    </div>


                    <div className="col-sm-12 col-md-12 position-relative">
                      <div className="d-flex flex-column   psp-10 pep-10 ptp-20 pbp-30 mbp-30 min-hp-200">
                        <div className="d-flex f-Ubuntu-R fsp-20 psp-10 pep-10 mtp-10 text-start">
                          <div className="color-android18 f-ccdigitaldelivery-bold  fsp-16 mep-5">
                            <div className="wp-30 hp-30">
                              <Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check>
                            </div>
                          </div>
                          <div className="f-Ubuntu-R fsp-16 color-dark f-Ubuntu-B w-100 d-flex align-items-center">
                            Los niños suelen correr y sufrir caídas.
                          </div>
                        </div>
                        <div className="d-flex f-Ubuntu-R fsp-20 psp-10 pep-10 mtp-20 text-start">
                          <div className="color-android18 f-ccdigitaldelivery-bold  fsp-16 mep-5">
                            <div className="wp-30 hp-30">
                              <Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check>
                            </div>
                          </div>
                          <div className="f-Ubuntu-R fsp-16 color-dark f-Ubuntu-B w-100 d-flex align-items-center ">
                            Los niños se hacen heridas cuando se caen.
                          </div>
                        </div>
                        <div className="d-flex f-Ubuntu-R fsp-20 psp-10 pep-10 mtp-20 text-start">
                          <div className="color-android18 f-ccdigitaldelivery-bold  fsp-16 mep-5">
                            <div className="wp-30 hp-30">
                              <Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check>
                            </div>
                          </div>
                          <div className="f-Ubuntu-R fsp-16 color-dark f-Ubuntu-B w-100 d-flex align-items-center ">
                            Hay enchufes visibles que necesitan protección.
                          </div>
                        </div>
                        <div className="d-flex f-Ubuntu-R fsp-20 psp-10 pep-10 mtp-20 text-start">
                          <div className="color-android18 f-ccdigitaldelivery-bold  fsp-16 mep-5">
                            <div className="wp-30 hp-30">
                              <Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check>
                            </div>
                          </div>
                          <div className="f-Ubuntu-R fsp-16 color-dark f-Ubuntu-B w-100 d-flex align-items-center ">
                            Llueve periódicamente y el suelo queda resbaladizo.
                          </div>
                        </div>
                        <div className="d-flex f-Ubuntu-R fsp-20 psp-10 pep-10 mtp-20 text-start">
                          <div className="color-android18 f-ccdigitaldelivery-bold  fsp-16 mep-5">
                            <div className="wp-30 hp-30">
                              <Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check>
                            </div>
                          </div>
                          <div className="f-Ubuntu-R fsp-16 color-dark f-Ubuntu-B w-100 d-flex align-items-center ">
                            Son habituales las altas temperaturas.
                          </div>
                        </div>
                        <div className="d-flex f-Ubuntu-R fsp-20 psp-10 pep-10 mtp-20 text-start">
                          <div className="color-android18 f-ccdigitaldelivery-bold  fsp-16 mep-5">
                            <div className="wp-30 hp-30">
                              <Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check>
                            </div>
                          </div>
                          <div className="f-Ubuntu-R fsp-16 color-dark f-Ubuntu-B w-100 d-flex align-items-center ">
                            Son frecuentes las bajas temperaturas.
                          </div>
                        </div>
                        <div className="d-flex f-Ubuntu-R fsp-20 psp-10 pep-10 mtp-20 text-start">
                          <div className="color-android18 f-ccdigitaldelivery-bold  fsp-16 mep-5">
                            <div className="wp-30 hp-30">
                              <Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check>
                            </div>
                          </div>
                          <div className="f-Ubuntu-R fsp-16 color-dark f-Ubuntu-B w-100 d-flex align-items-center ">
                            Hay material inflamable en lugares transitados.
                          </div>
                        </div>
                        <div className="d-flex f-Ubuntu-R fsp-20 psp-10 pep-10 mtp-20 text-start">
                          <div className="color-android18 f-ccdigitaldelivery-bold  fsp-16 mep-5">
                            <div className="wp-30 hp-30">
                              <Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check>
                            </div>
                          </div>
                          <div className="f-Ubuntu-R fsp-16 color-dark f-Ubuntu-B w-100 d-flex align-items-center ">
                            Hay escaleras o lugares en altura.
                          </div>
                        </div>
                        <div className="d-flex f-Ubuntu-R fsp-20 psp-10 pep-10 mtp-20 text-start">
                          <div className="color-android18 f-ccdigitaldelivery-bold  fsp-16 mep-5">
                            <div className="wp-30 hp-30">
                              <Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check>
                            </div>
                          </div>
                          <div className="f-Ubuntu-R fsp-16 color-dark f-Ubuntu-B w-100 d-flex align-items-center ">
                            El colegio está cerca del mar.
                          </div>
                        </div>
                        <div className="d-flex f-Ubuntu-R fsp-20 psp-10 pep-10 mtp-20 text-start">
                          <div className="color-android18 f-ccdigitaldelivery-bold  fsp-16 mep-5">
                            <div className="wp-30 hp-30">
                              <Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check>
                            </div>
                          </div>
                          <div className="f-Ubuntu-R fsp-16 color-dark f-Ubuntu-B w-100 d-flex align-items-center ">
                            Suelo sentir sismos fuertes.
                          </div>
                        </div>
                        <div className="d-flex f-Ubuntu-R fsp-20 psp-10 pep-10 mtp-20 text-start">
                          <div className="color-android18 f-ccdigitaldelivery-bold  fsp-16 mep-5">
                            <div className="wp-30 hp-30">
                              <Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check>
                            </div>
                          </div>
                          <div className="f-Ubuntu-R fsp-16 color-dark f-Ubuntu-B w-100 d-flex align-items-center ">
                            El colegio se ubica en una zona cercana a un volcán.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="ptp-10 container-titulo-global mbp-0">
            <div className="d-flex">

              <div className="f-ccdigitaldelivery-bold fsp-35 color-android18">
                4
              </div>
              <div className="f-Ubuntu-R fsp-16 ptp-18 psp-10 pep-10 text-start">
                Hago una lista con otras situaciones de riesgo que detecté.
              </div>
            </div>
          </div>

          <div className=" msp-60 mep-60 mbp-50">
            <div className="row">
              <div className="col-md-6 col-sm-12 position-relative">

                <div className="bgc-white rounded-caja-start border-style-solid  border-color-pidgey border-1 w-100 p-2 f-Ubuntu-L fsp-15 mbp-20">

                  <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-200" />
                </div>
              </div>
              <div className="col-md-6 col-sm-12 position-relative">
                <div className="position-absolute top-0 start-100 translate-middle msp--50 mtp--100 visible-768" style={{ zIndex: 4 }}><img src="images/page_028/img_004.png" className="wp-120" alt="" />
                </div>
                <div className="bgc-white rounded-caja-start border-style-solid  border-color-pidgey border-1 w-100 p-2 f-Ubuntu-L fsp-15 mbp-20">

                  <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-200" />
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
