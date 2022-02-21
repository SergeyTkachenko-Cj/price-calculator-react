import base1 from './services_arr/base1';
import base10 from './services_arr/base10';
import base20 from './services_arr/base20';
import base35 from './services_arr/base35';
import base110 from './services_arr/base110';
import dop1 from './services_arr/dop1';
import dop10 from './services_arr/dop10';
import dop20 from './services_arr/dop20';
import dop35 from './services_arr/dop35';
import dop110 from './services_arr/dop110';

const List = [
    {
        id: '1 кВ',
        clicked: false,
        base: base1,
        dopi: dop1,
        dopiClick: dop1.map(i => false),
        basePrice: 60000,
        fullPrice: 60000
    },
    {
        id: '10 кВ',
        clicked: false,
        base: base10,
        dopi: dop10,
        dopiClick: dop10.map(i => false),
        basePrice: 65000,
        fullPrice: 65000
    },
    {
        id: '20 кВ',
        clicked: false,
        base: base20,
        dopi: dop20,
        dopiClick: dop20.map(i => false),
        basePrice: 65000,
        fullPrice: 65000
    },
    {
        id: '35 кВ',
        clicked: false,
        base: base35,
        dopi: dop35,
        dopiClick: dop35.map(i => false),
        basePrice: 65000,
        fullPrice: 65000
    },
    {
        id: '110 кВ',
        clicked: false,
        base: base110,
        dopi: dop110,
        dopiClick: dop110.map(i => false),
        basePrice: 120000,
        fullPrice: 120000
    }
]

export default List;