let student = [hina, mina, hiba, iqra, kina, pina, jiya,moo, too, mano, bibigulana, shameeerkhan, gulsangabibi, ajabkhan, myheartbeat, anno, anmol, adeeba, laleen, iqrakhan, gulbibikhan, khanokhan]
 let houses= []
 for (const student of student) {
    if (student.length < 5) {
        houses.push("Hawale")
        
    }
   else if (student.length < 8) {
        houses.push("Bngla")
        
    }
    else if (student.length < 9) {
        houses.push("Simple house")
        
    }
    else if (student.length==3) {
        houses.push("Kacha")
        
    }
 }
   console.log(houses)