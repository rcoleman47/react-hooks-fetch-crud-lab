import React from "react";
import QuestionItem from "./QuestionItem";

function QuestionList({questions, onHandleDelete, onHandleUpdateAnswer}) {
  
  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{questions.map(question => <QuestionItem onHandleUpdateAnswer={onHandleUpdateAnswer} onHandleDelete={onHandleDelete} key={question.id} question={question} />)}</ul>
    </section>
  );
}

export default QuestionList;
