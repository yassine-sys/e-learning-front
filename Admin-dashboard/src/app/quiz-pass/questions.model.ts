import { Quizzes } from "./quizzes.model";
import { Options } from "./options.model";
import Exam from "app/shared/models/Exam";

export class Questions {
    QuesID : string;
    QuesText : string;
    Quizzes : Quizzes[];
   // Exams : Exam[];
    Options : Options[];
    //Answers : Answer[];
    types : string;
    answered: boolean;
}
