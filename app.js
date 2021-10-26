new Vue({
  el: "#destiny-app",
  data: {
    cards: [
      {
        name: "Rey",
        rarity: false,
        setNumber: 100,
        affl: "hero",
        color: "blue",
        health: 10,
        img: "https://swdestinydb.com/bundles/cards/en/01/01038.jpg",
      },
      {
        name: "Han Solo",
        rarity: true,
        setNumber: 36,
        affl: "hero",
        color: "yellow",
        health: 10,
        img: "http://images-cdn.fantasyflightgames.com/filer_public/3b/15/3b1513ab-1bf2-46f9-93ec-9fb0246e567b/sws17_main.png",
      },
      {
        name: "General Grievous",
        rarity: true,
        setNumber: 50,
        affl: "villain",
        color: "red",
        health: 13,
        img: "https://i.pinimg.com/originals/67/fe/ca/67feca5ed7040713e386d568860701a8.jpg",
      },
      {
        name: "Darth Vader",
        rarity: false,
        setNumber: 5,
        affl: "villain",
        color: "blue",
        health: 11,
        img: "http://images-cdn.fantasyflightgames.com/filer_public/70/2d/702dba51-4b9f-46db-ad74-36216b9fdbe9/swd13_preview2.jpg",
      },
    ],
  },
});
