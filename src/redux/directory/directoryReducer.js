const INITIAL_STATE={
    sections:[{
        title:"Hats",
        imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
        id: "1",
        linkUrl:"shop/hats"
    },
    {
        title:"Jackets",
        imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
        id: "2",
        linkUrl:"shop/jackets"
    },
    {
        title:"Sneakers",
        imageUrl: "https://i.ibb.co/0jqHpnp/sneaker.png",
        id: "3",
        linkUrl:"shop/sneakers"
    },
    {
        title:"Women",
        imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
        id: "4",
        size:"large",
        linkUrl:"shop/women"
    },
    {
        title:"Men",
        imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
        id: "5",
        size:"large",
        linkUrl:"shop/men"
    }]
};

export const directoryReducer=(state=INITIAL_STATE,action)=>{
    switch(action.type){
        default:
            return state;
    }
}
