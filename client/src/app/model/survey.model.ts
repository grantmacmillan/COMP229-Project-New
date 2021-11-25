import { Injectable } from "@angular/core";
import { Questionnaire } from "./questionnaire.model";

@Injectable()
export class Survey
{
    public _id: number;
    public title: string;
    public category: string;
    public name: string;
    public address: string;
    public city: string;
    public province: string;
    public postalCode: string;
    public country: string;
    public description: string;
    public activatesIn: number;
    public deactivatesIn: number;

    constructor(public questionnaire: Questionnaire) {}
        
    clear(): void
    {
        this._id = null;
        this.title = this.category = this.description = null;
        this.name = this.address = this.city = this.province = this.postalCode = this.country = null;
        this.activatesIn = this.deactivatesIn = null;
        //this.questionnaire.clear();
    }

    public toString(): string
    {
        return `Survey
        -------------------------
        Title        : ${this.title}
        Cat : ${this.category}
        Questionnaire: ${this.questionnaire}
        -------------------------
        `;
    }
}