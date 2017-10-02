describe("Agendamento", function(){

    let arthur;
    let agendamento;

    beforeEach(function(){
        arthur = new PacienteBuilder().constroi();
        agendamento = new Agendamento();
    })

    it ("deve agendar retorno para daqui 20 dias", function(){
        let consulta = new Consulta(arthur, ["proc1"], false, false, 
            new Date(2017, 8, 5));
        let novaConsulta = agendamento.para(consulta);

        expect(novaConsulta.data.toString()).toEqual(new Date(2017, 8, 25).toString());
    });

    describe("pular fins de semana", function(){
        it ("deve pular o sabado", function() {
            let consulta = new Consulta(arthur, ["proc1", "raio-x"], false, false, 
                new Date(2017, 8, 3));
            let novaConsulta = agendamento.para(consulta);
    
            expect(novaConsulta.data.toString()).toEqual(new Date(2017, 8, 25).toString());
        });

        it ("deve pular o domingo", function() {
            let consulta = new Consulta(arthur, ["proc1", "raio-x"], false, false, 
                new Date(2017, 8, 4));
            let novaConsulta = agendamento.para(consulta);
    
            expect(novaConsulta.data.toString()).toEqual(new Date(2017, 8, 25).toString());
        });

    })

});