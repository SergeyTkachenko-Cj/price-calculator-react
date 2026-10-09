import base1 from './services_arr/base1';
import base10 from './services_arr/base10';
import base20 from './services_arr/base20';
import base35 from './services_arr/base35';
import base110 from './services_arr/base110';
// import base220 from './services_arr/base220';
// import base330 from './services_arr/base330';
// import base500 from './services_arr/base500';
// import base750 from './services_arr/base750';
import dop1 from './services_arr/dop1';
import dop10 from './services_arr/dop10';
import dop20 from './services_arr/dop20';
import dop35 from './services_arr/dop35';
import dop110 from './services_arr/dop110';
// import dop220 from './services_arr/dop220';
// import dop330 from './services_arr/dop330';
// import dop500 from './services_arr/dop500';
// import dop750 from './services_arr/dop750';

const ListII = [
    {
        id: '1 кВ',
        clicked: false,
        base: base1,
        dopi: dop1,
        dopiClick: dop1.map(i => false),
        basePrice: 150000,
        fullPrice: 150000
    },
    {
        id: '10 кВ',
        clicked: false,
        base: base10,
        dopi: dop10,
        dopiClick: dop10.map(i => false),
        basePrice: 160000,
        fullPrice: 160000
    },
    {
        id: '20 кВ',
        clicked: false,
        base: base20,
        dopi: dop20,
        dopiClick: dop20.map(i => false),
        basePrice: 160000,
        fullPrice: 160000
    },
    {
        id: '35 кВ',
        clicked: false,
        base: base35,
        dopi: dop35,
        dopiClick: dop35.map(i => false),
        basePrice: 160000,
        fullPrice: 160000
    },
    {
        id: 'от 110 кВ',
        clicked: false,
        base: base110,
        dopi: dop110,
        dopiClick: dop110.map(i => false),
        basePrice: 170000,
        fullPrice: 170000
    }
    // {
    //     id: '220 кВ',
    //     clicked: false,
    //     base: base220,
    //     dopi: dop220,
    //     dopiClick: dop220.map(i => false),
    //     basePrice: 160000,
    //     fullPrice: 160000
    // },
    // {
    //     id: '330 кВ',
    //     clicked: false,
    //     base: base330,
    //     dopi: dop330,
    //     dopiClick: dop330.map(i => false),
    //     basePrice: 160000,
    //     fullPrice: 160000
    // },
    // {
    //     id: '500 кВ',
    //     clicked: false,
    //     base: base500,
    //     dopi: dop500,
    //     dopiClick: dop500.map(i => false),
    //     basePrice: 160000,
    //     fullPrice: 160000
    // },
    // {
    //     id: '750 кВ',
    //     clicked: false,
    //     base: base750,
    //     dopi: dop750,
    //     dopiClick: dop750.map(i => false),
    //     basePrice: 160000,
    //     fullPrice: 160000
    // }
]

export default ListII;