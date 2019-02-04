import base1 from './services_arr/base1';
import base10 from './services_arr/base10';
import base110 from './services_arr/base110';
import dop1 from './services_arr/dop1';
import dop10 from './services_arr/dop10';
import dop110 from './services_arr/dop110';

const List = [
    {
        id: '1 кВ',
        clicked: false,
        attestat: 15000,
        attestClick: false,
        rtn: 25200,
        base: base1,
        dopi: dop1,
        dopiClick: dop1.map(i => false),
        basePrice: 85000,
        fullPrice: 110200
    },
    {
        id: '10/20/35 кВ',
        clicked: false,
        attestat: 20000,
        attestClick: false,
        rtn: 30000,
        base: base10,
        dopi: dop10,
        dopiClick: dop10.map(i => false),
        basePrice: 95000,
        fullPrice: 120200
    },
    {
        id: '110/220/330/550/750 кВ',
        clicked: false,
        attestat: 45500,
        attestClick: false,
        rtn: 60000,
        base: base110,
        dopi: dop110,
        dopiClick: dop110.map(i => false),
        basePrice: 150000,
        fullPrice: 175200
    }
]

export default List;