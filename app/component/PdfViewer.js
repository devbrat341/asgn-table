"use client";

import React from "react";
import { Viewer, Worker } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import Modal from './Model'

export default function DisplayPDF({pdfUrl, closePdfModal}) {
  const defaultLayoutPluginInstance = defaultLayoutPlugin();

  return (

    <Modal onClose={closePdfModal}>
      <div className="pdf-viewer">
      <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.15.349/build/pdf.worker.js">
        <Viewer
          fileUrl={pdfUrl}
        />
    </Worker>
      </div>
    </Modal>
    
  );
}