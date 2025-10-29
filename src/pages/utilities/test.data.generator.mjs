"use strict";

import {BasePage} from "./base.page.mjs";

class TestDataGenerator extends BasePage{

    //static variables
    static generatedEmail;
    static generatedEditedEmail;
    static generatedPassword;
    static generatedUsername;
    static generatedAddress;
    static generatedZipCode;
    static generatedPhone;

    constructor(page) {
        super(page);

        //random variables array
        this.firstNames = [
            "John", "Jane", "Michael", "Sarah", "David", "Emily", "Daniel", "Laura", "James", "Sophia",
            "William", "Olivia", "Benjamin", "Isabella", "Lucas", "Amelia", "Alexander", "Mia", "Ethan", "Charlotte",
            "Henry", "Ella", "Jacob", "Madeline", "Samuel", "Harper", "Nathan", "Grace", "Matthew", "Avery",
            "Leo", "Scarlett", "Jack", "Lily", "Sebastian", "Zoey", "Gabriel", "Victoria", "Samuel", "Chloe",
            "Owen", "Audrey", "Daniel", "Zoe", "Aiden", "Hannah", "Elijah", "Addison", "Ryan", "Natalie",
            "Joseph", "Hannah", "Isaac", "Lucy", "Luke", "Sadie", "Caleb", "Stella", "Jack", "Sophie",
            "Wyatt", "Megan", "Jack", "Madelyn", "Caleb", "Ella", "Andrew", "Ava", "Mason", "Layla",
            "Carter", "Zara", "Julian", "Grace", "Max", "Kylie", "Landon", "Layla", "Cooper", "Charlotte",
            "Eli", "Victoria", "Charlie", "Luna", "Ezra", "Caroline", "Austin", "Sienna", "Grayson", "Nora",
            "Daniel", "Camila", "Thomas", "Ruby", "Nicholas", "Ivy", "Henry", "Penelope", "Simon", "Emma"
        ];
        //last names array
        this.lastNames = [
            "Smith", "Johnson", "Brown", "Williams", "Jones", "Garcia", "Miller", "Davis", "Rodriguez", "Martinez",
            "Hernandez", "Lopez", "Gonzalez", "Wilson", "Anderson", "Thomas", "Taylor", "Moore", "Jackson", "Martin",
            "Lee", "Perez", "White", "Harris", "Sanchez", "Clark", "Ramirez", "Lewis", "Young", "Allen",
            "King", "Scott", "Green", "Baker", "Adams", "Nelson", "Hill", "Ramirez", "Carter", "Mitchell",
            "Perez", "Roberts", "Evans", "Turner", "Gonzalez", "Phillips", "Campbell", "Parker", "Collins", "Stewart",
            "Morris", "Rogers", "Reed", "Cook", "Morgan", "Bell", "Murphy", "Bailey", "Rivera", "Cooper",
            "Richardson", "Cox", "Ward", "Wood", "James", "Hughes", "Green", "Kelley", "Simpson", "Woods",
            "George", "Washington", "Kennedy", "Chavez", "Stevens", "Burgess", "Foster", "Graham", "Duncan", "Hunter",
            "Murray", "Garrett", "Lane", "Russell", "Fox", "Hicks", "Ramos", "Wagner", "Hansen", "Bradley",
            "Carson", "Porter", "Hunter", "Hicks", "Johnston", "Williamson", "Banks", "Meyer", "Bennett", "Dean",
            "Stevenson", "Arnold", "Curtis", "Sanders", "Fisher", "Harrison", "Holly", "Hunt", "Keller", "Vasquez"
        ];

        this._commentTitles = [
            "Amazing Smart TV", "Frustrating Setup", "Exceeded My Expectations",
            "Not Worth the Price", "Perfect for Home Theater",
            "Overheating Issues", "Would Recommend to Everyone", "Complicated Interface",
            "Best Gadget of the Year", "Color Accuracy Disappointing",
            "Sleek Modern Design", "Weak Build Quality", "Comfortable Headphones",
            "Battery Life Too Short", "Versatile Device Options",
            "Wi-Fi Dropped Constantly", "Fantastic Customer Support", "Outdated Software",
            "Beautiful Display Panel", "Storage Too Small",
            "Perfect for Gaming", "Scratches Too Easily", "Powerful Performance",
            "Speaker Quality Disappointing", "Love the Touchscreen!",
            "Buttons Feel Flimsy", "Excellent Audio Quality", "Awkward Design",
            "Worth Every Penny", "Overpriced for Basic Features",
            "Crisp 4K Resolution", "Looks Cheap in Person", "Elegant and Reliable",
            "Battery Deteriorates Quickly", "Exactly as Advertised",
            "Not Compatible with Apps", "Fast Delivery", "Cables Too Short",
            "Durable Build", "Stopped Working After a Week",
            "Eco-Friendly Packaging", "Poor Return Policy", "The Best Upgrade Yet",
            "Confusing User Manual", "Great for Productivity",
            "Uncomfortable Ear Cups", "Efficient Cooling System", "Unexpected Color Variant",
            "Most Impressive Gadget", "Complete Waste of Money"
        ];

        this._comments = [
            "This smart TV is absolutely perfect for movie nights. The picture quality is stunning and the sound fills the room without extra speakers!",
            "Setup was a nightmare. The instructions were unclear and the remote barely worked. Took hours just to get it online.",
            "I didn’t expect much from this tablet at this price, but it completely blew me away. Fast, responsive, and the screen is gorgeous!",
            "For the premium price point, I expected better build quality. The laptop heats up quickly and the plastic feels cheap.",
            "Hooked this up in my home theater and it’s amazing. Crystal clear 4K resolution and smooth motion for gaming and streaming.",
            "The router constantly overheats after a few hours of use. Had to set up a fan just to keep it running without crashing.",
            "If you’re on the fence, just buy it. I’ve used this phone for months and it’s perfect—fast, reliable, and sleek.",
            "The device itself is powerful, but the interface is confusing and buggy. Had to reset multiple times before it worked properly.",
            "I’ve bought many gadgets this year, but this one stands out as my favorite. It’s reliable and performs better than expected.",
            "The monitor I received has dull colors compared to the vibrant photos online. Not suitable for design work.",
            "This laptop has such a sleek and elegant design. It looks way more expensive than it actually is.",
            "The hinge on the screen became loose within a week, and the build feels fragile overall. Disappointed in the quality.",
            "I wore these headphones for a 10-hour flight and they stayed comfortable the whole time. Noise-canceling is superb!",
            "Battery life barely lasts 3 hours, far from the advertised 10 hours. Useless for long trips.",
            "I use this tablet for both work and entertainment. It handles everything from video calls to gaming without lag.",
            "The Wi-Fi on this router keeps dropping. Totally unreliable for online meetings or gaming sessions.",
            "Customer service replaced my defective speaker immediately and even upgraded the shipping. Couldn’t be happier!",
            "The software feels like it hasn’t been updated in years. Slow, clunky menus that make the device feel outdated.",
            "This phone’s OLED display is stunning. Every color pops, and watching videos is an absolute joy.",
            "Storage is way too small. With apps and updates, I barely have space left for photos and music.",
            "Perfect gaming laptop—runs AAA titles smoothly with no lag. Worth the investment.",
            "The glossy finish scratches incredibly easily. Looks worn out after just a week of use.",
            "Performance is top-notch. Handles multitasking and heavy applications without breaking a sweat.",
            "The built-in speakers are tinny and weak. Definitely need external ones for decent sound.",
            "The touchscreen is incredibly responsive, and the gesture controls are smooth. Love using it daily.",
            "Buttons feel cheap and wobbly, like they’ll fall off after a few months of use.",
            "The headphones sound fantastic—deep bass, clear mids, crisp highs. Better than some pricier models I’ve tried.",
            "The design is awkward, and holding the tablet for long periods is uncomfortable.",
            "At first it felt expensive, but after months of use it’s still fast and reliable. Definitely worth the cost.",
            "They’re charging premium prices for what feels like a budget phone. Nothing special compared to cheaper options.",
            "The 4K resolution on this TV is breathtaking. Movies look cinematic and games are immersive.",
            "Online photos make this gadget look premium, but in person it feels cheap and plasticky.",
            "This design is timeless—slim, elegant, and built to last. Will be using it for years to come.",
            "Battery health dropped dramatically after only a few months. Now I need to keep it plugged in all the time.",
            "The tablet arrived exactly as described. Color, specs, and performance matched the website details.",
            "The smart TV claimed to support all major apps, but half of them don’t work or crash constantly.",
            "Ordered Monday and had it by Wednesday! Super fast delivery made the whole process stress-free.",
            "The included charging cable is ridiculously short. Had to buy an extra-long one just to use it comfortably.",
            "This gaming console feels solid and durable. No issues after months of heavy use.",
            "The laptop died after one week. Won’t even power on now. Complete waste of money.",
            "Loved the recyclable packaging—nice touch from a tech company thinking about the environment.",
            "Tried to return but was denied because the box was opened. How else was I supposed to test the device?",
            "This phone upgrade feels incredible. Smooth, fast, and makes my old model look like a toy.",
            "The user manual is confusing and poorly translated. Had to watch YouTube videos just to figure out the basics.",
            "Perfect for productivity—I use this laptop for editing, coding, and meetings. Handles it all easily.",
            "The ear cups are stiff and uncomfortable after an hour of use. Definitely not made for long listening sessions.",
            "The cooling system works wonders. Even under heavy gaming, the laptop stays quiet and cool.",
            "Ordered the black model but got a strange blue-gray color instead. Not what I expected.",
            "This gadget always impresses people when they see it. It’s become my go-to for showing off new tech.",
            "Complete waste of money. Underperforms, looks cheap, and customer service was unhelpful. Avoid this product!"
        ];

        this._illinoisCities = ["Chicago", "Aurora", "Naperville", "Joliet", "Rockford", "Springfield",
            "Elgin", "Peoria", "Champaign", "Waukegan", "Cicero", "Bloomington",
            "Arlington Heights", "Evanston", "Decatur", "Schaumburg", "Bolingbrook",
            "Palatine", "Skokie", "Des Plaines", "Orland Park", "Tinley Park",
            "Oak Lawn", "Berwyn", "Mount Prospect", "Normal", "Wheaton", "Hoffman Estates",
            "Oak Park", "Downers Grove", "Elmhurst", "Glenview", "DeKalb", "Lombard",
            "Moline", "Buffalo Grove", "Bartlett", "Urbana", "Crystal Lake", "Quincy",
            "Streamwood", "Carol Stream", "Romeoville", "Plainfield", "Hanover Park",
            "Carpentersville", "Wheeling", "Park Ridge", "Addison", "Calumet City"];

        this._streetTypes = ["St.", "Ave.", "Blvd.", "Rd.", "Ln.", "Dr.", "Ct.", "Pl."];

    }

