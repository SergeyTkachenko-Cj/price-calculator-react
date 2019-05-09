const dop10 = [
    ['Проверка устройств молние&shy;защиты', 1000],
    ['Про&shy;вер&shy;ка уст&shy;рой&shy;ств мол&shy;ние&shy;за&shy;щи&shy;ты', 1000],
    ['Проверка цепи фаза&hyphen;фаза в электро&shy;установках напряжением до&nbsp;1&nbsp;кВ с системой&nbsp;IT', 2000, 'Проверка срабатывания защиты при системе питания с заземлённой и изолированной нейтралью'],
    ['Про&shy;вер&shy;ка це&shy;пи фаза&hyphen;фаза в элек&shy;тро&shy;уста&shy;нов&shy;ках на&shy;пря&shy;же&shy;ни&shy;ем до&nbsp;1&nbsp;кВ с сис&shy;те&shy;мой&nbsp;IT', 2000, 'Про&shy;вер&shy;ка сра&shy;ба&shy;ты&shy;ва&shy;ния за&shy;щи&shy;ты при сис&shy;те&shy;ме пи&shy;та&shy;ния с за&shy;зем&shy;лён&shy;ной и изо&shy;ли&shy;ро&shy;ван&shy;ной ней&shy;тра&shy;лью'],
    ['Проверка непрерывности защитных проводников, включая проводники главной и дополнительной систем уравнивания потенциалов', 2000],
    ['Про&shy;вер&shy;ка не&shy;пре&shy;рыв&shy;нос&shy;ти защи&shy;тных про&shy;вод&shy;ни&shy;ков, вклю&shy;чая про&shy;вод&shy;ни&shy;ки глав&shy;ной и до&shy;пол&shy;ни&shy;тель&shy;ной сис&shy;тем урав&shy;нива&shy;ния по&shy;тен&shy;циа&shy;лов', 2000],
    ['Измерение напряжения прикосновения и шага', 2000],
    ['Из&shy;ме&shy;ре&shy;ние на&shy;пря&shy;же&shy;ния при&shy;кос&shy;но&shy;ве&shy;ния и ша&shy;га', 2000],
    ['Проверка непрерывности защитных проводников, включая проводники главной и дополнительной систем уравнивания потенциалов', 2000],
    ['Про&shy;вер&shy;ка не&shy;пре&shy;рыв&shy;нос&shy;ти защи&shy;тных про&shy;вод&shy;ни&shy;ков, вклю&shy;чая про&shy;вод&shy;ни&shy;ки глав&shy;ной и до&shy;пол&shy;ни&shy;тель&shy;ной сис&shy;тем урав&shy;нива&shy;ния по&shy;тен&shy;циа&shy;лов', 2000],
    ['Проверка релейной аппаратуры напряжением до&nbsp;1&nbsp;кВ', 1000],
    ['Про&shy;вер&shy;ка ре&shy;лей&shy;ной ап&shy;па&shy;ра&shy;ту&shy;ры на&shy;пря&shy;же&shy;ни&shy;ем до&nbsp;1&nbsp;кВ', 1000],
    ['Испытание электро&shy;оборудования повышенным напряжением 1000&nbsp;кВ промышленной частоты', 1000],
    ['Ис&shy;пы&shy;та&shy;ние элек&shy;тро&shy;обо&shy;ру&shy;до&shy;ва&shy;ния по&shy;вы&shy;шен&shy;ным на&shy;пря&shy;же&shy;ни&shy;ем 1000&nbsp;кВ про&shy;мыш&shy;лен&shy;ной час&shy;то&shy;ты', 1000],
    ['Измерение сопротивления изоляции (проводимости) полов и стен', 5000],
    ['Из&shy;ме&shy;ре&shy;ние со&shy;про&shy;тив&shy;ле&shy;ния изо&shy;ля&shy;ции (про&shy;во&shy;ди&shy;мос&shy;ти) по&shy;лов и стен', 5000],
    ['Проверка работы автоматических выключателей и контакторов при пониженном и номинальном напряжениях оперативного тока', 1000],
    ['Про&shy;вер&shy;ка ра&shy;бо&shy;ты ав&shy;то&shy;ма&shy;ти&shy;чес&shy;ких вы&shy;клю&shy;ча&shy;те&shy;лей и кон&shy;так&shy;то&shy;ров при по&shy;ни&shy;жен&shy;ном и но&shy;ми&shy;наль&shy;ном на&shy;пря&shy;же&shy;ниях опе&shy;ра&shy;тив&shy;ного то&shy;ка', 1000],
    ['Проверка правильности функциони&shy;рования полностью собранных схем при различных значениях оперативного тока', 1000],
    ['Про&shy;вер&shy;ка пра&shy;виль&shy;нос&shy;ти функ&shy;ци&shy;они&shy;ро&shy;ва&shy;ния пол&shy;но&shy;стью соб&shy;ран&shy;ных схем при раз&shy;лич&shy;ных зна&shy;че&shy;ниях опе&shy;ра&shy;тив&shy;но&shy;го то&shy;ка', 1000],
    ['Испытание синхронных генераторов и компен&shy;саторов напряжения напряжением до&nbsp;35&nbsp;кВ', 1000],
    ['Ис&shy;пы&shy;та&shy;ние син&shy;хрон&shy;ных ге&shy;не&shy;ра&shy;то&shy;ров и ком&shy;пен&shy;са&shy;то&shy;ров на&shy;пря&shy;же&shy;ния на&shy;пря&shy;же&shy;ни&shy;ем до&nbsp;35&nbsp;кВ', 1000],
    ['Испытание машин постоянного тока напряжением до&nbsp;1&nbsp;кВ', 1000],
    ['Ис&shy;пы&shy;та&shy;ние ма&shy;шин по&shy;сто&shy;ян&shy;но&shy;го то&shy;ка на&shy;пря&shy;же&shy;ни&shy;ем до&nbsp;1&nbsp;кВ', 1000],
    ['Испытание электро&shy;двигателей переменного тока напряжением до&nbsp;10&nbsp;кВ', 1000],
    ['Ис&shy;пы&shy;та&shy;ние элек&shy;тро&shy;дви&shy;га&shy;те&shy;лей пе&shy;ре&shy;мен&shy;но&shy;го то&shy;ка на&shy;пря&shy;же&shy;ни&shy;ем до&nbsp;10&nbsp;кВ', 1000],
    ['Испытание элегазовых выключателей напряжением до&nbsp;35&nbsp;кВ', 2000],
    ['Ис&shy;пы&shy;та&shy;ние эле&shy;га&shy;зо&shy;вых вык&shy;лю&shy;ча&shy;те&shy;лей на&shy;пря&shy;же&shy;ни&shy;ем до 35&nbsp;кВ', 2000],
    ['Испытание конден&shy;саторов напряжением до&nbsp;35&nbsp;кВ', 1000],
    ['Ис&shy;пы&shy;та&shy;ние кон&shy;ден&shy;са&shy;то&shy;ров на&shy;пря&shy;же&shy;ни&shy;ем до&nbsp;35&nbsp;кВ', 1000],
    ['Испытание трансфор&shy;маторного масла', 2500, 32],
    ['Ис&shy;пы&shy;та&shy;ние транс&shy;фор&shy;ма&shy;тор&shy;но&shy;го мас&shy;ла', 2500, 32],
    ['Испытание трансфор&shy;маторного масла, в том числе измерение тангенса угла диэлектрических потерь', 5000, 30],
    ['Ис&shy;пы&shy;та&shy;ние транс&shy;фор&shy;ма&shy;тор&shy;но&shy;го мас&shy;ла, в том чис&shy;ле из&shy;ме&shy;ре&shy;ние тан&shy;ген&shy;са уг&shy;ла ди&shy;элек&shy;три&shy;чес&shy;ких по&shy;те&shy;рь', 5000, 30],
    ['Испытания аккуму&shy;ляторных батарей', 2500],
    ['Ис&shy;пы&shy;та&shy;ния ак&shy;ку&shy;му&shy;ля&shy;тор&shy;ных ба&shy;та&shy;рей', 2500],
    ['Испытание полу&shy;провод&shy;никовых преобразователей и устройств', 5000],
    ['Ис&shy;пы&shy;та&shy;ние полу&shy;про&shy;вод&shy;ни&shy;ко&shy;вых пре&shy;обра&shy;зо&shy;ва&shy;те&shy;лей и уст&shy;рой&shy;ств', 5000],
    ['Испытание силовых кабельных линий из сшитого полиэтилена напряжением до&nbsp;35&nbsp;кВ', 5000],
    ['Ис&shy;пы&shy;та&shy;ние сило&shy;вых ка&shy;бель&shy;ных ли&shy;ний из сши&shy;то&shy;го поли&shy;эти&shy;ле&shy;на на&shy;пря&shy;же&shy;ни&shy;ем до 35&nbsp;кВ', 5000],
    ['Поиск кабельных трасс, определение мест повреждения и "прожиг" кабельной линии', 1000],
    ['По&shy;иск ка&shy;бель&shy;ных трасс, оп&shy;ре&shy;де&shy;ле&shy;ние ме&shy;ст по&shy;вреж&shy;де&shy;ния и "про&shy;жиг" ка&shy;бель&shy;ной ли&shy;нии', 1000],
    ['Определение кабельной линии в пучке', 5000],
    ['Оп&shy;ре&shy;де&shy;ле&shy;ние ка&shy;бель&shy;ной ли&shy;нии в пуч&shy;ке', 5000],
    ['Испытание крепежных деталей розеток и приспосо&shy;блений для подвешивания светильников', 1000],
    ['Ис&shy;пы&shy;та&shy;ние кре&shy;пеж&shy;ных де&shy;та&shy;лей ро&shy;зе&shy;ток и при&shy;спо&shy;соб&shy;ле&shy;ний для под&shy;ве&shy;ши&shy;ва&shy;ния све&shy;тиль&shy;ни&shy;ков', 1000],
    ['Испытание и проверка переносного электроинструмента, переносных и передвижных электроприемников и вспомогательного оборудования напряжением до 1000 В', 2000],
    ['Ис&shy;пы&shy;та&shy;ние и про&shy;вер&shy;ка пе&shy;ре&shy;нос&shy;но&shy;го элек&shy;тро&shy;инст&shy;ру&shy;мен&shy;та, пе&shy;ре&shy;нос&shy;ных и пе&shy;ре&shy;движ&shy;ных элек&shy;тро&shy;при&shy;ем&shy;ни&shy;ков и вспо&shy;мо&shy;га&shy;тель&shy;но&shy;го обо&shy;ру&shy;до&shy;ва&shy;ния на&shy;пря&shy;же&shy;ни&shy;ем до 1000 В', 2000],
    ['Измерение уровня освещенности и других светотехнических параметров', 10000],
    ['Изме&shy;ре&shy;ние уров&shy;ня осве&shy;щен&shy;нос&shy;ти и дру&shy;гих свето&shy;тех&shy;ни&shy;чес&shy;ких па&shy;ра&shy;мет&shy;ров', 10000],
    ['Испытание электро&shy;защитных средств', 15000],
    ['Ис&shy;пы&shy;та&shy;ние элек&shy;тро&shy;за&shy;щит&shy;ных сред&shy;ств', 15000],
    ['Теплови&shy;зионный контроль состояния электро&shy;оборудо&shy;вания', 15000],
    ['Теп&shy;ло&shy;ви&shy;зи&shy;он&shy;ный кон&shy;троль сос&shy;то&shy;ян&shy;ия элек&shy;тро&shy;обо&shy;ру&shy;до&shy;ва&shy;ния', 15000]
]

export default dop10;