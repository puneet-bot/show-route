var express     =require('express'),
methodOverride  =require('method-override'),
    app         =express(),
    mongoose    =require('mongoose');
    app=express(),
    seedDB=require('./seeds'),
    seedDB();
app.set("view engine","ejs");

app.use('/static', express.static('public'));
app.use(methodOverride("_method"));
var BodyParser=require('body-parser');

app.use(BodyParser.urlencoded( { extended:true } ));

mongoose.connect("mongodb://localhost/yelpcamp" ,{useNewUrlParser: true, useUnifiedTopology: true});


var newcamp= require("./models/camground"),
    Comment=require("./models/Comment");



app.get("/",function(req,res){
    res.redirect("/campgrounds");
});



app.get("/yelpcamp",function(req,res){
    res.redirect("/campgrounds");
});

app.get("/campgrounds",function(req,res){
    newcamp.find({},function(err,camp)
    {
        if(err)
            console.log(err);
        else
        res.render("index",{campground:camp});
    }) ;
});

app.post("/campgrounds",function(req,res){
    var name=req.body.name;
    var image=req.body.image;
    var desc=req.body.description;
    var object_camp={name:name,image:image,description:desc};

        newcamp.create(object_camp, function(err,newcamp){
        if(err)
            console.log(err)
        else
        res.redirect("/campgrounds");
    });
   
});

app.get("/campgrounds/new",function(req,res){
    res.render("new");
});

app.get("/campgrounds/:id"),function(req,res){
    newcamp.findById(req.params.id).populate("comments").exec(function(err,foundcamp){
        if(err)
            console.log(err);
        else
        {
            console.log(foundcamp);
            res.render("show",{campground: foundcamp});
        }
    });
}

app.listen(3000,function(){
    console.log("waheguru");
});