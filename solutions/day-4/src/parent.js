// esempio di classe JS
class Parent{
   //funzione constructor per creare nuova istanza classe(come su php)
   constructor(firstName,lastName,country,title){
    this.firstName=firstName;
    this.lastName=lastName;
    this.country=country;
    this.title=title;
   } 

   getPersonInfo(){
    return `${this.firstName} ${this.lastName}, a ${this.title} dev`; 
   }

   parentMethod(){

   }
}

const p1= new Parent('Matteo','Federici','Italy', 'full stack web developer');

// estensione classe JS

class child extends Parent{
    constructor(firstName,lastName,country,title,skills){
        /**metodo super:
        * va a recuperare le variabili ed i metodi della classe padre
         */
    
        super(firstName, lastName,country, title);
        this.skills=skills; 
    }

    getSkills(){
        let len=this.skills.length
        return len > 0 ? this.skills.join(' ') : ' nessuna abilità trovata'; 
    }

    childMethod(){

    }

}

const skills=['HTML', 'CSS', 'JS','REACT'];

const child= new Children(
    'Matteo',
    'Federici',
    'Italy',
    'Full stack web developer',
    skills
);