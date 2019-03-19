import React from 'react'
import {ContainerItem} from 'mineko-design/src/layout/index'
import DropzoneComponent from "react-dropzone-component";
import ReactDOMServer from "react-dom/server";
import "../../styles/dropzone.css"

// let callbackArray = [() => console.log('Hi!'), () => console.log('Ho!')];
// let callback = () => console.log('Hello!');
// let success = file => console.log('uploaded', file);
// let removedfile = file => console.log('removing...', file);
// let dropzone = null;
//
// const config = {
//     iconFiletypes: ['.jpg', '.png', '.gif'],
//     showFiletypeIcon: false,
//     postUrl: '/'
// }
//
// const eventHandlers = {
//     init: dz => dropzone = dz,
//     drop: callbackArray,
//     addedfile: callback,
//     success: success,
//     removedfile: removedfile
// }
// const djsConfig = {
//     previewTemplate: ReactDOMServer.renderToStaticMarkup(
//         <div className="dz-preview dz-file-preview">
//             <div className="dz-details">
//                 <div className="dz-filename"><span data-dz-name="true"></span></div>
//                 <img data-dz-thumbnail="true"/>
//             </div>
//             <div className="dz-progress"><span className="dz-upload" data-dz-uploadprogress="true"></span></div>
//             <div className="dz-success-mark"><span>✔</span></div>
//             <div className="dz-error-mark"><span>✘</span></div>
//             {/*<div className="dz-error-message"><span data-dz-errormessage="true"></span></div>*/}
//         </div>
//     )
// }

const Dropzone = ({children, ...props}) => (
''

)

//     <ContainerItem gridSize={12}>
//     <DropzoneComponent config={config} eventHandlers={eventHandlers} djsConfig={djsConfig}>componene</DropzoneComponent>
// </ContainerItem>

export default Dropzone;