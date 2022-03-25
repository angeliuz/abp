import React from "react";
import InputBox from "../components/InputBox";
import ModalBook from "../components/ModalBook";

import "./page_014.css";

function Page014(props) {

  const pagina = "014";
  var indexInput = 0;
  const etapa = "2"
  const background = "bgc-bulma";
  const color = "color-bulma";
  const borderColor = "border-color-bulma"
  const bgc_cajas = "bgc-draco";


  return (

    <div className="wrapper bgc-light">
      <div className="d-flex flex-column align-items-center pbp-20">
        <div className="page bgc-white overflow-hidden position-relative" id={"page_" + pagina}>
          {/* BEGIN CABECERA VERSIÓN 2 */}
          <div className={"cabecera-v1 hp-80 " + background}>

          </div>
          {/* END CABECERA VERSIÓN 2 */}
          {/* BEGIN TITULO */}
          <div className="ptp-20 container-titulo-global mbp-0">
            <div className="d-flex psp-20">
              <img className="hp-20 align-center mt-3 me-2 mb-2" src={"images/page_" + pagina + "/img_001.svg"} alt="" />
              <div className={"f-ccdigitaldelivery-bold fsp-35 " + color}>
                3
              </div>
              <div className="f-Ubuntu-R fsp-16 ptp-18 psp-10 pep-10 text-start">
                Leo la noticia de la revista. Luego, discutimos en equipo posibles soluciones al problema.
              </div>
              {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image={"images/generales/play.svg"} clasesImagen="cambio hp-40 mtp-10" className="p-0 px-1" /> */}
              {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image={"images/page_"+pagina+"/img_001.png"} className="p-0 px-1" /> */}
              <ModalBook id={"p" + pagina + "_book" + (indexInput += 1)} colorUnidad={background} pagina={"81"} image={"images/page_" + pagina + "/img_002.svg"} clasesImagen="hp-40 text-center mtp-10 " className="p-0 px-0" />
            </div>
          </div>
          {/* END TITULO */}
          {/* BEGIN CONTENIDO */}
          <div className="pep-60 psp-60 ptp-20 pbp-20">
            <div className="border-style-solid border-2 border-color-septenario psp-20 pep-5 pbp-10 rounded-p-20 position-relative">
              <div className="bgc-gohan w-100 psp-40 ptp-30 pbp-20 pep-10 position-relative rounded-p-20">

                <div className="position-relative bgc-white border-style-solid border-2 border-color-saitama rounded-p-50 px-2 ptp-20 pbp-20">
                  <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-110" />
                  <div className="position-absolute top-0 start-0 mtp--25 msp-20 bgc-saitama py-2 rounded-p-20 psp-20 pep-20">
                    <div className="f-Ubuntu-B color-white">Tenemos un problema:</div>
                  </div>
                  <div className="position-absolute top-50 start-100 translate-middle msp-20 mtp-0 zindex-1"><img src={"images/page_" + pagina + "/img_003.svg"} className="wp-60" alt="" /></div>
                  <div className="position-absolute top-100 start-0 translate-middle msp--30 mtp-30 zindex-1"><img src={"images/page_" + pagina + "/img_007.png"} className="wp-140" alt="" /></div>
                </div>

                <div className="ptp-40"></div>

                <div className="position-relative bgc-white border-style-solid border-2 border-color-saitama rounded-p-50 px-2 ptp-20 pbp-20">
                  <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-110" />
                  <div className="position-absolute top-0 start-0 mtp--25 msp-20 bgc-saitama py-2 rounded-p-20 psp-20 pep-20">
                    <div className="f-Ubuntu-B color-white">¿A quién afecta?</div>
                  </div>
                </div>

                <div className="ptp-20"></div>

                <div className="d-flex justify-content-evenly">
                  <div className="position-absolute zindex-2 bgc-saitama py-2 rounded-p-20 psp-20 pep-20">
                    <div className="f-Ubuntu-B color-white"> ¿Qué podemos hacer?</div>
                  </div>
                </div>

                <div className="ptp-50 row w-100 position-relative">

                  <div className="col-md-6 col-12 pbp-20 position-relative">
                    <div className="position-absolute top-0 start-0 translate-middle msp-0 zindex-1"><img src={"images/page_" + pagina + "/img_008.png"} className="wp-40 mtp-240" alt="" /></div>
                    <div className="bgc-white border-style-solid border-2 border-color-saitama rounded-p-20 px-2 ptp-5 pbp-20">
                      <div className="text-start f-Ubuntu-M ">Alternativa 1</div>
                      <div className="">
                        <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 lhp-25 min-hp-100" />
                      </div>
                    </div>
                  </div>

                  <div className="col-md-6 col-12 pbp-20">
                    <div className="bgc-white border-style-solid border-2 border-color-saitama rounded-p-20 px-2 ptp-5 pbp-20">
                      <div className="text-start f-Ubuntu-M ">Alternativa 2</div>
                      <div className="">
                        <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 lhp-25 min-hp-100" />
                      </div>
                    </div>
                  </div>

                  <div className="d-flex justify-content-evenly position-relative">
                    <div className="col-md-6 col-12 pbp-20">
                      <div className="bgc-white border-style-solid border-2 border-color-saitama rounded-p-20 px-2 ptp-5 pbp-20">
                        <div className="text-start f-Ubuntu-M ">Alternativa 3</div>
                        <div className="">
                          <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 lhp-25 min-hp-100" />
                        </div>
                      </div>
                    </div>
                    <div className="position-absolute top-0 start-100 translate-middle msp--110 mtp-25 visible-768 zindex-1"><img src={"images/page_" + pagina + "/espiral_2.svg"} className="wp-100 giro--20deg" alt="" /></div>
                  </div>

                  <div className="ptp-20"></div>

                  <div className="position-relative bgc-white border-style-solid border-2 border-color-saitama rounded-p-50 px-2 ptp-20 pbp-20">
                    <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-110" />
                    <div className="position-absolute top-0 start-0 mtp--25 msp-20 bgc-saitama py-2 rounded-p-20 psp-20 pep-20">
                      <div className="f-Ubuntu-B color-white">Conclusiones:</div>
                    </div>
                    <div className="position-absolute top-0 start-100 translate-middle msp--40 mtp--40 zindex-1"><img src={"images/page_" + pagina + "/img_009.png"} className="wp-100" alt="" /></div>
                  </div>

                  <div className="position-absolute top-0 start-50 translate-middle msp--120 zindex-1"><img src={"images/page_" + pagina + "/espiral_1.svg"} className="wp-100 mtp-40" alt="" /></div>

                </div>
              </div>
              <div className="position-absolute top-0 start-100 translate-middle msp-5 mtp--5 zindex-1"><img src={"images/page_" + pagina + "/img_004.svg"} className="wp-30" alt="" /></div>
              <div className="position-absolute top-100 start-0 translate-middle msp--5 mtp-5 zindex-1"><img src={"images/page_" + pagina + "/img_004.svg"} className="wp-30 giro-180deg" alt="" /></div>
            </div>
          </div>

          <div className="ptp-100"></div>



          {/* END CONTENIDO */}


          {/* BEGIN PIE DE PAGINA */}
          <div className="d-flex hp-90 caja-flotante p-0 m-0 position-absolute justify-content-end align-items-end zindex-2" style={{ bottom: 70, right: 0 }}>
            <div className="f-Ubuntu-M fsp-10 position-absolute mbp-60" style={{ transform: `rotate(270deg)`, color: "dark" }}>
              ABP &copy; SM
            </div>
            <div className="bgc-boros wp-50 hp-30 f-Ubuntu-M fsp-20 psp-5">{props.numeroPagina(pagina)}</div>
          </div>
          <div className="row position-absolute caja-flotante2 p-0 m-0 align-items-end" style={{ bottom: 0 }}>

            <div className="col-1 position-relative col-sm-2 p-0 m-0">
              <img src="images/rotulo_motivacion.svg" className="oculto" alt="" />
              <div className="w-100 hp-15 bgc-yamcha rounded-caja-start"></div>
              <div className="w-100 hp-25 bgc-goten"></div>
            </div>
            <div className="col-7 position-relative col-sm-2 p-0 m-0">
              <img src="images/rotulo_planificacion.svg" className="visible rotulo-etapa position-absolute top-0 start-0" alt="" />
              <div className="w-100 hp-15 bgc-tshinhan rounded-caja"></div>
              <div className="w-100 hp-25 bgc-bulma"></div>
            </div>
            <div className="col-1 position-relative col-sm-2 p-0 m-0">
              <img src="images/rotulo_investigacion.svg" className="oculto" alt="" />
              <div className="w-100 hp-15 bgc-milk rounded-caja"></div>
              <div className="w-100 hp-25 bgc-android18"></div>
            </div>
            <div className="col-1 position-relative col-sm-2 p-0 m-0">
              <img src="images/rotulo_experimentacion.svg" className="oculto" alt="" />
              <div className="w-100 hp-15 bgc-freezer rounded-caja"></div>
              <div className="w-100 hp-25 bgc-pidgey"></div>
            </div>
            <div className="col-1 position-relative col-sm-2 p-0 m-0">
              <img src="images/rotulo_creacion.svg" className="oculto" alt="" />
              <div className="w-100 hp-15 bgc-ash rounded-caja"></div>
              <div className="w-100 hp-25 bgc-saitama"></div>
            </div>
            <div className="col-1 position-relative col-sm-2 p-0 m-0">
              <img src="images/rotulo_difusion.svg" className="oculto" alt="" />
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

export default Page014;
