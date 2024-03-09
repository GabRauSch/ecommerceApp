export const sortData = (data: any, column: number) =>{
    return data.sort((a: any, b: any) => {
        const lastA = parseFloat(a.info[column].replace('R$', '').replace(',', '.'));
        const lastB = parseFloat(b.info[column].replace('R$', '').replace(',', '.'));
        return lastB - lastA;
    })
}

