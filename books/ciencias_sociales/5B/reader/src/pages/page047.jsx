import React from "react";
import InputBox from "../components/InputBox";
import ModalBook from "../components/ModalBook";

import "./page_047.css";

function Page047(props) {

  const pagina = "047";
  var indexInput = 0;

  return (
    <div className="wrapper bgc-light">
      <div className="d-flex flex-column align-items-center pbp-20">
        <div className="page bgc-white overflow-hidden position-relative" id={"page_" + pagina}>
          {/* BEGIN CABECERA VERSIÓN 2 */}
          <div className="cabecera-v2 bgc-pidgey d-flex flex-column">
            <div className="d-flex contenedor-cabecera-v2 ptp-40 psp-30 pep-30">
              <div className="caja wp-160 text-center fsp-24 f-IntroRustG-Base">SESIÓN 10</div>
              <div className="section-name d-flex align-items-center fsp-24 fw-700 f-Ubuntu-M color-white">Organizamos las entrevistas</div>
            </div>
            <div className="d-flex contenedor-cabecera-v2 ptp-10 psp-30 pep-30 align-self-center justify-content-between w-90">
              <div className="p-2 align-self-center f-colby-compres-bold fsp-15 lh-sm text-white text-center">
                Mis objetivos en <br /> esta sesión son:
              </div>
              <div className="p-0 align-self-center">
                <img src="images/page_047/flecha.svg" className="wp-40 arrow-global" alt="" />
              </div>
              <div className="p-2 align-self-center f-colby-compres-bold fsp-15 lh-sm text-white text-center">
                Seleccionar a las personas<br /> que entrevistaremos.
              </div>
              <div className="p-0 align-self-center">
                <img src="images/page_047/flecha1.svg" className="wp-40 arrow-global rotate-90" alt="" />
              </div>
              <div className="p-2 align-self-center f-colby-compres-bold fsp-15 lh-sm text-white text-center">
                Decidir cómo realizar  <br />las entrevistas.
              </div>
              <div className="p-0 align-self-center">
                <img src="images/page_047/flecha.svg" className="wp-40 arrow-global" alt="" />
              </div>
              <div className="p-3 align-self-center f-colby-compres-bold fsp-15 lh-sm text-center text-white">
                Enviar las invitaciones<br /> a las entrevistas.
              </div>
            </div>
          </div>
          {/* END CABECERA VERSIÓN 2 */}
          <div className="ptp-10 container-titulo-global mbp-20">
            <div className="d-flex">
              <img className="hp-20 align-center mt-3 me-2 mb-2" src="images/page_047/i_g.svg" alt="" />
              <div className="f-ccdigitaldelivery-bold fsp-35 color-pidgey">1</div>
              <div className="f-Ubuntu-R fsp-16 ptp-18 psp-10 pep-10 text-start">Propongo una persona de mi entorno para entrevistar y explico por qué sería importante conocer su experiencia.</div>
              {/* <ModalBook id={ "p" + pagina + "_book"+ (indexInput+=1) } image="images/page_031/img_002.svg" clasesImagen="hp-40 text-center mtp-10 " className="p-0 px-0" /> */}
            </div>
          </div>

          <div className="d-flex msp-60 mep-60 mbp-0">

            <div className="row ptp-20 ps-12 pe-8 m-0 w-100">

              <div className="col-sm-12 col-md-6 position-relative ptp-20 pbp-20 m-0 d-flex justify-content-start">
                <img src="images/page_047/flechas_celeste.svg" className="wp-25 rotar-flecha position-absolute zindex-1 posicion-flecha" alt="" />
                <div className="position-relative bgc-harry rounded-p-10 w-90 ptp-5 pbp-10">
                  <div className="position-absolute mtp-30 msp-10 bgc-pidgey wp-25 hp-25 text-white text-center rounded-1 f-Ubuntu-R fsp-16 zindex-1">1</div>
                  <div className="f-Ubuntu-M fsp-15 text-center color-white">Sugiero entrevistar a...</div>
                  <div className="position-relative rounded-p-5 bgc-hermione mtp-5 msp-20 mep-10 psp-20 pep-10 pbp-10 w-100" >
                    <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-110" />
                  </div>
                </div>
              </div>
              <div className="col-sm-12 col-md-6 position-relative  ptp-20 pbp-20 m-0 d-flex justify-content-end">
                <img src="images/page_047/flechas_celeste.svg" className="wp-25 rotar-flecha position-absolute" alt="" />
                <div className="position-relative bgc-harry rounded-p-10 w-90 ptp-5 pbp-10">
                  <div className="f-Ubuntu-M fsp-15 text-center color-white">¿Por qué?</div>
                  <div className="position-relative rounded-p-5 bgc-white mtp-5 msp--15 mep-200  psp-20 pep-10 pbp-10 w-100 border-style-solid border-2 border-color-pidgey" >
                    <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-110" />
                  </div>
                </div>
              </div>

            </div>

          </div>

          <div className="ptp-10 container-titulo-global mbp-0">
            <div className="d-flex">
              {/* <img className="hp-20 align-center mt-3 me-2 mb-2" src="images/page_047/i_g.svg" alt=""  /> */}
              {/* <div className="f-ccdigitaldelivery-bold fsp-35 color-pidgey">1</div> */}
              <div className="f-Ubuntu-R fsp-16 ptp-18 psp-10 pep-10 text-start">Acuerdo con mi grupo cuáles serán las dos personas que entrevistaremos y justificamos nuestra decisión.</div>
              {/* <ModalBook id={ "p" + pagina + "_book"+ (indexInput+=1) } image="images/page_031/img_002.svg" clasesImagen="hp-40 text-center mtp-10 " className="p-0 px-0" /> */}
            </div>
          </div>

          <div className="d-flex msp-60 mep-60 mbp-0">

            <div className="row ptp-0 ps-12 pe-8 m-0 w-100">

              <div className="col-sm-12 col-md-6 position-relative ptp-20 pbp-30 m-0 d-flex justify-content-start">
                <img src="images/page_047/flechas_naranja.svg" className="wp-25 rotar-flecha position-absolute zindex-1 posicion-flecha" alt="" />
                <div className="position-relative bgc-voldemort rounded-p-10 w-90 ptp-5 pbp-10">
                  <div className="position-absolute mtp-30 msp-10 bgc-bulma wp-25 hp-25 text-white text-center rounded-1 f-Ubuntu-R fsp-16 zindex-1">1</div>
                  <div className="f-Ubuntu-M fsp-15 text-center color-white">Sugiero entrevistar a...</div>
                  <div className="position-relative rounded-p-5 bgc-draco mtp-5 msp-20 mep-10 psp-20 pep-10 pbp-10 w-100" >
                    <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-110" />
                  </div>
                </div>
              </div>
              <div className="col-sm-12 col-md-6 position-relative ptp-20 pbp-30 m-0 d-flex justify-content-end">
                <img src="images/page_047/flechas_naranja.svg" className="wp-25 rotar-flecha position-absolute" alt="" />
                <div className="position-relative bgc-voldemort rounded-p-10 w-90 ptp-5 pbp-10">
                  <div className="f-Ubuntu-M fsp-15 text-center color-white">¿Por qué?</div>
                  <div className="position-relative rounded-p-5 bgc-white mtp-5 msp--15 mep-200  psp-20 pep-10 pbp-10 w-100 border-style-solid border-2 border-color-bulma" >
                    <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-110" />
                  </div>
                </div>
              </div>

              <div className="col-sm-12 col-md-6 position-relative ptp-0 pbp-30 m-0 d-flex justify-content-start">
                <img src="images/page_047/flechas_naranja.svg" className="wp-25 rotar-flecha position-absolute zindex-1 posicion-flecha2" alt="" />
                <div className="position-relative bgc-voldemort rounded-p-10 w-90 ptp-5 pbp-10">
                  <div className="position-absolute mtp-30 msp-10 bgc-bulma wp-25 hp-25 text-white text-center rounded-1 f-Ubuntu-R fsp-16 zindex-1">2</div>
                  <div className="f-Ubuntu-M fsp-15 text-center color-white">Sugiero entrevistar a...</div>
                  <div className="position-relative rounded-p-5 bgc-draco mtp-5 msp-20 mep-10 psp-20 pep-10 pbp-10 w-100" >
                    <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-110" />
                  </div>
                </div>
              </div>
              <div className="col-sm-12 col-md-6 position-relative  ptp-0 pbp-30 m-0 d-flex justify-content-end">
                <div className="position-relative bgc-voldemort rounded-p-10 w-90 ptp-5 pbp-10">
                  <div className="f-Ubuntu-M fsp-15 text-center color-white">¿Por qué?</div>
                  <div className="position-relative rounded-p-5 bgc-white mtp-5 msp--15 mep-200  psp-20 pep-10 pbp-10 w-100 border-style-solid border-2 border-color-bulma" >
                    <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-110" />
                  </div>
                </div>
              </div>

            </div>

          </div>

          <div className="ptp-10 psp-50 pep-50 mbp-60">
            <div className="d-flex">
              <img className="hp-20 align-center mt-3 me-2 mb-2" src="images/page_047/g.svg" alt="" />
              <div className="f-ccdigitaldelivery-bold fsp-35 color-pidgey">2</div>
              <div className="f-Ubuntu-R fsp-16 ptp-18 psp-10 pep-10 text-start">Con mi grupo, numero los pasos para realizar las entrevistas.</div>
              {/* <ModalBook id={ "p" + pagina + "_book"+ (indexInput+=1) } image="images/page_031/img_002.svg" clasesImagen="hp-40 text-center mtp-10 " className="p-0 px-0" /> */}
            </div>
          </div>

          {/* <div className="d-flex msp-60 mep-60 mbp-100">
            <div className="row w-100 p-0 m-0">
              <div className="col-sm-12 col-md-6 pbp-10">
                <div className="d-flex">
                  <div className="d-flex justify-content-center align-items-center f-ccdigitaldelivery-bold fsp-15 color-pidgey wp-30 hp-30 border-style-solid border-1 border-color-dark rounded-2 bgc-white">
                    <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-0 text-center wp-30 hp-30 lhp-35 min-hp-35" />
                  </div>
                  <div className="d-flex justify-content-start align-items-center text-start Ubuntu-R fsp-15 psp-5">Informar que la entrevista será registrada.</div>
                </div>
              </div>
              <div className="col-sm-12 col-md-6 pbp-10">
                <div className="d-flex">
                  <div className="d-flex justify-content-center align-items-center f-ccdigitaldelivery-bold fsp-15 color-pidgey wp-30 hp-30 border-style-solid border-1 border-color-dark rounded-2 bgc-white">
                    <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-0 text-center wp-30 hp-30 lhp-35 min-hp-35" />
                  </div>
                  <div className="d-flex justify-content-start align-items-center text-start Ubuntu-R fsp-15 psp-5">Asistir puntualmente.</div>
                </div>
              </div>

              <div className="col-sm-12 col-md-6 pbp-10">
                <div className="d-flex">
                  <div className="d-flex justify-content-center align-items-center f-ccdigitaldelivery-bold fsp-15 color-pidgey wp-30 hp-30 border-style-solid border-1 border-color-dark rounded-2 bgc-white">
                    <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-0 text-center wp-30 hp-30 lhp-35 min-hp-35" />
                  </div>
                  <div className="d-flex justify-content-start align-items-center text-start Ubuntu-R fsp-15 psp-5">Preguntar y escuchar con atención a la vez que se registra entrevista.</div>
                </div>
              </div>
              <div className="col-sm-12 col-md-6 pbp-10">
                <div className="d-flex">
                  <div className="d-flex justify-content-center align-items-center f-ccdigitaldelivery-bold fsp-15 color-pidgey wp-30 hp-30 border-style-solid border-1 border-color-dark rounded-2 bgc-white">
                    <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-0 text-center wp-30 hp-30 lhp-35 min-hp-35" />
                  </div>
                  <div className="d-flex justify-content-start align-items-center text-start Ubuntu-R fsp-15 psp-5">Agradecer y despedirse.</div>
                </div>
              </div>

              <div className="col-sm-12 col-md-6 pbp-10">
                <div className="d-flex">
                  <div className="d-flex justify-content-center align-items-center f-ccdigitaldelivery-bold fsp-15 color-pidgey wp-30 hp-30 border-style-solid border-1 border-color-dark rounded-2 bgc-white">
                    <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-0 text-center wp-30 hp-30 lhp-35 min-hp-35" />
                  </div>
                  <div className="d-flex justify-content-start align-items-center text-start Ubuntu-R fsp-15 psp-5">Saludar y presentarse.</div>
                </div>
              </div>
              <div className="col-sm-12 col-md-6 pbp-10">
                <div className="d-flex">
                  <div className="d-flex justify-content-center align-items-center f-ccdigitaldelivery-bold fsp-15 color-pidgey wp-30 hp-30 border-style-solid border-1 border-color-dark rounded-2 bgc-white">
                    <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-0 text-center wp-30 hp-30 lhp-35 min-hp-35" />
                  </div>
                  <div className="d-flex justify-content-start align-items-center text-start Ubuntu-R fsp-15 psp-5">Explicar el objetivo de la entrevista.</div>
                </div>
              </div>

            </div>
          </div> */}

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

export default Page047;