    //random item function
    getRandomItem(array) {
        return array[Math.floor(Math.random() * array.length)];
    }
    getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }

    //generate random name
    getRandomName() {
        const firstName = this.getRandomItem(this.firstNames);
        const lastName = this.getRandomItem(this.lastNames);
        return { firstName, lastName };
    }

    //email address generator
    generateRandomEmailAddress(length) {
        if (TestDataGenerator.generatedEmail) {
            return TestDataGenerator.generatedEmail;
        }
        const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        const lower = "abcdefghijklmnopqrstuvwxyz";
        const characters = upper + lower;

        TestDataGenerator.randomUsername = this.generateRandomString(characters, length);
        TestDataGenerator.generatedEmail = TestDataGenerator.randomUsername + "@example.com";

        return TestDataGenerator.generatedEmail;
    }
    //edited email address generator
    generateRandomEditedEmailAddress(length) {
        if (TestDataGenerator.generatedEditedEmail) {
            return TestDataGenerator.generatedEditedEmail;
        }
        const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        const lower = "abcdefghijklmnopqrstuvwxyz";
        const characters = upper + lower;

        const randomString = this.generateRandomString(characters, length);
        TestDataGenerator.generatedEditedEmail = randomString + "@fakemail.com";

        return TestDataGenerator.generatedEditedEmail;
    }
    //generate random too short email address
    generateRandomTooShortEmailAddress(length) {
        const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        const lower = "abcdefghijklmnopqrstuvwxyz";
        const characters = upper + lower;

        const randomString = this.generateRandomString(characters, length);
        return randomString + "@e.com";
    }

    //generate random too long email address
    generateRandomTooLongEmailAddress(length) {
        const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        const lower = "abcdefghijklmnopqrstuvwxyz";
        const characters = upper + lower;

        const randomString = this.generateRandomString(characters, length);
        return randomString + "@dffdsddesrxasadsadssfdhghgsdfdsasgfujyyryytiukjkjnvcsasqweweteyttsdsdsfsdfdgdfdfdsdsdyudfidsdfdghjda.com";
    }

    //random password generator
    generateRandomPassword() {
        if (TestDataGenerator.generatedPassword) {
            return TestDataGenerator.generatedPassword;
        }
        const numbers = "0123456789";
        const stokerPart = "Stoker";

        // Generate a random numeric sequence
        let numericPart = '';
        for (let i = 0; i < 3; i++) {
            numericPart += numbers.charAt(this.getRandomInt(numbers.length));
        }
        numericPart += '_'; // Static underscore

        // Shuffle the numeric part
        const shuffledNumericPart = this.shuffleString(numericPart);
        TestDataGenerator.generatedPassword = stokerPart + shuffledNumericPart;
        return TestDataGenerator.generatedPassword;
    }

    shuffleString(string) {
        const array = string.split('');
        for (let i = array.length - 1; i > 0; i--) {
            const j = this.getRandomInt(i + 1);
            [array[i], array[j]] = [array[j], array[i]]; // Swap elements
        }
        return array.join('');
    }

    generateRandomPhoneNumber(){
        const illinoisAreaCodes = [217, 224, 309, 312, 331, 447, 464, 618, 630, 708, 773, 779, 815, 847];

        const areaCode = illinoisAreaCodes[Math.floor(Math.random() * illinoisAreaCodes.length)];
        const centralOfficeCode = Math.floor(Math.random() * 800) + 200; //avoid leading 0/1
        const lineNumber = Math.floor(Math.random() * 10000);

        TestDataGenerator.generatedPhone = `${areaCode}${centralOfficeCode}${lineNumber.toString().padStart(4, '0')}`;
        return TestDataGenerator.generatedPhone;
    }

    //pick random comment title
    generateRandomCommentTitle(){
        return this.getRandomItem(this._commentTitles)
    }

    //pick random comment
    generateRandomComment(){
        return this.getRandomItem(this._comments)
    }

    //generate random string
    generateRandomString(characters, length) {
        let result = '';
        for (let i = 0; i < length; i++) {
            result += characters.charAt(this.getRandomInt(characters.length));
        }
        return result;
    }

    generateRandomAddress(length) {
        if (length < 1) {
            throw new Error("Street name length must be at least 1.");
        }

        const streetNumber = Math.floor(Math.random() * 9999) + 1; // Street number between 1 and 9999
        const streetName = this.generateRandomString("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz", length);
        //const streetTypes = ["Street", "Avenue", "Boulevard", "Drive", "Court", "Place", "Lane", "Road"]; // Define STREET_TYPES
        const streetType = this._streetTypes[Math.floor(Math.random() * this._streetTypes.length)];
        TestDataGenerator.generatedAddress = `${streetNumber} ${streetName} ${streetType}`
        return TestDataGenerator.generatedAddress;
    }

    getRandomCity() {
        const randomIndex = Math.floor(Math.random() * this._illinoisCities.length);
        TestDataGenerator.generatedCity = this._illinoisCities[randomIndex]
        return TestDataGenerator.generatedCity ;
    }

    getRandomPostalCode() {
        const minZip = 60000; // Starting zip code for Illinois
        const maxZip = 89999; // Ending zip code range
        TestDataGenerator.generatedZipCode = Math.floor(minZip + Math.random() * (maxZip - minZip + 1));
        return TestDataGenerator.generatedZipCode;
    }

    generateRandomExpiryDate() {
        const today = new Date();
        const currentYear = today.getFullYear();

        //random year between now and 5 years from now
        const expiryYear = currentYear + Math.floor(Math.random() * 6); // [0–5] years ahead

        //random month between 1 and 12
        const expiryMonth = Math.floor(Math.random() * 12) + 1;

        //pad month with leading zero if needed
        const formattedMonth = String(expiryMonth).padStart(2, '0');

        //convert to 2-digit year
        const formattedYear = String(expiryYear).slice(-2);

        //save vars separately
        TestDataGenerator.generatedExpirationMonth = formattedMonth;
        TestDataGenerator.generatedExpirationYear = formattedYear;

        return {
            month: formattedMonth,
            year: formattedYear
        };
    }



    generateRandomCVV() {
        TestDataGenerator.generatedCVV = String(Math.floor(100 + Math.random() * 900)); //generates a number between 100 and 999
        return TestDataGenerator.generatedCVV;
    }

    get password() {return TestDataGenerator.generatedPassword;}

    get randomUsername() {return TestDataGenerator.randomUsername || "";}

    get username() {return TestDataGenerator.generatedUsername}

}
export {TestDataGenerator};