describe("My fizzBuzzGame function", function() {
    // A test suite begins with a call to the global Jasmine function describe with two parameters: a string and a function.
   
    describe("Division tests", function() {
        // Specs are defined by calling the global Jasmine function it
        it("should return Fizz", function() {
            expect(division(9,3)).toBeDefined("Fizz");
        });
        it("should return Fizz", function() {
            expect(division(18,3)).toBeDefined("Fizz");
        });
        it("should return Buzz", function() {
             expect(division(90,5)).toBeDefined("Buzz");
        });
        it("should return an error if we don't supply two numbers", function() {
             spyOn(window, "alert");
             division("Hitchhikers","guide");
             expect(window.alert).toHaveBeenCalledWith("Error!");
         });
        /*it("should be unable to return a fizzBuzz when called as fizzBuzzGame(17)", function() {
            expect(division(90,5)).toBeDefined("Buzz");
        });*/
    });
});   
        
     /*beforeEach(function() {
        multiples = new fizzBuzzGame();
    });
    */    
        
        /*it("should return the value of a / b", function() {
            expect(fizzBuzzGame).toBeDefined();
        });*/
        
        
      /*        it("should return FizzBuzz when called as fizzBuzzGame(15)", function() {
             var result = 15/3 && 15/5
             expect(result).toBe(15);
        });*/
        
        /*it("should return Fizz when called as fizzBuzzGame(18)", function() {
             fizzBuzz.divide(3);
             expect(fizzBuzz.value).toBe(Fizz);
        });
        it("should return Buzz when called as fizzBuzzGame(30)", function() {
             fizzBuzz.divide(5);
             expect(fizzBuzz.value).toBe(Buzz);
        });
        it("should return Buzz when called as fizzBuzzGame(90)", function() {
             fizzBuzz.divide(5);
             expect(fizzBuzz.value).toBe(Buzz);
        });
        
   

