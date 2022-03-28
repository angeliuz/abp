import React from "react";
import InputBox from "../components/InputBox";
import ModalBook from "../components/ModalBook";
import Check2 from "../components/Check2";

import "./page_014.css";

function Page014(props) {

  const pagina = "014";
  var indexInput = 0;
  const etapa = "2"
  const background = "bgc-bulma";
  const color = "color-bulma";
  const borderColor = "border-color-bulma"
  const bgc_cajas = "bgc-draco";


  return (

    <div className="wrapper bgc-light">
      <div className="d-flex flex-column align-items-center pbp-20">
        <div className="page bgc-white overflow-hidden position-relative" id={"page_" + pagina}>
          {/* BEGIN CABECERA VERSIÓN 2 */}
          <div className={"cabecera-v1 hp-80 " + background}>

          </div>
          {/* END CABECERA VERSIÓN 2 */}
          {/* BEGIN TITULO */}
          <div className="ptp-20 container-titulo-global mbp-0">
            <div className="d-flex psp-20">
              {/* <img className="hp-20 align-center mt-3 me-2 mb-2" src={"images/page_" + pagina + "/img_001.svg"} alt="" /> */}
              <div className={"f-ccdigitaldelivery-bold fsp-35 " + color}>
                2
              </div>
              <div className="f-Ubuntu-R fsp-16 ptp-18 psp-10 pep-10 text-start">
                Resuelvo los pasatiempos y completo.
              </div>
              {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image={"images/generales/play.svg"} clasesImagen="cambio hp-40 mtp-10" className="p-0 px-1" /> */}
              {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image={"images/page_"+pagina+"/img_001.png"} className="p-0 px-1" /> */}
              <ModalBook id={"p" + pagina + "_book" + (indexInput += 1)} colorUnidad={background} pagina={"80"} image={"images/page_" + pagina + "/img_001.svg"} clasesImagen="hp-40 text-center mtp-10 " className="p-0 px-0" />
            </div>
          </div>
          {/* END TITULO */}
          {/* BEGIN CONTENIDO */}
          <div className="psp-60 pep-60 ptp-40">
            <div className="bgc-draco rounded-p-30 position-relative ptp-40 psp-40 pep-40 pbp-20">

              <div className="position-absolute top-0 start-50 translate-middle mtp-0 msp-0 bgc-bulma psp-20 pep-20 rounded-p-20 mnwp-400">
                <div className="f-Ubuntu-R color-white py-3">En <b>derechos fundamentales</b> me considero...</div>
              </div>

              <div className="d-flex justify-content-between psp-20 pep-20">
                <div className="f-colby-compres-bold fsp-22 color-bulma">Inexperto</div>
                <div className="f-colby-compres-bold fsp-22 color-bulma">Experto</div>
              </div>
              <div className="border-style-solid border-1 border-color-bulma w-100 position-relative">
                <div className="position-absolute top-50 start-0 translate-middle msp-4 mtp--1 zindex-1"><img src={"images/page_" + pagina + "/izq_bulma.svg"} className="wp-15" alt="" /></div>
                <div className="position-absolute top-50 start-100 translate-middle msp--4  zindex-1"><img src={"images/page_" + pagina + "/der_bulma.svg"} className="wp-15 mtp-2" alt="" /></div>
              </div>
              <div className="d-flex justify-content-center">

                <div className="w-100 mtp-27 d-flex justify-content-center">
                  <div className="cuadrado-p14 bgc-white border-style-solid border-1 border-color-bulma position-relative">
                    <Check2 id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check2>
                    <div className="position-absolute top-0 start-50 translate-middle mtp--15 border-style-solid border-1 border-color-bulma hp-30"></div>
                  </div>
                </div>

                <div className="w-100 mtp-27 d-flex justify-content-center">
                  <div className="cuadrado-p14 bgc-white border-style-solid border-1 border-color-bulma position-relative">
                    <Check2 id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check2>
                    <div className="position-absolute top-0 start-50 translate-middle mtp--15 border-style-solid border-1 border-color-bulma hp-30"></div>
                  </div>
                </div>

                <div className="w-100 mtp-27 d-flex justify-content-center">
                  <div className="cuadrado-p14 bgc-white border-style-solid border-1 border-color-bulma position-relative">
                    <Check2 id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check2>
                    <div className="position-absolute top-0 start-50 translate-middle mtp--15 border-style-solid border-1 border-color-bulma hp-30"></div>
                  </div>
                </div>

                <div className="w-100 mtp-27 d-flex justify-content-center">
                  <div className="cuadrado-p14 bgc-white border-style-solid border-1 border-color-bulma position-relative">
                    <Check2 id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check2>
                    <div className="position-absolute top-0 start-50 translate-middle mtp--15 border-style-solid border-1 border-color-bulma hp-30"></div>
                  </div>
                </div>

                <div className="w-100 mtp-27 d-flex justify-content-center">
                  <div className="cuadrado-p14 bgc-white border-style-solid border-1 border-color-bulma position-relative">
                    <Check2 id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check2>
                    <div className="position-absolute top-0 start-50 translate-middle mtp--15 border-style-solid border-1 border-color-bulma hp-30"></div>
                  </div>
                </div>

                <div className="w-100 mtp-27 d-flex justify-content-center">
                  <div className="cuadrado-p14 bgc-white border-style-solid border-1 border-color-bulma position-relative">
                    <Check2 id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check2>
                    <div className="position-absolute top-0 start-50 translate-middle mtp--15 border-style-solid border-1 border-color-bulma hp-30"></div>
                  </div>
                </div>

                <div className="w-100 mtp-27 d-flex justify-content-center">
                  <div className="cuadrado-p14 bgc-white border-style-solid border-1 border-color-bulma position-relative">
                    <Check2 id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check2>
                    <div className="position-absolute top-0 start-50 translate-middle mtp--15 border-style-solid border-1 border-color-bulma hp-30"></div>
                  </div>
                </div>

                <div className="w-100 mtp-27 d-flex justify-content-center">
                  <div className="cuadrado-p14 bgc-white border-style-solid border-1 border-color-bulma position-relative">
                    <Check2 id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check2>
                    <div className="position-absolute top-0 start-50 translate-middle mtp--15 border-style-solid border-1 border-color-bulma hp-30"></div>
                  </div>
                </div>

                <div className="w-100 mtp-27 d-flex justify-content-center">
                  <div className="cuadrado-p14 bgc-white border-style-solid border-1 border-color-bulma position-relative">
                    <Check2 id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check2>
                    <div className="position-absolute top-0 start-50 translate-middle mtp--15 border-style-solid border-1 border-color-bulma hp-30"></div>
                  </div>
                </div>

              </div>
            </div>
          </div>

          <div className="psp-60 pep-60 ptp-50">
            <div className="bgc-windu rounded-p-30 position-relative ptp-40 psp-40 pep-40 pbp-20">

              <div className="position-absolute top-0 start-50 translate-middle mtp-0 msp-0 bgc-saitama psp-20 pep-20 rounded-p-20 mnwp-400">
                <div className="f-Ubuntu-R color-white py-3">En <b>obras de arte visual </b> me considero...</div>
              </div>

              <div className="d-flex justify-content-between psp-20 pep-20">
                <div className="f-colby-compres-bold fsp-22 color-saitama">Inexperto</div>
                <div className="f-colby-compres-bold fsp-22 color-saitama">Experto</div>
              </div>
              <div className="border-style-solid border-1 border-color-saitama w-100 position-relative">
                <div className="position-absolute top-50 start-0 translate-middle msp-4 mtp--1 zindex-1"><img src={"images/page_" + pagina + "/izq_saitama.svg"} className="wp-15" alt="" /></div>
                <div className="position-absolute top-50 start-100 translate-middle msp--4  zindex-1"><img src={"images/page_" + pagina + "/der_saitama.svg"} className="wp-15 mtp-2" alt="" /></div>
              </div>
              <div className="d-flex justify-content-center">

                <div className="w-100 mtp-27 d-flex justify-content-center">
                  <div className="cuadrado-p14 bgc-white border-style-solid border-1 border-color-saitama position-relative">
                    <Check2 id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check2>
                    <div className="position-absolute top-0 start-50 translate-middle mtp--15 border-style-solid border-1 border-color-saitama hp-30"></div>
                  </div>
                </div>

                <div className="w-100 mtp-27 d-flex justify-content-center">
                  <div className="cuadrado-p14 bgc-white border-style-solid border-1 border-color-saitama position-relative">
                    <Check2 id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check2>
                    <div className="position-absolute top-0 start-50 translate-middle mtp--15 border-style-solid border-1 border-color-saitama hp-30"></div>
                  </div>
                </div>

                <div className="w-100 mtp-27 d-flex justify-content-center">
                  <div className="cuadrado-p14 bgc-white border-style-solid border-1 border-color-saitama position-relative">
                    <Check2 id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check2>
                    <div className="position-absolute top-0 start-50 translate-middle mtp--15 border-style-solid border-1 border-color-saitama hp-30"></div>
                  </div>
                </div>

                <div className="w-100 mtp-27 d-flex justify-content-center">
                  <div className="cuadrado-p14 bgc-white border-style-solid border-1 border-color-saitama position-relative">
                    <Check2 id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check2>
                    <div className="position-absolute top-0 start-50 translate-middle mtp--15 border-style-solid border-1 border-color-saitama hp-30"></div>
                  </div>
                </div>

                <div className="w-100 mtp-27 d-flex justify-content-center">
                  <div className="cuadrado-p14 bgc-white border-style-solid border-1 border-color-saitama position-relative">
                    <Check2 id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check2>
                    <div className="position-absolute top-0 start-50 translate-middle mtp--15 border-style-solid border-1 border-color-saitama hp-30"></div>
                  </div>
                </div>

                <div className="w-100 mtp-27 d-flex justify-content-center">
                  <div className="cuadrado-p14 bgc-white border-style-solid border-1 border-color-saitama position-relative">
                    <Check2 id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check2>
                    <div className="position-absolute top-0 start-50 translate-middle mtp--15 border-style-solid border-1 border-color-saitama hp-30"></div>
                  </div>
                </div>

                <div className="w-100 mtp-27 d-flex justify-content-center">
                  <div className="cuadrado-p14 bgc-white border-style-solid border-1 border-color-saitama position-relative">
                    <Check2 id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check2>
                    <div className="position-absolute top-0 start-50 translate-middle mtp--15 border-style-solid border-1 border-color-saitama hp-30"></div>
                  </div>
                </div>

                <div className="w-100 mtp-27 d-flex justify-content-center">
                  <div className="cuadrado-p14 bgc-white border-style-solid border-1 border-color-saitama position-relative">
                    <Check2 id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check2>
                    <div className="position-absolute top-0 start-50 translate-middle mtp--15 border-style-solid border-1 border-color-saitama hp-30"></div>
                  </div>
                </div>

                <div className="w-100 mtp-27 d-flex justify-content-center">
                  <div className="cuadrado-p14 bgc-white border-style-solid border-1 border-color-saitama position-relative">
                    <Check2 id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check2>
                    <div className="position-absolute top-0 start-50 translate-middle mtp--15 border-style-solid border-1 border-color-saitama hp-30"></div>
                  </div>
                </div>

              </div>
            </div>
          </div>

          <div className="ptp-50 container-titulo-global mbp-0">
            <div className="d-flex psp-20">
              <img className="hp-20 align-center mt-3 me-2 mb-2" src={"images/page_" + pagina + "/img_004.svg"} alt="" />
              <div className={"f-ccdigitaldelivery-bold fsp-35 " + color}>
                3
              </div>
              <div className="f-Ubuntu-R fsp-16 ptp-18 psp-10 pep-10 text-start">
                Ahora que tengo más información, pienso en qué más necesito saber para crear nuestra obra.
              </div>
              {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image={"images/generales/play.svg"} clasesImagen="cambio hp-40 mtp-10" className="p-0 px-1" /> */}
              {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image={"images/page_"+pagina+"/img_001.png"} className="p-0 px-1" /> */}
              {/* <ModalBook id={ "p" + pagina + "_book"+ (indexInput+=1) } image={"images/page_"+pagina+"/revista65.svg"} clasesImagen="hp-40 text-center mtp-10 " className="p-0 px-0" /> */}
            </div>
          </div>

          <div className="psp-60 pep-80 ptp-20 pbp-70">
            <div className="border-style-solid border-1 rounded-p-20 psp-20 pep-10 ptp-10 pbp-5 position-relative">
              <div className="bgc-sindel p-3 rounded-p-20">
                <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-360" />
              </div>
              <div className="position-absolute top-100 start-0 translate-middle msp-0 mtp--80 zindex-1"><img src={"images/page_" + pagina + "/img_005.png"} className="wp-70" alt="" /></div>
              <div className="position-absolute top-100 start-100 translate-middle msp-0 mtp--50 zindex-1"><img src={"images/page_" + pagina + "/img_006.png"} className="wp-60" alt="" /></div>
            </div>
          </div>



          {/* END CONTENIDO */}


          {/* BEGIN PIE DE PAGINA */}
          <div className="d-flex hp-90 caja-flotante p-0 m-0 position-absolute justify-content-end align-items-end zindex-2" style={{ bottom: 70, right: 0 }}>
            <div className="f-Ubuntu-M fsp-10 position-absolute mbp-60" style={{ transform: `rotate(270deg)`, color: "dark" }}>
              ABP &copy; SM
            </div>
            <div className="bgc-boros wp-50 hp-30 f-Ubuntu-M fsp-20 psp-5">{props.numeroPagina(pagina)}</div>
          </div>
          <div className="row position-absolute caja-flotante2 p-0 m-0 align-items-end" style={{ bottom: 0 }}>

            <div className="col-1 position-relative col-sm-2 p-0 m-0">
              <img src="images/rotulo_motivacion.svg" className="oculto" alt="" />
              <div className="w-100 hp-15 bgc-yamcha rounded-caja-start"></div>
              <div className="w-100 hp-25 bgc-goten"></div>
            </div>
            <div className="col-7 position-relative col-sm-2 p-0 m-0">
              <img src="images/rotulo_planificacion.svg" className="visible rotulo-etapa position-absolute top-0 start-0" alt="" />
              <div className="w-100 hp-15 bgc-tshinhan rounded-caja"></div>
              <div className="w-100 hp-25 bgc-bulma"></div>
            </div>
            <div className="col-1 position-relative col-sm-2 p-0 m-0">
              <img src="images/rotulo_investigacion.svg" className="oculto" alt="" />
              <div className="w-100 hp-15 bgc-milk rounded-caja"></div>
              <div className="w-100 hp-25 bgc-android18"></div>
            </div>
            <div className="col-1 position-relative col-sm-2 p-0 m-0">
              <img src="images/rotulo_experimentacion.svg" className="oculto" alt="" />
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
          {/* END PIE DE PAGINA */}

        </div>
      </div>
    </div>

  );
}

export default Page014;
