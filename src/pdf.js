import React from 'react';
import { jsPDF } from "jspdf";


class PDF extends React.Component {
    Download = ()=> {
        const doc = new jsPDF();
        let height = doc.internal.pageSize.height;
        console.log(height)
        doc.setTextColor(0, 255, 0);
        doc.text( "Hello world!", 20, 20);
        doc.text( "Hello world!", 20, 40);
        doc.text("Hello world!", 20, 60);
        doc.text("Hello world!", 20, 80);
        doc.text("Hello world!", 20, 100);
        doc.text("Hello world!", 20, 120);
        doc.text("Hello world!", 20, 140);
        doc.text("Hello world!", 20, 160);
            
        doc.text("Hello world!", 20, 180);
        doc.text("Hello world!", 20, 200);
        doc.text("Hello world!", 20, 220);
        doc.text("Hello world!", 20, 240);
        doc.text("Hello world!", 20, 260);
        doc.text("Hello world! ewjnj", 20, 280);
        doc.addPage()
        doc.text( "Hello world!", 20, 20);
        doc.text( "Hello world!", 20, 40);
        doc.text("Hello world!", 20, 60);
        doc.text("Hello world!", 20, 80);
        doc.text("Hello world!", 20, 100);
        doc.text("Hello world!", 20, 120);
        doc.text("Hello world!", 20, 140);
        doc.text("Hello world!", 20, 160);
        doc.text("Hello world!", 20, 180);
        doc.text("Hello world!", 20, 200);
        doc.text("Hello world!", 20, 220);
        doc.text("Hello world!", 20, 240);
        doc.text("Hello world!", 20, 260);
        doc.save("a4.pdf");
    }
    render() {
    

        return (
            <div>
                PDF Download

                <button onClick = {()=> this.Download()}>
                Download
                </button>
            </div>
        );
    }
}

export default PDF;