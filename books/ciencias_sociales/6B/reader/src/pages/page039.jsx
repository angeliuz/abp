import React from "react";
import InputBox from "../components/InputBox";
import "./page_039.css";

function Page039(props) {
  const pagina = "039";
  var indexInput = 0;
  const etapa = "3";
  const background = "bgc-android18";
  const color = "color-android18";
  const borderColor = "border-color-android18";
  const borderColorTabla = "border-color-tigro";
  const bgc_cajas = "bgc-tigro";

  return (

    <div className="wrapper bgc-light">
      <div className="d-flex flex-column align-items-center pbp-20">
        <div className="page bgc-white overflow-hidden position-relative" id={"page_" + pagina}>

          {/* BEGIN CABECERA VERSIÓN 2 */}
          <div className={"cabecera-v2 d-flex flex-column " + background}>
            <div className="d-flex contenedor-cabecera-v2 ptp-40 psp-30 pep-30">
              <div className={"caja-seccion wp-160 hp-70 text-center fsp-24 f-IntroRustG-Base color-dark"}>SESIÓN 9</div>
              <div className="d-flex align-items-center fsp-24 fw-700 f-Ubuntu-M color-white">El discurso o manifiesto de nuestra obra</div>
            </div>
            <div className="d-flex contenedor-cabecera-v2 ptp-10 psp-30 pep-30 align-self-center justify-content-between w-100">
              <div className="psp-5 pep-5 align-self-center f-colby-compres-bold fsp-17 lh-sm text-white text-center">
                Mis objetivos en <br /> esta sesión son:
              </div>
              <div className="p-0 align-self-center">
                <img src={"images/generales/flecha_sesion_e" + etapa + "_1.svg"} className="wp-40 arrow-global" alt="" />
              </div>
              <div className="psp-5 pep-5 align-self-center f-colby-compres-bold fsp-17 lh-sm text-white text-center">
                Elaborar un mapa de ideas con los<br />avances de nuestra obra de arte.
              </div>
              <div className="psp-5 pep-5 align-self-center">
                <img src={"images/generales/flecha_sesion_e" + etapa + "_2.svg"} className="wp-40 arrow-global" alt="" />
              </div>
              <div className="psp-5 pep-5 align-self-center f-colby-compres-bold fsp-17 lh-sm text-white text-center">
                Crear un discurso que permita<br />fundamentar nuestra obra de arte.
              </div>
              <div className="p-0 align-self-center">
                <img src={"images/generales/flecha_sesion_e" + etapa + "_1.svg"} className="wp-40 arrow-global" alt="" />
              </div>
              <div className="psp-5 pep-5 align-self-center f-colby-compres-bold fsp-17 lh-sm text-white text-center">
                Reflexionar sobre el<br />trabajo realizado.
              </div>
            </div>
          </div>
          {/* END CABECERA VERSIÓN 2 */}

          <div className="ptp-30 container-titulo-global mbp-0">
            <div className="d-flex psp-20">
              <img className="hp-20 align-center mt-3 me-2 mb-2" src={"images/page_" + pagina + "/img_003.svg"} alt="" />
              <div className={"f-ccdigitaldelivery-bold fsp-35 " + color}>
                1
              </div>
              <div className="f-Ubuntu-R fsp-16 ptp-18 psp-10 pep-10 text-start">
                En grupo, completamos el siguiente esquema con nuestras principales conclusiones de la etapa.
              </div>
              {/* <img src={"images/page_"+pagina+"/img_001.svg"} className="wp-100" alt=""/> */}
              {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image={"images/generales/play.svg"} clasesImagen="cambio hp-40 mtp-10" className="p-0 px-1" /> */}
              {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image={"images/page_"+pagina+"/img_001.png"} className="p-0 px-1" /> */}
              {/* <ModalBook id={ "p" + pagina + "_book"+ (indexInput+=1) } image={"images/page_"+pagina+"/revista65.svg"} clasesImagen="hp-40 text-center mtp-10 " className="p-0 px-0" /> */}
            </div>
          </div>

          <div className="psp-60 pep-60 ptp-20 pbp-80">

            <div className="d-flex justify-content-center align-items-center pbp-20">
              <div className="caja1-p39 bgc-mozart rounded-p-10 color-white f-Ubuntu-M ptp-10 position-relative">
                <span>Elementos que inspiran nuestra obra</span>

                <div className="position-absolute top-50 start-100 translate-middle msp-50 mtp-25">
                  <div className="wp-100 hp-60 border-te border-3 border-color-mozart position-relative pbp-10">
                    <div className="position-absolute top-100 start-100 translate-middle mtp--10 msp-2">
                      <img src={"images/page_" + pagina + "/flecha_001.png"} className="hp-15" alt="" />
                    </div>
                  </div>
                </div>
                <div className="position-absolute top-50 start-0 translate-middle msp--50 mtp-25">
                  <div className="wp-100 hp-60 border-st border-3 border-color-mozart position-relative">
                    <div className="position-absolute top-100 start-0 translate-middle mtp--10 msp--1">
                      <img src={"images/page_" + pagina + "/flecha_001.png"} className="hp-15" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">

              <div className="col-6">
                <div className="d-flex justify-content-center align-items-center pbp-60 position-relative">
                  <div className="caja1-p39 bgc-azuka rounded-p-10 color-balrog f-Ubuntu-B ptp-10 psp-20 pep-20 ">
                    <span>Nuestro compromiso con la justicia social</span>
                  </div>
                  <div className="position-absolute top-100 start-50 translate-middle mtp--30 msp--20">
                    <img src={"images/page_" + pagina + "/flecha_002.png"} className="wp-20" alt="" />
                  </div>
                </div>
                <div className="border-style-solid border-color-milk border-2 rounded-p-10 p-3">
                  <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 hp-140 overflow-scroll" />
                </div>
              </div>

              <div className="col-6">
                <div className="d-flex justify-content-center align-items-center position-relative pbp-60">
                  <div className="caja1-p39 bgc-qiqi rounded-p-10 color-sektor f-Ubuntu-B ptp-10 psp-20 pep-20">
                    <span>Derecho en que nos centraremos</span>
                  </div>
                  <div className="position-absolute top-100 start-50 translate-middle mtp--30 msp-20">
                    <img src={"images/page_" + pagina + "/flecha_003.png"} className="wp-20" alt="" />
                  </div>
                </div>
                <div className="border-style-solid border-color-sonic border-2 rounded-p-10 p-3 position-relative">
                  <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 hp-140 overflow-scroll" />
                  <div className="position-absolute top-100 start-50 translate-middle mtp-15 msp--20">
                    <div className="wp-60 hp-30 border-color-sonic border-end border-2"></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="d-flex justify-content-center ptp-27">
              <div className="wp-100"></div>
              <div className="caja2-p39 border-st border-color-sonic border-2 position-relative">
                <div className="position-absolute top-100 start-0 translate-middle msp--1 mtp--10 zindex-1"><img src={"images/page_" + pagina + "/flecha_004.png"} className="wp-30" alt="" /></div>
                <div className="position-absolute top-100 start-100 translate-middle msp-1 mtp--10 zindex-1"><img src={"images/page_" + pagina + "/flecha_004.png"} className="wp-30" alt="" /></div>
              </div>
              <div className="caja2-p39 border-ste border-color-sonic border-2 position-relative">
                <div className="position-absolute top-100 start-100 translate-middle msp-1 mtp--10 zindex-1"><img src={"images/page_" + pagina + "/flecha_004.png"} className="wp-30" alt="" /></div>

              </div>
              <div className="wp-100"></div>
            </div>

            <div className="row">
              <div className="col-4">
                <div className="d-flex justify-content-center align-items-center pbp-60 position-relative">
                  <div className="caja1-p39 bgc-draco rounded-p-10 color-bulma f-Ubuntu-B ptp-10 psp-20 pep-20 ">
                    <span> Deberes que se desprenden</span>
                  </div>
                  <div className="position-absolute top-100 start-50 translate-middle mtp--30 msp-0">
                    <img src={"images/page_" + pagina + "/flecha_006.png"} className="wp-20" alt="" />
                  </div>
                </div>
                <div className="border-style-solid border-color-draco border-2 rounded-p-10 p-3 position-relative">
                  <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 hp-140 overflow-scroll" />
                </div>
              </div>
              <div className="col-4">
                <div className="d-flex justify-content-center align-items-center pbp-60 position-relative">
                  <div className="caja1-p39 bgc-kai rounded-p-10 color-pidgey f-Ubuntu-B ptp-10 psp-20 pep-20 ">
                    <span> Principales desafíos que enfrenta</span>
                  </div>
                  <div className="position-absolute top-100 start-50 translate-middle mtp--30 msp-0">
                    <img src={"images/page_" + pagina + "/flecha_007.png"} className="wp-20" alt="" />
                  </div>
                </div>
                <div className="border-style-solid border-color-kai border-2 rounded-p-10 p-3 position-relative">
                  <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 hp-140 overflow-scroll" />
                </div>
              </div>
              <div className="col-4">
                <div className="d-flex justify-content-center align-items-center pbp-60 position-relative">
                  <div className="caja1-p39 bgc-blanka rounded-p-10 color-pikachu f-Ubuntu-B ptp-10 psp-20 pep-20">
                    <span> Medida de defensa</span>
                  </div>
                  <div className="position-absolute top-100 start-50 translate-middle mtp--30 msp-0">
                    <img src={"images/page_" + pagina + "/flecha_008.png"} className="wp-20" alt="" />
                  </div>
                </div>
                <div className="border-style-solid border-color-blanka border-2 rounded-p-10 p-3 position-relative">
                  <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 hp-140 overflow-scroll" />
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

  );
}

export default Page039;
