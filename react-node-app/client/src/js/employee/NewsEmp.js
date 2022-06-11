import { Link } from 'react-router-dom';
import '../../css/student/homeSt.css'
import '../../css/student/newsSt.css'
import '../../css/employee/newsEmp.css'
import { useNews } from '../DataProvider'
// import new1 from '../../images/new1.jpg';
// import new2 from '../../images/new2.jpg';
// import new3 from '../../images/new3.jpg';

// let news = [
//     {
//         id: 1,
//         title: 'برعاية فخامة رئيس الجمهورية: جامعة حضرموت تحتفي بتكريم أوائل الخريجين والحائزين على مرتبة الشرف من مختلف كليات الجامعة للعام الجامعي 2020 – 2021 م',
//         body: 'نظمت جامعة حضرموت بقاعة الفقيد علي هود باعباد بديوان رئاسة الجامعة حفل التخرج السنوي لتكريم أوائل الخريجين والحائزين على مرتبة الشرف في جميع التخصصات بكليات الجامعة المختلفة، وذلك برعاية كريمة من فخامة الأخ المشير عبدربه منصور هادي رئيس الجمهورية.',
//         date: '10 مارس 2022',
//         image: new1
//     },
//     {
//         id: 2,
//         title: 'برئاسة رئيس الجامعة: اجتماع رؤساء لجان أسبوع البحث العلمي الثاني',
//         body: 'عقدت اللجنة العليا لأسبوع البحث العلمي الثاني بجامعة حضرموت صباح اليوم اجتماعها الثالث برئاسة الأستاذ الدكتور محمد سعيد خنبش رئيس الجامعة، وبحضور نواب رئيس الجامعة، ورؤساء اللجان الخاصة. ناقش الاجتماع الاستعدادات النهائية لانطلاق فعاليات أسبوع البحث العلمي الثاني بجامعة حضرموت الثلاثاء المقبل 15مارس بحفل الافتتاح الذي بحضور السلطة المحلية بحضرموت وعدد من قيادات الجامعة وعمداء الكليات ونوابهم وروساء الأقسام العلمية ورؤساء المراكز العلمية والباحثين والطلاب.',
//         date: '10 مارس 2022',
//         image: new2
//     },
//     {
//         id: 3,
//         title: 'نحو شراكة فاعلة بين الجامعتين: لقاء مهم عبر تقنية الزوم بين رئيس جامعة حضرموت ونائب رئيس جامعة بتروناس تكنولوجي الماليزية',
//         body: 'ترأس الأستاذ الدكتور محمد سعيد خنبش رئيس جامعة حضرموت صباح هذا اليوم الموافق ٨ مارس العام ٢٠٢٢م، والأستاذ الدكتور إبراهيم عبدالمطلب نائب رئيس جامعة بتروناس تكنولوجي الماليزية، اللقاء المهم والجامع لأعمال اللجان المشتركة بين الجامعتين، عبر تقنية الزوم. وقد تمخض اللقاء عن جُملة من البنود والتوصيات تنفيذًا للاتفاقية المبرمة بين الجامعتين.',
//         date: '9 مارس 2022',
//         image: new3
//     },
// {
//         id: 4,
//         title: 'برعاية فخامة رئيس الجمهورية: جامعة حضرموت تحتفي بتكريم أوائل الخريجين والحائزين على مرتبة الشرف من مختلف كليات الجامعة للعام الجامعي 2020 – 2021 م',
//         body: 'نظمت جامعة حضرموت بقاعة الفقيد علي هود باعباد بديوان رئاسة الجامعة حفل التخرج السنوي لتكريم أوائل الخريجين والحائزين على مرتبة الشرف في جميع التخصصات بكليات الجامعة المختلفة، وذلك برعاية كريمة من فخامة الأخ المشير عبدربه منصور هادي رئيس الجمهورية.',
//         date: '10 مارس 2022',
//         image: new1
//     },
//     {
//         id: 5,
//         title: 'برئاسة رئيس الجامعة: اجتماع رؤساء لجان أسبوع البحث العلمي الثاني',
//         body: 'عقدت اللجنة العليا لأسبوع البحث العلمي الثاني بجامعة حضرموت صباح اليوم اجتماعها الثالث برئاسة الأستاذ الدكتور محمد سعيد خنبش رئيس الجامعة، وبحضور نواب رئيس الجامعة، ورؤساء اللجان الخاصة. ناقش الاجتماع الاستعدادات النهائية لانطلاق فعاليات أسبوع البحث العلمي الثاني بجامعة حضرموت الثلاثاء المقبل 15مارس بحفل الافتتاح الذي بحضور السلطة المحلية بحضرموت وعدد من قيادات الجامعة وعمداء الكليات ونوابهم وروساء الأقسام العلمية ورؤساء المراكز العلمية والباحثين والطلاب.',
//         date: '10 مارس 2022',
//         image: new2
//     },
//     {
//         id: 6,
//         title: 'نحو شراكة فاعلة بين الجامعتين: لقاء مهم عبر تقنية الزوم بين رئيس جامعة حضرموت ونائب رئيس جامعة بتروناس تكنولوجي الماليزية',
//         body: 'ترأس الأستاذ الدكتور محمد سعيد خنبش رئيس جامعة حضرموت صباح هذا اليوم الموافق ٨ مارس العام ٢٠٢٢م، والأستاذ الدكتور إبراهيم عبدالمطلب نائب رئيس جامعة بتروناس تكنولوجي الماليزية، اللقاء المهم والجامع لأعمال اللجان المشتركة بين الجامعتين، عبر تقنية الزوم. وقد تمخض اللقاء عن جُملة من البنود والتوصيات تنفيذًا للاتفاقية المبرمة بين الجامعتين.',
//         date: '9 مارس 2022',
//         image: new3
//     },
// ]

const NewsEmp = () => {
    const news = useNews();
    
    return (
        <section className="news news-page container container-page">
            <header>
                <h2>الأخبار</h2>
                <Link to='/create-new' className="btn">خبر جديد</Link>
            </header>
            <div className="news-container">
                {
                    news.map((e, i, arr) => {
                        return (
                            <article className="new" key={e.id}>
                                <div className="image">
                                    <img src={e.image} alt="" />
                                </div>
                                <section>
                                    <header>
                                        <h3>{e.title.slice(0, 70)}..</h3>
                                    </header>
                                    <p>{e.body.slice(0, 120)}...</p>
                                    <p className="new-date">{e.date}</p>
                                    <Link to={`/new/${e.id}`}>قراءة المزيد</Link>
                                    <div className='delete icons'>
                                        <svg className='delete-icon' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M135.2 17.69C140.6 6.848 151.7 0 163.8 0H284.2C296.3 0 307.4 6.848 312.8 17.69L320 32H416C433.7 32 448 46.33 448 64C448 81.67 433.7 96 416 96H32C14.33 96 0 81.67 0 64C0 46.33 14.33 32 32 32H128L135.2 17.69zM394.8 466.1C393.2 492.3 372.3 512 346.9 512H101.1C75.75 512 54.77 492.3 53.19 466.1L31.1 128H416L394.8 466.1z"/></svg>
                                    </div>
                                </section>
                            </article>
                        );
                    })
                }
            </div>
        </section>
    );
}

export default NewsEmp;