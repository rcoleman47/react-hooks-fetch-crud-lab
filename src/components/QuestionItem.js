import React from "react";

function QuestionItem({ question, onHandleDelete, onHandleUpdateAnswer }) {
  const { id, prompt, answers, correctIndex } = question;

  const handleDeleteClick = () =>{
    fetch(`http://localhost:4000/questions/${question.id}`,{
      method: 'DELETE',
    })
    .then(r=>r.json())
    .then(()=>onHandleDelete(question))
  }

  const handleAnswerChange = (e) => {
    const newAnswerIndex = e.target.value
    fetch(`http://localhost:4000/questions/${question.id}`,{
      method: "PATCH",
      headers: {
        "content-type": 'application/json'
      },
      body: JSON.stringify({
          correctIndex: newAnswerIndex,
        }),
    })
    .then(r=>r.json())
    .then(updateA => onHandleUpdateAnswer(updateA))

    console.log(e.target.value)
  }

  const options = answers.map((answer, index) => (
    <option key={index} value={index}>
      {answer}
    </option>
  ));

  return (
    <li>
      <h4>Question {id}</h4>
      <h5>Prompt: {prompt}</h5>
      <label>
        Correct Answer:
        <select onChange={handleAnswerChange} defaultValue={correctIndex}>{options}</select>
      </label>
      <button onClick={handleDeleteClick}>Delete Question</button>
    </li>
  );
}

export default QuestionItem;
