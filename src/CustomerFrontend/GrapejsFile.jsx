// import React, { useEffect } from 'react';
// import grapesjs from 'grapesjs';
// import 'grapesjs/dist/css/grapes.min.css';

// const GrapejsFile = () => {
//   useEffect(() => {
//     const editor = grapesjs.init({
//       container: '#gjs',
//       blockManager: {
//         appendTo: '#blocks',
//         blocks: [
//           {
//             id: 'section', // id is mandatory
//             label: '<b>Section</b>', // You can use HTML/SVG inside labels
//             attributes: { class:'gjs-block-section' },
//             content: `<section>
//               <h1>This is a simple title</h1>
//               <div>This is just a Lorem text: Lorem ipsum dolor sit amet</div>
//             </section>`,
//           }, {
//             id: 'text',
//             label: 'Text',
//             content: '<div data-gjs-type="text">Insert your text here</div>',
//           }, {
//             id: 'image',
//             label: 'Image',
//             // Select the component once it's dropped
//             select: true,
//             // You can pass components as a JSON instead of a simple HTML string,
//             // in this case we also use a defined component type `image`
//             content: { type: 'image' },
//             // This triggers `active` event on dropped components and the `image`
//             // reacts by opening the AssetManager
//             activate: true,
//           }
//         ]
//       },
//     //   components: '<div>Hello World!</div>', // Initial content
//     //   style: '.gjs-block { margin: 5px; padding: 10px; }', // Initial style
//     });

//     return () => {
//       editor.destroy();
//     };
//   }, []);

//   return (
//     <div>
//       {/* <h1>bazar Demo Page</h1> */}
//       <div id="gjs">
//         {/* This is the container where GrapeJS will be rendered */}
//       </div>
//       <div id="blocks"></div>
//     </div>
//   );
// };

// export default GrapejsFile;
