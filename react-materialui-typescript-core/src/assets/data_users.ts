// interface tDOC{
//     dni:string,
//     carnet:string,
//     pasaporte:String,
// }

export interface uSer{
    id: Number,
    nombre: string,
    apPat: string,
    apMat: string,
    tipoDoc: string,
    numDoc: Number,
}

export interface newuSer{
    id: Number,
    name: string,
    nombre: string,
    apPat: string,
    apMat: string,
    tipoDoc: string,
    numDoc: Number,
}

// const tipoDoc:tDOC = {
//     dni: 'dni',
//     carnet: 'carnet',
//     pasaporte: 'pasaporte',
// }

export const dataUser:Array<uSer> = [
    {
        id: 3,
        nombre: 'Juan Manuel',
        apPat: 'Villa',
        apMat: 'Rushton', 
        tipoDoc: 'DNI',
        numDoc: 908070456,
    },
    {
        id: 4,
        nombre: 'Rodrigo Alessandro',
        apPat: 'De Luzio',
        apMat: 'Poquioma', 
        tipoDoc: 'DNI',
        numDoc: 908060154,
    },
    {
        id: 5,
        nombre: 'Elisa Pamela',
        apPat: 'LTD',
        apMat: 'Calderon', 
        tipoDoc: 'CARNET',
        numDoc: 917051362,
    },
    {
        id: 6,
        nombre: 'Mardely del Rosario',
        apPat: 'Alfaro',
        apMat: 'Stanic', 
        tipoDoc: 'DNI',
        numDoc: 947071556,
    },
    {
        id: 7,
        nombre: 'Luis Antonio',
        apPat: 'Velasco',
        apMat: 'Marcelo', 
        tipoDoc: 'CARNET',
        numDoc: 947032556,
    },
    {
        id: 8,
        nombre: 'Nataly',
        apPat: 'Guanilo',
        apMat: 'Casabonne', 
        tipoDoc: 'DNI',
        numDoc: 987654321,
    },
    {
        id: 9,
        nombre: 'Ericka Sofia',
        apPat: 'Rossi de Malaga',
        apMat: 'Flores', 
        tipoDoc: 'DNI',
        numDoc: 654987321,
    },
    {
        id: 10,
        nombre: 'Oscar Rodolfo',
        apPat: 'Picasso',
        apMat: 'Jara', 
        tipoDoc: 'DNI',
        numDoc: 987123654,
    }
]

export function convertirUsuario(usuario: uSer): newuSer {
    return {
      id: usuario.id,
      name: usuario.tipoDoc + ': ' + String(usuario.numDoc) + ' ► ' + usuario.apPat + ' ' + usuario.apMat + ', ' + usuario.nombre,
      nombre: usuario.nombre,
      apPat: usuario.apPat,
      apMat: usuario.apMat,
      tipoDoc: usuario.tipoDoc,
      numDoc: usuario.numDoc,
    };
}

export const newDataUser:Array<newuSer> = dataUser.map((user:uSer):newuSer => convertirUsuario(user));