import React from "react";
import InputBox from "../components/InputBox";
import ModalVideo from "../components/ModalVideo";
import "./page_050.css";

function Page050(props) {

  const pagina = "050";
  var indexInput = 0;

  return (
    <div className="wrapper bgc-light">
      <div className="d-flex flex-column align-items-center pbp-20">
        <div className="page bgc-white overflow-hidden position-relative" id={"page_" + pagina}>
          {/* BEGIN CABECERA VERSIÓN 2 */}
          <div className="cabecera-v1 hp-80 bgc-pidgey"></div>
          {/* END CABECERA VERSIÓN 2 */}

          <div className="ptp-20 psp-20 pep-40">
            {/* <div className="f-Ubuntu-B fsp-17 color-pidgey text-start lhp-20 psp-45">Hacemos un diagnóstico de nuestra convivencia escolar</div> */}
            <div className="d-flex">
              <img className="hp-15 mtp-20 pep-10" src="images/page_050/i_g.svg" alt="" />
              <div className="f-ccdigitaldelivery-bold fsp-35 color-pidgey pep-10">3</div>
              <div className="f-Ubuntu-R fsp-14 text-start pep-10 mtp-15">Elaboramos por turnos una lista de acciones en favor de la buena convivencia en nuestro curso. Luego, llegamos a acuerdos y los anotamos.</div>
              {/* <ModalVideo id={"p" + pagina + "_video" + (indexInput += 1)} image="images/page_033/revista.png" clasesImagen="hp-35 mtp-10" /> */}
            </div>
          </div>

          <div className="ptp-10 psp-100 pep-60 mbp-0 position-relative">
            <div className="row justify-content-center">
              <div className="col-12 p-0 m-0 position-relative">
                <div className="position-absolute top-0 start-100 translate-middle"><img src="images/page_050/clip.png" className="hp-25 mep-0 mtp-45" alt="" /></div>
                <div className="position-absolute top-50 start-0 translate-middle"><img src="images/page_050/lapiz.png" className="hp-85 mep-5 mtp-45" alt="" /></div>
                <div className="position-absolute top-100 start-100 translate-middle"><img src="images/page_050/mono.png" className="hp-110 msp--50 mtp--110" alt="" /></div>
                <div className="bgc-jugador001 border-style-solid border-color-goku border-1 box-shadow-simple">
                  <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 hp-35 min-hp-260 mep-70 msp-10" />
                </div>
              </div>
            </div>
          </div>

          <div className="ptp-20 psp-65 pep-40">
            <div className="f-Ubuntu-B fsp-17 color-pidgey text-start lhp-20 psp-0">Preparamos la jornada de diálogo</div>
            <div className="d-flex">
              {/* <img className="hp-15 mtp-20 pep-10" src="images/page_047/i_g.svg" alt="" /> */}
              <div className="f-ccdigitaldelivery-bold fsp-35 color-pidgey pep-10">4</div>
              <div className="f-Ubuntu-R fsp-14 text-start pep-10 mtp-15">Leo un ejemplo de cómo será una jornada de diálogo.</div>
              <ModalVideo id={"p" + pagina + "_video" + (indexInput += 1)} image="images/page_050/revista.svg" clasesImagen="hp-30 mtp-10" />
            </div>
          </div>

          <div className="ptp-0 psp-65 pep-40">
            {/* <div className="f-Ubuntu-B fsp-17 color-pidgey text-start lhp-20 psp-0">Preparamos la jornada de diálogo</div> */}
            <div className="d-flex">
              {/* <img className="hp-15 mtp-20 pep-10" src="images/page_047/i_g.svg" alt="" /> */}
              <div className="f-ccdigitaldelivery-bold fsp-35 color-pidgey pep-10">5</div>
              <div className="f-Ubuntu-R fsp-14 text-start pep-10 mtp-15">Explico con mis palabras los momentos de la jornada y registro el rol que tendrá mi equipo en ella.</div>
              {/* <ModalVideo id={"p" + pagina + "_video" + (indexInput += 1)} image="images/page_033/revista.png" clasesImagen="hp-35 mtp-10" /> */}
            </div>
          </div>

          <div className="ptp-10 psp-100 pep-60 mbp-0 position-relative">
            <div className="row justify-content-center">
              <div className="col-6 p-0 m-0 position-relative">
                <div className="row justify-content-center p-1 m-0">
                  <div className="col-12 p-0 mbp-5 position-relative">
                    <div className="bgc-white border-style-solid border-color-goten border-2 rounded-tbe-10">
                      <div className="f-Ubuntu-R fsp-14 p-1 lh-sm d-flex align-items-center justify-content-start">Introducción</div>
                      <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea hp-35 min-hp-80 mep-10 msp-10" />
                    </div>
                  </div>
                  <div className="col-12 p-0 mbp-5 position-relative">
                    <div className="bgc-white border-style-solid border-color-bulma border-2 rounded-tbe-10">
                      <div className="f-Ubuntu-R fsp-14 p-1 lh-sm d-flex align-items-center justify-content-start">Desarrollo</div>
                      <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea hp-35 min-hp-80 mep-10 msp-10" />
                    </div>
                  </div>
                  <div className="col-12 p-0 m-0 position-relative">
                    <div className="bgc-white border-style-solid border-color-android18 border-2 rounded-tbe-10">
                      <div className="f-Ubuntu-R fsp-14 p-1 lh-sm d-flex align-items-center justify-content-start">Conclusión</div>
                      <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea hp-35 min-hp-80 mep-10 msp-10" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-6 p-0 m-0 position-relative">
                <div className="row justify-content-center p-1 m-0 h-100">
                  <div className="col-12 p-0 m-0 position-relative">
                    <div className="bgc-white border-style-solid border-color-ken border-2 rounded-tbe-10 h-100">
                      <div className="f-Ubuntu-R fsp-14 p-1 lh-sm d-flex align-items-center justify-content-start">El rol de mi equipo será:</div>
                      <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea hp-35 min-h-90 mep-10 msp-10" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <div className="d-flex psp-80 pep-100">
            <div className="row w-100 p-0 m-0">
              <div className="col-12">
                <div className="w-100 psp-40 ptp-20 pbp-20 pep-15 text-left bgc-white border-style-solid border-5 border-color-sid position-relative rounded-p-20">
                  <div className="position-absolute top-50 start-100 translate-middle"><img src="images/page_049/lupa.png" className="hp-60 mep--15 mtp-40" alt="" /></div>
                  <div className="position-absolute top-50 start-0 translate-middle h-100 ptp-10 pbp-10"><div className="espiral wp-30 h-100"></div></div>
                  <div className="f-Ubuntu-L fsp-14 text-start">
                    <span className="text-start">Querido cuarto básico:<br /></span>
                    <span className="text-start mtp-5">La convivencia no solo es una tarea de cada uno, también es un compromiso colectivo. Para llevarlo a cabo, debemos conversar entre todos acerca de la convivencia escolar y sus desafíos.<br /></span>
                    <span className="text-start mtp-5">Los invitamos a prepararse junto a sus equipos de trabajar para realizar una jornada de diálogo. Se llamará “Conversamos sobre nuestra convivencia”. Es importante que todos participen. Así conoceremos las reflexiones de cada uno sobre este tema.<br /></span>
                    <span className="text-center mtp-5">¡Prepara junto a tu equipo esta jornada de diálogo!</span>
                  </div>
                </div>
              </div>
            </div>
          </div> */}

          {/* <div className="d-flex ptp-20 psp-70 pep-50 pbp-60">
            <div className="row w-100 p-0 m-0">
              <div className="col-12">
                <div className="w-100 text-left bgc-urien border-style-solid border-3 border-color-goku position-relative rounded-p-10 ptp-20 pbp-5">
                  <div className="position-absolute top-0 start-100 translate-middle"><img src="images/page_049/mono.png" className="hp-80 msp--80 mtp--75" alt="" /></div>
                  <div className="position-absolute top-0 start-0 translate-middle"><img src="images/page_049/cartel.svg" className="hp-50 msp-90 mtp-5" alt="" /></div>
                  <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 lhp-35 min-hp-320 mep-10 msp-10" />
                </div>
              </div>
            </div>
          </div> */}

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

export default Page050;
