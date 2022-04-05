import React from "react";
import InputBox from "../components/InputBox";
import ModalBook from "../components/ModalBook";
import Check from "../components/Check";


import "./page_017.css";

function Page017(props) {

  const pagina = "017";
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
          <div className={"cabecera-v1 hp-80 " + background}>
          </div>
          <div className="ptp-50 container-titulo-global mbp-0">
            <div className="d-flex psp-20">
              {/* <img className="hp-20 align-center mt-3 me-2 mb-2" src={"images/page_"+pagina+"/img_.svg"} alt=""  /> */}
              <div className={"f-ccdigitaldelivery-bold fsp-35 " + color}>
                3
              </div>
              <div className="f-Ubuntu-R fsp-16 ptp-18 psp-10 pep-10 text-start">
                Organizamos nuestro álbum y lo detallamos a continuación.
              </div>
              {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image={"images/generales/play.svg"} clasesImagen="cambio hp-40 mtp-10" className="p-0 px-1" /> */}
              {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image={"images/page_"+pagina+"/img_001.png"} className="p-0 px-1" /> */}
              {/* <ModalBook id={ "p" + pagina + "_book"+ (indexInput+=1) } image={"images/page_"+pagina+"/revista65.svg"} clasesImagen="hp-40 text-center mtp-10 " className="p-0 px-0" /> */}
            </div>
          </div>

          <div className="psp-60 pep-60 ptp-20  position-relative">
            <div className="bgc-draco sombra-1 p-3 w-100 giro-2deg position-relative msp--2p mep-20">
              <div className="color-bulma giro--2deg f-Ubuntu-B fsp-18">EL ORDEN DE NUESTRO ÁLBUM</div>
              <div className="diline-res-p17 justify-content-between flex-wrap giro--2deg mtp--30 psp-30 pep-30">

                <div className="position-relative">
                  <div className="hoja1-p17">
                    <div className=" bgc-white hoja-p17 sombra-1 position-absolute zindex-1">
                      <div className="f-Ubuntu-M ptp-10 px-2">Portada</div>
                      <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1    flex-grow-1 lhp-20 min-hp-220" />
                    </div>
                    <div className="position-absolute top-50 start-100 translate-middle visible-748 msp-25 mtp-0"><img src={"images/page_" + pagina + "/flecha.svg"} className="wp-80" alt="" /></div>
                  </div>
                </div>

                <div className="position-relative">
                  <div className="hoja2-p17">
                    <div className=" bgc-white hoja-p17 sombra-1 position-absolute zindex-1">
                      <div className="f-Ubuntu-M ptp-10 px-2">Introducción</div>
                      <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1    flex-grow-1 lhp-20 min-hp-220" />
                    </div>
                    <div className="position-absolute top-50 start-100 translate-middle visible-748 msp-25 mtp-30"><img src={"images/page_" + pagina + "/flecha.svg"} className="wp-80" alt="" /></div>
                    <div className="position-absolute top-50 start-0 translate-middle invisible-748 msp--80 mtp-0"><img src={"images/page_" + pagina + "/flecha.svg"} className="wp-140" alt="" /></div>
                  </div>
                </div>

                <div className="position-relative">
                  <div className="hoja3-p17">
                    <div className=" bgc-white hoja-p17 sombra-1 position-absolute zindex-1">
                      <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1    flex-grow-1 lhp-20 min-hp-250" />
                    </div>
                    <div className="position-absolute top-100 start-0 translate-middle visible-768 msp--350 mtp-80"><img src={"images/page_" + pagina + "/linea_v1.svg"} className="w-300" alt="" /></div>
                    <div className="position-absolute top-100 start-0 translate-middle invisible-768 visible-748 msp--350 mtp-80"><img src={"images/page_" + pagina + "/linea_v2.svg"} className="w-300" alt="" /></div>
                  </div>
                </div>

                <div className="position-relative">
                  <div className="hoja4-p17">
                    <div className=" bgc-white hoja-p17 sombra-1 position-absolute zindex-1">
                      <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1    flex-grow-1 lhp-20 min-hp-250" />
                    </div>
                    <div className="position-absolute top-50 start-100 translate-middle visible-748 msp-25 mtp-30"><img src={"images/page_" + pagina + "/flecha.svg"} className="wp-80" alt="" /></div>
                    <div className="position-absolute top-50 start-0 translate-middle invisible-748 msp--80 mtp-0"><img src={"images/page_" + pagina + "/flecha.svg"} className="wp-140" alt="" /></div>
                  </div>
                </div>

                <div className="position-relative">
                  <div className="hoja5-p17">
                    <div className=" bgc-white hoja-p17 sombra-1 position-absolute zindex-1">
                      <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1    flex-grow-1 lhp-20 min-hp-250" />
                    </div>
                    <div className="position-absolute top-50 start-100 translate-middle visible-748 msp-25 mtp-60"><img src={"images/page_" + pagina + "/flecha.svg"} className="wp-80" alt="" /></div>
                  </div>
                </div>

                <div className="position-relative">
                  <div className="hoja6-p17">
                    <div className=" bgc-white hoja-p17 sombra-1 position-absolute zindex-1">
                      <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1    flex-grow-1 lhp-20 min-hp-250" />
                    </div>
                  </div>
                  <div className="position-absolute top-50 start-0 translate-middle invisible-748 msp--80 mtp-0"><img src={"images/page_" + pagina + "/flecha.svg"} className="wp-140" alt="" /></div>

                </div>

              </div>
              <div className="position-absolute top-0 start-100 translate-middle msp--20 mtp-0 zindex-1"><img src={"images/page_" + pagina + "/clip.png"} className="wp-35" alt="" /></div>
            </div>
          </div>

          <div className="ptp-50 container-titulo-global mbp-0">
            <div className="d-flex psp-20">
              {/* <img className="hp-20 align-center mt-3 me-2 mb-2" src={"images/page_"+pagina+"/img_.svg"} alt=""  /> */}
              <div className={"f-ccdigitaldelivery-bold fsp-35 " + color}>
                4
              </div>
              <div className="f-Ubuntu-R fsp-16 ptp-18 psp-10 pep-10 text-start">
                Agregamos otra sección al final de nuestro álbum. Marcamos con la<img src={"images/page_" + pagina + "/img_003.svg"} className="pep-5 psp-5" alt="" />sección escogida.
              </div>
              {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image={"images/generales/play.svg"} clasesImagen="cambio hp-40 mtp-10" className="p-0 px-1" /> */}
              {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image={"images/page_"+pagina+"/img_001.png"} className="p-0 px-1" /> */}
              {/* <ModalBook id={ "p" + pagina + "_book"+ (indexInput+=1) } image={"images/page_"+pagina+"/revista65.svg"} clasesImagen="hp-40 text-center mtp-10 " className="p-0 px-0" /> */}
            </div>
          </div>

          <div className="psp-60 pep-60 ptp-20">
            <div className="row w-100">

              <div className="col-md-4 pbp-20">
                <div className="border-style-solid border-doted border-color-milk caja-finalp17 rounded-tbe-20 border-3 pbp-20 d-flex d-column align-items-center">
                  <div className=" ptp-10 test-center pbp-10">
                    Fotografías de los integrantes de nuestro cursos.
                  </div>
                  <div className="cuadrado  border-dark">
                  <Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/cruz.svg" ></Check>
                  </div>
                </div>
              </div>

              <div className="col-md-4 pbp-20">
                <div className="border-style-solid border-doted border-color-vegeta caja-finalp17 rounded-tbe-20 border-3 pbp-20 d-flex d-column align-items-center">
                  <div className=" ptp-10 test-center pbp-10">
                    Fotografías o dibujos de nuestro colegio.
                  </div>
                  <div className="cuadrado  border-dark mtp-20-p17 ">
                  <Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/cruz.svg" ></Check>
                  </div>
                </div>
              </div>

              <div className="col-md-4 pbp-20">
                <div className="border-style-solid border-doted border-color-pidgey caja-finalp17 rounded-tbe-20 border-3 pbp-20 d-flex d-column align-items-center">
                  <div className=" ptp-10 test-center pbp-10">
                    Fotografías o dibujos de recuerdos de nuestro curso.
                  </div>
                  <div className="cuadrado  border-dark">
                  <Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/cruz.svg" ></Check>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="pbp-100"></div>
          {/* PIE DE PAGINA */}
          <div className="d-flex hp-90 caja-flotante p-0 m-0 position-absolute justify-content-end align-items-end zindex-2" style={{ bottom: 70, right: 0 }}>
            <div className="f-Ubuntu-M fsp-10 position-absolute mbp-60" style={{ transform: `rotate(270deg)`, color: "dark" }}>
              ABP &copy; SM
            </div>
            <div className="bgc-boros wp-50 hp-30 f-Ubuntu-M fsp-20 psp-5">{props.numeroPagina(pagina)}</div>
          </div>
          <div className="row position-absolute caja-flotante2 p-0 m-0 align-items-end marcador-etapa" style={{ bottom: 0 }}>

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
        </div>
      </div>
    </div >

  );
}

export default Page017;
