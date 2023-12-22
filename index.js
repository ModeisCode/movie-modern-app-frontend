

var movie_menu = document.getElementById("movie-menu");




var movies = {

    johnwick4:{
        name: "john wick 4",
        like: 5275,
        img: "johnwick4.jpg",
        type: "action",
        watched: 45011,
        popcorn: 1200
    },
    

};


generate_movie_card(movies["johnwick4"]);



function generate_movie_card(movie) {
    var card_div = document.createElement("div");
    card_div.classList.add("card");
    card_div.classList.add("bg-light");
    
    var card_header_div = document.createElement("div");
    card_header_div.classList.add("card-header");
    card_header_div.classList.add("text-center");

    var movie_header = document.createElement("h3");
    movie_header.appendChild(document.createTextNode(movie["name"]));

    var card_body_div = document.createElement("div");
    card_body_div.classList.add("card-body");

    var movie_image = document.createElement("img");
    movie_image.src = "movie-images/action/" + movie["img"];
    movie_image.classList.add("movie-img");

    var movie_description = document.createElement("p");
    var description = movie["popcorn"] + "🍿," + "watched: " + movie["watched"];
    movie_description.appendChild(document.createTextNode(description));

    var card_footer_div = document.createElement("div");
    card_footer_div.classList.add("card-footer");

    var watch_button = document.createElement("button");
    watch_button.classList.add("btn");
    watch_button.classList.add("btn-outline-info");
    watch_button.innerHTML = "Watch Now";

    var info_button = document.createElement("button");
    info_button.classList.add("btn");
    info_button.classList.add("btn-outline-warning");
    info_button.innerHTML = "Info";

    var like_button = document.createElement("a");
    like_button.classList.add("like");
    like_button.innerHTML = `<span class="material-symbols-outlined">
    favorite
    </span>`;

    card_footer_div.appendChild(watch_button);
    card_footer_div.appendChild(info_button);
    card_footer_div.appendChild(like_button);

    card_body_div.appendChild(movie_image);
    card_body_div.appendChild(movie_description);
    card_header_div.appendChild(movie_header);

    card_div.appendChild(card_header_div);
    card_div.appendChild(card_body_div);
    card_div.appendChild(card_footer_div);

    movie_menu.appendChild(card_div);
}