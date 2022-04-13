import React from "react";
import InputBox from "../components/InputBox";
import ModalBook from "../components/ModalBook";
import Check from "../components/Check";

import "./page_048.css";

function Page048(props) {

  const pagina = "048";
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

          {/* BEGIN CABECERA VERSIÓN 1 */}
          <div className={"cabecera-v1 hp-80 " + background}></div>
          {/* END CABECERA VERSIÓN 1 */}
          <div className="container-titulo-global mtp-20 mbp-0">
            <div className="d-flex psp-20">
              <img className="hp-20 align-center mt-3 me-2 mb-2" src={"images/page_" + pagina + "/i_g.svg"} alt="" />
              <div className={"f-ccdigitaldelivery-bold fsp-35 " + color}>
                3
              </div>
              <div className="f-Ubuntu-R fsp-16 ptp-18 psp-10 pep-10 text-start">
                Seleccionamos la información que debe incluir la propuesta que redactaremos.
              </div>
              {/* <img src={"images/page_"+pagina+"/img_00.svg"} className="wp-100" alt=""/> */}
              {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image={"images/generales/play.svg"} clasesImagen="cambio hp-40 mtp-10" className="p-0 px-1" /> */}
              {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image={"images/page_"+pagina+"/img_001.png"} className="p-0 px-1" /> */}
              {/* <ModalBook id={ "p" + pagina + "_book"+ (indexInput+=1) } image={"images/page_"+pagina+"/revista.svg"} clasesImagen="hp-40 text-center mtp-10 " className="p-0 px-0" /> */}
            </div>
          </div>
          <div className="psp-120 pep-120 ptp-20">
            <div className="bgc-motaro rounded-p-20 p-2 position-relative">
              <div className="f-colby-bold ptp-10 pbp-10 fsp-18">Una propuesta de alimentación saludable</div>
              <div className="psp-20 pep-20">
                <div className="f-Ubuntu-R text-start ptp-10 pbp-10">El contenido debe incluir:</div>

                <div className="position-relative ptp-10 pbp-10">
                  <div className="f-Ubuntu-L text-start psp-40">propuestas de <i>snack</i> saludables.</div>
                  <div className="position-absolute top-50 start-0 translate-middle msp-10 mtp-0">
                    <Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check>
                  </div>
                </div>

                <div className="position-relative ptp-10 pbp-10">
                  <div className="f-Ubuntu-L text-start psp-40">propuestas de desayuno y almuerzo.</div>
                  <div className="position-absolute top-50 start-0 translate-middle msp-10 mtp-0">
                    <Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check>
                  </div>
                </div>

                <div className="position-relative ptp-10 pbp-10">
                  <div className="f-Ubuntu-L text-start psp-40">una sección explicativa que detalle la variedad de nutrientes presentes en las alternativas que preparamos.</div>
                  <div className="position-absolute top-50 start-0 translate-middle msp-10 mtp-0">
                    <Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check>
                  </div>
                </div>

                <div className="position-relative ptp-10 pbp-10">
                  <div className="f-Ubuntu-L text-start psp-40">una sección que justifique por qué la propuesta se considera un ejemplo alimentación saludable.</div>
                  <div className="position-absolute top-50 start-0 translate-middle msp-10 mtp-0">
                    <Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check>
                  </div>
                </div>

                <div className="position-relative ptp-10 pbp-10">
                  <div className="f-Ubuntu-L text-start psp-40">fotografías con las preparaciones de las alternativas de alimentación.</div>
                  <div className="position-absolute top-50 start-0 translate-middle msp-10 mtp-0">
                    <Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check>
                  </div>
                </div>

                <div className="position-relative ptp-10 pbp-10">
                  <div className="f-Ubuntu-L text-start psp-40">una sección con recomendaciones de alimentación saludable.</div>
                  <div className="position-absolute top-50 start-0 translate-middle msp-10 mtp-0">
                    <Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check>
                  </div>
                </div>

                <div className="position-relative ptp-10 pbp-10">
                  <div className="f-Ubuntu-L text-start psp-40">consejos relacionados con los beneficios de mantener una alimentación saludable.</div>
                  <div className="position-absolute top-50 start-0 translate-middle msp-10 mtp-0">
                    <Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check>
                  </div>
                </div>

                <div className="position-relative ptp-10 pbp-10 d-flex">
                  <div className="f-Ubuntu-L text-start psp-40">otros:</div>
                  <div className="w-70 psp-10 mtp--5"><InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-35" /></div>
                  <div className="position-absolute top-50 start-0 translate-middle msp-10 mtp-0">
                    <Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check>
                  </div>
                </div>
                <div className="f-Ubuntu-R text-start ptp-10 pbp-10">La información debe resultar:</div>

                <div className="position-relative ptp-10 pbp-10">
                  <div className="f-Ubuntu-L text-start psp-40">clara, estructurada y ordenada.</div>
                  <div className="position-absolute top-50 start-0 translate-middle msp-10 mtp-0">
                    <Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check>
                  </div>
                </div>
                <div className="position-relative ptp-10 pbp-10">
                  <div className="f-Ubuntu-L text-start psp-40">original, atractiva y llamativa.</div>
                  <div className="position-absolute top-50 start-0 translate-middle msp-10 mtp-0">
                    <Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check>
                  </div>
                </div>
              </div>
              <div className="position-absolute top-0 start-0 translate-middle msp-0 mtp-30 zindex-1"><img src={"images/page_" + pagina + "/lapiz.png"} className="hp-90" alt="" /></div>
              <div className="position-absolute top-50 start-100 translate-middle msp-0 mtp-0 zindex-1"><img src={"images/page_" + pagina + "/megafono.png"} className="hp-60" alt="" /></div>

            </div>
          </div>

          <div className="container-titulo-global mtp-20 mbp-0">
            <div className="d-flex psp-20">
              {/* <img className="hp-20 align-center mt-3 me-2 mb-2" src={"images/page_"+pagina+"/img_.svg"} alt=""  /> */}
              <div className={"f-ccdigitaldelivery-bold fsp-35 " + color}>
                4
              </div>
              <div className="f-Ubuntu-R fsp-16 ptp-18 psp-10 pep-10 text-start">
                Creamos un documento con nuestra propuesta de alimentación saludable para el colegio.
              </div>
              {/* <img src={"images/page_"+pagina+"/img_00.svg"} className="wp-100" alt=""/> */}
              {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image={"images/generales/play.svg"} clasesImagen="cambio hp-40 mtp-10" className="p-0 px-1" /> */}
              {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image={"images/page_"+pagina+"/img_001.png"} className="p-0 px-1" /> */}
              {/* <ModalBook id={ "p" + pagina + "_book"+ (indexInput+=1) } image={"images/page_"+pagina+"/revista.svg"} clasesImagen="hp-40 text-center mtp-10 " className="p-0 px-0" /> */}
            </div>
          </div>

          <div className="psp-60 pep-60 ptp-20 pbp-100">
            <div className="border-style-solid border-2 rounded-p-20">
              <div className="f-Ubuntu-L ptp-10 pbp-10 text-start psp-20 pep-20">La propuesta se la vamos a presentar a nuestros compañeros, por medio de una consulta pública, con el objetivo de...</div>
              <div className="bgc-sid psp-20 pep-20 ptp-10 rounded-p-20 pbp-10">
                <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-180" />
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
      </div >
    </div >
  );
}

export default Page048;
