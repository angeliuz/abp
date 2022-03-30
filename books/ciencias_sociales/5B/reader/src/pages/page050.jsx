import React from "react";
import InputBox from "../components/InputBox";
import ModalBook from "../components/ModalBook";

import "./page_050.css";

function Page050(props) {

  const pagina = "050";
  var indexInput = 0;

  return (
    <div className="wrapper bgc-light">
      <div className="d-flex flex-column align-items-center pbp-20">
        <div className="page bgc-white overflow-hidden position-relative" id={"page_" + pagina}>
          <div className="cabecera-v1 hp-80 bgc-pidgey">
          </div>

          <div className="ptp-10 container-titulo-global mbp-20">
            <div className="d-flex">
              {/* <img className="hp-20 align-center mt-3 me-2 mb-2" src="images/page_050/i_g.svg" alt=""  /> */}
              <div className="f-ccdigitaldelivery-bold fsp-35 color-pidgey">2</div>
              <div className="f-Ubuntu-R fsp-16 ptp-18 psp-10 pep-10 text-start">Busco otras entrevistas y comparo.</div>
              {/* <ModalBook id={ "p" + pagina + "_book"+ (indexInput+=1) } image="images/page_031/img_002.svg" clasesImagen="hp-40 text-center mtp-10 " className="p-0 px-0" /> */}
            </div>
          </div>


          <div className="row container-row px-5">
            <div className="col-sm-12 col-md-6 position-relative">
              <div className="position-absolute top-100 start-0 translate-middle wp-100 msp-40 mtp--70"><img src="images/page_050/carta.png" className="wp-50 mep-70 mtp-30" alt="" /></div>

              <div className="box-color-24-1">
                <div className="f-Ubuntu-B alinea rounded-set-10 bgc-akuma w-100 p-1 text-center color-white">¿En qué se parece a la entrevista que observé en la actividad anterior?</div>
                <div className=" bgc-white hp-250 p-2 rounded-seb-20 border-style-solid border-color-akuma border-2">
                  <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-300" />
                </div>
              </div>
            </div>

            <div className="col-sm-12 col-md-6 position-relative">

              <div className="position-absolute top-50 start-0 translate-middle wp-100 msp-0 visible-768"><img src="images/page_050/espiral.svg" className="wp-50 " alt="" /></div>
              <div className="box-color-24-2">
                <div className="f-Ubuntu-B alinea rounded-set-10 bgc-bulma w-100 p-1 text-center color-white">¿En qué se diferencia de la entrevista que observé en la actividad anterior?</div>
                <div className=" bgc-white hp-250 p-2 rounded-seb-20 border-style-solid border-color-bulma border-2">
                  <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-300" />
                </div>
              </div>
            </div>

          </div>


          <div className="ptp-10 msp-15 mep-50 mbp-20">
            <div className="d-flex">
              <img className="hp-20 align-center mt-3 me-2 mb-2" src="images/page_050/g_i.svg" alt="" />
              <div className="f-ccdigitaldelivery-bold fsp-35 color-pidgey">3</div>
              <div className="f-Ubuntu-R fsp-16 ptp-18 psp-10 pep-10 text-start">
                En grupo decidimos cómo serán las páginas de nuestra entrevista. Luego, dibujo un boceto de ellas que indique cómo diferenciaremos cada sección.
              </div>
              {/* <ModalBook id={ "p" + pagina + "_book"+ (indexInput+=1) } image="images/page_031/img_002.svg" clasesImagen="hp-40 text-center mtp-10 " className="p-0 px-0" /> */}
            </div>
          </div>

          <div className="d-flex psp-60 pep-60 pbp-100">
            <div className="row w-100 bgc-zangief psp-10 pep-10 ptp-20 pbp-20 rounded-p-20">
              <div className="col-sm-12 col-md-6 ">
                <div className="d-flex bgc-white border-style-solid border-color-cyrax border-2 w-100 min-hp-400"><InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 lhp-35 min-hp-300" /></div>
              </div>
              <div className="col-sm-12 col-md-6 position-relative">
                <div className="position-absolute top-0 start-100 translate-middle wp-100 msp-40 mtp-50"><img src="images/page_050/lapiz.png" className="wp-15 mep-70 mtp-30" alt="" /></div>
                <div className="d-flex bgc-white border-style-solid border-color-cyrax border-2 w-100 min-hp-400"><InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 lhp-35 min-hp-300" /></div>
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
              <img src="images/rotulo_investigacion.svg" className="oculto" alt="" />
              <div className="w-100 hp-15 bgc-milk rounded-caja"></div>
              <div className="w-100 hp-25 bgc-android18"></div>
            </div>
            <div className="col-1 col-sm-2 p-0 m-0 position-relative">
              <img src="images/rotulo_experimentacion.svg" className="visible rotulo-etapa position-absolute top-0 start-0" alt="" />
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

export default Page050;
