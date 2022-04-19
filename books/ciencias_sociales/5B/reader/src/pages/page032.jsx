import React from "react";
import InputBox from "../components/InputBox";
import ModalBook from "../components/ModalBook";

import "./page_032.css";

function Page032(props) {

  const pagina = "032";
  var indexInput = 0;
  const etapa = "3"
  const background = "bgc-android18";
  const color = "color-android18";
  const borderColor = "border-color-android18"
  const borderColorTabla = "border-color-azuka"
  const bgc_cajas = "bgc-azuka";


  return (

    <div className="wrapper bgc-light">
      <div className="d-flex flex-column align-items-center pbp-20">
        <div className="page bgc-white overflow-hidden position-relative" id={"page_" + pagina}>
          <div className="cabecera-v1 hp-80 bgc-android18">
          </div>

          <div className="ptp-10 container-titulo-global mbp-20">
            <div className="d-flex">
              {/* <img className="hp-20 align-center mt-3 me-2 mb-2" src="images/page_023/img_005.svg" alt=""  /> */}
              <div className="f-ccdigitaldelivery-bold fsp-35 color-android18">2</div>
              <div className="f-Ubuntu-R fsp-16 ptp-18 psp-10 pep-10 text-start">Selecciono una noticia y completo.</div>
              {/* <img src="images/page_023/img_003.svg" className="cambio hp-50 text-end mtp-0 psp-10 pep-40"  alt=""  /> */}
              {/* <ModalBook id={"p" + pagina + "_book" + (indexInput += 1)} image="images/page_032/img_002.svg" clasesImagen="hp-40 text-center mtp-15 msp-5" className="p-0 px-0" /> */}
              <ModalBook id={"p" + pagina + "_book" + (indexInput += 1)} colorUnidad={background} pagina={"90"} image={"images/page_" + pagina + "/img_002.svg"} clasesImagen="hp-40 text-center mtp-10 " className="p-0 px-0" />
            </div>
          </div>

          <div className="d-flex msp-60 mep-60">
            <div className="row">
              <div className="col-md-6 col-sm-6 position-relative align-items-stretch mbp-20">
                <div className="position-absolute top-100 start-0 translate-middle wp-100 mtp--30 visible-695"><img src="images/page_032/img_002.png" className="w-45" /></div>
                <div className="h-100 bgc-white exterior-caja-v1 border-style-solid  border-color-android18 border-1 w-100 p-2 f-Ubuntu-L fsp-15 mbp-20">
                  <div className="d-flex interior-caja-v1 bgc-shogun text-start min-hp-0">
                    <div className="w-100 text-center">La noticia se refiere a</div>
                  </div>
                  <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="h-85 p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-120" />
                </div>
              </div>
              <div className="col-md-6 col-sm-6 align-items-stretch mbp-20">
                <div className="h-100 bgc-white exterior-caja-v1 border-style-solid  border-color-android18 border-1 w-100 p-2 f-Ubuntu-L fsp-15 mbp-20">
                  <div className="d-flex interior-caja-v1 bgc-shogun text-start min-hp-0">
                    <div className="w-100 text-center">¿Qué derecho se busca resguardar?</div>
                  </div>
                  <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="h-85 p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-120" />
                </div>
              </div>
              <div className="col-md-6 col-sm-6 align-items-stretch mbp-20">
                <div className="h-100 bgc-white exterior-caja-v1 border-style-solid  border-color-android18 border-1 w-100 p-2 f-Ubuntu-L fsp-15 mbp-20">
                  <div className="d-flex interior-caja-v1 bgc-shogun text-start min-hp-0">
                    <div className="w-100 text-center">¿Qué población se vería beneficiada?</div>
                  </div>
                  <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="h-85 p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-120" />
                </div>
              </div>
              <div className="col-md-6 col-sm-6 position-relativealign-items-stretch mbp-20">
                <div className="h-100 bgc-white exterior-caja-v1 border-style-solid  border-color-android18 border-1 w-100 p-2 f-Ubuntu-L fsp-15 mbp-20">
                  <div className="d-flex interior-caja-v1 bgc-shogun text-start min-hp-0">
                    <div className="w-100 text-center">¿A qué riesgo estaba expuesta?</div>
                  </div>
                  <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="h-85 p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-120" />
                </div>
              </div>
              <div className="col-md-12 col-sm-12 position-relative">

                <div className="bgc-white exterior-caja-v1 border-style-solid  border-color-android18 border-1 w-100 p-2 f-Ubuntu-L fsp-15 mbp-20">
                  <div className="d-flex interior-caja-v1 bgc-shogun text-start min-hp-0">
                    <div className="w-100 text-center">¿Qué institución propuso la medida y a qué poder del Estado pertenece?</div>
                  </div>
                  <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-80" />
                </div>
              </div>
            </div>

          </div>

          <div className="container-titulo-global mbp-20">
            <div className="d-flex">
              <img className="hp-20 align-center mt-3 me-2 mb-2" src="images/page_032/img_001.svg" alt="" />
              <div className="f-ccdigitaldelivery-bold fsp-35 color-android18">3</div>
              <div className="f-Ubuntu-R fsp-16 ptp-18 psp-10 pep-10 text-start">En grupo, busco noticias referidas a los deberes del Estado en relación con los derechos. Seleccionamos dos que consideramos especialmente importantes para incorporarlas en nuestra revista.</div>
              {/* <img src="images/page_023/img_003.svg" className="cambio hp-50 text-end mtp-0 psp-10 pep-40"  alt=""  /> */}
              {/* <ModalBook id={"p" + pagina + "_book" + (indexInput += 1)} image="images/page_032/img_003.svg" clasesImagen="hp-40 text-center mtp-15 msp--10" className="p-0 px-0" /> */}
              <ModalBook id={"p" + pagina + "_book" + (indexInput += 1)} colorUnidad={background} pagina={"91"} image={"images/page_" + pagina + "/img_003.svg"} clasesImagen="hp-40 text-center mtp-10 " className="p-0 px-0" />
            </div>
          </div>
          <div className="d-flex msp-60 mep-60 mbp-70">
            <div className="row p-2 mtp-20 mbp-20 rounded-p-10 bgc-ryu ">
              <div className="col-12">
                <div className="color-dark f-Ubuntu-R ptp-10 pbp-10 text-center">Las noticias que seleccionamos para la revista son:</div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 pt-2 position-relative">
                <div className="position-absolute top-100 start-0 translate-middle mtp--20 zindex-1"><img src="images/page_032/img_003.png" className="wp-35 " alt="" /></div>
                <div className="f-Ubuntu-R bgc-white psp-20 ptp-10 pbp-15 pep-20 rounded-p-10 text-center">
                  Noticia 1
                </div>
                <div className="mtp-10 pt-2 mbp-10 bgc-white rounded-p-10">
                  <div className="f-Ubuntu-L bgc-white psp-20 pbp-15 pep-20  text-start">
                    Titular
                    <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-35" />
                  </div>
                  <div className="f-Ubuntu-L bgc-white psp-20 ptp-10 pbp-15 pep-20 rounded-p-10 text-start">
                    ¿Cómo la recuperaremos al elaborar la revista?
                    <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-35" />
                  </div>
                  <div className="f-Ubuntu-L psp-20 ptp-10 pbp-15 pep-20 rounded-p-10 text-start">
                    ¿Por qué la seleccionamos?
                    <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-35" />
                  </div>
                </div>
              </div>

              <div className="col-lg-6 col-md-6 col-sm-12 pt-2 position-relative">
                <div className="position-absolute top-0 start-100 translate-middle mtp-20 zindex-1"><img src="images/page_032/img_004.png" className="wp-35 " alt="" /></div>
                <div className="f-Ubuntu-R bgc-white psp-20 ptp-10 pbp-15 pep-20 rounded-p-10 text-center">
                  Noticia 2
                </div>
                <div className="mtp-10 pt-2 mbp-10 bgc-white rounded-p-10">
                  <div className="f-Ubuntu-L bgc-white psp-20 pbp-15 pep-20  text-start">
                    Titular
                    <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-35" />
                  </div>
                  <div className="f-Ubuntu-L bgc-white psp-20 ptp-10 pbp-15 pep-20 rounded-p-10 text-start">
                    ¿Cómo la recuperaremos al elaborar la revista?
                    <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-35" />
                  </div>
                  <div className="f-Ubuntu-L psp-20 ptp-10 pbp-15 pep-20 rounded-p-10 text-start">
                    ¿Por qué la seleccionamos?
                    <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-35" />
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* BEGIN PIE DE PAGINA */}
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
          {/* END PIE DE PAGINA */}

        </div>
      </div>
    </div>

  );
}

export default Page032;
