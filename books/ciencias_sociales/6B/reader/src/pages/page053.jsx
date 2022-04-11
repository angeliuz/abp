import React from "react";
import InputBox from "../components/InputBox";
import ModalVideo from "../components/ModalVideo";
import ModalBook from "../components/ModalBook";
import SubirImagen from "../components/SubirImagen";
import "./page_053.css";

function Page053(props) {

  const pagina = "053";
  var indexInput = 0;
  const etapa = "4"
  const background = "bgc-pidgey";
  const color = "color-pidgey";
  const borderColor = "border-color-pidgey"
  const borderColorTabla = "border-color-pantro"
  const bgc_cajas = "bgc-pantro";

  return (
    <div className="wrapper bgc-light">
      <div className="d-flex flex-column align-items-center pbp-20">
        <div className="page bgc-white overflow-hidden position-relative" id={"page_" + pagina}>

          {/* BEGIN CABECERA VERSIÓN 2 */}
          <div className={"cabecera-v2 d-flex flex-column " + background}>
            <div className="d-flex contenedor-cabecera-v2 ptp-40 psp-30 pep-30">
              <div className={"caja-seccion wp-160 hp-70 text-center fsp-24 f-IntroRustG-Base color-dark"}>SESIÓN 13</div>
              <div className="d-flex align-items-center fsp-24 fw-700 f-Ubuntu-M color-white">Diseñamos nuestra obra</div>
            </div>
            <div className="d-flex contenedor-cabecera-v2 ptp-10 psp-30 pep-30 align-self-center justify-content-between w-95">
              <div className="psp-5 pep-5 align-self-center f-colby-compres-bold fsp-17 lh-sm text-white text-center">
                Mis objetivos en <br /> esta sesión son:
              </div>
              <div className="p-0 align-self-center">
                <img src={"images/generales/flecha_sesion_e" + etapa + "_1.svg"} className="wp-40 arrow-global" alt="" />
              </div>
              <div className="psp-5 pep-5 align-self-center f-colby-compres-bold fsp-17 lh-sm text-white text-center">
                Definimos el formato de <br /> nuestra obra.
              </div>
              <div className="psp-5 pep-5 align-self-center">
                <img src={"images/generales/flecha_sesion_e" + etapa + "_2.svg"} className="wp-40 arrow-global" alt="" />
              </div>
              <div className="psp-5 pep-5 align-self-center f-colby-compres-bold fsp-17 lh-sm text-white text-center">
                Dibujamos el boceto de <br /> nuestra obra.
              </div>
              <div className="p-0 align-self-center">
                <img src={"images/generales/flecha_sesion_e" + etapa + "_1.svg"} className="wp-40 arrow-global" alt="" />
              </div>
              <div className="psp-5 pep-5 align-self-center f-colby-compres-bold fsp-17 lh-sm text-white text-center">
                Explicamos nuestra obra.
              </div>
            </div>
          </div>
          {/* END CABECERA VERSIÓN 2 */}

          <div className="ptp-10 container-titulo-global-1 mbp-0">
            {/* <div className={"f-Ubuntu-B fsp-20 psp-20 text-start lhp-20 " + color}>xxx</div> */}
            <div className="d-flex psp-0">
              <img className="hp-15 align-center mtp-20 me-2 mb-2" src={"images/page_" + pagina + "/g.svg"} alt="" />
              <div className={"f-ccdigitaldelivery-bold fsp-35 " + color}>1</div>
              <div className="f-Ubuntu-R fsp-16 ptp-18 psp-10 pep-10 text-start">Con mi grupo, defino el formato que tendrá nuestra obra (pintura, arpillera u otro) y elaboramos un primer boceto de cómo la imaginamos. En el boceto, indicamos el significado que otorgamos a su textura, sus colores, líneas y formas.</div>
              {/* <img src={"images/page_"+pagina+"/img_001.svg"} className="wp-100" alt=""/> */}
              {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image={"images/generales/play.svg"} clasesImagen="cambio hp-40 mtp-10" className="p-0 px-1" /> */}
              {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image={"images/page_"+pagina+"/img_001.png"} className="p-0 px-1" /> */}
              {/* <ModalBook id={"p" + pagina + "_book" + (indexInput += 1)} image={"images/page_" + pagina + "/revista.svg"} clasesImagen="hp-35 text-center mtp-10 " className="p-0 px-0" /> */}
            </div>
          </div>

          <div className="d-flex msp-60 mep-60 mtp-40 mbp-110">
            <div className="w-100 d-flex center-center p-2 rounded-p-20 border-style-solid border-2 border-color-android18 min-hp-800 position-relative bgc-pachelbel">
            <div className="position-absolute top-0 start-0 msp--30 mtp--40 zindex-1 gira--5">
                  <div className="position-absolute top-50 start-50 translate-middle w-100 f-Ubuntu-R fsp-14 ptp-5">Y este es su primer boceto:</div>
                  <img src={"images/page_" + pagina + "/parche.svg"} className="wp-190" alt="" />
                </div>
            <div className="position-absolute top-100 start-0 translate-middle msp-25 mtp--60 zindex-1 visible-768"><img src={"images/page_" + pagina + "/mono.png"} className="hp-150" alt="" /></div>
            <div className="position-absolute top-0 start-50 msp-0 mtp--40 zindex-1">
                  <div className="bgc-white rounded-p-10 p-2 border-style-solid border-color-lightDark border-2 wp-250 position-relative box-shadow-simple">
                    <div className="position-absolute top-50 start-100 translate-middle msp-0 mtp-0 zindex-1"><img src={"images/page_" + pagina + "/pintura.png"} className="hp-110" alt="" /></div>
                    <div className="f-Ubuntu-R fsp-14 lh-sm text-center ptp-10">El formato de nuestra obra será</div>
                    <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-50" />
                  </div>
                </div>
                <div className="position-absolute top-100 start-100 msp--270 mtp--90 zindex-1">
                  <div className="bgc-white p-2 border-style-solid border-color-boros border-2 wp-270 position-relative box-shadow-simple">
                    <div className="position-absolute top-50 start-0 translate-middle msp--30 mtp-20 zindex-1"><img src={"images/page_" + pagina + "/lapices.png"} className="hp-60" alt="" /></div>
                    <div className="position-absolute top-0 start-100 translate-middle msp-0 mtp-20 zindex-1"><img src={"images/page_" + pagina + "/clip.png"} className="hp-25" alt="" /></div>
                    <div className="f-Ubuntu-R fsp-14 lh-sm text-center ptp-10">En grupo, decidimos que el boceto <br /> que orientará nuestra obra es el de</div>
                    <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-70" />
                  </div>
                </div>
              <div className="position-relative">
                <div className="d-flex w-100">
                  <div className="min-hp-100 w-100 rounded-p-10">
                  <SubirImagen
                                            id={"imagen_" + pagina + "_" + (indexInput += 1)}
                                            className="w-100 bgc-white"
                                            colorUnidad={background}
                                            imagenPlaceHolder1="images/generales/subir_imagen2.svg"
                                            imagenPlaceHolder2="images/generales/subir_imagen2.svg"
                                            titulo="Subir imagen"
                                        />
                  </div>
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

export default Page053;
