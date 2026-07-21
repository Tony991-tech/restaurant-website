const cards =
document.querySelectorAll(".card");

cards.forEach((card)=>{
    card.addEventlistener=("mouseenter",()=>{
        card.style.transform="scale(1.1)";
    });

    card.addEventlistener("mouseleave",()=>{
        card.style.transform="scale(1.1)";
    });
});