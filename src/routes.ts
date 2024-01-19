import { Request, Response } from "express";
import CreateCourseService from "./CreateCourseService"

export function createCourse(req: Request, res: Response){
    CreateCourseService.execute({name:"Node Js",duration: 10 , educator:"Victor"})

    return res.send()
}