//Este sistema permitira ver las espesificaciones tecnicas de distintos celulares (gama media y gama alta) pudiendo compraralos

class Celular { 
    constructor(color,peso,tamaño,rdc,ram) {
        this.color = color;
        this.peso = peso;
        this.tamaño = tamaño;
        this.resolucionDeCamara = rdc;
        this.memoriaRam = ram;
        this.encendido = false;
    }
    presionarBotonParaPrender(){
    if (this.encendido == false) {
        alert("Celular Prendido");
        this.encendido = true;
    }else {
        alert("Celular apagado");
        this.encendido = false;
    }
}
    reiniciar(){
        if (this.encendido == true){
            alert("reiniciando celular");
        }else {
            alert("el celular esta apagado");
        }
    }
    tomarFoto(){
        alert(`Foto tomada en una resolucion de: ${this.resolucionDeCamara}`);
    }
    grabarVideo(){
        alert(`Video tomado en una resolucion de ${this.resolucionDeCamara}`);
    }
    mobileInfo(){
        return `
        Color: <b>${this.color}</b></br>
        Peso: <b>${this.peso}</b></br>
        Tamaño: <b>${this.tamaño}</b></br>
        Resolución de Cámara: <b>${this.resolucionDeCamara}</b></br>
        Memoria Ram: <b>${this.memoriaRam}</b></br>
        `;
    }
}

class CelularAltaGama extends Celular {
    constructor(color,peso,tamaño,rdc,ram, rdce) {
        super(color,peso,tamaño,rdc,ram);
        this.resolucionDeCamaraExtra = rdce;
    }
    grabarVideoLento(){
        alert("Estas grabando en camara lenta"); 
    }
    reconocimientoFacial(){
        alert("Vamos a iniciar un reconocimiento facial");
    }
    infoAltaGama(){
        return this.mobileInfo() + `Resolucionde Camara Extra: <b>${this.resolucionDeCamaraExtra}</b></br>`; 
    }
}

let celular1 = new Celular("rojo", "150g", "5´", "Full HD", "2gb");
let celular2 = new Celular("negro", "100g", "5.4´", "HD", "1gb");
let celular3 = new Celular("blanco", "120g", "5.9´", "Full HD", "4gb");
let celular4 = new CelularAltaGama("verde","130g","5.7","4k","16gb","HD");
let celular5 = new CelularAltaGama("verde","90g","6.1","4k","32gb","Full HD");

document.write(`
    ${celular1.mobileInfo()} <br>
    ${celular2.mobileInfo()} <br>
    ${celular3.mobileInfo()} <br>
    ${celular4.infoAltaGama()} <br>
    ${celular5.infoAltaGama()} <br>
`)
