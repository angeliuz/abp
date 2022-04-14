import React from "react";
import ModalVideo from "../components/ModalVideo";
import InputBox from "../components/InputBox";
import ModalBook from "../components/ModalBook";
import "./page_072.css";
import Check from "../components/Check";

function Page072(props) {

  const pagina = "072";
  var indexInput = 0;
  const etapa = "6"
  const background = "bgc-pikachu";
  const color = "color-pikachu";
  const borderColor = "border-color-pikachu"
  const borderColorTabla = "border-color-kokomi"
  const bgc_cajas = "bgc-kokomi";

  return (


    <div className="wrapper bgc-light">
      <div className="d-flex flex-column align-items-center pbp-50">
        <div className="page bgc-white overflow-hidden position-relative" id={"page_" + pagina}>
          <div className={"cabecera-v1 hp-80 " + background}>
          </div>
          <div className="container-titulo-global mbp-20">
            <div className="d-flex psp-20">
              {/* <img className="hp-20 align-center mt-3 me-2 mb-2" src={"images/page_"+pagina+"/img_.svg"} alt=""  /> */}
              <div className={"f-ccdigitaldelivery-bold fsp-35 " + color}>
                2
              </div>
              <div className="f-Ubuntu-R fsp-16 ptp-18 psp-10 pep-10 text-start">
                Nos organizamos para llevar a cabo la campaña en el Día de la Alimentación Saludable.
              </div>
              {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image={"images/generales/play.svg"} clasesImagen="cambio hp-40 mtp-10" className="p-0 px-1" /> */}
              {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image={"images/page_"+pagina+"/img_001.png"} className="p-0 px-1" /> */}
              {/*<ModalBook id={"p" + pagina + "_book" + (indexInput += 1)} image={"images/page_" + pagina + "/img_001.svg"} clasesImagen="hp-40 text-center mtp-10 " className="p-0 px-0" />*/}
            </div>
          </div>
          <div className="cb-bajasda-p72">
            <div className="d-flex mbp-20">
              <div className="f-ccdigitaldelivery-bold fsp- color-pikachu">a.</div>
              <div className="f-Ubuntu-R fsp-16 psp-10">Ponemos <img src="images/page_072/img_002.svg" className="pbp-5" />según corresponda:</div>
            </div>
          </div>
          <div className="bgc-tshinhan cb-caja-contenedora-p72 psp-10 pep-10 msp-5 mtp-10 mbp-20 p-3">
            <div className="bgc-hutao cb-block-p72 w-100 p-3 pb-3 f-Ubuntu-L fsp-13 mbp-5 cb-outline-p72 position-relative">
              <img src="images/page_072/img_002.png" className="cb-estrella-verde" />
              <img src="images/page_072/img_003.png" className="cb-computador-p72" />
              <p className=" text-center fsp-16 fw-700 ">Lista de control</p>
              <div className="d-flex justify-content-start align-items-center mbp-5 psp-15 ">
                <div className="">
                  <Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check>
                </div>
                <div className="text-start msp-5 mtp-10 pep-5 rounded-1 f-Ubuntu-L fsp-13 d-flex align-items-start">
                  Tenemos todos los materiales para la difusión de la campaña.
                </div>
              </div>
              <div className="d-flex justify-content-start align-items-center mbp-5 psp-15 ">
                <div className="">
                  <Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check>
                </div>
                <div className="text-start msp-5 mtp-10 pep-5 rounded-1 f-Ubuntu-L fsp-13 d-flex align-items-start">
                  Contamos con los permisos para realizar la campaña.
                </div>
              </div>
              <div className="d-flex justify-content-start align-items-center mbp-5 psp-15 ">
                <div className="">
                  <Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check>
                </div>
                <div className="text-start msp-5 mtp-10 pep-5 rounded-1 f-Ubuntu-L fsp-13 d-flex align-items-start">
                  Sabemos en qué lugar(es) del colegio llevaremos a cabo la campaña.</div>
              </div>
              <div className="d-flex justify-content-start align-items-center mbp-0 psp-15 ">
                <div className="">
                  <Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check>
                </div>
                <div className="text-start msp-5 mtp-10 pep-5 rounded-1 f-Ubuntu-L fsp-13 d-flex align-items-start">
                  Nuestros compañeros saben que realizaremos la campaña.
                </div>
              </div>
              <div className="d-flex justify-content-start align-items-center mbp-0 psp-15 ">
                <div className="">
                  <Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check>
                </div>
                <div className="text-start msp-5 mtp-10 pep-5 rounded-1 f-Ubuntu-L fsp-13 d-flex align-items-start">
                  Tenemos considerado poner un buzón para recopilar las sugerencias y <br /> comentarios de nuestros compañeros.
                </div>
              </div>

              <div className="d-flex justify-content-start align-items-center mbp-5 psp-15 ">
                <div className="">
                  <Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check>
                </div>
                <div className="text-start msp-5 mtp-10 pep-5 rounded-1 f-Ubuntu-L fsp-13 d-flex align-items-start">
                  Otro:
                </div>
              </div>
              <div className="psp-15 pep-15">
                <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-75" />
              </div>

            </div>
          </div>

          <div className="cb-bajada-p72">
            <div className="d-flex mbp-20">
              <div className="f-ccdigitaldelivery-bold fsp- color-pikachu">b.</div>
              <div className="f-Ubuntu-R fsp-16 psp-10">Hacemos una lista con las tareas y las distribuimos.</div>
            </div>
          </div>

          <div className="d-flex cb-ejercicio2-p72 mtp-0 mbp-100 psp-0 pep-0 ptp-0 pbp-0">
            <div className="row p-0 m-0 w-100">
              <div className="col-12 p-0 m-0 position-relative">

                <div className="row mbp-15">
                  <img src="images/page_072/img_006.png" className="cb-tarjeta-p72" />
                  <img src="images/page_072/img_007.png" className="cb-tijeras-p72" />
                  <div className="col d-flex align-items-stretch">
                    <div className="cb-fondo-2 color-white text-center f-Ubuntu-R fsp-16 justify-content-center align-items-center d-flex"> <p className="cb-texto-cajaa">Lo que hay que hacer</p></div>
                  </div>
                  <div className="col d-flex align-items-stretch">
                    <div className="cb-fondo-1 color-white text-center f-Ubuntu-R fsp-16 justify-content-center align-items-center d-flex"> <p className="cb-texto-cajab">Estudiante a cargo</p></div>
                  </div>
                </div>

                <div className="row mbp-15">
                  <div className="col d-flex align-items-stretch">
                    <div className="bgc-barbie rounded-p-5 w-100 h-100 psp-15 pep-15 pbp-5 triangulo-p72">
                      <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 h-100" />
                    </div>
                  </div>
                  <div className="col d-flex align-items-stretch">
                    <div className="bgc-windu rounded-p-5 w-100 h-100 psp-15 pep-15 pbp-5">
                      <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 h-100" />
                    </div>
                  </div>
                </div>

                <div className="row mbp-15">
                  <div className="col d-flex align-items-stretch">
                    <div className="bgc-barbie rounded-p-5 w-100 h-100 psp-15 pep-15 pbp-5 triangulo-p72">
                      <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 h-100" />
                    </div>
                  </div>
                  <div className="col d-flex align-items-stretch">
                    <div className="bgc-windu rounded-p-5 w-100 h-100 psp-15 pep-15 pbp-5">
                      <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 h-100" />
                    </div>
                  </div>
                </div>

                <div className="row mbp-15">
                  <div className="col d-flex align-items-stretch">
                    <div className="bgc-barbie rounded-p-5 w-100 h-100 psp-15 pep-15 pbp-5 triangulo-p72">
                      <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 h-100" />
                    </div>
                  </div>
                  <div className="col d-flex align-items-stretch">
                    <div className="bgc-windu rounded-p-5 w-100 h-100 psp-15 pep-15 pbp-5">
                      <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 h-100" />
                    </div>
                  </div>
                </div>

                <div className="row mbp-15">
                  <div className="col d-flex align-items-stretch">
                    <div className="bgc-barbie rounded-p-5 w-100 h-100 psp-15 pep-15 pbp-5 triangulo-p72">
                      <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 h-100" />
                    </div>
                  </div>
                  <div className="col d-flex align-items-stretch">
                    <div className="bgc-windu rounded-p-5 w-100 h-100 psp-15 pep-15 pbp-5">
                      <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 h-100" />
                    </div>
                  </div>
                </div>

                <div className="row mbp-15">
                  <div className="col d-flex align-items-stretch">
                    <div className="bgc-barbie rounded-p-5 w-100 h-100 psp-15 pep-15 pbp-5 triangulo-p72">
                      <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 h-100" />
                    </div>
                  </div>
                  <div className="col d-flex align-items-stretch">
                    <div className="bgc-windu rounded-p-5 w-100 h-100 psp-15 pep-15 pbp-5">
                      <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 h-100" />
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* <div className="cb-ejercicio2-p72 d-flex mbp-80 position-relative">
            <div className="cb-ejercicio-ladoa pep-5 text-center">
              <img src="images/page_072/img_006.png" className="cb-tarjeta-p72" />
              <div className="cb-fondo-2 mbp-20 color-white text-center f-Ubuntu-l fsp-16 justify-content-center align-items-center d-flex"> <p className="cb-texto-cajaa">Lo que hay que hacer</p></div>
              <div className="bgc-barbie cb-ejercicio-caja mbp-20 triangulo-p72">
                <div className="psp-15 pep-15">
                  <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-30" />
                </div>
              </div>
              <div className="bgc-barbie cb-ejercicio-caja mbp-20 triangulo-p72">
                <div className="psp-15 pep-15">
                  <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-30" />
                </div>
              </div>
              <div className="bgc-barbie cb-ejercicio-caja mbp-20 triangulo-p72">
                <div className="psp-15 pep-15">
                  <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-30" />
                </div>
              </div>
              <div className="bgc-barbie cb-ejercicio-caja mbp-20 triangulo-p72">
                <div className="psp-15 pep-15">
                  <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-30" />
                </div>
              </div>
              <div className="bgc-barbie cb-ejercicio-caja mbp-20 triangulo-p72">
                <div className="psp-15 pep-15">
                  <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-30" />
                </div>
              </div>
            </div>
            <div className="cb-ejercicio-ladob psp-5 text-center">
              <img src="images/page_072/img_007.png" className="cb-tijeras-p72" />
              <div className="cb-fondo-1 mbp-20 color-white text-center f-Ubuntu-l fsp-16 justify-content-center align-items-center d-flex"> <p className="cb-texto-cajab">Estudiante a cargo</p></div>
              <div className="bgc-windu cb-ejercicio-caja mbp-10">
                <div className="psp-15 pep-15">
                  <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-30" />
                </div>
              </div>
              <div className="bgc-windu cb-ejercicio-caja mbp-10">
                <div className="psp-15 pep-15">
                  <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-30" />
                </div>
              </div>
              <div className="bgc-windu cb-ejercicio-caja mbp-10">
                <div className="psp-15 pep-15">
                  <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-30" />
                </div>
              </div>
              <div className="bgc-windu cb-ejercicio-caja mbp-10">
                <div className="psp-15 pep-15">
                  <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-30" />
                </div>
              </div>
              <div className="bgc-windu cb-ejercicio-caja mbp-10">
                <div className="psp-15 pep-15">
                  <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-30" />
                </div>
              </div>
            </div>
          </div> */}

          {/* BEGIN PIE DE PAGINA */}
          <div className="d-flex hp-90  p-0 m-0 position-absolute justify-content-end align-items-end zindex-2" style={{ bottom: 70, right: 0 }}>
            <div className="f-Ubuntu-M fsp-10 position-absolute mbp-60" style={{ transform: `rotate(270deg)`, color: "dark" }}>
              ABP &copy; SM
            </div>
            <div className="bgc-boros wp-50 hp-30 f-Ubuntu-M fsp-20 psp-5">{props.numeroPagina(pagina)}</div>
          </div>
          <div className="row position-absolute caja-flotante2 p-0 m-0 align-items-end" style={{ bottom: 0 }}>

            <div className={etapa == 1 ? "col-7 position-relative col-md-2 p-0 m-0" : "col-1 position-relative col-md-2 p-0 m-0"}>
              <img src="images/rotulo_motivacion.svg" className={etapa == 1 ? "visible rotulo-etapa position-absolute top-0 start-0" : "oculto"} alt="" />
              <div className="w-100 hp-15 bgc-yamcha rounded-caja-start"></div>
              <div className="w-100 hp-25 bgc-goten"></div>
            </div>
            <div className={etapa == 2 ? "col-7 position-relative col-md-2 p-0 m-0" : "col-1 position-relative col-md-2 p-0 m-0"}>
              <img src="images/rotulo_planificacion.svg" className={etapa == 2 ? "visible rotulo-etapa position-absolute top-0 start-0" : "oculto"} alt="" />
              <div className="w-100 hp-15 bgc-tshinhan rounded-caja"></div>
              <div className="w-100 hp-25 bgc-bulma"></div>
            </div>
            <div className={etapa == 3 ? "col-7 position-relative col-md-2 p-0 m-0" : "col-1 position-relative col-md-2 p-0 m-0"}>
              <img src="images/rotulo_investigacion.svg" className={etapa == 3 ? "visible rotulo-etapa position-absolute top-0 start-0" : "oculto"} alt="" />
              <div className="w-100 hp-15 bgc-milk rounded-caja"></div>
              <div className="w-100 hp-25 bgc-android18"></div>
            </div>
            <div className={etapa == 4 ? "col-7 position-relative col-md-2 p-0 m-0" : "col-1 position-relative col-md-2 p-0 m-0"}>
              <img src="images/rotulo_experimentacion.svg" className={etapa == 4 ? "visible rotulo-etapa position-absolute top-0 start-0" : "oculto"} alt="" />
              <div className="w-100 hp-15 bgc-freezer rounded-caja"></div>
              <div className="w-100 hp-25 bgc-pidgey"></div>
            </div>
            <div className={etapa == 5 ? "col-7 position-relative col-md-2 p-0 m-0" : "col-1 position-relative col-md-2 p-0 m-0"}>
              <img src="images/rotulo_creacion.svg" className={etapa == 5 ? "visible rotulo-etapa position-absolute top-0 start-0" : "oculto"} alt="" />
              <div className="w-100 hp-15 bgc-ash rounded-caja"></div>
              <div className="w-100 hp-25 bgc-saitama"></div>
            </div>
            <div className={etapa == 6 ? "col-7 position-relative col-md-2 p-0 m-0" : "col-1 position-relative col-md-2 p-0 m-0"}>
              <img src="images/rotulo_difusion.svg" className={etapa == 6 ? "visible rotulo-etapa position-absolute top-0 start-0" : "oculto"} alt="" />
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


export default Page072;
