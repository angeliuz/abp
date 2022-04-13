import React from "react";
import InputBox from "../components/InputBox";
import ModalBook from "../components/ModalBook";
import ModalVideo from "../components/ModalVideo";

import "./page_028.css";

function Page028(props) {

  const pagina = "028";
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

          <div className="ptp-30 container-titulo-global mbp-10">
            <div className={"f-Ubuntu-B fsp-20 text-start lhp-20 " + color}>Nos ponemos en el lugar de otros</div>
            <div className="d-flex">
              {/* <img className="hp-20 align-center mt-3 me-2 mb-2" src={"images/page_"+pagina+"/img_005.svg"} alt=""  /> */}
              <div className={"f-ccdigitaldelivery-bold fsp-35 " + color}>3</div>
              <div className="f-Ubuntu-R fsp-16 ptp-18 psp-10 pep-10 text-start">
                Leemos los casos y respondemos:
              </div>
              {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image="images/generales/play.svg" clasesImagen="cambio hp-40 mtp-10" className="p-0 px-1" /> */}
              {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image="images/page_007/img_001.png" className="p-0 px-1" /> */}
              {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image="images/page_007/img_001.png" className="p-0 px-1" /> */}
              <ModalBook id={"p" + pagina + "_book" + (indexInput += 1)} colorUnidad={background} pagina={"80"} image={"images/page_" + pagina + "/img_001.svg"} clasesImagen="hp-40 text-center mtp-10" className="p-0 px-0" />
       </div>
          </div>


          <div className="d-flex msp-60 mep-60 mbp-0 mtp-10 ">

            <div className="row m-0 psp-10 pep-10 ptp-0 pbp-10 rounded-p-20 w-100">



              <div className="col-md-12 col-lg-12 position-relative">
                {/* <div className="position-absolute top-0 start-0 translate-middle msp-0 mtp--20 "><img src="images/page_029/img_003.png" className=" " alt="" /></div> */}

                <div className="d-flex mbp-20 mtp-10 w-100">
                  <div className="p-2 min-hp-100 w-100 ">
                    <div className="f-Ubuntu-L fsp-16 msp-10 mep-10 text-start pbp-10">¿Qué tienen en común las situaciones que leímos?</div>
                    <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-70" />
                  </div>
                </div>
              </div>

            </div>
          </div>

          <div className="ptp-30 container-titulo-global mbp-10">
            {/* <div className={"f-Ubuntu-B fsp-20 psp-0 text-start lhp-20 "+color}>¿Qué podemos reciclar?</div> */}
            <div className="d-flex">
              <img className="hp-20 align-center mt-3 me-2 mb-2" src={"images/page_" + pagina + "/img_002.svg"} alt="" />
              <div className={"f-ccdigitaldelivery-bold fsp-35 " + color}>4</div>
              <div className="f-Ubuntu-R fsp-16 ptp-18 psp-10 pep-10 text-start">
                Elegimos uno de los casos y lo analizamos.
              </div>
              {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image="images/generales/play.svg" clasesImagen="cambio hp-40 mtp-10" className="p-0 px-1" /> */}
              {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image="images/page_007/img_001.png" className="p-0 px-1" /> */}
              {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image="images/page_007/img_001.png" className="p-0 px-1" /> */}
              {/* <ModalBook id={"p" + pagina + "_book" + (indexInput += 1)} image={"images/page_" + pagina + "/img_004.svg"} clasesImagen="hp-40 text-center mtp-10 " className="p-0 px-0" /> */}
            </div>
          </div>

          <div className="d-flex global-margin mtp-0 mbp-0 psp-0 pep-0 ptp-0 pbp-0">
            <div className="row p-0 m-0 w-100">
              <div className="col-12 p-0 m-0 position-relative">

              </div>
            </div>
          </div>


          <div className="d-flex global-margin mtp-0 mbp-0 psp-0 pep-0 ptp-0 pbp-0 position-relative hp-400 f-pixilate-semibold fsp-16">
            <div className="position-absolute top-50 start-50 translate-middle msp-0 mtp-0 zindex-1"><img src={"images/page_" + pagina + "/img_003.svg"} className="wp-580" alt="" /></div>
            <div className="position-absolute top-50 start-50 translate-middle msp--5 mtp-0 zindex-1">
              <div className="d-flex flex-column wp-150 psp-10 pep-10 ptp-0 pbp-0">
                Situación analizada
                <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 overflow-auto hp-120" />
              </div>
            </div>
            <div className="position-absolute top-0 start-50 msp--275 mtp-30 zindex-1">
              <div className="d-flex flex-column wp-150 psp-10 pep-10 ptp-0 pbp-0 ">
                Si pienso como...
                <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 overflow-auto hp-120" />
              </div>
            </div>
            <div className="position-absolute top-50 start-50 msp--275 mtp-20 zindex-1">
              <div className="d-flex flex-column wp-150 psp-10 pep-10 ptp-0 pbp-0 ">
                Si pienso como...
                <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 overflow-auto hp-120" />
              </div>
            </div>
            <div className="position-absolute top-0 start-50 msp-120 mtp-30 zindex-1">
              <div className="d-flex flex-column wp-150 psp-10 pep-10 ptp-0 pbp-0 ">
                Si pienso como...
                <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 overflow-auto hp-120" />
              </div>
            </div>
            <div className="position-absolute top-50 start-50 msp-120 mtp-20 zindex-1">
              <div className="d-flex flex-column wp-150 psp-10 pep-10 ptp-0 pbp-0 ">
                Si pienso como...
                <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 overflow-auto hp-120" />
              </div>
            </div>
          </div>



          <div className="d-flex msp-100 mep-100 mbp-0 mtp-10 mbp-80">

            <div className="row m-0 psp-10 pep-10 ptp-0 pbp-10 rounded-p-20 w-100">



              <div className="col-md-12 col-lg-12 position-relative">
                <div className="position-absolute top-50 start-100 translate-middle msp-20 mtp--20 "><img src="images/page_028/img_005.png" className=" " alt="" /></div>
                <div className="position-absolute top-0 start-50 translate-middle msp-20 mtp--50 zindex-1"><img src="images/page_028/img_004.png" className=" wp-90" alt="" /></div>
                <div className="d-flex mbp-20 mtp-10 w-100">
                  <div className="p-2 min-hp-100 w-100 border-style-solid border-1 border-color-android18 bgc-azuka rounded-p-10">
                    <div className="d-flex interior-caja-v1 bgc-white text-start min-hp-0 bgc-white">
                      <div className="w-100 text-center ">
                        <span className="f-pixilate-semibold ">Como grupo, opinamos que</span>
                        <br />
                        
                      </div>
                    </div>
                    <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-140" />
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

export default Page028;
