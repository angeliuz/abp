import React from "react";
import InputBox from "../components/InputBox";
import ModalBook from "../components/ModalBook";

import "./page_040.css";

function Page040(props) {
  const pagina = "040";
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
          <div className="cabecera-v1 hp-80 bgc-android18">
          </div>

          <div className="ptp-50 container-titulo-global mbp-0">
            <div className="d-flex psp-20">
              <img className="hp-20 align-center mt-3 me-2 mb-2" src={"images/page_" + pagina + "/img_001.svg"} alt="" />
              <div className={"f-ccdigitaldelivery-bold fsp-35 " + color}>
                2
              </div>
              <div className="f-Ubuntu-R fsp-16 ptp-18 psp-10 pep-10 text-start">
                En grupo, completamos el siguiente esquema.
              </div>
              {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image={"images/generales/play.svg"} clasesImagen="cambio hp-40 mtp-10" className="p-0 px-1" /> */}
              {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image={"images/page_"+pagina+"/img_001.png"} className="p-0 px-1" /> */}
              {/* <ModalBook id={ "p" + pagina + "_book"+ (indexInput+=1) } image={"images/page_"+pagina+"/revista65.svg"} clasesImagen="hp-40 text-center mtp-10 " className="p-0 px-0" /> */}
            </div>
          </div>

          <div className="psp-60 pep-60 ptp-40">
            <div className="bgc-blanka psp-20 pep-20 ptp-20 pbp-30 rounded-p-20 position-relative">

              <div className="col-12 pbp-70">
                <div className=" bgc-bach w-100 rounded-set-20 d-flex justify-content-center position-relative">
                <div className="">
                    <div className=" position-absolute top-0 start-50 translate-middle mtp--15 bgc-debussy w-80 p-1 f-Ubuntu-B color-white rounded-set-20 ">La idea central que expresaremos en nuestra obra es...</div>
                  </div>
                  <div className="f-Ubuntu-R w-80 py-2">Seleccionen la idea del esquema anterior que más les interese expresar (derecho, deber, desafío o medida de defensa u otra)</div>
                  
                </div>
                <div className="bgc-white w-100 p-3 rounded-seb-20">
                  <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-80" />
                </div>
              </div>

              <div className="col-12 bgc-bach w-100 rounded-set-20 d-flex justify-content-center  position-relative">
                <div className="f-Ubuntu-R w-80 py-2">Señalen la importancia de esa idea. Pueden hacerlo a partir de su relación con otras ideas presentes en el esquema anterior.</div>

                <div className="position-absolute top-0 start-0 translate-middle mtp--20 msp-120">
                  <div className="bgc-debussy mxwp-450 f-Ubuntu-B color-white rounded-set-20 py-2 psp-10 pep-10">Argumento 1</div>
                </div>
                <div className="position-absolute top-0 start-100 translate-middle msp--120 mtp--20">
                  <div className="bgc-debussy mxwp-450 f-Ubuntu-B color-white rounded-set-20 py-2 psp-10 pep-10">Argumento 2</div>
                </div>
              </div>

              <div className="row pbp-70">
                <div className="col-6 position-relative">
                <div className="position-absolute top-100 start-50 translate-middle mtp-12 zindex-1"><img src={"images/page_" + pagina + "/img_002.svg"} className="wp-50" alt="" /></div>
                  <div className="bgc-white p-2 rounded-seb-20  position-relative">
                    <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 lhp-25 hp-80 overflow-auto" />
                  </div>
                </div>
                <div className="col-6 position-relative">
                <div className="position-absolute top-100 start-50 translate-middle mtp-12 zindex-1"><img src={"images/page_" + pagina + "/img_002.svg"} className="wp-50" alt="" /></div>
                  <div className="bgc-white p-2 rounded-seb-20 position-relative">
                    <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 lhp-25 hp-80 overflow-auto" />
                  </div>
                </div>
              </div>

              <div className="col-12 pbp-20">
                <div className="bgc-bach w-100 rounded-set-20 d-flex justify-content-center position-relative">
                <div className="">
                    <div className="position-absolute top-0 start-50 translate-middle mtp--16 bgc-debussy w-80 p-1 f-Ubuntu-B color-white rounded-set-20">El impacto que esperamos en los espectadores es el siguiente:</div>
                  </div>
                  <div className="f-Ubuntu-R mxwp-550 py-2">Indiquen las sensaciones, ideas, acciones o comportamientos que desean provocar en los espectadores con su obra.</div>
                  
                </div>
                <div className="bgc-white w-100 p-3 rounded-seb-20">
                  <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-80" />
                </div>
              </div>
              <div className="position-absolute top-50 start-0 translate-middle msp-0 mtp--120 zindex-1"><img src={"images/page_" + pagina + "/img_002.png"} className="wp-90" alt="" /></div>
              <div className="position-absolute top-100 start-100 translate-middle msp-0 mtp--40 zindex-1"><img src={"images/page_" + pagina + "/img_003.png"} className="wp-90" alt="" /></div>
            </div>
          </div>

          <div className="ptp-10 container-titulo-global mbp-0">
            <div className="d-flex psp-20">
              {/* <img className="hp-20 align-center mt-3 me-2 mb-2" src={"images/page_"+pagina+"/img_.svg"} alt=""  /> */}
              <div className={"f-ccdigitaldelivery-bold fsp-35 " + color}>
                3
              </div>
              <div className="f-Ubuntu-R fsp-16 ptp-18 psp-10 pep-10 text-start">
                En grupo, escribimos el discurso o manifiesto de nuestra obra.
              </div>
              {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image={"images/generales/play.svg"} clasesImagen="cambio hp-40 mtp-10" className="p-0 px-1" /> */}
              {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image={"images/page_"+pagina+"/img_001.png"} className="p-0 px-1" /> */}
              {/* <ModalBook id={ "p" + pagina + "_book"+ (indexInput+=1) } image={"images/page_"+pagina+"/revista65.svg"} clasesImagen="hp-40 text-center mtp-10 " className="p-0 px-0" /> */}
            </div>
          </div>

          <div className="psp-60 pep-120 ptp-20 position-relative">

            <div className="d-flex justify-content-between pbp-20">
              <div className="caja1-p40 bgc-verde1 rounded-p-20 position-relative d-flex justify-content-center align-items-center">
                <div className="f-Ubuntu-M color-white">Párrafo 1</div>
                <div className="position-absolute top-50 start-100 translate-middle msp-10 mtp-0 zindex-1"><img src={"images/page_" + pagina + "/img_003.svg"} className="wp-60" alt="" /></div>
              </div>
              <div className="mnwp-20"></div>
              <div className="caja2-p40 border-style-solid border-3 border-color-chitara rounded-p-20 d-flex justify-content-center align-items-center">
                <div className="f-Ubuntu-L psp-40 pep-20">Explica la idea central que expresarán en la obra.</div>
              </div>
            </div>
            <div className="d-flex justify-content-between pbp-20">
              <div className="caja1-p40 bgc-verde2 rounded-p-20 position-relative d-flex justify-content-center align-items-center">
                <div className="f-Ubuntu-M color-white">Párrafo 2</div>
                <div className="position-absolute top-50 start-100 translate-middle msp-10 mtp-0 zindex-1"><img src={"images/page_" + pagina + "/img_003.svg"} className="wp-60" alt="" /></div>
              </div>
              <div className="mnwp-20"></div>
              <div className="caja2-p40 border-style-solid border-3 border-color-chitara rounded-p-20 d-flex justify-content-center align-items-center">
                <div className="f-Ubuntu-L psp-40 pep-20">Profundiza en el primer argumento y señala su relación con la idea central.</div>
              </div>
            </div>
            <div className="d-flex justify-content-between pbp-20">
              <div className="caja1-p40 bgc-verde3 rounded-p-20 position-relative d-flex justify-content-center align-items-center">
                <div className="f-Ubuntu-M color-white">Párrafo 3</div>
                <div className="position-absolute top-50 start-100 translate-middle msp-10 mtp-0 zindex-1"><img src={"images/page_" + pagina + "/img_003.svg"} className="wp-60" alt="" /></div>
              </div>
              <div className="mnwp-20"></div>
              <div className="caja2-p40 border-style-solid border-3 border-color-chitara rounded-p-20 d-flex justify-content-center align-items-center">
                <div className="f-Ubuntu-L psp-40 pep-20">Profundiza en el segundo argumento y señala su relación con la idea central.</div>
              </div>
            </div>
            <div className="d-flex justify-content-between pbp-20">
              <div className="caja1-p40 bgc-verde4 rounded-p-20 position-relative d-flex justify-content-center align-items-center">
                <div className="f-Ubuntu-M color-white ">Párrafo 4</div>
                <div className="position-absolute top-50 start-100 translate-middle msp-10 mtp-0 zindex-1"><img src={"images/page_" + pagina + "/img_003.svg"} className="wp-60" alt="" /></div>
              </div>
              <div className="mnwp-20"></div>
              <div className="caja2-p40 border-style-solid border-3 border-color-chitara rounded-p-20 d-flex justify-content-center align-items-center">
                <div className="f-Ubuntu-L psp-40 pep-20">Señala el aporte o impacto que se espera tener al expresar estas ideas en la obra artística.</div>
              </div>
            </div>
            <div className="position-absolute top-100 start-100 translate-middle msp--80 mtp--120 zindex-1"><img src={"images/page_" + pagina + "/img_004.png"} className="wp-80" alt="" /></div>
          </div>

          <div className=" pbp-100"></div>

          {/* PIE DE PAGINA */}
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
              <div className="w-100 hp-15 bgc-bach rounded-caja-end"></div>
              <div className="w-100 hp-25 bgc-pikachu"></div>
            </div>
          </div>

        </div>
      </div>
    </div >
  );
}

export default Page040;
