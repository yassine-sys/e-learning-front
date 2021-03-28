import { Questions } from "app/quiz-pass/questions.model";

export class Examen {
    ExamID:any
    CourseID : string;
    Title: string;
    Questions : Questions[];
    Creatorid : string;
}
