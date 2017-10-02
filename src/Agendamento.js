class Agendamento {
    constructor(){
    }

    para (consulta) {
        let umDiaEmMilliSegundos = 24 * 60 * 60 * 1000;
        let vinteDiasEmMilliSegundos = 20 * umDiaEmMilliSegundos;

        let novaData = new Date(consulta.data.getTime() + vinteDiasEmMilliSegundos);
        if (novaData.getDay() == 0){
            novaData = new Date(novaData.getTime() + umDiaEmMilliSegundos);
        }
        else if (novaData.getDay() == 6){
            novaData = new Date(novaData.getTime() + 2*umDiaEmMilliSegundos);
        }

        return new Consulta(consulta.paciente, consulta.procedimentos, consulta.isParticular(), consulta.isRetorno(), novaData);
    }
}