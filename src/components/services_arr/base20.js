const base20 = [
    '20 Проверка соответствия смонтированной электро&shy;установки требованиям нормативно&hyphen;технической документации (визуальный&nbsp;осмотр)',
    '20 Про&shy;вер&shy;ка со&shy;ответ&shy;ств&shy;ия смон&shy;ти&shy;ро&shy;ван&shy;ной элек&shy;тро&shy;уста&shy;нов&shy;ки тре&shy;бо&shy;ва&shy;ни&shy;ям нор&shy;ма&shy;тив&shy;но&hyphen;тех&shy;ни&shy;чес&shy;кой до&shy;ку&shy;мен&shy;та&shy;ции (ви&shy;зу&shy;аль&shy;ный&nbsp;ос&shy;мотр)',
    '20 Проверка цепи между заземлителями и заземляемыми элементами; проверка наличия цепи между заземлёнными установками и элементами заземлённой установки',
    '20 Про&shy;вер&shy;ка це&shy;пи меж&shy;ду за&shy;зем&shy;ли&shy;те&shy;ля&shy;ми и за&shy;зем&shy;ляе&shy;мы&shy;ми эле&shy;мен&shy;та&shy;ми; про&shy;вер&shy;ка на&shy;ли&shy;чия це&shy;пи меж&shy;ду за&shy;зем&shy;лён&shy;ны&shy;ми ус&shy;та&shy;нов&shy;ка&shy;ми и эле&shy;мен&shy;та&shy;ми за&shy;зем&shy;лён&shy;ной ус&shy;та&shy;нов&shy;ки',
    '20 Измерения сопротивления изоляции электрических аппаратов, вторичных цепей и электро&shy;проводки напряжением до&nbsp;1&nbsp;кВ',
    '20 Из&shy;ме&shy;ре&shy;ния со&shy;про&shy;тив&shy;ле&shy;ния изо&shy;ля&shy;ции элек&shy;три&shy;чес&shy;ких ап&shy;па&shy;ра&shy;тов, вто&shy;рич&shy;ных це&shy;пей и элек&shy;тро&shy;про&shy;вод&shy;ки на&shy;пря&shy;же&shy;ни&shy;ем до&nbsp;1&nbsp;кВ',
    '20 Измерение сопротивления заземляющих устройств',
    '20 Из&shy;ме&shy;ре&shy;ние со&shy;про&shy;тив&shy;ле&shy;ния за&shy;зем&shy;ляю&shy;щих уст&shy;рой&shy;ств',
    '20 Измерение удельного сопротивления грунта',
    '20 Из&shy;ме&shy;ре&shy;ние удель&shy;но&shy;го со&shy;про&shy;тив&shy;ле&shy;ния грун&shy;та',
    '20 Проверка цепи фаза&hyphen;нуль в электро&shy;установках до&nbsp;1&nbsp;кВ с системой&nbsp;TN',
    '20 Про&shy;вер&shy;ка це&shy;пи фаза&hyphen;нуль в элек&shy;тро&shy;уста&shy;нов&shy;ках до&nbsp;1&nbsp;кВ с сис&shy;те&shy;мой&nbsp;TN',
    '20 Проверка срабатывания защиты при системе питания с заземлённой нейтралью',
    '20 Про&shy;вер&shy;ка сра&shy;ба&shy;ты&shy;ва&shy;ния за&shy;щи&shy;ты при сис&shy;те&shy;ме пи&shy;та&shy;ния с за&shy;зем&shy;лён&shy;ной ней&shy;тралью',
    '20 Проверка действия расцепителей автомати&shy;ческих выключателей',
    '20 Про&shy;вер&shy;ка дей&shy;ст&shy;вия рас&shy;це&shy;пи&shy;те&shy;лей авто&shy;ма&shy;тичес&shy;ких вык&shy;лю&shy;ча&shy;те&shy;лей',
    '20 Испытание (проверка) устройств защитного отключения&nbsp;(УЗО)',
    '20 Ис&shy;пы&shy;та&shy;ние (проверка) уст&shy;рой&shy;ств за&shy;щит&shy;но&shy;го от&shy;клю&shy;че&shy;ния&nbsp;(УЗО)',
    '20 Испытание устройств&nbsp;АВР',
    '20 Ис&shy;пы&shy;та&shy;ние уст&shy;рой&shy;ств&nbsp;АВР',
    '20 Проверка фазировки РУ и их присоединений',
    '20 Про&shy;вер&shy;ка фа&shy;зи&shy;ров&shy;ки РУ и их при&shy;сое&shy;ди&shy;не&shy;ний',
    '20 Испытание силовых трансфор&shy;маторов, авто&shy;трансфор&shy;маторов, масляных реакторов и заземляющих дугогаси&shy;тельных реакторов (дугогасящих катушек) напряжением до&nbsp; 35&nbsp;кВ мощностью до&nbsp; и выше 1,6&nbsp;МВА',
    '20 Испы&shy;та&shy;ние си&shy;ло&shy;вых транс&shy;фор&shy;ма&shy;то&shy;ров, авто&shy;транс&shy;фор&shy;ма&shy;то&shy;ров, мас&shy;ля&shy;ных реак&shy;то&shy;ров и за&shy;зем&shy;ля&shy;ющих дуго&shy;га&shy;си&shy;тель&shy;ных реак&shy;то&shy;ров (дуго&shy;га&shy;ся&shy;щих ка&shy;ту&shy;шек) на&shy;пря&shy;же&shy;ни&shy;ем до 35&nbsp;кВ мощ&shy;нос&shy;тью до и вы&shy;ше 1,6&nbsp;МВА',
    '20 Испытание измерительных трансфор&shy;маторов напряжения до&nbsp; 35&nbsp;кВ',
    '20 Ис&shy;пы&shy;та&shy;ние из&shy;ме&shy;ри&shy;тель&shy;ных транс&shy;фор&shy;ма&shy;то&shy;ров на&shy;пря&shy;же&shy;ния до 35&nbsp;кВ',
    '20 Испытание измерительных трансфор&shy;маторов тока напряжением 35&nbsp;кВ',
    '20 Ис&shy;пы&shy;та&shy;ние из&shy;ме&shy;ри&shy;тель&shy;ных транс&shy;фор&shy;ма&shy;то&shy;ров то&shy;ка на&shy;пря&shy;же&shy;ни&shy;ем 35&nbsp;кВ',
    '20 Испытание масляных выклю&shy;чателей напряжением 35&nbsp;кВ',
    '20 Ис&shy;пы&shy;та&shy;ние мас&shy;ля&shy;ных вык&shy;лю&shy;ча&shy;те&shy;лей на&shy;пря&shy;же&shy;нием 35&nbsp;кВ',
    '20 Испытание воздушных выклю&shy;чателей напряжением до&nbsp;35&nbsp;кВ',
    '20 Ис&shy;пы&shy;та&shy;ние воз&shy;душ&shy;ных вык&shy;лю&shy;ча&shy;те&shy;лей на&shy;пря&shy;же&shy;ни&shy;ем до 35&nbsp;кВ',
    '20 Испытание вакуумных выключателей напряжением до&nbsp;35&nbsp;кВ',
    '20 Ис&shy;пы&shy;та&shy;ние ваку&shy;ум&shy;ных вык&shy;лю&shy;ча&shy;те&shy;лей на&shy;пря&shy;же&shy;ни&shy;ем до 35&nbsp;кВ',
    '20 Испытание выклю&shy;чателей нагрузки напряжением до&nbsp;35&nbsp;кВ',
    '20 Ис&shy;пы&shy;та&shy;ние вык&shy;лю&shy;ча&shy;те&shy;лей на&shy;груз&shy;ки на&shy;пря&shy;же&shy;ни&shy;ем до 35&nbsp;кВ',
    '20 Испытание разъеди&shy;нителей, короткоза&shy;мыкателей и отделителей напряжением до&nbsp;35&nbsp;кВ',
    '20 Ис&shy;пы&shy;та&shy;ние разъе&shy;ди&shy;ни&shy;те&shy;лей, ко&shy;рот&shy;ко&shy;за&shy;мы&shy;ка&shy;те&shy;лей и от&shy;де&shy;ли&shy;те&shy;лей на&shy;пря&shy;же&shy;ни&shy;ем до 35&nbsp;кВ',
    '20 Испытание КРУ и КРУН напряжением до&nbsp;35&nbsp;кВ',
    '20 Ис&shy;пы&shy;та&shy;ние КРУ и КРУН на&shy;пря&shy;же&shy;ни&shy;ем до 35&nbsp;кВ',
    '20 Испытание комплектных токопро&shy;водов (шинопро&shy;водов) напряжением до&nbsp;35&nbsp;кВ',
    '20 Ис&shy;пы&shy;та&shy;ние комп&shy;лект&shy;ных то&shy;ко&shy;про&shy;во&shy;дов (ши&shy;но&shy;про&shy;во&shy;дов) на&shy;пря&shy;же&shy;ни&shy;ем 35&nbsp;кВ',
    '20 Испытание сборных и соедини&shy;тельных шин напряжением до&nbsp;35 кВ',
    '20 Ис&shy;пы&shy;та&shy;ние сбор&shy;ных и со&shy;еди&shy;ни&shy;тель&shy;ных шин на&shy;пря&shy;же&shy;ни&shy;ем до 35&nbsp;кВ',
    '20 Испытание подвесных и опорных изоляторов напряжением до&nbsp;35&nbsp;кВ',
    '20 Ис&shy;пы&shy;та&shy;ние под&shy;вес&shy;ных и опор&shy;ных изо&shy;ля&shy;то&shy;ров на&shy;пря&shy;же&shy;ни&shy;ем 35&nbsp;кВ',
    '20 Испытание сухих токо&shy;ограничи&shy;вающих реакторов напряжением до&nbsp;35&nbsp;кВ',
    '20 Ис&shy;пы&shy;та&shy;ние су&shy;хих токо&shy;огра&shy;ни&shy;чи&shy;ваю&shy;щих реак&shy;то&shy;ров на&shy;пря&shy;же&shy;ни&shy;ем до 35&nbsp;кВ',
    '20 Испытание вентильных разрядников и ограничителей перенапря&shy;жений напряжением до&nbsp;35&nbsp;кВ',
    '20 Ис&shy;пы&shy;та&shy;ние вен&shy;тиль&shy;ных раз&shy;ряд&shy;ни&shy;ков и огра&shy;ни&shy;чи&shy;те&shy;лей пе&shy;ре&shy;напря&shy;же&shy;ний на&shy;пря&shy;же&shy;ни&shy;ем до 35&nbsp;кВ',
    '20 Испытание трубчатых разрядников напряжением до&nbsp;35&nbsp;кВ',
    '20 Ис&shy;пы&shy;та&shy;ние труб&shy;ча&shy;тых раз&shy;ряд&shy;ни&shy;ков на&shy;пря&shy;же&shy;ни&shy;ем до 35&nbsp;кВ',
    '20 Испытание предохранителей, предохра&shy;нителей&hyphen;разъеди&shy;нителей напряжением выше&nbsp;1&nbsp;кВ',
    '20 Ис&shy;пы&shy;та&shy;ние пре&shy;до&shy;хра&shy;ни&shy;те&shy;лей, пре&shy;до&shy;хра&shy;ни&shy;те&shy;лей&hyphen;разъе&shy;ди&shy;ни&shy;те&shy;лей на&shy;пря&shy;же&shy;ни&shy;ем вы&shy;ше&nbsp;1&nbsp;кВ',
    '20 Испытание вводов и проходных изоляторов напряжением до&nbsp;35&nbsp;кВ',
    '20 Ис&shy;пы&shy;та&shy;ние вво&shy;дов и про&shy;ход&shy;ных изо&shy;ля&shy;то&shy;ров на&shy;пря&shy;же&shy;ни&shy;ем до 35&nbsp;кВ',
    '20 Испытание силовых кабельных линий напряжением до&nbsp;20&nbsp;кВ',
    '20 Ис&shy;пы&shy;та&shy;ние сило&shy;вых ка&shy;бель&shy;ных ли&shy;ний на&shy;пря&shy;же&shy;ни&shy;ем до 20&nbsp;кВ',
    '20 Испытания воздушных ЛЭП напряжением выше&nbsp;1кВ',
    '20 Ис&shy;пы&shy;та&shy;ния воз&shy;душ&shy;ных ЛЭП на&shy;пря&shy;же&shy;ни&shy;ем вы&shy;ше&nbsp;1кВ'
]

export default base20;