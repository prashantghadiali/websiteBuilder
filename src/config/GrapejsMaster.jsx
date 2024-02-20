import React, { useEffect } from 'react';
import '../App.css';
import grapesjs from 'grapesjs';

const GrapejsMaster = () => {
  useEffect(() => {
    // Initialize GrapeJS inside the useEffect hook
    const editor = grapesjs.init({
      // Your GrapeJS configuration options go here
      container: '#gjs', // ID of the container element
      blockManager: {
        appendTo: '#blocks',
        blocks: [
          {
            id: 'section', // id is mandatory
            label: '<b>Section</b>', // You can use HTML/SVG inside labels
            attributes: { class:'gjs-block-section' },
            content: `<section>
              <h1>This is a simple title</h1>
              <div>This is just a Lorem text: Lorem ipsum dolor sit amet</div>
            </section>`,
          }, {
            id: 'text',
            label: 'Text',
            content: '<div data-gjs-type="text">Insert your text here</div>',
          }, {
            id: 'image',
            label: 'Image',
            // Select the component once it's dropped
            select: true,
            // You can pass components as a JSON instead of a simple HTML string,
            // in this case we also use a defined component type `image`
            content: { type: 'image' },
            // This triggers `active` event on dropped components and the `image`
            // reacts by opening the AssetManager
            activate: true,
          }
        ]
      },
    });

    // You can further customize the editor or handle events here

    return () => {
      // Clean up GrapeJS when the component is unmounted
      editor.destroy();
    };
  }, []); // Empty dependency array to run the effect only once

  return (
    <div>
      {/* <h1>bazar Demo Page</h1> */}
      <div id="gjs">
        {/* This is the container where GrapeJS will be rendered */}
      </div>
      <div id="blocks"></div>
    </div>
  );
};

export default GrapejsMaster;
