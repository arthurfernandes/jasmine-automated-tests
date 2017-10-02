describe("Paciente", function() {
    it("deve retornar imc correto", function(){
        var paciente = new Paciente("Joao", 35, 80, 1.75);

        expect(paciente.imc).toBeCloseTo(26.1224489, 6)

    });

    it("deve exibir os batimentos", function(){
        var paciente = new Paciente("Mariazinha", 23, 60, 1.40);

        expect(paciente.batimentos).toEqual(967104000);
    });
});