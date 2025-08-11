export interface SerieResponse{
    total_count : number;
    info : string;
    data : Serie[];
}

export interface Serie{
    id : string;
    firstName : string;
    lastName : string;
    fullName : string;
    title : string;
    family : string;
    image : string;
    imageUrl : string;
}