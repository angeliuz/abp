import React from "react";
import InputBox from "../components/InputBox";
import ModalBook from "../components/ModalBook";
import SubirImagen from '../components/SubirImagen';

import "./page_048.css";

function Page048(props) {

  const pagina = "048";
  var indexInput = 0;
  const etapa = "5"
  const background = "bgc-saitama";
  const color = "color-saitama";
  const borderColor = "border-color-saitama"
  const borderColorTabla = "border-color-bobafett"
  const bgc_cajas = "bgc-bobafett";
  return (
    <div className="wrapper bgc-light">
      <div className="d-flex flex-column align-items-center pbp-20">
        <div className="page bgc-white overflow-hidden position-relative" id={"page_" + pagina}>

          {/* BEGIN CABECERA VERSIÓN 1 */}
          <div className={"cabecera-v1 hp-80 " + background}></div>
          {/* END CABECERA VERSIÓN 1 */}


          <div className="ptp-50 container-titulo-global mbp-0">
            <div className={"f-Ubuntu-B fsp-20 psp-20 text-start lhp-20 " + color}>
              ¿Qué necesitamos para la feria?
            </div>
            <div className="d-flex psp-20">
              {/* <img className="hp-20 align-center mt-3 me-2 mb-2" src={"images/page_"+pagina+"/img_.svg"} alt=""  /> */}
              <div className={"f-ccdigitaldelivery-bold fsp-35 " + color}>
                3
              </div>
              <div className="f-Ubuntu-R fsp-16 ptp-18 psp-10 pep-10 text-start">
                Realizamos un listado de los materiales que necesitaremos para...
              </div>
              <img src={"images/page_" + pagina + "/img_001.png"} className="wp-100 mtp--30" alt="" />
              {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image={"images/generales/play.svg"} clasesImagen="cambio hp-40 mtp-10" className="p-0 px-1" /> */}
              {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image={"images/page_"+pagina+"/img_001.png"} className="p-0 px-1" /> */}
              {/* <ModalBook id={ "p" + pagina + "_book"+ (indexInput+=1) } image={"images/page_"+pagina+"/revista.svg"} clasesImagen="hp-40 text-center mtp-10 " className="p-0 px-0" /> */}
            </div>
          </div>



          <div className="d-flex global-margin mtp-20 mbp-0 psp-0 pep-0 ptp-0 pbp-0 bgc-ryu rounded-p-10">
            <div className="row p-0 m-0 w-100 f-Ubuntu-R fsp-15">

              <div className="col-sm-12 col-md-4 p-0 m-0 position-relative">
                <div className="d-flex mtp-20 psp-20 pep-20 ptp-0 pbp-10 position-relative">
                  <div className="position-absolute top-0 start-50 translate-middle msp-0 mtp--10 zindex-1">
                    <div className="wp-25 hp-25 d-flex center-center color-white f-Ubuntu-B fsp-14 psp-5 pep-5 ptp-2 pbp-2  wp-150 min-hp-45 rounded-p-5 bgc-saitama">El modelo</div>
                  </div>
                  <div className="d-flex w-100 psp-10 pep-10 ptp-30 pbp-0 bgc-white rounded-p-10">
                    <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="w-100 p-0 px-1 text-start flex-grow-1 lhp-35 min-hp-250" />
                  </div>
                </div>
              </div>
              <div className="col-sm-12 col-md-4 p-0 m-0 position-relative">
                <div className="d-flex mtp-20 psp-20 pep-20 ptp-0 pbp-10 position-relative">
                  <div className="position-absolute top-0 start-50 translate-middle msp-0 mtp--10 zindex-1">
                    <div className="d-flex center-center color-white f-Ubuntu-B  fsp-14 psp-5 pep-5 ptp-2 pbp-2  rounded-p-5 bgc-saitama min-hp-45  wp-150">La infografía que explique el modelo</div>
                  </div>
                  <div className="d-flex w-100 psp-10 pep-10 ptp-30 pbp-0 bgc-white rounded-p-10">
                    <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="w-100 p-0 px-1 text-start flex-grow-1 lhp-35 min-hp-250" />
                  </div>
                </div>
              </div>
              <div className="col-sm-12 col-md-4 p-0 m-0 position-relative">
                <div className="d-flex mtp-20 psp-20 pep-20 ptp-0 pbp-10 position-relative">
                  <div className="position-absolute top-0 start-50 translate-middle msp-0 mtp--10 zindex-1">
                    <div className="d-flex center-center color-white f-Ubuntu-B fsp-14 psp-5 pep-5 ptp-2 pbp-2 rounded-p-5 bgc-saitama min-hp-45 wp-150">Las decoraciones para el stand</div>
                  </div>
                  <div className="d-flex w-100 psp-10 pep-10 ptp-30 pbp-0 bgc-white rounded-p-10">
                    <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="w-100 p-0 px-1 text-start flex-grow-1 lhp-35 min-hp-250" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="ptp-50 container-titulo-global mbp-0">
            {/* <div className={"f-Ubuntu-B fsp-20 psp-20 text-start lhp-20 " + color}>
              xxx
            </div> */}
            <div className="d-flex psp-20">
              <img className="hp-20 align-center mt-3 me-2 mb-2" src={"images/page_" + pagina + "/img_003.svg"} alt="" />
              <div className={"f-ccdigitaldelivery-bold fsp-35 " + color}>
                4
              </div>
              <div className="f-Ubuntu-R fsp-16 ptp-18 psp-10 pep-10 text-start">
                Planeamos cómo será nuestro stand y luego lo dibujo.
              </div>
              <img src={"images/page_" + pagina + "/img_002.png"} className="hp-100" alt="" />
              {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image={"images/generales/play.svg"} clasesImagen="cambio hp-40 mtp-10" className="p-0 px-1" /> */}
              {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image={"images/page_"+pagina+"/img_001.png"} className="p-0 px-1" /> */}
              {/* <ModalBook id={ "p" + pagina + "_book"+ (indexInput+=1) } image={"images/page_"+pagina+"/revista.svg"} clasesImagen="hp-40 text-center mtp-10 " className="p-0 px-0" /> */}
            </div>
          </div>


          <div className="d-flex psp-0 pep-0 pbp-70 mtp-10 mbp-10">

<div className="row w-100 p-0 m-0">

    <div className="col-md-12 col-lg-12 position-relative">

        <div className="position-absolute top-100 start-0 translate-middle msp-50 mtp-0 visible-768 zindex-1"><img src={"images/page_" + pagina + "/img_004.png"} className="w-100" alt="" /></div>

        <div className="mbp-20 mtp-10 msp-20 mep-20">
            <div className="d-flex center-center p-2 rounded-p-20 border-style-solid border-2 border-color-dark min-hp-300">

                <SubirImagen
                    id={"imagen_" + pagina + "_" + (indexInput += 1)}
                    className="w-100 bgc-white"
                    colorUnidad={background}
                    imagenPlaceHolder="images/generales/subir_imagen.svg"
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

export default Page048;
