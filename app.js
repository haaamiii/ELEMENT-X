const elements = [
[1,"H","Hydrogen","هیدروژن",1.008,"nonmetal","گازی بسیار سبک و فراوان در جهان؛ در ترکیب آب وجود دارد."],
[2,"He","Helium","هلیم",4.0026,"noble","گازی نجیب و کم‌واکنش که در بالن‌ها و کاربردهای سرمایشی استفاده می‌شود."],
[3,"Li","Lithium","لیتیم",6.94,"metal","فلزی سبک که در باتری‌های قابل شارژ کاربرد دارد."],
[4,"Be","Beryllium","بریلیم",9.0122,"metal","فلزی سبک و سخت؛ گرد و غبار آن سمی است."],
[5,"B","Boron","بور",10.81,"metalloid","شبه‌فلزی که در شیشه‌های مقاوم به گرما و مواد مختلف کاربرد دارد."],
[6,"C","Carbon","کربن",12.011,"nonmetal","عنصر اصلی شیمی آلی و بخش مهمی از موجودات زنده."],
[7,"N","Nitrogen","نیتروژن",14.007,"nonmetal","بخش عمده هوای زمین را تشکیل می‌دهد."],
[8,"O","Oxygen","اکسیژن",15.999,"nonmetal","برای تنفس بسیاری از جانداران ضروری است."],
[9,"F","Fluorine","فلوئور",18.998,"nonmetal","نافلزی بسیار واکنش‌پذیر؛ ترکیبات آن در کاربردهای مختلف استفاده می‌شوند."],
[10,"Ne","Neon","نئون",20.180,"noble","گاز نجیب که در تابلوهای نورانی کاربرد دارد."],
[11,"Na","Sodium","سدیم",22.990,"metal","فلزی واکنش‌پذیر؛ یون سدیم برای عملکرد بدن مهم است."],
[12,"Mg","Magnesium","منیزیم",24.305,"metal","فلزی سبک که در آلیاژها و زیست‌شناسی اهمیت دارد."],
[13,"Al","Aluminium","آلومینیوم",26.982,"metal","فلزی سبک و مقاوم در برابر خوردگی؛ در بسته‌بندی و حمل‌ونقل کاربرد دارد."],
[14,"Si","Silicon","سیلیسیم",28.085,"metalloid","عنصر کلیدی در نیمه‌رساناها و تراشه‌های الکترونیکی."],
[15,"P","Phosphorus","فسفر",30.974,"nonmetal","در DNA، استخوان‌ها و کودهای کشاورزی نقش دارد."],
[16,"S","Sulfur","گوگرد",32.06,"nonmetal","در تولید اسید سولفوریک و بسیاری از ترکیبات صنعتی استفاده می‌شود."],
[17,"Cl","Chlorine","کلر",35.45,"nonmetal","در ضدعفونی آب و تولید مواد شیمیایی کاربرد دارد."],
[18,"Ar","Argon","آرگون",39.948,"noble","گاز نجیب که برای ایجاد محیط بی‌اثر در جوشکاری استفاده می‌شود."],
[19,"K","Potassium","پتاسیم",39.098,"metal","عنصر مهم برای عملکرد عصب و عضله؛ در کودها نیز کاربرد دارد."],
[20,"Ca","Calcium","کلسیم",40.078,"metal","برای استحکام استخوان‌ها و دندان‌ها اهمیت دارد."],
[21,"Sc","Scandium","اسکاندیم",44.956,"metal","فلزی واسطه که در برخی آلیاژهای سبک استفاده می‌شود."],
[22,"Ti","Titanium","تیتانیوم",47.867,"metal","فلزی مقاوم و سبک با کاربرد در هوافضا و ایمپلنت‌ها."],
[23,"V","Vanadium","وانادیم",50.942,"metal","در آلیاژهای فولادی مقاوم کاربرد دارد."],
[24,"Cr","Chromium","کروم",51.996,"metal","برای ساخت فولاد زنگ‌نزن و پوشش‌های مقاوم استفاده می‌شود."],
[25,"Mn","Manganese","منگنز",54.938,"metal","در تولید فولاد و باتری‌ها کاربرد دارد."],
[26,"Fe","Iron","آهن",55.845,"metal","فلزی مهم برای ساخت‌وساز و همچنین بخش مرکزی هموگلوبین."],
[27,"Co","Cobalt","کبالت",58.933,"metal","در آلیاژهای ویژه و بعضی باتری‌ها کاربرد دارد."],
[28,"Ni","Nickel","نیکل",58.693,"metal","در فولاد زنگ‌نزن و آبکاری استفاده می‌شود."],
[29,"Cu","Copper","مس",63.546,"metal","رسانای عالی برق و گرما؛ در سیم‌کشی کاربرد گسترده دارد."],
[30,"Zn","Zinc","روی",65.38,"metal","برای گالوانیزه کردن فولاد و عملکرد طبیعی بدن اهمیت دارد."],
[31,"Ga","Gallium","گالیم",69.723,"metal","فلزی با نقطه ذوب پایین؛ در برخی نیمه‌رساناها استفاده می‌شود."],
[32,"Ge","Germanium","ژرمانیم",72.630,"metalloid","شبه‌فلزی با کاربرد در الکترونیک و اپتیک."],
[33,"As","Arsenic","آرسنیک",74.922,"metalloid","شبه‌فلزی سمی که ترکیبات آن کاربردهای محدود صنعتی دارند."],
[34,"Se","Selenium","سلنیم",78.971,"nonmetal","عنصر کم‌مقدار ضروری؛ مقدار زیاد آن می‌تواند سمی باشد."],
[35,"Br","Bromine","برم",79.904,"nonmetal","نافلزی مایع و واکنش‌پذیر؛ ترکیبات آن کاربرد صنعتی دارند."],
[36,"Kr","Krypton","کریپتون",83.798,"noble","گاز نجیب که در برخی لامپ‌ها و کاربردهای تخصصی استفاده می‌شود."],
[37,"Rb","Rubidium","روبیدیم",85.468,"metal","فلزی بسیار واکنش‌پذیر که در پژوهش‌های علمی کاربرد دارد."],
[38,"Sr","Strontium","استرانسیم",87.62,"metal","برخی ترکیبات آن رنگ قرمز به شعله می‌دهند."],
[39,"Y","Yttrium","ایتریم",88.906,"metal","در فسفرهای نمایشگر و مواد پیشرفته کاربرد دارد."],
[40,"Zr","Zirconium","زیرکونیم",91.224,"metal","فلزی مقاوم در برابر خوردگی؛ در صنایع ویژه کاربرد دارد."],
[41,"Nb","Niobium","نیوبیم",92.906,"metal","در آلیاژهای مستحکم و ابررساناها کاربرد دارد."],
[42,"Mo","Molybdenum","مولیبدن",95.95,"metal","برای افزایش مقاومت حرارتی و مکانیکی آلیاژها استفاده می‌شود."],
[43,"Tc","Technetium","تکنسیم",98,"metal","عنصری پرتوزا که برخی ایزوتوپ‌های آن در تصویربرداری پزشکی استفاده می‌شوند."],
[44,"Ru","Ruthenium","روتنیم",101.07,"metal","فلزی از گروه پلاتین با کاربردهای کاتالیزی."],
[45,"Rh","Rhodium","رودیم",102.906,"metal","فلزی گران‌بها که در مبدل‌های کاتالیستی کاربرد دارد."],
[46,"Pd","Palladium","پالادیم",106.42,"metal","در کاتالیزورها و برخی تجهیزات الکترونیکی استفاده می‌شود."],
[47,"Ag","Silver","نقره",107.868,"metal","رسانای بسیار خوب و فلزی گران‌بها با کاربردهای گوناگون."],
[48,"Cd","Cadmium","کادمیم",112.414,"metal","فلزی سمی که استفاده از آن به‌دلیل خطرات زیست‌محیطی محدود شده است."],
[49,"In","Indium","ایندیم",114.818,"metal","در پوشش‌های رسانای شفاف نمایشگرها استفاده می‌شود."],
[50,"Sn","Tin","قلع",118.710,"metal","در لحیم‌کاری و پوشش محافظ فلزها کاربرد دارد."],
[51,"Sb","Antimony","آنتیموان",121.760,"metalloid","شبه‌فلزی که در برخی آلیاژها و مواد صنعتی استفاده می‌شود."],
[52,"Te","Tellurium","تلوریم",127.60,"metalloid","در بعضی مواد نیمه‌رسانا و فناوری خورشیدی کاربرد دارد."],
[53,"I","Iodine","ید",126.904,"nonmetal","برای ساخت هورمون‌های تیروئید ضروری است."],
[54,"Xe","Xenon","زنون",131.293,"noble","گاز نجیب که در برخی چراغ‌ها و تجهیزات تخصصی کاربرد دارد."],
[55,"Cs","Cesium","سزیم",132.905,"metal","در ساعت‌های اتمی و پژوهش‌های دقیق کاربرد دارد."],
[56,"Ba","Barium","باریم",137.327,"metal","برخی ترکیبات آن در تصویربرداری پزشکی استفاده می‌شوند."],
[57,"La","Lanthanum","لانتان",138.905,"metal","از فلزهای خاکی کمیاب؛ در اپتیک و باتری‌ها کاربرد دارد."],
[58,"Ce","Cerium","سریم",140.116,"metal","در پولیش شیشه و کاتالیزورها استفاده می‌شود."],
[59,"Pr","Praseodymium","پرازئودیمیم",140.908,"metal","در آهنرباها و شیشه‌های ویژه کاربرد دارد."],
[60,"Nd","Neodymium","نئودیمیم",144.242,"metal","برای ساخت آهنرباهای بسیار قوی استفاده می‌شود."],
[61,"Pm","Promethium","پرومتیم",145,"metal","عنصری پرتوزا و کمیاب که کاربردهای تخصصی دارد."],
[62,"Sm","Samarium","ساماریم",150.36,"metal","در آهنرباهای ویژه و کاربردهای هسته‌ای استفاده می‌شود."],
[63,"Eu","Europium","یوروپیم",151.964,"metal","در مواد نورده و نمایشگرها کاربرد دارد."],
[64,"Gd","Gadolinium","گادولینیم",157.25,"metal","در برخی مواد تصویربرداری MRI و مواد مغناطیسی کاربرد دارد."],
[65,"Tb","Terbium","تربیم",158.925,"metal","در مواد نورده و آهنرباهای ویژه استفاده می‌شود."],
[66,"Dy","Dysprosium","دیسپروزیم",162.500,"metal","برای بهبود عملکرد برخی آهنرباها در دمای بالا کاربرد دارد."],
[67,"Ho","Holmium","هولمیم",164.930,"metal","در لیزرها و پژوهش‌های مغناطیسی استفاده می‌شود."],
[68,"Er","Erbium","اربیم",167.259,"metal","در تقویت‌کننده‌های فیبر نوری کاربرد دارد."],
[69,"Tm","Thulium","تولیم",168.934,"metal","فلزی خاکی کمیاب با کاربردهای تخصصی."],
[70,"Yb","Ytterbium","ایتربیم",173.045,"metal","در لیزرها و ساعت‌های اتمی پژوهشی کاربرد دارد."],
[71,"Lu","Lutetium","لوتتیم",174.967,"metal","در برخی آشکارسازهای پزشکی و پژوهش‌ها استفاده می‌شود."],
[72,"Hf","Hafnium","هافنیم",178.49,"metal","در میله‌های کنترل راکتور و فناوری‌های پیشرفته کاربرد دارد."],
[73,"Ta","Tantalum","تانتال",180.948,"metal","فلزی مقاوم که در قطعات الکترونیکی و تجهیزات پزشکی استفاده می‌شود."],
[74,"W","Tungsten","تنگستن",183.84,"metal","نقطه ذوب بسیار بالایی دارد و در ابزارهای مقاوم کاربرد دارد."],
[75,"Re","Rhenium","رنیم",186.207,"metal","در آلیاژهای مقاوم به گرما و صنایع هوافضا کاربرد دارد."],
[76,"Os","Osmium","اسمیم",190.23,"metal","فلزی بسیار چگال و کمیاب با کاربردهای تخصصی."],
[77,"Ir","Iridium","ایریدیم",192.217,"metal","فلزی مقاوم در برابر خوردگی و دارای کاربردهای صنعتی ویژه."],
[78,"Pt","Platinum","پلاتین",195.084,"metal","فلزی گران‌بها با کاربرد در کاتالیزورها و تجهیزات آزمایشگاهی."],
[79,"Au","Gold","طلا",196.967,"metal","فلزی گران‌بها با رسانایی خوب و مقاومت در برابر خوردگی."],
[80,"Hg","Mercury","جیوه",200.592,"metal","فلزی مایع و سمی؛ تماس با آن باید به‌شدت محدود شود."],
[81,"Tl","Thallium","تالیم",204.38,"metal","فلزی بسیار سمی که کاربردهای آن محدود و تخصصی است."],
[82,"Pb","Lead","سرب",207.2,"metal","فلزی سمی که در باتری‌های سربی و محافظ پرتویی کاربرد دارد."],
[83,"Bi","Bismuth","بیسموت",208.980,"metal","فلزی سنگین که در آلیاژهای کم‌ذوب و برخی داروها استفاده می‌شود."],
[84,"Po","Polonium","پولونیم",209,"metalloid","عنصری بسیار پرتوزا و خطرناک."],
[85,"At","Astatine","استاتین",210,"metalloid","عنصری بسیار کمیاب و پرتوزا."],
[86,"Rn","Radon","رادون",222,"noble","گاز پرتوزا که تجمع آن در ساختمان‌ها خطر سلامت دارد."],
[87,"Fr","Francium","فرانسیم",223,"metal","عنصری بسیار کمیاب و پرتوزا."],
[88,"Ra","Radium","رادیم",226,"metal","عنصری پرتوزا که تماس با آن خطرناک است."],
[89,"Ac","Actinium","اکتینیم",227,"metal","عنصری پرتوزا که در پژوهش‌های هسته‌ای کاربرد دارد."],
[90,"Th","Thorium","توریم",232.038,"metal","عنصری پرتوزا که در پژوهش‌های انرژی هسته‌ای بررسی می‌شود."],
[91,"Pa","Protactinium","پروتاکتینیم",231.036,"metal","عنصری پرتوزا و بسیار کمیاب."],
[92,"U","Uranium","اورانیم",238.029,"metal","عنصری پرتوزا که در چرخه سوخت هسته‌ای اهمیت دارد."],
[93,"Np","Neptunium","نپتونیم",237,"metal","عنصری مصنوعی/پرتوزا با کاربردهای پژوهشی."],
[94,"Pu","Plutonium","پلوتونیم",244,"metal","عنصری پرتوزا که نیازمند کنترل و حفاظت تخصصی است."],
[95,"Am","Americium","آمریسیم",243,"metal","در برخی آشکارسازهای دود و کاربردهای تخصصی استفاده می‌شود."],
[96,"Cm","Curium","کوریم",247,"metal","عنصری پرتوزا برای پژوهش‌های علمی."],
[97,"Bk","Berkelium","برکلیم",247,"metal","عنصری مصنوعی که تنها در مقادیر بسیار کم تولید می‌شود."],
[98,"Cf","Californium","کالیفرنیم",251,"metal","منبع نوترونی در کاربردهای تخصصی و کنترل‌شده."],
[99,"Es","Einsteinium","اینشتینیم",252,"metal","عنصری مصنوعی و پرتوزا."],
[100,"Fm","Fermium","فرمیم",257,"metal","عنصری مصنوعی که برای پژوهش‌های هسته‌ای بررسی می‌شود."],
[101,"Md","Mendelevium","مندلیفیم",258,"metal","عنصری مصنوعی و بسیار کمیاب."],
[102,"No","Nobelium","نوبلیم",259,"metal","عنصری مصنوعی و پرتوزا."],
[103,"Lr","Lawrencium","لارنسیم",266,"metal","عنصری مصنوعی که اطلاعات آن عمدتاً از پژوهش‌های هسته‌ای به دست می‌آید."],
[104,"Rf","Rutherfordium","رادرفوردیم",267,"metal","عنصری مصنوعی و بسیار ناپایدار."],
[105,"Db","Dubnium","دوبنیم",268,"metal","عنصری مصنوعی و ناپایدار."],
[106,"Sg","Seaborgium","سیبورگیم",269,"metal","عنصری مصنوعی که فقط در آزمایشگاه ساخته شده است."],
[107,"Bh","Bohrium","بوریم",270,"metal","عنصری مصنوعی و بسیار ناپایدار."],
[108,"Hs","Hassium","هاسیم",277,"metal","عنصری مصنوعی و بسیار ناپایدار."],
[109,"Mt","Meitnerium","مایتنریم",278,"metal","عنصری مصنوعی با داده‌های محدود."],
[110,"Ds","Darmstadtium","دارمشتاتیم",281,"metal","عنصری مصنوعی و بسیار ناپایدار."],
[111,"Rg","Roentgenium","رونتگنیم",282,"metal","عنصری مصنوعی و بسیار ناپایدار."],
[112,"Cn","Copernicium","کوپرنیکیوم",285,"metal","عنصری مصنوعی با داده‌های محدود."],
[113,"Nh","Nihonium","نیهونیم",286,"metal","عنصری مصنوعی و بسیار ناپایدار."],
[114,"Fl","Flerovium","فلروویم",289,"metal","عنصری مصنوعی با داده‌های محدود."],
[115,"Mc","Moscovium","مسکوویم",290,"metal","عنصری مصنوعی و بسیار ناپایدار."],
[116,"Lv","Livermorium","لیورموریوم",293,"metal","عنصری مصنوعی و بسیار ناپایدار."],
[117,"Ts","Tennessine","تنسین",294,"nonmetal","عنصری مصنوعی و بسیار ناپایدار."],
[118,"Og","Oganesson","اوگانسون",294,"noble","عنصری مصنوعی و بسیار ناپایدار؛ خواص آن هنوز به‌خوبی شناخته نشده است."]
];
const categoryColors={metal:"#63e6f3",nonmetal:"#75e0b0",noble:"#b19cff",metalloid:"#ffd477"};
const translations={
fa:{eyebrow:"آزمایشگاه یادگیری شیمی",headline:'جهان از <span>عناصر</span> ساخته شده.',intro:"عناصر را کشف کن، ساختار اتم را بشناس و با آزمون‌های کوتاه شیمی را بازی‌وار یاد بگیر.",elements:"عنصر",xp:"امتیاز XP",learned:"عنصر دیده‌شده",tabTable:"جدول تناوبی",tabAtom:"اتم‌شناسی",tabQuiz:"آزمون سریع",explore:"کاوش کن",periodicTitle:"جدول تناوبی",searchPlaceholder:"نام، نماد یا عدد اتمی را جست‌وجو کن…",all:"همه",metals:"فلزها",nonmetals:"نافلزها",noble:"گازهای نجیب",metalloids:"شبه‌فلزها",tableHint:"برای دیدن اطلاعات هر عنصر، روی کارت آن بزن.",visualLearn:"یادگیری تصویری",atomTitle:"داخل یک اتم",atomParts:"سه ذره‌ی مهم",proton:"پروتون:",protonDesc:"بار مثبت؛ در هسته قرار دارد.",neutron:"نوترون:",neutronDesc:"بدون بار؛ در هسته قرار دارد.",electron:"الکترون:",electronDesc:"بار منفی؛ در ناحیه اطراف هسته حضور دارد.",atomNote:"نمایش اتم در این نسخه شماتیک و آموزشی است و مقیاس واقعی را نشان نمی‌دهد.",challenge:"خودت را بسنج",quizTitle:"آزمون سریع",dailyChallenge:"چالش یادگیری",next:"سؤال بعدی ←",footer:"یادگیری شیمی، یک عنصر در هر بار.",close:"بستن",atomicNo:"عدد اتمی",mass:"جرم اتمی تقریبی",category:"دسته",nameEn:"نام انگلیسی",nameFa:"نام فارسی",metal:"فلز",nonmetal:"نافلز",noble:"گاز نجیب",metalloid:"شبه‌فلز",correct:"آفرین! پاسخ درست است؛ ۱۰ امتیاز گرفتی.",wrong:"این پاسخ درست نیست. جواب درست مشخص شده است.",finished:"آزمون تمام شد! برای شروع دوباره روی «شروع دوباره» بزن.",restart:"شروع دوباره",noResults:"عنصری پیدا نشد.",seenToast:"به عناصر دیده‌شده اضافه شد.",installHelp:"برای نصب، منوی مرورگر را باز کن و گزینه Add to Home screen را بزن."},
en:{eyebrow:"CHEMISTRY LEARNING LAB",headline:'The world is made of <span>elements</span>.',intro:"Explore elements, discover atomic structure, and learn chemistry through quick, game-like quizzes.",elements:"elements",xp:"XP points",learned:"elements viewed",tabTable:"Periodic table",tabAtom:"Atomic basics",tabQuiz:"Quick quiz",explore:"EXPLORE",periodicTitle:"Periodic table",searchPlaceholder:"Search by name, symbol, or atomic number…",all:"All",metals:"Metals",nonmetals:"Nonmetals",noble:"Noble gases",metalloids:"Metalloids",tableHint:"Tap an element card to view its details.",visualLearn:"VISUAL LEARNING",atomTitle:"Inside an atom",atomParts:"Three key particles",proton:"Proton:",protonDesc:"Positive charge; located in the nucleus.",neutron:"Neutron:",neutronDesc:"No charge; located in the nucleus.",electron:"Electron:",electronDesc:"Negative charge; found around the nucleus.",atomNote:"This is a schematic learning illustration, not a scale-accurate atom.",challenge:"TEST YOURSELF",quizTitle:"Quick quiz",dailyChallenge:"Learning challenge",next:"Next question →",footer:"Learn chemistry, one element at a time.",close:"Close",atomicNo:"Atomic number",mass:"Approx. atomic mass",category:"Category",nameEn:"English name",nameFa:"Persian name",metal:"Metal",nonmetal:"Nonmetal",noble:"Noble gas",metalloid:"Metalloid",correct:"Great! Correct answer — you earned 10 XP.",wrong:"Not quite. The correct answer is highlighted.",finished:"Quiz complete! Tap Restart to play again.",restart:"Restart",noResults:"No elements found.",seenToast:"Added to viewed elements.",installHelp:"To install, open your browser menu and choose Add to Home screen."}
};
let lang="fa", activeFilter="all", deferredInstall=null, quizIndex=0, quizScore=0, quizAnswered=false;
const $=id=>document.getElementById(id);
const getState=()=>{try{return JSON.parse(localStorage.getItem("elementXState"))||{xp:0,seen:[]}}catch{return{xp:0,seen:[]}}};
const saveState=s=>localStorage.setItem("elementXState",JSON.stringify(s));
const t=k=>translations[lang][k]||k;
function categoryLabel(c){return t(c)}
function renderElements(){
 const q=$("searchInput").value.trim().toLowerCase();
 const state=getState();
 const list=elements.filter(e=>{
   const categoryOk=activeFilter==="all"||e[5]===activeFilter;
   const queryOk=!q||[String(e[0]),e[1].toLowerCase(),e[2].toLowerCase(),e[3]].some(x=>x.toLowerCase().includes(q));
   return categoryOk&&queryOk;
 });
 $("periodicGrid").innerHTML=list.map(e=>`<button class="element-tile ${state.seen.includes(e[0])?'seen':''}" style="--tile-color:${categoryColors[e[5]]}" data-num="${e[0]}" aria-label="${e[3]} ${e[1]}"><span class="num">${e[0]}</span><span class="symbol">${e[1]}</span><span class="ename">${lang==="fa"?e[3]:e[2]}</span><span class="mass">${e[4]}</span></button>`).join("");
 $("resultCount").textContent=`${list.length} ${t("elements")}`;
 $("periodicGrid").querySelectorAll("button").forEach(b=>b.addEventListener("click",()=>showElement(Number(b.dataset.num))));
}
function showElement(n){
 const e=elements.find(x=>x[0]===n);if(!e)return;
 const state=getState();if(!state.seen.includes(n)){state.seen.push(n);saveState(state);updateStats();}
 $("elementDetail").innerHTML=`<div class="detail-top"><div class="detail-symbol" style="--tile-color:${categoryColors[e[5]]}">${e[1]}</div><div class="detail-name"><span class="kicker">${e[0]} · ${categoryLabel(e[5])}</span><h2>${lang==="fa"?e[3]:e[2]}</h2><p>${e[2]} · ${e[3]}</p></div></div><p class="detail-desc">${e[6]}</p><div class="detail-facts"><div class="fact"><span>${t("atomicNo")}</span><b>${e[0]}</b></div><div class="fact"><span>${t("mass")}</span><b>${e[4]}</b></div><div class="fact"><span>${t("nameEn")}</span><b>${e[2]}</b></div><div class="fact"><span>${t("nameFa")}</span><b>${e[3]}</b></div></div>`;
 $("elementDialog").showModal();renderElements();
}
function updateStats(){const s=getState();$("xpCount").textContent=s.xp;$("learnedCount").textContent=s.seen.length;}
function setTab(name){document.querySelectorAll(".tab").forEach(b=>b.classList.toggle("active",b.dataset.tab===name));document.querySelectorAll(".panel").forEach(p=>p.classList.remove("active"));$(name+"Panel").classList.add("active");}
document.querySelectorAll(".tab").forEach(b=>b.addEventListener("click",()=>setTab(b.dataset.tab)));
$("searchInput").addEventListener("input",renderElements);
$("filters").querySelectorAll("button").forEach(b=>b.addEventListener("click",()=>{activeFilter=b.dataset.filter;$("filters").querySelectorAll("button").forEach(x=>x.classList.toggle("active",x===b));renderElements();}));
$("closeDialog").addEventListener("click",()=>$("elementDialog").close());
$("elementDialog").addEventListener("click",e=>{if(e.target===$("elementDialog"))$("elementDialog").close()});
function showToast(msg){$("toast").textContent=msg;$("toast").classList.add("show");setTimeout(()=>$("toast").classList.remove("show"),2500);}
const questions=[
{qFa:"نماد شیمیایی اکسیژن چیست؟",qEn:"What is the chemical symbol for oxygen?",optionsFa:["Ox","O","Og","Om"],optionsEn:["Ox","O","Og","Om"],correct:1},
{qFa:"عدد اتمی کربن چند است؟",qEn:"What is the atomic number of carbon?",optionsFa:["۴","۸","۶","۱۲"],optionsEn:["4","8","6","12"],correct:2},
{qFa:"کدام عنصر یک گاز نجیب است؟",qEn:"Which element is a noble gas?",optionsFa:["سدیم","هلیم","آهن","کربن"],optionsEn:["Sodium","Helium","Iron","Carbon"],correct:1},
{qFa:"نماد شیمیایی طلا کدام است؟",qEn:"What is the chemical symbol for gold?",optionsFa:["Ag","Gd","Go","Au"],optionsEn:["Ag","Gd","Go","Au"],correct:3},
{qFa:"کدام ذره بار منفی دارد؟",qEn:"Which particle has a negative charge?",optionsFa:["پروتون","نوترون","الکترون","هسته"],optionsEn:["Proton","Neutron","Electron","Nucleus"],correct:2}
];
function renderQuestion(){
 quizAnswered=false;const q=questions[quizIndex];
 $("quizProgress").textContent=`${quizIndex+1} / ${questions.length}`;
 $("questionText").textContent=lang==="fa"?q.qFa:q.qEn;
 $("quizFeedback").textContent="";$("nextQuestion").disabled=true;$("nextQuestion").textContent=t("next");
 const options=lang==="fa"?q.optionsFa:q.optionsEn;
 $("answerOptions").innerHTML=options.map((o,i)=>`<button class="answer" data-index="${i}">${o}</button>`).join("");
 $("answerOptions").querySelectorAll("button").forEach(b=>b.addEventListener("click",()=>answerQuestion(Number(b.dataset.index))));
}
function answerQuestion(i){
 if(quizAnswered)return;quizAnswered=true;const q=questions[quizIndex],correct=i===q.correct;
 $("answerOptions").querySelectorAll("button").forEach((b,j)=>{b.disabled=true;if(j===q.correct)b.classList.add("correct");if(j===i&&!correct)b.classList.add("wrong");});
 if(correct){quizScore++;const s=getState();s.xp+=10;saveState(s);updateStats();$("quizFeedback").textContent=t("correct");}
 else $("quizFeedback").textContent=t("wrong");
 $("nextQuestion").disabled=false;
 if(quizIndex===questions.length-1)$("nextQuestion").textContent=t("restart");
}
$("nextQuestion").addEventListener("click",()=>{
 if(!quizAnswered)return;
 if(quizIndex===questions.length-1){quizIndex=0;quizScore=0;renderQuestion();return;}
 quizIndex++;renderQuestion();
});
function applyLanguage(){
 document.documentElement.lang=lang;document.documentElement.dir=lang==="fa"?"rtl":"ltr";
 document.querySelectorAll("[data-i18n]").forEach(el=>{const k=el.dataset.i18n;if(translations[lang][k])el.innerHTML=translations[lang][k]});
 document.querySelectorAll("[data-i18n-placeholder]").forEach(el=>el.placeholder=t(el.dataset.i18nPlaceholder));
 $("langBtn").textContent=lang==="fa"?"EN":"فا";
 document.querySelectorAll(".filter").forEach(b=>b.textContent=t(b.dataset.filter==="all"?"all":b.dataset.filter==="metal"?"metals":b.dataset.filter==="nonmetal"?"nonmetals":b.dataset.filter==="noble"?"noble":"metalloids"));
 renderElements();renderQuestion();updateStats();
}
$("langBtn").addEventListener("click",()=>{lang=lang==="fa"?"en":"fa";applyLanguage();});
window.addEventListener("beforeinstallprompt",e=>{e.preventDefault();deferredInstall=e;$("installBtn").classList.remove("hidden")});
$("installBtn").addEventListener("click",async()=>{if(!deferredInstall){showToast(t("installHelp"));return;}deferredInstall.prompt();await deferredInstall.userChoice;deferredInstall=null;$("installBtn").classList.add("hidden")});
if("serviceWorker" in navigator && location.protocol.startsWith("http"))window.addEventListener("load",()=>navigator.serviceWorker.register("./sw.js").catch(()=>{}));
renderElements();renderQuestion();updateStats();
