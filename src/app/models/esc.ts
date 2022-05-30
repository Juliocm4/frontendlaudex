export class Esc {
    id?: number;
    nom: String;
    app: string;
    apm: string;
    fechanac: Date;
    sexo: string;
    grado: string;
    email: string;
    tel: string;

    constructor(nom: string, app: string,apm: string,fechanac: Date,sexo: string,grado: string,
        email: string,tel: string
        ) {
        this.nom = nom;
        this.app = app;
        this.apm = apm;
        this.fechanac = fechanac;
        this.sexo = sexo;
        this.grado = grado;
        this.email = email;
        this.tel = tel;
    }
}
