let tableaux=
[
    {
        "id_tab":"1",
        "name_tab":"asiatique",
        "dim_tab":"PLACEHOLDER",
        "date_tab":"PLACEHOLDER",
        "tab_img":"../tableaux/1.jpg"
    },
    {
        "id_tab":"2",
        "name_tab":"rouge",
        "dim_tab":"PLACEHOLDER",
        "date_tab":"PLACEHOLDER",
        "tab_img":"../tableaux/1bis.jpg"
    },
    {
        "id_tab":"3",
        "name_tab":"automne",
        "dim_tab":"PLACEHOLDER",
        "date_tab":"PLACEHOLDER",
        "tab_img":"../tableaux/2.jpg"
    },
    {
        "id_tab":"4",
        "name_tab":"printemps",
        "dim_tab":"PLACEHOLDER",
        "date_tab":"PLACEHOLDER",
        "tab_img":"../tableaux/3.jpg"
    },
    {
        "id_tab":"5",
        "name_tab":"hiver",
        "dim_tab":"PLACEHOLDER",
        "date_tab":"PLACEHOLDER",
        "tab_img":"../tableaux/4.jpg"
    },
    {
        "id_tab":"6",
        "name_tab":"été",
        "dim_tab":"PLACEHOLDER",
        "date_tab":"PLACEHOLDER",
        "tab_img":"../tableaux/5.jpg"
    },
    {
        "id_tab":"7",
        "name_tab":"dieufemme",
        "dim_tab":"PLACEHOLDER",
        "date_tab":"PLACEHOLDER",
        "tab_img":"../tableaux/6.jpg"
    },
    {
        "id_tab":"8",
        "name_tab":"createur",
        "dim_tab":"PLACEHOLDER",
        "date_tab":"PLACEHOLDER",
        "tab_img":"../tableaux/7.jpg"
    },
    {
        "id_tab":"9",
        "name_tab":"dieuhomme",
        "dim_tab":"PLACEHOLDER",
        "date_tab":"PLACEHOLDER",
        "tab_img":"../tableaux/8.jpg"
    },
    {
        "id_tab":"10",
        "name_tab":"soumission",
        "dim_tab":"PLACEHOLDER",
        "date_tab":"PLACEHOLDER",
        "tab_img":"../tableaux/9.jpg"
    },
    {
        "id_tab":"11",
        "name_tab":"cheval",
        "dim_tab":"PLACEHOLDER",
        "date_tab":"PLACEHOLDER",
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