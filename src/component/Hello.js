// import React, { useEffect } from 'react'

// function Hello() {

//     // useEffect(() => {
//     //  document.getElementById("print_screen").print();   
//     // })
//     const printPage = () => {
//         // let btn = document.getElementById("print_screen").innerHTML;

//         var divToPrint = document.getElementById('print_screen');
//         var newWin = window.open('', 'Print-Window');
//         newWin.document.open();
//         newWin.document.write(window.data);
//         // newWin.document.close();
//         // '<html><body onload="window.print()">' + divToPrint.innerHTML + '</body></html>'
//         // setTimeout(function () { newWin.close(); }, 10);
//         // btn.window.print();
//     }

//     const downloadPdf = () => {
//         // const base64 = require('base64topdf');
//         // let encodedPdf = base64.base64Encode('hello');
//         // let decodedBase64 = base64.base64Decode(encodedPdf, 'PdfFileNameToWrite');
//     }

//     return (
//         <div>
//             Hello
//             <div id='print_screen'>
//                 {window.data}
//             </div>
//             <button onClick={printPage} className="bg-teal-400 px-4 py-2 my-2">print</button>

//             <br />

//             <button onClick={()=>downloadPdf(window.data, 'myfilename.pdf', 'application/pdf')}  className='bg-indigo-600 my-2'> 1. create</button> <br />

//             <a href="" id="a" className='bg-indigo-400 px-4 py-1'> 2. download </a><br />
           


//         </div>
//     )
// }

// export default Hello