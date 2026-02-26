Sarcinile date din Lucru in clasa (Sarcina 3):

1. Creează o componentă cu un număr pe ecran și două butoane: "Adaugă" și
"Scade". Când dai click pe ele, numărul trebuie să se actualizeze cu +1 sau -1.
2. Creează o componentă care afișează un paragraf de text și un buton
"Ascunde/Arată Text". La fiecare click, textul trebuie să dispară sau să reapară
(folosind randarea condiționată).
3. Creează un pătrat colorat (un div cu lățime/înălțime) și un buton. Componenta va
avea un state cu o listă de 3-4 culori (ex: roșu, albastru, verde). La click pe buton,
pătratul își va schimba culoarea la următoarea din listă. La sfârșit se ia de la
început.
4. Folosește un array de 3 link-uri de imagini direct în cod. Creează butoanele
"Înapoi" și "Înainte". Când dai click, schimbi indexul imaginii curente în state,
asigurându-te că nu treci de limitele array-ului (dacă ești la ultima, "Înainte" ori
dispare, ori te întoarce la prima).
5. Creează o componentă care afișează valoarea curentă a unui zar (un număr de la 1
la 6, setat inițial pe 1). Adaugă un buton cu textul "Aruncă zarul". La evenimentul
onClick , folosește o funcție cu Math.random() pentru a genera un număr întreg
nou între 1 și 6, apoi actualizează state-ul cu acest număr
6. Creează o componentă principală „Televizor” care reține numărul canalului curent
și îl afișează pe ecran. Pe lângă text, televizorul va afișa o componentă separată
numită „Telecomanda”, care conține doar două butoane: Următorul și Precedentul.
Televizorul va oferi telecomenzii funcțiile necesare pentru a schimba canalul,
astfel încât, la apăsarea butoanelor, numărul de pe televizor să se actualizeze.
7. Fă o pagină de magazin care afișează sus mesajul „Ai X produse în coș”. Pe
această pagină, afișează de 3 ori o componentă separată numită „Produs” (de
exemplu, pentru mere, pere și banane). Fiecare produs va avea propriul buton de
Adaugă. Când dai click pe butonul oricărui produs individual, numărul total de
produse din coșul afișat sus trebuie să crească.
8. Creează un sistem care gestionează voturile pentru două tabere (ex: Câini vs.
Pisici) într-un singur loc. Pe ecran, vei afișa două componente independente, câte
una pentru fiecare candidat. Fiecare componentă de candidat va randa numele
său, numărul actual de voturi și un buton Votează. Apăsarea butonului din
interiorul candidatului trebuie să transmită informația în sus, astfel încât sistemul
central să înregistreze votul corect.
9. Creează un meniu cu 3 tab-uri. O componentă centrală va ține minte care este
tab-ul activ în acel moment și va afișa doar textul corespunzător acestuia. Cele 3
butoane de navigare de deasupra textului sunt componente separate..Când dai
click pe un buton, el va semnala componentei centrale să schimbe tab-ul activ. Ca
bonus vizual, butonul activ ar trebui să se coloreze diferit.
10. Ai o listă predefinită de 3 sau 4 activități (un array de string-uri). Construiește
interfața mapând acest array și folosind o componentă de tip „Task” pentru fiecare
element. Fiecare astfel de componentă va randa textul activității și un buton de
Șterge. Când dai click pe butonul unui task, acesta trebuie să „anunțe” lista
principală ce element a fost apăsat, pentru ca lista să îl șteargă din array și să se
actualizeze pe ecran.
