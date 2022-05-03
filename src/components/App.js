import React, { useState, useEffect } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {
  const [page, setPage] = useState("List");
  const [questions, setQuestions] = useState([])

  const handleNewQ = (newQ) =>{
    setQuestions([...questions, newQ])
  }

  const handleDelete = (qToDelete) => {
    const deletedQ = questions.filter(question => question.id !== qToDelete.id)
    setQuestions(deletedQ)
  }

  const handleUpdateAnswer = (updateQ) => {
    const updatedQ = questions.map(question => {
      if(question.id === updateQ.id){
        return updateQ
      } else {return question}
    })
    setQuestions(updatedQ)
  }

  useEffect(()=>{
    fetch("http://localhost:4000/questions")
    .then(r=>r.json())
    .then(q=>setQuestions(q))
  }, [])


  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? <QuestionForm onHandleNewQ={handleNewQ} /> : <QuestionList questions={questions} onHandleDelete={handleDelete} onHandleUpdateAnswer={handleUpdateAnswer} />}
    </main>
  );
}

export default App;
