import React from "react";
import InputBox from "../components/InputBox";
import ModalBook from "../components/ModalBook";
import "./page_053.css";

function Page053(props) {
  const pagina = "053";
  var indexInput = 0;
  const etapa = "4"
  const background = "bgc-pidgey";
  const color = "color-pidgey";
  const borderColor = "border-color-pidgey"
  const borderColorTabla = "border-color-pantro"
  const bgc_cajas = "bgc-pantro";

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
                <img src={"images/page_" + pagina + "/arcoflecha.png"} class="hp-80 position-absolute start-0 top-0 mtp--20 msp--10"alt="" />
                <div className={"bgc-white rounded-p-10 border-style-solid border-1 " + borderColor + " w-100 py-1 psp-50 pep-20"}>
                  <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 w-60 lhp-35 min-hp-35" />
                </div>
              </div>
            </div>

            <div className="position-absolute top-0 start-100 hoja-p39 zindex-2">
              <div className="position-relative bgc-white border-style-solid border-1 border-dark wp-250 hp-200 d-flex flex-column p-2 giro--4deg sombra-1">
                <div className=" mxwp-160 centrar-hor f-pixilate-regular fsp-21">Dibuja aquí la insignia de tu equipo</div>
                <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 lhp-25 min-hp-35" />
                
                <div className="position-absolute top-100 start-0 translate-middle msp-0 mtp--20 zindex-1"><img src={"images/page_" + pagina + "/img_003.png"} className="wp-30" alt="" /></div>
              </div>
            </div>
            <div className="position-absolute top-0 start-0 translate-middle msp-90 mtp-70 zindex-1"><img src={"images/page_" + pagina + "/img_002.png"} className="wp-80" alt="" /></div>
          </div>
          <div className="espaciado-p39"></div>

          {/*<div className="position-relative w-100">
            <div className="row psp-80 pep-70 ptp-10 pbp-50">
              <div className="f-Ubuntu-R text-start msp-40 fsp-16 psp-30 pbp-10">Este dosier fue completado por:</div>
              <div className="d-flex position-relative"><img src="images/page_053/arcoflecha.png" class="hp-80 position-absolute start-0 top-0 mtp--25 msp--10" alt="" />
                <div className="bgc-white rounded-p-10 border-style-solid border-1 border-color-pidgey w-65 py-1 psp-50 pep-20">
                  <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 lhp-35 min-hp-35" />
                </div>
              </div>
            </div>
            <div className="position-absolute top-0 start-100 msp--320 mtp-0 zindex-1">
              <div className="position-relative bgc-white border-style-solid border-1 border-dark wp-250 hp-200 d-flex flex-column p-2 giro--4deg sombra-1">
                <div className="mxwp-160 centrar-hor f-pixilate-regular fsp-18">Dibuja aquí la insignia de tu equipo</div>
                <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 lhp-25 min-hp-35" />
                <div className="position-absolute top-0 start-100 translate-middle msp--15 mtp-20 zindex-1"><img src={"images/page_" + pagina + "/clip.svg"} className="hp-60" alt="" /></div>
                <div className="position-absolute top-100 start-100 translate-middle"><img src="images/page_053/estrella.png" className="hp-50 mep-0 mtp--10" alt="" /></div>
              </div>
            </div>
          </div>*/}

          <div className="ptp-10 psp-70 pep-60 mbp-80 position-relative">
            <div className="row">
              <div className="col-12 p-2 m-0 position-relative">
                <div className="position-absolute top-100 start-100 translate-middle"><img src="images/page_053/fotos.png" className="hp-70 mep-25 mtp--65" alt="" /></div>
                <div className="rounded-p-10 bgc-white border-style-solid border-color-pikachu border-1">
                  <div className="f-Ubuntu-R fsp-14 p-2 bgc-quaternary rounded-ts-be-10 lh-sm min-hp-45 d-flex align-items-center justify-content-start text-start wp-320">Analizando las fichas de nuestros  entrevistados, nos dimos cuenta de que:</div>
                  <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-290 mep-10 msp-10" />
                </div>
              </div>

              <div className="col-12 p-2 m-0 position-relative">
                <div className="position-absolute top-100 start-0 translate-middle"><img src="images/page_053/posit.png" className="hp-55 mep-0 mtp--80" alt="" /></div>
                <div className="rounded-p-10 bgc-white border-style-solid border-color-android18 border-1">
                  <div className="f-Ubuntu-R fsp-14 p-2 bgc-azuka rounded-ts-be-10 lh-sm min-hp-45 d-flex align-items-center justify-content-start text-start wp-320">Esta información nos ayuda para crear nuestro álbum de la buena convivencia porque:</div>
                  <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-290 mep-10 msp-10" />
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
          {/* FIN PIE DE PAGINA */}
        </div>
      </div>
    </div>
  );
}

export default Page053;