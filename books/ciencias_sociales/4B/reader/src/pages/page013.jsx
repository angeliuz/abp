import React from "react";
import InputBox from "../components/InputBox";
import ModalBook from "../components/ModalBook";


import "./page_013.css";

function Page013(props) {

  const pagina = "013";
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
          {/* BEGIN CABECERA VERSIÓN 2 */}
          <div className={"cabecera-v2 d-flex flex-column " + background}>
            <div className="d-flex contenedor-cabecera-v2 ptp-40 psp-30 pep-30">
              <div className={"caja wp-150 text-center fsp-24 f-IntroRustG-Base " + color}>SESIÓN 2</div>
              <div className="section-name d-flex align-items-center fsp-24 fw-700 f-Ubuntu-M color-white">¿Qué sabemos sobre la convivencia?</div>
            </div>

          </div>
          {/* END CABECERA VERSIÓN 2 */}

          {/* BEGIN TITULO */}
          <div className="ptp-30 container-titulo-global mbp-20">
            {/* <div className={"f-Ubuntu-B fsp-20 psp-0 text-start lhp-20 " + color}>¡Tantos desechos!</div> */}
            <div className="d-flex">
              {/* <img className="hp-20 align-center mt-3 me-2 mb-2" src="images/page_007/ig.svg" alt=""  /> */}
              <div className={"f-ccdigitaldelivery-bold fsp-35 " + color}>1</div>
              <div className="f-Ubuntu-R fsp-16 ptp-18 psp-10 pep-10 text-start">
                Me hago preguntas sobre la buena convivencia escolar.
              </div>
              {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image={"images/page_"+pagina+"/img_001.jpg"} clasesImagen="cambio hp-40 mtp-10" className="p-0 px-1" /> */}
              {/* <ModalBook id={ "p" + pagina + "_book"+ (indexInput+=1) } image={"images/page_"+pagina+"/revista.jpg"} clasesImagen="hp-40 text-center mtp-10 " className="p-0 px-0" /> */}
            </div>
          </div>
          {/* END TITULO */}

          {/* BEGIN CONTENIDO */}
          <div className="d-flex psp-60 pep-60 mbp-70 position-relative">
            <div className="row w-100 justify-content-center">

              <div className="col-12 col-md-4 position-relative zi1 pbp-10">
                <div className="bgc-white w-100 hp-60 px-3 ptp-5">
                  <span className="f-Ubuntu-L">Sobre este tema me gustaría saber…</span>
                </div>
                <div className="bgc-white border-style-solid border-color-lightDark border-1 p-2">
                  <div className="bgc-bison">
                    <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 lhp-25 min-hp-240-r13" />
                  </div>
                </div>
                <div className="mtp--7 w-105 msp--5-r-p13">
                  <img src={"images/page_" + pagina + "/img_002.svg"} clasesImagen="position-absolute top-100 start-50" alt="" />
                </div>
              </div>

              <div className="col-12 col-md-4 position-relative zi1 pbp-10">
                <div className="bgc-white w-100 hp-60 px-3 ptp-5">
                  <span className="f-Ubuntu-L">Aún no lo hemos visto y quiero saber…</span>
                </div>
                <div className="bgc-white border-style-solid border-color-lightDark border-1 p-2">
                  <div className="bgc-bison">
                    <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 lhp-25 min-hp-240-r13" />
                  </div>
                </div>
                <div className="mtp--7 w-105 msp--5-r-p13">
                  <img src={"images/page_" + pagina + "/img_002.svg"} clasesImagen="position-absolute top-100 start-50" alt="" />
                </div>
              </div>

              <div className="col-12 col-md-4 position-relative zi1 pbp-10 min-hp-a">
                <div className="bgc-white w-100 hp-60 px-3 ptp-5">
                  <span className="f-Ubuntu-L">Antes de terminar, quisiera saber…</span>
                </div>
                <div className="bgc-white border-style-solid border-color-lightDark border-1 p-2">
                  <div className="bgc-bison">
                    <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 lhp-25 min-hp-240-r13" />
                  </div>
                </div>
                <div className="mtp--7 w-105 msp--5-r-p13 zi2">
                  <img src={"images/page_" + pagina + "/img_002.svg"} clasesImagen="position-absolute top-100 start-50" alt="" />
                </div>
              </div>


            </div>
            <div className="position-absolute top-0 start-0 msp-0 mtp--20 zindex-0 visible-768"><img src={"images/page_" + pagina + "/muro.jpg"} className="hp-380" alt="" /></div>
            <div className="position-absolute top-0 start-0 msp-0 mtp--20 zindex-0 invisible-768"><img src={"images/page_" + pagina + "/muro-res.jpg"} className="hp-950-r13" alt="" /></div>

          </div>

          <div className="container-titulo-global mbp-0">
            {/* <div className={"f-Ubuntu-B fsp-20 psp-20 text-start lhp-20 " + color}>
              Plan de trabajo
            </div> */}
            <div className="d-flex psp-20">
              {/* <img className="hp-20 align-center mt-3 me-2 mb-2" src={"images/page_"+pagina+"/img_.svg"} alt=""  /> */}
              <div className={"f-ccdigitaldelivery-bold fsp-35 " + color}>
                2
              </div>
              <div className="f-Ubuntu-R fsp-16 ptp-18 psp-10 pep-10 text-start">
                Resuelvo la sopa de letras y el crucigrama.
              </div>
              {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image={"images/generales/play.svg"} clasesImagen="cambio hp-40 mtp-10" className="p-0 px-1" /> */}
              {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image={"images/page_"+pagina+"/img_001.png"} className="p-0 px-1" /> */}
              <ModalBook id={"p" + pagina + "_book" + (indexInput += 1)} colorUnidad={background} pagina={"64"} image={"images/page_" + pagina + "/revista75-76.svg"} clasesImagen="hp-40 text-center mtp-10" className="p-0 px-0" />
     
            </div>
          </div>
          <div className="ptp-10 container-titulo-global pbp-20 mbp-0">
            <div className="d-flex psp-20">
              {/* <img className="hp-20 align-center mt-3 me-2 mb-2" src={"images/page_"+pagina+"/img_.svg"} alt=""  /> */}
              <div className={"f-ccdigitaldelivery-bold fsp-35 " + color}>
                3
              </div>
              <div className="f-Ubuntu-R col-8 fsp-16 ptp-18 psp-10 pep-10 text-start">
                Defino con mis palabras tres valores de la sopa de letras que considero importantes para la convivencia escolar.
              </div>
              {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image={"images/generales/play.svg"} clasesImagen="cambio hp-40 mtp-10" className="p-0 px-1" /> */}
              {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image={"images/page_"+pagina+"/img_001.png"} className="p-0 px-1" /> */}
              {/* <ModalBook id={ "p" + pagina + "_book"+ (indexInput+=1) } image={"images/page_"+pagina+"/revista65.svg"} clasesImagen="hp-40 text-center mtp-10 " className="p-0 px-0" /> */}
            </div>
          </div>
          <div className="psp-60 pep-60">
            <div className="border-style-solid border-color-pidgey border-1 ps-2 pe-1 ptp-10 pbp-5 rounded-p-10 position-relative">
              <div className="bgc-bison py-4 psp-40 pep-20 rounded-p-20">
                <div className="bgc-white position-relative py-2 psp-30 pep-20 rounded-p-20">
                  <div className="position-absolute top-50 start-0 translate-middle cuadrado bgc-arlo color-white">
                    <span className="f-Ubuntu-B fsp-18">1</span>
                  </div>
                  <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-80" />
                </div>
                <div className="pbp-10"></div>
                <div className="bgc-white position-relative py-2 psp-30 pep-20 rounded-p-20">
                  <div className="position-absolute top-50 start-0 translate-middle cuadrado bgc-ken color-white">
                    <span className="f-Ubuntu-B fsp-18">2</span>
                  </div>
                  <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-80" />
                </div>
                <div className="pbp-10"></div>
                <div className="bgc-white position-relative py-2 psp-30 pep-20 rounded-p-20">
                  <div className="position-absolute top-50 start-0 translate-middle cuadrado bgc-sektor color-white">
                    <span className="f-Ubuntu-B fsp-18">3</span>
                  </div>
                  <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-80" />
                </div>
              </div>
              <div className="position-absolute top-0 start-100 translate-middle msp-0 mtp-0 zindex-1 mtp--40 msp--60"><img src={"images/page_" + pagina + "/img_004.png"} className="wp-100 giro--3deg " alt="" /></div>
            </div>
          </div>

          <div className="pbp-100"></div>
          {/* END CONTENIDO */}


          {/* BEGIN PIE DE PAGINA */}
          <div className="d-flex hp-90 caja-flotante p-0 m-0 position-absolute justify-content-end align-items-end zindex-2" style={{ bottom: 70, right: 0 }}>
            <div className="f-Ubuntu-M fsp-10 position-absolute mbp-60" style={{ transform: `rotate(270deg)`, color: "dark" }}>
              ABP &copy; SM
            </div>
            <div className="bgc-boros wp-50 hp-30 f-Ubuntu-M fsp-20 psp-5">{props.numeroPagina(pagina)}</div>
          </div>
          <div className="row position-absolute caja-flotante2 p-0 m-0 align-items-end" style={{ bottom: 0 }}>

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
          {/* END PIE DE PAGINA */}

        </div>
      </div>
    </div>

  );
}

export default Page013;
