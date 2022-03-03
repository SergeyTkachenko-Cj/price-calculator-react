import base1 from './services_arr/base1';
import base10 from './services_arr/base10';
import base20 from './services_arr/base20';
import base35 from './services_arr/base35';
import base110 from './services_arr/base110';
import base220 from './services_arr/base220';
import base330 from './services_arr/base330';
import base550 from './services_arr/base550';
import base750 from './services_arr/base750';
import dop1 from './services_arr/dop1';
import dop10 from './services_arr/dop10';
import dop20 from './services_arr/dop20';
import dop35 from './services_arr/dop35';
import dop110 from './services_arr/dop110';
import dop220 from './services_arr/dop220';
import dop330 from './services_arr/dop330';
import dop550 from './services_arr/dop550';
import dop750 from './services_arr/dop750';

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
    },
    {
        id: '220 кВ',
        clicked: false,
        base: base220,
        dopi: dop220,
        dopiClick: dop220.map(i => false),
        basePrice: 120000,
        fullPrice: 120000
    },
    {
        id: '330 кВ',
        clicked: false,
        base: base330,
        dopi: dop330,
        dopiClick: dop330.map(i => false),
        basePrice: 120000,
        fullPrice: 120000
    },
    {
        id: '550 кВ',
        clicked: false,
        base: base550,
        dopi: dop550,
        dopiClick: dop550.map(i => false),
        basePrice: 120000,
        fullPrice: 120000
    },
    {
        id: '750 кВ',
        clicked: false,
        base: base750,
        dopi: dop750,
        dopiClick: dop750.map(i => false),
        basePrice: 120000,
        fullPrice: 120000
    }
]

export default List;