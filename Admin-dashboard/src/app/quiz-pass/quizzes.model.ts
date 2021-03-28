import Question from "app/shared/models/Question";
import { QuizConfig } from "./QuizConfig";
import { Questions } from "./questions.model";

export class Quizzes {
    QuizID: string ;
    CourseID : string;
    Title: string;
    Questions : Questions[];
    Creatorid : string;

}
