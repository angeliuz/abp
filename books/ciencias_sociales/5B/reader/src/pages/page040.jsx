import React from "react";
import InputBox from "../components/InputBox";
import ModalBook from "../components/ModalBook";
import Check from "../components/Check2";

import "./page_040.css";

function Page040(props) {

  const pagina = "40";
  var indexInput = 0;

  return (
    <div className="wrapper bgc-light">
      <div className="d-flex flex-column align-items-center pbp-20">
        <div className="page bgc-white overflow-hidden position-relative" id={"page_" + pagina}>
          <div className="cabecera-v1 hp-80 bgc-android18">
          </div>

          <div className="d-flex msp-60 mep-60 mbp-0 mtp--30">

            <div className="row m-0 psp-10 pep-10 ptp-40 pbp-10 bgc-ryu rounded-p-20 w-100">

              <div className="col-md-12 col-lg-12 position-relative">
                <div className="position-absolute top-50 start-100 translate-middle msp-10 mtp-0 visible-768 zindex-1"><img src="images/page_040/img_003.png" className="wp-40 " alt="" /></div>
                <div className="d-flex mbp-20 mtp-10 w-100">
                  <div className="p-2 min-hp-100 w-100 border-style-solid border-2 rounded-p-10 border-color-white bgc-white">
                    <div className="f-Ubuntu-L fsp-16 msp-10 mep-10 text-start">Las imágenes que usaremos como apoyo en el reportaje son...</div>
                    <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-250" />
                  </div>
                </div>
              </div>
              <div className="col-md-12 col-lg-12 position-relative">
                <div className="position-absolute top-0 start-0 translate-middle msp--10 mtp--20 visible-768"><img src="images/page_040/img_001.png" className="wp-40 " alt="" /></div>
                <div className="d-flex mbp-20 mtp-10 w-100">
                  <div className="p-2 min-hp-100 w-100 border-style-solid border-2 rounded-p-10 border-color-white bgc-white">
                    <div className="f-Ubuntu-L fsp-16 msp-10 mep-10 text-start">Y las obtuvimos de las siguientes fuentes:</div>
                    <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-140" />
                  </div>
                </div>
              </div>

            </div>
          </div>

          <div className="d-flex w-100 mtp-50 psp-60 pep-60 ptp-20 mbp-0 bgc-ermac border-top border-color-dark border-2 pbp-80">
            <div className="row w-100 p-0 m-0">
              <div className="col-12 position-relative">
                <div className="position-absolute top-0 start-100 translate-middle msp--10 mtp--52 visible-768"><img src="images/page_040/img_002.png" className="wp-80 " alt="" /></div>
                <div className="f-pixilate-bold fsp-18 lh-sm text-start mbp-5">¿Cómo voy?</div>
                <div className="d-flex flex-column mbp-20 mtp-10 w-100">
                  <div className="p-2 min-hp-80 w-100 border-style-solid border-2 rounded-p-10 border-color-white bgc-white">
                    <div className="f-Ubuntu-L fsp-14 msp-0 mep-10 text-start">
                      <img src="images/page_040/img_001.svg" className="mep-5" alt="" />
                      <span>Tengo orgullo por haber podido</span>
                    </div>
                    <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-20" />
                    <div className="f-Ubuntu-L fsp-14 msp-0 mep-10 mtp-20 text-start">
                      <img src="images/page_040/img_001.svg" className="mep-5" alt="" />
                      <span>¿Cuándo resuelvo mejor las tareas?</span>
                    </div>
                    <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-20" />
                  </div>

                </div>
              </div>
              <div className="col-12">
                <div className="f-pixilate-bold fsp-18 lh-sm text-start mbp-5">¿Cómo me siento?</div>
                <div className="d-flex flex-wrap w-100 align-items-end titulo-linea mbp-30">
                  <span className="w-24 f-Ubuntu-L mtp-5 mbp-10 fsp-14">Marco con un <img src="images/page_018/img_005.svg" className="hp-17 mtp--2" alt="" /> el recuadro que mejor me represente.</span>
                  <div className="w-100 p-2 pb-3 bgc-white rounded-p-10">
                    <table className="w-100">
                      <tbody>
                        <tr>
                          <td>&nbsp;</td>
                          <td className="style-caja bgc-android18 tf-letra border-style-solid border-1 border-color-milk f-colby-compres-bold ps-2 pe-2">
                            Nunca</td>
                          <td style={{ minWidth: "55px" }} className="style-caja bgc-android18 tf-letra  border-style-solid border-1 border-color-milk f-colby-compres-bold ps-2 pe-2">
                            A veces</td>
                          <td className="style-caja bgc-android18 tf-letra border-style-solid border-1 border-color-milk f-colby-compres-bold ps-2 pe-2">
                            Generalmente</td>
                          <td className="style-caja bgc-android18 tf-letra  border-style-solid border-1 border-color-milk f-colby-compres-bold ps-2 pe-2">
                            Siempre</td>
                        </tr>
                        <tr>
                          <td className="bgc-ermac f-Ubuntu-L fsp-14 text-start psp-5 border-style-solid border-1 border-color-milk">Me gusta investigar sobre el tema del proyecto.</td>
                          <td className="border-style-solid border-1 border-color-milk"><Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check></td>
                          <td className="border-style-solid border-1 border-color-milk"><Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check></td>
                          <td className="border-style-solid border-1 border-color-milk"><Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check></td>
                          <td className="border-style-solid border-1 border-color-milk"><Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check></td>
                        </tr>
                        <tr>
                          <td className="bgc-ermac f-Ubuntu-L fsp-14 text-start psp-5 border-style-solid border-1 border-color-milk">Tengo ganas de encontrar soluciones al reto planteado.</td>
                          <td className="border-style-solid border-1 border-color-milk"><Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check></td>
                          <td className="border-style-solid border-1 border-color-milk"><Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check></td>
                          <td className="border-style-solid border-1 border-color-milk"><Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check></td>
                          <td className="border-style-solid border-1 border-color-milk"><Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
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
            <div className="col-7 col-sm-2 p-0 m-0 position-relative">
              <img src="images/rotulo_investigacion.svg" className="visible rotulo-etapa position-absolute top-0 start-0" alt="" />
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

export default Page040;
