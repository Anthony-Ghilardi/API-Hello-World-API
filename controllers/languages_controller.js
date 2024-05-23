const express = require('express');
const languages = express.Router();
const Language = require('../models/language.js');

// Seed route
languages.get('/seed', (req, res) => {
    Language.insertMany([
        {
            "name": "english",
            "greeting": "Hello world",
            "pangram": "The quick brown fox jumps over the lazy dog",
            "filler": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        },{
            "name": "spanish",
            "greeting": "Hola mundo",
            "pangram": "Benjamín pidió una bebida de kiwi y fresa; Noé, sin vergüenza, la más exquisita champaña del menú"
        },{
            "name": "korean",
            "greeting": "세상아, 안녕",
            "pangram": "왜 초콜릿? 제가 원했던 건 브런치기 자딸과 의뢰였어요. 썰어, 왜 또 불평?"
        },{
            "name": "swedish",
            "greeting": "Hej världen",
            "filler": "Löksås ipsum äng miljoner både varit inom äng mjuka ordningens, vid sitt söka jäst ska stora miljoner ska vi varit, åker äng brunsås träutensilierna rännil precis tre där."
        },{
            "name": "hindi",
            "greeting": "नमस्ते दुनिया",
            "pangram": "ऋषियों को सताने वाले दुर्जन राक्षसों के राजा रावण का सर्वनाश करने वाले विष्णु अवतार भगवान श्रीराम, अयोध्या के महाराज दशरथ के बड़े सुपुत्र थे।",
            "filler": "पेदा तरीके गुजरना स्वतंत्र सार्वजनिक जिम्मे अनुवाद दौरान पसन्दिये विश्व पुस्टिक मुख़्यतह भाति ध्वनि पहुचने तकनीकी उपल्ब्ध अधिकार सोफ्टवेयर सहयोग भाषा दिये प्राण असक्षम विकल्प विजुअपि विशेष व्याख्यानर द्वारा कायरलय भीयह प्रतिबध पुष्टिकर्ता विशवव्यापि विकास जीवन सुमति ज्यादा अंग्रेजी वर्णन तकनीकल तकनीकी प्रव्रुत्ति उन्हे सुना"
        },{
            "name": "swahili",
            "greeting": "Salamu, dunia"
        }
     ]).then(createdLanguages => {
            res.json({
                message: "Seed successful!"
            });
        });
});

// Index Route
languages.get('/', (req, res) => {
    Language.find()
        .then(foundLanguages => {
            res.json(foundLanguages);
        });
});

// Random Route BONUS NOT REQUIRED
languages.get('/random', async (req, res) =>{
    let count = await Language.countDocuments()
    let random = Math.floor(Math.random() * count)
    Language.findOne().skip(random)
        .then(foundLanguage => {
            res.json(foundLanguage)
        }) 
})

// Show Route
languages.get('/:name', (req, res) => {
    Language.findOne({ name: req.params.name.toLowerCase() })
        .then(foundLanguage => {
            res.json(foundLanguage);
        });
});


module.exports = languages;