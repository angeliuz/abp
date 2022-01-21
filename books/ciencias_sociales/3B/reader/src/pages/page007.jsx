import React from "react";
import ModalVideo from "../components/ModalVideo";
import "./page_007.css";

function Page007(props) {

  const pagina = "007";
  var indexInput = 0;

  return (
      <div className="wrapper bgc-light">
        <div className="d-flex flex-column align-items-center pbp-20">
          <div className="page bgc-white overflow-hidden position-relative" id={"page_"+pagina}>
                {/* BEGIN CABECERA VERSIÓN 2 */}
                <div className="cabecera-v2 bgc-goten d-flex flex-column">
                  <div className="d-flex contenedor-cabecera-v2 align-items-center ptp-40 psp-30 pep-30">
                    <div className="caja-seccion wp-160 hp-60 d-flex justify-content-center ptp-10 mtp-5 color-goten fsp-24 f-IntroRustG-Base">SESIÓN 1</div>
                    <div className="section-name d-flex align-items-center fsp-24 fw-700 f-Ubuntu-M color-white">¡Tenemos un desafío!</div>
                  </div>
                </div> 
                {/* END CABECERA VERSIÓN 2 */}

            <div className="ptp-10 psp-60 mbp-0 contenedor-pagina">
              <div className="f-Ubuntu-B fsp-20 color-goten text-start lhp-20">Conociendo el desafío</div>
              <div className="d-flex">
                <div className="f-ccdigitaldelivery-bold fsp-35 color-goten">1</div>
                <div className="f-Ubuntu-R fsp-16 ptp-18 psp-10 text-start">Veo el video, leo y comprendo.</div>
                <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image="images/page_007/img_002.jpg" clasesImagen="cambio hp-40 mtp-10" className="p-0 px-1" />
                {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image="images/page_007/img_001.png" className="p-0 px-1" />
                <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image="images/page_007/img_001.png" className="p-0 px-1" /> */}
              </div>
            </div>

            <div className="cb-contenedor-mail text-start position-relative">
              <div className="cb-datos-mail pep-15 psp-10 ptp-10 pbp-10">
              <div className="d-flex mbp-5"> 
                  <div className="cb-datos-a psp-10 f-Ubuntu-R fsp-16 mep-10">De:</div>
                  <div className="cb-datos-1 psp-10 f-Ubuntu-R fsp-16">alejandra@mail.com</div>
              </div>
              <div className="d-flex mbp-5">
                  <div className="cb-datos-a psp-10 mep-10">Para:</div>
                  <div className="cb-datos-1 psp-10 f-Ubuntu-R fsp-16">estudiantestercerobasico@correo.cl</div>
              </div>
              <div className="d-flex">
                  <div className="cb-datos-a psp-10 f-Ubuntu-R fsp-16 mep-10">Asunto:</div>
                  <div className="cb-datos-1 psp-10 f-Ubuntu-R fsp-16">Solicitud de colaboración</div>
              </div>
              </div>
              <div className="cb-texto-mail">
                  <div className="cb-carta-content f-Ubuntu-L">
                  <img src="images/page_007/img_003.png" className="cb-computador-p07" />
                      <p>Estimados estudiantes:</p>
                      <p>Espero que todos se encuentren muy bien. Les escribo para solicitar
                          su ayuda y colaboración para un importante desafío. Como saben,
                          todos y todas somos diversos en nuestras creencias, culturas, intereses
                          y gustos y únicos con nuestras características, ¡y eso tenemos que
                          valorarlo y celebrarlo!</p>

                      <p>Para ello, les tengo el gran desafío de organizar una Fiesta de la
                          Diversidad, pero no cualquier fiesta: será una que tenga muchos
                          elementos culturales diversos que nos representen a todos y que
                          permita respetarnos y tolerarnos mutuamente. ¿Cuento con ustedes?
                          Quedo atenta a su respuesta. ¡Nos vemos pronto!</p>

                      <span>Alejandra
                      <p className="fsp-12"> Representante de la Comisión de la Diversidad Cultural</p></span>
                  </div>
              </div>
          </div>

          <div className="ptp-10 psp-60 mbp-0 contenedor-pagina">
            {/* <div className="f-Ubuntu-B fsp-20 color-goten text-start lhp-20">Conociendo el desafío</div> */}
            <div className="d-flex">
              <div className="f-ccdigitaldelivery-bold fsp-35 color-goten">2</div>
              <div className="f-Ubuntu-R fsp-16 ptp-18 psp-10 text-start">En el mensaje descubrí que…</div>
              {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image="images/page_007/img_002.jpg" clasesImagen="cambio hp-40 mtp-10" className="p-0 px-1" /> */}
              {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image="images/page_007/img_001.png" className="p-0 px-1" />
              <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image="images/page_007/img_001.png" className="p-0 px-1" /> */}
            </div>
          </div>
              
       
          <div className="cb-ejercicio-2-p07 ptp-15 psp-15 pbp-15 border-color-leia border position-relative mbp-70">
            <img src="images/page_007/img_004.png" className="cb-personaje-p07" alt="" />
                <div className="d-flex mbp-10">
                  <div className="bgc-white ptp-5 pbp-5 psp-15 pep-20 border-1 border-style-solid border-color-dark" contenteditable="true"></div>
                  <div className="msp-10 justify-content-center align-items-center d-flex"> Todos somos únicos.</div>
                </div>
                <div className="d-flex mbp-10">
                    <div className="bgc-white ptp-5 pbp-5 psp-15 pep-20 border-1 border-style-solid border-color-dark" contenteditable="true"></div>
                    <div className="msp-10 justify-content-center align-items-center d-flex">Todos somos diferentes.</div>
                </div>
                <div className="d-flex mbp-10">
                    <div className="bgc-white ptp-5 pbp-5 psp-15 pep-20 border-1 border-style-solid border-color-dark" contenteditable="true"></div>
                    <div className="msp-10 justify-content-center align-items-center d-flex">Hay que ignorar la diversidad.</div>
                </div>
                <div className="d-flex mbp-10">
                    <div className="bgc-white ptp-5 pbp-5 psp-15 pep-20 border-1 border-style-solid border-color-dark" contenteditable="true"></div>
                    <div className="msp-10 justify-content-center align-items-center d-flex">Tenemos que tolerar la diversidad.</div>
                </div>
                <div className="d-flex mbp-10">
                    <div className="bgc-white ptp-5 pbp-5 psp-15 pep-20 border-1 border-style-solid border-color-dark" contenteditable="true"></div>
                    <div className="msp-10 justify-content-center align-items-center d-flex">Es importante respetar la diversidad.</div>
                </div>
            </div>
            

            <div className="d-flex hp-90 caja-flotante p-0 m-0 position-absolute justify-content-end align-items-end zindex-2" style={{ bottom: 70, right: 0 }}>
              <div className="f-Ubuntu-M fsp-10 position-absolute mbp-60" style={{ transform: `rotate(270deg)`, color: "dark" }}>
                ABP &copy; SM
              </div>
              <div className="bgc-boros wp-50 hp-30 f-Ubuntu-M fsp-20 psp-5">{props.numeroPagina(pagina)}</div>
            </div>
            <div className="row w-100 position-absolute caja-flotante2 p-0 m-0 align-items-end" style={{ bottom: 0 }}>
              <div className="col-7 col-sm-2 p-0 m-0 position-relative">
                <img src="images/rotulo_motivacion.svg" className="visible rotulo-etapa position-absolute top-0 start-0" alt="" />
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

export default Page007;
