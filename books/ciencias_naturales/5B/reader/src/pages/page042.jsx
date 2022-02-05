import React from "react";
import InputBox from "../components/InputBox";
import ModalVideo from "../components/ModalVideo";
import ModalBook from "../components/ModalBook";
import "./page_042.css";

function Page042(props) {

  const pagina = "042";
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
          <div className="cabecera-v1 hp-80 bgc-pidgey"></div>
          {/* END CABECERA VERSIÓN 2 */}

          <div className="ptp-10 container-titulo-global-1 mbp-0 mep-0">
            <div className="d-flex ptp-5 psp-60 align-items-top justify-content-start">
              <div className="text-start f-Ubuntu-B color-pidgey fsp-15">c.</div>
              <div className="text-start f-Ubuntu-L fsp-15 psp-5">Escribo 3 preguntas que me parece importante que incluya la encuesta.</div>
            </div>
          </div>

          <div className="d-flex global-margin mtp-10 mbp-0 psp-60 pep-0 ptp-0 pbp-0">
            <div className="row p-0 m-0 w-100">
              <div className="col-12 position-relative rounded-p-5 bgc-white border-style-solid border-2 border-color-freezer p-2 mbp-10">
                <div className="position-absolute start-0 top-0 rounded-be-10 bgc-hermione border-style-solid border-start-0 border-top-0 border-2 border-color-freezer p-2 text-center color-pidgey wp-35 f-Ubuntu-B fsp-14" styleName="top:calc(50% - 15px); margin-top: -2px;">1</div>
                <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="msp-30 px-1 fsp-15 text-start flex-grow-1 lhp-35 min-hp-35 contenedor-linea" />
              </div>
              <div className="col-12 position-relative rounded-p-5 bgc-white border-style-solid border-2 border-color-freezer p-2 mbp-10">
                <div className="position-absolute start-0 top-0 rounded-be-10 bgc-hermione border-style-solid border-start-0 border-top-0 border-2 border-color-freezer p-2 text-center color-pidgey wp-35 f-Ubuntu-B fsp-14" styleName="top:calc(50% - 15px); margin-top: -2px;">2</div>
                <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="msp-30 px-1 fsp-15 text-start flex-grow-1 lhp-35 min-hp-35 contenedor-linea" />
              </div>
              <div className="col-12 position-relative rounded-p-5 bgc-white border-style-solid border-2 border-color-freezer p-2 mbp-10">
                <div className="position-absolute start-0 top-0 rounded-be-10 bgc-hermione border-style-solid border-start-0 border-top-0 border-2 border-color-freezer p-2 text-center color-pidgey wp-35 f-Ubuntu-B fsp-14" styleName="top:calc(50% - 15px); margin-top: -2px;">3</div>
                <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="msp-30 px-1 fsp-15 text-start flex-grow-1 lhp-35 min-hp-35 contenedor-linea" />
              </div>
            </div>
          </div>

          <div className="ptp-10 container-titulo-global-1 mbp-0 mep-0">
            {/* <div className={"f-Ubuntu-B fsp-20 psp-20 text-start lhp-20 " + color}>xxx</div> */}
            <div className="d-flex psp-0">
              <img className="hp-15 align-center mtp-20 me-2 mb-2" src={"images/page_" + pagina + "/g.svg"} alt="" />
              <div className={"f-ccdigitaldelivery-bold fsp-35 " + color}>2</div>
              <div className="f-Ubuntu-R fsp-16 lh-sm ptp-18 psp-10 pep-10 text-start">Comento con mis compañeros este modelo de encuesta y diseñamos la nuestra con los datos que necesitamos.</div>
              {/* <img src={"images/page_"+pagina+"/img_001.svg"} className="wp-100" alt=""/> */}
              {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image={"images/generales/play.svg"} clasesImagen="cambio hp-40 mtp-10" className="p-0 px-1" /> */}
              {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image={"images/page_"+pagina+"/img_001.png"} className="p-0 px-1" /> */}
              <ModalBook id={"p" + pagina + "_book" + (indexInput += 1)} image={"images/page_" + pagina + "/revista.svg"} clasesImagen="hp-35 text-center mtp-10 " className="p-0 px-0" />
            </div>
            {/* <div className="d-flex ptp-5 psp-60 align-items-top justify-content-start">
              <div className="text-start f-Ubuntu-B color-pidgey fsp-15">a.</div>
              <div className="text-start f-Ubuntu-L fsp-15 psp-5">Reflexionamos en equipo y contesto.</div>
            </div> */}
          </div>

          <div className="d-flex global-margin mtp-10 mbp-60 psp-50 pep-0 ptp-0 pbp-0">
            <div className="row p-0 m-0 w-100 position-relative">
              <div className="position-absolute top-50 start-0 translate-middle zindex-2"><img src={"images/page_" + pagina + "/lapiz.png"} className="hp-80 mep-10 mbp-200" alt="" /></div>
              <div className="col-12 m-0 rounded-p-10 bgc-motaro p-3 position-relative">
                <div className="text-center f-colby-bold fsp-18 pbp-10">ENCUESTA</div>
                <div className="d-flex align-items-center pbp-10">
                  <div className="f-Ubuntu-L fsp-15 lh-sm pep-5 text-start">Nombre:</div>
                  <div className="w-100 bgc-white border-style-solid border-1 border-color-dark bgc-white rounded-1"><InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="px-1 fsp-15 text-start flex-grow-1 lhp-30 min-hp-30 contenedor-linea" /></div>
                  <div className="f-Ubuntu-L fsp-15 lh-sm pep-5 psp-10">Curso:</div>
                  <div className="w-20 bgc-white border-style-solid border-1 border-color-dark bgc-white rounded-1"><InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="px-1 fsp-15 text-start flex-grow-1 lhp-30 min-hp-30 contenedor-linea" /></div>
                </div>
                <div className="d-flex align-items-center pbp-10">
                  <div className="f-Ubuntu-L fsp-15 lh-sm pep-5 text-start">Fecha de nacimiento:</div>
                  <div className="w-100 bgc-white border-style-solid border-1 border-color-dark bgc-white rounded-1"><InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="px-1 fsp-15 text-start flex-grow-1 lhp-30 min-hp-30 contenedor-linea" /></div>
                  <div className="f-Ubuntu-L fsp-15 lh-sm pep-5 psp-10 text-start">Tengo:</div>
                  <div className="w-20 bgc-white border-style-solid border-1 border-color-dark bgc-white rounded-1"><InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="px-1 fsp-15 text-start flex-grow-1 lhp-30 min-hp-30 contenedor-linea" /></div>
                  <div className="f-Ubuntu-L fsp-15 lh-sm pep-5 psp-5 text-start">años</div>
                </div>
                <div className="d-flex align-items-center pbp-10">
                  <div className="f-Ubuntu-L fsp-15 lh-sm pep-5 text-start"><span className="f-Ubuntu-M pep-10">1.</span>¿Compras en el kiosco del colegio?</div>
                  <div className="wp-30 hp-30 bgc-white border-style-solid border-1 border-color-dark bgc-white rounded-1"><InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 fsp-15 text-center flex-grow-1 lhp-30 min-hp-30" /></div>
                  <div className="f-Ubuntu-L fsp-15 lh-sm pep-10 psp-5 text-start">Sí</div>
                  <div className="wp-30 hp-30 bgc-white border-style-solid border-1 border-color-dark bgc-white rounded-1"><InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 fsp-15 text-center flex-grow-1 lhp-30 min-hp-30" /></div>
                  <div className="f-Ubuntu-L fsp-15 lh-sm pep-5 psp-5 text-start">No</div>
                </div>
                <div className="align-items-center pbp-0 f-Ubuntu-L fsp-15 lh-sm pep-5 text-start"><span className="f-Ubuntu-M pep-10">2.</span>Si la respuesta fue Sí, menciona los productos que compras habitualmente.</div>
                <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="px-1 fsp-15 text-start flex-grow-1 lhp-35 min-hp-35 contenedor-linea msp-20" />
                <div className="d-flex align-items-center pbp-10 ptp-10">
                  <div className="w-60 f-Ubuntu-L fsp-15 lh-sm pep-5 mtp-0 text-start"><span className="f-Ubuntu-M pep-10">3.</span>¿Qué otros alimentos te gustaría que se vendieran?</div>
                  <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="px-1 fsp-15 text-start flex-grow-1 lhp-35 min-hp-35 contenedor-linea msp-0" />
                </div>
                <div className="d-flex align-items-center pbp-10">
                  <div className="f-Ubuntu-L fsp-15 lh-sm pep-5 text-start"><span className="f-Ubuntu-M pep-10">4.</span>¿Almuerzas en el casino del colegio?</div>
                  <div className="wp-30 hp-30 bgc-white border-style-solid border-1 border-color-dark bgc-white rounded-1"><InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 fsp-15 text-center flex-grow-1 lhp-30 min-hp-30" /></div>
                  <div className="f-Ubuntu-L fsp-15 lh-sm pep-10 psp-5 text-start">Sí</div>
                  <div className="wp-30 hp-30 bgc-white border-style-solid border-1 border-color-dark bgc-white rounded-1"><InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 fsp-15 text-center flex-grow-1 lhp-30 min-hp-30" /></div>
                  <div className="f-Ubuntu-L fsp-15 lh-sm pep-5 psp-5 text-start">No</div>
                </div>
                <div className="align-items-center pbp-0 f-Ubuntu-L fsp-15 lh-sm pep-5 text-start"><span className="f-Ubuntu-M pep-10">5.</span>Si la respuesta fue Sí, menciona tus comidas favoritas.</div>
                <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="px-1 fsp-15 text-start flex-grow-1 lhp-35 min-hp-35 contenedor-linea msp-20" />
                <div className="align-items-center pbp-0 f-Ubuntu-L fsp-15 lh-sm pep-5 ptp-10 text-start"><span className="f-Ubuntu-M pep-10">6.</span>¿Qué otras alternativas te gustaría que estuvieran disponibles en el casino?</div>
                <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="px-1 fsp-15 text-start flex-grow-1 lhp-35 min-hp-35 contenedor-linea msp-20" />
                <div className="align-items-center pbp-10 f-Ubuntu-L fsp-15 lh-sm pep-5 ptp-10 text-start"><span className="f-Ubuntu-M pep-10">7.</span>Selecciona las afirmaciones que te identifican.</div>
                <div className="d-flex align-items-center psp-20 pbp-10">
                  <div className="wp-30 hp-30 bgc-white border-style-solid border-1 border-color-dark bgc-white rounded-1"><InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 fsp-15 text-center flex-grow-1 lhp-30 min-hp-30" /></div>
                  <div className="f-Ubuntu-L fsp-15 lh-sm pep-5 psp-10 text-start">Tomo bebidas azucaradas más de 2 veces por semana.</div>
                </div>
                <div className="d-flex align-items-center psp-20 pbp-10">
                  <div className="wp-30 hp-30 bgc-white border-style-solid border-1 border-color-dark bgc-white rounded-1"><InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 fsp-15 text-center flex-grow-1 lhp-30 min-hp-30" /></div>
                  <div className="f-Ubuntu-L fsp-15 lh-sm pep-5 psp-10 text-start">Como al menos 2 porciones de frutas al día.</div>
                </div>
                <div className="d-flex align-items-center psp-20 pbp-10">
                  <div className="wp-30 hp-30 bgc-white border-style-solid border-1 border-color-dark bgc-white rounded-1"><InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 fsp-15 text-center flex-grow-1 lhp-30 min-hp-30" /></div>
                  <div className="f-Ubuntu-L fsp-15 lh-sm pep-5 psp-10 text-start">Para las comidas prefiero las papas fritas en lugar de las verduras.</div>
                </div>
                <div className="d-flex align-items-center psp-20 pbp-10">
                  <div className="wp-30 hp-30 bgc-white border-style-solid border-1 border-color-dark bgc-white rounded-1"><InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 fsp-15 text-center flex-grow-1 lhp-30 min-hp-30" /></div>
                  <div className="f-Ubuntu-L fsp-15 lh-sm pep-5 psp-10 text-start">Suelo comer comida rápida 1 o 2 veces por semana.</div>
                </div>
                <div className="d-flex align-items-center psp-20 pbp-5">
                  <div className="wp-30 hp-30 bgc-white border-style-solid border-1 border-color-dark bgc-white rounded-1"><InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 fsp-15 text-center flex-grow-1 lhp-30 min-hp-30" /></div>
                  <div className="f-Ubuntu-L fsp-15 lh-sm pep-5 psp-10 text-start">Mi <i>snack</i> favorito son los dulces y pasteles.</div>
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

export default Page042;
