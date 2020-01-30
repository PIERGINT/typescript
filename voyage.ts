class Sejour {
    constructor(private _nom: string, private _prix: number) {
    }
    get nom(): string {
        return `${this._nom}`;
    }
    set nom(newNom) {
        this._nom = `${newNom}`;
    }
}

class SejourService {

    private sejour: Sejour[];

    constructor() {
        this.sejour = new Array()
        this.sejour.push(new Sejour('Malte', 500))
        this.sejour.push(new Sejour('Madère', 1000))
        this.sejour.push(new Sejour('Bali', 2000))
    }
    findTripByNom(_nom : string) : any {
        for (const sejour of this.sejour) {
            if (sejour.nom === _nom ) {
                return sejour;
            } else {
                console.log('Destination' ,`${_nom}`,'not found');
                break;
            }
        }
         

    }
}


const destination1 = new SejourService()
const test1 = destination1.findTripByNom('Malte');
console.log(test1)
const destination2 = new SejourService().findTripByNom('Saint-Peguy-sur-gazon');
console.log(destination2)