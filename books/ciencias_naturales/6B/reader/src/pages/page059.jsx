import React from "react";
import InputBox from "../components/InputBox";
import ModalBook from "../components/ModalBook";
import Check from "../components/Check";
import "./page_059.css";

function Page059(props) {

  const pagina = "059";
  var indexInput = 0;
  const etapa = "5"
  const background = "bgc-saitama";
  const color = "color-saitama";
  const bgc_cajas = "bgc-bobafett";

  return (
    <div className="wrapper bgc-light">
      <div className="d-flex flex-column align-items-center pbp-20">
        <div className="page bgc-white overflow-hidden position-relative" id={"page_" + pagina}>
          {/* BEGIN CABECERA VERSIÓN 2 */}
          <div className={"cabecera-v2 " + background + " d-flex flex-column"}>
            <div className="d-flex contenedor-cabecera-v2 ptp-40 psp-30 pep-30">
              <div className="caja-seccion wp-160 hp-70 text-center fsp-24 f-IntroRustG-Base color-dark">SESIÓN 15</div>
              <div className="section-name d-flex align-items-center fsp-24 fw-700 f-Ubuntu-M color-white">Construimos nuestra propuesta</div>
            </div>
            <div className="d-flex contenedor-cabecera-v2 ptp-10 psp-30 pep-30 align-self-center justify-content-between w-90">
              <div className="p-2 align-self-center f-colby-compres-bold fsp-15 lh-sm text-white text-center">
                Mis objetivos <br />en  esta sesión son:
              </div>
              <div className="p-0 align-self-center">
                <img src={"images/generales/flecha_sesion_e" + etapa + "_1.svg"} className="wp-40 arrow-global" alt="" />
              </div>
              <div className="p-2 align-self-center f-colby-compres-bold fsp-15 lh-sm text-white text-center">
                Completar la <br />lista de cotejo
              </div>
              <div className="p-0 align-self-center">
                <img src={"images/generales/flecha_sesion_e" + etapa + "_2.svg"} className="wp-40 arrow-global rotate-90" alt="" />
              </div>
              <div className="p-2 align-self-center f-colby-compres-bold fsp-15 lh-sm text-white text-center">
                Hacer una lista de<br /> tareas y distribuirlas
              </div>
              <div className="p-0 align-self-center">
                <img src={"images/generales/flecha_sesion_e" + etapa + "_1.svg"} className="wp-40 arrow-global" alt="" />
              </div>
              <div className="p-3 align-self-center f-colby-compres-bold fsp-15 lh-sm text-center text-white">
                Construir el  <br />aparato o sistema
              </div>
              <div className="p-0 align-self-center">
                <img src={"images/generales/flecha_sesion_e" + etapa + "_2.svg"} className="wp-40 arrow-global rotate-90" alt="" />
              </div>
              <div className="p-3 align-self-center f-colby-compres-bold fsp-15 lh-sm text-center text-white">
                Elaborar un álbum  <br />fotográfico
              </div>

            </div>
          </div>
          {/* END CABECERA VERSIÓN 2 */}

          <div className="ptp-10 container-titulo-global mbp-20">
            {/* <div className={"f-Ubuntu-B fsp-20 psp-20 text-start lhp-20 " + color}>
              Plan de trabajo
            </div> */}
            <div className="d-flex psp-20">
              {/* <img className="hp-20 align-center mt-3 me-2 mb-2" src={"images/page_" + pagina + "/img_004.svg"} alt="" /> */}
              <div className={"f-ccdigitaldelivery-bold fsp-35 " + color}>
                1
              </div>
              <div className="f-Ubuntu-R fsp-16 ptp-18 psp-10 pep-10 text-start">
                Seleccionamos las consideraciones que tendremos presentes para la construcción de nuestro aparato o sistema tecnológico.
              </div>
              {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image={"images/generales/play.svg"} clasesImagen="cambio hp-40 mtp-10" className="p-0 px-1" /> */}
              {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image={"images/page_"+pagina+"/img_001.png"} className="p-0 px-1" /> */}
              {/* <ModalBook id={ "p" + pagina + "_book"+ (indexInput+=1) } image={"images/page_"+pagina+"/revista65.svg"} clasesImagen="hp-40 text-center mtp-10 " className="p-0 px-0" /> */}
            </div>
          </div>




          <div className="w-100 h-100 position-relative">
            <div className="position-absolute top-0 start-100 translate-middle   visible-768 msp--80 mtp-60  imagen59-sobre-papel "> <img src={"images/page_" + pagina + "/img_003.png"} className="wp-80" alt="" />  </div>

            <div className="msp-80 mep-60 position-relative  ">
              {/* <div className="position-absolute top-100 start-0 translate-middle   zindex-4 visible-768 msp--30 mtp--20 "><img src="images/page_061/img_007.png" className="wp-50 " alt="" /></div> */}
              <div className="row w-100 mb-10   ">
                <div className="cb-ep-paper-59 ">
                  <div className="cb-ep-paper-content-59 f-Ubuntu-L text-start">
                    <div className="mtp-5 ">

                      <div className="d-flex w-100 p-2">
                        <Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check>
                        <div className="d-flex justify-content-start align-items-center text-start f-Ubuntu-R fsp-15 psp-5"> Los materiales que escogimos.</div>
                      </div>

                      <div className="d-flex w-100 p-2">
                        <Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check>
                        <div className="d-flex justify-content-start align-items-center text-start f-Ubuntu-R fsp-15 psp-5">Las herramientas que utilizaremos.</div>
                      </div>

                      <div className="d-flex w-100 p-2">
                        <Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check>
                        <div className="d-flex justify-content-start align-items-center text-start f-Ubuntu-R fsp-15 psp-5">Las mejoras del prototipo.</div>
                      </div>

                      <div className="d-flex w-100 p-2">
                        <Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check>
                        <div className="d-flex justify-content-start align-items-center text-start f-Ubuntu-R fsp-15 psp-5">Elementos de seguridad.</div>
                      </div>

                      <div className="d-flex w-100 p-2">
                        <Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check>
                        <div className="d-flex justify-content-start align-items-center text-start f-Ubuntu-R fsp-15 psp-5">Otro</div>
                      </div>
                      <div className=" justify-content-start align-items-start text-start f-Ubuntu-R fsp-15  ptp-0 psp-10">
                        <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 fsp-15 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-150" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>

          </div>


          <div className="ptp-0 container-titulo-global mbp-0 msp-0 mtp--50">
            {/* <div className={"f-Ubuntu-B fsp-20 psp-20 text-start lhp-20 " + color}>
              Plan de trabajo
            </div> */}
            <div className="d-flex psp-00">
              <img className="hp-20 align-center mt-3 me-2 mb-2" src={"images/page_" + pagina + "/img_004.svg"} alt="" />
              <div className={"f-ccdigitaldelivery-bold fsp-35 " + color}>
                2
              </div>
              <div className="f-Ubuntu-R fsp-16 ptp-18 psp-10 pep-10 text-start">
                Nos organizamos para construir nuestro aparato o sistema tecnológico.
              </div>
              {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image={"images/generales/play.svg"} clasesImagen="cambio hp-40 mtp-10" className="p-0 px-1" /> */}
              {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image={"images/page_"+pagina+"/img_001.png"} className="p-0 px-1" /> */}
              {/* <ModalBook id={ "p" + pagina + "_book"+ (indexInput+=1) } image={"images/page_"+pagina+"/revista65.svg"} clasesImagen="hp-40 text-center mtp-10 " className="p-0 px-0" /> */}
            </div>
          </div>






          <div className="d-flex global-margin  mtp-0 mbp-0 psp-60 pep-0 ptp-0 pbp-0">
            <div className="row p-0 msp-0 w-100">
              <div className="col-12 p-0 m-0 position-relative">

                <div className="d-flex w-100 p-2">
                  <div className="d-flex d-inline justify-content-start align-items-center text-start f-Ubuntu-R color-saitama fsp-17 fw-700 pbp-5">a.</div>
                  <div className="d-flex justify-content-start align-items-center text-start f-Ubuntu-R fsp-15 psp-5">Hacemos una lista con las tareas y las distribuimos.</div>
                </div>

              </div>
            </div>
          </div>




          <div className="ptp-10 psp-65 pep-40 mbp-70">
            <div className="row d-flex mx-auto f-Ubuntu-B fsp-15 mbp-0 position-relative justify-content-between">
              <div className="col-sm-12 col-md-6 pbp-25 ">

                {/* <div className="position-absolute top-100 start-0 translate-middle msp-0 mtp-25 zindex-1"><img src={"images/page_" + pagina + "/posit.png"} className="wp-60 mtp--60 msp-0" alt="" /></div> */}
                {/* <div className="position-absolute top-50 start-50 translate-middle msp-0 mtp-25 visible-768 zindex-1"><img src={"images/page_" + pagina + "/espiral.svg"} className="wp-60 mtp-60" alt="" /></div> */}
                <div className="text-center w-100 border-2 border-style-solid border-color-akuma rounded-p-10">
                  <div className="rounded-set-6 hp-40 pep-20 psp-20 ptp-10 pbp-10 bgc-akuma d-flex justify-content-center align-items-center text-white p-2">Lo que hay que hacer</div>
                  <div className="psp-15 pep-15"><InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-300 f-Ubuntu-R" /></div>
                </div>
              </div>
              <div className="col-sm-12 col-md-6 pbp-25">
                <div className="text-center w-100 border-1 border-style-solid border-color-haydn rounded-p-10  position-relative">
                  <div className="position-absolute top-0 start-100 translate-middle   msp--50 mtp--30 visible-768 zindex-1"><img src={"images/page_" + pagina + "/img_005.png"} className="wp-90 " alt="" /></div>
                  <div className="position-absolute posicion-centro-centro translate-middle zindex-1   "><img src={"images/page_" + pagina + "/espiral.svg"} className="rotacion-centro-centro msp--30 mtp--26 wp-50" alt="" /></div>
                  <div className="rounded-set-6 hp-40 ptp-10 pbp-10 bgc-haydn d-flex justify-content-center align-items-center text-white p-2">Estudiante a cargo</div>
                  <div className="psp-15 pep-15"><InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-300 f-Ubuntu-R" /></div>
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
            <div className="col-7 col-sm-2 p-0 m-0 position-relative">
              <img src="images/rotulo_creacion.svg" className="visible rotulo-etapa position-absolute top-0 start-0" alt="" />
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

export default Page059;
