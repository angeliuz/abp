import React from "react";
import InputBox from "../components/InputBox";
import ModalBook from "../components/ModalBook";
import ModalVideo from "../components/ModalVideo";

import "./page_027.css";

function Page027(props) {

  const pagina = "027";
  var indexInput = 0;
  const etapa = "3"
  const background = "bgc-android18";
  const color = "color-android18";
  const colorSesion = "color-primary";
  const borderColor = "border-color-android18"
  const bgc_cajas = "bgc-goku";


  return (
    <div className="wrapper bgc-light">
      <div className="d-flex flex-column align-items-center pbp-20">
        <div className="page bgc-white overflow-hidden position-relative" id={"page_" + pagina}>
          {/* BEGIN CABECERA VERSIÓN 2 */}
          <div className="cabecera-v2 bgc-android18 d-flex flex-column">
            <div className="d-flex contenedor-cabecera-v2 ptp-40 psp-30 pep-30">
              <div className="caja wp-160 text-center fsp-24 f-IntroRustG-Base">SESIÓN 6</div>
              <div className="section-name d-flex align-items-center fsp-24 fw-700 f-Ubuntu-M color-white">Mejorando la huella ecológica</div>
            </div>
            <div className="d-flex contenedor-cabecera-v2 ptp-10 psp-30 pep-30 align-self-center justify-content-between w-90">
              <div className="p-2 align-self-center f-colby-compres-bold fsp-15 lh-sm text-white text-center">
                Mis objetivos <br />en  esta sesión son:
              </div>
              <div className="p-0 align-self-center">
                <img src="images/page_027/flecha.svg" className="wp-40 arrow-global" alt="" />
              </div>
              <div className="p-2 align-self-center f-colby-compres-bold fsp-15 lh-sm text-white text-center">
                Leer el reportaje de la<br />revista sobre la huella<br /> ecológica
              </div>
              <div className="p-0 align-self-center">
                <img src="images/page_027/flecha1.svg" className="wp-40 arrow-global rotate-90" alt="" />
              </div>
              <div className="p-2 align-self-center f-colby-compres-bold fsp-15 lh-sm text-white text-center">
                Reconocer usos<br /> inadecuados de la energía<br />en el colegio
              </div>
              <div className="p-0 align-self-center">
                <img src="images/page_027/flecha.svg" className="wp-40 arrow-global" alt="" />
              </div>
              <div className="p-3 align-self-center f-colby-compres-bold fsp-15 lh-sm text-center text-white">
                Señalar cambios para<br /> utilizar responsablemente<br />la energ a en el colegio
              </div>
              {/* <div className="p-0 align-self-center">
                <img src="images/page_025/flecha1.svg" className="wp-40 arrow-global rotate-90" alt="" />
              </div> */}
              {/* <div className="p-2 align-self-center f-colby-compres-bold fsp-15 lh-sm text-white text-center">
                Imaginar cómo<br /> hacer sostenible el<br />colegio
              </div> */}
            </div>
          </div>
          {/* END CABECERA VERSIÓN 2 */}


          <div className="ptp-30 container-titulo-global mbp-20">
            {/* <div className={"f-Ubuntu-B fsp-20 psp-0 text-start lhp-20 " + color}>Contextualizamos</div> */}
            <div className="d-flex">
              {/* <img className="hp-20 align-center mt-3 me-2 mb-2" src={"images/page_"+pagina+"/img_001.svg"} alt=""  /> */}
              <div className={"f-ccdigitaldelivery-bold fsp-35 " + color}>1</div>
              <div className="f-Ubuntu-R fsp-16 ptp-18 psp-10 pep-10 text-start">
                Leo el reportaje de la revista y completo.
              </div>
              {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image="images/generales/play.svg" clasesImagen="cambio hp-40 mtp-10" className="p-0 px-1" /> */}
              {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image="images/page_027/img_003.svg" className="p-0 px-1" /> */}
              {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image="images/page_007/img_001.png" className="p-0 px-1" /> */}
              <ModalBook id={"p" + pagina + "_book" + (indexInput += 1)} image={"images/page_" + pagina + "/img_003.svg"} clasesImagen="hp-40 text-center mtp-10 " className="p-0 px-0" />
            </div>
          </div>





          <div className="d-flex  mtp-0 mbp-0 psp-80 pep-80 ptp-0 pbp-100">


            <div className="row m-0 w-100 ">


              <div className="col-md-6 col-12 position-relative">
                <div className="position-absolute top-100 start-0 translate-middle mtp--90 msp--20 visible-768"><img src="images/page_027/img_005.png" className="wp-120" alt="" /></div>
                <div className="position-absolute top-0 start-50 translate-middle wp-200 mtp-20 bgc-pikachu psp-5 pep-5 ptp-5 pbp-5 rounded-p-20 ">
                  <div className="f-Ubuntu-M color-white fsp-16">¿Qué estoy aprendiendo?</div>
                </div>
                <div className="position-absolute top-0 start-100 translate-middle mtp-10 "><img src="images/page_027/img_007.svg" className="wp-30 " alt="" /></div>
                <div className="position-absolute top-50 start-100 translate-middle msp-25 mtp-0 visible-768"><img src="images/page_027/img_006.png" className="hp-450 " alt="" /></div>

                <div className="d-flex mbp-20 mtp-20 w-100">
                  <div className="p-2  w-100 border-style-solid border-2 rounded-p-10 border-color-leono bgc-tanya">

                    <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-700" />
                  </div>
                </div>
              </div>
              <div className="col-md-1 col-12 "></div>
              <div className="col-md-5 col-12 ">


                <div className="col-md-12 col-12 mbp-20 mtp-60 position-relative">
                  <div className="position-absolute top-0 start-100 translate-middle mtp--60 msp-10 visible-768"><img src="images/page_027/img_004.png" className="wp-120" alt="" /></div>
                  <div className="position-absolute top-0 start-50 translate-middle wp-130 mtp--40 bgc-pikachu psp-5 pep-5 ptp-5 pbp-5 rounded-p-20 ">
                    <div className="f-Ubuntu-M color-white fsp-16">¿Para qué lo
                      puedo utilizar?</div>
                  </div>
                  <div className="text-center w-100 border-2 border-style-solid border-color-leono bgc-tanya rounded-p-10">
                    <div className="rounded-set-6 f-Ubuntu-M fsp-16 pep-20 psp-20 ptp-5 pbp-5 bgc-white d-flex justify-content-center align-items-center color-pikachu">
                      En mi vida
                    </div>
                    <div className="psp-15 pep-15">
                      <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-175" />
                    </div>
                  </div>
                </div>

                <div className="col-md-12 col-12 mbp-20 position-relative">
                  <div className="position-absolute top-0 start-100 translate-middle msp-15 mtp--5 "><img src="images/page_027/img_007.svg" className="wp-30 " alt="" /></div>
                  <div className="text-center w-100 border-2 border-style-solid border-color-leono bgc-tanya rounded-p-10">
                    <div className="rounded-set-6 f-Ubuntu-M fsp-16 pep-20 psp-20 ptp-5 pbp-5 bgc-white d-flex justify-content-center align-items-center color-pikachu">
                      En mi casa y el colegio
                    </div>
                    <div className="psp-15 pep-15">
                      <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-175" />
                    </div>
                  </div>
                </div>

                <div className="col-md-12 col-12 mbp-10 position-relative">
                  <div className="position-absolute top-0 start-100 translate-middle msp-15 mtp--5 "><img src="images/page_027/img_007.svg" className="wp-30 " alt="" /></div>
                  <div className="text-center w-100 border-2 border-style-solid border-color-leono bgc-tanya rounded-p-10">
                    <div className="rounded-set-6 f-Ubuntu-M fsp-16 pep-20 psp-20 ptp-5 pbp-5 bgc-white d-flex justify-content-center align-items-center color-pikachu">
                      En el desafío
                    </div>
                    <div className="psp-15 pep-15">
                      <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-175" />
                    </div>
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
    </div>

  );
}

export default Page027;
