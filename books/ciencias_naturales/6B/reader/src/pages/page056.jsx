import React from "react";
import InputBox from "../components/InputBox";
import ModalVideo from "../components/ModalVideo";
import ModalBook from "../components/ModalBook";
import "./page_056.css";

function Page056(props) {

  const pagina = "056";
  var indexInput = 0;
  const etapa = "4"
  const background = "bgc-pidgey";
  const color = "color-pidgey";
  const borderColor = "border-color-android18"
  const bgc_cajas = "bgc-goku";
  const borderColorTabla = "border-color-azuka"

  return (
    < div className="wrapper bgc-light" >
      <div className="d-flex flex-column align-items-center pbp-20">
        <div className={"dosier-e" + etapa + " page bgc-white overflow-hidden position-relative"} id={"page_" + pagina}>

          <div className="psp-60 pep-40 ptp-60">
            <div className="row w-100">

              <div className="col-md-6 position-relative pbp-40">
                <div className="bgc-white border-style-solid border-1 p-3 rounded-p-5">
                  <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-290" />
                </div>
                <div className="position-absolute top-0 start-50 translate-middle msp-0 mtp-0">
                  <div className="bgc-bulma rounded-p-20 py-2 f-Ubuntu-M color-white psp-30 pep-30 mnwp-230">Lo más difícil ha sido</div>
                </div>
                <div className="position-absolute top-0 start-0 translate-middle msp-20 mtp-0 zindex-1"><img src={"images/page_" + pagina + "/img_001.png"} className="wp-70" alt="" /></div>
              </div>

              <div className="col-md-6 position-relative pbp-40">
                <div className="bgc-white border-style-solid border-1 p-3 rounded-p-5">
                  <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-290" />
                </div>
                <div className="position-absolute top-0 start-50 translate-middle msp-0 mtp-0">
                  <div className="bgc-android18 rounded-p-20 py-2 f-Ubuntu-M color-white psp-30 pep-30 mnwp-230">Lo más fácil ha sido</div>
                </div>
                <div className="position-absolute top-0 start-0 translate-middle msp-20 mtp-0 zindex-1"><img src={"images/page_" + pagina + "/img_001.png"} className="wp-70" alt="" /></div>
              </div>

              <div className="col-12 position-relative">
                <div className="bgc-white border-style-solid border-1 p-3 rounded-p-5">
                  <div className="text-start">Incluiremos el video del prototipo en...</div>
                  <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-110" />
                  <div className="text-start ptp-20">Para...</div>
                  <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-110" />
                </div>
                <div className="position-absolute top-50 start-100 translate-middle msp-0 mtp-0 zindex-1"><img src={"images/page_" + pagina + "/img_002.png"} className="wp-80" alt="" /></div>
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
    </div >
  );
}

export default Page056;
