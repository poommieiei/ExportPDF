
import jsPDF from "jspdf";
import { Get_font_th } from "./pdf_font";

function Examplereport(params) {
    const doc = new jsPDF("p", "mm", "a4");

    doc.addFileToVFS("THSarabunNew.ttf", Get_font_th());
    doc.addFont("THSarabunNew.ttf", "THSarabunNew", "bold");
    doc.setFont("THSarabunNew", 'bold');

    let hpage = 10, page = 1, sum = 0 , total_Sum = 0;




    doc.rect(10, hpage, 190 * 0.1, 10)
    doc.text(10 + ((190 * 0.1) / 2), hpage + (10 / 2), 'No', 'center')

    doc.rect(10 + (190 * 0.1), hpage, 190 * 0.1, 10)
    doc.text(10 + ((190 * 0.1) + (190 * 0.1) / 2), hpage + (10 / 2), 'customer', 'center')

    doc.rect(10 + ((190 * 0.1) + (190 * 0.1)), hpage, 190 * 0.1, 10)
    doc.text(10 + ((190 * 0.1) + (190 * 0.1) + (190 * 0.1) / 2), hpage + (10 / 2), 'item', 'center')

    doc.rect(10 + ((190 * 0.1) + (190 * 0.1) + (190 * 0.1)), hpage, 190 * 0.2, 10)
    doc.text(10 + ((190 * 0.1) + (190 * 0.1) + (190 * 0.1) + (190 * 0.2) / 2), hpage + (10 / 2), 'price', 'center')

    doc.rect(10 + ((190 * 0.1) + (190 * 0.1) + (190 * 0.1) + (190 * 0.2)), hpage, 190 * 0.2, 10)
    doc.text(10 + ((190 * 0.1) + (190 * 0.1) + (190 * 0.1) + (190 * 0.2) + (190 * 0.2) / 2), hpage + (10 / 2), 'product', 'center')

    doc.rect(10 + ((190 * 0.1) + (190 * 0.1) + (190 * 0.1) + (190 * 0.2) + (190 * 0.2)), hpage, 190 * 0.2, 10)
    doc.text(10 + ((190 * 0.1) + (190 * 0.1) + (190 * 0.1) + (190 * 0.2) + (190 * 0.2) + (190 * 0.2) / 2), hpage + (10 / 2), 'sum', 'center')




    const customers = [];       // เก็บชื่อลูกค้าไม่ซ้ำ

    for (let index = 0; index < params.length - 50; index++) {
        if (index == 0) {
            customers.push(params[index].customer)
        }
        else if (index > 0) {
            let check = false       // true = มีค่าที่ซ้ำกัน   false = มีค่าที่ไม่ซ้ำ
            for (let j = 0; j < customers.length; j++) {
                console.log(customers[j] + ` : ${index} : ` + params[index].customer);
                if(String(customers[j]) == String(params[index].customer)){
                    check = true
                    break;
                }
                
                
            }
            if(check === false){
                customers.push(params[index].customer)
            }
        }
    }
    console.log(customers.length);
    for (let index = 0; index < params.length; index++) {

        const element = params[index];

        if (hpage > 260) {
            doc.addPage()
            hpage = 10;

            doc.rect(10, hpage, 190 * 0.1, 10)
            doc.text(10 + ((190 * 0.1) / 2), hpage + (10 / 2), 'No', 'center')

            doc.rect(10 + (190 * 0.1), hpage, 190 * 0.1, 10)
            doc.text(10 + ((190 * 0.1) + (190 * 0.1) / 2), hpage + (10 / 2), 'customer', 'center')

            doc.rect(10 + ((190 * 0.1) + (190 * 0.1)), hpage, 190 * 0.1, 10)
            doc.text(10 + ((190 * 0.1) + (190 * 0.1) + (190 * 0.1) / 2), hpage + (10 / 2), 'item', 'center')

            doc.rect(10 + ((190 * 0.1) + (190 * 0.1) + (190 * 0.1)), hpage, 190 * 0.2, 10)
            doc.text(10 + ((190 * 0.1) + (190 * 0.1) + (190 * 0.1) + (190 * 0.2) / 2), hpage + (10 / 2), 'price', 'center')

            doc.rect(10 + ((190 * 0.1) + (190 * 0.1) + (190 * 0.1) + (190 * 0.2)), hpage, 190 * 0.2, 10)
            doc.text(10 + ((190 * 0.1) + (190 * 0.1) + (190 * 0.1) + (190 * 0.2) + (190 * 0.2) / 2), hpage + (10 / 2), 'product', 'center')

            doc.rect(10 + ((190 * 0.1) + (190 * 0.1) + (190 * 0.1) + (190 * 0.2) + (190 * 0.2)), hpage, 190 * 0.2, 10)
            doc.text(10 + ((190 * 0.1) + (190 * 0.1) + (190 * 0.1) + (190 * 0.2) + (190 * 0.2) + (190 * 0.2) / 2), hpage + (10 / 2), 'sum', 'center')

        }
        hpage += 10;
        if (index % 2 == 0) {
            doc.setFillColor(255, 100, 100)
            doc.setDrawColor(0, 0, 0)
            doc.rect(10, hpage, 190 * 0.1, 10, 'DF')
            doc.text(10 + ((190 * 0.1) / 2), hpage + (10 / 2), `${index + 1}`, 'center')

            doc.setFillColor(255, 100, 100)
            doc.setDrawColor(0, 0, 0)
            doc.rect(10 + (190 * 0.1), hpage, 190 * 0.1, 10, 'DF')
            doc.text(10 + ((190 * 0.1) + (190 * 0.1) / 2), hpage + (10 / 2), element.customer, 'center')

            doc.setFillColor(255, 100, 100)
            doc.setDrawColor(0, 0, 0)
            doc.rect(10 + ((190 * 0.1) + (190 * 0.1)), hpage, 190 * 0.1, 10, 'DF')
            doc.text(10 + ((190 * 0.1) + (190 * 0.1) + (190 * 0.1) / 2), hpage + (10 / 2), element.item.toString(), 'center')

            doc.setFillColor(255, 100, 100)
            doc.setDrawColor(0, 0, 0)
            doc.rect(10 + ((190 * 0.1) + (190 * 0.1) + (190 * 0.1)), hpage, 190 * 0.2, 10, 'DF')
            doc.text(10 + ((190 * 0.1) + (190 * 0.1) + (190 * 0.1) + (190 * 0.2) / 2), hpage + (10 / 2), element.price.toString(), 'center')

            doc.setFillColor(255, 100, 100)
            doc.setDrawColor(0, 0, 0)
            doc.rect(10 + ((190 * 0.1) + (190 * 0.1) + (190 * 0.1) + (190 * 0.2)), hpage, 190 * 0.2, 10, 'DF')
            doc.text(10 + ((190 * 0.1) + (190 * 0.1) + (190 * 0.1) + (190 * 0.2) + (190 * 0.2) / 2), hpage + (10 / 2), element.product.toString(), 'center')

            let total = Number(element.price) * Number(element.item);
            doc.setFillColor(255, 100, 100)
            doc.setDrawColor(0, 0, 0)
            doc.rect(10 + ((190 * 0.1) + (190 * 0.1) + (190 * 0.1) + (190 * 0.2) + (190 * 0.2)), hpage, 190 * 0.2, 10, 'DF')
            doc.text(10 + ((190 * 0.1) + (190 * 0.1) + (190 * 0.1) + (190 * 0.2) + (190 * 0.2) + (190 * 0.2) / 2), hpage + (10 / 2), total.toString(), 'center')
            total_Sum += Number(total.toString())
        }
        else {
            doc.rect(10, hpage, 190 * 0.1, 10)
            doc.text(10 + ((190 * 0.1) / 2), hpage + (10 / 2), `${index + 1}`, 'center')

            doc.rect(10 + (190 * 0.1), hpage, 190 * 0.1, 10)
            doc.text(10 + ((190 * 0.1) + (190 * 0.1) / 2), hpage + (10 / 2), element.customer, 'center')

            doc.rect(10 + ((190 * 0.1) + (190 * 0.1)), hpage, 190 * 0.1, 10)
            doc.text(10 + ((190 * 0.1) + (190 * 0.1) + (190 * 0.1) / 2), hpage + (10 / 2), element.item.toString(), 'center')

            doc.rect(10 + ((190 * 0.1) + (190 * 0.1) + (190 * 0.1)), hpage, 190 * 0.2, 10)
            doc.text(10 + ((190 * 0.1) + (190 * 0.1) + (190 * 0.1) + (190 * 0.2) / 2), hpage + (10 / 2), element.price.toString(), 'center')

            doc.rect(10 + ((190 * 0.1) + (190 * 0.1) + (190 * 0.1) + (190 * 0.2)), hpage, 190 * 0.2, 10)
            doc.text(10 + ((190 * 0.1) + (190 * 0.1) + (190 * 0.1) + (190 * 0.2) + (190 * 0.2) / 2), hpage + (10 / 2), element.product.toString(), 'center')

            let total = Number(element.price) * Number(element.item);
            doc.rect(10 + ((190 * 0.1) + (190 * 0.1) + (190 * 0.1) + (190 * 0.2) + (190 * 0.2)), hpage, 190 * 0.2, 10)
            doc.text(10 + ((190 * 0.1) + (190 * 0.1) + (190 * 0.1) + (190 * 0.2) + (190 * 0.2) + (190 * 0.2) / 2), hpage + (10 / 2), total.toString(), 'center')
            total_Sum += Number(total.toString())
        }
        
        sum += Number(element.price)
    }

    // for (let index = 0; index < params.length; index++) {
    //     hpage += 10;

    //     if (hpage > 270) {
    //         doc.text(105, 295, page.toString(), 'center')
    //         page += 1;

    //         doc.addPage()
    //         hpage = 10;

    //         doc.rect(10, hpage, 190 * 0.1, 10)
    //         doc.text(10 + ((190 * 0.1) / 2), hpage + (10 / 2), 'costomer', 'center')

    //         doc.rect(10 + (190 * 0.1), hpage, 190 * 0.2, 10)
    //         doc.text(10 + ((190 * 0.1) + (190 * 0.2) / 2), hpage + (10 / 2), 'item', 'center')

    //         doc.rect(10 + ((190 * 0.1) + (190 * 0.2)), hpage, 190 * 0.3, 10)
    //         doc.text(10 + ((190 * 0.1) + (190 * 0.2) + (190 * 0.3) / 2), hpage + (10 / 2), 'price', 'center')

    //         doc.rect(10 + ((190 * 0.1) + (190 * 0.2) + (190 * 0.3)), hpage, 190 * 0.4, 10)
    //         doc.text(10 + ((190 * 0.1) + (190 * 0.2) + (190 * 0.3) + (190 * 0.4) / 2), hpage + (10 / 2), 'product', 'center')


    //         hpage += 10
    //     }
    //     const element = params[index];
    //     if (index % 2 == 0) {
    //         doc.getDrawColor(0 , 0 , 0)
    //         doc.setFillColor(0, 100, 200) 
    //         doc.rect(10, hpage, 190 * 0.1, 10 , 'DF')
    //         doc.text(10 + ((190 * 0.1) / 2), hpage + (10 / 2), element.customer, 'center')

    //         doc.setFillColor(0, 100, 200) 
    //         doc.rect(10 + (190 * 0.1), hpage, 190 * 0.2, 10 , 'DF')
    //         doc.text(10 + ((190 * 0.1) + (190 * 0.2) / 2), hpage + (10 / 2), String(element.item), 'center')

    //         doc.setFillColor(0, 100, 200) 
    //         doc.rect(10 + ((190 * 0.1) + (190 * 0.2)), hpage, 190 * 0.3, 10 , 'DF')
    //         doc.text(10 + ((190 * 0.1) + (190 * 0.2) + (190 * 0.3) / 2), hpage + (10 / 2), String(element.price), 'center')

    //         doc.setFillColor(0, 100, 200) 
    //         doc.rect(10 + ((190 * 0.1) + (190 * 0.2) + (190 * 0.3)), hpage, 190 * 0.4, 10 , 'DF')
    //         doc.text(10 + ((190 * 0.1) + (190 * 0.2) + (190 * 0.3) + (190 * 0.4) / 2), hpage + (10 / 2), element.product, 'center')
    //     }
    //     else {
    //         doc.setFillColor(255, 255, 255)
    //         doc.rect(10, hpage, 190 * 0.1, 10)
    //         doc.text(10 + ((190 * 0.1) / 2), hpage + (10 / 2), element.customer, 'center')

    //         doc.rect(10 + (190 * 0.1), hpage, 190 * 0.2, 10)
    //         doc.text(10 + ((190 * 0.1) + (190 * 0.2) / 2), hpage + (10 / 2), String(element.item), 'center')

    //         doc.rect(10 + ((190 * 0.1) + (190 * 0.2)), hpage, 190 * 0.3, 10)
    //         doc.text(10 + ((190 * 0.1) + (190 * 0.2) + (190 * 0.3) / 2), hpage + (10 / 2), String(element.price), 'center')

    //         doc.rect(10 + ((190 * 0.1) + (190 * 0.2) + (190 * 0.3)), hpage, 190 * 0.4, 10)
    //         doc.text(10 + ((190 * 0.1) + (190 * 0.2) + (190 * 0.3) + (190 * 0.4) / 2), hpage + (10 / 2), element.product, 'center')
    //     }

    //     sum += Number(element.price);
    // }
    // hpage += 10;

    // doc.rect(10 + ((190 * 0.1) + (190 * 0.2)), hpage, 190 * 0.3, 10)
    // doc.text(10 + ((190 * 0.1) + (190 * 0.2) + (190 * 0.3) / 2), hpage + (10 / 2), String(sum), 'center')


    doc.rect(10, hpage, 190 * 0.1, 10)
    doc.text(10, hpage + (190 / 0.1), 'customer')
    doc.rect(10 + (190 * 0.1), hpage, 190 * 0.2, 10)


    hpage += 10
    doc.rect(10 + ((190 * 0.1) + (190 * 0.1) + (190 * 0.1)), hpage, 190 * 0.2, 10)
    doc.text(10 + ((190 * 0.1) + (190 * 0.1) + (190 * 0.1) + (190 * 0.2) / 2), hpage + (10 / 2), String(sum) , 'center')


    doc.rect(10 + ((190 * 0.1) + (190 * 0.1) + (190 * 0.1) + (190 * 0.2) + (190 * 0.2)), hpage, 190 * 0.2, 10)
            doc.text(10 + ((190 * 0.1) + (190 * 0.1) + (190 * 0.1) + (190 * 0.2) + (190 * 0.2) + (190 * 0.2) / 2), hpage + (10 / 2), String(Number(total_Sum.toString()) / customers.length), 'center')
    // for (let index = 0; index < params.length; index++) {
    //     const element = params[index];
    //     console.log(element);  
    // }


    window.open(doc.output('bloburl'))



}
export default Examplereport;