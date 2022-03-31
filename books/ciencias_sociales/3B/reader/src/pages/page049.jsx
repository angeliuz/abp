import React from "react";
import InputBox from "../components/InputBox";
import ModalVideo from "../components/ModalVideo";
import ModalBook from "../components/ModalBook";
import Check from "../components/Check";
import "./page_049.css";

function Page049(props) {
  const background = "bgc-saitama";
  const pagina = "049";
  var indexInput = 0;

  return (
    <div className="wrapper bgc-light">
      <div className="d-flex flex-column align-items-center pbp-20">
        <div className="page bgc-white overflow-hidden position-relative" id={"page_" + pagina}>
          {/* BEGIN CABECERA VERSIÓN 2 */}
          <div className="cabecera-v2 bgc-saitama d-flex flex-column">
            <div className="d-flex contenedor-cabecera-v2 align-items-center ptp-40 psp-30 pep-30">
              <div className="caja-seccion wp-160 hp-60 d-flex justify-content-center ptp-10 mtp-5 color-saitama fsp-24 f-IntroRustG-Base">SESIÓN 14</div>
              <div className="section-name d-flex align-items-center fsp-24 fw-700 f-Ubuntu-M color-white">Somos artistas e imaginamos nuestro stand</div>
            </div>
          </div>
          {/* END CABECERA VERSIÓN 2 */}

          <div className="ptp-10 psp-60 mbp-0 contenedor-pagina">
            <div className="f-Ubuntu-B fsp-20 color-saitama text-start lhp-20">Nos expresamos a través del arte</div>
            <div className="d-flex">
              {/* <img className="hp-20 align-center mt-3 me-2 mb-2" src="images/page_033/g_i.svg" alt="" /> */}
              <div className="f-ccdigitaldelivery-bold fsp-35 color-saitama">1</div>
              <div className="f-Ubuntu-R fsp-16 ptp-18 psp-10 text-start">Observo la revista y completo.</div>
              <ModalBook id={"p" + pagina + "_book" + (indexInput += 1)} colorUnidad={background} pagina={"76"} image={"images/page_" + pagina + "/img_001.svg"} clasesImagen="hp-40 text-center mtp-10" className="p-0 px-0" />
           {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image="images/page_045/img_001.svg" clasesImagen="cambio hp-40 mtp-10" className="p-0 px-1" /> */}
            </div>
          </div>



          <div className="d-flex justify-content-center msp-80 mtp-5 mep-80 ">
            <div className="d-flex justify-content-start w-95 h-100   bgc-jarek rounded-p-20 position-relative">
              <div className="w-95 position-absolute top-0 start-50 translate-middle "><div className="espiral-calado-2-49  mtp-15 "></div></div>

              <div className="row p-3 w-100">
                <div className="col-6 p-1">
                  <div className="msp-20 ">
                    <div className=" ptp-20  ">
                      <div className="f-pixilate-bold fsp-16 text-start">Lo que más me gustó de lo que observé fue..</div>
                      <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-130" />
                    </div>
                    <div className=" ptp-20  mtp--20 ">
                      <div className="f-pixilate-bold fsp-16 text-start">Creo que las artes plásticas permiten…</div>
                      <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-130" />
                    </div>

                  </div>
                </div>
                <div className="col-6 p-2">
                  <div className="bgc-white mtp-10 border-style-solid border-1 border-color-goku  rounded-p-10  ptp-15 psp-10 pep-10  position-relative">
                    <div className="position-absolute top-100 start-100 translate-middle  "><img src="images/page_049/img_002.png" className="msp-40 hp-70  " alt="" /></div>
                    <div className="f-pixilate-bold color-dark fsp-17 fw-200 lh-sm text-start ">Algunos colores, formas o materiales que creemos que representan la diversidad son...</div>
                    <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-240" />
                  </div>
                </div>
              </div>

            </div>
          </div>






          <div className="d-flex justify-content-center msp-60 mep-40">
            <div className="row w-100 d-flex justify-content-center ">

              <div className="col-lg-4 col-sm-12 d-flex  m-0 p-0 position-relative ">
                <div className="d-flex ">
                  {/* <img className="hp-15 align-center mt-3 me-2 mb-2" src="images/page_014/img_001.svg" alt="" /> */}
                  <div className="f-ccdigitaldelivery-bold fsp-35 color-saitama">2</div>
                  <div className="f-Ubuntu-R fsp-16 text-start ptp-18 psp-10">La expresión artística que utilizaremos para mostrar un concepto de diversidad en la fiesta es:</div>
                  {/* <ModalBook id={ "p" + pagina + "_book"+ (indexInput+=1) } image="images/page_045/img_001.svg" clasesImagen="hp-40 text-center msp-30 mtp-10 " className="p-0 px-0" /> */}
                </div>
              </div>

              <div className="col-lg-8 col-sm-12 d-flex justify-content-center position-relative ptp-20 ">
                <div className="position-absolute top-100 start-0 translate-middle  msp--140 mtp--80 "><img src="images/page_049/img_003.png" className="hp-140 visible-768 " alt="" /></div>

                <div className=" w-100 bgc-hotaru">

                  <div className=" mtp-15 psp-20">
                    <div className="d-flex align-items-center pbp-10 w-100">
                      <div className="d-inline wp-30 hp-30 bgc-white pb-1">
                      <Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check>
                      </div>
                      <div className="f-Ubuntu-L msp-10 fsp-15 lh-sm pep-5 text-start">Pintura (témpera, acuarela, óleo).</div>
                    </div>
                    <div className="d-flex align-items-center pbp-10 w-100">
                      <div className="d-inline wp-30 hp-30  bgc-white">
                      <Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check>
                      </div>
                      <div className="f-Ubuntu-L msp-10 fsp-15 lh-sm pep-5 text-start">Escultura (greda, plasticina, arcilla).</div>
                    </div>
                    <div className="d-flex align-items-center pbp-10 w-100">
                      <div className="d-inline wp-30 hp-30 bgc-white">
                      <Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check>
                      </div>
                      <div className="f-Ubuntu-L msp-10 fsp-15 lh-sm pep-5 text-start">Dibujo (lápices de colores, lápiz grafito).</div>
                    </div>
                    <div className="d-flex align-items-center pbp-10 w-100">
                      <div className="d-inline wp-30 hp-30 bgc-white">
                      <Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check>
                      </div>
                      <div className="f-Ubuntu-L msp-10 fsp-15 lh-sm pep-5 text-start">Collage (papeles de colores, palabras, fotografías).</div>
                    </div>
                    <div className="d-flex align-items-start   w-100 mbp-10 ">
                      <div className="d-inline wp-35 hp-30">
                      <Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check></div>
                      <div className="d-inline f-Ubuntu-L text-start fsp-17 lh-sm mt-1 psp-10 lh-sm "> Otra.
                      </div>
                      <div className="w-100 max-wp-350 m-0 p-0 ">
                        <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 fsp-15 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-80" />
                      </div>
                    </div>


                  </div>
                </div>



              </div>

            </div>
          </div>







          <div className="mbp-90 mtp-10">
            <div className="ptp-10 psp-60 mbp-0 contenedor-pagina mtp--20 mbp-20">

              <div className="d-flex">
                {/* <img className="hp-20 align-center mt-3 me-2 mb-2" src="images/page_033/g_i.svg" alt="" /> */}
                <div className="f-ccdigitaldelivery-bold fsp-35 color-saitama">3</div>
                <div className="f-Ubuntu-R fsp-16 ptp-18 psp-10 text-start">Realizo mi propuesta artística y la guardo para nuestra fiesta.</div>
                {/* <ModalBook id={ "p" + pagina + "_book"+ (indexInput+=1) } image="images/page_047/img_001.svg" clasesImagen="hp-40 msp-30 text-center mtp-10 " className="p-0 px-0" /> */}
                {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image="images/page_045/img_001.svg" clasesImagen="cambio hp-40 mtp-10" className="p-0 px-1" /> */}
              </div>
            </div>

          </div>













          <div className="d-flex hp-90 caja-flotante p-0 m-0 position-absolute justify-content-end align-items-end zindex-2 " style={{ bottom: 70, right: 0 }}>
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
            <div className="col-1 col-sm-2 p-0 m-0 position-relative">
              <img src="images/rotulo_experimentacion.svg" className="oculto" alt="" />
              <div className="w-100 hp-15 bgc-freezer rounded-caja"></div>
              <div className="w-100 hp-25 bgc-pidgey"></div>
            </div>
            <div className="col-7 col-sm-2 p-0 m-0 position-relative">
              <img src="images/rotulo_creacion.svg" className="visible rotulo-etapa position-absolute top-0 start-0" alt="" />
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

export default Page049;
