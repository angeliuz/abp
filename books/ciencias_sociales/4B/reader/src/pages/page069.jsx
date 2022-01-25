import React from "react";
import ModalVideo from "../components/ModalVideo";
import InputBox from "../components/InputBox";
import ModalBook from "../components/ModalBook";

import "./page_069.css";

function Page069(props) {

  const pagina = "069";
  var indexInput = 0;
  const etapa = "6"
  const background = "bgc-pikachu";
  const color = "color-pikachu";
  const borderColor = "border-color-pikachu"
  const borderColorTabla = "border-color-kokomi"
  const bgc_cajas = "bgc-kokomi";

  return (
    <div className="wrapper bgc-light">
      <div className="d-flex flex-column align-items-center pbp-20">
        <div className="page bgc-white overflow-hidden position-relative" id={"page_" + pagina}>
          {/* BEGIN CABECERA VERSIÓN 2 */}
          <div className={"cabecera-v2 d-flex flex-column " + background}>
            <div className="d-flex contenedor-cabecera-v2 ptp-40 psp-30 pep-30">
              <div className={"caja wp-150 text-center fsp-24 f-IntroRustG-Base " + color}>SESIÓN 16</div>
              <div className="section-name d-flex align-items-center fsp-24 fw-700 f-Ubuntu-M color-white">La amistad y la diversidad se celebran</div>
            </div>

          </div>
          {/* END CABECERA VERSIÓN 2 */}
          <div className="ptp-10 container-titulo-global">
            <div className="d-flex">
              <img className="hp-20 align-center mt-3 me-2 mb-2" src="images/page_069/img_001.svg" alt="" />
              <div className={"f-ccdigitaldelivery-bold fsp-35 " + color}>1</div>
              <div className="f-Ubuntu-R fsp-16 ptp-18 psp-10 pep-10 text-start">
                Realizamos la jornada para compartir.
              </div>
            </div>
          </div>

          <div className="d-flex msp-60 mep-60 mbp-70 ">
            <div className="row p-0 m-0">
              <div className="col-sm-12 col-md-6 position-relative"></div>
              <div className=" container-titulo-global mbp-20">
                <div className="d-flex">
                  <div className={"f-ccdigitaldelivery-bold fsp-35 " + color}>2</div>
                  <div className="f-Ubuntu-R fsp-16 ptp-18 psp-10 pep-10 text-start">
                    Observo los otros álbumes que completan la información del curso.
                    Con ellos, completo la siguiente información:
                  </div>
                </div>
              </div>


              {/* BEGIN EJERCICIO 2 */}
              <div className="rounded-p-10 w-100 d-flex flex-column mx-auto bgc-milena ptp-20 pbp-20 f-Ubuntu-R fsp-15 mbp-10 position-relative justify-content-between">
                <div className="position-absolute top-50 start-100 translate-middle msp-0 mtp-25 visible-768 zindex-1"><img src={"images/page_" + pagina + "/img_004.png"} className="wp-60" alt="" /></div>
                <div className="row mtp-10 d-flex mbp-10">
                  <div className="col-sm-12 col-md-6 mbp-10">
                    <div className="text-start w-100 bgc-white rounded-p-10">
                      <div className="position-absolute top-0 start-0 translate-middle msp-20 mtp-30 visible-768 zindex-1"><img src={"images/page_" + pagina + "/img_003.svg"} className="wp-30" alt="" /></div>
                      <div className="hp-50 pep-20 psp-20 ptp-10 pbp-10 d-flex justify-content-start align-items-center">
                        Fui entrevistado/a por:
                      </div>
                      <div className="psp-15 pep-15">
                        <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-170" />
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-6">
                    <div className="text-start w-100 bgc-white rounded-p-10">
                      <div className="position-absolute top-0 start-50 translate-middle msp-10 mtp-30 visible-768 zindex-1"><img src={"images/page_" + pagina + "/img_003.svg"} className="wp-30" alt="" /></div>
                      <div className="hp-50 pep-20 psp-20 max-wp-200 ptp-10 pbp-10 d-flex justify-content-start align-items-center">
                        Lo que más me gustó de mi entrevista fue:
                      </div>
                      <div className="psp-15 pep-15">
                        <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-170" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row mtp-10 d-flex">
                  <div className="col-sm-12 col-md-6 mbp-10">
                    <div className="text-start w-100 bgc-white rounded-p-10">
                      <div className="position-absolute top-50 start-0 translate-middle msp-20 mtp-20 visible-768 zindex-1"><img src={"images/page_" + pagina + "/img_003.svg"} className="wp-30" alt="" /></div>
                      <div className="hp-50 pep-20 psp-20 ptp-10 pbp-10 d-flex justify-content-start align-items-center">
                        El álbum que más me gusto fue el de:
                      </div>
                      <div className="psp-15 pep-15">
                        <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-35" />
                      </div>
                      <div className="hp-50 pep-20 psp-20 ptp-10  d-flex justify-content-start align-items-center">
                        porque:
                      </div>
                      <div className="psp-15 pep-15">
                        <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-85" />
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-6">
                    <div className="text-start w-100 bgc-white rounded-p-10">
                      <div className="position-absolute top-10 start-50 translate-middle msp-20 mtp-20 visible-768 zindex-1"><img src={"images/page_" + pagina + "/img_003.svg"} className="wp-30" alt="" /></div>
                      <div className="hp-50 pep-20 psp-20 ptp-10 pbp-10 d-flex justify-content-start align-items-center">
                        Lo que más me gusta de mi curso es:
                      </div>
                      <div className="psp-15 pep-15">
                        <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-170" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className=" container-titulo-global mbp-20">
                <div className="d-flex">
                  <img className="hp-20 align-center mt-3 me-2 mb-2" src="images/page_069/img_005.svg" alt="" />
                  <div className={"f-ccdigitaldelivery-bold fsp-35 " + color}>3</div>
                  <div className="f-Ubuntu-R fsp-16 ptp-18 psp-10 pep-10 text-start">
                    Juntamos nuestros álbumes y creamos un gran álbum de la buena convivencia.
                    Lo mostramos al resto del colegio y lo guardamos en un lugar especial.
                  </div>
                </div>
              </div>
              {/* BEGIN EJERCICIO 3 */}
              <div className="max-wp-700 mx-auto bgc-white p-2 border-1 border-style-solid border-color-ken rounded-p-10">
                <div className="position-relative">
                  <div className="position-absolute top-0 start-50 translate-middle msp-0 mtp--15 visible-768 zindex-1"><img src={"images/page_" + pagina + "/img_006.png"} className="wp-450" alt="" /></div>
                </div>
                <span className="text-start f-Ubuntu-L fsp-15 d-flex ptp-5">Lo que más nos motiva para mostrar a mi colegio nuestro trabajo es:</span>
                <div className="psp-10 pep-10">
                  <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-170" />
                </div>
              </div>
            </div>
          </div>



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
            <div className="col-1 col-sm-2 p-0 m-0 position-relative">
              <img src="images/rotulo_experimentacion.svg" className="oculto" alt="" />
              <div className="w-100 hp-15 bgc-freezer rounded-caja"></div>
              <div className="w-100 hp-25 bgc-pidgey"></div>
            </div>
            <div className="col-1 col-sm-2 p-0 m-0 position-relative">
              <img src="images/rotulo_creacion.svg" className="oculto" alt="" />
              <div className="w-100 hp-15 bgc-ash rounded-caja"></div>
              <div className="w-100 hp-25 bgc-saitama"></div>
            </div>
            <div className="col-7 col-sm-2 p-0 m-0 position-relative">
              <img src="images/rotulo_difusion.svg" className="visible rotulo-etapa position-absolute top-0 start-0" alt="" />
              <div className="w-100 hp-15 bgc-leono rounded-caja-end"></div>
              <div className="w-100 hp-25 bgc-pikachu"></div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Page069;
