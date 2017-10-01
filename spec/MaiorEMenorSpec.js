describe("MaiorEMenor", function() {
    it ("deve exibir maior e menor para lista não sequencial", function() {
        let mm = new MaiorEMenor();

        mm.encontra([1,4,5,8,3]);

        expect(mm.maior).toEqual(8);
        expect(mm.menor).toEqual(1);
    });

    it("deve exibir maior e menor para lista crescente" , function() {
        let mm = new MaiorEMenor();
        
        mm.encontra([1, 2, 4, 4, 12]);

        expect(mm.maior).toEqual(12);
        expect(mm.menor).toEqual(1);
    });

    it("deve exibir maior e menor para lista decrescente" , function() {
        let mm = new MaiorEMenor();
        
        mm.encontra([15,10,6,6,1,1,0,-5]);

        expect(mm.maior).toEqual(15);
        expect(mm.menor).toEqual(-5);
    });

    it("deve funcionar com apenas um elemento" , function() {
        let mm = new MaiorEMenor();
        
        mm.encontra([15]);

        expect(mm.maior).toEqual(15);
        expect(mm.menor).toEqual(15);
    });
});