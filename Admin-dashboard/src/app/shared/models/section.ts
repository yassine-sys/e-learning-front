import { Chapter } from "./chapter";
import { Course } from "./Course";

export class Section {
    SectionID:number;
    title:string;
    Description:string;
    CourseID:string;
    ChapterID:string;
    chapter:Chapter;
    course: Course;

}
