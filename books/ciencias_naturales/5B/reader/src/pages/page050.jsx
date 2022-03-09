import React from "react";
import InputBox from "../components/InputBox";
import ModalBook from "../components/ModalBook";
import Check from "../components/Check";

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

          {/* BEGIN CABECERA VERSIÓN 1 */}
          <div className={"cabecera-v1 hp-80 " + background}></div>
          {/* END CABECERA VERSIÓN 1 */}
          <div className="container-titulo-global mtp-20 mbp-0">
            <div className="d-flex psp-20">
              {/* <img className="hp-20 align-center mt-3 me-2 mb-2" src={"images/page_"+pagina+"/img_.svg"} alt=""  /> */}
              <div className={"f-ccdigitaldelivery-bold fsp-35 " + color}>
                2
              </div>
              <div className="f-Ubuntu-R fsp-16 ptp-18 psp-10 pep-10 text-start">
                Selecciono los consejos que me parecen más importantes de incorporar a la propuesta.
              </div>
              {/* <img src={"images/page_"+pagina+"/img_00.svg"} className="wp-100" alt=""/> */}
              {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image={"images/generales/play.svg"} clasesImagen="cambio hp-40 mtp-10" className="p-0 px-1" /> */}
              {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image={"images/page_"+pagina+"/img_001.png"} className="p-0 px-1" /> */}
              {/* <ModalBook id={ "p" + pagina + "_book"+ (indexInput+=1) } image={"images/page_"+pagina+"/revista.svg"} clasesImagen="hp-40 text-center mtp-10 " className="p-0 px-0" /> */}
            </div>
          </div>

          <div className="psp-60 pep-60 ptp-20">
            <div className="row">

              <div className="col-md-6 ptp-10 pbp-10">
                <div className="bgc-bach rounded-p-10 hp-90 d-flex align-items-center p-2 position-relative">
                  <div className="f-Ubuntu-R text-start psp-30">Proponer nuevas alternativas de alimentación saludables para el colegio.</div>
                  <div className="position-absolute top-50 start-0 translate-middle msp-0 mtp-0">
                    <div className="">
                    <Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-6 ptp-10 pbp-10">
                <div className="bgc-honda rounded-p-10 hp-90 d-flex align-items-center p-2 position-relative">
                  <div className="f-Ubuntu-R text-start psp-30">Considerar las sugerencias escritas por los compañeros en la consulta pública de la propuesta.</div>
                  <div className="position-absolute top-50 start-0 translate-middle msp-0 mtp-0">
                    <div className="">
                    <Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check>
                    </div>
                  </div>
                </div>
              </div>

            </div>
            <div className="row ">

              <div className="col-md-6 ptp-10 pbp-10">
                <div className="bgc-gohan rounded-p-10 hp-90 d-flex align-items-center p-2 position-relative">
                  <div className="f-Ubuntu-R text-start psp-30">Incluir otros alimentos que no consideramos en nuestra propuesta.</div>
                  <div className="position-absolute top-50 start-0 translate-middle msp-0 mtp-0">
                    <div className="">
                    <Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-6 ptp-10 pbp-10">
                <div className="bgc-milena rounded-p-10 hp-90 d-flex align-items-center p-2 position-relative">
                  <div className="f-Ubuntu-R text-start psp-30">Identificar los alimentos de la propuesta que no gustaron y cambiarlos por otros.</div>
                  <div className="position-absolute top-50 start-0 translate-middle msp-0 mtp-0">
                    <div className="">
                    <Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check>
                    </div>
                  </div>
                </div>
              </div>

            </div>
            <div className="row">

              <div className="col-md-6 ptp-10 pbp-10">
                <div className="bgc-sid rounded-p-10 py-2 d-flex align-items-center p-2 position-relative">
                  <div className="w-100">
                    <div className="f-Ubuntu-R text-start psp-30">Otro...</div>
                    <div className="psp-20 pep-20 pbp-10">
                      <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-120" />
                    </div>
                  </div>
                  <div className="position-absolute top-50 start-0 translate-middle msp-0 mtp-0">
                    <div className="">
                    <Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 ptp-10 pbp-10">
                <div className="bgc-sargento rounded-p-10 py-2 d-flex align-items-center p-2 position-relative">
                  <div className="w-100">
                    <div className="f-Ubuntu-R text-start psp-30">Otro...</div>
                    <div className="psp-20 pep-20 pbp-10">
                      <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-120" />
                    </div>
                  </div>
                  <div className="position-absolute top-50 start-0 translate-middle msp-0 mtp-0">
                    <div className="">
                    <Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="psp-60 pep-60 ptp-20 pbp-80">
            <div className="row pbp-20">
              <div className="col-md-9 col-12 d-flex justify-content-center">
                <div className="text-start w-100 border-style-solid border-2 psp-20 pep-20 ptp-10 pbp-10 rounded-p-20">
                  <div className="">La propuesta debe cambiar...</div>
                  <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-220" />
                </div>
              </div>
            </div>
            <div className="row pbp-20">
              <div className="col-md-3 col-0"></div>
              <div className="col-md-9 col-12 d-flex justify-content-center position-relative">
                <div className="text-start w-100 border-style-solid border-2 psp-20 pep-20 ptp-10 pbp-10 rounded-p-20">
                  <div className="">Se puede mejorar...</div>
                  <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-220" />
                </div>
                <div className="position-absolute top-50 start-0 translate-middle msp-0 mtp-0 zindex-1"><img src={"images/page_" + pagina + "/estrella.png"} className="wp-60" alt="" /></div>
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
    </div >
  );
}

export default Page050;
