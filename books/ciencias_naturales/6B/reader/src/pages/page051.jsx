import React from "react";
import InputBox from "../components/InputBox";
import ModalVideo from "../components/ModalVideo";
import "./page_051.css";

function Page051(props) {
  const pagina = "051";
  var indexInput = 0;
  const etapa = "4";
  const background = "bgc-pidgey";
  const color = "color-pidgey";
  const borderColor = "border-color-pidgey";
  const borderColorTabla = "border-color-pantro";
  const bgc_cajas = "bgc-pantro";

  return (
    <div className="wrapper bgc-light">
      <div className="d-flex flex-column align-items-center pbp-20">
        <div
          className="page bgc-white overflow-hidden position-relative"
          id={"page_" + pagina}
        >
          {/* BEGIN CABECERA VERSIÓN 2 */}
          <div className={"cabecera-v2 d-flex flex-column " + background}>
            <div className="d-flex contenedor-cabecera-v2 ptp-40 psp-30 pep-30">
              <div
                className={
                  "caja-seccion wp-160 hp-70 text-center fsp-24 f-IntroRustG-Base color-dark"
                }
              >
                SESIÓN 13
              </div>
              <div className="d-flex align-items-center fsp-24 fw-700 f-Ubuntu-M color-white">
                ¡A construir!
              </div>
            </div>
            <div className="d-flex contenedor-cabecera-v2 ptp-10 psp-30 pep-30 align-self-center justify-content-between w-95">
              <div className="psp-5 pep-5 align-self-center f-colby-compres-bold fsp-17 lh-sm text-white text-center">
                Mis objetivos en <br /> esta sesión son:
              </div>
              <div className="p-0 align-self-center">
                <img
                  src={"images/generales/flecha_sesion_e" + etapa + "_1.svg"}
                  className="wp-40 arrow-global"
                  alt=""
                />
              </div>
              <div className="psp-5 pep-5 align-self-center f-colby-compres-bold fsp-17 lh-sm text-white text-center">
                Construir el prototipo de <br /> un aparato o sistema
              </div>
              <div className="psp-5 pep-5 align-self-center">
                <img
                  src={"images/generales/flecha_sesion_e" + etapa + "_2.svg"}
                  className="wp-40 arrow-global"
                  alt=""
                />
              </div>
              <div className="psp-5 pep-5 align-self-center f-colby-compres-bold fsp-17 lh-sm text-white text-center">
                Evaluar el funcionamiento <br /> del prototipo
              </div>
              <div className="p-0 align-self-center">
                <img
                  src={"images/generales/flecha_sesion_e" + etapa + "_1.svg"}
                  className="wp-40 arrow-global"
                  alt=""
                />
              </div>
              <div className="psp-5 pep-5 align-self-center f-colby-compres-bold fsp-17 lh-sm text-white text-center">
                Proponer mejoras para el <br /> prototipo
              </div>
            </div>
          </div>
          {/* END CABECERA VERSIÓN 2 */}

          <div className="ptp-0 psp-65 pep-40">
            {/* <div className="f-Ubuntu-B fsp-17 color-pidgey text-start lhp-20 psp-0">Preparamos la jornada de diálogo</div> */}
            <div className="d-flex">
              <img
                className="hp-15 mtp-20 pep-10"
                src="images/page_051/img_004.svg"
                alt=""
              />
              <div className="f-ccdigitaldelivery-bold fsp-35 color-pidgey pep-10">
                1
              </div>
              <div className="f-Ubuntu-R fsp-14 text-start pep-10 mtp-15 w-85">
                Construimos nuestro prototipo y lo ponemos a prueba.
              </div>
              {/* <ModalVideo id={"p" + pagina + "_video" + (indexInput += 1)} image="images/page_033/revista.png" clasesImagen="hp-35 mtp-10" /> */}
            </div>
          </div>
          <div className="ptp-20 psp-65 pep-40">
            {/* <div className="f-Ubuntu-B fsp-17 color-pidgey text-start lhp-20 psp-0">Preparamos la jornada de diálogo</div> */}
            <div className="d-flex">
              {/* <img className="hp-15 mtp-20 pep-10" src="images/page_047/i_g.svg" alt="" /> */}
              <div className="f-ccdigitaldelivery-bold fsp-35 color-pidgey pep-10">
                2
              </div>
              <div className="f-Ubuntu-R fsp-14 text-start pep-10 mtp-15">
                Escribo mi apreciación sobre nuestro prototipo.
              </div>
              {/* <ModalVideo id={"p" + pagina + "_video" + (indexInput += 1)} image="images/page_051/revista.svg" clasesImagen="hp-30 mtp-10" /> */}
            </div>
          </div>
          <div className="d-flex msp-60 mep-60 mbp-0 mtp-10">
            <div className="row m-0 psp-10 pep-10 ptp-0 pbp-10 rounded-p-20 w-100">
              <div className="col-sm-12 col-md-6 position-relative">
                <div className="d-flex mbp-20 mtp-10 w-100">
                  <div className="p-2 min-hp-210 w-100 border-style-solid border-2  border-color-smoke bgc-smoke">
                    <div className="f-Ubuntu-L fsp-16 msp-10 mep-10 text-center">
                      Lo que más me gusta de nuestro prototipo es…
                    </div>
                    <InputBox
                      id={"p" + pagina + "_input" + (indexInput += 1)}
                      className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-140"
                    />
                  </div>
                </div>
              </div>
              <div className="col-sm-12 col-md-6 position-relative">
                {/* <div className="position-absolute top-0 start-100 translate-middle msp--40 mtp-20 zindex-1 "><img src="images/page_025/img_009.png" className="" alt="" /></div> */}
                <div className="d-flex mbp-20 mtp-10 w-100">
                  <div className="p-2 min-hp-210 w-100 border-style-solid border-2  border-color-lizt bgc-lizt">
                    <div className="f-Ubuntu-L fsp-16 msp-10  mep-10 text-center">
                      Lo que me gustaría mejorar en nuestro prototipo es…
                    </div>
                    <InputBox
                      id={"p" + pagina + "_input" + (indexInput += 1)}
                      className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-140"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="ptp-20 psp-65 pep-40">
            {/* <div className="f-Ubuntu-B fsp-17 color-pidgey text-start lhp-20 psp-0">Participamos como equipo en la jornada de diálogo</div> */}
            <div className="d-flex">
              {/* <img className="hp-15 mtp-20 pep-10" src="images/page_047/i_g.svg" alt="" /> */}
              <div className="f-ccdigitaldelivery-bold fsp-35 color-pidgey pep-10">
                3
              </div>
              <div className="f-Ubuntu-R fsp-14 text-start pep-10 mtp-15">
                Evalúo nuestro prototipo usando la escala de puntuación, donde 1
                indica que no cumple y 5 indica que cumple completamente.
              </div>
              {/* <ModalVideo id={"p" + pagina + "_video" + (indexInput += 1)} image="images/page_050/revista.svg" clasesImagen="hp-30 mtp-10" /> */}
            </div>
          </div>

          <div className="positon-relative mbp-120 ">
            <div className="bgc-azuka rounded-p-10 mtp-0 msp-60 mep-60 mbp-10 ptp-5 pbp-10 psp-0   f-Ubuntu-R fw-700  position-relative">
              <div className="d-flex mbp-0 psp-0 pep-0 position-relative p-1">
                {/* <div className="position-absolute top-50 end-0 translate-middle-y   visible-768 msp-80 mtp--0 "><img src="images/page_061/img_005.png" className="wp-30 " alt="" /></div> */}
                <div className="row h-100 w-100 m-0 p-0 ">
                  <div className="col-sm-11 col-md-11 d-flex justify-content-center p-0 mbp-10">
                    <div className="d-flex center-center h-100 m-1 wp-240   rounded-p-10 hp-30 f-Ubuntu-R fsp-16 p-1 border-style-solid border-2 border-color-android18 bgc-white color-android18">
                      Operatividad
                    </div>
                    <div className="d-flex align-items-center h-100 m-1 w-100  rounded-p-10 hp-30 f-Ubuntu-L fsp-16 p-1 text-start border-style-solid border-2 border-color-android18 bgc-white psp-5 ">
                      Presenta un sistema sencillo y cómodo de manejar.
                    </div>
                  </div>

                  <div className="col-sm-1 col-md-1 d-flex align-items-center justify-content-center position-relative  wp-50 p-0 m-0 ">
                    <div className="wp-30 hp-30 bgc-white border-style-solid border-1 border-color-dark bgc-white rounded-1">
                      <InputBox
                        id={"p" + pagina + "_input" + (indexInput += 1)}
                        className="p-0 px-1 fsp-15 text-center flex-grow-1 lhp-30 min-hp-35"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="d-flex mbp-0 psp-0 pep-0 position-relative p-1">
                {/* <div className="position-absolute top-50 end-0 translate-middle-y   visible-768 msp-80 mtp--0 "><img src="images/page_061/img_005.png" className="wp-30 " alt="" /></div> */}
                <div className="row h-100 w-100 m-0 p-0 ">
                  <div className="col-sm-11 col-md-11 d-flex justify-content-center p-0 mbp-10">
                    <div className="d-flex center-center h-100 m-1 wp-240   rounded-p-10 hp-30 f-Ubuntu-R fsp-16 p-1 border-style-solid border-2 border-color-saitama bgc-white color-saitama">
                      Propósito
                    </div>
                    <div className="d-flex align-items-center h-100 m-1 w-100  rounded-p-10 hp-30 f-Ubuntu-L fsp-16 p-1 text-start border-style-solid border-2 border-color-saitama bgc-white psp-5 ">
                      Cumple su objetivo y mejora la vida de las personas.
                    </div>
                  </div>

                  <div className="col-sm-1 col-md-1 d-flex align-items-center justify-content-center position-relative  wp-50 p-0 m-0 ">
                    <div className="wp-30 hp-30 bgc-white border-style-solid border-1 border-color-dark bgc-white rounded-1">
                      <InputBox
                        id={"p" + pagina + "_input" + (indexInput += 1)}
                        className="p-0 px-1 fsp-15 text-center flex-grow-1 lhp-30 min-hp-35"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="d-flex mbp-0 psp-0 pep-0 position-relative p-1">
                {/* <div className="position-absolute top-50 end-0 translate-middle-y   visible-768 msp-80 mtp--0 "><img src="images/page_061/img_005.png" className="wp-30 " alt="" /></div> */}
                <div className="row h-100 w-100 m-0 p-0 ">
                  <div className="col-sm-11 col-md-11 d-flex justify-content-center p-0 mbp-10">
                    <div className="d-flex center-center h-100 m-1 wp-240   rounded-p-10 hp-30 f-Ubuntu-R fsp-16 p-1 border-style-solid border-2 border-color-calypso3 bgc-white color-calypso3">
                      Seguridad
                    </div>
                    <div className="d-flex align-items-center h-100 m-1 w-100  rounded-p-10 hp-30 f-Ubuntu-L fsp-16 p-1 text-start border-style-solid border-2 border-color-calypso3 bgc-white  psp-5 ">
                      No presenta riesgos ni peligrosidad para los usuarios.
                    </div>
                  </div>

                  <div className="col-sm-1 col-md-1 d-flex align-items-center justify-content-center position-relative  wp-50 p-0 m-0 ">
                    <div className="wp-30 hp-30 bgc-white border-style-solid border-1 border-color-dark bgc-white rounded-1">
                      <InputBox
                        id={"p" + pagina + "_input" + (indexInput += 1)}
                        className="p-0 px-1 fsp-15 text-center flex-grow-1 lhp-30 min-hp-35"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="d-flex mbp-0 psp-0 pep-0 position-relative p-1">
                {/* <div className="position-absolute top-50 end-0 translate-middle-y   visible-768 msp-80 mtp--0 "><img src="images/page_061/img_005.png" className="wp-30 " alt="" /></div> */}
                <div className="row h-100 w-100 m-0 p-0 ">
                  <div className="col-sm-11 col-md-11 d-flex justify-content-center p-0 mbp-10">
                    <div className="d-flex center-center h-100 m-1 wp-240   rounded-p-10 hp-30 f-Ubuntu-R fsp-16 p-1 border-style-solid border-2 border-color-goten bgc-white color-goten">
                      Funcionalidad
                    </div>
                    <div className="d-flex align-items-center h-100 m-1 w-100  rounded-p-10 hp-30 f-Ubuntu-L fsp-16 p-1 text-start border-style-solid border-2 border-color-goten bgc-white  psp-5 ">
                      Aprovecha eficientemente la energía renovable.
                    </div>
                  </div>

                  <div className="col-sm-1 col-md-1 d-flex align-items-center justify-content-center position-relative  wp-50 p-0 m-0 ">
                    <div className="wp-30 hp-30 bgc-white border-style-solid border-1 border-color-dark bgc-white rounded-1">
                      <InputBox
                        id={"p" + pagina + "_input" + (indexInput += 1)}
                        className="p-0 px-1 fsp-15 text-center flex-grow-1 lhp-30 min-hp-35"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="d-flex mbp-0 psp-0 pep-0 position-relative p-1">
                {/* <div className="position-absolute top-50 end-0 translate-middle-y   visible-768 msp-80 mtp--0 "><img src="images/page_061/img_005.png" className="wp-30 " alt="" /></div> */}
                <div className="row h-100 w-100 m-0 p-0 ">
                  <div className="col-sm-11 col-md-11 d-flex justify-content-center p-0 mbp-10">
                    <div className="d-flex center-center h-100 m-1 wp-240   rounded-p-10 hp-30 f-Ubuntu-R fsp-16 p-1 border-style-solid border-2 border-color-tiburon bgc-white color-tiburon">
                      Sostenibilidad
                    </div>
                    <div className="d-flex align-items-center h-100 m-1 w-100  rounded-p-10 hp-30 f-Ubuntu-L fsp-16 p-1 text-start border-style-solid border-2 border-color-tiburon bgc-white psp-5 ">
                      Es respetuoso con el medioambiente.
                    </div>
                  </div>

                  <div className="col-sm-1 col-md-1 d-flex align-items-center justify-content-center position-relative  wp-50 p-0 m-0 ">
                    <div className="wp-30 hp-30 bgc-white border-style-solid border-1 border-color-dark bgc-white rounded-1">
                      <InputBox
                        id={"p" + pagina + "_input" + (indexInput += 1)}
                        className="p-0 px-1 fsp-15 text-center flex-grow-1 lhp-30 min-hp-35"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="d-flex mbp-0 psp-0 pep-0 position-relative p-1 ptp-10">
                {/* <div className="position-absolute top-50 end-0 translate-middle-y   visible-768 msp-80 mtp--0 "><img src="images/page_061/img_005.png" className="wp-30 " alt="" /></div> */}
                <div className="row h-100 w-100 m-0 p-0 ">
                  <div className="col-sm-11 col-md-11 d-flex justify-content-center p-0 mbp-10">
                    <div className="d-flex center-center h-100 m-1 wp-240   rounded-p-10 hp-30 f-Ubuntu-R fsp-16 p-1 border-style-solid border-2 border-color-goten bgc-white color-goten">
                      Creatividad
                    </div>
                    <div className="d-flex align-items-center h-100 m-1 w-100  rounded-p-10 hp-60 f-Ubuntu-L fsp-16 p-1 text-start border-style-solid border-2 border-color-goten bgc-white  psp-5 ">
                      Es una propuesta innovadora.
                    </div>
                  </div>

                  <div className="col-sm-1 col-md-1 d-flex align-items-center justify-content-center position-relative  wp-50 p-0 m-0 ">
                    <div className="wp-30 hp-30 bgc-white border-style-solid border-1 border-color-dark bgc-white rounded-1">
                      <InputBox
                        id={"p" + pagina + "_input" + (indexInput += 1)}
                        className="p-0 px-1 fsp-15 text-center flex-grow-1 lhp-30 min-hp-35"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="d-flex mbp-0 psp-0 pep-0 position-relative p-1 ptp-10">
                {/* <div className="position-absolute top-50 end-0 translate-middle-y   visible-768 msp-80 mtp--0 "><img src="images/page_061/img_005.png" className="wp-30 " alt="" /></div> */}
                <div className="row h-100 w-100 m-0 p-0 ">
                  
                    <div className="row m-0 p-0 hp-45">
                      <div className="col-1 d-flex center-center h-100 m-1 wp-240 rounded-p-10 hp-30 f-Ubuntu-R fsp-16 p-1 border-style-solid border-2 border-color-mozart bgc-white color-mozart">
                        Otra
                      </div>
                      <div className="col-5 align-items-center h-100 m-1 w-100  rounded-p-10 hp-60 f-Ubuntu-R fsp-16 p-1 text-start border-style-solid border-2 border-color-mozart bgc-white psp-5 ">
                        <InputBox
                          id={"p" + pagina + "_input" + (indexInput += 1)}
                          className=" p-0 px-1 fsp-15 text-start flex-grow-1 lhp-30 min-hp-35 f-Ubuntu-L min-wp-100"
                        />
                      </div>
                    </div>

                    <div className="col-sm-1 col-md-1 d-flex align-items-center justify-content-center position-relative  wp-50 p-0 m-0 ">
                      <div className="wp-30 hp-30 bgc-white border-style-solid border-1 border-color-dark bgc-white rounded-1">
                        <InputBox
                          id={"p" + pagina + "_input" + (indexInput += 1)}
                          className="p-0 px-1 fsp-15 text-center flex-grow-1 lhp-30 min-hp-35"
                        />
                      </div>
                    </div>
                  
                </div>
              </div>
            </div>
          </div>
          <div className="row bgc-red d-flex flex-row  mb-3 mbp-200 psp-60 pep-60">
            <div className="col-1">
              <div className="w-100 hp-30 border border-color-dark border-style-solid border-1 bgc-white  ">
                otra
              </div>
            </div>
            <div className="col-7">
              <div className="w-100 hp-30 border-color-dark border-style-solid border-1 bgc-white ">
                <InputBox
                  id={"p" + pagina + "_input" + (indexInput += 1)}
                  className=" p-0 px-1 fsp-15 text-start flex-grow-1 lhp-30 min-hp-35 f-Ubuntu-L min-wp-100"
                />
              </div>
            </div>
            <div className="col-1">
              <div className="w-100 hp-30 border-color-dark border-style-solid border-1 bgc-white ">
                <InputBox
                  id={"p" + pagina + "_input" + (indexInput += 1)}
                  className=" p-0 px-1 fsp-15 text-start flex-grow-1 lhp-30 min-hp-35 f-Ubuntu-L min-wp-100"
                />
              </div>
            </div>
          </div>
          <br />
          <br />
          <br />
          <br />
          <br />
          <div
            className="d-flex hp-90 caja-flotante p-0 m-0 position-absolute justify-content-end align-items-end zindex-2"
            style={{ bottom: 70, right: 0 }}
          >
            <div
              className="f-Ubuntu-M fsp-10 position-absolute mbp-60"
              style={{ transform: `rotate(270deg)`, color: "dark" }}
            >
              ABP &copy; SM
            </div>
            <div className="bgc-goku wp-50 hp-30 f-Ubuntu-M fsp-20 psp-5">
              {props.numeroPagina(pagina)}
            </div>
          </div>

          <div
            className="row w-100 position-absolute caja-flotante2 p-0 m-0 align-items-end"
            style={{ bottom: 0 }}
          >
            <div className="col-1 col-sm-2 p-0 m-0 position-relative">
              <img
                src="images/rotulo_motivacion.svg"
                className="oculto"
                alt=""
              />
              <div className="w-100 hp-15 bgc-yamcha rounded-caja-start"></div>
              <div className="w-100 hp-25 bgc-goten"></div>
            </div>
            <div className="col-1 col-sm-2 p-0 m-0 position-relative">
              <img
                src="images/rotulo_planificacion.svg"
                className="oculto"
                alt=""
              />
              <div className="w-100 hp-15 bgc-tshinhan rounded-caja"></div>
              <div className="w-100 hp-25 bgc-bulma"></div>
            </div>
            <div className="col-1 col-sm-2 p-0 m-0 position-relative">
              <img
                src="images/rotulo_investigacion.svg"
                className="oculto"
                alt=""
              />
              <div className="w-100 hp-15 bgc-milk rounded-caja"></div>
              <div className="w-100 hp-25 bgc-android18"></div>
            </div>
            <div className="col-7 col-sm-2 p-0 m-0 position-relative">
              <img
                src="images/rotulo_experimentacion.svg"
                className="visible rotulo-etapa position-absolute top-0 start-0"
                alt=""
              />
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

export default Page051;
