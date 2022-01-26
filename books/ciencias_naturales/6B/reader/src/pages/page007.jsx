import React from "react";
import ModalVideo from "../components/ModalVideo";
import ModalBook from "../components/ModalBook";
import InputBox from "../components/InputBox";

import "./page_007.css";

function Page007(props) {

  const pagina = "007";
  var indexInput = 0;
  const etapa = "1"
  const background = "bgc-goten";
  const color = "color-goten";
  const borderColor = "border-color-goten"
  const borderColorTabla = "border-color-genos"
  const bgc_cajas = "bgc-genos";

  return (
    <div className="wrapper bgc-light">
      <div className="d-flex flex-column align-items-center pbp-20">
        <div className="page bgc-white overflow-hidden position-relative" id={"page_" + pagina}>

          {/* BEGIN CABECERA VERSIÓN 2 */}
          <div className={"cabecera-v2 d-flex flex-column " + background}>
            <div className="d-flex contenedor-cabecera-v2 ptp-40 psp-30 pep-30">
              <div className={"caja-seccion wp-160 hp-70 text-center fsp-24 f-IntroRustG-Base color-dark"}>SESIÓN XX</div>
              <div className="d-flex align-items-center fsp-24 fw-700 f-Ubuntu-M color-white">XXZ</div>
            </div>
            <div className="d-flex contenedor-cabecera-v2 ptp-10 psp-0 pep-0 align-self-center justify-content-between w-95">
              <div className="psp-5 pep-5 align-self-center f-colby-compres-bold fsp-17 lh-sm text-white text-center">
                Mis objetivos en <br /> esta sesión son:
              </div>
              <div className="p-0 align-self-center">
                <img src={"images/generales/flecha_sesion_e" + etapa + "_1.svg"} className="wp-40 arrow-global" alt="" />
              </div>
              <div className="psp-5 pep-5 align-self-center f-colby-compres-bold fsp-17 lh-sm text-white text-center">
                Averiguar y comprender en <br /> qué consiste el desafío
              </div>
              <div className="psp-5 pep-5 align-self-center">
                <img src={"images/generales/flecha_sesion_e" + etapa + "_2.svg"} className="wp-40 arrow-global" alt="" />
              </div>
              <div className="psp-5 pep-5 align-self-center f-colby-compres-bold fsp-17 lh-sm text-white text-center">
                Aceptar el desafío y  <br /> completar una ficha de <br />inscripción
              </div>
              <div className="p-0 align-self-center">
                <img src={"images/generales/flecha_sesion_e" + etapa + "_1.svg"} className="wp-40 arrow-global" alt="" />
              </div>
              <div className="psp-5 pep-5 ptp-10 pbp-10 position-relative align-self-center f-colby-compres-bold fsp-17 lh-sm text-center color-dark">
                <div className="position-absolute top-0 start-0 w-100 h-100">
                  <img src="images/cabecera/caja_blanca.png" width="100%" height="100%" alt="" />
                </div>
                <div className="position-relative">
                  Comprometerse  <br /> con la realización <br /> del desafío
                </div>
              </div>
              <div className="p-0 align-self-center">
                <img src={"images/generales/flecha_sesion_e" + etapa + "_2.svg"} className="wp-40 arrow-global" alt="" />
              </div>
              <div className="psp-5 pep-5 ptp-10 pbp-10 position-relative align-self-center f-colby-compres-bold fsp-17 lh-sm text-center color-dark">
                <div className="position-absolute top-0 start-0 w-100 h-100">
                  <img src="images/cabecera/caja_blanca.png" width="100%" height="100%" alt="" />
                </div>
                <div className="position-relative">
                  Crear un logo  <br /> relacionado con <br />el desafío
                </div>
              </div>
            </div>
          </div>
          {/* END CABECERA VERSIÓN 2 */}

          <div className="ptp-50 container-titulo-global mbp-0">
            {/*  <div className={"f-Ubuntu-B fsp-20 psp-20 text-start lhp-20 " + color}>
              Conociendo el desafío
            </div> */}
            <div className="d-flex psp-20">
              {/* <img className="hp-20 align-center mt-3 me-2 mb-2" src={"images/page_"+pagina+"/img_.svg"} alt=""  /> */}
              <div className={"f-ccdigitaldelivery-bold fsp-35 " + color}>
                X
              </div>
              <div className="f-Ubuntu-R fsp-16 ptp-18 psp-10 pep-10 text-start">
                xxx
              </div>
              {/* <img src={"images/page_"+pagina+"/img_001.svg"} className="wp-100" alt=""/> */}
              {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image={"images/generales/play.svg"} clasesImagen="cambio hp-40 mtp-10" className="p-0 px-1" /> */}
              {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image={"images/page_"+pagina+"/img_001.png"} className="p-0 px-1" /> */}
              {/* <ModalBook id={ "p" + pagina + "_book"+ (indexInput+=1) } image={"images/page_"+pagina+"/revista65.svg"} clasesImagen="hp-40 text-center mtp-10 " className="p-0 px-0" /> */}
            </div>
          </div>
          <div className="msp-60 mep-60 mtp-20 mbp-10">
            <div className="row p-0 m-0">
              <div className="col-sm-12 col-md-3 position-relative"></div>
              <div className="max-wp-700 mx-auto position-relative mbp-20">
                <div className=""><img src={"images/page_" + pagina + "/img_004.svg"} className="w-100" alt="" /></div>
              </div>


              {/* BEGIN EJERCICIO 2 */}

              <div className="max-p-700 mx-auto bgc-kokomi  mtp-40 mbp-70 position-relative">
                <div className="position-absolute top-0 start-100 translate-middle msp-10 mtp-30 visible-768 zindex-1"><img src={"images/page_" + pagina + "/img_005.png"} className="wp-30" alt="" /></div>
                <div className="text-start ptp-10"> Nos necesitan para...</div>
                <div className="psp-10 psp-10">
                  <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-170" />
                </div>
              </div>
            </div>


          </div>


          {/* BEGIN PIE DE PAGINA */}
          <div className="d-flex hp-90 caja-flotante p-0 m-0 position-absolute justify-content-end align-items-end zindex-2" style={{ bottom: 70, right: 0 }}>
            <div className="f-Ubuntu-M fsp-10 position-absolute mbp-60" style={{ transform: `rotate(270deg)`, color: "dark" }}>
              ABP &copy; SM
            </div>
            <div className="bgc-boros wp-50 hp-30 f-Ubuntu-M fsp-20 psp-5">{props.numeroPagina(pagina)}</div>
          </div>
          <div className="row position-absolute caja-flotante2 p-0 m-0 align-items-end" style={{ bottom: 0 }}>

            <div className={etapa == 1 ? "col-7 position-relative col-sm-2 p-0 m-0" : "col-1 position-relative col-sm-2 p-0 m-0"}>
              <img src="images/rotulo_motivacion.svg" className={etapa == 1 ? "visible rotulo-etapa position-absolute top-0 start-0" : "oculto"} alt="" />
              <div className="w-100 hp-15 bgc-yamcha rounded-caja-start"></div>
              <div className="w-100 hp-25 bgc-goten"></div>
            </div>
            <div className={etapa == 2 ? "col-7 position-relative col-sm-2 p-0 m-0" : "col-1 position-relative col-sm-2 p-0 m-0"}>
              <img src="images/rotulo_planificacion.svg" className={etapa == 2 ? "visible rotulo-etapa position-absolute top-0 start-0" : "oculto"} alt="" />
              <div className="w-100 hp-15 bgc-tshinhan rounded-caja"></div>
              <div className="w-100 hp-25 bgc-bulma"></div>
            </div>
            <div className={etapa == 3 ? "col-7 position-relative col-sm-2 p-0 m-0" : "col-1 position-relative col-sm-2 p-0 m-0"}>
              <img src="images/rotulo_investigacion.svg" className={etapa == 3 ? "visible rotulo-etapa position-absolute top-0 start-0" : "oculto"} alt="" />
              <div className="w-100 hp-15 bgc-milk rounded-caja"></div>
              <div className="w-100 hp-25 bgc-android18"></div>
            </div>
            <div className={etapa == 4 ? "col-7 position-relative col-sm-2 p-0 m-0" : "col-1 position-relative col-sm-2 p-0 m-0"}>
              <img src="images/rotulo_experimentacion.svg" className={etapa == 4 ? "visible rotulo-etapa position-absolute top-0 start-0" : "oculto"} alt="" />
              <div className="w-100 hp-15 bgc-freezer rounded-caja"></div>
              <div className="w-100 hp-25 bgc-pidgey"></div>
            </div>
            <div className={etapa == 5 ? "col-7 position-relative col-sm-2 p-0 m-0" : "col-1 position-relative col-sm-2 p-0 m-0"}>
              <img src="images/rotulo_creacion.svg" className={etapa == 5 ? "visible rotulo-etapa position-absolute top-0 start-0" : "oculto"} alt="" />
              <div className="w-100 hp-15 bgc-ash rounded-caja"></div>
              <div className="w-100 hp-25 bgc-saitama"></div>
            </div>
            <div className={etapa == 6 ? "col-7 position-relative col-sm-2 p-0 m-0" : "col-1 position-relative col-sm-2 p-0 m-0"}>
              <img src="images/rotulo_difusion.svg" className={etapa == 6 ? "visible rotulo-etapa position-absolute top-0 start-0" : "oculto"} alt="" />
              <div className="w-100 hp-15 bgc-leono rounded-caja-end"></div>
              <div className="w-100 hp-25 bgc-pikachu"></div>
            </div>
          </div>
          {/* END PIE DE PAGINA */}

        </div>
      </div>
    </div>
    // <div className="wrapper bgc-light">
    //   <div className="d-flex flex-column align-items-center pbp-20">
    //     <div className="page bgc-white overflow-hidden position-relative" id={"page_" + pagina}>
    //       {/* BEGIN CABECERA VERSIÓN 2 */}
    //       <div className={"cabecera-v2 d-flex flex-column " + background}>
    //         <div className="d-flex contenedor-cabecera-v2 ptp-40 psp-30 pep-30">
    //           <div className={"caja wp-150 text-center fsp-24 f-IntroRustG-Base " + color}>SESIÓN 1</div>
    //           <div className="section-name d-flex align-items-center fsp-24 fw-700 f-Ubuntu-M color-white">¡Tenemos un desafío!</div>
    //         </div>

    //       </div>
    //       {/* END CABECERA VERSIÓN 2 */}


    //       {/* BEGIN PIE DE PAGINA */}
    //       <div className="d-flex hp-90 caja-flotante p-0 m-0 position-absolute justify-content-end align-items-end zindex-2" style={{ bottom: 70, right: 0 }}>
    //         <div className="f-Ubuntu-M fsp-10 position-absolute mbp-60" style={{ transform: `rotate(270deg)`, color: "dark" }}>
    //           ABP &copy; SM
    //         </div>
    //         <div className="bgc-boros wp-50 hp-30 f-Ubuntu-M fsp-20 psp-5">{props.numeroPagina(pagina)}</div>
    //       </div>
    //       <div className="row w-100 position-absolute caja-flotante2 p-0 m-0 align-items-end" style={{ bottom: 0 }}>
    //         <div className="col-7 col-sm-2 p-0 m-0 position-relative">
    //           <img src="images/rotulo_motivacion.svg" className="visible rotulo-etapa position-absolute top-0 start-0" alt="" />
    //           <div className="w-100 hp-15 bgc-yamcha rounded-caja-start"></div>
    //           <div className="w-100 hp-25 bgc-goten"></div>
    //         </div>
    //         <div className="col-1 col-sm-2 p-0 m-0 position-relative">
    //           <img src="images/rotulo_planificacion.svg" className="oculto" alt="" />
    //           <div className="w-100 hp-15 bgc-tshinhan rounded-caja"></div>
    //           <div className="w-100 hp-25 bgc-bulma"></div>
    //         </div>
    //         <div className="col-1 col-sm-2 p-0 m-0 position-relative">
    //           <img src="images/rotulo_investigacion.svg" className="oculto" alt="" />
    //           <div className="w-100 hp-15 bgc-milk rounded-caja"></div>
    //           <div className="w-100 hp-25 bgc-android18"></div>
    //         </div>
    //         <div className="col-1 col-sm-2 p-0 m-0 position-relative">
    //           <img src="images/rotulo_experimentacion.svg" className="oculto" alt="" />
    //           <div className="w-100 hp-15 bgc-freezer rounded-caja"></div>
    //           <div className="w-100 hp-25 bgc-pidgey"></div>
    //         </div>
    //         <div className="col-1 col-sm-2 p-0 m-0 position-relative">
    //           <img src="images/rotulo_creacion.svg" className="oculto" alt="" />
    //           <div className="w-100 hp-15 bgc-ash rounded-caja"></div>
    //           <div className="w-100 hp-25 bgc-saitama"></div>
    //         </div>
    //         <div className="col-1 col-sm-2 p-0 m-0 position-relative">
    //           <img src="images/rotulo_difusion.svg" className="oculto" alt="" />
    //           <div className="w-100 hp-15 bgc-leono rounded-caja-end"></div>
    //           <div className="w-100 hp-25 bgc-pikachu"></div>
    //         </div>
    //       </div>
    //       {/* END PIE DE PAGINA */}

    //     </div>
    //   </div>
    // </div>
  );
}

export default Page007;
