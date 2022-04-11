import React from "react";
import InputBox from "../components/InputBox";

import "./page_008.css";

function Page008(props) {

  const pagina = "008";
  var indexInput = 0;

  return (
    <div className="wrapper bgc-light">
      <div className="d-flex flex-column align-items-center pbp-20">
        <div className="page bgc-white overflow-hidden position-relative" id={"page_"+pagina}>
          <div className="cabecera-v1 hp-80 bgc-goten"></div>
          <div className="ptp-10 psp-0 mbp-20" style={{ paddingLeft: "6%", paddingRight: "6%" }}>
            <div className="d-flex">
              <div className="f-ccdigitaldelivery-bold fsp-35 color-goten">2</div>
              <div className="f-Ubuntu-R fsp-16 ptp-18 psp-10">Completo</div>
            </div>
          </div>
          <div className="d-flex cb-contenido-cajas mbp-60">
            <img src="images/page_008/img_001.png" className="cb-iphone" alt="" />
            <div className="d-flex flex-wrap justify-content-center w-100 mep-5 h-100 ">
              <div className="bgc-shogun cb-block w-100 p-2 f-Ubuntu-L fsp-13 mbp-20 cb-outline-2">
                <p className="cb-interior-caja text-start">Nos han enviado un mensaje una persona llamada</p>
                <InputBox id={ "p" + pagina + "_input"+ (indexInput+=1) } className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-70" />
              </div>

              <div className="bgc-shogun cb-block w-100 p-2 f-Ubuntu-L fsp-13 mbp-20 cb-outline-2">
                <p className="cb-interior-caja text-start">El desafío que nos propone consiste en</p>
                <InputBox id={ "p" + pagina + "_input"+ (indexInput+=1) }  className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-175" />
              </div>
            </div>
            <div className="d-flex flex-wrap justify-content-center w-100 msp-5">
              <div className="bgc-shogun cb-block w-100 p-2 f-Ubuntu-L fsp-13 mbp-20 cb-outline-2">
                <p className="cb-interior-caja text-start">Esta persona se dedica a</p>
                <InputBox id={ "p" + pagina + "_input"+ (indexInput+=1) }  className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-175" />
              </div>
              <div className="bgc-shogun cb-block w-100 p-2 f-Ubuntu-L fsp-13 mbp-20 cb-outline-2">
                <p className="cb-interior-caja text-start">Este es importante porque</p>
                <InputBox id={ "p" + pagina + "_input"+ (indexInput+=1) }  className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-175" />
              </div>
            </div>
          </div>

          <div className="bgc-genos border-top-style-solid border-color-dark border-2 pbp-90 position-relative">
            <img src="images/page_008/img_002.png" className="cb-personaje-18" alt="" />
            <div className="block-bottom text-start mtp-30 f-pixilate-bold">¿Cómo voy?</div>
            <div className=" block-bottom p-2 pb-3 f-Ubuntu-L bgc-white fsp-14 rounded-p-10 ps-4 pe-4 nat-page08">
              <div className="d-flex flex-wrap w-100 align-items-end titulo-linea mtp-10">
                <div className="d-flex">
                  <img src="images/page_008/arrow.svg" className="mep-5 cb-flecha" alt="" />
                  <span className="w-24 f-Ubuntu-L text-start">Las dos palabras más relevantes del desafío son</span>
                </div>
              </div>

              <div className="pt-0 flex-grow-1 mbp-20">
                <InputBox id={ "p" + pagina + "_input"+ (indexInput+=1) }  className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-35" />
              </div>

              <div className="d-flex flex-wrap w-100 align-items-end titulo-linea">
                <div className="d-flex">
                  <img src="images/page_008/arrow.svg" className="mep-5 cb-flecha" alt="" />
                  <span className="w-24 f-Ubuntu-L">¿Qué aspectos del desafío no he entendido del todo?</span>
                </div>
              </div>
              <div className="pt-0 flex-grow-1">
                <InputBox id={ "p" + pagina + "_input"+ (indexInput+=1) }  className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-35" />
              </div>
            </div>
            <div className="block-bottom text-start mtp-30 f-pixilate-bold">¿Cómo me siento?</div>
            <div className="block-bottom p-2 pb-2 f-Ubuntu-L bgc-white fsp-14 rounded-p-10 ps-4 pe-4">
              <div className="d-flex flex-wrap w-100 align-items-end titulo-linea mtp-10">
                <div className="d-flex">
                  <img src="images/page_008/arrow.svg" className="mep-5 cb-flecha" alt="" />
                  <span className="w-24 f-Ubuntu-L">¿Cómo me siento ante el desafío?</span>
                </div>
              </div>
              <div className="pt-0 flex-grow-1">
                <InputBox id={ "p" + pagina + "_input"+ (indexInput+=1) }  className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-35" />
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
              <div className="col-7 col-sm-2 p-0 m-0 position-relative">
                <img src="images/rotulo_motivacion.svg" className="visible rotulo-etapa position-absolute top-0 start-0" alt="" />
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
              <div className="col-1 col-sm-2 p-0 m-0 position-relative">
                <img src="images/rotulo_difusion.svg" className="oculto" alt="" />
                <div className="w-100 hp-15 bgc-leono rounded-caja-end"></div>
                <div className="w-100 hp-25 bgc-pikachu"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page008;
