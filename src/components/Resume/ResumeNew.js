import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import pdf from "../../Assets/../Assets/RESUME_Swapnil_Khare_oct2022.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import { Skeleton } from "@mui/material";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const resumeLink =
  "https://raw.githubusercontent.com/swapnil2597/profile6/main/src/Assets/RESUME_Swapnil_Khare_oct2022.pdf";

function ResumeNew() {
  const [width, setWidth] = useState(1200);
  const [pdfLoading, setPdfLoading] = useState(true);

  function PDFdidMount() {
    setPdfLoading(false);
  }

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>

        <Row className="resume">
          <Document onLoadSuccess={PDFdidMount} file={resumeLink} className="d-flex justify-content-center">
            {pdfLoading ? 
              <Skeleton sx={{ bgcolor: '#8a49a810' }} variant="rectangular">
                <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
              </Skeleton> :
              <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
            }
          </Document>
        </Row>

        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
