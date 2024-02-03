import { Task } from "./task"
import { User } from "./user"

export class Project {
    id! : number
title !: string
description! : string
tasks !: Task []
users !: User []

}
