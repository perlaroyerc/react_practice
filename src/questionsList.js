// import React, {useState, useEffect} from 'react';

// const QUESTIONS_API_BASE_URL = 'https://api.frontendexpert.io/api/fe/questions';
// const SUBMISSIONS_API_BASE_URL = 'https://api.frontendexpert.io/api/fe/submissions';

// export default function QuestionList() {
//   // Write your code here.

//   const [questions, setQuestions] = useState([]);
//   const [submissions, setSubmissions] = useState([]);
//   const questionResponse = null;
//   const submissionsResponse = null;


//   useEffect(() => {
//     const fetchData = async() => {
//        [questionResponse, submissionResponse] = await Promise.all([
//          fetch(QUESTIONS_API_BASE_URL),
//          fetch(SUBMISSIONS_API_BASE_URL),   
//       ]);
//       const [questionResponse, submissionResponse] = await Promise.all([
//          questionResponse.json(),
//          submissionResponse.json(),   
//       ]);

//       setQuestions(questionResponse);
//       setSubmissions(submissionResponse);
//     }
  
//     fetchData();
 
//   }, []);

  
  

//   // if(!questions) return <div>Loading...</div>
  
//   return (
//     <>
//       <fr>
//         <div className="category">{}</div>
//         <h2></h2>
        
//       </fr>
//     </>
//   );
// }

