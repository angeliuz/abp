import React from "react";
import InputBox from "../components/InputBox";
import ModalBook from "../components/ModalBook";

import "./page_022.css";

function Page022(props) {
  const pagina = "022";
  var indexInput = 0;
  const etapa = "3"
  const background = "bgc-android18";
  const color = "color-android18";
  const borderColor = "border-color-android18"
  const borderColorTable = "border-color-azuka"
  const bgc_cajas = "bgc-goku";

  return (
    <div className="wrapper bgc-light">
      <div className="d-flex flex-column align-items-center pbp-20">
        <div
          className="page bgc-white overflow-hidden position-relative"
          id={"page_" + pagina}
        >
          {/* BEGIN CABECERA VERSIÓN 2 */}
          <div className="cabecera-v1 hp-80 bgc-android18"></div>
          {/* END CABECERA VERSIÓN 2 */}

          <div className="ptp-50 container-titulo-global mbp-0">
            {/* <div className={"f-Ubuntu-B fsp-20 psp-20 text-start lhp-20 " + color}>
              La importancia de un plan de seguridad
            </div> */}
            <div className="d-flex psp-20">
              {/* <img className="hp-20 align-center mt-3 me-2 mb-2" src={"images/page_" + pagina + "/img_001.svg"} alt="" /> */}
              <div className={"f-ccdigitaldelivery-bold fsp-35 " + color}>
                2
              </div>
              <div className="f-Ubuntu-R fsp-16 ptp-18 psp-10 pep-10 text-start">
              Leo la noticia. Luego, completo el diagrama.
              </div>
              {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image={"images/generales/play.svg"} clasesImagen="cambio hp-40 mtp-10" className="p-0 px-1" /> */}
              {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image={"images/page_"+pagina+"/img_001.png"} className="p-0 px-1" /> */}
              <ModalBook id={"p" + pagina + "_book" + (indexInput += 1)} pagina={"83"} image={"images/page_" + pagina + "/img_001.svg"} clasesImagen="hp-40 text-center mtp-10 " className="p-0 px-0" />
            </div>
          </div>

          <div className="d-flex global-margin mtp-0 mbp-50 psp-0 pep-0 ptp-0 pbp-0 position-relative hp-400 f-Ubuntu-L  fsp-16">
          <div className="position-absolute top-0 start-100 translate-middle mtp-90 msp--100 zindex-2 visible-768"><img src="images/page_022/img_002.png" className="" alt="" /></div>
          <div className="position-absolute top-100 start-100 translate-middle msp--90 zindex-2 visible-768"><img src="images/page_022/img_004.png" className="" alt="" /></div>
          <div className="position-absolute top-50 start-0 translate-middle  zindex-2 msp-80 visible-768"><img src="images/page_022/img_003.png" className="" alt="" /></div>
            <div className="position-absolute top-50 start-50 translate-middle msp-0 mtp-60 zindex-1"><img src={"images/page_" + pagina + "/circulo.svg"} className="wp-580" alt="" /></div>

            <div className="position-absolute top-50 start-50 translate-middle msp--60 mtp--120 zindex-1">
              <div className="d-flex ">
                <div className="bgc-pidgey wp-120 f-Ubuntu-R fsp-15 mep-30 ptp-2 pbp-2 rounded-p-10 align-self-end color-white">Energía limpia</div>
              </div>

            </div>

            <div className="position-absolute top-50 start-50 translate-middle msp-90 mtp--120 zindex-1">
              <div className="d-flex ">
                <div className="bgc-pidgey wp-120 f-Ubuntu-R fsp-15 mep-30 ptp-2 pbp-2 rounded-p-10 align-self-end color-white">Energía sucia</div>
              </div>

            </div>

            <div className="position-absolute top-100 start-50 translate-middle zindex-1 msp--100 mtp--75">
              <div className="d-flex ">
                <div className="bgc-pidgey wp-120 f-Ubuntu-R fsp-15 mep-30 ptp-2 pbp-2 rounded-p-10 align-self-end color-white">Conclusión</div>
              </div>

            </div>

            <div className="position-absolute top-50 start-50 translate-middle msp--5 mtp-0 zindex-1">
              <div className="d-flex flex-column wp-120 psp-20 pep-10 ptp-0 pbp-0">

                <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-120" />
              </div>
            </div>
            <div className="position-absolute top-50 start-50 translate-middle msp--120 mtp-0 zindex-1">
              <div className="d-flex flex-column wp-120 psp-10 pep-10 ptp-0 pbp-0 ">

                <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-150" />
              </div>
            </div>
            {/* <div className="position-absolute top-50 start-50 msp--275 mtp-20 zindex-1">
              <div className="d-flex flex-column wp-150 psp-10 pep-10 ptp-0 pbp-0 ">
                Si pienso como...
                <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-120" />
              </div>
            </div> */}
            <div className="position-absolute top-50 start-50 translate-middle msp-120 mtp-0 zindex-1">
              <div className="d-flex flex-column wp-120 psp-10 pep-10 ptp-0 pbp-0 ">

                <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-150" />
              </div>
            </div>
            <div className="position-absolute top-100 start-50 translate-middle msp-0 mtp--20 zindex-1">
              <div className="d-flex flex-column wp-280 psp-10 pep-10 ptp-0 pbp-0 ">

                <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-70" />
              </div>
            </div>
          </div>

          <div className="ptp-30 container-titulo-global mbp-20">
            {/* <div className={"f-Ubuntu-B fsp-20 psp-0 text-start lhp-20 " + color}>Contextualizamos</div> */}
            <div className="d-flex">
              {/* <img className="hp-20 align-center mt-3 me-2 mb-2" src={"images/page_"+pagina+"/img_001.svg"} alt=""  /> */}
              {/* <div className={"f-ccdigitaldelivery-bold fsp-35 " + color}>1</div> */}
              <div className="f-Ubuntu-R fsp-16 ptp-18 psp-10 pep-10 text-start">
                Respondo:
              </div>
              {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image="images/generales/play.svg" clasesImagen="cambio hp-40 mtp-10" className="p-0 px-1" /> */}
              {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image="images/page_007/img_001.png" className="p-0 px-1" /> */}
              {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image="images/page_007/img_001.png" className="p-0 px-1" /> */}
              {/* <ModalBook id={ "p" + pagina + "_book"+ (indexInput+=1) } image={"images/page_"+pagina+"/img_002.svg"} clasesImagen="hp-40 text-center mtp-10 " className="p-0 px-0" /> */}
            </div>
          </div>

          <div className=" psp-50 pep-50 mbp-100 mtp-10">

            <div className="row container-row px-5">
              <div className="col-sm-12 col-md-6 position-relative mbp-20">
                {/* <div className="position-absolute top-100 start-0 translate-middle wp-100 msp-40 mtp--70"><img src="images/page_050/carta.png" className="wp-50 mep-70 mtp-30" alt="" /></div> */}

                <div className="">
                  <div className="f-Ubuntu-B alinea rounded-set-10 bgc-saitama w-100 p-1 text-center color-white">¿Qué me ha sorprendido de lo que he
                    aprendido sobre la energía?</div>
                  <div className=" linea1 bgc-white  p-2 rounded-seb-20 border-style-solid border-color-saitama border-2">
                    <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-140" />
                  </div>
                </div>
              </div>

              <div className="col-sm-12 col-md-6 position-relative">
                <div className="position-absolute top-0 start-100 translate-middle mtp--10 msp-0 "><img src="images/page_022/img_006.png" className="" alt="" /></div>
                <div className="position-absolute top-50 start-0 translate-middle wp-100 msp-0 visible-768"><img src="images/page_022/espiral.svg" className="wp-50 " alt="" /></div>
                <div className="">
                  <div className="f-Ubuntu-B alinea rounded-set-10 bgc-birdie w-100 p-1 text-center color-white">¿Para qué me ha servido la
                    investigación?</div>
                  <div className="linea1 bgc-white p-2  rounded-seb-20 border-style-solid border-color-birdie border-2">
                    <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-140" />
                  </div>
                </div>
              </div>

            </div>


          </div>
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
            <div className="bgc-boros wp-50 hp-30 f-Ubuntu-M fsp-20 psp-5">
              {props.numeroPagina(pagina)}
            </div>
          </div>
          <div
            className="row w-100 position-absolute caja-flotante2 p-0 m-0 align-items-end"
            style={{ bottom: 0 }}
          >
            <div className="col-1 col-sm-2 p-0 m-0 position-relative">
              <img
                src="images/rotulo_motivacion.svg"
                className="oculto"
                alt=""
              />
              <div className="w-100 hp-15 bgc-yamcha rounded-caja-start"></div>
              <div className="w-100 hp-25 bgc-goten"></div>
            </div>
            <div className="col-1 col-sm-2 p-0 m-0 position-relative">
              <img
                src="images/rotulo_planificacion.svg"
                className="oculto"
                alt=""
              />
              <div className="w-100 hp-15 bgc-tshinhan rounded-caja"></div>
              <div className="w-100 hp-25 bgc-bulma"></div>
            </div>
            <div className="col-7 col-sm-2 p-0 m-0 position-relative">
              <img
                src="images/rotulo_investigacion.svg"
                className="visible rotulo-etapa position-absolute top-0 start-0"
                alt=""
              />
              <div className="w-100 hp-15 bgc-milk rounded-caja"></div>
              <div className="w-100 hp-25 bgc-android18"></div>
            </div>
            <div className="col-1 col-sm-2 p-0 m-0 position-relative">
              <img
                src="images/rotulo_experimentacion.svg"
                className="oculto"
                alt=""
              />
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
          {/*FIN PIE DE PAGINA */}
        </div>
      </div>
    </div>
  );
}

export default Page022;
