import { Gallery } from "./Gallery"

export interface Orginals {
    id : number,
    title : string,
    description : string,
    dimensions : string,
    giclee : boolean,
    imageUrl : string,
    price : string,
    link : string,
    gallery: Gallery
}


