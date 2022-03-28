import React from "react";
import InputBox from "../components/InputBox";
import ModalVideo from "../components/ModalVideo";

import "./page_019.css";

function Page019(props) {

  const pagina = "019";
  var indexInput = 0;
  const etapa = "2"
  const background = "bgc-bulma";
  const color = "color-bulma";
  const borderColor = "border-color-bulma"
  const bgc_cajas = "bgc-draco";
  const borderColorTabla = "border-color-buzz";

  return (
    <div className="wrapper bgc-light">
      <div className="d-flex flex-column align-items-center pbp-20">
        <div className={"dosier-e" + etapa + " page bgc-white overflow-hidden position-relative"} id={"page_" + pagina}>
          <img src={"images/cabecera/dosier_e" + etapa + ".svg"} className="w-100" alt="" />
          <div className="position-relative w-100 mbp-10">
            <div className="psp-80 pep-70 ptp-10 pbp-0 position-relative">
              <div className="fsp-16 f-Ubuntu-R text-start psp-50 pbp-10">Esta página fue completada por:</div>
              <div className={"psp-50 pep-50 ptp-5 pbp-5 bgc-white rounded-p-10 border-style-solid border-1 " + borderColor + " d-flex justify-content-center position-relative"}>
                <div className="position-absolute top-50 start-0 translate-middle msp-0 mtp--10 zindex-1"><img src={"images/page_" + pagina + "/img_001.png"} className="wp-100" alt="" /></div>
                <div className="position-absolute top-50 start-100 translate-middle wp-100 msp--15 mtp-5"><img src={"images/page_" + pagina + "/img_002.png"} className="w-80" alt="" /></div>
                <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-35" />
              </div>
            </div>
          </div>

          <div className="pbp-10 container-titulo-global mbp-0">
            <div className="d-flex psp-20">
              {/* <img className="hp-20 align-center mt-3 me-2 mb-2" src={"images/page_"+pagina+"/img_.svg"} alt=""  /> */}
              <div className="f-Ubuntu-R fsp-16 ptp-18 psp-10 pep-10 text-start">
                Vemos el video. Luego, leemos y numeramos las tareas del proyecto.
              </div>
              <ModalVideo id={"p" + pagina + "_video" + (indexInput += 1)} linkVideo="682622834" tituloVideo="Expresamos lo que somos II" tipoVideo="vimeo" image={"images/generales/play.svg"} colorUnidad={background} clasesImagen="cambio hp-40 mtp-10" className="p-0 px-1" />
 
              {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image={"images/page_"+pagina+"/img_001.png"} className="p-0 px-1" /> */}
              {/* <ModalBook id={ "p" + pagina + "_book"+ (indexInput+=1) } image={"images/page_"+pagina+"/revista65.svg"} clasesImagen="hp-40 text-center mtp-10 " className="p-0 px-0" /> */}
            </div>
          </div>

          <div className="psp-60 ptp-10 pep-60">
            <div className="p-1 giro--2deg bgc-baki sombra-1">
              <div className="p-2 giro-4deg bgc-baki sombra-2">
                <div className="giro--2deg sombra-2 ptp-40 d-flex flex-wrap justify-content-around bgc-white position-relative">

                  <div className="col-md-6 position-relative d-flex justify-content-center pbp-40">
                    <div className="ovalo-p19 bgc-tigro position-relative">
                      <div className="d-flex justify-content-center hp-140 psp-30 pep-30">
                        <div className="align-self-center text-center">Realizamos la exposición artística.</div>
                      </div>
                      <div className="position-absolute top-50 start-50 msp-0 mtp--10 translate-middle">
                        <div className="ovalo-p19 border-style-solid border-1 border-color-bulma position-relative">
                          <div className="position-absolute top-0 start-50 mtp-0 msp-0 translate-middle cuadrado-p19 bgc-white border-style-solid border-color-lightDark border-1">
                            <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-center flex-grow-1 lhp-25 min-hp-25" />
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* <div className="position-absolute top-100 start-0 translate-middle msp-20 mtp--40 zindex-1"><img src={"images/page_" + pagina + "/img_010.png"} className="wp-60" alt="" /></div> */}
                  </div>

                  <div className="col-md-6 position-relative d-flex justify-content-center pbp-40">
                    <div className="ovalo-p19 bgc-guile position-relative">
                      <div className="d-flex justify-content-center hp-140 psp-30 pep-30">
                        <div className="align-self-center text-center ptp-10">Investigamos acerca de los derechos y definimos qué queremos expresar en nuestra obra de arte.</div>
                      </div>
                      <div className="position-absolute top-50 start-50 msp-0 mtp--10 translate-middle">
                        <div className="ovalo-p19 border-style-solid border-1 border-color-pikachu position-relative">
                          <div className="position-absolute top-0 start-50 mtp-0 msp-0 translate-middle cuadrado-p19 bgc-white border-style-solid border-color-lightDark border-1">
                            <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-center flex-grow-1 lhp-25 min-hp-25" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-6 position-relative d-flex justify-content-center pbp-40">
                    <div className="ovalo-p19 bgc-sargento position-relative">
                      <div className="d-flex justify-content-center hp-140 psp-30 pep-30">
                        <div className="align-self-center text-center">Celebramos nuestro éxito.</div>
                      </div>
                      <div className="position-absolute top-50 start-50 msp-0 mtp--10 translate-middle">
                        <div className="ovalo-p19 border-style-solid border-1 border-color-soldados position-relative">
                          <div className="position-absolute top-0 start-50 mtp-0 msp-0 translate-middle cuadrado-p19 bgc-white border-style-solid border-color-lightDark border-1">
                            <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-center flex-grow-1 lhp-25 min-hp-25" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-6 position-relative d-flex justify-content-center pbp-40">
                    <div className="ovalo-p19 bgc-windu position-relative">
                      <div className="d-flex justify-content-center hp-140 psp-30 pep-30">
                        <div className="align-self-center text-center">Diseñamos nuestra obra de arte.</div>
                      </div>
                      <div className="position-absolute top-50 start-50 msp-0 mtp--10 translate-middle">
                        <div className="ovalo-p19 border-style-solid border-1 border-color-saitama position-relative">
                          <div className="position-absolute top-0 start-50 mtp-0 msp-0 translate-middle cuadrado-p19 bgc-white border-style-solid border-color-lightDark border-1">
                            <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-center flex-grow-1 lhp-25 min-hp-25" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-6 position-relative d-flex justify-content-center pbp-40">
                    <div className="ovalo-p19 bgc-gohan position-relative">
                      <div className="d-flex justify-content-center hp-140 psp-30 pep-30">
                        <div className="align-self-center text-center">Elaboramos nuestra obra de arte.</div>
                      </div>
                      <div className="position-absolute top-50 start-50 msp-0 mtp--10 translate-middle">
                        <div className="ovalo-p19 border-style-solid border-1 border-color-android18 position-relative">
                          <div className="position-absolute top-0 start-50 mtp-0 msp-0 translate-middle cuadrado-p19 bgc-white border-style-solid border-color-lightDark border-1">
                            <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-center flex-grow-1 lhp-25 min-hp-25" />
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* <div className="position-absolute top-100 start-0 translate-middle msp-20 mtp--40 zindex-1"><img src={"images/page_" + pagina + "/img_009.png"} className="wp-80" alt="" /></div> */}
                  </div>

                  <div className="col-md-6 position-relative d-flex justify-content-center pbp-40">
                    <div className="ovalo-p19 bgc-pantro position-relative">
                      <div className="d-flex justify-content-center hp-140 psp-30 pep-30">
                        <div className="align-self-center text-center">Organizamos el plan de trabajo.</div>
                      </div>
                      <div className="position-absolute top-50 start-50 msp-0 mtp--15 translate-middle">
                        <div className="ovalo-p19 border-style-solid border-1 border-color-pidgey position-relative">
                          <div className="position-absolute top-0 start-50 mtp-0 msp-0 translate-middle cuadrado-p19 bgc-white border-style-solid border-color-lightDark border-1">
                            <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-center flex-grow-1 lhp-25 min-hp-25" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="position-absolute top-0 start-100 translate-middle msp--30 mtp-0 zindex-1"><img src={"images/page_" + pagina + "/img_004.svg"} className="hp-60" alt="" /></div>
                  <div className="position-absolute top-50 start-0 translate-middle msp-0 mtp--80 zindex-1"><img src={"images/page_" + pagina + "/img_006.png"} className="hp-100" alt="" /></div>
                  <div className="position-absolute top-50 start-100 translate-middle msp-0 mtp-80 zindex-1"><img src={"images/page_" + pagina + "/img_007.png"} className="hp-120" alt="" /></div>
                </div>
              </div>
            </div>
          </div>

          <div className="psp-60 pep-60 ptp-30 d-flex flex-wrap pbp-60 position-relative">
            <div className="col-md-6 col-12 text-start f-Ubuntu-R">En una cartulina elaboramos un cronograma del proyecto y le damos un toque artístico que identifique al equipo.</div>
            <div className="col-md-6 col-12 mtp--50"> <img src={"images/page_" + pagina + "/img_008.png"} className="hp-160" alt="" /></div>
          </div>

          {/* BEIGN PIE DE PAGINA */}
          <div className="d-flex hp-90 caja-flotante p-0 m-0 position-absolute justify-content-end align-items-end zindex-2" style={{ bottom: 70, right: 0 }}>
            <div className="f-Ubuntu-M fsp-10 position-absolute mbp-60" style={{ transform: `rotate(270deg)`, color: "dark" }}>ABP &copy; SM</div>
            <div className="bgc-goku wp-50 hp-30 f-Ubuntu-M fsp-20 psp-5">{props.numeroPagina(pagina)}</div>
          </div>
          {/* END PIE DE PAGINA */}
        </div>
      </div>
    </div>

  );
}

export default Page019;
