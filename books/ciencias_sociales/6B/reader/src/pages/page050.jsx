import React from "react";
import InputBox from "../components/InputBox";
import ModalVideo from "../components/ModalVideo";
import ModalBook from "../components/ModalBook";
import "./page_050.css";

function Page050(props) {

  const pagina = "050";
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

          <div className="ptp-10 container-titulo-global-1 mbp-0">
            {/* <div className={"f-Ubuntu-B fsp-20 psp-20 text-start lhp-20 " + color}>xxx</div> */}
            <div className="d-flex psp-0">
              <img className="hp-15 align-center mtp-20 me-2 mb-2" src={"images/page_" + pagina + "/g_i.svg"} alt="" />
              <div className={"f-ccdigitaldelivery-bold fsp-35 " + color}>2</div>
              <div className="f-Ubuntu-R fsp-16 ptp-18 psp-10 pep-10 text-start">A partir de los análisis realizados en la actividad anterior, acuerdo con mi grupo dos formatos que nos gustaría considerar como opciones para nuestra obra (pintura, escultura, mural, arpillera, instalación u otro). En cada caso, señalamos posibles ventajas y desventajas.</div>
              {/* <img src={"images/page_"+pagina+"/img_001.svg"} className="wp-100" alt=""/> */}
              {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image={"images/generales/play.svg"} clasesImagen="cambio hp-40 mtp-10" className="p-0 px-1" /> */}
              {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image={"images/page_"+pagina+"/img_001.png"} className="p-0 px-1" /> */}
              {/* <ModalBook id={"p" + pagina + "_book" + (indexInput += 1)} image={"images/page_" + pagina + "/revista.svg"} clasesImagen="hp-35 text-center mtp-10 " className="p-0 px-0" /> */}
            </div>
          </div>

          <div className="d-flex global-margin mtp-0 mbp-0 psp-0 pep-0 ptp-0 pbp-0">
            <div className="row p-0 m-0 w-100">
              <div className="col-12 p-0 m-0 position-relative">

              </div>
            </div>
          </div>

          <div className="d-flex global-margin mtp-10 mbp-20 psp-50 pep-15 ptp-0 pbp-0">
            <div className="row m-0 w-100 bgc-hansolo p-2 position-relative rounded-p-10">
              <div className="position-absolute top-0 start-100 translate-middle zindex-1"><img src={"images/page_" + pagina + "/megafono.png"} className="hp-50 mtp-50 mep-40" alt="" /></div>
              <div className="position-absolute top-100 start-100 translate-middle zindex-1"><img src={"images/page_" + pagina + "/mono.png"} className="hp-140 mtp-20 mep-40" alt="" /></div>
              
              <div className="col-12 p-1 m-0 position-relative">
                <div className="d-flex pbp-10 align-items-center">
                  <div className="f-Ubuntu-R fsp-14 lh-sm text-start pep-10">Formato 1:</div>
                  <div className="flex-grow-1 bgc-white rounded-p-10"><InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 lhp-35 min-hp-35" /></div>
                </div>
              </div>

              <div className="d-flex flex-row bd-highlight mb-3 col-6 p-2 m-0 position-relative">
              <div className="position-absolute top-50 start-100 translate-middle zindex-1 mtp--20"><img src={"images/page_" + pagina + "/espiral.svg"} className="wp-45 mtp-55 mep-0" alt="" /></div>
              
                <div className="bgc-white rounded-p-10 p-2 w-100">
                  <div className="f-Ubuntu-R fsp-14 lh-sm text-center">Ventajas</div>
                  <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-245" />
                </div>
              </div>
              
              <div className=" d-flex flex-row bd-highlight mb-3 col-6 p-2 m-0 position-relative">
                <div className="bgc-white rounded-p-10 p-2 w-100">
                  <div className="f-Ubuntu-R fsp-14 lh-sm text-center">Desventajas</div>
                  <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-245" />
                </div>
              </div>
            </div>
          </div>

          <div className="d-flex global-margin mtp-10 mbp-60 psp-50 pep-15 ptp-0 pbp-0">
            <div className="row m-0 w-100 bgc-bobafett p-2 position-relative rounded-p-10">
              
              
              <div className="col-12 p-1 m-0 position-relative">
              
                <div className="d-flex pbp-10 align-items-center">
                  <div className="f-Ubuntu-R fsp-14 lh-sm text-start pep-10">Formato 2:</div>
                  <div className="flex-grow-1 bgc-white rounded-p-10"><InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 lhp-35 min-hp-35" /></div>
                </div>
              </div>

              <div className="d-flex flex-row bd-highlight mb-3 col-6 p-2 m-0 position-relative">
              <div className="position-absolute top-50 start-100 translate-middle zindex-1 mtp--20"><img src={"images/page_" + pagina + "/espiral.svg"} className="wp-45 mtp-55 mep-0" alt="" /></div>
              <div className="position-absolute top-50 start-0 translate-middle zindex-1"><img src={"images/page_" + pagina + "/lapiz.png"} className="hp-80 mtp-50 mep-0" alt="" /></div>
                <div className="bgc-white rounded-p-10 p-2 w-100">
                  <div className="f-Ubuntu-R fsp-14 lh-sm text-center">Ventajas</div>
                  <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-245" />
                </div>
              </div>

              <div className="d-flex flex-row bd-highlight mb-3 col-6 p-2 m-0 position-relative">
                <div className="bgc-white rounded-p-10 p-2 w-100">
                  <div className="f-Ubuntu-R fsp-14 lh-sm text-center">Desventajas</div>
                  <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-245" />
                </div>
              </div>
            </div>
          </div>



          {/* <div className="w-100 text-left bgc-draco p-2 box-shadow-simple position-relative">
                <div className="position-absolute top-100 start-100 translate-middle"><img src="images/page_049/mono.png" className="hp-200 mtp--200 mep-60" alt="" /></div>


                <div className="bgc-white rounded-p-10 p-3 mbp-10">
                  <div className="f-Ubuntu-R fsp-14 lh-sm text-center">Desventajas</div>
                  <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea hp-35 min-hp-210" />
                </div>
              </div>
            </div>
          </div>
        </div> */}

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
    </div >
  );
}

export default Page050;
