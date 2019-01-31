import base1 from './services_arr/base1';
import base10 from './services_arr/base10';
import base110 from './services_arr/base110';
import dop1 from './services_arr/dop1';

const List = [
    {
        id: '1 кВ',
        clicked: false,
        collapse: false,
        attestat: 15000,
        rtn: 25200,
        base: base1,
        dopi: dop1,
        basePrice: 85000,
        fullPrice: 110200
    },
    {
        id: '10/20/35 кВ',
        clicked: false,
        collapse: false,
        attestat: 20000,
        rtn: 30000,
        base: base10,
        dopi: dop1,
        basePrice: 95000,
        fullPrice: 120200
    },
    {
        id: '110/220/330/550/750 кВ',
        clicked: false,
        collapse: false,
        attestat: 45500,
        rtn: 60000,
        base: base110,
        dopi: dop1,
        basePrice: 150000,
        fullPrice: 175200
    }
]

export default List;