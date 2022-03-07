import React from "react";
import InputBox from "../components/InputBox";
import ModalVideo from "../components/ModalVideo";
import "./page_044.css";

function Page044(props) {

  const pagina = "044";
  var indexInput = 0;

  return (
    <div className="wrapper bgc-light">
      <div className="d-flex flex-column align-items-center pbp-20">
        <div className="page bgc-white overflow-hidden position-relative" id={"page_" + pagina}>
          {/* BEGIN CABECERA VERSIÓN 2 */}
          <div className="cabecera-v1 hp-80 bgc-pidgey"></div>
          {/* END CABECERA VERSIÓN 2 */}

          <div className="ptp-10 psp-60 pep-60 mbp-0">
            <div className="d-flex">
              <div className="f-ccdigitaldelivery-bold fsp-35 color-pidgey">3</div>
              <div className="f-Ubuntu-R fsp-14 ptp-18 psp-10 text-start">Leo cómo analizar información a partir de una ficha. Luego, marco con<img src="images/page_044/ticket.svg" className="hp-20 psp-5 pep-5 mtp--5" alt="" />sobre los pasos que entiendo.</div>
              <ModalVideo id={"p" + pagina + "_video" + (indexInput += 1)} image="images/page_044/revista.svg" clasesImagen="hp-35 mtp-10 psp-10" />
            </div>
          </div>

          <div className="ptp-10 psp-90 pep-40">
            <div className="col-12 position-relative rota">
              <div className="position-absolute top-0 end-0 zindex-2"><img src="images/page_044/pincho.svg" className="wp-30 mep-10 mtp--20" alt="" /></div>
              <div className="bloque-respuesta w-100 p-3 text-left bgc-draco">
                <div className="d-flex align-items-center pbp-10">
                  <div className="pep-10"><div className="cuadro-clic"> <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 flex-grow-1 contenedor-linea lhp-30 min-hp-30" /></div></div>
                  <div className="f-Ubuntu-L fsp-14 lh-sm pep-5 text-start">Leer todas las fichas de forma general.</div>
                </div>
                <div className="d-flex align-items-center pbp-10">
                  <div className="pep-10"><div className="cuadro-clic"> <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 flex-grow-1 contenedor-linea lhp-30 min-hp-30" /></div></div>
                  <div className="f-Ubuntu-L fsp-14 lh-sm pep-5 text-start">Clasificar la información de cada ficha por categorías.</div>
                </div>
                <div className="d-flex align-items-center pbp-10">
                  <div className="pep-10"><div className="cuadro-clic"> <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 flex-grow-1 contenedor-linea lhp-30 min-hp-30" /></div></div>
                  <div className="f-Ubuntu-L fsp-14 lh-sm pep-5 text-start">Encontrar semejanzas y diferencias de las fichas entre sí.</div>
                </div>
                <div className="d-flex align-items-center pbp-10">
                  <div className="pep-10"><div className="cuadro-clic"> <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 flex-grow-1 contenedor-linea lhp-30 min-hp-30" /></div></div>
                  <div className="f-Ubuntu-L fsp-14 lh-sm pep-5 text-start">Elaborar una conclusión general.</div>
                </div>
              </div>
            </div>
          </div>

          <div className="ptp-10 psp-60 mbp-0">
            <div className="d-flex">
              <div className="f-ccdigitaldelivery-bold fsp-35 color-pidgey">4</div>
              <div className="f-Ubuntu-R fsp-14 ptp-18 psp-10 text-start">Leemos las fichas que realizamos y analizamos la información completando:</div>
            </div>
          </div>

          <div className="ptp-10 psp-100 pep-60 mbp-0">
            <div className=" mbp-10 position-relative max-wp-700">
              <div className="position-absolute top-0 start-100 translate-middle visible-768"><img src="images/page_044/tablet.png" className="wp-90 mep-40 mtp--60" alt="" /></div>
              <div className="d-flex border-style-solid border-color-ken border-3 p-0 m-0">
                <div className="w-30 bgc-kai p-3 border-right-style-solid border-color-ken border-3 d-flex align-items-center f-Ubuntu-L fsp-14 text-start">A partir de las entrevistas y las fichas, nuestros entrevistados se parecen en…</div>
                <div className="w-70">
                  <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 lhp-35 min-hp-150 mep-10 msp-10 contenedor-linea" />
                </div>
              </div>
            </div>
            <div className="mbp-10 position-relative max-wp-700">
              <div className="d-flex border-style-solid border-color-android18 border-3 p-0 m-0">
                <div className="w-30 bgc-azuka p-3 border-right-style-solid border-color-android18 border-3 d-flex align-items-center f-Ubuntu-L fsp-14 text-start">Nuestros entrevistados tienen diferencias en…</div>
                <div className="w-70">
                  <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 lhp-35 min-hp-150 mep-10 msp-10 contenedor-linea" />
                </div>
              </div>
            </div>
            <div className="mbp-10 position-relative max-wp-700">
              <div className="d-flex border-style-solid border-color-goten border-3 p-0 m-0">
                <div className="w-30 bgc-genos p-3 border-right-style-solid border-color-goten border-3 d-flex align-items-center f-Ubuntu-L fsp-14 text-start">Para ellos, es importante la buena convivencia porque…</div>
                <div className="w-70">
                  <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 lhp-35 min-hp-150 mep-10 msp-10 contenedor-linea" />
                </div>
              </div>
            </div>
          </div>

          <div className="ptp-10 psp-60 pep-50 mbp-60 position-relative">
            <div className="position-absolute top-0 start-100 translate-middle visible-768"><img src="images/page_044/mono.png" className="wp-140 msp--180 mtp--55" alt="" /></div>
            <div className="d-flex">
              <div className="f-ccdigitaldelivery-bold fsp-35 color-pidgey">5</div>
              <div className="f-Ubuntu-R fsp-14 ptp-18 psp-10 text-start">Conversamos: ¿Qué conclusiones podemos sacar a partir de las fichas?</div>
            </div>
          </div>

          <div className="d-flex hp-90 caja-flotante p-0 m-0 position-absolute justify-content-end align-items-end zindex-2" style={{ bottom: 70, right: 0 }}>
            <div className="f-Ubuntu-M fsp-10 position-absolute mbp-60" style={{ transform: `rotate(270deg)`, color: "dark" }}>ABP &copy; SM</div>
            <div className="bgc-goku wp-50 hp-30 f-Ubuntu-M fsp-20 psp-5">{props.numeroPagina(pagina)}</div>
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
            <div className="col-1 col-sm-2 p-0 m-0 position-relative">
              <img src="images/rotulo_investigacion.svg" className="oculto" alt="" />
              <div className="w-100 hp-15 bgc-milk rounded-caja"></div>
              <div className="w-100 hp-25 bgc-android18"></div>
            </div>
            <div className="col-7 col-sm-2 p-0 m-0 position-relative">
              <img src="images/rotulo_experimentacion.svg" className="visible rotulo-etapa position-absolute top-0 start-0" alt="" />
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
  );
}

export default Page044;
