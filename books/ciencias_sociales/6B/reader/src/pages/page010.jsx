import React from "react";
import InputBox from "../components/InputBox";
import ModalBook from "../components/ModalBook";
import SubirImagen from '../components/SubirImagen';

import "./page_010.css";

function Page010(props) {

  const pagina = "010";
  var indexInput = 0;
  const etapa = "1"
  const background = "bgc-goten";
  const color = "color-goten";
  const borderColor = "border-color-goten"
  const bgc_cajas = "bgc-genos";

  return (
    <div className="wrapper bgc-light">
      <div className="d-flex flex-column align-items-center pbp-20">
        <div className="page cb-page10 overflow-hidden position-relative" id={"page_" + pagina}>

          <div className="msp-60 mep-60 mtp-90 mbp-10">
            <div className="p-0 m-0">
              <div className="col-sm-12 col-md-3 position-relative"></div>
              <div class="d-flex justify-content-center">
                <div class="cb-titulo-aceptamos text-center fsp-25 f-IntroRustG-Base mbp-20">ACEPTAMOS EL DESAFÍO</div>
              </div>
              <div className="text-center f-Ubuntu-L fsp-15">Este es el símbolo de nuestro equipo:</div>
              <div className="position-relative mbp-20 mtp-10 msp-60 mep-60">
              <div className="position-absolute top-0 start-0 translate-middle msp-0 mtp-50 visible-768 zindex-1"><img src={"images/page_" + pagina + "/img_001.png"} className="wp-70" alt="" /></div>
                <div className="position-absolute top-100 start-100 translate-middle msp-0 mtp--50 visible-768 zindex-1"><img src={"images/page_" + pagina + "/img_002.png"} className="wp-70" alt="" /></div>
                                    <div className="d-flex center-center p-2 rounded-p-20 border-style-solid border-1 min-hp-150 bgc-white">

                                        <SubirImagen
                                            id={"imagen_" + pagina + "_" + (indexInput += 1)}
                                            className="w-100 bgc-white"
                                            colorUnidad={background}
                                            imagenPlaceHolder="images/generales/subir_imagen.svg"
                                            titulo="Subir imagen"
                                        />
                                    </div>


                                </div>
              <div class="w-100 cb-inicio d-flex text-center align-items-center justify-content-center position-relative">
                <div class="cb-block-superior p-2 pb-2 text-center ">
                  <div class="cb-bloque-0 bgc-ken p-2 pb-2 f-Ubuntu-B fw-700 fsp-15 border-1 border-style-solid cb-outline-p10 border-color-dark zindex-1 color-white">Características de un buen símbolo</div>
                  <div class="cb-bloque-4 text-center bgc-honda p-2 pb-2 f-Ubuntu-L fsp-13 cb-outline-p10 border-1 border-style-solid border-color-dark">
                    <div className="f-Ubuntu-R fsp-13 text-start psp-5">Es original e ingenioso.</div>
                  </div>
                  <div class="cb-bloque-5 text-center bgc-vegeta p-2 pb-2 f-Ubuntu-L  fsp-13 cb-outline-p10 border-1 border-style-solid border-color-dark">
                    <div className="f-Ubuntu-R fsp-13  text-start psp-5">Hace referencias al arte visual y a los derechos.</div>
                  </div>
                  <div class="cb-bloque-6 text-center bgc-rain p-2 pb-2 f-Ubuntu-L  fsp-13 cb-outline-p10 border-1 border-style-solid border-color-dark">
                    <div className="f-Ubuntu-R fsp-13  text-start psp-5">Es llamativo.</div>
                  </div>
                  <div class="cb-bloque-3 text-center bgc-kabal p-2 pb-2 f-Ubuntu-L  fsp-13 cb-outline-p10 border-1 border-style-solid border-color-dark">
                    <div className="f-Ubuntu-R fsp-13  text-start psp-5">Es sencillo: se puede adaptar a diferentes medios y formatos.</div>
                  </div>
                </div>
              </div>

              {/* SECCION COMO VOY */}

              <div className="row w-100 p-0 m-0 ">
                <div className="col-12 position-relative max-wp-600 mx-auto">
                  <div className="position-absolute top-50 start-100 translate-middle msp-0 mtp-50 visible-768 zindex-1"><img src={"images/page_" + pagina + "/img_004.png"} className="wp-130" alt="" /></div>
                  <div className="f-pixilate-bold fsp-18 lh-sm text-start mbp-5">¿Cómo vamos?</div>
                  <div className="d-flex flex-column mbp-20 mtp-10 w-100 mbp-80">
                    <div className="p-2 min-hp-80 w-100 border-style-solid border-2 rounded-p-10 border-color-white bgc-white">
                      <div className="f-Ubuntu-L fsp-15 msp-0 mep-10 text-start">
                        <img src={"images/generales/flecha_e" + etapa + ".svg"} className="mep-5 wp-15" alt="" />
                        <span> ¿Qué es lo que más nos gusta del equipo que formamos?</span>
                      </div>
                      <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-100" />
                      <div className="f-Ubuntu-L fsp-15 msp-0 mep-10 mtp-20 text-start">
                        <img src={"images/generales/flecha_e" + etapa + ".svg"} className="mep-5 wp-15" alt="" />
                        <span>¿Cómo aprovecharemos esa virtud durante el proyecto?</span>
                      </div>
                      <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-100" />
                    </div>
                  </div>
                </div>
              </div>


            </div>
          </div>


          {/* Begin pie de página */}
          <div className="d-flex hp-90 caja-flotante p-0 m-0 position-absolute justify-content-end align-items-end zindex-2" style={{ bottom: 70, right: 0 }}>
            <div className="f-Ubuntu-M fsp-10 position-absolute mbp-60" style={{ transform: `rotate(270deg)`, color: "white" }}>
              ABP &copy; SM
            </div>
            <div className="bgc-boros wp-50 hp-30 f-Ubuntu-M fsp-20 psp-5">{props.numeroPagina(pagina)}</div>
          </div>
          {/* End pie de página */}

        </div>
      </div>
    </div>



  );
}

export default Page010;
