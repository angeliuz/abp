import React from "react";
import InputBox from "../components/InputBox";
import ModalBook from "../components/ModalBook";

import "./page_021.css";

function Page021(props) {

  const pagina = "021";
  var indexInput = 0;

  const etapa = "3"
  const background = "bgc-android18";
  const color = "color-android18";
  const borderColor = "border-color-android18"
  const borderColorTabla = "border-color-azuka"
  const bgc_cajas = "bgc-azuka";

  return (
    <div className="wrapper bgc-light">
      <div className="d-flex flex-column align-items-center pbp-20">
        <div className="page bgc-white overflow-hidden position-relative" id={"page_" + pagina}>
          {/* BEGIN CABECERA VERSIÓN 2 */}
          <div className="cabecera-v2 bgc-android18 d-flex flex-column">
            <div className="d-flex contenedor-cabecera-v2 ptp-40 psp-30 pep-30">
              <div className="caja-seccion wp-160 hp-70 text-center fsp-24 f-IntroRustG-Base color-dark">SESIÓN 4</div>
              <div className="section-name d-flex align-items-center fsp-24 fw-700 f-Ubuntu-M color-white">Renovables y no renovables</div>
            </div>
            <div className="d-flex contenedor-cabecera-v2 ptp-10 psp-30 pep-30 align-self-center justify-content-between w-90">
              <div className="p-2 align-self-center f-colby-compres-bold fsp-15 lh-sm text-white text-center">
                Mis objetivos <br />en  esta sesión son:
              </div>
              <div className="p-0 align-self-center">
                <img src="images/page_021/flecha.svg" className="wp-40 arrow-global" alt="" />
              </div>
              <div className="p-2 align-self-center f-colby-compres-bold fsp-15 lh-sm text-white text-center">
                Identificar las características<br />de las energías renovables<br /> y no renovables
              </div>
              <div className="p-0 align-self-center">
                <img src="images/page_021/flecha1.svg" className="wp-40 arrow-global rotate-90" alt="" />
              </div>
              <div className="p-2 align-self-center f-colby-compres-bold fsp-15 lh-sm text-white text-center">
                Completar un diagrama<br /> con las consecuencias del<br />uso de las energías
              </div>
              <div className="p-0 align-self-center">
                <img src="images/page_021/flecha.svg" className="wp-40 arrow-global" alt="" />
              </div>
              <div className="p-3 align-self-center f-colby-compres-bold fsp-15 lh-sm text-center text-white">
                Completar un<br /> crucigrama
              </div>
              <div className="p-0 align-self-center">
                <img src="images/page_021/flecha1.svg" className="wp-40 arrow-global rotate-90" alt="" />
              </div>
              <div className="p-2 align-self-center f-colby-compres-bold fsp-15 lh-sm text-white text-center">
                Construir un<br /> organizador gráfico
              </div>
            </div>
          </div>
          {/* END CABECERA VERSIÓN 2 */}
          <div className="ptp-10 container-titulo-global ">
            <div className="d-flex">
              {/* <img className="hp-20 align-center mt-3 me-2 mb-2" src="images/page_053/g.svg" alt="" /> */}
              <div className="f-ccdigitaldelivery-bold fsp-35 color-android18">1</div>
              <div className="f-Ubuntu-R fsp-16 ptp-18 psp-10 pep-10 text-start">Leo los reportajes de la revista. Luego, realizo las actividades.</div>
              {/* <ModalBook id={ "p" + pagina + "_book"+ (indexInput+=1) } image="images/page_053/revista.svg" clasesImagen="hp-40 text-center mtp-10 " className="p-0 px-0" /> */}
            </div>
          </div>
          <div className="ptp-10 container-titulo-global">
            <div className="d-flex">
              {/* <img className="hp-20 align-center mt-3 me-2 mb-2" src="images/page_053/g.svg" alt=""  /> */}
              <div className="f-ccdigitaldelivery-bold fsp-16 color-android18">a.</div>
              <div className="f-Ubuntu-L fsp-16 psp-10 pep-10 text-start">Identifico las características de las fuentes de energías renovables y no renovables.</div>
              <ModalBook id={"p" + pagina + "_book" + (indexInput += 1)} colorUnidad={background} pagina={"82"} image={"images/page_" + pagina + "/img_003.svg"} clasesImagen="hp-40 text-center mtp-10 " className="p-0 px-0" />
            </div>
          </div>

          <div className="d-flex justify-content-center msp-50 w-100 ">
            <div className="bgc-ken w-30 rounded-caja ptp-5 pbp-5 color-white fsp-15 f-Ubuntu-M ">
              Energía
            </div>
          </div>
          <div className="d-flex msp-60 mep-60 mbp-10 bgc-calypso8 rounded-p-20 border-style-solid border-1 border-color-kai">

            <div className="row p-0 m-0 w-100">
              <div className="col-12 p-0 m-0 position-relative">
                <div className="position-absolute top-0 start-0 translate-middle mtp-100 msp-0 zindex-1 visible-768"><img src="images/page_021/img_004.png" className=" " alt="" /></div>
                <div className="position-absolute top-100 start-100 translate-middle mtp-0 msp--20 zindex-1 visible-768"><img src="images/page_021/img_006.png" className=" " alt="" /></div>

                <div className="row psp-20 pep-20 ptp-20">
                  <div className="col-4 d-flex align-items-stretch"></div>
                  <div className="col-4 d-flex align-items-stretch center-center">
                    <div className="bgc-freezer w-90 rounded-caja ptp-5 pbp-5 color-black fsp-15 f-Ubuntu-M">Renovable</div>
                  </div>
                  <div className="col-4 d-flex align-items-stretch center-center">
                    <div className="bgc-freezer w-90 rounded-caja ptp-5 pbp-5 color-black fsp-15 f-Ubuntu-M">No Renovable</div>
                  </div>
                </div>

                <div className="row psp-20 pep-20 pbp-20">
                  <div className="col-4 d-flex align-items-stretch">
                    <div className="bgc-sonic rounded-p-5 w-100 h-100 psp-10 pep-10 d-flex center-center">
                      <div className="f-Ubuntu-L fsp-16 text-center w-100 p-1">Se caracteriza por…</div>
                    </div>
                  </div>
                  <div className="col-4 d-flex align-items-stretch position-relative">
                    <div className="triangulo-p21"></div>
                    <div className="bgc-white rounded-p-5 w-100 h-100 psp-10 pep-10 pbp-2">
                      <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 h-100 min-hp-150" />
                    </div>
                  </div>
                  <div className="col-4 d-flex align-items-stretch position-relative">
                    <div className="triangulo-p21"></div>
                    <div className="bgc-white rounded-p-5 w-100 h-100 psp-10 pep-10 pbp-2">
                      <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 h-100 min-hp-150" />
                    </div>
                  </div>
                </div>

                <div className="row psp-20 pep-20 pbp-20">
                  <div className="col-4 d-flex align-items-stretch">
                    <div className="bgc-sonic rounded-p-5 w-100 h-100 psp-10 pep-10 d-flex center-center">
                      <div className="f-Ubuntu-L fsp-16 text-center w-100 p-1">¿Cuáles son?</div>
                    </div>
                  </div>
                  <div className="col-4 d-flex align-items-stretch position-relative">
                    <div className="triangulo-p21"></div>
                    <div className="bgc-white rounded-p-5 w-100 h-100 psp-10 pep-10 pbp-2">
                      <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 h-100 min-hp-150" />
                    </div>
                  </div>
                  <div className="col-4 d-flex align-items-stretch position-relative">
                    <div className="triangulo-p21"></div>
                    <div className="bgc-white rounded-p-5 w-100 h-100 psp-10 pep-10 pbp-2">
                      <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 h-100 min-hp-150" />
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>

          <div className="ptp-10 container-titulo-global">
            <div className="d-flex">
              {/* <img className="hp-20 align-center mt-3 me-2 mb-2" src="images/page_053/g.svg" alt=""  /> */}
              <div className="f-ccdigitaldelivery-bold fsp-16 color-android18">b.</div>
              <div className="f-Ubuntu-L fsp-16 psp-10 pep-10 text-start">Completo.</div>
              {/* <ModalBook id={"p" + pagina + "_book" + (indexInput += 1)} image="images/page_021/img_003.svg" clasesImagen="hp-40 text-center " className="p-0 px-0" /> */}
            </div>
          </div>


          <div className="d-flex msp-60 mep-60 mbp-100 mtp-60">

            <div className="row m-0 psp-10 pep-10 ptp-0 pbp-10 rounded-p-20 w-100">

              <div className="col-sm-12 col-md-6 position-relative mbp-10">

                <div className="d-flex mbp-20 mtp-10 w-100">
                  <div className="position-relative p-2 min-hp-100 w-100 border-style-solid border-2 rounded-p-10 border-color-genos bgc-genos">
                    <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-140" />
                    <div className="position-absolute top-0 start-50 translate-middle wp-300 mtp--10 bgc-yamcha psp-5 pep-5 ptp-5 pbp-5 rounded-p-20 ">
                      <div className="f-Ubuntu-L color-black fsp-16">¿Qué palabra me ha llamado la atención?</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-12 col-md-6 position-relative">

                <div className="d-flex mbp-20 mtp-10 w-100">
                  <div className="p-2 min-hp-100 w-100 border-style-solid border-2 rounded-p-10 border-color-ermac bgc-ermac">
                    <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-140" />
                    <div className="position-absolute top-0 start-50 translate-middle wp-300 bgc-reptile psp-5 pep-5 ptp-5 pbp-5 rounded-p-20 ">
                      <div className="f-Ubuntu-L color-black fsp-16">¿Qué idea me pareció interesante?</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-12 col-lg-12 position-relative ">
                {/* <div className="position-absolute top-0 start-0 translate-middle msp-0 mtp--20 visible-768"><img src="images/page_054/img_002.png" className="wp-50 " alt="" /></div> */}
                {/* <div className="position-absolute top-50 start-100 translate-middle msp-0 mtp-0 visible-768"><img src="images/page_054/img_003.png" className="wp-20 " alt="" /></div> */}
                <div className="d-flex mbp-20 mtp-10 w-100 mtp-20">
                  <div className="p-2 min-hp-100 w-100 border-style-solid border-2 rounded-p-10 border-color-bobafett bgc-bobafett">
                    {/* <div className="f-Ubuntu-L fsp-16 msp-10 mep-10 text-center">Registro con mi grupo una conclusión general a partir de todas las entrevistas.</div> */}
                    <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-140" />
                    <div className="position-absolute top-0 start-0 translate-middle wp-350 bgc-jade psp-5 pep-5 ptp-5 pbp-5 rounded-p-20 msp-195 mtp-10 ">
                      <div className="f-Ubuntu-L color-black fsp-16">¿Qué frase me ayudó a entender mejor el tema?</div>
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
          {/* END PIE DE PAGINA */}

        </div>
      </div>
    </div >
  );
}

export default Page021;
