import React from 'react';

function ItemLista(props) {
  return (
  <div className="d-flex align-items-start w-100 psp-10 pep-10 ">
  <div className={"wp-5 hp-5 "+props.colorBullet+" mtp-8 rounded-circle"}></div>
  <div className={"d-flex justify-content-start align-items-center w-100 text-start "+props.fuente+" "+props.fontSize+" "+props.color+" psp-5"}>
      {props.children}
  </div>
</div>)
}

export default ItemLista;
