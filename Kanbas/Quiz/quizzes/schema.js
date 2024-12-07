import mongoose from "mongoose";

const quizSchema = new mongoose.Schema({
    _id: String,
    title: String,
    description: String,
    publish: Boolean,
    multipleAttempts: Boolean,
    attempts: Number,
    assignmentGroup: String,
    quizType: {
      type: String,
      enum: ["Graded Quiz", "Practice Quiz", "Graded Survey", "Ungraded Survey"],
      default: "Graded Quiz",
    },
    AssignmentGroup:{
      type: String,
      enum: ["Quizzes", "Exams", "Assignments", "Project"],
      default: "Quizzes", 
    },
    availableDate: String,
    availableUntilDate: String,
    dueDate: String,
    points: Number,
    numberOfQuestions: Number,
    timeLimit: Number,
    courseId: String,
    shuffleAnswers: Boolean,
  },
  { collection: "quizzes" }
);
export default quizSchema;