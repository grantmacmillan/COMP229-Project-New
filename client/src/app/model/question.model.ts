export class Question
{
    constructor(
        public _id?: number,
        public title?: string,
        public choice1?: string,
        public choice2?: string,
        public choice3?: string,
        public choice4?: string
    ){}

    public toString(): string
    {
        return `Question
        -------------------------
        Title        : ${this.title}
        Choice 1     : ${this.choice1}
        -------------------------
        `;
    }
}


