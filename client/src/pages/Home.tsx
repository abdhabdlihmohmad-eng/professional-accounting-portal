/**
 * اتجاه التصميم: «معيار هادئ» — صفحة تحريرية عربية تُظهر الانضباط المالي عبر المحاذاة والفراغ والسجل الرأسي.
 * كل قسم هنا يستخدم الأزرق الحِبري والعاجي والنحاس كإشارات ثقة، بعيدًا عن قوالب الشركات العامة.
 */
import { Button } from "@/components/ui/button";
import {
  ArrowLeft,
  BarChart3,
  Check,
  ChevronLeft,
  FileText,
  Landmark,
  Mail,
  Menu,
  ShieldCheck,
  X,
} from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const assets = {
  hero: "/manus-storage/sijil-hero-ledger_127afb81.jpg",
  archive: "/manus-storage/sijil-services-archive_7d908262.jpg",
  process: "/manus-storage/sijil-process-geometry_c65efb1a.jpg",
  insight: "/manus-storage/sijil-insight-detail_1789f0e0.jpg",
  mark: "/manus-storage/sijil-mark_321c326a.png",
};

function scrollToRequest() {
  document.getElementById("request")?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    toast.info("هذه واجهة طلب أولي. اربط وسيلة الإرسال قبل استخدامها فعليًا.");
  };

  return (
    <main className="paper-grain min-h-screen overflow-x-hidden" dir="rtl">
      <header className="relative z-30 bg-[#123B55] text-[#fffdf8]">
        <div className="container-wide flex h-[74px] items-center justify-between">
          <a href="#top" className="flex items-center gap-3" aria-label="العودة إلى بداية الصفحة">
            <img src={assets.mark} alt="علامة سِجل" className="brand-mark" />
            <div className="leading-none">
              <div className="text-xl font-bold tracking-tight">سِجل</div>
              <div className="mt-1 text-[10px] font-semibold tracking-[0.22em] text-[#D8B887]">المحاسبة بوضوح</div>
            </div>
          </a>

          <nav className="hidden items-center gap-7 md:flex" aria-label="التنقل الرئيسي">
            <a href="#services" className="nav-link">الخدمات</a>
            <a href="#method" className="nav-link">منهج العمل</a>
            <a href="#insights" className="nav-link">من منظورنا</a>
            <a href="#request" className="nav-link">تواصل</a>
          </nav>

          <Button onClick={scrollToRequest} className="hidden rounded-none bg-[#D8B887] px-5 text-[#09263A] hover:bg-[#E4C89E] md:inline-flex">
            ابدأ بمراجعة أولية
            <ArrowLeft className="mr-2 h-4 w-4" />
          </Button>

          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center border border-white/20 md:hidden"
            aria-label={menuOpen ? "إغلاق القائمة" : "فتح القائمة"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((value) => !value)}
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {menuOpen && (
          <nav className="container-wide border-t border-white/15 py-4 md:hidden" aria-label="القائمة المحمولة">
            <div className="grid gap-1">
              {[
                ["الخدمات", "#services"],
                ["منهج العمل", "#method"],
                ["من منظورنا", "#insights"],
                ["تواصل", "#request"],
              ].map(([label, href]) => (
                <a key={href} href={href} onClick={() => setMenuOpen(false)} className="py-2 text-sm text-white/80">
                  {label}
                </a>
              ))}
            </div>
          </nav>
        )}
      </header>

      <section id="top" className="relative overflow-hidden bg-[#123B55] pb-16 pt-8 text-[#fffdf8] lg:pb-24">
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#09263A]/70 to-transparent" />
        <div className="container-wide relative grid items-end gap-10 lg:grid-cols-[1.02fr_0.98fr] lg:gap-14">
          <div className="order-2 lg:order-1">
            <div className="float-in rule-label text-[#D8B887]">مكتب محاسبة مهني</div>
            <h1 className="float-in delay-1 mt-6 max-w-[760px] text-5xl font-bold leading-[1.13] tracking-tight sm:text-6xl lg:text-7xl">
              وضوحك المالي،
              <span className="block text-[#D8B887]">يبدأ من سِجل مرتب.</span>
            </h1>
            <p className="float-in delay-2 mt-7 max-w-xl text-lg leading-8 text-[#DCE7E9] sm:text-xl">
              خدمات محاسبية منظمة للشركات التي تريد أن تقرأ أرقامها بثقة، وتتحرك من التقرير إلى القرار دون ضبابية.
            </p>
            <div className="float-in delay-3 mt-9 flex flex-wrap items-center gap-4">
              <Button onClick={scrollToRequest} className="h-12 rounded-none bg-[#D8B887] px-6 text-[#09263A] hover:bg-[#E4C89E]">
                اطلب مراجعة أولية
                <ArrowLeft className="mr-2 h-4 w-4" />
              </Button>
              <a href="#method" className="group inline-flex items-center gap-2 text-sm font-semibold text-white/85 transition-colors hover:text-white">
                كيف نعمل
                <ChevronLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
              </a>
            </div>
          </div>

          <div className="order-1 float-in delay-2 lg:order-2">
            <div className="image-frame aspect-[16/10] shadow-[0_26px_80px_rgba(0,0,0,0.22)]">
              <img src={assets.hero} alt="دفتر محاسبي مرتب وأدوات مراجعة" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#09263A]/45 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 flex items-end justify-between p-5 text-white">
                <span className="text-[10px] font-bold tracking-[0.18em] text-white/70">S/01 · CLARITY</span>
                <span className="display-serif text-lg italic">بين التفاصيل والقرار</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-[#123B55]/10 bg-[#FFFDF8] py-5">
        <div className="container-wide flex flex-wrap items-center justify-between gap-4 text-sm text-[#5C6E79]">
          <div className="flex items-center gap-3"><span className="h-2 w-2 rounded-full bg-[#B68C57]" />سجل واحد، رؤية قابلة للمراجعة.</div>
          <div className="flex items-center gap-6 text-xs font-bold tracking-[0.12em] text-[#123B55]/60"><span>دقة</span><span>امتثال</span><span>وضوح</span></div>
        </div>
      </section>

      <section id="services" className="container-wide py-20 lg:py-28">
        <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:gap-16">
          <div>
            <div className="flex items-center justify-between"><span className="rule-label">مسارات الدعم</span><span className="section-index">01</span></div>
            <h2 className="mt-6 text-4xl font-bold leading-tight tracking-tight sm:text-5xl">عمل محاسبي لا يترك التفاصيل خلفه.</h2>
            <p className="mt-5 max-w-sm text-base leading-8 text-[#5C6E79]">نرتب المسار من الوثائق اليومية إلى القراءة الإدارية، مع خدمة تناسب مرحلة العمل وما يحتاجه القرار فعليًا.</p>
            <div className="mt-9 image-frame aspect-[4/5] max-w-[380px]">
              <img src={assets.archive} alt="مواد محاسبية مرتبة على سطح عاجي" />
            </div>
          </div>

          <div className="self-end border border-[#123B55]/12 bg-[#FFFDF8]">
            <div className="grid md:grid-cols-2">
              <article className="service-card">
                <div className="flex items-start justify-between"><FileText className="h-6 w-6 text-[#B68C57]" /><span className="service-num">01</span></div>
                <h3 className="mt-12 text-xl font-bold">الإقفال والتقارير</h3>
                <p className="mt-3 max-w-xs text-sm leading-7 text-[#5C6E79]">ترتيب الدورة المحاسبية وإخراج تقارير مفهومة تصلح للنقاش التنفيذي.</p>
              </article>
              <article className="service-card">
                <div className="flex items-start justify-between"><ShieldCheck className="h-6 w-6 text-[#B68C57]" /><span className="service-num">02</span></div>
                <h3 className="mt-12 text-xl font-bold">جاهزية المراجعة</h3>
                <p className="mt-3 max-w-xs text-sm leading-7 text-[#5C6E79]">هيكلة المستندات ومراجعة نقاط الالتزام قبل أن تتحول إلى استفسارات متأخرة.</p>
              </article>
              <article className="service-card">
                <div className="flex items-start justify-between"><Landmark className="h-6 w-6 text-[#B68C57]" /><span className="service-num">03</span></div>
                <h3 className="mt-12 text-xl font-bold">ضرائب والتزامات</h3>
                <p className="mt-3 max-w-xs text-sm leading-7 text-[#5C6E79]">متابعة منظمة للالتزامات الدورية ونقاطها التشغيلية ضمن تقويم واضح.</p>
              </article>
              <article className="service-card">
                <div className="flex items-start justify-between"><BarChart3 className="h-6 w-6 text-[#B68C57]" /><span className="service-num">04</span></div>
                <h3 className="mt-12 text-xl font-bold">قراءة إدارية</h3>
                <p className="mt-3 max-w-xs text-sm leading-7 text-[#5C6E79]">ترجمة الإشارات المالية إلى أسئلة عملية تساعدك على تحديد الخطوة التالية.</p>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section id="method" className="bg-[#E8ECE8] py-20 lg:py-28">
        <div className="container-wide grid items-center gap-12 lg:grid-cols-[0.96fr_1.04fr] lg:gap-20">
          <div className="order-2 lg:order-1">
            <div className="flex items-center justify-between"><span className="rule-label">منهج سِجل</span><span className="section-index">02</span></div>
            <h2 className="mt-6 max-w-xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl">كل مرحلة تقود إلى سؤال أوضح.</h2>
            <div className="line-timeline mt-10 grid gap-7">
              {[
                ["نفهم السياق", "نبدأ بقراءة المرحلة، الجهات المعنية، والتحدي الذي يحتاج إلى ترتيب."],
                ["نضبط السجل", "نحدد الوثائق والإيقاع التشغيلي ومسار المتابعة الذي يجعل التفاصيل قابلة للرجوع."],
                ["نحوّل الأرقام", "نضع التلخيص المناسب ليصبح التقرير أداة عمل، لا مجرد مخرج دوري."],
              ].map(([title, description], index) => (
                <div className="relative z-10 grid grid-cols-[2.25rem_1fr] gap-5" key={title}>
                  <span className="timeline-dot">0{index + 1}</span>
                  <div className="pt-1"><h3 className="font-bold">{title}</h3><p className="mt-2 max-w-md text-sm leading-7 text-[#5C6E79]">{description}</p></div>
                </div>
              ))}
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <div className="image-frame aspect-[3/2] shadow-[0_18px_52px_rgba(15,44,60,0.12)]"><img src={assets.process} alt="تركيب هندسي يمثل مسارًا منظمًا للمراجعة" /></div>
            <div className="mt-5 flex items-start gap-4 border-t border-[#123B55]/15 pt-5 text-sm leading-7 text-[#5C6E79]"><span className="stamp shrink-0">سِجل<br />منهجي</span><p>المنهج لا يفرض قالبًا واحدًا على جميع الشركات؛ بل يحافظ على إطار واضح ويترك مساحة لما تتطلبه بيئة عملك.</p></div>
          </div>
        </div>
      </section>

      <section className="bg-[#123B55] py-16 text-[#FFFDF8] lg:py-20">
        <div className="container-wide grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div><div className="rule-label text-[#D8B887]">قاعدة العمل</div><h2 className="mt-5 text-3xl font-bold leading-tight sm:text-4xl">لا نضيف مؤشرات للزينة؛ نرتب ما يحتاجه القرار.</h2></div>
          <div className="grid gap-4 sm:grid-cols-3">
            {["مستندات مرتبة", "حالات قابلة للمتابعة", "قراءة تنفيذية"].map((item, index) => <div className="border-r border-[#D8B887]/45 pr-4 text-sm leading-7 text-[#DCE7E9]" key={item}><span className="mb-2 block text-[#D8B887]">0{index + 1}</span>{item}</div>)}
          </div>
        </div>
      </section>

      <section id="insights" className="container-wide py-20 lg:py-28">
        <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20">
          <div className="image-frame aspect-[3/2] min-h-[320px]"><img src={assets.insight} alt="تفاصيل دفتر منظم وظلال هندسية ناعمة" /></div>
          <div className="flex flex-col justify-center">
            <div className="flex items-center justify-between"><span className="rule-label">من منظورنا</span><span className="section-index">03</span></div>
            <h2 className="mt-6 text-4xl font-bold leading-tight tracking-tight sm:text-5xl">التقرير الجيد لا يجيب فقط، بل يرفع جودة السؤال.</h2>
            <p className="mt-6 text-base leading-8 text-[#5C6E79]">لذلك نصمم القراءة المالية بحيث تُظهر ما يحتاج إلى متابعة، وما يستحق قرارًا، وما يمكن أن ينتظر. الوضوح ليس كثرة صفحات؛ بل ترتيب الأولويات.</p>
            <a href="#request" className="mt-8 inline-flex w-fit items-center gap-2 border-b border-[#B68C57] pb-2 text-sm font-bold text-[#123B55] transition-colors hover:text-[#B68C57]">استكشف مسارًا يناسبك <ArrowLeft className="h-4 w-4" /></a>
          </div>
        </div>
      </section>

      <section id="request" className="bg-[#FFFDF8] py-16 lg:py-24">
        <div className="container-wide ledger-card grid overflow-hidden lg:grid-cols-[0.82fr_1.18fr]">
          <div className="relative bg-[#123B55] p-8 text-[#FFFDF8] sm:p-12">
            <img src={assets.mark} alt="" aria-hidden="true" className="absolute -bottom-7 -left-6 w-44 opacity-15" />
            <div className="relative"><div className="rule-label text-[#D8B887]">الخطوة التالية</div><h2 className="mt-6 text-4xl font-bold leading-tight">لنبدأ من السؤال الذي يهمك الآن.</h2><p className="mt-5 max-w-sm leading-8 text-[#DCE7E9]">شاركنا لمحة عن المرحلة التي تمر بها شركتك. نستخدم الطلب الأولي فقط لتحديد سياق المحادثة المناسبة.</p><div className="mt-12 flex items-center gap-3 text-sm text-white/80"><Mail className="h-4 w-4 text-[#D8B887]" /><span>قناة التواصل تُربط عند الإطلاق</span></div></div>
          </div>
          <form onSubmit={handleFormSubmit} className="bg-[#FFFDF8] p-8 sm:p-12">
            <div className="grid gap-8 sm:grid-cols-2">
              <label className="text-sm font-bold">الاسم<input required className="field-input mt-2 font-normal" placeholder="كيف نعرّف بك؟" /></label>
              <label className="text-sm font-bold">اسم الشركة<input required className="field-input mt-2 font-normal" placeholder="اسم الجهة" /></label>
              <label className="text-sm font-bold">البريد المهني<input type="email" required className="field-input mt-2 font-normal" placeholder="name@company.com" dir="ltr" /></label>
              <label className="text-sm font-bold">نقطة البداية<select required defaultValue="" className="field-input mt-2 font-normal text-[#5C6E79]"><option value="" disabled>اختر مسارًا</option><option value="closing">الإقفال والتقارير</option><option value="audit">جاهزية المراجعة</option><option value="tax">ضرائب والتزامات</option><option value="insight">قراءة إدارية</option></select></label>
            </div>
            <label className="mt-8 block text-sm font-bold">ما الذي تريد أن يتضح؟<textarea className="field-input mt-2 min-h-24 resize-none font-normal" placeholder="اكتب ملاحظة قصيرة عن احتياجك..." /></label>
            <div className="mt-9 flex flex-wrap items-center justify-between gap-5"><p className="max-w-xs text-xs leading-6 text-[#5C6E79]">لن يُرسل النموذج في هذه النسخة الثابتة قبل ربط قناة تواصل حقيقية.</p><Button type="submit" className="h-12 rounded-none bg-[#123B55] px-6 hover:bg-[#09263A]">إرسال الطلب <ArrowLeft className="mr-2 h-4 w-4" /></Button></div>
          </form>
        </div>
      </section>

      <footer className="border-t border-[#123B55]/10 bg-[#F7F4ED] py-8">
        <div className="container-wide flex flex-col justify-between gap-5 text-xs text-[#5C6E79] sm:flex-row sm:items-center"><div className="flex items-center gap-3"><img src={assets.mark} alt="علامة سِجل" className="h-8 w-8" /><span>سِجل — المحاسبة بوضوح.</span></div><div className="flex items-center gap-4"><span>واجهة تعريفية</span><span className="h-1 w-1 rounded-full bg-[#B68C57]" /><span>2026</span></div></div>
      </footer>
    </main>
  );
}

