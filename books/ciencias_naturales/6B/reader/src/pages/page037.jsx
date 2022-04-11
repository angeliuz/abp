import React from "react";
import InputBox from "../components/InputBox";
import ModalBook from "../components/ModalBook";
import SubirImagen from '../components/SubirImagen';

import "./page_037.css";

function Page037(props) {

  const pagina = "037";
  var indexInput = 0;
  const etapa = "3"
  const background = "bgc-android18";
  const color = "color-android18";
  const colorSesion = "color-primary";
  const borderColor = "border-color-android18"
  const bgc_cajas = "bgc-goku";

  return (
    <div className="wrapper bgc-light">
      <div className="d-flex flex-column align-items-center pbp-20">
        <div className="page bgc-white overflow-hidden position-relative" id={"page_" + pagina}>
          <div className="cabecera-v1 hp-80 bgc-android18">
          </div>

          <div className="psp-60 pep-60 ptp-30">
            <div className="d-flex psp-20 pbp-20">
              <div className={"f-Ubuntu-B fsp-21 mtp--6 " + color}>
                e.
              </div>
              <div className="f-Ubuntu-R fsp-16 psp-10 pep-10 text-start">
                Decidimos imágenes, tablas, dibujos u otros recursos gráficos que queremos que incluya la infografía.
              </div>
            </div>
          </div>

          <div className="d-flex msp-60 mep-60 mbp-100">
            <div className="bgc-white rounded-p-5 psp-10 ptp-10 pep-10 pbp-10 w-100 border-style-solid border-1">
              <div className="position-relative">
                <div className="d-flex w-100">
                  <div className="min-hp-100 w-100 rounded-p-10">
                    {/* <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 lhp-25 min-hp-800" /> */}
                    <SubirImagen
                      id={"imagen_" + pagina + "_" + (indexInput += 1)}
                      className="w-100 bgc-white min-hp-800"
                      colorUnidad={background}
                      imagenPlaceHolder1="images/generales/subir_imagen2.svg"
                      imagenPlaceHolder2="images/generales/subir_imagen2.svg"
                      titulo="Subir imagen"
                    />
                  </div>
                </div>
                <div className="position-absolute top-100 start-0 translate-middle msp-20 mtp--40 zindex-1"><img src={"images/page_" + pagina + "/img_001.png"} className="wp-120" alt="" /></div>
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

export default Page037;
