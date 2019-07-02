
function userLanguages(){
    var users = [
        {
            fname: "Kermit",
            lname: "the Frog",
            languages: ["Python", "JavaScript", "C#", "HTML", "CSS", "SQL"],
            interests: {
                music: ["guitar", "flute"],
                dance: ["tap", "salsa"],
                television: ["Black Mirror", "Stranger Things"]
            }
        },
        {
            fname: "Winnie",
            lname: "the Pooh",
            languages: ["Python", "Swift", "Java"],
            interests: {
                food: ["honey", "honeycomb"],
                flowers: ["honeysuckle"],
                mysteries: ["Heffalumps"]
            }
        },
        {
            fname: "Arthur",
            lname: "Dent",
            languages: ["JavaScript", "HTML", "Go"],
            interests: {
                space: ["stars", "planets", "improbability"],
                home: ["tea", "yellow bulldozers"]
            }
        }
    ]
    
    for(var user of users){
        var languagesStr="";
        for(var lang=0; lang<user.languages.length; lang++){
            if(lang== user.languages.length-1){
                languagesStr += "and "  +user.languages[lang];
            }
            else{
                languagesStr += user.languages[lang] + ", " ; 
            }
            
        }
        console.log(user.fname +" " + user.lname + " " + languagesStr );
        //console.log(user.interests);
        //console.log(user.languages.length)
    }
    
}
console.log(userLanguages());