import React, { useRef, useEffect } from 'react';
import WebViewer from '@pdftron/pdfjs-express';
import './Testpdf.css';
import {savePDFCall} from "../../config/apiCalls"

const Testpdf = (props) => {
  const viewer = useRef(null);

  const requestConfig = {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  };

  // if using a class, equivalent of componentDidMount 
  useEffect(() => {
    WebViewer(
      {
        path: '/webviewer/lib',
        // initialDoc: '/files/pdftron_about.pdf',
        initialDoc: props.path,
      },
      viewer.current,
    ).then((instance) => {
      const { docViewer, Annotations , UI } = instance;
      //to disable buttons on the component
      instance.UI.disableElements(["ribbons", "panToolButton", "selectToolButton", "miscToolGroupButton", "stickyToolButton","toolsHeader","printButton"]);
      console.log(instance.UI.settingsMenuOverlay.getItems());
      const annotManager = docViewer.getAnnotationManager();

      docViewer.on('documentLoaded', () => {
        // const rectangleAnnot = new Annotations.RectangleAnnotation();
        // rectangleAnnot.PageNumber = 1;
        //// values are in page coordinates with (0, 0) in the top left
        // rectangleAnnot.X = 100;
        // rectangleAnnot.Y = 150;
        // rectangleAnnot.Width = 200;
        // rectangleAnnot.Height = 50;
        //rectangleAnnot.Author = annotManager.getCurrentUser();

        //annotManager.addAnnotation(rectangleAnnot);
        //// need to draw the annotation otherwise it won't show up until the page is refreshed
        //annotManager.redrawAnnotation(rectangleAnnot);
      });

      //  adds a button to the header that on click sets the page to the next page
      UI.setHeaderItems((header) => {
        header.push({
          type: "actionButton",
          img: '<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-caret-right" viewBox="0 0 18 18"><path d="M6 12.796V3.204L11.481 8 6 12.796zm.659.753 5.48-4.796a1 1 0 0 0 0-1.506L6.66 2.451C6.011 1.885 5 2.345 5 3.204v9.592a1 1 0 0 0 1.659.753z"/></svg>',
          onClick: () => {
            const currentPage = docViewer.getCurrentPage();
            const totalPages = docViewer.getPageCount();
            const atLastPage = currentPage === totalPages;

            if (atLastPage) {
              docViewer.setCurrentPage(1);
            } else {
              docViewer.setCurrentPage(currentPage + 1);
            }
          },
        });
      });

      // adds a button to the header that on click bookmarks the page
      UI.setHeaderItems((header) => {
        header.push({
          type: "actionButton",
          img: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-bookmark" viewBox="0 0 18 18"><path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z"/></svg>',
          onClick: () => {
            let currentPage = docViewer.getCurrentPage();
            props.saveBook(props.isbn, currentPage);
          },
        });
      });

      // adds a button to the header that on click downloads the book
      UI.setHeaderItems((header) => {
        header.push({
          type: "actionButton",
          img: '<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-download" viewBox="0 0 18 18"><path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"/><path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"/></svg>',
          onClick: () => { window.open(props.path)},
        });
      });

      // adds a button to the header that on click favorites the page
      UI.setHeaderItems((header) => {
        header.push({
          type: "actionButton",
          img: '<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-heart" viewBox="0 0 18 19"><path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/></svg>',
          onClick: () => {},
        });
      });
    });  
  }, []);

  return (
    <div className="test">
      <div className="header">React sample</div>
      <div className="webviewer" ref={viewer}></div>
    </div>
  );
};

export default Testpdf;
