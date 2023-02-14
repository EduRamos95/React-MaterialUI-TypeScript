export interface numLev{
    id: number,
    levEmi: number,
}

export interface newNumLev{
    id: number,
    name: string,
    levEmi: number,
}

export const dataLevant_Emi:Array<numLev> = [
    {
        id: 1,
        levEmi: 1
    },
    {
        id: 2,
        levEmi: 2
    },
    {
        id: 3,
        levEmi: 3
    },
    {
        id: 4,
        levEmi: 4
    },
    {
        id: 5,
        levEmi: 5
    },
    {
        id: 6,
        levEmi: 6
    },
    {
        id: 7,
        levEmi: 7
    },
    {
        id: 8,
        levEmi: 8
    },
    {
        id: 9,
        levEmi: 9
    },
    {
        id: 10,
        levEmi: 10
    },
    {
        id: 11,
        levEmi: 11
    },
    {
        id: 12,
        levEmi: 12
    },
    {
        id: 13,
        levEmi: 13
    },
    {
        id: 14,
        levEmi: 14
    },
    {
        id: 15,
        levEmi: 15
    },
    {
        id: 17,
        levEmi: 17
    },
    {
        id: 18,
        levEmi: 18
    },
    {
        id: 19,
        levEmi: 19
    },
    {
        id: 20,
        levEmi: 20
    }
]

export function convertirLEV(lev:numLev ): newNumLev {
    return {
      id: lev.id,
      name: String(lev.levEmi),
      levEmi: lev.levEmi,
    };
}

export function converLevM(levM:numLev[]): newNumLev[] {
    return (
        levM.map( item => convertirLEV(item))
    )
}

export const newDataLevEmi:Array<newNumLev> = dataLevant_Emi.map((levt:numLev):newNumLev => convertirLEV(levt));