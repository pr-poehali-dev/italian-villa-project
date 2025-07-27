import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

export default function Index() {
  return (
    <div className="min-h-screen bg-background font-lato">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-sm z-50 border-b border-primary/10">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="font-playfair text-2xl font-bold text-primary">Villa Aragosta</div>
          <div className="hidden md:flex space-x-8 font-medium">
            <a href="#about" className="text-foreground hover:text-primary transition-colors">О площадке</a>
            <a href="#spaces" className="text-foreground hover:text-primary transition-colors">Пространство</a>
            <a href="#prices" className="text-foreground hover:text-primary transition-colors">Цены</a>
            <a href="#catering" className="text-foreground hover:text-primary transition-colors">Питание</a>
            <a href="#contacts" className="text-foreground hover:text-primary transition-colors">Контакты</a>
          </div>
          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium">
            Забронировать
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/img/cfe14282-869c-4538-8641-8539116f70ab.jpg')`,
          }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        <div className="relative z-10 text-center text-white max-w-4xl px-4">
          <div className="animate-fade-in">
            <h1 className="font-playfair text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Villa Aragosta
            </h1>
            <p className="text-xl md:text-2xl mb-4 font-light">
              Добро пожаловать в Villa Aragosta
            </p>
            <p className="text-lg md:text-xl mb-12 opacity-90 italic">
              "Вдохновение Италии в самом сердце Краснодара"
            </p>
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-12 py-4 text-lg font-medium animate-scale-in"
            >
              Забронировать событие
            </Button>
          </div>
        </div>
      </section>

      {/* Info Section with vertical photos */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-6">
                Информация о площадке
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Уникальное старинное двухэтажное здание в итальянском стиле с внутренним залом, 
                большой террасой и кухней.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Идеально для свадеб, гастроужинов, деловых встреч, съёмок и камерных событий.
              </p>
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div className="aspect-[3/4] bg-cover bg-center rounded-lg" style={{backgroundImage: `url('/img/cfe14282-869c-4538-8641-8539116f70ab.jpg')`}}></div>
              <div className="aspect-[3/4] bg-cover bg-center rounded-lg" style={{backgroundImage: `url('/img/c285fc6f-a796-45f1-b471-a200cccb560a.jpg')`}}></div>
              <div className="aspect-[3/4] bg-cover bg-center rounded-lg" style={{backgroundImage: `url('/img/8261b020-149f-4b99-a61e-d3abe7cfc148.jpg')`}}></div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-6">
              О площадке
            </h2>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed italic mb-8">
              Villa Aragosta — вилла вкуса, вина и любви. Легенда гласит, что хозяйка К.А. создала пространство мечты — 
              вдохновлённая Италией, морем, вином и настоящими эмоциями. В центре — уют, закрытость от шума города и уважение к гостю. 
              Это не просто аренда, это приглашение в дом, где вас ждали.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {[
              {
                title: "Отдельно стоящее двухэтажное здание с террасой в итальянском стиле",
                description: "стиль, приватность и атмосфера в центре Краснодара."
              },
              {
                title: "Тосканский внутренний зал, винная стена, деревянная мебель",
                description: "плетёные лавки, камень и зелень — место уже готово к событию."
              },
              {
                title: "В самом центре города",
                description: "легко добраться гостям, подрядчикам и курьерам. При этом — закрытая территория без посторонних."
              },
              {
                title: "Профессиональная команда «Academy» отвечает за гастрономию",
                description: "всё на площадке под ключ, от фуршета до банкета."
              },
              {
                title: "Звук, эксклюзивная мебель, красивая хрустальная посуда",
                description: "оборудованная зона гримёрной, профессиональная кухня, освещение, технические возможности для артистов и диджеев."
              },
              {
                title: "Мы не просто сдаём зал",
                description: "мы вникаем в ваш формат, сопровождаем и делаем красиво. От первого звонка — до финального бокала."
              },
              {
                title: "Свадьбы, деловые встречи, съёмки, лекции, ужины",
                description: "капсульные мероприятия — формат не ограничен."
              }
            ].map((feature, index) => (
              <Card key={index} className="group hover:shadow-lg transition-shadow duration-300 border-primary/10">
                <CardContent className="p-6">
                  <h3 className="font-playfair text-lg font-semibold mb-3 text-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Spaces Section */}
      <section id="spaces" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-6">
              Пространство
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Пространство, которое трансформируется под ваше событие.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="h-64 bg-cover bg-center" style={{backgroundImage: `url('/img/cfe14282-869c-4538-8641-8539116f70ab.jpg')`}}></div>
              <CardContent className="p-6">
                <Badge className="mb-3 bg-primary text-primary-foreground">120 м²</Badge>
                <h3 className="font-playfair text-2xl font-semibold mb-3">Первый этаж</h3>
                <p className="text-muted-foreground mb-4">
                  Банкетный зал с авторским интерьером. Тосканский стиль, винная стена, 
                  деревянная мебель, плетёные лавки.
                </p>
                <Button variant="outline" size="sm">Скачать схему зала</Button>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="h-64 bg-cover bg-center" style={{backgroundImage: `url('/img/cfe14282-869c-4538-8641-8539116f70ab.jpg')`}}></div>
              <CardContent className="p-6">
                <Badge className="mb-3 bg-primary text-primary-foreground">120 м²</Badge>
                <h3 className="font-playfair text-2xl font-semibold mb-3">Второй этаж</h3>
                <p className="text-muted-foreground mb-4">
                  Включает гримерную комнату с балконом, кабинет менеджера площадки 
                  и профессиональную кухню для кейтеринга.
                </p>
                <Button variant="outline" size="sm">Подробнее</Button>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="h-64 bg-cover bg-center" style={{backgroundImage: `url('/img/c285fc6f-a796-45f1-b471-a200cccb560a.jpg')`}}></div>
              <CardContent className="p-6">
                <Badge className="mb-3 bg-primary text-primary-foreground">250 м²</Badge>
                <h3 className="font-playfair text-2xl font-semibold mb-3">Терраса</h3>
                <p className="text-muted-foreground mb-4">
                  Открытое пространство под небом с возможностью проведения 
                  церемоний и банкетов на свежем воздухе.
                </p>
                <Button variant="outline" size="sm">Скачать схему террасы</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="prices" className="py-20 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-6">
              Цены
            </h2>
          </div>

          <div className="max-w-6xl mx-auto">
            <Card className="mb-8 border-primary/20">
              <CardContent className="p-8">
                <h3 className="font-playfair text-2xl font-semibold mb-6 text-center">Условия и правила аренды</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Icon name="Clock" size={20} className="text-primary" />
                      <span>Часы работы: с 08:00 до 23:00</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Icon name="Volume2" size={20} className="text-primary" />
                      <span>Музыка на террасе — до 22:00</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Icon name="Baby" size={20} className="text-primary" />
                      <span>Дети до 3 лет не учитываются в общем количестве</span>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Icon name="Users" size={20} className="text-primary" />
                      <span>За превышение количества гостей — 1000 ₽/чел</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Icon name="UserCheck" size={20} className="text-primary" />
                      <span>Координатор от площадки — обязателен</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-primary/20">
              <CardContent className="p-8">
                <h3 className="font-playfair text-2xl font-semibold mb-6 text-center">Условия бронирования</h3>
                <div className="space-y-4 text-muted-foreground">
                  <p>• Бронирование даты осуществляется при 20-ти % предоплате от полной стоимости аренды площадки</p>
                  <p>• Не менее чем за 7 дней до вашего мероприятия вносится оставшаяся стоимость аренды ПРОСТРАНСТВА</p>
                  <p>• Возврат денежных средств при отмене не менее, чем за 30 дней</p>
                  <p>• При отмене менее, чем за 30 дней, предоплата не возвращается</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Catering Section */}
      <section id="catering" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-6">
              Питание
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              На площадке собственная кухня от кейтеринга «Академия»
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <div className="mb-8">
                <h3 className="font-playfair text-3xl font-semibold mb-6">О кейтеринге</h3>
                <div className="space-y-4 text-muted-foreground">
                  <div className="flex items-center space-x-3">
                    <Icon name="Award" size={20} className="text-primary" />
                    <span>Готовим вкусно с 2007 года</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Icon name="Calendar" size={20} className="text-primary" />
                    <span>Проведено более 3000 мероприятий</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Icon name="Users" size={20} className="text-primary" />
                    <span>Накормили более 300000 гостей</span>
                  </div>
                </div>
                <p className="text-muted-foreground mt-6">
                  На площадке во время мероприятия работает профессиональная команда шеф-поваров, официантов и барменов.
                </p>
              </div>

              <div>
                <h4 className="font-playfair text-2xl font-semibold mb-4">Мы предлагаем:</h4>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-center space-x-3">
                    <Icon name="Sparkles" size={18} className="text-primary" />
                    <span>Красивая сервировка</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Icon name="Snowflake" size={18} className="text-primary" />
                    <span>Оригинальный лед для декора</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Icon name="Utensils" size={18} className="text-primary" />
                    <span>Незаурядная подача еды</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Icon name="Flame" size={18} className="text-primary" />
                    <span>Яркие Food show</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Icon name="Wine" size={18} className="text-primary" />
                    <span>Авторские коктейли</span>
                  </li>
                </ul>
                
                <div className="mt-8">
                  <p className="text-sm text-muted-foreground mb-4">
                    Для просчета меню и уточнения информации:
                  </p>
                  <Button className="bg-green-600 hover:bg-green-700 text-white">
                    <Icon name="MessageCircle" size={18} className="mr-2" />
                    WhatsApp: 8 928 210 00 60
                  </Button>
                </div>
              </div>
            </div>

            <div className="relative">
              <img 
                src="/img/407de33f-607e-4111-971b-b4aa5246fc19.jpg" 
                alt="Официанты" 
                className="rounded-lg shadow-2xl w-full h-96 object-cover mb-4"
              />
            </div>
          </div>

          <div className="relative">
            <img 
              src="/img/75bce03f-09b6-494c-afdc-b2a15f90ccf7.jpg" 
              alt="Сервировка и еда" 
              className="rounded-lg shadow-2xl w-full h-64 object-cover"
            />
          </div>
        </div>
      </section>

      {/* Contacts Section */}
      <section id="contacts" className="py-20 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-6">
              Контакты
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              <Card className="border-primary/20">
                <CardContent className="p-8">
                  <h3 className="font-playfair text-2xl font-semibold mb-6">Villa Aragosta</h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Icon name="MapPin" size={20} className="text-primary" />
                      <span>Краснодар, район центральный Гоголя 49\1</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Icon name="Phone" size={20} className="text-primary" />
                      <span>8 918 242 98 97</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Icon name="Instagram" size={20} className="text-primary" />
                      <span>@villa_aragosta</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Icon name="Calendar" size={20} className="text-primary" />
                      <span>Просмотр по записи</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-primary/20">
                <CardContent className="p-8">
                  <h3 className="font-playfair text-2xl font-semibold mb-6">Быстрое бронирование</h3>
                  <form className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Имя</label>
                      <input 
                        type="text" 
                        className="w-full p-3 border border-primary/20 rounded-md focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none"
                        placeholder="Ваше имя"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Телефон</label>
                      <input 
                        type="tel" 
                        className="w-full p-3 border border-primary/20 rounded-md focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none"
                        placeholder="+7 (___) ___-__-__"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Дата события</label>
                      <input 
                        type="date" 
                        className="w-full p-3 border border-primary/20 rounded-md focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Количество гостей</label>
                      <input 
                        type="number" 
                        className="w-full p-3 border border-primary/20 rounded-md focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none"
                        placeholder="Количество гостей"
                      />
                    </div>
                    <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                      Отправить заявку
                    </Button>
                    <p className="text-xs text-muted-foreground">
                      Нажимая кнопку, вы соглашаетесь с <a href="/privacy" className="text-primary hover:underline">политикой конфиденциальности</a>
                    </p>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="font-playfair text-3xl font-bold mb-4">Villa Aragosta</div>
            <p className="text-primary-foreground/80 mb-6 italic">
              "Вдохновение Италии в самом сердце Краснодара"
            </p>
            <div className="flex justify-center space-x-6">
              <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                <Icon name="Instagram" size={24} />
              </a>
              <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                <Icon name="Phone" size={24} />
              </a>
              <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                <Icon name="MessageCircle" size={24} />
              </a>
            </div>
            <div className="mt-8 pt-8 border-t border-primary-foreground/20 text-sm text-primary-foreground/60">
              <p>© 2024 Villa Aragosta. Все права защищены.</p>
              <p className="mt-2">ИП Мальцева Ксения Андреевна, ИНН 422371973283</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}