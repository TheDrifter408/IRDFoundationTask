export type hadithType = {
    hadith_id:number;
    section_id:number;
    narrator:string;
    bn:string;
    ar:string;
    ar_diacless:string;
    number:string;
    title:string;
    preface:string;
    grade:string;
    grade_color:string;
}

export type sectionType = {
    id:number;
    book_name:string;
    chapter_id:number;
    section_id:number;
    title:string;
    preface:string;
    number:string;
}

export type bookType = {
    id:number;
    title:string;
    title_ar:string;
    number_of_hadis:number;
    abvr_code:string;
    book_name:string;
    book_descr:string;
}

export type chapterType = {
    id:number;
    title:string;
    number:string;
    hadis_range:string;
    book_name:string;
}