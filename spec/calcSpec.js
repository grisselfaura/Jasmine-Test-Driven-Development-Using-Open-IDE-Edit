describe("whatCanIDrink", function() {
    describe("Age", function() {
    it("should return Sorry. I can’t tell what drink because that age is incorrect!", function() {
            expect(age(0)).toBe("Sorry. I can’t tell what drink because that age is incorrect!");
    });
    it("should return Drink Toddy", function() {
            expect(age(14)).toBe("Drink Toddy");
    });
    it("should return Drink Coke", function() {
            expect(age(18)).toBe("Drink Coke");
    });
    it("should return Drink Whisky", function() {
            expect(age(21)).toBe("Drink Beer");
    });
    it("should return Drink Toddy", function() {
            expect(age(130)).toBe("Drink Whisky");
    });
    it("should return Sorry. I can’t tell what drink because that age is incorrect!", function() {
            expect(age(undefined)).toBe("Sorry. I can’t tell what drink because that age is incorrect!");
    });
 });
});

