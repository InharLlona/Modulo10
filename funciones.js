const person = {
    id:2,
    name: "Juan",
    surname: "lopez",
}

const numbers = [2,4,5,6];
const arr = [2,4,5,6];

const word = "le";
const word1 = "dog";
const word2 = "fish";
const word3 = "cat";

const shoppingCart = [
    { category: "Frutas y Verduras", product: "Lechuga", price: 0.8, units: 1 },
    { category: "Carne y Pescado", product: "Pechuga pollo", price: 3.75, units: 2 },
    { category: "Droguería", product: "Gel ducha", price: 1.15, units: 1 },
    { category: "Droguería", product: "Papel cocina", price: 0.9, units: 3 },
    { category: "Frutas y Verduras", product: "Sandía", price: 4.65, units: 1 },
    { category: "Frutas y Verduras", product: "Puerro", price: 4.65, units: 2 },
    { category: "Carne y Pescado", product: "Secreto ibérico", price: 5.75, units: 2 },
    ];

    const bookCollection = [
        { isbn: 23453, author: "J. Simmons", pages: 250, title: "The Dark", read: true },
        { isbn: 56456, author: "Peter Black", pages: 120, title: "Feed", read: false },
        { isbn: 43243, author: ["A. Smith", "F. Gant"], pages: 340, title: "Fire", read: true },
        { isbn: 23223, author: undefined, pages: 260, title: "Eve", read: true },
        { isbn: 89232, author: "Anna Willis", pages: 610, title: "The Run", read: false },
        ];
        
    
const hasId = ({id}) => (id ? true:false);
console.log(hasId(person));

const head = ([primero,...rest]) => primero;
console.log(head(numbers))

const tail = ([primero,...rest]) => rest;
console.log(tail(numbers))

const swapFirstToLast = ([primero,...rest]) => 
{rest.push(primero)
return rest
};
console.log(swapFirstToLast(numbers))

const excludeId = ({id,...rest})=>rest;
console.log(excludeId(person))

const wordsStartingWithA = ([primero,...rest]) => ((primero==="a" || primero==="A") ? true:false);
console.log(wordsStartingWithA(word));

const concat = (...words) => words.reduce ((show, word) => show + word + "|","");
console.log(concat("dog", "cat", "car"))

const multArray = (arrs,x) => arrs.map(arr => arr * x) ;
console.log(multArray(arr,5))

const calcMult = (...nums) => nums.reduce((show,num) => show = show * num,1)
console.log(calcMult(2,3,4,5))

////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////

const swapFirstSecond = ([st,nd,...rest]) =>{
     rest.unshift(st);
     rest.unshift(nd);
     return rest
}
console.log(swapFirstSecond(arr))

 const longest = ( ch, ...strings) => strings.every(string => (string.charAt(0)===ch))
 console.log(longest("d","dom","dor","dog"))

const shearchInStringV1 = (ch,rrr) => Array.from(rrr).reduce((qt,rr) => {
    if(rr===ch)qt=qt+1;
    return qt;
},0);
console.log(shearchInStringV1("e","perre"))

const shearchInStringV2 = (ch,rrrr) => Array.from(rrrr).filter(rr=>rr===ch);
console.log( (shearchInStringV2("e","perre")).length)

const sortCharacters = (palabra) =>Array.from(palabra).sort().reduce((strr,letter)=>strr+letter,"");
console.log(sortCharacters("sfcraeaf"))

const shout = (...palabras) => palabras.reduce((strr,palabra)=>strr + "!" + palabra.toUpperCase() + "!","") 
console.log(shout("dog","cat","fish"))

///////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////


const anadir21 = (products) => products.map( product => {
    return {...product,IVA: parseFloat((product.price*0.21).toFixed(2))}
})
console.log(anadir21(shoppingCart))

const order = (products) => products.sort((a,b)=> a.units-b.units)
console.log(order(shoppingCart))

const drogueria = (products) => products.filter(product => product.category==="Droguería").reduce((sub,product)=>sub+product.price,0)
console.log("Gasto total en droguería: " + drogueria(shoppingCart) + "€")

const final = (products) => products.sort((a,b) => a.category > b.category ?1:-1).map(product=> product.product +"->"+product.units*product.price+"€")
console.log(final(shoppingCart))


