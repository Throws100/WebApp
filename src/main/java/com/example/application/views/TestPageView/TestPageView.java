package com.example.application.views.TestPageView;

import com.vaadin.componentfactory.pdfviewer.PdfViewer;
import com.vaadin.flow.component.orderedlayout.HorizontalLayout;
import com.vaadin.flow.router.PageTitle;
import com.vaadin.flow.router.Route;
import com.vaadin.flow.server.StreamResource;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;

@Route("pdf")
@PageTitle("TestPageView")
public class TestPageView extends HorizontalLayout {

    public TestPageView() {
        // Load the PDF file from the specified file path
        String filePath = "C:\\Gefahrstoff\\Testkanngeloschtwerden\\komischesPDF\\input\\komischesPDF.pdf";

        // Create the PdfViewer component and set the document source
        PdfViewer pdfViewer = new PdfViewer();
        File file = new File(filePath);
        StreamResource resource = new StreamResource(" ", () -> {
            try {
                return new FileInputStream(file);
            } catch (FileNotFoundException e) {
                e.printStackTrace();
                return null;
            }
        });
        pdfViewer.setSrc(resource);
        pdfViewer.setHeight("600px");
        pdfViewer.setWidth("800px");

        // Add the PdfViewer to the layout
        add(pdfViewer);
    }
}

