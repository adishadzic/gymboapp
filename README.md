# Gymbo 

# Naziv aplikacije: 
Gymbo

# Sastav tima: 
Alma Smajić, Adis Hadžić, Mihael Cukon

# Kolegij: 
Programsko inženjerstvo (http://ntankovic.unipu.hr/pi)
Fakultet informatike u Puli (https://fipu.unipu.hr/)

# Mentori: 
doc. dr. sc. Nikola Tanković (http://ntankovic.unipu.hr/) i Toni Starčić, univ. bacc. inf.

# Kratki opis funkcionalnosti:
Ciljana skupina kojoj je Gymbo namijenjen primarno obuhvaća studente IT-a i ostale koji većinu vremena provedu u sjedilačkom načinu života. Za njima slijede svi koji žele pametno uložiti vrijeme u karanteni, ali zbog manjka znanja žele kupiti personalizirani plan treninga. Ideja aplikacije je ponuda plana treninga koji se slaže sa željama, mogućnostima (podrazumijeva fizičku spremnost i aktivnost na 3 razine – Beginner, Intermediate, Advanced) i ciljevima (ovisno o tome želi li korisnik održati zdrav način života, izgubiti na masi ili dodati mišićnu masu). 
Nakon registracije korisnik ispunjava parametre (uključuje godine, tjelesnu visinu i masu te prethodno spomenute mogućnosti i ciljeve) pomoću kojih softver dodjeljuje plan koji mu najviše odgovara. 
Naknadno (ukoliko je prijavljen) korisnik može mijenjati i dodavati preference u postavkama svog accounta. Primjerice: može izabrati novu razinu aktivnosti – ovisno o napretku/nazadovanju i sl.
Nadalje, web aplikacija će sadržavati i Webshopping - gdje korisnici mogu naknadno naručiti od sportske opreme do cool gadgeta koji im mogu olakšati proces treninga. Ostale funkcionalnosti aplikacije:
           
           -mogućnost resetiranja lozinke (Edit profile)
           -dijagrami za praćenje napretka (Weekly report na dashboardu)
           -mogućnost uploadanja fotografija (Before & After)
           -računanje BMI-a (indeksa tjelesne mase)
           -toast notification prije treninga (timer postavljen na 6PM)
           -webshopping (omogućava naručivanje sportske opreme i gadgeta); s vremenom i sustav rewardsa koji se mogu iskoristiti za popust pri kupovini

# Link na javni prototip: 
https://www.figma.com/file/kUk7px1A5A6TjWzzWldV35/Gymbo?node-id=0%3A1

# Zaduženja:
 
 Adis: Home, Choose (carousel), Dashboard (Workout + Plan cards), Password reset, E-mail verification, dohvat imena na dashboardu (1/2), Profile picture upload (Edit profile), odrada treninga + snimanje istih, promo video o aplikaciji
 
 Mihael: Firebase (Registration, Login, Upload pictures - before & after; croppa), Choose workout cards (za svaku ciljanu skupinu i level), pomoćno snimanje vježbi
 
 Alma: Modal za Parameters, viewovi za svaki trening ponuđen na Dashboard > Workout card, BMI kalkulator, toast alert (za tempirani početak treninga), Firebase - dohvat imena na dashboardu (2/2), izrada webshoppinga, odrada treninga + snimanje i uređivanje istih (upload na YT kanal), dokumentacija

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
