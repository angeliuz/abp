import React from "react";
import InputBox from "../components/InputBox";
import ModalVideo from "../components/ModalVideo";
import Check from "../components/Check";
import TerminosPareados1 from "../components/TerminosPareados1";
import "./page_044.css";

function Page044(props) {

  const pagina = "044";
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
        <div className="page bgc-white overflow-hidden position-relative" id={"page_" + pagina}>

          {/* BEGIN CABECERA VERSIÓN 2 */}
          <div className="cabecera-v1 hp-80 bgc-pidgey"></div>
          {/* END CABECERA VERSIÓN 2 */}

          <div className="ptp-10 container-titulo-global mbp-0">
            {/* <div className={"f-Ubuntu-B fsp-20 psp-20 text-start lhp-20 " + color}>xxx</div> */}
            <div className="d-flex psp-20">
              {/* <img className="hp-15 align-center mtp-20 me-2 mb-2" src={"images/page_"+pagina+"/img_.svg"} alt=""  /> */}
              <div className={"f-ccdigitaldelivery-bold fsp-35 " + color}>3</div>
              <div className="f-Ubuntu-R fsp-16 ptp-18 psp-10 pep-10 text-start">Relaciono cada concepto con la característica que debería tener el aparato o sistema.</div>
              {/* <img src={"images/page_"+pagina+"/img_001.svg"} className="wp-100" alt=""/> */}
              {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image={"images/generales/play.svg"} clasesImagen="cambio hp-40 mtp-10" className="p-0 px-1" /> */}
              {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image={"images/page_"+pagina+"/img_001.png"} className="p-0 px-1" /> */}
              {/* <ModalBook id={"p" + pagina + "_book" + (indexInput += 1)} image={"images/page_" + pagina + "/revista.svg"} clasesImagen="hp-35 text-center mtp-10 " className="p-0 px-0" /> */}
            </div>
          </div>

          {/* <div className="d-flex w-100 mtp-0 mbp-0 psp-0 pep-0 ptp-0 pbp-0 position-absolute zindex-10">
            <div className="row p-0 m-0 w-100">
              <div className="col-12 p-0 m-0 position-relative">

                <TerminosPareados1
                  id={"svg_" + indexInput + "_" + pagina}
                  anchoSVG="580"
                  altoSVG="255"
                  totalLineas="5"
                  pointsLinea1="0,43 0,43"
                  pointsLinea2="65,43 65,43"
                  pointsLinea3="189,43 189,43"
                  pointsLinea4="314,43 314,43"
                  pointsLinea5="438,43 438,43"
                />

              </div>
            </div>
          </div> */}

          {/* <div className="d-flex global-margin mtp-0 mbp-10 psp-50 pep-0 ptp-0 pbp-0">
            <div className="row p-0 m-0 w-100">
              <div className="col-sm-3 col-md-12 p-0 m-0 position-relative d-flex center-center">
                <div className="row f-Ubuntu-R justify-content-center f-Ubuntu-R fsp-14 lh-sm p-0 m-0 w-100">

                  <div className="col-md-2 col-sm-12 bgc-kokomi p-2 rounded-p-10 border-style-solid border-color-dark border-1 position-relative m-2">
                    <p className="p-0 m-0 color-pikachu">Seguro</p>
                    <div className="cambio position-absolute translate-middle wp-15 hp-15 rounded-50 border-style-solid border-color-dark border-1 bgc-white"></div>
                  </div>
                  <div className="col-md-2 col-sm-12 bgc-azuka p-2 rounded-p-10 border-style-solid border-color-dark border-1 position-relative m-2">
                    <p className="p-0 m-0 color-android18">Funcional</p>
                    <div className="cambio position-absolute translate-middle wp-15 hp-15 rounded-50 border-style-solid border-color-dark border-1 bgc-white"></div>
                  </div>
                  <div className="col-md-2 col-sm-12 bgc-sid p-2 rounded-p-10 border-style-solid border-color-dark border-1 position-relative m-2">
                    <p className="p-0 m-0 color-pidgey">Creativo</p>
                    <div className="cambio position-absolute translate-middle wp-15 hp-15 rounded-50 border-style-solid border-color-dark border-1 bgc-white"></div>
                  </div>
                  <div className="col-md-2 col-sm-12 bgc-genos p-2 rounded-p-10 border-style-solid border-color-dark border-1 position-relative m-2">
                    <p className="p-0 m-0 color-goten">Realista</p>
                    <div className="cambio position-absolute translate-middle wp-15 hp-15 rounded-50 border-style-solid border-color-dark border-1 bgc-white"></div>
                  </div>
                  <div className="col-md-2 col-sm-12 bgc-piccolo p-2 rounded-p-10 border-style-solid border-color-dark border-1 position-relative m-2">
                    <p className="p-0 m-0 color-bulma">Sostenible</p>
                    <div className="cambio position-absolute translate-middle wp-15 hp-15 rounded-50 border-style-solid border-color-dark border-1 bgc-white"></div>
                  </div>

                </div>
              </div>
              <div className="col-sm-5 col-md-12 p-0 m-0 position-relative hp-100"></div>
              <div className="col-sm-4 col-md-12 p-0 m-0 position-relative">
                <div className="row f-Ubuntu-R justify-content-center align-items-top f-Ubuntu-R fsp-13 lh-sm h-100">

                  <div className="col-md-2 col-sm-12 bgc-pantro p-2 rounded-p-10 border-style-solid border-color-dark border-1 position-relative m-1 d-flex align-items-center">
                    <p className="p-0 m-0">Tiene que adecuarse a nuestras necesidades.</p>
                    <div className="cambio1 position-absolute translate-middle wp-15 hp-15 rounded-50 border-style-solid border-color-dark border-1 bgc-white"></div>
                  </div>
                  <div className="col-md-2 col-sm-12 bgc-pantro p-2 rounded-p-10 border-style-solid border-color-dark border-1 position-relative m-1 d-flex align-items-center">
                    <p className="p-0 m-0">Debe ser respetuoso con el medioambiente.</p>
                    <div className="cambio1 position-absolute translate-middle wp-15 hp-15 rounded-50 border-style-solid border-color-dark border-1 bgc-white"></div>
                  </div>
                  <div className="col-md-2 col-sm-12 bgc-pantro p-2 rounded-p-10 border-style-solid border-color-dark border-1 position-relative m-1 d-flex align-items-center">
                    <p className="p-0 m-0">Tiene que ayudarnos a aprovechar la energía y ser fácil de usar.</p>
                    <div className="cambio1 position-absolute translate-middle wp-15 hp-15 rounded-50 border-style-solid border-color-dark border-1 bgc-white"></div>
                  </div>
                  <div className="col-md-2 col-sm-12 bgc-pantro p-2 rounded-p-10 border-style-solid border-color-dark border-1 position-relative m-1 d-flex align-items-center">
                    <p className="p-0 m-0">Su uso no debe presentar ningún peligro para los usuarios.</p>
                    <div className="cambio1 position-absolute translate-middle wp-15 hp-15 rounded-50 border-style-solid border-color-dark border-1 bgc-white"></div>
                  </div>
                  <div className="col-md-2 col-sm-12 bgc-pantro p-2 rounded-p-10 border-style-solid border-color-dark border-1 position-relative m-1 d-flex align-items-center">
                    <p className="p-0 m-0">Se debe poder construir con los recursos que tenemos.</p>
                    <div className="cambio1 position-absolute translate-middle wp-15 hp-15 rounded-50 border-style-solid border-color-dark border-1 bgc-white"></div>
                  </div>

                </div>
              </div>
            </div>
          </div> */}

          <div className="d-flex w-100 mtp-0 mbp-0 psp-0 pep-0 ptp-0 pbp-0 position-absolute zindex-10">
            <div className="row p-0 m-0 w-100">
              <div className="col-12 p-0 m-0 position-relative">

                <TerminosPareados1
                  id={"svg_" + indexInput + "_" + pagina}
                  anchoSVG="500"
                  altoSVG="330"
                  totalLineas="5"
                  pointsLinea1="124,60 124,60"
                  pointsLinea2="124,111 124,111"
                  pointsLinea3="124,163 124,163"
                  pointsLinea4="124,214 124,214"
                  pointsLinea5="124,266 124,266"
                />

              </div>
            </div>
          </div>

          <div className="d-flex center-center mtp-0 mbp-10 psp-0 pep-0 ptp-0 pbp-0">
            <div className="row p-0 m-0 wp-500">
              <div className="col-3 p-0 m-0 position-relative d-flex center-center">
                <div className="row f-Ubuntu-R justify-content-center f-Ubuntu-R fsp-14 lh-sm p-0 m-0 w-100">

                  <div className="col-12 bgc-kokomi p-2 rounded-p-10 border-style-solid border-color-dark border-1 position-relative m-2">
                    <p className="p-0 m-0 color-pikachu">Seguro</p>
                    <div className="position-absolute translate-middle start-100 top-50 wp-20 hp-20 rounded-50 border-style-solid border-color-dark border-1 bgc-white"></div>
                  </div>
                  <div className="col-12 bgc-azuka p-2 rounded-p-10 border-style-solid border-color-dark border-1 position-relative m-2">
                    <p className="p-0 m-0 color-android18">Funcional</p>
                    <div className="position-absolute translate-middle start-100 top-50 wp-20 hp-20 rounded-50 border-style-solid border-color-dark border-1 bgc-white"></div>
                  </div>
                  <div className="col-12 bgc-sid p-2 rounded-p-10 border-style-solid border-color-dark border-1 position-relative m-2">
                    <p className="p-0 m-0 color-pidgey">Creativo</p>
                    <div className="position-absolute translate-middle start-100 top-50 wp-20 hp-20 rounded-50 border-style-solid border-color-dark border-1 bgc-white"></div>
                  </div>
                  <div className="col-12 bgc-genos p-2 rounded-p-10 border-style-solid border-color-dark border-1 position-relative m-2">
                    <p className="p-0 m-0 color-goten">Realista</p>
                    <div className="position-absolute translate-middle start-100 top-50 wp-20 hp-20 rounded-50 border-style-solid border-color-dark border-1 bgc-white"></div>
                  </div>
                  <div className="col-12 bgc-piccolo p-2 rounded-p-10 border-style-solid border-color-dark border-1 position-relative m-2">
                    <p className="p-0 m-0 color-bulma">Sostenible</p>
                    <div className="position-absolute translate-middle start-100 top-50 wp-20 hp-20 rounded-50 border-style-solid border-color-dark border-1 bgc-white"></div>
                  </div>

                </div>
              </div>
              <div className="col-5 p-0 m-0 position-relative hp-100"></div>
              <div className="col-4 p-0 m-0 position-relative">
                <div className="row f-Ubuntu-R justify-content-center align-items-top f-Ubuntu-R fsp-13 lh-sm h-100">

                  <div className="col-12 bgc-pantro p-2 rounded-p-10 border-style-solid border-color-dark border-1 position-relative m-1 d-flex align-items-center">
                    <p className="p-0 m-0">Tiene que adecuarse a nuestras necesidades.</p>
                    <div className="position-absolute translate-middle start-0 top-50 wp-20 hp-20 rounded-50 border-style-solid border-color-dark border-1 bgc-white"></div>
                  </div>
                  <div className="col-12 bgc-pantro p-2 rounded-p-10 border-style-solid border-color-dark border-1 position-relative m-1 d-flex align-items-center">
                    <p className="p-0 m-0">Debe ser respetuoso con el medioambiente.</p>
                    <div className="position-absolute translate-middle start-0 top-50 wp-20 hp-20 rounded-50 border-style-solid border-color-dark border-1 bgc-white"></div>
                  </div>
                  <div className="col-12 bgc-pantro p-2 rounded-p-10 border-style-solid border-color-dark border-1 position-relative m-1 d-flex align-items-center">
                    <p className="p-0 m-0">Tiene que ayudarnos a aprovechar la energía y ser fácil de usar.</p>
                    <div className="position-absolute translate-middle start-0 top-50 wp-20 hp-20 rounded-50 border-style-solid border-color-dark border-1 bgc-white"></div>
                  </div>
                  <div className="col-12 bgc-pantro p-2 rounded-p-10 border-style-solid border-color-dark border-1 position-relative m-1 d-flex align-items-center">
                    <p className="p-0 m-0">Su uso no debe presentar ningún peligro para los usuarios.</p>
                    <div className="position-absolute translate-middle start-0 top-50 wp-20 hp-20 rounded-50 border-style-solid border-color-dark border-1 bgc-white"></div>
                  </div>
                  <div className="col-12 bgc-pantro p-2 rounded-p-10 border-style-solid border-color-dark border-1 position-relative m-1 d-flex align-items-center">
                    <p className="p-0 m-0">Se debe poder construir con los recursos que tenemos.</p>
                    <div className="position-absolute translate-middle start-0 top-50 wp-20 hp-20 rounded-50 border-style-solid border-color-dark border-1 bgc-white"></div>
                  </div>

                </div>
              </div>
            </div>
          </div>

          <div className="ptp-10 container-titulo-global-1 mbp-0">
            {/* <div className={"f-Ubuntu-B fsp-20 psp-20 text-start lhp-20 " + color}>xxx</div> */}
            <div className="d-flex psp-0">
              <img className="hp-15 align-center mtp-20 me-2 mb-2" src={"images/page_" + pagina + "/g.svg"} alt="" />
              <div className={"f-ccdigitaldelivery-bold fsp-35 " + color}>4</div>
              <div className="f-Ubuntu-R fsp-16 ptp-18 psp-10 pep-10 text-start">Decidimos lo que vamos a construir.</div>
              {/* <img src={"images/page_"+pagina+"/img_001.svg"} className="wp-100" alt=""/> */}
              {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image={"images/generales/play.svg"} clasesImagen="cambio hp-40 mtp-10" className="p-0 px-1" /> */}
              {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image={"images/page_"+pagina+"/img_001.png"} className="p-0 px-1" /> */}
              {/* <ModalBook id={"p" + pagina + "_book" + (indexInput += 1)} image={"images/page_" + pagina + "/revista.svg"} clasesImagen="hp-35 text-center mtp-10 " className="p-0 px-0" /> */}
            </div>
          </div>

          <div className="d-flex global-margin mtp-0 mbp-150 psp-50 pep-0 ptp-0 pbp-0">
            <div className="row p-0 m-0 w-100">
              <div className="col-sm-12 col-md-6 p-1 m-0 position-relative">
                <div className="bgc-android18 rounded-p-10 p-2">
                  <p className="text-white f-Ubuntu-M fsp-16 lh-sm min-hp-50 m-0 pb-2 d-flex justify-content-center align-items-center">La propuesta de cada integrante es…</p>
                  <div className="bgc-white rounded-p-10 p-2"><InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 text-start flex-grow-1 lhp-35 min-hp-175 contenedor-linea" /></div>
                </div>
              </div>
              <div className="col-sm-12 col-md-6 p-1 m-0 position-relative">
                <div className="bgc-bulma rounded-p-10 p-2">
                  <p className="text-white f-Ubuntu-M fsp-16 lh-sm min-hp-50 m-0 pb-2 d-flex justify-content-center align-items-center">Las características que cumple cada propuesta son…</p>
                  <div className="bgc-white rounded-p-10 p-2"><InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 text-start flex-grow-1 lhp-35 min-hp-175 contenedor-linea" /></div>
                </div>
              </div>
              <div className="col-sm-12 col-md-6 p-1 m-0 position-relative">
                <div className="bgc-saitama rounded-p-10 p-2">
                  <p className="text-white f-Ubuntu-M fsp-16 lh-sm min-hp-50 m-0 pb-2 d-flex justify-content-center align-items-center">La propuesta que hemos escogido es...</p>
                  <div className="bgc-white rounded-p-10 p-2"><InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 text-start flex-grow-1 lhp-35 min-hp-70 contenedor-linea" /></div>
                  <p className="text-white f-Ubuntu-M fsp-16 lh-sm min-hp-50 m-0 p-0 d-flex align-items-center text-start">porque</p>
                  <div className="bgc-white rounded-p-10 p-2"><InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 text-start flex-grow-1 lhp-35 min-hp-70 contenedor-linea" /></div>
                </div>
              </div>
              <div className="col-sm-12 col-md-6 p-1 m-0 position-relative">
                <div className="bgc-vegeta rounded-p-10 p-2">
                  <div className="bgc-white rounded-p-10 w-100 h-100 p-2">
                    <p className="f-Ubuntu-L fsp-16 lh-sm mbp-10">El nivel de dificultad que tiene la construcción de la propuesta es...</p>
                    <div className="d-flex align-items-center psp-40 pbp-10">
                      <Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check>
                      <div className="psp-10 ptp-0 f-Ubuntu-L fsp-16 text-start">Muy alto</div>
                    </div>
                    <div className="d-flex align-items-center psp-40 pbp-10">
                      <Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check>
                      <div className="psp-10 ptp-0 f-Ubuntu-L fsp-16 text-start">Alto</div>
                    </div>
                    <div className="d-flex align-items-center psp-40 pbp-10">
                      <Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check>
                      <div className="psp-10 ptp-0 f-Ubuntu-L fsp-16 text-start">Medio</div>
                    </div>
                    <div className="d-flex align-items-center psp-40 pbp-10">
                      <Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check>
                      <div className="psp-10 ptp-0 f-Ubuntu-L fsp-16 text-start">Bajo</div>
                    </div>
                    <div className="d-flex align-items-center psp-40">
                      <Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check>
                      <div className="psp-10 ptp-0 f-Ubuntu-L fsp-16 text-start">Muy bajo</div>
                    </div>
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

export default Page044;
