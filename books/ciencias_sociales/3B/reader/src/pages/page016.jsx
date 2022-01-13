import React from "react";
import InputBox from "../components/InputBox";
import ModalBook from "../components/ModalBook";

import "./page_016.css";

function Page016(props) {
  const pagina = "016";
  var indexInput = 0;

  return (
    <div className="wrapper bgc-light">
      <div className="d-flex flex-column align-items-center pbp-20">
        <div
          className="page bgc-white overflow-hidden position-relative"
          id={"page_" + pagina}
        >
          {/* HEADER */}
          <div className="cabecera-v1 hp-80 bgc-bulma"></div>
          {/* FIN HEADER */}

          <div className="psp-60 pep-60 ptp-30">
            <div className="f-Ubuntu-B color-bulma fsp-18 text-left">
              Todos aportamos en el equipo
            </div>
            <div className="d-flex pbp-20">
              <div className="f-ccdigitaldelivery-bold fsp-35 color-bulma">
                2
              </div>
              <div className="f-Ubuntu-R fsp-16 ptp-18 psp-10 text-left">
                El rol y las tareas que me gustaría asumir en mi equipo es...
              </div>
            </div>
            <div className="bgc-white sombra psp-30 position-relative">
              <div className="row">
                <div className="position-absolute top-50 start-0">
                  <img
                    src="/images/page_016/img_005.png"
                    className="giro-270 anillado-1 mtp--20"
                    alt=""
                  />
                </div>

                <div className="col-md-6 psp-20 pep-20 ptp-10 pbp-10">
                  <div className=" py-2 color-pidgey f-pixilate-bold fsp-18">
                    Coordinación
                  </div>
                  <div className="text-left psp-10 pep-20">
                    <div className="flecha-pidgey mep-10 mtp-10"></div>
                    <div className="f-ubuntu-L py-1 mtp--23 msp-20">
                      Ordenamos las siguientes etapas de trabajo.
                    </div>
                  </div>
                  <div className="text-left psp-10 pep-20">
                    <div className="flecha-pidgey mep-10 mtp-10"></div>
                    <div className="f-ubuntu-L py-1 mtp--23 msp-20">
                      Se asegura de que todos participen.
                    </div>
                  </div>
                  <div className="linea-pidgey"></div>
                </div>
                <div className="col-md-6 psp-20 pep-20 ptp-10 pbp-10">
                  <div className=" py-2 color-pikachu f-pixilate-bold fsp-18 ">
                    Supervisión
                  </div>
                  <div className="text-left psp-10 pep-20">
                    <div className="flecha-pikachu mep-10 mtp-10"></div>
                    <div className="f-ubuntu-L py-1 mtp--23 msp-20">
                      Gestiona el tiempo de las tareas.
                    </div>
                  </div>
                  <div className="text-left psp-10 pep-20">
                    <div className="flecha-pikachu mep-10 mtp-10"></div>
                    <div className="f-ubuntu-L py-1 mtp--23 msp-20">
                      Se asegura de que todos cumplan las tareas en el plazo
                      asignado.
                    </div>
                  </div>
                  <div className="linea-pikachu"></div>
                </div>

                <div className="col-md-6 psp-20 pep-20 ptp-10 pbp-10 borde-goten">
                  <div className="linea-goten"></div>
                  <div className=" py-2 color-goten f-pixilate-bold fsp-18 ">
                    Relaciones públicas
                  </div>
                  <div className="text-left psp-10 pep-20">
                    <div className="flecha-goten mep-10 mtp-10"></div>
                    <div className="f-ubuntu-L py-1 mtp--23 msp-20">
                      Se comunica con el docente para solicitar ayuda.
                    </div>
                  </div>
                  <div className="text-left psp-10 pep-20">
                    <div className="flecha-goten mep-10 mtp-10"></div>
                    <div className="f-ubuntu-L py-1 mtp--23 msp-20">
                      Pide ayuda a otros equipos.
                    </div>
                  </div>
                </div>
                <div className="col-md-6 psp-20 pep-20 ptp-10 pbp-10 borde-balrog">
                  <div className="linea-balrog"></div>
                  <div className=" py-2 color-balrog f-pixilate-bold fsp-18 ">
                    Intendencia
                  </div>
                  <div className="text-left psp-10 pep-20">
                    <div className="flecha-balrog mep-10 mtp-10"></div>
                    <div className="f-ubuntu-L py-1 mtp--23 msp-20">
                      Gestiona los materiales que se necesitan.
                    </div>
                  </div>
                  <div className="text-left psp-10 pep-20">
                    <div className="flecha-balrog mep-10 mtp-10"></div>
                    <div className="f-ubuntu-L py-1 mtp--23 msp-20">
                      Comprueba que se mantiene un entorno limpio y ordenado.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* PIE DE PAGINA */}
          <div
            className="d-flex hp-90 caja-flotante p-0 m-0 position-absolute justify-content-end align-items-end zindex-2"
            style={{ bottom: 70, right: 0 }}
          >
            <div
              className="f-Ubuntu-M fsp-10 position-absolute mbp-60"
              style={{ transform: `rotate(270deg)`, color: "dark" }}
            >
              ABP &copy; SM
            </div>
            <div className="bgc-jawa wp-50 hp-30 f-Ubuntu-M fsp-20 psp-5">
              {props.numeroPagina(pagina)}
            </div>
          </div>
          <div
            className="row position-absolute caja-flotante2 p-0 m-0 align-items-end"
            style={{ bottom: 0 }}
          >
            <div className="col-1 position-relative col-sm-2 p-0 m-0">
              <img
                src="images/rotulo_motivacion.svg"
                className="oculto"
                alt=""
              />
              <div className="w-100 hp-15 bgc-yamcha rounded-caja-start"></div>
              <div className="w-100 hp-25 bgc-goten"></div>
            </div>
            <div className="col-7 position-relative col-sm-2 p-0 m-0">
              <img
                src="images/rotulo_planificacion.svg"
                className="visible rotulo-etapa position-absolute top-0 start-0"
                alt=""
              />
              <div className="w-100 hp-15 bgc-tshinhan rounded-caja"></div>
              <div className="w-100 hp-25 bgc-bulma"></div>
            </div>
            <div className="col-1 position-relative col-sm-2 p-0 m-0">
              <img
                src="images/rotulo_investigacion.svg"
                className="oculto"
                alt=""
              />
              <div className="w-100 hp-15 bgc-milk rounded-caja"></div>
              <div className="w-100 hp-25 bgc-android18"></div>
            </div>
            <div className="col-1 position-relative col-sm-2 p-0 m-0">
              <img
                src="images/rotulo_experimentacion.svg"
                className="oculto"
                alt=""
              />
              <div className="w-100 hp-15 bgc-freezer rounded-caja"></div>
              <div className="w-100 hp-25 bgc-pidgey"></div>
            </div>
            <div className="col-1 position-relative col-sm-2 p-0 m-0">
              <img src="images/rotulo_creacion.svg" className="oculto" alt="" />
              <div className="w-100 hp-15 bgc-ash rounded-caja"></div>
              <div className="w-100 hp-25 bgc-saitama"></div>
            </div>
            <div className="col-1 position-relative col-sm-2 p-0 m-0">
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

export default Page016;
