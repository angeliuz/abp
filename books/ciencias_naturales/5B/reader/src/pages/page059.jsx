import React from "react";
import InputBox from "../components/InputBox";
import "./page_059.css";

function Page059(props) {
  const pagina = "059";
  var indexInput = 0;
  const etapa = "5"
  const background = "bgc-saitama";
  const color = "color-saitama";
  const borderColor = "border-color-saitama"
  const borderColorTabla = "border-color-bobafett"
  const bgc_cajas = "bgc-bobafett";

  return (


    <div className="wrapper bgc-light">
      <div className="d-flex flex-column align-items-center pbp-20">
        <div className="page bgc-white overflow-hidden position-relative" id={"page_" + pagina}>

          {/* BEGIN CABECERA VERSIÓN 2 */}
          <div className={"cabecera-v2 d-flex flex-column " + background}>
            <div className="d-flex contenedor-cabecera-v2 ptp-40 psp-30 pep-30">
              <div className={"caja-seccion wp-160 hp-70 text-center fsp-24 f-IntroRustG-Base color-dark"}>SESIÓN 16</div>
              <div className="d-flex align-items-center fsp-24 fw-700 f-Ubuntu-M color-white">Elaboramos un afiche</div>
            </div>
            <div className="d-flex contenedor-cabecera-v2 ptp-10 psp-30 pep-30 align-self-center justify-content-between w-95">
              <div className="psp-5 pep-5 align-self-center f-colby-compres-bold fsp-17 lh-sm text-white text-center">
                Mis objetivos en <br /> esta sesión son:
              </div>
              <div className="p-0 align-self-center">
                <img src={"images/generales/flecha_sesion_e" + etapa + "_1.svg"} className="wp-40 arrow-global" alt="" />
              </div>
              <div className="psp-5 pep-5 align-self-center f-colby-compres-bold fsp-17 lh-sm text-white text-center">
                Crear un título <br /> para el afiche

              </div>
              <div className="psp-5 pep-5 align-self-center">
                <img src={"images/generales/flecha_sesion_e" + etapa + "_2.svg"} className="wp-40 arrow-global" alt="" />
              </div>
              <div className="psp-5 pep-5 align-self-center f-colby-compres-bold fsp-17 lh-sm text-white text-center">
                Establecer las  <br /> características  <br /> del afiche

              </div>
              <div className="p-0 align-self-center">
                <img src={"images/generales/flecha_sesion_e" + etapa + "_1.svg"} className="wp-40 arrow-global" alt="" />
              </div>
              <div className="psp-5 pep-5 align-self-center f-colby-compres-bold fsp-17 lh-sm text-white text-center">
                Organizar las<br />  tareas y hacer<br />  el afiche

              </div>
              <div className="psp-5 pep-5 align-self-center">
                <img src={"images/generales/flecha_sesion_e" + etapa + "_2.svg"} className="wp-40 arrow-global" alt="" />
              </div>
              <div className="psp-5 pep-5 align-self-center f-colby-compres-bold fsp-17 lh-sm text-white text-center">
                Elaborar el afiche <br /> y pegarlo en <br /> el colegio


              </div>
            </div>
          </div>
          {/* END CABECERA VERSIÓN 2 */}

          <div className="ptp-30 container-titulo-global mbp-0">
            {/* <div className={"f-Ubuntu-B fsp-20 psp-20 text-start lhp-20 " + color}>
                    xxx
                  </div> */}
            <div className="d-flex psp-20">
              {/* <img className="hp-20 align-center mt-3 me-2 mb-2" src={"images/page_"+pagina+"/img_.svg"} alt=""  /> */}
              <div className={"f-ccdigitaldelivery-bold fsp-35 " + color}>
                1
              </div>
              <div className="f-Ubuntu-R fsp-16 ptp-18 psp-10 pep-10 text-start">
                Creamos el título del afiche para promocionar el Día de la Alimentación Saludable.
              </div>
              {/* <img src={"images/page_"+pagina+"/img_001.svg"} className="wp-100" alt=""/> */}
              {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image={"images/generales/play.svg"} clasesImagen="cambio hp-40 mtp-10" className="p-0 px-1" /> */}
              {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image={"images/page_"+pagina+"/img_001.png"} className="p-0 px-1" /> */}
              {/* <ModalBook id={ "p" + pagina + "_book"+ (indexInput+=1) } image={"images/page_"+pagina+"/revista65.svg"} clasesImagen="hp-40 text-center mtp-10 " className="p-0 px-0" /> */}
            </div>
          </div>








          <div className="d-flex global-margin mtp-0 mbp-0 psp-40 pep-0 ptp-0 pbp-0">
            <div className="row p-0 m-0 w-100">
              <div className="col-12 psp-10 pep-10 ptp-0 pbp-10 m-0    border-style-solid border-1 border-color-dark rounded-p-10 bgc-bobafett  position-relative">
                <div className="position-absolute top-50 start-0 translate-middle   msp--35 mtp--15 visible-768 zindex-1"><img src={"images/page_" + pagina + "/img_002.png"} className="wp-50" alt="" /></div>
                <div className="psp-30 pep-10">
                  <div className="f-Ubuntu-R fsp-16 ptp-18 psp-0 pep-10 text-start ">El título de nuestro afiche es: </div>
                  <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-35" />
                </div>
              </div>
            </div>
          </div>




          <div className="ptp-30 container-titulo-global mbp-0">
            {/* <div className={"f-Ubuntu-B fsp-20 psp-20 text-start lhp-20 " + color}>
                    xxx
                  </div> */}
            <div className="d-flex psp-20">
              {/* <img className="hp-20 align-center mt-3 me-2 mb-2" src={"images/page_"+pagina+"/img_.svg"} alt=""  /> */}
              <div className={"f-ccdigitaldelivery-bold fsp-35 " + color}>
                2
              </div>
              <div className="f-Ubuntu-R fsp-16 ptp-18 psp-10 pep-10 text-start">
                Establecemos los criterios que vamos a utilizar para elaborar nuestro afiche.
              </div>
              {/* <img src={"images/page_"+pagina+"/img_001.svg"} className="wp-100" alt=""/> */}
              {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image={"images/generales/play.svg"} clasesImagen="cambio hp-40 mtp-10" className="p-0 px-1" /> */}
              {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image={"images/page_"+pagina+"/img_001.png"} className="p-0 px-1" /> */}
              {/* <ModalBook id={ "p" + pagina + "_book"+ (indexInput+=1) } image={"images/page_"+pagina+"/revista65.svg"} clasesImagen="hp-40 text-center mtp-10 " className="p-0 px-0" /> */}
            </div>
          </div>








          <div className="d-flex global-margin mtp-0 mbp-0 psp-30 pep-0 ptp-0 pbp-0">
            <div className="d-flex justify-content-center">

            </div>
            <div className="row p-0 m-0 w-100 f-Ubuntu-R fsp-15 ">

              <div className="col-sm-12 col-md-4 p-0 m-0 mtp-20 position-relative">
                <div className="d-flex justify-content-center">

                  <div className="psp-10 pep-10  ptp-10 mtp-20 border-style-solid border-1 border-color-dark bgc-hotaru rounded-p-5 wp-200 ">
                    <div className="d-flex justify-content-start  flex-column">
                      <div className="mbp-10 fw-700 text-start">La información es...</div>
                      <div className="d-flex   align-items-center pbp-10 ">
                        <div className="d-inline wp-30 hp-30 border-style-solid border-1 border-color-dark bgc-white">
                          <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 fsp-15 text-center flex-grow-1 lhp-30 min-hp-30" />

                        </div>
                        <div className="f-Ubuntu-L msp-10 fsp-15 lh-sm pep-5">clara y organizada.</div>
                      </div>
                      <div className="d-flex align-items-center pbp-10">
                        <div className="d-inline wp-30 hp-30 border-style-solid border-1 border-color-dark bgc-white">
                          <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 fsp-15 text-center flex-grow-1 lhp-30 min-hp-30" />
                        </div>
                        <div className="f-Ubuntu-L msp-10 fsp-15 lh-sm pep-5  text-start">concreta, directa <br />y precisa.</div>
                      </div>

                      <div className="d-flex align-items-start justify-content-start    f-Ubuntu-R fsp-15   ">
                        <div className="wp-30 hp-30 bgc-white border-style-solid border-1 border-color-dark bgc-white rounded-1">
                          <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 fsp-15 text-center wp-30 flex-grow-1 lhp-30 min-hp-35" />
                        </div>
                        <div className="f-Ubuntu-L msp-10 ptp-10 fsp-15 lh-sm pep-5 text-start     ">otro: </div>
                        <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="mtp-0 p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-80" />

                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-sm-12 col-md-4  p-0 m-0 mtp-20 position-relative">
                <div className="d-flex justify-content-center">
                  <div className="psp-10  pep-10  ptp-10 mtp-20 border-style-solid border-1 border-color-dark bgc-jarek rounded-p-5 wp-200 ">
                    <div className="d-flex justify-content-start  flex-column">
                      <div className="mbp-10 fw-700 text-start">El contenido incluye...</div>
                      <div className="d-flex   align-items-center pbp-10 ">
                        <div className="d-inline wp-30 hp-30 border-style-solid border-1 border-color-dark bgc-white">
                          <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 fsp-15 text-center flex-grow-1 lhp-30 min-hp-30" />

                        </div>
                        <div className="f-Ubuntu-L msp-10 fsp-15 lh-sm pep-5">fotografías <br />y/o dibujos. </div>
                      </div>
                      <div className="d-flex align-items-center pbp-10">
                        <div className="d-inline wp-30 hp-30 border-style-solid border-1 border-color-dark bgc-white">
                          <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 fsp-15 text-center flex-grow-1 lhp-30 min-hp-30" />
                        </div>
                        <div className="f-Ubuntu-L msp-10 fsp-15 lh-sm pep-5  text-start">tablas y/o gráficos</div>
                      </div>

                      <div className="d-flex align-items-start justify-content-start    f-Ubuntu-R fsp-15   ">
                        <div className="wp-30 hp-30 bgc-white border-style-solid border-1 border-color-dark bgc-white rounded-1">
                          <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 fsp-15 text-center wp-30 flex-grow-1 lhp-30 min-hp-35" />
                        </div>
                        <div className="f-Ubuntu-L msp-10 ptp-10 fsp-15 lh-sm pep-5 text-start     ">otro: </div>
                        <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="mtp-0 p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-80" />

                      </div>
                    </div>
                  </div>
                </div>

              </div>

              <div className="col-sm-12 col-md-4 p-0 m-0 mtp-20 position-relative">
                <div className="d-flex justify-content-center">
                  <div className="psp-10 pep-10 ptp-10 mtp-20 border-style-solid border-1 border-color-dark bgc-kai rounded-p-5  wp-200 ">
                    <div className="d-flex justify-content-start  flex-column">
                      <div className="mbp-10 fw-700 text-start">La información es...</div>
                      <div className="d-flex   align-items-center pbp-10 ">
                        <div className="d-inline wp-30 hp-30 border-style-solid border-1 border-color-dark bgc-white ">
                          <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 fsp-15 text-center flex-grow-1 lhp-30 min-hp-30" />

                        </div>
                        <div className="f-Ubuntu-L msp-10 fsp-15 lh-sm pep-5"> El diseño es...</div>
                      </div>
                      <div className="d-flex align-items-center pbp-10">
                        <div className="d-inline wp-30 hp-30 border-style-solid border-1 border-color-dark bgc-white">
                          <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 fsp-15 text-center flex-grow-1 lhp-30 min-hp-30" />
                        </div>
                        <div className="f-Ubuntu-L msp-10 fsp-15 lh-sm pep-5  text-start"> atractivo, original  <br />e interesante. </div>
                      </div>

                      <div className="d-flex align-items-start justify-content-start    f-Ubuntu-R fsp-15   ">
                        <div className="wp-30 hp-30 bgc-white border-style-solid border-1 border-color-dark bgc-white rounded-1">
                          <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 fsp-15 text-center wp-30 flex-grow-1 lhp-30 min-hp-35" />
                        </div>
                        <div className="f-Ubuntu-L msp-10 ptp-10 fsp-15 lh-sm pep-5 text-start     ">otro: </div>
                        <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="mtp-0 p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-80" />

                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>






          <div className="ptp-30 container-titulo-global mbp-0">
            {/* <div className={"f-Ubuntu-B fsp-20 psp-20 text-start lhp-20 " + color}>
                    xxx
                  </div> */}
            <div className="d-flex psp-20">
              {/* <img className="hp-20 align-center mt-3 me-2 mb-2" src={"images/page_"+pagina+"/img_.svg"} alt=""  /> */}
              <div className={"f-ccdigitaldelivery-bold fsp-35 " + color}>
                3
              </div>
              <div className="f-Ubuntu-R fsp-16 ptp-18 psp-10 pep-10 text-start">
                Organizamos las tareas para hacer el afiche.
              </div>
              {/* <img src={"images/page_"+pagina+"/img_001.svg"} className="wp-100" alt=""/> */}
              {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image={"images/generales/play.svg"} clasesImagen="cambio hp-40 mtp-10" className="p-0 px-1" /> */}
              {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image={"images/page_"+pagina+"/img_001.png"} className="p-0 px-1" /> */}
              {/* <ModalBook id={ "p" + pagina + "_book"+ (indexInput+=1) } image={"images/page_"+pagina+"/revista65.svg"} clasesImagen="hp-40 text-center mtp-10 " className="p-0 px-0" /> */}
            </div>
          </div>





          <div className="ptp-10 psp-65 pep-40 mbp-70">
            <div className="row d-flex mx-auto f-Ubuntu-B fsp-15 mbp-0 position-relative justify-content-between">
              <div className="col-sm-12 col-md-6 pbp-25 ">
                {/* <div className="position-absolute top-100 start-0 translate-middle msp-0 mtp-25 zindex-1"><img src={"images/page_" + pagina + "/posit.png"} className="wp-60 mtp--60 msp-0" alt="" /></div> */}
                {/* <div className="position-absolute top-50 start-50 translate-middle msp-0 mtp-25 visible-768 zindex-1"><img src={"images/page_" + pagina + "/espiral.svg"} className="wp-60 mtp-60" alt="" /></div> */}
                <div className="text-center w-100 border-2 border-style-solid border-color-android18 rounded-p-10">
                  <div className="rounded-set-6 hp-40 pep-20 psp-20 ptp-10 pbp-10 bgc-android18 d-flex justify-content-center align-items-center text-white p-2">Yo me encargo de...</div>
                  <div className="psp-15 pep-15"><InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-230" /></div>
                </div>
              </div>
              <div className="col-sm-12 col-md-6 pbp-25">
                <div className="text-center w-100 border-2 border-style-solid border-color-leia rounded-p-10  position-relative">
                  <div className="position-absolute top-50 start-100 translate-middle  msp-20 mtp-0 visible-768 zindex-1"><img src={"images/page_" + pagina + "/img_004.png"} className="wp-30" alt="" /></div>
                  <div className="position-absolute posicion-centro-centro translate-middle zindex-1   "><img src={"images/page_" + pagina + "/img_003.svg"} className="rotacion-centro-centro msp--30 mtp--26 wp-50" alt="" /></div>
                  <div className="rounded-set-6 hp-40 ptp-10 pbp-10 bgc-leia d-flex justify-content-center align-items-center text-white p-2">Además, ayudo a...</div>
                  <div className="psp-15 pep-15"><InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-230" /></div>
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
          <div className="row position-absolute caja-flotante2 p-0 m-0 align-items-end" style={{ bottom: 0 }}>

            <div className={etapa == 1 ? "col-7 position-relative col-sm-2 p-0 m-0" : "col-1 position-relative col-sm-2 p-0 m-0"}>
              <img src="images/rotulo_motivacion.svg" className={etapa == 1 ? "visible rotulo-etapa position-absolute top-0 start-0" : "oculto"} alt="" />
              <div className="w-100 hp-15 bgc-yamcha rounded-caja-start"></div>
              <div className="w-100 hp-25 bgc-goten"></div>
            </div>
            <div className={etapa == 2 ? "col-7 position-relative col-sm-2 p-0 m-0" : "col-1 position-relative col-sm-2 p-0 m-0"}>
              <img src="images/rotulo_planificacion.svg" className={etapa == 2 ? "visible rotulo-etapa position-absolute top-0 start-0" : "oculto"} alt="" />
              <div className="w-100 hp-15 bgc-tshinhan rounded-caja"></div>
              <div className="w-100 hp-25 bgc-bulma"></div>
            </div>
            <div className={etapa == 3 ? "col-7 position-relative col-sm-2 p-0 m-0" : "col-1 position-relative col-sm-2 p-0 m-0"}>
              <img src="images/rotulo_investigacion.svg" className={etapa == 3 ? "visible rotulo-etapa position-absolute top-0 start-0" : "oculto"} alt="" />
              <div className="w-100 hp-15 bgc-milk rounded-caja"></div>
              <div className="w-100 hp-25 bgc-android18"></div>
            </div>
            <div className={etapa == 4 ? "col-7 position-relative col-sm-2 p-0 m-0" : "col-1 position-relative col-sm-2 p-0 m-0"}>
              <img src="images/rotulo_experimentacion.svg" className={etapa == 4 ? "visible rotulo-etapa position-absolute top-0 start-0" : "oculto"} alt="" />
              <div className="w-100 hp-15 bgc-freezer rounded-caja"></div>
              <div className="w-100 hp-25 bgc-pidgey"></div>
            </div>
            <div className={etapa == 5 ? "col-7 position-relative col-sm-2 p-0 m-0" : "col-1 position-relative col-sm-2 p-0 m-0"}>
              <img src="images/rotulo_creacion.svg" className={etapa == 5 ? "visible rotulo-etapa position-absolute top-0 start-0" : "oculto"} alt="" />
              <div className="w-100 hp-15 bgc-ash rounded-caja"></div>
              <div className="w-100 hp-25 bgc-saitama"></div>
            </div>
            <div className={etapa == 6 ? "col-7 position-relative col-sm-2 p-0 m-0" : "col-1 position-relative col-sm-2 p-0 m-0"}>
              <img src="images/rotulo_difusion.svg" className={etapa == 6 ? "visible rotulo-etapa position-absolute top-0 start-0" : "oculto"} alt="" />
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

export default Page059;
