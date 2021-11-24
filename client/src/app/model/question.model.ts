export class Question
{
    constructor(
        public _id?: number,
        public title?: string,
        public rightAnswer?: string
    ){}

    public toString(): string
    {
        return `Question
        -------------------------
        Title        : ${this.title}
        Right Answer : ${this.rightAnswer}
        -------------------------
        `;
    }
}


