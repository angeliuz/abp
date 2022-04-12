import React from "react";
import InputBox from "../components/InputBox";

import "./page_008.css";

function Page008(props) {

  const pagina = "008";
  var indexInput = 0;
  const etapa = "1"
  const background = "bgc-goten";
  const color = "color-goten";
  const borderColor = "border-color-goten"
  const bgc_cajas = "bgc-genos";

  return (
    <div className="wrapper bgc-light">
      <div className="d-flex flex-column align-items-center pbp-20">
        <div className="page bgc-white overflow-hidden position-relative" id={"page_" + pagina}>
          <div className={"cabecera-v1 hp-80 " + background}>
          </div>

          <div className="msp-60 mep-60 mtp-20 mbp-10">
            <div className="row p-0 m-0">
              <div className="col-sm-12 col-md-3 position-relative"></div>
              <div className="container-titulo-global mbp-0 mbp-20">
                <div className="d-flex psp-20">
                  {/* <img className="hp-20 align-center mt-3 me-2 mb-2" src={"images/page_"+pagina+"/img_.svg"} alt=""  /> */}
                  <div className={"f-ccdigitaldelivery-bold fsp-35 " + color}>
                    2
                  </div>
                  <div className="f-Ubuntu-R fsp-16 ptp-18 psp-10 pep-10 text-start">
                    Completo.
                  </div>
                  {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image={"images/generales/play.svg"} clasesImagen="cambio hp-40 mtp-10" className="p-0 px-1" /> */}
                  {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image={"images/page_"+pagina+"/img_001.png"} className="p-0 px-1" /> */}
                  {/* <ModalBook id={ "p" + pagina + "_book"+ (indexInput+=1) } image={"images/page_"+pagina+"/revista65.svg"} clasesImagen="hp-40 text-center mtp-10 " className="p-0 px-0" /> */}
                </div>
              </div>
              {/* BEGIN EJERCICIO 1 */}
              <div className="row mx-auto d-flex f-Ubuntu-R fsp-15 mbp-20 ">
                <div className="position-relative">
                  <div className="position-absolute top-0 start-100 translate-middle msp--40 mtp-10 visible-768 zindex-1"><img src={"images/page_" + pagina + "/img_001.png"} className="wp-30" alt="" /></div>
                  <div className="position-absolute top-0 start-50 translate-middle msp--170 mtp-10 visible-768 zindex-1"><img src={"images/page_" + pagina + "/img_001.png"} className="wp-30" alt="" /></div>
                </div>

                <div className="col-sm-12 col-md-6 position-relative">
                  <div className="color-white wp-20 hp-20 fw-700 position-absolute top-0 start-0 translate-middle msp-10 mtp-35 zindex-1 bgc-goten">
                    a
                  </div>
                  <div className="text-start w-100 box-shadow-simple rounded-p-10  mtp-10">
                    <div className="rounded-set-6  pep-20 psp-20 ptp-15  d-flex justify-content-start align-items-center">
                      Nos envió un mensaje una persona llamada
                    </div>
                    <div className="psp-15 pep-15">
                      <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-230" />
                    </div>
                  </div>
                </div>
                <div className="col-sm-12 col-md-6 position-relative">
                  <div className="color-white wp-20 hp-20 fw-700 position-absolute top-0 start-0 translate-middle msp-10 mtp-35 zindex-1 bgc-goten">
                    b
                  </div>
                  <div className="text-start w-100 box-shadow-simple rounded-p-10 mtp-10">
                    <div className="rounded-set-6  pep-20 psp-20 ptp-15  d-flex justify-content-start align-items-center">
                      Ella se dedica a
                    </div>
                    <div className="psp-15 pep-15">
                      <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-250" />
                    </div>
                  </div>
                </div>

              </div>
              {/* BEGIN EJERCICIO 1 */}
              <div className="row mx-auto d-flex f-Ubuntu-R fsp-15 mbp-20 ">
                <div className="position-relative">
                  <div className="position-absolute top-0 start-100 translate-middle msp--40 mtp-10 visible-768 zindex-1"><img src={"images/page_" + pagina + "/img_001.png"} className="wp-30" alt="" /></div>
                  <div className="position-absolute top-0 start-50 translate-middle msp--40 mtp-10 visible-768 zindex-1"><img src={"images/page_" + pagina + "/img_001.png"} className="wp-30" alt="" /></div>
                </div>

                <div className="col-sm-12 col-md-6 position-relative">
                  <div className="color-white wp-20 hp-20 fw-700 position-absolute top-0 start-0 translate-middle msp-10 mtp-35 zindex-1 bgc-goten">
                    c
                  </div>
                  <div className="text-start w-100 box-shadow-simple rounded-p-10  mtp-10">
                    <div className=" rounded-set-6 pep-20 psp-20 ptp-15  d-flex justify-content-start align-items-center">
                      El desafío que nos propone consiste en
                    </div>
                    <div className="psp-15 pep-15">
                      <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-230" />
                    </div>
                  </div>
                </div>
                <div className="col-sm-12 col-md-6 position-relative">
                  <div className="color-white wp-20 hp-20 fw-700 position-absolute top-0 start-0 translate-middle msp-10 mtp-35 zindex-1 bgc-goten">
                    d
                  </div>
                  <div className="text-start w-100 box-shadow-simple rounded-p-10 mtp-10">
                    <div className="rounded-set-6  pep-20 psp-20 ptp-15  d-flex justify-content-start align-items-center">
                      Este desafío es importante porque
                    </div>
                    <div className="psp-15 pep-15">
                      <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-230" />
                    </div>
                  </div>
                </div>

              </div>



            </div>
          </div>

          {/* SECCION COMO VOY */}
          <div className={"d-flex w-100 mtp-50 psp-60 pep-60 ptp-20 mbp-0 border-top-style-solid  border-2 pbp-80 " + bgc_cajas}>
            <div className="row w-100 p-0 m-0">
              <div className="col-12 position-relative">
                <div className="position-absolute top-0 start-50 translate-middle msp-0 mtp--60 visible-768 zindex-1"><img src={"images/page_" + pagina + "/img_002.png"} className="wp-120" alt="" /></div>
                <div className="f-pixilate-bold fsp-18 lh-sm text-start mbp-5">¿Cómo voy?</div>
                <div className="d-flex flex-column mbp-20 mtp-10 w-100">
                  <div className="p-2 min-hp-80 w-100 border-style-solid border-2 rounded-p-10 border-color-white bgc-white">
                    <div className="f-Ubuntu-L fsp-14 msp-0 mep-10 text-start">
                      <img src={"images/generales/flecha_e" + etapa + ".svg"} className="mep-5 wp-15" alt="" />
                      <span>¿Qué aspectos del desafío no entendí del todo?</span>
                    </div>
                    <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-100" />
                    <div className="f-Ubuntu-L fsp-14 msp-0 mep-10 mtp-20 text-start">
                      <img src={"images/generales/flecha_e" + etapa + ".svg"} className="mep-5 wp-15" alt="" />
                      <span>¿Qué debería preguntar para entenderlo mejor?</span>
                    </div>
                    <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-100" />
                  </div>
                </div>
              </div>

              <div className="col-12 position-relative">

                <div className="f-pixilate-bold fsp-18 lh-sm text-start mbp-5">¿Cómo me siento?</div>
                <div className="d-flex flex-column mbp-20 mtp-10 w-100">
                  <div className="p-2 min-hp-80 w-100 border-style-solid border-2 rounded-p-10 border-color-white bgc-white">
                    <div className="f-Ubuntu-L fsp-15 msp-0 mep-10 text-start">
                      <img src={"images/generales/flecha_e" + etapa + ".svg"} className="mep-5 wp-15" alt="" />
                      <span>Frente al desafío, me siento</span>
                    </div>
                    <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-100" />
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
            <div className="col-7 col-sm-2 p-0 m-0 position-relative">
              <img src="images/rotulo_motivacion.svg" className="visible rotulo-etapa position-absolute top-0 start-0" alt="" />
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

export default Page008;
