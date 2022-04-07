import React, { useEffect } from 'react';
import { useState } from "react";
import { doc, getDoc, setDoc, updateDoc, onSnapshot } from "firebase/firestore";

import db from "../firebase/firebaseConfig";
import { app } from "../firebase/firebaseConfigStorage";

const SubirImagen = (props) => {

    const dokenArray = getUrlParameter("doken").split([',']);
    //console.log(dokenArray[1]);

    const coleccion = "dataUsers";
    const documento = dokenArray[0] + dokenArray[1];
    const docRef = doc(db, coleccion, documento);

    // const image = props.image;
    const id = props.id;
    const pagina = props.pagina;

    const [visible, setVisible] = useState(false);

    // Get a reference to the storage service, which is used to create references in your storage bucket
    //const storage = getStorage();

    // Create a storage reference from our storage service
    //const storageRef = ref(storage);


    // firestore get data for check
    useEffect(() => {
        getData();
    }, [visible]);

    const getData = () => {
        const obtenerDatos = async () => {
            const docSnap = await getDoc(docRef);

            if (docSnap.exists()) {
                const field = docSnap.data()[id];
                console.log("Current data: ", docSnap.data()[id]);
                if (field) {
                    setVisible(docSnap.data()[id]);
                    console.log("content1: " + visible);
                } else {
                    console.log("Sin datos: " + id);
                }
                //console.log("Document data:", docSnap.data());
            } else {
                // doc.data() will be undefined in this case
                await setDoc(doc(db, coleccion, documento), { build: "1" });
                console.log("No such document!");
            }
        };
        obtenerDatos();
    }


    function getUrlParameter(name) {
        name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
        var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
        var results = regex.exec(window.location.search);
        return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
    };

    function handleClick() {
        console.log(visible)
        setVisible(!visible);
        updateContenido();
        console.log(visible)

    }

    const updateContenido = () => {
        //console.log("content1: " + data);
        let estadoCheck = !visible; // Por alguna razón el componente no se actualiza antes de enviar a Firestore 
        updateDoc(docRef, {
            [id]: estadoCheck,
        });
    }

    const [image, setImage] = useState(null);
    const [url, setUrl] = useState("");
    const [progress, setProgress] = useState(0);

    const handleChange = (e) => {
        if (e.target.files[0]) {
            setImage(e.target.files[0]);
        }
    }

    const handleUpload = async () => {
        console.log(image.name)

        app.storage().ref(`images/${image.name}`).put(image);
        //const uploadTask = storage.ref(`images/${image.name}`).put(image);
        //const uploadTask = ref(storage, `images/${image.name}`)
        // uploadTask.on(
        //     "state_changed",
        //     snapshot => {
        //         const progress = Math.round(
        //             (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        //         );
        //         setProgress(progress);
        //     },
        //     error => {
        //         console.log(error);
        //     },
        //     () => {
        //         storage
        //             .ref("images")
        //             .child(image.name)
        //             .getDownloadURL()
        //             .then(url => {
        //                 setUrl(url);
        //             });
        //     }
        // );
    };



    console.log("imagen: ", image)

    return (<div>
        <progress value={progress} max="100" />
        <br />
        <br />
        <input type="file" onChange={handleChange} />
        <button onClick={handleUpload}>Upload</button>
        <br />
        {url}
        <br />
        <img src={url || "http://via.placeholder.com/300"} alt="firebase-image" />

    </div>);
}

export default SubirImagen;
