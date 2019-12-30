export class Film {
    title: string;
    description: string;
    releaseYear: number;
    rating: string;
    replacementCost: string;

    constructor(title:string,description:string,releaseYear:number, rating:string, replacementCost:string){
        this.title = title;
        this.description = description;
        this.releaseYear = releaseYear;
        this.rating = rating;
        this.replacementCost = replacementCost;
    }
}
