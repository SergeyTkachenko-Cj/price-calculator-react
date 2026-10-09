import base1 from './services_arr/base1(mo)';
import base10 from './services_arr/base10(mo)';
import base20 from './services_arr/base20(mo)';
import base35 from './services_arr/base35(mo)';
import base110 from './services_arr/base110(mo)';
import dop1 from './services_arr/dop1(mo)';
import dop10 from './services_arr/dop10(mo)';
import dop20 from './services_arr/dop20(mo)';
import dop35 from './services_arr/dop35(mo)';
import dop110 from './services_arr/dop110(mo)';

const ListIII = [
    {
        id: '1 кВ',
        clicked: false,
        base: base1,
        dopi: dop1,
        dopiClick: dop1.map(i => false),
        basePrice: 145000,
        fullPrice: 145000
    },
    {
        id: '10 кВ',
        clicked: false,
        base: base10,
        dopi: dop10,
        dopiClick: dop10.map(i => false),
        basePrice: 145000,
        fullPrice: 145000
    },
    {
        id: '20 кВ',
        clicked: false,
        base: base20,
        dopi: dop20,
        dopiClick: dop20.map(i => false),
        basePrice: 145000,
        fullPrice: 145000
    },
    {
        id: '35 кВ',
        clicked: false,
        base: base35,
        dopi: dop35,
        dopiClick: dop35.map(i => false),
        basePrice: 145000,
        fullPrice: 145000
    },
    {
        id: 'от 110 кВ',
        clicked: false,
        base: base110,
        dopi: dop110,
        dopiClick: dop110.map(i => false),
        basePrice: 215000,
        fullPrice: 215000
    }
]

export default ListIII;