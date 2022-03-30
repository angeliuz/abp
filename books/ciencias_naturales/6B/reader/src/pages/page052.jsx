import React from "react";
import InputBox from "../components/InputBox";
import ModalVideo from "../components/ModalVideo";
import Check from "../components/Check";
import "./page_052.css";

function Page052(props) {

  const pagina = "052";
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

          <div className="ptp-20 psp-65 pep-40 pbp-20">
            {/* <div className="f-Ubuntu-B fsp-17 color-pidgey text-start lhp-20 psp-0">Preparamos la jornada de diálogo</div> */}
            <div className="d-flex">
              {/* <img className="hp-15 mtp-20 pep-10" src="images/page_047/i_g.svg" alt="" /> */}
              <div className="f-ccdigitaldelivery-bold fsp-35 color-pidgey pep-10">4</div>
              <div className="f-Ubuntu-R fsp-14 text-start pep-10 mtp-15">En equipo, compartimos y comparamos nuestras apreciaciones y los puntajes con
                que evaluamos el prototipo. Luego, analizamos y completamos.</div>
              {/* <ModalVideo id={"p" + pagina + "_video" + (indexInput += 1)} image="images/page_051/revista.svg" clasesImagen="hp-30 mtp-10" /> */}
            </div>
          </div>
          <div className="d-flex global-margin mtp-10 mbp-10 psp-50 pep-15 ptp-0 pbp-0">
            <div className="row p-0 m-0 w-100">

              <div className="col-12 p-0 m-0 position-relative">
                <div className="w-100 psp-40 ptp-20 pbp-20 pep-15 text-left bgc-draco p-2 box-shadow-simple position-relative">
                  <div className="row w-100 p-0 m-0">
                    <div className="col-12 f-Ubuntu-M fsp-14 lh-sm text-center ptp-20 ">Análisis de la evaluación</div>
                    <div className="col-12 f-Ubuntu-L fsp-14 lh-sm text-start ptp-20 msp-20">Al probar el prototipo el resultado…</div>

                    <div className="col-4 d-flex p-2">
                      <Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check>
                      <div className="d-flex justify-content-start align-items-center text-start f-Ubuntu-L fsp-15 psp-5">fue el esperado.</div>
                    </div>

                    <div className="col-6 d-flex  p-2">
                      <Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check>
                      <div className="d-flex justify-content-start align-items-center text-start f-Ubuntu-L fsp-15 psp-5">no fue el esperado.</div>
                    </div>

                  </div>

                  <div className="position-absolute top-0 start-50 translate-middle h-100 ptp-10 pbp-10 "><div className="espiral-calado wp-30 h-100 rotate-90"></div></div>

                  <div className="col-12 m-0 p-0  ">
                    <div className="position-absolute top-0 start-100 translate-middle zindex-1 mtp-90 "><img src="images/page_052/img_001.png" className="wp-80 " alt="" /></div>
                    <div className=" w-100  f-Ubuntu-L fsp-16 ptp-5  psp-10 pep-10 text-start mbp-10">
                      <div className="m-0 p-0  "> Porque…</div>

                      <div className="bgc-white rounded-p-10  p-3 mbp-10">

                        <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea hp-35 min-hp-105" />
                      </div>
                    </div>
                  </div>
                  <div className="col-12 m-0 p-0  ">
                    <div className=" w-100  f-Ubuntu-L fsp-16 ptp-5  psp-10 pep-10 text-start mbp-10">
                      <div className="m-0 p-0  "> Lo que más nos gusta de nuestro prototipo es...</div>

                      <div className="bgc-white rounded-p-10  p-3 mbp-10">

                        <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea hp-35 min-hp-105" />
                      </div>
                    </div>
                  </div>
                  <div className="col-12 m-0 p-0  ">
                    <div className=" w-100  f-Ubuntu-L fsp-16 ptp-5  psp-10 pep-10 text-start mbp-10">
                      <div className="m-0 p-0  "> Lo que nos gustaría mejorar de nuestro prototipo es...</div>

                      <div className="bgc-white rounded-p-10  p-3 mbp-10">

                        <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea hp-35 min-hp-105" />
                      </div>
                    </div>
                  </div>
                  <div className="col-12 m-0 p-0  ">
                    <div className=" w-100  f-Ubuntu-L fsp-16 ptp-5  psp-10 pep-10 text-start mbp-10">
                      <div className="m-0 p-0  "> Si queremos mejorar nuestro prototipo debemos…</div>

                      <div className="bgc-white rounded-p-10  p-3 mbp-10">

                        <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea hp-35 min-hp-105" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="d-flex global-margin mtp-30  psp-0 pep-15 ptp-0 pbp-0">
            <div className="row p-0 m-0 w-100">
              <div className="col-5 p-0 m-0">
                <div className="d-flex">
                  <div className={"f-ccdigitaldelivery-bold fsp-35 " + color}>5</div>
                  <div className="f-Ubuntu-R fsp-16 ptp-18 psp-10 pep-10 text-start">Reflexiono en torno a mi
                    participación en la creación
                    del prototipo.</div>
                </div>
              </div>
              <div className="col-7 position-relative">
                <div className="position-absolute top-0 start-100 translate-middle zindex-1 msp--40 mtp-20"><img src="images/page_052/pincho.svg" className="wp-30 " alt="" /></div>
                <div className="d-flex mbp-20 mtp-10 w-100">
                  <div className="p-2 min-hp-210 w-100 border-style-solid border-2  border-color-dark ">
                    <div className="f-Ubuntu-L fsp-16 msp-10 mep-10 text-center">Lo que más me costó realizar fue…</div>
                    <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-100" />
                  </div>
                </div>
              </div>
            </div>
          </div>





          <div className="d-flex hp-90 caja-flotante p-0 m-0 position-absolute justify-content-end align-items-end zindex-2" style={{ bottom: 70, right: 0 }}>
            <div className="f-Ubuntu-M fsp-10 position-absolute mbp-60" style={{ transform: `rotate(270deg)`, color: "dark" }}>ABP &copy; SM</div>
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
            <div className="col-1 col-sm-2 p-0 m-0 position-relative">
              <img src="images/rotulo_investigacion.svg" className="oculto" alt="" />
              <div className="w-100 hp-15 bgc-milk rounded-caja"></div>
              <div className="w-100 hp-25 bgc-android18"></div>
            </div>
            <div className="col-7 col-sm-2 p-0 m-0 position-relative">
              <img src="images/rotulo_experimentacion.svg" className="visible rotulo-etapa position-absolute top-0 start-0" alt="" />
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
        </div>
      </div>
    </div>
  );
}

export default Page052;
