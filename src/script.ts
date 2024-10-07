// STEG 1 - skapa en interface för varje objekt och använd rätt interface på rätt objekt

const person = {
    name: "Alice",
    age: 25,
    address: "Wonderland"
};

const car = {
    brand: "Tesla",
    model: "Model S",
    year: 2023
};

const book = {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    pages: 218
};

const computer = {
    brand: "Apple",
    processor: "M1",
    ram: "16GB",
    storage: "512GB"
};

const movie = {
    title: "Inception",
    director: "Christopher Nolan",
    genre: "Science Fiction"
};

const student = {
    name: "John Doe",
    id: "123456",
    courses: ["Math", "Science", "History"]
};

const phone = {
    brand: "Samsung",
    model: "Galaxy S21",
    os: "Android"
};

const customer = {
    name: "Jane Smith",
    customerNumber: "78910",
    purchaseHistory: ["Laptop", "Mouse"]
};

const product = {
    name: "Headphones",
    price: 99.99,
    category: "Electronics"
};

const order = {
    orderNumber: "001",
    productList: ["Headphones", "Mouse"],
    totalPrice: 129.98
};

// steg 2 - skapa en type för varje objekt och använd rätt type på rätt objekt

const trip = {
    destination: "Paris",
    departureDate: "2023-04-01",
    returnDate: "2023-04-10"
};

const house = {
    address: "123 Maple Street",
    rooms: 4,
    price: 350000
};

const game = {
    title: "The Legend of Zelda",
    platform: "Nintendo Switch",
    genre: "Adventure"
};

const musicAlbum = {
    title: "Abbey Road",
    artist: "The Beatles",
    numberOfTracks: 17
};

const restaurant = {
    name: "The Fancy Fork",
    address: "456 Elm Street",
    menu: ["Steak", "Salad", "Soup"]
};

const movieCharacter = {
    name: "James Bond",
    actor: "Daniel Craig",
    movie: "Skyfall"
};

const teacher = {
    name: "Mr. Anderson",
    subject: "Math",
    classroom: "Room 101"
};

const library = {
    name: "City Library",
    location: "Downtown",
    numberOfBooks: 50000
};

const conference = {
    name: "Tech Summit 2023",
    date: "2023-09-15",
    participants: ["Alice", "Bob", "Charlie"]
};

const weatherForecast = {
    date: "2023-03-10",
    temperature: 15,
    precipitation: "Rain"
};

// STEG 3 - lägg alla typer i en egen fil som heter types.ts och alla interfaces i en fil som heter interfaces.ts
// exportera alla interfaces och typer och sen importera dom till denna filen så det fortfarande körs

// LOGGAR
console.log(person);
console.log(car);
console.log(book);
console.log(computer);
console.log(movie);

console.log(student);
console.log(phone);
console.log(customer);
console.log(product);
console.log(order);

console.log(trip);
console.log(house);
console.log(game);
console.log(musicAlbum);
console.log(restaurant);

console.log(movieCharacter);
console.log(teacher);
console.log(library);
console.log(conference);
console.log(weatherForecast);