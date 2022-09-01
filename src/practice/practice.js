

const Practice = () => {

    function noClosure(){
        let x = 10;

        x++;

        console.log("noClousure value" , x);
    }

    noClosure();
    noClosure();


    function Closure(){
        let y = 10;

        console.log("Clousure value out of loop" ,y);

        function innerFunction(){

            y++;
            console.log("innerFunction" , y);
        }

        return innerFunction;
    }

    const closure = Closure();
    closure();



    const test = {
        name: "giotest",
        testType: 1,
        beginTest: function (){
            console.log( "\nStarting test..." , this.name.repeat(2), this.testType );  
        }
    }
    
    //Declaration   name         parseKey  parameters       parseKey function body
    function        testFunction (         test      )      {

        try{
        const testName = test.name;
        const testType = test.testType;

        console.log("\n Test should be: " , testName, testType);
       
        }
        catch(e)
        {
            console.log(e)
        }

        return test.beginTest();
    } 

    //Reference the function and pass a value 
    testFunction(test);


    const jackTest = function(qty){
        console.log(arguments);
        return 'jacque is uwu cute 😅'.repeat(qty);

    }

    const testing = jackTest(5);
    console.log(testing);

    const randomFunction =(function(...args){
        console.log(args);
    })('😘' , '🌜');

    const evenBetterFunction = ((...args) =>console.log(args))('😘' , '🌭');

    let thing = 'thing';
    
  

    console.log(thing);
}

export default Practice;