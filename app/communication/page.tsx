"use client";
import { useState } from "react";
import Link from "next/link";
import {
  MessageSquare,
  CheckCircle2,
  XCircle,
  RotateCcw,
  Send,
  HelpCircle,
  ArrowLeft,
  Award,
} from "lucide-react";

interface Question {
  id: number;
  topic: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

const grammarQuestions: Question[] = [
  {
    id: 1,
    topic: "Subject-Verb Agreement",
    question: "Each of the candidates ___ submitted a portfolio before the evaluation deadline.",
    options: ["has", "have", "are", "were"],
    correctIndex: 0,
    explanation:
      "The indefinite pronoun 'Each' is grammatically singular and requires the singular auxiliary verb 'has', regardless of the plural noun 'candidates' in the prepositional phrase.",
  },
  {
    id: 2,
    topic: "Professional Sentence Correction",
    question: "Choose the clearest and most professional workplace sentence.",
    options: [
      "Please submit the quarterly progress report by Friday at 5:00 PM.",
      "Send report fast Friday afternoon.",
      "You must sending report on Friday.",
      "Report should been send on Friday by you.",
    ],
    correctIndex: 0,
    explanation:
      "Option A uses a polite professional imperative, correct active prepositional timing, and grammatically complete phrasing.",
  },
  {
    id: 3,
    topic: "Conditional Tenses",
    question: "If our development team ___ the code review yesterday, the production build would have deployed smoothly.",
    options: [
      "had finished",
      "finished",
      "has finished",
      "would finish",
    ],
    correctIndex: 0,
    explanation:
      "In a third conditional sentence expressing an unreal past event, the 'if' clause requires the past perfect tense ('had finished').",
  },
  {
    id: 4,
    topic: "Prepositional Collocations",
    question: "The technical lead commended the team ___ complying ___ the new code quality guidelines.",
    options: [
      "for / with",
      "on / to",
      "about / of",
      "with / by",
    ],
    correctIndex: 0,
    explanation:
      "The standard English idioms are 'commended someone for something' and 'comply with a standard or policy'.",
  },
  {
    id: 5,
    topic: "Active vs. Passive Voice",
    question: "Identify the sentence that communicates the achievement in direct, active voice.",
    options: [
      "The quality assurance engineer discovered a critical memory leak in the test runner.",
      "A critical memory leak in the test runner was discovered by the quality assurance engineer.",
      "A critical memory leak has been discovered in the test runner.",
      "Discovery of a critical memory leak was made by the quality assurance engineer.",
    ],
    correctIndex: 0,
    explanation:
      "In active voice, the subject ('quality assurance engineer') directly performs the action ('discovered'), creating concise and authoritative communication.",
  },
];

export default function CommunicationPage() {
  const [selectedAnswers, setSelectedAnswers] = useState<{ [id: number]: number }>({});
  const [submitted, setSubmitted] = useState(false);

  const handleSelect = (questionId: number, optionIdx: number) => {
    if (submitted) return; // Prevent changing after submit
    setSelectedAnswers({
      ...selectedAnswers,
      [questionId]: optionIdx,
    });
  };

  const calculateScore = () => {
    let score = 0;
    grammarQuestions.forEach((q) => {
      if (selectedAnswers[q.id] === q.correctIndex) {
        score++;
      }
    });
    return score;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (Object.keys(selectedAnswers).length < grammarQuestions.length) {
      if (
        !confirm(
          `You have answered ${Object.keys(selectedAnswers).length} of ${grammarQuestions.length} questions. Do you want to submit anyway?`
        )
      ) {
        return;
      }
    }
    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleReset = () => {
    setSelectedAnswers({});
    setSubmitted(false);
  };

  const score = calculateScore();
  const total = grammarQuestions.length;
  const percentage = Math.round((score / total) * 100);

  return (
    <>
      {/* Page Heading */}
      <div className="page-heading">
        <div>
          <div className="eyebrow">COMMUNICATION ASSESSMENT</div>
          <h1>Business English & Grammar MCQs</h1>
          <p>
            Capgemini Exceller placement test simulation: 5 essential grammar and professional phrasing questions.
          </p>
        </div>
        <Link href="/" className="button outline small">
          <ArrowLeft size={16} />
          Back to Dashboard
        </Link>
      </div>

      {/* Score Banner (Shown after submission) */}
      {submitted && (
        <section
          className="panel"
          style={{
            marginBottom: "24px",
            background: percentage >= 70 ? "#edf8f2" : "#fff8e6",
            borderColor: percentage >= 70 ? "#9fd6bd" : "#f0d080",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: "16px",
            }}
          >
            <div>
              <span
                className={`tag ${percentage >= 70 ? "green" : "amber"}`}
                style={{ marginBottom: "8px", display: "inline-block" }}
              >
                {percentage >= 70 ? "QUALIFIED BENCHMARK" : "PRACTICE RECOMMENDED"}
              </span>
              <h2 style={{ margin: "4px 0", color: percentage >= 70 ? "#268866" : "#b45309" }}>
                Assessment Score: {score} / {total} ({percentage}%)
              </h2>
              <p style={{ margin: 0, color: "var(--muted)" }}>
                {percentage >= 70
                  ? "Great job! You have satisfied the 70% communication qualification benchmark."
                  : "Review the question explanations below to strengthen your grammar rules."}
              </p>
            </div>
            <button onClick={handleReset} className="button secondary">
              <RotateCcw size={16} />
              Retake Assessment
            </button>
          </div>
        </section>
      )}

      {/* Form with 5 Questions */}
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
        {grammarQuestions.map((q, qIndex) => {
          const userChoice = selectedAnswers[q.id];
          const isAnswered = userChoice !== undefined;
          const isCorrect = userChoice === q.correctIndex;

          return (
            <div key={q.id} className="panel question-card">
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginBottom: "12px",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <span className="tag blue">{q.topic}</span>
                  <span style={{ fontSize: "var(--font-small)", color: "var(--muted)" }}>
                    Question {qIndex + 1} of {total}
                  </span>
                </div>

                {submitted && (
                  <span
                    className={`tag ${isCorrect ? "green" : "red"}`}
                    style={{ fontWeight: "bold" }}
                  >
                    {isCorrect ? "✓ Correct" : "✗ Incorrect"}
                  </span>
                )}
              </div>

              <h2 style={{ fontSize: "var(--font-ui)", fontWeight: 600, margin: "14px 0" }}>
                {q.question}
              </h2>

              {/* 4 Options per Question */}
              <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginTop: "16px" }}>
                {q.options.map((optText, optIdx) => {
                  const isSelected = userChoice === optIdx;
                  const isThisCorrect = optIdx === q.correctIndex;

                  let optionClass = "answer-option";
                  if (submitted) {
                    if (isThisCorrect) {
                      optionClass += " correct";
                    } else if (isSelected && !isThisCorrect) {
                      optionClass += " wrong";
                    }
                  } else if (isSelected) {
                    optionClass += " selected";
                  }

                  const letter = String.fromCharCode(65 + optIdx); // A, B, C, D

                  return (
                    <label
                      key={optIdx}
                      className={optionClass}
                      style={{ cursor: submitted ? "default" : "pointer" }}
                      onClick={() => handleSelect(q.id, optIdx)}
                    >
                      <input
                        type="radio"
                        name={`question-${q.id}`}
                        checked={isSelected}
                        disabled={submitted}
                        onChange={() => handleSelect(q.id, optIdx)}
                      />
                      <span className="option-letter">{letter}</span>
                      <span>{optText}</span>
                      {submitted && isThisCorrect && (
                        <CheckCircle2 size={18} style={{ color: "var(--green)", marginLeft: "auto" }} />
                      )}
                      {submitted && isSelected && !isThisCorrect && (
                        <XCircle size={18} style={{ color: "var(--danger)", marginLeft: "auto" }} />
                      )}
                    </label>
                  );
                })}
              </div>

              {/* Explanation (Shown when submitted) */}
              {submitted && (
                <div
                  className="callout"
                  style={{
                    marginTop: "16px",
                    background: "var(--bg)",
                    borderLeft: "4px solid var(--blue)",
                    padding: "12px 16px",
                  }}
                >
                  <strong style={{ display: "block", marginBottom: "4px", color: "var(--text)" }}>
                    Grammar Rule & Explanation:
                  </strong>
                  <p style={{ margin: 0, fontSize: "var(--font-small)", color: "var(--text)" }}>
                    {q.explanation}
                  </p>
                </div>
              )}
            </div>
          );
        })}

        {/* Bottom Submission Controls */}
        <div
          className="panel"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "12px",
            padding: "16px 24px",
          }}
        >
          <div style={{ fontSize: "var(--font-small)", color: "var(--muted)" }}>
            {submitted ? (
              <span>Evaluation completed. Review your score above.</span>
            ) : (
              <span>
                Answered: <strong>{Object.keys(selectedAnswers).length}</strong> of {total} questions
              </span>
            )}
          </div>

          <div style={{ display: "flex", gap: "10px" }}>
            {submitted ? (
              <button type="button" onClick={handleReset} className="button secondary">
                <RotateCcw size={16} />
                Reset & Try Again
              </button>
            ) : (
              <button type="submit" className="button primary">
                <Send size={16} />
                Submit Assessment
              </button>
            )}
          </div>
        </div>
      </form>
    </>
  );
}

