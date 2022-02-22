import React from "react";
import InputBox from "../components/InputBox";
import "./page_039.css";

function Page039(props) {
  const pagina = "039";
  var indexInput = 0;
  const etapa = "3";
  const background = "bgc-android18";
  const color = "color-android18";
  const borderColor = "border-color-android18";
  const borderColorTabla = "border-color-tigro";
  const bgc_cajas = "bgc-tigro";

  return (
    <div className="wrapper bgc-light">
      <div className="d-flex flex-column align-items-center pbp-20">
        <div className={"dosier-e" + etapa + " page bgc-white overflow-hidden position-relative"} id={"page_" + pagina}>
          <img src={"images/cabecera/dosier_e" + etapa + ".svg"} className="w-100" alt="" />

          <div className="position-relative w-100">
            <div className="row psp-80 pep-70 ptp-10 pbp-50 ">
              <div className="f-Ubuntu-R text-start msp-40 fsp-18 psp-30 pbp-10">
                Esta página fue completada por:
              </div>
              <div className="d-flex position-relative">
                <img
                  src={"images/page_" + pagina + "/.svg"}
                  class="hp-110 position-absolute start-0 top-0 mtp--20 msp--10"
                  alt=""
                />
                <div className="bgc-white rounded-p-10 border-style-solid border-1 border-color-android18 w-100 py-1 psp-50 pep-20">
                  <InputBox
                    id={"p" + pagina + "_input" + (indexInput += 1)}
                    className="p-0 px-1 text-start flex-grow-1 w-60 lhp-35 min-hp-35"
                  />
                </div>
              </div>
            </div>

            <div className="position-absolute top-0 start-100 hoja-p39 zindex-2">
              <div className="position-relative bgc-white border-style-solid border-1 border-dark wp-250 hp-200 d-flex flex-column p-2 giro--4deg sombra-1">
                <div className=" mxwp-160 centrar-hor f-pixilate-regular fsp-21">Dibuja aquí la insignia de tu equipo</div>
                <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 lhp-25 min-hp-35" />
                <div className="position-absolute top-0 start-100 translate-middle msp--30 mtp-35 zindex-1"><img src={"images/page_" + pagina + "/clip.svg"} className="wp-60" alt="" /></div>
              </div>
            </div>
            <div className="position-absolute top-0 start-0 translate-middle msp-90 mtp-70 zindex-1"><img src={"images/page_" + pagina + "/img_002.png"} className="wp-60" alt="" /></div>
          </div>

          <div className="espaciado-p39"></div>

          <div className="psp-70 pep-70 ptp-40 position-relative">
            <div className="position-absolute top-0 start-0 msp-65 mtp--10 zindex-1">
              <div className="bgc-trunks col-8 rounded-p-20 psp-20">
                <div className="p-2 f-Ubuntu-R text-start">Acordamos que una buena convivencia escolar es importante porque:</div>
              </div>
            </div>

            <div className="border-style-solid border-1 border-color-dark bgc-white mtp--45 rounded-p-20 pbp-20 px-3">
              <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea mtp-60 lhp-35 min-hp-180" />
            </div>
            <div className="position-absolute top-0 start-100 translate-middle msp--70 mtp-20 zindex-2"><img src={"images/page_" + pagina + "/img_003.png"} className="wp-60" alt="" /></div>
          </div>

          <div className="ptp-30"></div>

          <div className="psp-70 pep-70 ptp-40 position-relative">
            <div className="position-absolute top-0 start-0 msp-65 mtp--10 zindex-1">
              <div className="bgc-tigro rounded-p-20 psp-20 pep-10">
                <div className="p-2 f-Ubuntu-R text-start">En esta etapa hemos realizado:</div>
              </div>
            </div>

            <div className="border-style-solid border-1 border-color-dark bgc-white mtp--45 rounded-p-20 pbp-20 px-3">
              <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea mtp-35 lhp-35 min-hp-180" />
            </div>
            <div className="position-absolute top-0 start-100 translate-middle msp--80 mtp-0 zindex-1"><img src={"images/page_" + pagina + "/img_004.png"} className="wp-60" alt="" /></div>
            <div className="position-absolute top-100 start-0 translate-middle msp-60 mtp--40 zindex-1"><img src={"images/page_" + pagina + "/img_005.png"} className="wp-60" alt="" /></div>
          </div>

          <div className="ptp-30"></div>

          <div className="psp-70 pep-70 ptp-40 position-relative">
            <div className="position-absolute top-0 start-0 msp-65 mtp--10 zindex-1 w-100">
              <div className="bgc-bobafett col-8 rounded-p-20 psp-20 pep-10">
                <div className="p-2 f-Ubuntu-R text-start"> La investigación que realizamos nos ayudará en el desafío para:</div>
              </div>
            </div>

            <div className="border-style-solid border-1 border-color-dark bgc-white mtp--45 rounded-p-20 pbp-20 px-3">
              <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea mtp-35 lhp-35 min-hp-180" />
            </div>
            <div className="position-absolute top-100 start-100 translate-middle msp--80 mtp--10 zindex-1"><img src={"images/page_" + pagina + "/img_006.png"} className="wp-100" alt="" /></div>
          </div>

          <div className="pbp-50"></div>

          {/* BEGIN PIE DE PAGINA */}
          <div className="d-flex hp-90 caja-flotante p-0 m-0 position-absolute justify-content-end align-items-end zindex-2" style={{ bottom: 70, right: 0 }}>
            <div className="f-Ubuntu-M fsp-10 position-absolute mbp-60" style={{ transform: `rotate(270deg)`, color: "dark" }}>
              ABP &copy; SM
            </div>
            <div className="bgc-boros wp-50 hp-30 f-Ubuntu-M fsp-20 psp-5">{props.numeroPagina(pagina)}</div>
          </div>
          {/* FIN PIE DE PAGINA */}
        </div >
      </div>
    </div >

  );
}

export default Page039;
