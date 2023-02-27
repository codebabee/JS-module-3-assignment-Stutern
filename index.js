// create a constructor function for instagram post
const userOne = new InstagramPost("@michael27", 'Good morning followers', "https://www.pexels.com/photo/green-and-blue-peacock-feather-674010/", 
24, 17);
const userTwo = new InstagramPost("@quennbella", 'Nigeria elections ooooo', "https://www.pexels.com/photo/green-and-blue-peacock-feather-674010/", 
100, 92);

function InstagramPost(handle, content, imageLink, views, likes){  
       
        this.handleOfAuthor = handle;
        this.content = content;
        this.imageLink = imageLink;
        this.noOfViews = views;
        this.noOfLikes = likes;
            console.log(this)
}
console.log(userOne);
console.log(userTwo);

// factory function for Musa Dawodu and his jamb results

function createPerson(name, age, location){
    return {
        name: name,
        age : age,
        location: location
    }
}
 const person = createPerson("Musa Dawodu", 19, "Lekki, Lagos State");

function createJambScores(english, govt, lit, crk ){
    return {
        English: english,
        Government: govt,
        Literature: lit,
        CRK: crk
    }
}
const jambScores = createJambScores(70, 85, 82, 94);

console.log(person);
console.log(jambScores);




// enumerating presidential candidates
const presidentialCandidates = {
    AAC: 'Omoyele Sowore',
    ACCORD: 'Christopher Imumolen',
    APC: 'Bola Ahmed Tinubu',
    LP: 'Peter Obi',
    NNPP: 'Rabiu Kwankwaso',
    PDP: 'Atiku Abubakar',
 }
for (const key in presidentialCandidates) {
    console.log(presidentialCandidates[key] + " is the presidential candidate of " + key)
    }

