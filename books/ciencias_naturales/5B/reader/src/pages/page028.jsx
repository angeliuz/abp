import React from "react";
import InputBox from "../components/InputBox";
import ModalBook from "../components/ModalBook";
import ModalVideo from "../components/ModalVideo";
import ItemLista from "../components/ItemLista";

import "./page_028.css";

function Page028(props) {

  const pagina = "028";
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

          {/* BEGIN CABECERA VERSIÓN 1 */}
          <div className={"cabecera-v1 hp-80 " + background}></div>
          {/* END CABECERA VERSIÓN 1 */}


          <div className="container-titulo-global mtp-20 mbp-0">
            {/* <div className={"f-Ubuntu-B fsp-20 psp-20 text-start lhp-20 "+color}>
xxx
</div> */}
            <div className="d-flex psp-20">
              {/* <img className="hp-20 align-center mt-3 me-2 mb-2" src={"images/page_"+pagina+"/img_.svg"} alt=""  /> */}
              <div className={"f-ccdigitaldelivery-bold fsp-35 " + color}>
                2
              </div>
              <div className="f-Ubuntu-R fsp-16 ptp-18 psp-10 pep-10 text-start">
                Leo el reportaje sobre los sellos de advertencia y realizo las siguientes actividades.
              </div>
              {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image={"images/generales/play.svg"} clasesImagen="cambio hp-40 mtp-10" className="p-0 px-1" /> */}
              {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image={"images/page_"+pagina+"/img_001.png"} className="p-0 px-1" /> */}
              <ModalBook id={"p" + pagina + "_book" + (indexInput += 1)} colorUnidad={background} pagina={"86"} image={"images/page_" + pagina + "/img_001.svg"} clasesImagen="hp-40 text-center mtp-10 " className="p-0 px-0" />
              {/* <img src={"images/page_" + pagina + "/img_001.png"} className="hp-100" alt="" /> */}
            </div>
          </div>


          <div className="d-flex global-margin mtp-30 mbp-0 psp-30 pep-0 ptp-0 pbp-0">
            <div className="row p-0 m-0 w-100">
              <div className="col-12 p-0 m-0 position-relative">
                <ItemLista tipoBullet="letra" valueTipo="a." colorBullet="color-android18" fontSize="fsp-15" fuente="f-Ubuntu-R" color="color-dark">
                  Formulo preguntas.
                </ItemLista>
              </div>
            </div>
          </div>

          <div className="d-flex global-margin mtp-20 mbp-0 psp-0 pep-0 ptp-0 pbp-0">
            <div className="row p-0 m-0 w-100">

              <div className="col-6 p-0 m-0 position-relative">
                <div className="position-absolute top-50 start-0 translate-middle msp-0 mtp-0 visible-768 zindex-1"><img src={"images/page_" + pagina + "/img_003.png"} className="wp-30" alt="" /></div>

                <div className="position-relative msp-10 mep-10">

                  <div className="bgc-buzz rounded-p-10 border-style-solid border-color-saitama border-0 w-100 p-1 f-Ubuntu-L fsp-15 mbp-20">
                    <div className="d-flex bgc-white border-style-solid border-color-bulma border-2 rounded-p-10 p-2">

                      <div className="d-flex flex-column position-relative w-100 text-start mtp-10">
                        <div className="mbp-10 text-center f-Ubuntu-R fsp-15 color-dark">Sobre este tema me <br /> gustaría saber...</div>
                        <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-300" />
                      </div>

                    </div>

                  </div>

                </div>

              </div>

              <div className="col-6 p-0 m-0 position-relative">
                <div className="position-absolute top-0 start-50 translate-middle msp--20 mtp--40 visible-768 zindex-1"><img src={"images/page_" + pagina + "/img_001.png"} className="hp-110" alt="" /></div>
                <div className="position-relative msp-10 mep-10">

                  <div className="bgc-buzz rounded-p-10 border-style-solid border-color-saitama border-0 w-100 p-1 f-Ubuntu-L fsp-15 mbp-20">
                    <div className="d-flex bgc-white border-style-solid border-color-bulma border-2 rounded-p-10 p-2">

                      <div className="d-flex flex-column position-relative w-100 text-start mtp-10">
                        <div className="mbp-10 text-center f-Ubuntu-R fsp-15 color-dark">Durante la investigación me gustaría profundizar sobre...</div>
                        <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-300" />
                      </div>

                    </div>

                  </div>

                </div>
              </div>
              <div className="col-12 p-0 m-0 position-relative">
                <div className="position-absolute top-50 start-100 translate-middle msp--60 mtp-0 visible-768 zindex-1"><img src={"images/page_" + pagina + "/img_004.png"} className="wp-30" alt="" /></div>

                <div className="position-relative msp-10 mep-10 d-flex center-center">

                  <div className="bgc-freezer rounded-p-10 border-style-solid border-color-saitama border-0 w-80 p-1 f-Ubuntu-L fsp-15 mbp-20">
                    <div className="d-flex bgc-white border-style-solid border-color-pidgey border-2 rounded-p-10 p-2">

                      <div className="d-flex flex-column position-relative w-100 text-start mtp-10">
                        <div className="mbp-10 text-center f-Ubuntu-R fsp-15 color-dark">Antes de terminar quisiera saber…</div>
                        <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-300" />
                      </div>

                    </div>

                  </div>

                </div>

              </div>

            </div>
          </div>

          <div className="d-flex global-margin mtp-10 mbp-0 psp-30 pep-0 ptp-0 pbp-0">
            <div className="row p-0 m-0 w-100">
              <div className="col-12 p-0 m-0 position-relative">
                <ItemLista tipoBullet="letra" valueTipo="b." colorBullet="color-android18" fontSize="fsp-15" fuente="f-Ubuntu-R" color="color-dark">
                  Rotulo los sellos de advertencias.
                </ItemLista>
              </div>
            </div>
          </div>

          <div className="d-flex global-margin mtp-10 mbp-100 psp-0 pep-0 ptp-0 pbp-0">
            <div className="row p-0 m-0 w-100">
              <div className="col-sm-6 col-md-3 p-0 m-0 position-relative ">
                <div className="d-flex w-100 hp-150">
                  <div className="position-absolute top-50 start-50 translate-middle msp-0 mtp-0 zindex-1"><img src={"images/page_" + pagina + "/img_005.png"} className="wp-150" alt="" /></div>
                  <div className="d-flex w-100 center-center">
                    <div className=" center-center w-80 psp-10 pep-10 ptp-0 pbp-0 zindex-2">
                      <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 f-Ubuntu-R text-start flex-grow-1 contenedor-linea lhp-35 min-hp-35 text-center" />
                    </div>
                  </div>

                </div>
              </div>
              <div className="col-sm-6 col-md-3 p-0 m-0 position-relative ">
                <div className="d-flex w-100 hp-150">
                  <div className="position-absolute top-50 start-50 translate-middle msp-0 mtp-0 zindex-1"><img src={"images/page_" + pagina + "/img_005.png"} className="wp-150" alt="" /></div>
                  <div className="d-flex w-100 center-center">
                    <div className="center-center w-80 psp-10 pep-10 ptp-0 pbp-0 zindex-2">
                      <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 f-Ubuntu-R text-start flex-grow-1 contenedor-linea lhp-35 min-hp-35 text-center" />
                    </div>
                  </div>

                </div>
              </div>
              <div className="col-sm-6 col-md-3 p-0 m-0 position-relative ">
                <div className="d-flex w-100 hp-150">
                  <div className="position-absolute top-50 start-50 translate-middle msp-0 mtp-0 zindex-1"><img src={"images/page_" + pagina + "/img_005.png"} className="wp-150" alt="" /></div>
                  <div className="d-flex w-100 center-center">
                    <div className="center-center w-80 psp-10 pep-10 ptp-0 pbp-0 zindex-2">
                      <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 f-Ubuntu-R text-start flex-grow-1 contenedor-linea lhp-35 min-hp-35 text-center" />
                    </div>
                  </div>

                </div>
              </div>
              <div className="col-sm-6 col-md-3 p-0 m-0 position-relative ">
                <div className="d-flex w-100 hp-150">
                  <div className="position-absolute top-50 start-50 translate-middle msp-0 mtp-0 zindex-1"><img src={"images/page_" + pagina + "/img_005.png"} className="wp-150" alt="" /></div>
                  <div className="d-flex w-100 center-center">
                    <div className="center-center w-80 psp-10 pep-10 ptp-0 pbp-0 zindex-2">
                      <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 f-Ubuntu-R text-start flex-grow-1 contenedor-linea lhp-35 min-hp-35 text-center" />
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
          <div className="row position-absolute caja-flotante2 p-0 m-0 align-items-end" style={{ bottom: 0 }}>

            <div className={etapa == 1 ? "col-7 position-relative col-md-2 p-0 m-0" : "col-1 position-relative col-md-2 p-0 m-0"}>
              <img src="images/rotulo_motivacion.svg" className={etapa == 1 ? "visible rotulo-etapa position-absolute top-0 start-0" : "oculto"} alt="" />
              <div className="w-100 hp-15 bgc-yamcha rounded-caja-start"></div>
              <div className="w-100 hp-25 bgc-goten"></div>
            </div>
            <div className={etapa == 2 ? "col-7 position-relative col-md-2 p-0 m-0" : "col-1 position-relative col-md-2 p-0 m-0"}>
              <img src="images/rotulo_planificacion.svg" className={etapa == 2 ? "visible rotulo-etapa position-absolute top-0 start-0" : "oculto"} alt="" />
              <div className="w-100 hp-15 bgc-tshinhan rounded-caja"></div>
              <div className="w-100 hp-25 bgc-bulma"></div>
            </div>
            <div className={etapa == 3 ? "col-7 position-relative col-md-2 p-0 m-0" : "col-1 position-relative col-md-2 p-0 m-0"}>
              <img src="images/rotulo_investigacion.svg" className={etapa == 3 ? "visible rotulo-etapa position-absolute top-0 start-0" : "oculto"} alt="" />
              <div className="w-100 hp-15 bgc-milk rounded-caja"></div>
              <div className="w-100 hp-25 bgc-android18"></div>
            </div>
            <div className={etapa == 4 ? "col-7 position-relative col-md-2 p-0 m-0" : "col-1 position-relative col-md-2 p-0 m-0"}>
              <img src="images/rotulo_experimentacion.svg" className={etapa == 4 ? "visible rotulo-etapa position-absolute top-0 start-0" : "oculto"} alt="" />
              <div className="w-100 hp-15 bgc-freezer rounded-caja"></div>
              <div className="w-100 hp-25 bgc-pidgey"></div>
            </div>
            <div className={etapa == 5 ? "col-7 position-relative col-md-2 p-0 m-0" : "col-1 position-relative col-md-2 p-0 m-0"}>
              <img src="images/rotulo_creacion.svg" className={etapa == 5 ? "visible rotulo-etapa position-absolute top-0 start-0" : "oculto"} alt="" />
              <div className="w-100 hp-15 bgc-ash rounded-caja"></div>
              <div className="w-100 hp-25 bgc-saitama"></div>
            </div>
            <div className={etapa == 6 ? "col-7 position-relative col-md-2 p-0 m-0" : "col-1 position-relative col-md-2 p-0 m-0"}>
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

export default Page028;
