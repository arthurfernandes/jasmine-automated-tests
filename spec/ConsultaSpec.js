describe("Consulta", function(){
    let arthur;
    beforeEach(function() {
        arthur = new PacienteBuilder().constroi();
    });

    describe("consultas com retorno", function(){
        it ("deve ter preco 0 para retorno", function(){
            let consulta = new Consulta(arthur, ["raio-x"], false, true);
            expect(consulta.preco).toEqual(0);
        });
    })

    describe("consultas particulares", function() {
        it ("consulta particular dobra o preço da consulta - procedimentos comuns", function() {
            let consulta = new Consulta(arthur, ["proc1", "proc2", "proc3"], true, false);
            expect(consulta.preco).toEqual(150);
        });
    
        it ("consulta particular dobra o preço da consulta - procedimentos especiais", function() {
            let consulta = new Consulta(arthur, ["raio-x", "gesso"], true, false);
            expect(consulta.preco).toEqual(174);
        });
    });

    describe("consultas com procedimentos", function(){
        it ("procedimentos comuns aumentam em 25 reais cada", function(){
            let consulta = new Consulta(arthur, ["avaliacao", "acompanhamento"], false, false);
            expect(consulta.preco).toEqual(25 + 25);
        });

        it ("cada tipo de procedimento altera o preço de forma diferente", function() {
            let consulta = new Consulta(arthur, 
                ["raio-x", "procedimento-comum-1", "procedimento-comum-2", "gesso", "procedimento-comum-3"],
                false, false);
            expect(consulta.preco).toEqual(162);
        });
    });
});