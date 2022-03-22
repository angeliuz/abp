import React from "react";
import InputBox from "../components/InputBox";
import ModalBook from "../components/ModalBook";
import ModalRecortable from "../components/ModalRecortable";

import "./page_010.css";

function Page010(props) {

  const pagina = "010";
  var indexInput = 0;
  const etapa = "1"
  const background = "bgc-goten";
  const color = "color-goten";
  const borderColor = "border-color-goten"
  const bgc_cajas = "bgc-genos";

  return (
    <div className="wrapper bgc-light">
      <div className="d-flex flex-column align-items-center pbp-20">
        <div className="page cb-page10 overflow-hidden position-relative" id={"page_" + pagina}>

          <div className="mtp-75 ">
            <div className="d-flex justify-content-center">
              <div className=" text-center fsp-25 f-IntroRustG-Base mbp-20">
                <img src="images/page_010/img_001.svg" className="hp-70 align-center mtp-0 mep-5 mb-2" alt="" />
              </div>
            </div>

            <div className="ptp-10 container-titulo-global mbp-20">
              {/* <div className={"f-Ubuntu-B fsp-20 psp-40 text-start lhp-20 "+color}>¡Tantos desechos!</div> */}
              <div className="d-flex psp-20 w-90">
                <img className="hp-20 align-center mtp-20 mep-5 mb-2" src="images/page_010/g.svg" alt="" />
                {/* <div className={"f-ccdigitaldelivery-bold fsp-35 "+color}>1</div> */}
                <div className="f-Ubuntu-R fsp-15 ptp-18 psp-0 pep-10 text-start">
                  Para mostrar nuestro compromiso con el proyecto, anotamos acciones que podríamos enseñar a la comunidad escolar en nuestra feria.
                </div>
                {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image="images/page_007/img_002.jpg" clasesImagen="cambio hp-40 mtp-10" className="p-0 px-1" /> */}
                {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image="images/page_007/img_001.png" className="p-0 px-1" /> */}
                {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image="images/page_007/img_001.png" className="p-0 px-1" /> */}
                {/* <ModalBook id={ "p" + pagina + "_book"+ (indexInput+=1) } image="images/page_007/revista65.svg" clasesImagen="hp-40 text-center mtp-10 " className="p-0 px-0" /> */}
              </div>
            </div>

            <div className="d-flex msp-80 mep-80 mbp-0">

              <div className="row m-0 p-2 w-100 ">
                <div className="col-md-12 col-lg-12 position-relative">
                  <div className="position-absolute top-0 start-100 translate-middle msp--70 mtp--15 visible-768"><img src="images/page_010/img_003.png" className="wp-100 " alt="" /></div>
                  <div className="position-absolute top-100 start-0 translate-middle msp-20 mtp--40 visible-768"><img src="images/page_010/img_005.png" className="wp-70 " alt="" /></div>

                  <div className="d-flex flex-column mbp-20 mtp-10 p-2 w-100 border-style-solid border-2 rounded-p-10 border-color-dark bgc-white">
                    <div className="p-2 w-100 d-flex">
                      <div className="f-pixilate-bold  fsp-18 color-pidgey msp-10 mep-0 ptp-10 text-center">1.</div>
                      <div className="f-Ubuntu-L fsp-15 msp-10 mep-10 ptp-10 text-start">Enseñar a reducir los desechos orgánicos en una compostera.</div>
                    </div>
                    <div className="p-2 w-100 d-flex">
                      <div className="f-pixilate-bold  fsp-18 color-pidgey msp-10 mep-0 ptp-10 text-center">2.</div>
                      <div className="f-Ubuntu-L fsp-15 msp-10 mep-10 ptp-10 text-start">Realizar talleres para reutilizar algunos desechos.</div>
                    </div>
                    <div className="p-2 w-100 d-flex">
                      <div className="f-pixilate-bold  fsp-18 color-pidgey msp-10 mep-10 ptp-10 text-center">3.</div>
                      <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="w-90 p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-70" />
                    </div>
                    <div className="p-2  d-flex">
                      <div className="f-pixilate-bold fsp-18 color-pidgey msp-10 mep-10 ptp-10 text-center">4.</div>
                      <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="w-90 p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-70" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="ptp-10 container-titulo-global mbp-20">
              {/* <div className={"f-Ubuntu-B fsp-20 psp-40 text-start lhp-20 "+color}>¡Tantos desechos!</div> */}
              <div className="d-flex psp-40 w-90">
                {/* <img className="hp-20 align-center mtp-20 mep-5 mb-2" src="images/page_010/g.svg" alt=""  /> */}
                {/* <div className={"f-ccdigitaldelivery-bold fsp-35 "+color}>1</div> */}
                <div className="f-Ubuntu-R fsp-15 ptp-18 psp-0 pep-10 text-start">
                  Completamos nuestras credenciales de equipo y las usamos durante el proyecto.
                </div>
                {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image="images/page_007/img_002.jpg" clasesImagen="cambio hp-40 mtp-10" className="p-0 px-1" /> */}
                {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image="images/page_007/img_001.png" className="p-0 px-1" /> */}
                {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image="images/page_007/img_001.png" className="p-0 px-1" /> */}
                <div className="wp-40 hp-40 mtp-10">
                  <ModalRecortable
                    id={"p" + pagina + "_cutouts_" + (indexInput += 1)}
                    pagina={pagina}
                    image={"images/page_" + pagina + "/img_010.png"}
                    numRecortables="1"
                    className="p-0 m-0 d-flex  pe-auto bgc-goten"
                  />
                </div>
              </div>
            </div>


            <div className="d-flex psp-90 pep-90 pbp-70 mtp-30">
              <div className="row w-100 p-0 m-0">

                <div className="col-12 position-relative">
                  <div className="position-absolute top-50 start-100 translate-middle msp-10 mtp-0"><img src="images/page_010/img_007.png" className="wp-130 " alt="" /></div>
                  <div className="f-pixilate-bold fsp-18 lh-sm text-start mbp-5">¿Cómo voy?</div>
                  <div className="d-flex flex-column mbp-20 mtp-10 w-100">
                    <div className="p-2 min-hp-80 w-100 border-style-solid border-2 rounded-p-10 border-color-white bgc-white">
                      <div className="f-Ubuntu-L fsp-15 msp-0 mep-10 text-start">
                        <img src={"images/generales/flecha_e" + etapa + ".svg"} className="mep-5 wp-15" alt="" />
                        <span>Lo mejor de trabajar en equipo fue...</span>
                      </div>
                      <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-20" />
                      <div className="f-Ubuntu-L fsp-15 msp-0 mep-10 mtp-20 text-start">
                        <img src={"images/generales/flecha_e" + etapa + ".svg"} className="mep-5 wp-15" alt="" />
                        <span>Lo que aún nos falta por mejorar...</span>
                      </div>
                      <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-35" />

                    </div>

                  </div>
                </div>
              </div>
            </div>

            {/* Begin pie de página */}
            <div className="d-flex hp-90 caja-flotante p-0 m-0 position-absolute justify-content-end align-items-end zindex-2" style={{ bottom: 70, right: 0 }}>
              <div className="f-Ubuntu-M fsp-10 position-absolute mbp-60" style={{ transform: `rotate(270deg)`, color: "black" }}>
                ABP &copy; SM
              </div>
              <div className="bgc-boros wp-50 hp-30 f-Ubuntu-M fsp-20 psp-5">{props.numeroPagina(pagina)}</div>
            </div>
            {/* End pie de página */}

          </div>
        </div>
      </div>


    </div>
  );
}

export default Page010;
