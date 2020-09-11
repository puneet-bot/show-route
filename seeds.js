var mongoose=require('mongoose');

var Campground= require("./models/camground");
var Comment= require("./models/Comment");
var data=[
    {
        name:"Everest",
        image:"https://static01.nyt.com/images/2019/06/02/world/02everest/merlin_138579441_fd4730ed-a8b8-4eb7-802c-800c436cd82a-articleLarge.jpg?quality=75&auto=webp&disable=upscale",
        description:"The most beautiful area but really dangerous to climb at peak!! Be safe!!"
    },
    {
        name:"Trilochana ",
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRVapwrFyc0e7nqi6V9bbUSn_Ab74-eMt_KzA&usqp=CAU",
        //image:"https://static01.nyt.com/images/2019/06/02/world/02everest/merlin_138579441_fd4730ed-a8b8-4eb7-802c-800c436cd82a-articleLarge.jpg?quality=75&auto=webp&disable=upscale",
        description:"The most beautiful area but really dangerous to climb at peak!! Be safe!!"
    },
    {
        name:"Kolthare",
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSotV2nE3ScBj6yJu_lfe3xxSv1s0e2p5Jtgg&usqp=CAU",
        //image:"https://static01.nyt.com/images/2019/06/02/world/02everest/merlin_138579441_fd4730ed-a8b8-4eb7-802c-800c436cd82a-articleLarge.jpg?quality=75&auto=webp&disable=upscale",
        description:"The most beautiful area but really dangerous to climb at peak!! Be safe!!"
    }
];
function seedDB(){
    Campground.remove(data,function(err){
        if(err)
            console.log(err);
        else    
            console.log("Deleted data");
    });
    data.forEach(function(seed){
            Campground.create(seed,function(err,data){
        if(err)
            console.log(err);
        else    
            console.log(data);
    });
    Comment.create({
        text:"this is really amazing",
        author:"Mark"
    },function(err,comment){
        if(err)
            console.log(err);
        else
            {
                // console.log(comment);
                Campground.comments.push(comment);
                Campground.save();
            }
    });
});
module.exports= mongoose.model(seedDB());

    };
   

