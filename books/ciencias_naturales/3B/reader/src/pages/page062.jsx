import React from "react";
import InputBox from "../components/InputBox";
import ModalBook from "../components/ModalBook";
import ModalRecortable from "../components/ModalRecortable";

import "./page_062.css";

function Page062(props) {

  const pagina = "062";
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
        <div className={"dosier-e" + etapa + " page bgc-white overflow-hidden position-relative"} id={"page_" + pagina}>


          <div className="d-flex global-margin mtp-100 mbp-0 psp-0 pep-0 ptp-0 pbp-0">
            <div className="row p-0 m-0 w-100 f-Ubuntu-R fsp-15">
              <div className="col-12 p-0 m-0 position-relative text-start">
                Si hacemos un nuevo proyecto:
              </div>
              <div className="col-12 p-0 m-0 position-relative">
                <div className="position-absolute top-0 start-100 translate-middle msp-0 mtp-0  zindex-1"><img src={"images/page_" + pagina + "/img_001.png"} className="wp-60" alt="" /></div>
                <div className="border-style-solid border-2 border-color-dark rounded-p-10 mtp-10">
                  <div className="d-flex flex-column bgc-white rounded-p-10">
                    <div className="bgc-guile w-100 f-Ubuntu-B text-start fsp-15 rounded-set-10 psp-10 pep-10 ptp-5 pbp-5">
                      No podemos olvidar que es importante...
                    </div>
                    <div className="psp-10 pep-10">
                      <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea  lhp-35 min-hp-190" />
                    </div>
                  </div>
                </div>

              </div>
              <div className="col-6 p-0 m-0 position-relative">
                <div className="position-absolute top-100 start-0 translate-middle msp-0 mtp-0  zindex-1"><img src={"images/page_" + pagina + "/img_003.png"} className="wp-40" alt="" /></div>
                <div className="border-style-solid border-2 border-color-dark rounded-p-10 mtp-10 mep-10">
                  <div className="d-flex flex-column bgc-white rounded-p-10">
                    <div className="bgc-pantro w-100 f-Ubuntu-B text-start fsp-15 rounded-set-10 psp-10 pep-10 ptp-5 pbp-5">
                      Haríamos igual....
                    </div>
                    <div className="psp-10 pep-10">
                      <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea  lhp-35 min-hp-190" />
                    </div>
                  </div>
                </div>


              </div>
              <div className="col-6 p-0 m-0 position-relative">
                <div className="position-absolute top-0 start-100 translate-middle msp-0 mtp-0  zindex-1"><img src={"images/page_" + pagina + "/img_002.png"} className="wp-40" alt="" /></div>
                <div className="border-style-solid border-2 border-color-dark rounded-p-10 mtp-10 msp-10">
                  <div className="d-flex flex-column bgc-white rounded-p-10">
                    <div className="bgc-buzz w-100 f-Ubuntu-B text-start fsp-15 rounded-set-10 psp-10 pep-10 ptp-5 pbp-5">
                      Modificaríamos....
                    </div>
                    <div className="psp-10 pep-10">
                      <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea  lhp-35 min-hp-190" />
                    </div>
                  </div>
                </div>


              </div>
            </div>
          </div>

          <div className="ptp-20 container-titulo-global mbp-0">
            {/* <div className={"f-Ubuntu-B fsp-20 psp-20 text-start lhp-20 " + color}>
              xxx
            </div> */}
            <div className="d-flex psp-0">
              {/* <img className="hp-20 align-center mt-3 me-2 mb-2" src={"images/page_"+pagina+"/img_.svg"} alt=""  /> */}
              {/* <div className={"f-ccdigitaldelivery-bold fsp-35 " + color}>
                X
              </div> */}
              <div className="f-Ubuntu-R fsp-16 ptp-18 psp-10 pep-10 text-start">
                Confeccionamos y nos premiamos con la medalla de Héroes del medioambiente.
              </div>
              {/* <img src={"images/page_"+pagina+"/img_00.svg"} className="wp-100" alt=""/> */}
              {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image={"images/generales/play.svg"} clasesImagen="cambio hp-40 mtp-10" className="p-0 px-1" /> */}
              {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image={"images/page_"+pagina+"/img_001.png"} className="p-0 px-1" /> */}
              <div className="wp-40 hp-40 mtp-10">
                  <ModalRecortable
                    id={"p" + pagina + "_cutouts_" + (indexInput += 1)}
                    pagina={pagina}
                    image={"images/page_" + pagina + "/img_006.svg"}
                    numRecortables="1"
                    className="p-0 m-0 d-flex pe-auto"
                  />
                    </div>
          </div>

          <div className="d-flex  mtp-20 mbp-0 psp-0 pep-0 ptp-0 pbp-0">
            <div className="row p-0 m-0 w-100">
              <div className="col-12 p-0 m-0 position-relative">

                <img src={"images/page_" + pagina + "/img_005.png"} className="w-100 max-wp-500" alt="" />
              </div>
            </div>
          </div>


          {/* BEIGN PIE DE PAGINA */}
          <div className="d-flex hp-90 caja-flotante p-0 m-0 position-absolute justify-content-end align-items-end zindex-2" style={{ bottom: 70, right: 0 }}>
            <div className="f-Ubuntu-M fsp-10 position-absolute mbp-60" style={{ transform: `rotate(270deg)`, color: "dark" }}>ABP &copy; SM</div>
            <div className="bgc-goku wp-50 hp-30 f-Ubuntu-M fsp-20 psp-5">{props.numeroPagina(pagina)}</div>
          </div>
          {/* END PIE DE PAGINA */}
        </div>
      </div>
    </div>
    </div>
  );
}

export default Page062;
