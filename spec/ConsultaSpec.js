describe("Consulta", function(){
    it ("deve ter preco 0 para retorno", function(){
        var paciente = new Paciente("Guilhermino", 35, 90, 1.98);
        var consulta = new Consulta(paciente, ["raio-x"], false, true);
        expect(consulta.preco).toEqual(0);
    });

    it ("procedimentos comuns aumentam em 25 reais cada", function(){
        var paciente = new Paciente("Josefina", 5, 16, .8);
        var consulta = new Consulta(paciente, ["avaliacao", "acompanhamento"], false, false);
        expect(consulta.preco).toEqual(25 + 25);
    });

    it ("consulta particular dobra o preço da consulta - proc comum", function() {
        var paciente = new Paciente("Ivanildo", 19, 46, 1.58);
        var consulta = new Consulta(paciente, ["proc1", "proc2", "proc3"], true, false);
        expect(consulta.preco).toEqual(150);
    });

    it ("consulta particular dobra o preço da consulta - proc especiais", function() {
        var paciente = new Paciente("Ivanildo", 19, 46, 1.58);
        var consulta = new Consulta(paciente, ["raio-x", "gesso"], true, false);
        expect(consulta.preco).toEqual(174);
    });
});