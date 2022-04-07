import React from "react";
import InputBox from "../components/InputBox";
import ModalBook from "../components/ModalBook";
import ModalRecortable from "../components/ModalRecortable";
import ModalRecortableEstatico from "../components/ModalRecortableEstatico";

import "./page_059.css";

function Page059(props) {

  const pagina = "059";
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
          {/* BEGIN CABECERA VERSIÓN 2 */}
          <div className="cabecera-v2 bgc-saitama d-flex flex-column">
            <div className="d-flex contenedor-cabecera-v2 ptp-40 psp-30 pep-30">
              <div className="caja-seccion wp-160 hp-60 d-flex justify-content-center ptp-10 mtp-5 color-saitama fsp-24 f-IntroRustG-Base">SESIÓN 12</div>
              <div className="section-name d-flex align-items-center fsp-24 fw-700 f-Ubuntu-M color-white">¡Manos a la obra!</div>
            </div>

          </div>
          {/* END CABECERA VERSIÓN 2 */}
          <div className="ptp-10 psp-60 pep-60 mbp-0">
            <div className="f-Ubuntu-B fsp-20 color-saitama text-start lhp-20 ">Los preparativos</div>
            <div className="d-flex">
              {/* <img className="hp-20 align-center mt-3 me-2 mb-2" src="images/page_045/g_i.svg" alt="" /> */}
              <div className="f-ccdigitaldelivery-bold fsp-35 color-saitama">1</div>
              <div className="f-Ubuntu-R fsp-16 ptp-18 psp-10 text-start"> Recuerdo cuál era la misión de la brigada y sus tareas.</div>
              {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image="images/page_045/revista.svg" clasesImagen="cambio hp-35 mtp-20" className="p-0 px-1" /> */}
            </div>
          </div>

          <div className="d-flex msp-60 mep-60 position-relative">
            <div className="row m-0 p-1 bgc-motaro rounded-p-20  w-100">

              <div className="col-12   p-2">
                <div className="p-1   w-100 border-style-solid border-2 rounded-p-10 border-color-white bgc-white">
                  <div className="f-Ubuntu-L fsp-16   mep-10 text-start">Nombre de nuestra brigada:</div>
                  <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-40" />
                </div>
              </div>
              <div className="col-12  p-2 ">
                <div className="p-1   w-100 border-style-solid border-2 rounded-p-10 border-color-white bgc-white">
                  <div className="f-Ubuntu-L fsp-16   mep-10 text-start">La misión de nuestra brigada es:</div>
                  <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-80" />
                </div>
              </div>
              <div className="col-12  p-2 ">
                <div className="p-1   w-100 border-style-solid border-2 rounded-p-10 border-color-white bgc-white">
                  <div className="f-Ubuntu-L fsp-16   mep-10 text-start">La brigada estará a cargo de:</div>
                  <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-80" />
                </div>
              </div>
              <div className="col-6  p-2 ">
                <div className="p-1 h-100  w-100 border-style-solid border-2 rounded-p-10 border-color-white bgc-white">
                  <div className="f-Ubuntu-L fsp-16   mep-10 text-start">Yo tengo la responsabilidad de:</div>
                  <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-195" />
                </div>
              </div>
              <div className="col-6  p-2 ">
                <div className="p-1 h-100  w-100 border-style-solid border-2 rounded-p-10 border-color-white bgc-white">
                  <div className="f-Ubuntu-L fsp-16   mep-10 text-start">Mis compañeros de equipo tienen la responsabilidad de:</div>
                  <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-180" />
                </div>
              </div>

              <div className="col-12  p-2 ">
                <div className="p-1   w-100 border-style-solid border-2 rounded-p-10 border-color-white bgc-white">
                  <div className="f-Ubuntu-L fsp-16   mep-10 text-start"> Lo que más me motiva de ser brigadista es:</div>
                  <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-80" />
                </div>
              </div>
              <div className="col-12  p-2 ">
                <div className="p-1   w-100 border-style-solid border-2 rounded-p-10 border-color-white bgc-white">
                  <div className="f-Ubuntu-L fsp-16   mep-10 text-start">Lo que más me asusta de ser brigadista es: </div>
                  <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-80" />
                </div>
              </div>
            </div>
            <div className="position-absolute top-0 start-100 translate-middle msp-0 mtp-0 zindex-1"><img src={"images/page_" + pagina + "/img_002.png"} className="wp-50" alt="" /></div>
            <div className="position-absolute top-50 start-100 translate-middle msp-10 mtp-150 zindex-1"><img src={"images/page_" + pagina + "/img_003.png"} className="wp-60" alt="" /></div>
            <div className="position-absolute top-50 start-0 translate-middle msp-0 mtp-170 zindex-1"><img src={"images/page_" + pagina + "/img_004.png"} className="wp-60" alt="" /></div>
          </div>

          <div className="row ptp--10 mbp-100">
            <div className="col">
              <div className="  psp-60 pep-60 mbp-55">

                <div className="d-flex">
                  {/* <img className="hp-20 align-center mt-3 me-2 mb-2" src="images/page_045/g_i.svg" alt="" /> */}
                  <div className="f-ccdigitaldelivery-bold fsp-35 color-saitama">2</div>
                  <div className="f-Ubuntu-R fsp-16 ptp-18 psp-10 text-start"> Recorto y armo mi credencial de brigadista.</div>
                  {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image="images/generales/play.jpg" clasesImagen="hp-40 text-center mtp-10 " className="p-0 px-1" /> */}
                  <div className="hp-20 wp-50 mtp-10 msp-10">
                    {/* <ModalRecortable
                      id={"p" + pagina + "_cutouts_" + (indexInput += 1)}
                      pagina={pagina}
                      image={"images/page_" + pagina + "/img_005.svg"}
                      numRecortables="1"
                      className="p-0 m-0 d-flex pe-auto bgc-goten"
                    /> */}
                    <ModalRecortableEstatico
                      id={"p" + pagina + "_cutouts_" + (indexInput += 1)}
                      pagina={pagina}
                      image={"images/page_" + pagina + "/img_005.svg"}
                      colorUnidad={background}
                      numRecortables="1"
                      grupo="1"
                      className="p-0 m-0 d-flex wp-200 hp-200 pe-auto"
                    />
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
            <div className="col-1 col-md-2 p-0 m-0 position-relative">
              <img src="images/rotulo_motivacion.svg" className="oculto" alt="" />
              <div className="w-100 hp-15 bgc-yamcha rounded-caja-start"></div>
              <div className="w-100 hp-25 bgc-goten"></div>
            </div>
            <div className="col-1 col-md-2 p-0 m-0 position-relative">
              <img src="images/rotulo_planificacion.svg" className="oculto" alt="" />
              <div className="w-100 hp-15 bgc-tshinhan rounded-caja"></div>
              <div className="w-100 hp-25 bgc-bulma"></div>
            </div>
            <div className="col-1 col-md-2 p-0 m-0 position-relative">
              <img src="images/rotulo_investigacion.svg" className="oculto" alt="" />
              <div className="w-100 hp-15 bgc-milk rounded-caja"></div>
              <div className="w-100 hp-25 bgc-android18"></div>
            </div>
            <div className="col-1 col-md-2 p-0 m-0 position-relative">
              <img src="images/rotulo_experimentacion.svg" className="oculto" alt="" />
              <div className="w-100 hp-15 bgc-freezer rounded-caja"></div>
              <div className="w-100 hp-25 bgc-pidgey"></div>
            </div>
            <div className="col-7 col-md-2 p-0 m-0 position-relative">
              <img src="images/rotulo_creacion.svg" className="visible rotulo-etapa position-absolute top-0 start-0" alt="" />
              <div className="w-100 hp-15 bgc-ash rounded-caja"></div>
              <div className="w-100 hp-25 bgc-saitama"></div>
            </div>
            <div className="col-1 col-md-2 p-0 m-0 position-relative">
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
