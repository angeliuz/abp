import React from "react";
import InputBox from "../components/InputBox";
import ModalVideo from "../components/ModalVideo";

import "./page_015.css";

function Page015(props) {
  const pagina = "015";
  var indexInput = 0;

  return (
    <div className="wrapper bgc-light f-Ubuntu-R">
      <div className="d-flex flex-column align-items-center pbp-20">
        <div
          className="page bgc-white overflow-hidden position-relative pbp-50"
          id={"page_" + pagina}
        >
          {/* BEGIN CABECERA VERSIÓN 2 */}
          <div className="cabecera-v2 bgc-bulma d-flex flex-column">
            <div className="d-flex contenedor-cabecera-v2 align-items-center ptp-40 psp-30 pep-30">
              <div className="caja-seccion wp-160 hp-60 d-flex justify-content-center ptp-10 mtp-5 color-bulma fsp-24 f-IntroRustG-Base">
                SESIÓN 3
              </div>
              <div className="section-name d-flex align-items-center fsp-24 fw-700 f-Ubuntu-M color-white">
                ¡Este es nuestro plan!
              </div>
            </div>
          </div>
          {/* END CABECERA */}

          <div className="psp-80 pep-60 ptp-30">
            <div className="f-Ubuntu-B color-bulma fsp-18 text-left">
              ¡Los pasos que vamos a seguir!
            </div>
            <div className="text-left col-9">
              Ahora que ya nos motivamos conociendo el desafío de este proyecto,
              organizamos las siguientes etapas.
            </div>
            <div className="d-flex">
              <img
                src="images/page_015/img_002.svg"
                className="pep-10 msp--40"
                alt=""
              />
              <div className="f-ccdigitaldelivery-bold fsp-35 color-bulma">
                1
              </div>
              <div className="f-Ubuntu-R fsp-16 ptp-18 psp-10 text-left">
                Vemos el video y rotulamos los siguientes momentos según
                corresponda.
              </div>
              <ModalVideo
                id={"p" + pagina + "_video" + (indexInput += 1)}
                image="images/page_015/img_003.jpg"
                clasesImagen="cambio hp-40 mtp-10"
                className="p-0 px-1"
              />
            </div>
            <div className="d-flex flex-wrap justify-content-between ptp-15 pbp-20">
              <div className="p-2 centrar-todo">
                <div className="py-2 px-3 bgc-woody rounded-p-10">
                  Experimentación
                </div>
              </div>
              <div className="p-2 centrar-todo">
                <div className="py-2 px-3 bgc-guile rounded-p-10">Difusión</div>
              </div>
              <div className="p-2 centrar-todo">
                <div className="py-2 px-3 bgc-gohan rounded-p-10">
                  Investigación
                </div>
              </div>
              <div className="p-2 centrar-todo">
                <div className="py-2 px-3 bgc-quigon rounded-p-10">
                  Creación
                </div>
              </div>
              <div className="p-2 centrar-todo">
                <div className="py-2 px-3 bgc-goro rounded-p-10">
                  Planificación
                </div>
              </div>
            </div>
            <div className="bgc-urien p-2 d-flex rounded-p-10 sombra">
              <div className="hp-80 mnwp-160 bgc-white centrar-ver rounded-p-10 position-relative">
                <img
                  src="images/page_015/img_004.png"
                  className="position-absolute top-0 start-100 translate-middle msp--15 mtp-5 hp-40 "
                  alt=""
                />
                <InputBox
                  id={"p" + pagina + "_input" + (indexInput += 1)}
                  className="p-0 px-1 text-center flex-grow-1 lhp-80 min-hp-80"
                />
              </div>
              <div className="centrar-ver">
                <div className="text-left psp-10">
                  <div className="dot mep-10 mtp-10"></div>
                  <div className="f-ubuntu-L py-1 mtp--26 msp-20">
                    Identificamos qué sabemos del tema.
                  </div>
                </div>
                <div className="text-left psp-10 pep-20">
                  <div className="dot mep-10 mtp-10"></div>
                  <div className="f-ubuntu-L py-1 mtp--26 msp-20">
                    Reconocemos qué necesitamos saber del tema.
                  </div>
                </div>
                <div className="text-left psp-10 pep-20">
                  <div className="dot mep-10 mtp-10"></div>
                  <div className="f-ubuntu-L py-1 mtp--26 msp-20">
                    Ordenamos las siguientes etapas de trabajo.
                  </div>
                </div>
              </div>
            </div>

            <div className="ptp-15"></div>

            <div className="bgc-urien p-2 d-flex rounded-p-10 sombra">
              <div className="hp-80 mnwp-160 bgc-white centrar-ver rounded-p-10 position-relative">
                <img
                  src="images/page_015/img_004.png"
                  className="position-absolute top-0 start-0 translate-middle msp-10 mtp-5 hp-40 "
                  alt=""
                />
                <InputBox
                  id={"p" + pagina + "_input" + (indexInput += 1)}
                  className="p-0 px-1 text-center flex-grow-1 lhp-80 min-hp-80"
                />
              </div>
              <div className="centrar-ver">
                <div className="text-left psp-10 pep-20">
                  <div className="dot mep-10 mtp-10"></div>
                  <div className="f-ubuntu-L py-1 mtp--26 msp-20">
                    Empezaremos estudiando los Derechos de los niños, niñas y
                    adolescentes.
                  </div>
                </div>
                <div className="text-left psp-10 pep-20">
                  <div className="dot mep-10 mtp-10"></div>
                  <div className="f-ubuntu-L py-1 mtp--26 msp-20">
                    Comprenderemos la importancia de respetar estos derechos y
                    su relación con la diversidad.
                  </div>
                </div>
              </div>
            </div>

            <div className="ptp-15"></div>

            <div className="bgc-urien p-2 d-flex rounded-p-10 sombra">
              <div className="hp-80 mnwp-160 bgc-white centrar-ver rounded-p-10 position-relative">
                <img
                  src="images/page_015/img_004.png"
                  className="position-absolute top-0 start-100 translate-middle msp--15 mtp-5 hp-40 "
                  alt=""
                />
                <InputBox
                  id={"p" + pagina + "_input" + (indexInput += 1)}
                  className="p-0 px-1 text-center flex-grow-1 lhp-80 min-hp-80"
                />
              </div>
              <div className="centrar-ver">
                <div className="text-left psp-10 pep-20">
                  <div className="dot mep-10 mtp-10"></div>
                  <div className="f-ubuntu-L py-1 mtp--26 msp-20">
                    Haremos algunas encuestas a nuestros compañeros y compañeras
                    y elaboraremos un gráfico con los resultados.
                  </div>
                </div>
                <div className="text-left psp-10 pep-20">
                  <div className="dot mep-10 mtp-10"></div>
                  <div className="f-ubuntu-L py-1 mtp--26 msp-20">
                    A partir de los resultados, conoceremos la diversidad
                    cultural que existe en nuestra comunidad escolar.
                  </div>
                </div>
              </div>
            </div>

            <div className="ptp-15"></div>

            <div className="bgc-urien p-2 d-flex rounded-p-10 sombra">
              <div className="hp-80 mnwp-160 bgc-white centrar-ver rounded-p-10 position-relative">
                <img
                  src="images/page_015/img_004.png"
                  className="position-absolute top-0 start-0 translate-middle msp-10 mtp-5 hp-40 "
                  alt=""
                />
                <InputBox
                  id={"p" + pagina + "_input" + (indexInput += 1)}
                  className="p-0 px-1 text-center flex-grow-1 lhp-80 min-hp-80"
                />
              </div>
              <div className="centrar-ver">
                <div className="text-left psp-10 pep-20">
                  <div className="dot mep-10 mtp-10"></div>
                  <div className="f-ubuntu-L py-1 mtp--26 msp-20">
                    Crearemos diversos productos culturales, artísticos y
                    literarios que reflejen la diversidad de nuestra comunidad
                    escolar.
                  </div>
                </div>
                <div className="text-left psp-10 pep-20">
                  <div className="dot mep-10 mtp-10"></div>
                  <div className="f-ubuntu-L py-1 mtp--26 msp-20">
                    Preparamos nuestra Fiesta de la Diversidad.
                  </div>
                </div>
              </div>
            </div>

            <div className="ptp-15"></div>

            <div className="bgc-urien p-2 d-flex rounded-p-10 sombra">
              <div className="hp-80 mnwp-160 bgc-white centrar-ver rounded-p-10 position-relative">
                <img
                  src="images/page_015/img_004.png"
                  className="position-absolute top-0 start-100 translate-middle msp--15 mtp-5 hp-40 "
                  alt=""
                />
                <InputBox
                  id={"p" + pagina + "_input" + (indexInput += 1)}
                  className="p-0 px-1 text-center flex-grow-1 lhp-80 min-hp-80"
                />
              </div>
              <div className="centrar-ver">
                <div className="text-left psp-10 pep-20">
                  <div className="dot mep-10 mtp-10"></div>
                  <div className="f-ubuntu-L py-1 mtp--26 msp-20">
                    Llevaremos a cabo nuestra Fiesta de la Diversidad y
                    presentaremos todos nuestros productos culturales,
                    artísticos y literarios a la comunidad escolar.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="ptp-20"></div>
          {/* PIE DE PAGINA */}
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
            <div className="bgc-jawa wp-50 hp-30 f-Ubuntu-M fsp-20 psp-5">
              {props.numeroPagina(pagina)}
            </div>
          </div>
          <div
            className="row position-absolute caja-flotante2 p-0 m-0 align-items-end"
            style={{ bottom: 0 }}
          >
            <div className="col-1 position-relative col-sm-2 p-0 m-0">
              <img
                src="images/rotulo_motivacion.svg"
                className="oculto"
                alt=""
              />
              <div className="w-100 hp-15 bgc-yamcha rounded-caja-start"></div>
              <div className="w-100 hp-25 bgc-goten"></div>
            </div>
            <div className="col-7 position-relative col-sm-2 p-0 m-0">
              <img
                src="images/rotulo_planificacion.svg"
                className="visible rotulo-etapa position-absolute top-0 start-0"
                alt=""
              />
              <div className="w-100 hp-15 bgc-tshinhan rounded-caja"></div>
              <div className="w-100 hp-25 bgc-bulma"></div>
            </div>
            <div className="col-1 position-relative col-sm-2 p-0 m-0">
              <img
                src="images/rotulo_investigacion.svg"
                className="oculto"
                alt=""
              />
              <div className="w-100 hp-15 bgc-milk rounded-caja"></div>
              <div className="w-100 hp-25 bgc-android18"></div>
            </div>
            <div className="col-1 position-relative col-sm-2 p-0 m-0">
              <img
                src="images/rotulo_experimentacion.svg"
                className="oculto"
                alt=""
              />
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
    </div>
  );
}

export default Page015;
