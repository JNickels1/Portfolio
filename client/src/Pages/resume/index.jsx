// import React from "react";
// import { useState } from "react";
// import { Document, Page, Text, StyleSheet } from "@react-pdf/renderer";



// const myPdf = 'client/public/resume.pdf'

// const style = StyleSheet.create({
//   body: {
//     paddingTop: 35,
//     paddingBottom: 65,
//     paddingHorizontal: 35,
//   },
//   title: {
//     fontSize: 24,
//     textAlign: 'center',
//   },
//   text: {
//     margin: 32,
//     fontSize: 14,
//     textAlign: 'justify',
//     fontFamily: 'Times-Roman',
//   },
//   header:{
//     fontSize: 12,
//     marginBottom: 20,
//     textAlign: 'center',
//     color: 'grey',
//   },
//   pageNumber:{
//     position: 'absolute',
//     fontSize: 12,
//     bottom:  30,
//     left: 0,
//     right: 0,
//     textAlign: 'center',
//     color: 'grey',
//   },
// });

// const MyResume = () => {
//   // const [numOfPages, setNumOfPages] = useState(1);
//   // const [pageNum, setPageNum] = useState(1);

//   // function openPdf({ numOfPages }) {
//   //   setNumOfPages(numOfPages);
//   // }

//   <Document file={myPdf}>
//     <Page style={style.body}>
//       <Text style={style.header} fixed></Text>
//       <Text style={style.text}></Text>
//     </Page>

//   </Document>
//   {/* <iframe src="client/public/resume.pdf" frameBorder="0" width='100%' height='500px' /> */ }
// };

// export default MyResume;