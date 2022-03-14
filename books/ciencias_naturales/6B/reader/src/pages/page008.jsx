import React from "react";
import InputBox from "../components/InputBox";
import Check from "../components/Check";

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
                    Completo la ficha de inscripción para aceptar el desafío.
                  </div>
                  {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image={"images/generales/play.svg"} clasesImagen="cambio hp-40 mtp-10" className="p-0 px-1" /> */}
                  {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image={"images/page_"+pagina+"/img_001.png"} className="p-0 px-1" /> */}
                  {/* <ModalBook id={ "p" + pagina + "_book"+ (indexInput+=1) } image={"images/page_"+pagina+"/revista65.svg"} clasesImagen="hp-40 text-center mtp-10 " className="p-0 px-0" /> */}
                </div>
              </div>

              <div className="d-flex max-wp-500 mx-auto">
                <div className="color-luke fw-700 rounded-set-10  bgc-akuma p-2 wp-120 f-Ubuntu-R fsp-15 hp-40">
                  INICIO
                </div>
                <div className="color-obiwan fw-700 rounded-set-10  bgc-milena p-2 wp-120 f-Ubuntu-R fsp-15 hp-40">
                  NOTICIAS
                </div>
                <div className="color-ken fw-700 rounded-set-10  bgc-trunks p-2 wp-120 f-Ubuntu-R fsp-15 hp-40">
                  INSCRIPCIÓN
                </div>
                <div className="color-balrog fw-700 rounded-set-10  bgc-rain p-2 wp-120 f-Ubuntu-R fsp-15 hp-40">
                  CONTACTO
                </div>

              </div>
              {/* EJERCICIO UNO */}
              <div className="max-wp-600 mx-auto bgc-trunks rounded-p-10 justify-content-center align-items-center ptp-10 pep-10 psp-10 pbp-10 position-relative">
                <div className="position-absolute top-50 start-100 translate-middle msp-0 mtp-10 visible-768 zindex-1"><img src={"images/page_" + pagina + "/img_001.png"} className="wp-80" alt="" /></div>
                <div className="w-100 d-flex justify-content-center align-items-center">
                  <div className="text-start w-100 max-wp-80 mep-5 f-Ubuntu-R fsp-15">Nombre</div>
                  <div className="text-start bgc-white w-100 border-1 border-style-solid border-color-ken rounded-1 ">
                    <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-30" />
                  </div>
                </div>
                <div className="w-100 d-flex mtp-5 justify-content-center align-items-center">
                  <div className="text-start w-100 max-wp-80 mep-5 f-Ubuntu-R fsp-15">Apellidos</div>
                  <div className="text-start bgc-white w-100 border-1 border-style-solid border-color-ken rounded-1 ">
                    <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-30" />
                  </div>
                </div>
                <div className="w-100 d-flex mtp-5 justify-content-center align-items-center">
                  <div className="text-start w-100 max-wp-80 mep-5 f-Ubuntu-R fsp-15">Colegio</div>
                  <div className="text-start bgc-white w-100 border-1 border-style-solid border-color-ken rounded-1 ">
                    <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-30" />
                  </div>
                </div>
                <div className="w-100 d-flex mtp-5 justify-content-center align-items-center">
                  <div className="text-start w-100 max-wp-80 mep-5 pep-5 f-Ubuntu-R fsp-15">Edad</div>
                  <div className="text-start bgc-white w-100  border-1 border-style-solid border-color-ken rounded-1">
                    <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-30" />
                  </div>
                  <div className="text-end w-100 max-wp-80 mep-5 pep-5 f-Ubuntu-R fsp-15">Curso</div>
                  <div className="text-start bgc-white w-100 border-1 border-style-solid border-color-ken rounded-1 ">
                    <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-30" />
                  </div>
                  <div className="text-end w-100 max-wp-80 mep-5 pep-5 f-Ubuntu-R fsp-15">Fecha</div>
                  <div className="text-start bgc-white w-100 border-1 border-style-solid border-color-ken rounded-1 ">
                    <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-30" />
                  </div>
                </div>
                <div className="mtp-10 bgc-white border-1 border-style-solid border-color-dark ptp-15">
                  <span className="text-center fsp-16 color-saitama f-Ubuntu-R fw-700 "> NORMAS DE PARTICIPACIÓN</span>
                  <div className="psp-10 pep-10 pbp-10 ptp-5">
                    <div className="d-flex align-items-center w-100 ">
                      <div className="wp-5 hp-5 bgc-saitama rounded-circle"></div>
                      <div className="d-flex justify-content-start align-items-center text-start f-Ubuntu-L fsp-15 psp-5">
                        Formar un equipo y trabajar juntos para superar el desafío.
                      </div>
                    </div>
                    <div className="d-flex align-items-center w-100 ">
                      <div className="wp-5 hp-5 bgc-saitama rounded-circle"></div>
                      <div className="d-flex justify-content-start align-items-center text-start f-Ubuntu-L fsp-15 psp-5">
                        Buscar información sobre la sostenibilidad y las energías renovables.
                      </div>
                    </div>
                    <div className="d-flex align-items-center w-100 ">
                      <div className="wp-5 hp-5 bgc-saitama rounded-circle"></div>
                      <div className="d-flex justify-content-start align-items-center text-start f-Ubuntu-L fsp-15 psp-5">
                        Diseñar un prototipo innovador para aprovechar las energías renovables.
                      </div>
                    </div>
                    <div className="d-flex align-items-center w-100 ">
                      <div className="wp-5 hp-5 bgc-saitama rounded-circle"></div>
                      <div className="d-flex justify-content-start align-items-center text-start f-Ubuntu-L fsp-15 psp-5">
                        Crear un aparato o sistema que aproveche las energías renovables.
                      </div>
                    </div>
                    <div className="d-flex align-items-center w-100 ">
                      <div className="wp-5 hp-5 bgc-saitama rounded-circle"></div>
                      <div className="d-flex justify-content-start align-items-center text-start f-Ubuntu-L fsp-15 psp-5">
                        Presentar el sistema o aparato a la comunidad educativa.
                      </div>
                    </div>
                  </div>
                </div>
                <div className="d-flex justify-content-center mbp-5 ">
                  <div className="wp-30 hp-30 mtp-10 bgc-white   ">
                    <Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check>

                  </div>
                  <div className="msp-5  mtp-10 pep-5 psp-5 bgc-white border-1 border-style-solid border-color-ken rounded-1 f-Ubuntu-L fsp-15 d-flex align-items-center">
                    He leído, acepto las normas y quiero participar.
                  </div>
                </div>

              </div>


            </div>
          </div>

          {/* SECCION COMO VOY */}
          <div className={"d-flex w-100 mtp-50 psp-60 pep-60 ptp-20 mbp-0 border-top-style-solid " + borderColor + " border-2 pbp-80 " + bgc_cajas}>
            <div className="row w-100 p-0 m-0">
              <div className="col-12 position-relative">
                <div className="position-absolute top-0 start-100 translate-middle msp-0 mtp--60 visible-768 zindex-1"><img src={"images/page_" + pagina + "/img_003.png"} className="wp-120" alt="" /></div>
                <div className="f-pixilate-bold fsp-18 lh-sm text-start mbp-5">¿Cómo voy?</div>
                <div className="d-flex flex-column mbp-20 mtp-10 w-100">
                  <div className="p-2 min-hp-80 w-100 border-style-solid border-2 rounded-p-10 border-color-white bgc-white">
                    <div className="f-Ubuntu-L fsp-15 msp-0 mep-10 text-start">
                      <img src={"images/generales/flecha_e" + etapa + ".svg"} className="mep-5 wp-15" alt="" />
                      <span>¿De qué se trata el desafío?</span>
                    </div>
                    <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-100" />
                    <div className="f-Ubuntu-L fsp-15 msp-0 mep-10 mtp-20 text-start">
                      <img src={"images/generales/flecha_e" + etapa + ".svg"} className="mep-5 wp-15" alt="" />
                      <span>¿Qué creo que no he entendido del todo?</span>
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
                      <span>El desafío me hace sentir</span>
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
