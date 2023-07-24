let tableaux=
[
    {
        "id_tab":"1",
        "name_tab":"Migration",
        "dim_tab":"61x50",
        "date_tab":"Hule sur toile",
        "tab_img":"../tableaux/1.jpg"
    },
    {
        "id_tab":"2",
        "name_tab":"Maître tibétain",
        "dim_tab":"50x61",
        "date_tab":"Huile sur toile",
        "tab_img":"../tableaux/1bis.jpg"
    },
    {
        "id_tab":"3",
        "name_tab":"Automne",
        "dim_tab":"61x50",
        "date_tab":"Huile sur toile",
        "tab_img":"../tableaux/2.jpg"
    },
    {
        "id_tab":"4",
        "name_tab":"Printemps",
        "dim_tab":"61x50",
        "date_tab":"Huile sur toile",
        "tab_img":"../tableaux/3.jpg"
    },
    {
        "id_tab":"5",
        "name_tab":"Hiver",
        "dim_tab":"61x50",
        "date_tab":"Huile sur toile",
        "tab_img":"../tableaux/4.jpg"
    },
    {
        "id_tab":"6",
        "name_tab":"Été",
        "dim_tab":"61x50",
        "date_tab":"Huile sur toile",
        "tab_img":"../tableaux/5.jpg"
    },
    {
        "id_tab":"7",
        "name_tab":"Dieu créa la femme",
        "dim_tab":"60x81",
        "date_tab":"Huile sur toile",
        "tab_img":"../tableaux/6.jpg"
    },
    {
        "id_tab":"8",
        "name_tab":"Le créateur",
        "dim_tab":"93x67",
        "date_tab":"Huile sur bois",
        "tab_img":"../tableaux/7.jpg"
    },
    {
        "id_tab":"9",
        "name_tab":"Dieu créa l'homme",
        "dim_tab":"60x81",
        "date_tab":"Huile sur toile",
        "tab_img":"../tableaux/8.jpg"
    },
    {
        "id_tab":"10",
        "name_tab":"La soumission",
        "dim_tab":"41x33",
        "date_tab":"Huile sur toile",
        "tab_img":"../tableaux/9.jpg"
    },
    {
        "id_tab":"11",
        "name_tab":"Tête de cheval à la crinière d'or",
        "dim_tab":"49x54",
        "date_tab":"Huile sur bois",
        "tab_img":"../tableaux/10.jpg"
    }
];


function load_alt_page(tab_id){

    localStorage.setItem('id_tab',JSON.stringify(tableaux[tab_id].id_tab));
    localStorage.setItem('name_tab',JSON.stringify(tableaux[tab_id].name_tab));
    localStorage.setItem('dim_tab',JSON.stringify(tableaux[tab_id].dim_tab));
    localStorage.setItem('date_tab',JSON.stringify(tableaux[tab_id].date_tab));
    localStorage.setItem('tab_img', JSON.stringify(tableaux[tab_id].tab_img));
    window.location = "./alt_page.html";
}