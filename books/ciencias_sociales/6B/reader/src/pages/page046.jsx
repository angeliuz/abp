import React from "react";
import InputBox from "../components/InputBox";
import ModalVideo from "../components/ModalVideo";
import "./page_046.css";

function Page046(props) {
  const pagina = "046";
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
          <div className="cabecera-v1 hp-80 bgc-pidgey"></div>
          {/* END CABECERA VERSIÓN 2 */}

          <div className="ptp-10 container-titulo-global-1 mbp-0">
            {/* <div className={"f-Ubuntu-B fsp-20 psp-20 text-start lhp-20 " + color}>xxx</div> */}
            <div className="d-flex psp-0">
              <img
                className="hp-15 align-center mtp-20 me-2 mb-2"
                src={"images/page_" + pagina + "/i_g.svg"}
                alt=""
              />
              <div className={"f-ccdigitaldelivery-bold fsp-35 " + color}>
                2
              </div>
              <div className="f-Ubuntu-R fsp-16 ptp-18 psp-10 pep-10 text-start">
                A partir de la obra que me tocó analizar, completo el siguiente
                esquema con el olor, la imagen, el sonido, el sabor y la textura
                que me transmite.
              </div>
              {/* <img src={"images/page_"+pagina+"/img_001.svg"} className="wp-100" alt=""/> */}
              {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image={"images/generales/play.svg"} clasesImagen="cambio hp-40 mtp-10" className="p-0 px-1" /> */}
              {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image={"images/page_"+pagina+"/img_001.png"} className="p-0 px-1" /> */}
              {/* <ModalBook id={"p" + pagina + "_book" + (indexInput += 1)} image={"images/page_" + pagina + "/revista.svg"} clasesImagen="hp-35 text-center mtp-10 " className="p-0 px-0" /> */}
            </div>
          </div>

          {/* <div className="d-flex global-margin mtp-0 mbp-50 psp-0 pep-0 ptp-0 pbp-0 position-relative hp-500 f-Ubuntu-L fsp-16">
                        <div className="position-absolute top-100 start-0 translate-middle visible-768 zindex-2"><img src={"images/page_" + pagina + "/mono.png"} className="hp-150 mbp--20 msp-170" alt="" /></div>
                        <div className="position-absolute top-50 start-50 translate-middle msp-0 mtp-60 zindex-1"><img src={"images/page_" + pagina + "/fondo.svg"} className="wp-560" alt="" /></div>

                        <div className="position-absolute top-50 start-50 translate-middle zindex-1 mtp-70">
                            <div className="f-Ubuntu-B fsp-13">Obra:</div>
                            <div className="d-flex flex-column wp-130">
                                <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 hp-110 overflow-scroll" />
                            </div>
                        </div>

                        <div className="position-absolute top-50 start-50 translate-middle msp--150 mtp--90 zindex-1 ">
                            <div className="d-flex flex-column wp-250 psp-20 pep-10 ptp-0 pbp-0 rotate--40">
                                <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 hp-70 overflow-scroll" />
                            </div>
                        </div>

                        <div className="position-absolute top-50 start-50 translate-middle zindex-1 mtp--110 msp-120">
                            <div className="d-flex flex-column wp-250 psp-20 pep-10 ptp-0 pbp-0 rotate-40">
                                <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-70" />
                            </div>
                        </div>

                        <div className="position-absolute top-50 start-50 translate-middle  zindex-1 msp--200 mtp-140">
                            <div className="d-flex flex-column wp-250 psp-10 pep-10 ptp-0 pbp-0 rotate-70">
                                <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-70" />
                            </div>
                        </div>

                        <div className="position-absolute top-50 start-50 translate-middle msp-200 mtp-140 zindex-1 ">
                            <div className="d-flex flex-column wp-250 psp-10 pep-10 ptp-0 pbp-0 rotate--70">
                                <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-70" />
                            </div>
                        </div>

                        <div className="position-absolute top-100 start-50 translate-middle msp-0 mtp-20 zindex-1">
                            <div className="d-flex flex-column wp-250 psp-10 pep-10 ptp-0 pbp-0 ">
                                <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-70" />
                            </div>
                        </div>
                    </div> */}

          <div className="d-flex  mtp-0 mbp-0 psp-60 pep-60 ptp-0 pbp-0">
            <div className="row p-0 m-0 w-100">
              <div className="col-12 p-0 m-0 position-relative">
                <div className="col-12 mtp-30">
                  <div className="f-Ubuntu-R fsp-16 border-style-solid rounded-p-10 border-2 p-2 text-start border-color-lightDark">
                    Obra:
                    <div className="">
                      <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-35" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="row mx-auto d-flex f-Ubuntu-R fsp-15 mbp-20 ptp-20">
                <div className="position-relative">
                  
                </div>

                <div className=" col-4 position-relative p-0 m-0 d-flex flex-row bd-highlight mb-3 ">
                  <div className="text-center w-100    mtp-10">
                   
                  <div className="center bgc-bang"><img src="images/page_046/flecha_morada.png" className="w-80 " alt="" /></div>
                  </div>
                </div>
                <div className="col-8 position-relative p-0 m-0 d-flex flex-row bd-highlight mb-3">
                  <div className="text-center w-100 border-2 border-style-solid border-color-saitama rounded-tbe-10 mtp-10">
                    
                    <div className="psp-15 pep-15">
                      <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-210" />
                    </div>
                  </div>
                </div>
                
                

              </div>
            </div>
          </div>

          

          {/* BEGIN PIE DE PAGINA */}
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
            <div className="bgc-boros wp-50 hp-30 f-Ubuntu-M fsp-20 psp-5">
              {props.numeroPagina(pagina)}
            </div>
          </div>
          <div
            className="row position-absolute caja-flotante2 p-0 m-0 align-items-end"
            style={{ bottom: 0 }}
          >
            <div
              className={
                etapa == 1
                  ? "col-7 position-relative col-sm-2 p-0 m-0"
                  : "col-1 position-relative col-sm-2 p-0 m-0"
              }
            >
              <img
                src="images/rotulo_motivacion.svg"
                className={
                  etapa == 1
                    ? "visible rotulo-etapa position-absolute top-0 start-0"
                    : "oculto"
                }
                alt=""
              />
              <div className="w-100 hp-15 bgc-yamcha rounded-caja-start"></div>
              <div className="w-100 hp-25 bgc-goten"></div>
            </div>
            <div
              className={
                etapa == 2
                  ? "col-7 position-relative col-sm-2 p-0 m-0"
                  : "col-1 position-relative col-sm-2 p-0 m-0"
              }
            >
              <img
                src="images/rotulo_planificacion.svg"
                className={
                  etapa == 2
                    ? "visible rotulo-etapa position-absolute top-0 start-0"
                    : "oculto"
                }
                alt=""
              />
              <div className="w-100 hp-15 bgc-tshinhan rounded-caja"></div>
              <div className="w-100 hp-25 bgc-bulma"></div>
            </div>
            <div
              className={
                etapa == 3
                  ? "col-7 position-relative col-sm-2 p-0 m-0"
                  : "col-1 position-relative col-sm-2 p-0 m-0"
              }
            >
              <img
                src="images/rotulo_investigacion.svg"
                className={
                  etapa == 3
                    ? "visible rotulo-etapa position-absolute top-0 start-0"
                    : "oculto"
                }
                alt=""
              />
              <div className="w-100 hp-15 bgc-milk rounded-caja"></div>
              <div className="w-100 hp-25 bgc-android18"></div>
            </div>
            <div
              className={
                etapa == 4
                  ? "col-7 position-relative col-sm-2 p-0 m-0"
                  : "col-1 position-relative col-sm-2 p-0 m-0"
              }
            >
              <img
                src="images/rotulo_experimentacion.svg"
                className={
                  etapa == 4
                    ? "visible rotulo-etapa position-absolute top-0 start-0"
                    : "oculto"
                }
                alt=""
              />
              <div className="w-100 hp-15 bgc-freezer rounded-caja"></div>
              <div className="w-100 hp-25 bgc-pidgey"></div>
            </div>
            <div
              className={
                etapa == 5
                  ? "col-7 position-relative col-sm-2 p-0 m-0"
                  : "col-1 position-relative col-sm-2 p-0 m-0"
              }
            >
              <img
                src="images/rotulo_creacion.svg"
                className={
                  etapa == 5
                    ? "visible rotulo-etapa position-absolute top-0 start-0"
                    : "oculto"
                }
                alt=""
              />
              <div className="w-100 hp-15 bgc-ash rounded-caja"></div>
              <div className="w-100 hp-25 bgc-saitama"></div>
            </div>
            <div
              className={
                etapa == 6
                  ? "col-7 position-relative col-sm-2 p-0 m-0"
                  : "col-1 position-relative col-sm-2 p-0 m-0"
              }
            >
              <img
                src="images/rotulo_difusion.svg"
                className={
                  etapa == 6
                    ? "visible rotulo-etapa position-absolute top-0 start-0"
                    : "oculto"
                }
                alt=""
              />
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

export default Page046;
